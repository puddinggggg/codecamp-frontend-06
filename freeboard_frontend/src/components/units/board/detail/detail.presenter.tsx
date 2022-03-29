import * as S from "./detail.styles";
import { IBoardWriteUIProps } from "./detail.types";
import ReactPlayer from "react-player";
import { Rate } from "antd";

export default function BoardDetailUI(props: IBoardWriteUIProps) {
  // const commentClickAlert = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(event.currentTarget.id + "님의 글입니다.");
  // };

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
          <S.Youtube>
            <ReactPlayer
              url={String(props.data?.fetchBoard?.youtubeUrl)}
              width={486}
              height={240}
            />
          </S.Youtube>
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

          <Rate onChange={props.handleChange} value={props.value} />
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
    </S.Wrapper>
  );
}
