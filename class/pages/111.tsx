import {DataSource} from "typeorm"
import {ApolloServer, gql} from 'apollo-server'
import { Product} from "./Product.postgres"   
// 타입적어주는곳  
const typeDefs = gql  `input CreateProductInput{      name: String,     detail: String,     price: Int, }  
type Product{     _id:String,     seller: String,     name: String,     detail: String,     price: Int,  }
type fetchProduct{     seller: String,     name: String,     detail: String,     price: Int, }  
type Query {  fetchProduct(_id:String): [Product] fetchProducts: [Product] }   
type Mutation {     createProduct(seller:String, createProductInput: CreateProductInput!):String   }  ` 
const resolvers = {     // 쿼리부분 api 뭘 가져와서 어디에 담아서 어떻게 줄꺼야     Query: {          fetchProducts: async () => {         const result= await Product.find();         return result;              },     fetchProduct: async (_: any, args: any) => {         const result= await Product.find({where:{_id: args._id}});         return result     }     },      // 뮤테이선 api 등록을