// import {Rate} from "antd"
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./comment.list.queries";
import { ICommentListsProps } from "./comment.list.types";
import CommentListsUI from "./comment.list.presenter"
export default function CommentLists(props: ICommentListsProps) {
  const router = useRouter();

  const { data: commentData } = useQueryPick<IQuery, "fetchBoardComments">,
  IQueryFetchBoardCommentsArgs
>(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  return <CommentListsUI commentData={commentData} />;
}
