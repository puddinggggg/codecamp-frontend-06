import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import CommentListsUI from "./comment.list.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./comment.list.queries";

export default function CommentLists() {
  const router = useRouter();
  // isOpenDeleteModal 모달 상태 스테이트
  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const [updateModalOn, setUpdateModalOn] = useState(false);
  const [commentInputs, setCommentInputs] = useState(
    id : "",
    password : "",
    contents : ""
  )
  // const [commentID, setCommentID] = useState("");
  // const [commentPassword, setCommentPassword] = useState("");
  // const [commentContents, setCommentContents] = useState("");

  const deleteModalToggle = () => {
    setDeleteModalOn((prev) => !prev);
  };
  // 쿼리에서 댓글 목록 조회 불러오기
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  //  뮤테이션에서 삭제 불러오기
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  // 삭제  //
  async function onClickCommentDelete() {
    console.log(router.query.boardId);
    console.log(router.query.boardCommentId);
    try {
      await deleteBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: commentID,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      setDeleteModalOn(false);
      setCommentID("");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  }

  // 온클릭 모달 상태 변경
  const onClickDeleteModalOpen = (event: MouseEvent<HTMLImageElement>) => {
    deleteModalToggle();
    if (event.target instanceof Element) setCommentID(event.target.id);
  };
  // 모달 인풋에 pw 입력감지
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };
  // 업데이트 모달 onoff
  const updateModalToggle = () => {
    setUpdateModalOn((prev) => !prev);
  };
  // 뮤테이션에서 불러오기
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  // const [updateBoardComment] = useMutation<
  //   Pick<IMutation, "updateBoardComment">,
  //   IMutationUpdateBoardCommentArgs
  // >(UPDATE_BOARD_COMMENT);
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
  };
  // 온클릭 업데이트
  async function onClickCommentUpdate() {
    try {
      await updateBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: commentID,
          updateBoardCommentInput: {
            contents: commentContents,
            rating: rateValue,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setUpdateModalOn(false);
      setCommentID("");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  }

  const onClickUpdateModalOpen = (event: MouseEvent<HTMLImageElement>) => {
    updateModalToggle();
    if (event.target instanceof Element) setCommentID(event.target.id);
  };

  const [rateValue, setRateValue] = useState(0);

  const handleChange = (value: number) => {
    setRateValue(value);
  };
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <CommentListsUI
      data={data}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCommentDelete={onClickCommentDelete}
      onClickCommentUpdate={onClickCommentUpdate}
      deleteModalOn={deleteModalOn}
      updateModalOn={updateModalOn}
      onClickDeleteModalOpen={onClickDeleteModalOpen}
      onClickUpdateModalOpen={onClickUpdateModalOpen}
      deleteModalToggle={deleteModalToggle}
      updateModalToggle={updateModalToggle}
      onLoadMore={onLoadMore}
      handleChange={handleChange}
    />
  );
}
