import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      writer
      title
      contents
      _id
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
export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [editIndex, setEditIndex] = useState(-1);

  const onClickEdit = (e) => {
    setEditIndex(Number(e.target.id));
  };
  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index !== editIndex ? (
          <MyRow key={el._id}>
            <MyColumn>
              <input type="checkbox" />
            </MyColumn>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button id={index} onClick={onClickEdit}>
              수정
            </button>
          </MyRow>
        ) : (
          <div>수정하기화면</div>
        )
      )}
    </div>
  );
}
