console.log("힘세고 강한 아침 만일 내게 묻는다면 나는 세진");

import { DataSource } from 'typeorm'
import { Board } from './Board.postgres';

// const { ApolloServer, gql } = require('apollo-server'); require 옛날 명령어
import { ApolloServer, gql } from 'apollo-server'

// 1. 타입
// board에서 선언한 type(graphql타입)과 board.postgres(typescript타입)의 타입은 다르다
const typeDefs = gql`
input CreateBoardInput{
    writer:String
    title: String
    contents: String
}

type Board {
    number:Int
    writer:String
    title: String
    contents:String
}

  type Query {
    fetchBoards : [Board]
  }

  type Mutation {
      # createBoard (writer: String, title: String, contents:String):String -연습용(example)
      createBoard (createBoardInput: CreateBoardInput!):String # - 실제사용(backend06)
  }
`;
//  2. API
const resolvers = {
    Query: {
        fetchBoards: async () => {
            // DB접속해서 게시물 가져오기

            const result = await Board.find()

            return result
        }
    },
    Mutation: {
        createBoard: async (_: any, args: any) => {
            // 데이터는 args에 저장됨 context는 http 요청에 대한 정보들

            // DB접속해서 게시물 등록하기

            await Board.insert({
                ...args.createBoardInput,
                // writer: args.createBoardInput.writer,
                // title: args.createBoardInput.title,
                // contents: args.createBoardInput.contents,
            })
            // 수정할때
            // Board.update({writer:"작성자"},{title:"변경할제목"})
            // 삭제할때1 이렇게 하면 아예 데이터가 사라져 문제가 될 수 있다.
            // Board.delete({writer:"작성자"})
            // 삭제할때2 softDelete 를 사용해 따로 정리한다.
            // Board.update({writer:"작성자"},{deletedAt: new Date()})
            return '게시물 등록 완료'
        }
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
    entities: [Board],
    synchronize: true,
    logging: true,
})

// synchronize true 하면 board.postgres.ts와 같게 만들겠다
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