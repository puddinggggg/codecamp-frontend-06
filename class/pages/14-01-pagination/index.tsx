import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;
export default function StaticRoutedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const onClickPage = (e) => {
    refetch({ page: Number(e.target.id) });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          {/* <MyColumn>
            <input type="checkbox" />
          </MyColumn> */}
          {/* <MyColumn>{el.number}</MyColumn> */}
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}

      {/* 페이지 목록  */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
      {/* 페이지 목록 하드코딩 */}
      {/* {[1, 2, 3].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} */}
      {/* 하드코딩 */}
      {/* <span onClick={onClickPage} id="1">
        1
      </span>
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span> */}
    </div>
  );
}
