import { gql } from "@apollo/client";
export const CREATE_COMMENT = gql`
mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!
  $boardId: ID!){
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId){
      _id
      createdAt
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
query fetchBoardComments($boardId: ID!){
  fetchBoardComments(boardId: $boardId){
    _id
    writer
    contents
    rating
    createdAt
  }
}
`;