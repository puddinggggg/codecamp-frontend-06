import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import CommentWriteUI from "./comment.write.presenter";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";

import { CREATE_COMMENT, FETCH_BOARD_COMMENTS } from "./comment.write.queries";

export default function CommentWrite() {
  const router = useRouter();

  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");

  const [rateValue, setRateValue] = useState(0);

  const handleChange = (value: number) => {
    setRateValue(value);
  };
  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);
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
            boardId: String(router.query.boardId),
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
  return (
    <div>
      <CommentWriteUI
        onChangeCommentWriter={onChangeCommentWriter}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
        onClickCommentSubmit={onClickCommentSubmit}
        handleChange={handleChange}
        commentContents={commentContents}
        value={rateValue}
      />
    </div>
  );
}
