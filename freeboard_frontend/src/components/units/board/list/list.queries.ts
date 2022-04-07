import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  
query fetchBoards($page: Int) {
  fetchBoards(page: $page) {
    writer
    title
    contents
    _id
    createdAt
  }
}
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;