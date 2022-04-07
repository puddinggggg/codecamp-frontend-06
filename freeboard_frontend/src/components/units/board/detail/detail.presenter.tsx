import * as S from "./detail.styles";
import { IBoardWriteUIProps } from "./detail.types";

import { Tooltip } from "antd";

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
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <S.Location src="/images/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Image src="/images/mainimg.jpg" />
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.Youtube>
            <S.YoutubePlayer
              url={String(props.data?.fetchBoard?.youtubeUrl)}
              width={486}
              height={240}
            />
          </S.Youtube>
          <S.LikeWrapper>
            <S.LikeInnerWrapper>
              <S.LikeImg src="/images/like.png" onClick={props.onClickLike} />
              <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
            </S.LikeInnerWrapper>
            <S.LikeInnerWrapper>
              <S.DislikeImg
                src="/images/dislike.png"
                onClick={props.onClickDislike}
              />
              <S.DislikeCount>
                {props.data?.fetchBoard?.dislikeCount}
              </S.DislikeCount>
            </S.LikeInnerWrapper>
          </S.LikeWrapper>
        </S.Body>
      </S.BoardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickBoardEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
