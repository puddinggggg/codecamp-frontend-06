import * as S from "./comment.list.styles";
import { ICommentListsProps } from "./comment.list.types";
import { Rate } from "antd";

export default function CommentListsUI(props: ICommentListsProps) {
  return (
    <S.CommentLists>
      {props.commentData?.fetchBoardComments.map((el: any) => (
        <S.CommentList
          key={el._id}
          // id={el.writer}
          // onClick={commentClickAlert}
        >
          <S.Profile src="/images/profile.png" />
          <S.commentListWriter>{el.writer}</S.commentListWriter>
          <S.commentListContents>{el.contents}</S.commentListContents>

          <Rate disabled value={el.rating} />
          <S.CommentUpdateBtn src="/images/commentUpdate.png"></S.CommentUpdateBtn>
          <S.CommentDeleteBtn src="/images/commentDelete.png"></S.CommentDeleteBtn>
          <S.CommentDate>{el.createdAt.substr(0, 10)}</S.CommentDate>
        </S.CommentList>
      ))}
    </S.CommentLists>
  );
}
