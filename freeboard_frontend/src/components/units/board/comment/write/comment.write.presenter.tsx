import * as S from "./comment.write.styles";
import { Rate } from "antd";
import { ICommentWriteUIProps } from "./comment.write.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <div>
      <S.CommentWrapper>
        <S.CommentTitleWrapper>
          <S.CommentTitleImg src="/images/comment.png" />
          <S.CommentTitleTxt>댓글</S.CommentTitleTxt>
        </S.CommentTitleWrapper>
        <S.CommentInputWrapper>
          <S.CommentInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeCommentWriter}
          />
          <S.CommentInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
          />

          <Rate
            onChange={props.handleChange}
            //  value={props.value}
          />
        </S.CommentInputWrapper>
        <S.CommentContentsWrapper>
          <S.CommentContents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeCommentContents}
            maxLength={100}
          />
          <S.CommentContentsBottomWrapper>
            <S.CommentLengthCount>0/100</S.CommentLengthCount>
            <S.CommentSubmitBtn onClick={props.onClickCommentSubmit}>
              등록하기
            </S.CommentSubmitBtn>
          </S.CommentContentsBottomWrapper>
        </S.CommentContentsWrapper>
      </S.CommentWrapper>
    </div>
  );
}
