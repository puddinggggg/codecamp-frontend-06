import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./detail.presenter";

import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./detail.queries";
import { IBoardDetailProps } from "./detail.types";

export default function BoardDetail(props: IBoardDetailProps) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");

  const [rateValue, setRateValue] = useState(0);

  const handleChange = (value: number) => {
    setRateValue(value);
  };

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createComment] = useMutation(CREATE_COMMENT);

  const onChangeCommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(event.target.value);
  };
  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };
  const onChangeCommentContents = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentContents(event.target.value);
  };

  const onClickCommentSubmit = async () => {
    if (commentWriter === "") {
      alert("댓글 작성자를 입력해주세요.");
      return;
    }
    if (commentPassword === "") {
      alert("댓글 비밀번호를 입력해주세요.");
      return;
    }
    if (commentContents === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }
    if (
      commentWriter !== "" &&
      commentPassword !== "" &&
      commentContents !== ""
    ) {
      try {
        await createComment({
          variables: {
            boardId: router.query.boardId,
            createBoardCommentInput: {
              writer: commentWriter,
              password: commentPassword,
              contents: commentContents,
              rating: rateValue,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
            { query: FETCH_BOARD_COMMENTS },
          ],
        });
        alert("댓글 등록에 성공하였습니다.");
        setRateValue(0);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };
  // 댓글 id router.query._id로 가져옴
  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    alert("게시글 삭제 완료");
    router.push("/boards");
  };
  const onClickBoardList = () => {
    router.push("/boards");
  };
  const onClickBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickBoardList={onClickBoardList}
      onClickBoardEdit={onClickBoardEdit}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      commentData={commentData}
      onClickCommentSubmit={onClickCommentSubmit}
      handleChange={handleChange}
      value={rateValue}
    />
  );
}
