import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
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
width: 25%;
`;


export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        //   index는 map이 실행시킨 순서
        <MyRow key={el.number}>
          <MyColumn><input type="checkbox" /></MyColumn>
          <MyColumn>{el.number}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
