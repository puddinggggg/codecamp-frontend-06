import Board from "../../src/components/units/14-board-pagination/board";
import Pagination from "../../src/components/units/14-board-pagination/pagination";
import { useQuery, gql } from "@apollo/client";
export default function StaticRoutedPage() {
  const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
      fetchBoards(page: $page) {
        _id
        writer
        title
        contents
      }
    }
  `;
  const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
      fetchBoardsCount
    }
  `;
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  return (
    <div>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
