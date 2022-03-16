import {
  OutWrapper,
  Wrapper,
  Head,
  NamePassWrapper,
  NameWrapper,
  MenuTxt,
  NamePassInput,
  PassWrapper,
  TitleWrapper,
  TitleInput,
  ContentWrapper,
  ContentInput,
  AddressWrapper,
  AddressSearchWrapper,
  AddressInput,
  AddressBtn,
  AddressDetailInput,
  YoutubeWrapper,
  YoutubeInput,
  ImgOutWrapper,
  ImgInnerWrapper,
  Imgs,
  Plus,
  ImgTxt,
  MainSetWrapper,
  MainSetInnerWrapper,
  RadioWrapper,
  Radios,SubmitBtn
} from "../../../styles/new/new";

export default function New() {
  return (
    // 게시물등록 페이지 여기에 만들기 위에 carousel 제외하고
    // width는 고정하되(1200정도) height는 고정 않기
    <OutWrapper>
    <Wrapper>
      <Head>게시물 등록</Head>
      <NamePassWrapper>
        <NameWrapper>
          <MenuTxt>작성자</MenuTxt>
          <NamePassInput type="text" placeholder="이름을 적어주세요." />
        </NameWrapper>
        <PassWrapper>
          <MenuTxt>비밀번호</MenuTxt>
          <NamePassInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </PassWrapper>
      </NamePassWrapper>
      <TitleWrapper>
        <MenuTxt>제목</MenuTxt>
        <TitleInput type="text" placeholder="제목을 작성해주세요." />
      </TitleWrapper>
      <ContentWrapper>
        <MenuTxt>내용</MenuTxt>
        <ContentInput type="text" placeholder="내용을 작성해주세요." />
      </ContentWrapper>
      <AddressWrapper>
        <MenuTxt>주소</MenuTxt>
        <AddressSearchWrapper>
          <AddressInput type="text" placeholder="07250" />
          <AddressBtn>우편번호 검색</AddressBtn>
        </AddressSearchWrapper>
        <AddressDetailInput type="text" />
        <AddressDetailInput type="text" />
      </AddressWrapper>
      <YoutubeWrapper>
        <MenuTxt>유튜브</MenuTxt>
        <YoutubeInput type="text" placeholder="링크를 복사해주세요." />
      </YoutubeWrapper>
      <ImgOutWrapper>
        <MenuTxt>사진첨부</MenuTxt>
        <ImgInnerWrapper>
          <Imgs>
            <Plus>+</Plus>
            <ImgTxt>Upload</ImgTxt>
          </Imgs>
          <Imgs>
            <Plus>+</Plus>
            <ImgTxt>Upload</ImgTxt>
          </Imgs>
          <Imgs>
            <Plus>+</Plus>
            <ImgTxt>Upload</ImgTxt>
          </Imgs>
        </ImgInnerWrapper>
      </ImgOutWrapper>
      <MainSetWrapper>
        <MenuTxt>메인 설정</MenuTxt>
        <MainSetInnerWrapper>
          <RadioWrapper>
          <Radios type="radio" name="main" checked="checked"/>유튜브
          </RadioWrapper>
          <Radios type="radio" name="main"/>사진
        </MainSetInnerWrapper>
      </MainSetWrapper>
      <SubmitBtn>등록하기</SubmitBtn>
    </Wrapper>
    </OutWrapper>
  );
}
