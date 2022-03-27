import * as S from "./write.styles";
import { IBoardWriteUIProps } from "./write.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.Head>게시물{props.isEdit ? " 수정" : " 등록"}</S.Head>
        <S.NamePassWrapper>
          <S.NameWrapper>
            <S.MenuTxt>작성자</S.MenuTxt>
            <S.NamePassInput
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.NameWrapper>
          <S.PassWrapper>
            <S.MenuTxt>비밀번호</S.MenuTxt>
            <S.NamePassInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.PassWrapper>
        </S.NamePassWrapper>
        <S.TitleWrapper>
          <S.MenuTxt>제목</S.MenuTxt>
          <S.TitleInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <S.MenuTxt>내용</S.MenuTxt>
          <S.ContentInput
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.ContentWrapper>
        <S.AddressWrapper>
          <S.MenuTxt>주소</S.MenuTxt>
          <S.AddressSearchWrapper>
            <S.AddressInput type="text" placeholder="07250" />
            <S.AddressBtn>우편번호 검색</S.AddressBtn>
          </S.AddressSearchWrapper>
          <S.AddressDetailInput type="text" />
          <S.AddressDetailInput type="text" />
        </S.AddressWrapper>
        <S.YoutubeWrapper>
          <S.MenuTxt>유튜브</S.MenuTxt>
          <S.YoutubeInput type="text" placeholder="링크를 복사해주세요." />
        </S.YoutubeWrapper>
        <S.ImgOutWrapper>
          <S.MenuTxt>사진첨부</S.MenuTxt>
          <S.ImgInnerWrapper>
            <S.Imgs>
              <S.Plus>+</S.Plus>
              <S.ImgTxt>Upload</S.ImgTxt>
            </S.Imgs>
            <S.Imgs>
              <S.Plus>+</S.Plus>
              <S.ImgTxt>Upload</S.ImgTxt>
            </S.Imgs>
            <S.Imgs>
              <S.Plus>+</S.Plus>
              <S.ImgTxt>Upload</S.ImgTxt>
            </S.Imgs>
          </S.ImgInnerWrapper>
        </S.ImgOutWrapper>
        <S.MainSetWrapper>
          <S.MenuTxt>메인 설정</S.MenuTxt>
          <S.MainSetInnerWrapper>
            <S.RadioWrapper>
              <S.Radios type="radio" name="radio-main" id="youtube" />
              유튜브
            </S.RadioWrapper>
            <S.Radios type="radio" name="radio-main" id="image" />
            사진
          </S.MainSetInnerWrapper>
        </S.MainSetWrapper>
        <S.SubmitBtn
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.SubmitBtn>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
