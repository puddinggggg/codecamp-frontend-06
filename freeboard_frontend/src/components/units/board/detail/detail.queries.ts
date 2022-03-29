import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        _id
        writer
        title
        contents
        createdAt
        youtubeUrl
      }
    }
  `;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

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