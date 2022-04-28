import * as S from "./comment.write.styles";

import { ICommentWriteUIProps } from "./comment.write.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickCommentSubmit)}>
      <S.CommentContentsWrapper>
        <S.CommentContents
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...props.register("contents")}
          maxLength={100}
        />
        <S.CommentContentsBottomWrapper>
          <S.CommentLengthCount></S.CommentLengthCount>
          <S.CommentSubmitBtn>문의하기</S.CommentSubmitBtn>
        </S.CommentContentsBottomWrapper>
      </S.CommentContentsWrapper>
    </form>
  );
}
