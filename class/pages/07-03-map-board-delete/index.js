import { useQuery,useMutation ,gql } from "@apollo/client";
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

const DELETE_BOARD = gql`
mutation deleteBoard($number: Int){
  deleteBoard(number: $number){
    message
  }
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
`;

const Column = styled.div`
width: 25%;
`;


export default function MapBoardPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (event) => {
    deleteBoard({
      variables:{number: Number(event.target.id)},
      refetchQueries : [{query: FETCH_BOARDS}]
    })
  }
  return (
    <div>
      {/* Fragment에는 key를 줄 수 있지만 <></>에는 못준다 */}
      {data?.fetchBoards.map((el, index) => (
        //   index는 map이 실행시킨 순서
        //  map에서 index를 key로 주면 밀려올라오며 새로 생겨 문제가 될 수 있음
        <Row key={el.number}>
          <Column><input type="checkbox" /></Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
          
        </Row>
      ))}
    </div>
  );
}
