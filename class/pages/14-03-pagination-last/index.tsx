import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
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

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;
export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const onClickPage = (e) => {
    refetch({ page: Number(e.target.id) });
    // setNowPage(Number(e.target.id));
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (lastPage - startPage < 10) {
      return;
    }
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  // 현 페이지 바로 다음, 이전 넘어가기
  // const [nowPage, setNowPage] = useState(1);
  // const onClickPrevPage = () => {
  //   refetch({ page: nowPage - 1 });
  //   setNowPage(Number(nowPage - 1));
  // };
  // const onClickNextPage = () => {
  //   refetch({ page: nowPage + 1 });
  //   setNowPage(Number(nowPage + 1));
  // };
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

      <span onClick={onClickPrevPage}>이전</span>
      {/* 페이지 목록  */}
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {` `}
              {index + startPage}
            </span>
          )
      )}
      {` `}
      <span onClick={onClickNextPage}>다음</span>
    </div>
  );
}
