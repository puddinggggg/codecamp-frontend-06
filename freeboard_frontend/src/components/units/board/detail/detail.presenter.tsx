import * as S from "./detail.styles";
import { IBoardWriteUIProps } from "./detail.types";

export default function BoardDetailUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.Header>
          <S.ProfileWrapper>
            <S.Profile src="/images/profile.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.UploadDate>
                Date : {props.data?.fetchBoard?.createdAt.substr(0, 10)}
              </S.UploadDate>
            </S.Info>
          </S.ProfileWrapper>
          <S.IconWrapper>
            <S.Link src="/images/link.png" />
            <S.Location src="/images/location.png" />
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Image src="/images/mainimg.jpg" />
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.Youtube>youtube</S.Youtube>
          <S.LikeWrapper>
            <S.LikeInnerWrapper>
              <S.LikeImg src="/images/like.png" />
              <S.LikeCount>1234</S.LikeCount>
            </S.LikeInnerWrapper>
            <S.LikeInnerWrapper>
              <S.DislikeImg src="/images/dislike.png" />
              <S.DislikeCount>12</S.DislikeCount>
            </S.LikeInnerWrapper>
          </S.LikeWrapper>
        </S.Body>
      </S.BoardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickBoardEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
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
          <S.CommentInputStar src="/images/grayStar.png" />
          <S.CommentInputStar src="/images/grayStar.png" />
          <S.CommentInputStar src="/images/grayStar.png" />
          <S.CommentInputStar src="/images/grayStar.png" />
          <S.CommentInputStar src="/images/grayStar.png" />
          <S.CommentRate
            type="number"
            placeholder="별점 임시"
            onChange={props.onChangeCommentRating}
          />
        </S.CommentInputWrapper>
        <S.CommentContentsWrapper>
          <S.CommentContents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeCommentContents}
          />
          <S.CommentContentsBottomWrapper>
            <S.CommentLengthCount>0/100</S.CommentLengthCount>
            <S.CommentSubmitBtn onClick={props.onClickCommentSubmit}>
              등록하기
            </S.CommentSubmitBtn>
          </S.CommentContentsBottomWrapper>
        </S.CommentContentsWrapper>
      </S.CommentWrapper>
      <S.CommentLists>
        {props.commentData?.fetchBoardComments.map((el: any) => (
          <S.CommentList key={el._id}>
            <S.Profile src="/images/profile.png" />
            <S.commentListWriter>{el.writer}</S.commentListWriter>
            <S.commentListContents>{el.contents}</S.commentListContents>
            <S.CommentInputStar src="/images/grayStar.png" />
            <S.CommentInputStar src="/images/grayStar.png" />
            <S.CommentInputStar src="/images/grayStar.png" />
            <S.CommentInputStar src="/images/grayStar.png" />
            <S.CommentInputStar src="/images/grayStar.png" />
            <S.CommentUpdateBtn src="/images/commentUpdate.png"></S.CommentUpdateBtn>
            <S.CommentDeleteBtn src="/images/commentDelete.png"></S.CommentDeleteBtn>
            <S.CommentDate>{el.createdAt}</S.CommentDate>
          </S.CommentList>
        ))}
      </S.CommentLists>
    </S.Wrapper>
  );
}
