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
} from "../../../styles/new";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const NEW_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function New() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(NEW_BOARD);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    } else {
      setWriterError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    } else {
      setTitleError("");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    } else {
      setContentsError;
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        alert("게시물 등록에 성공하였습니다!");
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    // 게시물등록 페이지 여기에 만들기 위에 carousel 제외하고
    // width는 고정하되(1200정도) height는 고정 않기
    <OutWrapper>
      <Wrapper>
        <Head>게시물 등록</Head>
        <NamePassWrapper>
          <NameWrapper>
            <MenuTxt>작성자</MenuTxt>
            <NamePassInput
              type="text"
              placeholder="이름을 적어주세요."
              onChange={onChangeWriter}
            />
            <Error>{writerError}</Error>
          </NameWrapper>
          <PassWrapper>
            <MenuTxt>비밀번호</MenuTxt>
            <NamePassInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
            />
            <Error>{passwordError}</Error>
          </PassWrapper>
        </NamePassWrapper>
        <TitleWrapper>
          <MenuTxt>제목</MenuTxt>
          <TitleInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={onChangeTitle}
          />
          <Error>{titleError}</Error>
        </TitleWrapper>
        <ContentWrapper>
          <MenuTxt>내용</MenuTxt>
          <ContentInput
            type="text"
            placeholder="내용을 작성해주세요."
            onChange={onChangeContents}
          />
          <Error>{contentsError}</Error>
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
              <Radios type="radio" name="main" />
              유튜브
            </RadioWrapper>
            <Radios type="radio" name="main" />
            사진
          </MainSetInnerWrapper>
        </MainSetWrapper>
        <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
      </Wrapper>
    </OutWrapper>
  );
}
