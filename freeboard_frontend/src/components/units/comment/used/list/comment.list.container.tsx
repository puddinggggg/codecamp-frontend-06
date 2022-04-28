import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";

import CommentListsUI from "./comment.list.presenter";
import {
  FETCH_USED_ITEM_COMMENTS,
  DELETE_USED_ITEM_COMMENT,
} from "./comment.list.queries";
import { IUseditemQuestionListUIProps } from "./comment.list.types";

export default function CommentLists(props: IUseditemQuestionListUIProps) {
  const router = useRouter();
  // isOpenDeleteModal 모달 상태 스테이트

  // 쿼리에서 댓글 목록 조회 불러오기
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_COMMENTS, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  //  뮤테이션에서 삭제 불러오기
  const [deleteUseditemComment] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_COMMENT);
  // 삭제  //
  async function onClickCommentDelete(event) {
    console.log(event.target.id);
    try {
      await deleteUseditemComment({
        variables: {
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_COMMENTS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({ content: "문의글을 삭제하였습니다." });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  }
const onClickUpdate = () => {}
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <CommentListsUI
      data={data}
      onClickCommentDelete={onClickCommentDelete}
      onLoadMore={onLoadMore}
    />
  );
}
