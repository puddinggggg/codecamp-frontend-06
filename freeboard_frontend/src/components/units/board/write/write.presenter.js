import {
    OutWrapper,
    Wrapper,
    Head,
    NamePassWrapper,
    NameWrapper,
    MenuTxt,
    NamePassInput,
    Error,
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
    Radios,
    SubmitBtn,
  } from "./write.styles";

  export default function BoardWriteUI(props){
      return(
        <OutWrapper>
        <Wrapper>
          <Head>게시물 등록</Head>
          <NamePassWrapper>
            <NameWrapper>
              <MenuTxt>작성자</MenuTxt>
              <NamePassInput
                type="text"
                placeholder="이름을 적어주세요."
                onChange={props.onChangeWriter}
              />
              <Error>{props.writerError}</Error>
            </NameWrapper>
            <PassWrapper>
              <MenuTxt>비밀번호</MenuTxt>
              <NamePassInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
              />
              <Error>{props.passwordError}</Error>
            </PassWrapper>
          </NamePassWrapper>
          <TitleWrapper>
            <MenuTxt>제목</MenuTxt>
            <TitleInput
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
            />
            <Error>{props.titleError}</Error>
          </TitleWrapper>
          <ContentWrapper>
            <MenuTxt>내용</MenuTxt>
            <ContentInput
              type="text"
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContents}
            />
            <Error>{props.contentsError}</Error>
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
                <Radios type="radio" name="radio-main" id="youtube"/>
                유튜브
              </RadioWrapper>
              <Radios type="radio" name="radio-main" id="image"/>
              사진
            </MainSetInnerWrapper>
          </MainSetWrapper>
          <SubmitBtn onClick={props.onClickSubmit} isActive={props.isActive}>등록하기</SubmitBtn>
        </Wrapper>
      </OutWrapper>
      )
  }