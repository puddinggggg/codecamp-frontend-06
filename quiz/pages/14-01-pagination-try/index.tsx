import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
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
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;



 const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeadColumn = styled.div`
  width: 50%;
  font-size: 13px;
  font-weight: bold;
  border: 2px solid black;
  text-align: center;
  margin: 2px;
  `;
const MyColumn = styled.div`
text-align: center;
border-bottom: 1px solid gray ;
width: 60%;
`;
const PageArrow = styled.span`
cursor: pointer;
`; 

const Pages = styled.span`
cursor: pointer;
color : ${(props)=>props.current===true? "white" : "black"};
background-color : ${(props)=>props.current!==true? "white" : "black"};
`;


export default function StaticRoutedPage(props) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  
  const onClickPage = (e) => {
    refetch({ page: Number(e.target.id) });
    setCurrent(Number(e.target.id))
// console.log(current)
};
const onClickPrevPage = () => {
  if (startPage === 1) return;
  refetch({ page: startPage - 10 });
  setStartPage((prev) => prev - 10);
  setCurrent(startPage - 10);
  // console.log(activePage)
};
const onClickNextPage = () => {
  if (lastPage - startPage < 10) {
    return;
  }
  refetch({ page: startPage + 10 });
  setStartPage((prev) => prev + 10);
  setCurrent(startPage + 10);
  // console.log(activePage)
  
  };

  return (
    <div><MyRow>
<HeadColumn>작성자</HeadColumn>
<HeadColumn>글 제목</HeadColumn></MyRow>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
        
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}

      <PageArrow onClick={onClickPrevPage}>＜</PageArrow>
     
      {new Array(10).fill(1).filter(index=>Number(index) + Number(startPage) <= Number(lastPage)).map(
        (_, index) =>
          (
            <Pages
              key={index + startPage}
              current={index + startPage===current}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {` `}
              {index + startPage}{` `}
            </Pages>
          )
      )
      }
      {` `}
      <PageArrow onClick={onClickNextPage}>＞</PageArrow>
    </div>
  );
}
