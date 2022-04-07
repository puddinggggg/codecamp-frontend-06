console.log("힘세고 강한 아침 만일 내게 묻는다면 나는 세진");

import { DataSource } from 'typeorm'
import { Product } from './Product.postgres';

// const { ApolloServer, gql } = require('apollo-server'); require 옛날 명령어
import { ApolloServer, gql } from 'apollo-server'

// 1. 타입

const typeDefs = gql`
scalar Date
input CreateProductInput{
    name:String
    detail: String
    price: Int
}
input UpdateProductInput {
    name:String
    detail: String
    price: Int
}
type DeleteProductDate {
    deletedAt: Date
}
type Product {
    _id:ID
    seller: String
    name: String
    detail:String
    price:Int
}
type Return {
  _id: ID
  number: Int
  message: String
}


  type Query {
    fetchProducts(page:Int) : [Product!]
    fetchProduct(productId:ID) : [Product!]
  }

  type Mutation {
      
      createProduct (seller:String, createProductInput: CreateProductInput!):String
      updateProduct (productId: ID, updateProductInput: UpdateProductInput!):String
      deleteProduct (productId: ID):String
  }
`;
//  2. API
const resolvers = {
    Query: {
        fetchProducts: async () => {
            // DB접속해서 게시물 가져오기

            const result = await Product.find()

            return result
        },
        fetchProduct: async (_: any, args: any) => {
            // const result = await Product.find({ where: { _id: args._id } })
            await Product.
            return result
        }
    },
    Mutation: {
        createProduct: async (_: any, args: any) => {
            // 데이터는 args에 저장됨 context는 http 요청에 대한 정보들

            // DB접속해서 게시물 등록하기
            await Product.insert({
                ...args,
                ...args.createProductInput

            })


            return "상품 등록 완료"
        },
        updateProduct: async (_: any, args: any) => {
            await Product.update(
                args.productId, { ...args.updateProductInput }
            ); return '상품 수정 완료'
        },
        deleteProduct: async (_: any, args: any) => {
            await Product.update(
                args.productId, { deletedAt: new Date() }
            ); return '상품 삭제 완료'
        },


    }

};


const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true
    // cors 항목이 없다면 기본값이 false
    // true 대신 {origin : 'https://aaa.com'} 을 입력하면 해당 사이트에서만 허용
});


const AppDateSource = new DataSource({
    type: "postgres",
    host: "34.64.124.189",
    port: 5028,
    username: "postgres",
    password: "postgres2021",
    database: "postgres",
    entities: [Product],
    synchronize: true,
    logging: true,
})


// logging true 명령을 어떻게 하는지 log를 확인하겠다

AppDateSource.initialize()
    .then(() => {
        console.log("연결성공")
        // backend api 오픈(상시 접속 가능하도록), 리슨
        server.listen(4000).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });
        // 리슨(4000)은 호스트를 4000으로

    }).catch(() => {
        console.log("연결실패")
    })