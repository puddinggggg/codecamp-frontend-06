import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const DeleteRow = styled.div`
  width: 50px;
  border: 1px solid lightgray;
`;
const Row = styled.div`
  width: 200px;
  border: 1px solid lightgray;
`;
const Column = styled.div`
  display: flex;
  text-align: center;
`;
const HeadColumn = styled.div`
  background-color: gray;
  color: white;
  display: flex;
  text-align: center;
`;
export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  // const { data, refetch } = useQuery<
  //   Pick<IQuery, "fetchBoards">,
  //   IQueryFetchBoardsArgs
  // >(FETCH_BOARDS);
  const { data } = useQuery(FETCH_BOARDS);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deleteId = data.deleteBoard;
        // refetchQueries : [{query: FETCH_BOARDS}]
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deleteId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
      // refetchQueries : [{query: FETCH_BOARDS}]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <HeadColumn>
        <Row>작성자</Row>
        <Row>제목</Row>
        <Row>내용</Row>
        <DeleteRow>삭제</DeleteRow>
      </HeadColumn>
      {data?.fetchBoards.map((el) => (
        <Column key={el._id}>
          <Row>{el.writer}</Row>
          <Row>{el.title}</Row>
          <Row>{el.contents}</Row>
          <DeleteRow>
            <button onClick={onClickDelete(el._id)}>Ⅹ</button>
          </DeleteRow>
        </Column>
      ))}
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
