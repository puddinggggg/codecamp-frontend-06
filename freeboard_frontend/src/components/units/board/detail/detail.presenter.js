import {
    Wrapper,
    BoardWrapper,
    Header,
    ProfileWrapper,
    Profile,
    Info,
    Writer,
    UploadDate,
    IconWrapper,
    Link,
    Location,
    Body,
    Title,
    Image,
    Contents,
    Youtube,
    LikeWrapper,
    LikeInnerWrapper,
    LikeImg,
    LikeCount,
    DislikeImg,
    DislikeCount,
    BottomWrapper,
    Button,
  } from "./detail.styles";

  export default function BoardDetailUI(props) {
    
    return (
      <Wrapper>
        <BoardWrapper>
          <Header>
            <ProfileWrapper>
              <Profile src="/images/profile.png" />
              <Info>
                <Writer>{props.data?.fetchBoard?.writer}</Writer>
                <UploadDate>Date : {props.data?.fetchBoard?.createdAt.substr(0,10)}</UploadDate>
              </Info>
            </ProfileWrapper>
              <IconWrapper>
                  <Link src="/images/link.png" />
                  <Location src="/images/location.png" />
              </IconWrapper>
          </Header>
          <Body>
            <Title>{props.data?.fetchBoard?.title}</Title>
            <Image src="/images/mainimg.jpg" />
            <Contents>{props.data?.fetchBoard?.contents}</Contents>
            <Youtube>youtube</Youtube>
          <LikeWrapper>
          <LikeInnerWrapper>
            <LikeImg src="/images/like.png" />
            <LikeCount>1234</LikeCount>
          </LikeInnerWrapper>
          <LikeInnerWrapper>
            <DislikeImg src="/images/dislike.png" />
            <DislikeCount>12</DislikeCount>
          </LikeInnerWrapper>
          </LikeWrapper>
          </Body>
        </BoardWrapper>
        <BottomWrapper>
          <Button>목록으로</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </BottomWrapper>
      </Wrapper>
    );
  }