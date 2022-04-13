import * as S from "./signup.styles";
import { ISignUpUIProps } from "./signup.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <div>
      <S.OutWrapper>
        <S.Wrapper>
          <S.Head>회원가입</S.Head>
          {/* <S.SignUpWrapper>
            <S.SignUpTxt>아이디</S.SignUpTxt>
            <S.SignUpInput
              type="text"
              placeholder="아이디"
              onChange={props.onChangeId}
              />
            <S.Error>{props.idError}</S.Error> 
               </S.SignUpWrapper> */}
          <S.SignUpWrapper>
            <S.SignUpTxt>이메일주소</S.SignUpTxt>
            <S.SignUpInput
              type="text"
              placeholder="이메일주소"
              onChange={props.onChangeEmail}
            />
            <S.Error>{props.emailError}</S.Error>
          </S.SignUpWrapper>
          <S.SignUpWrapper>
            <S.SignUpTxt>이름</S.SignUpTxt>
            <S.SignUpInput
              type="text"
              placeholder="이름"
              onChange={props.onChangeName}
            />
            <S.Error>{props.nameError}</S.Error>
          </S.SignUpWrapper>
          <S.SignUpWrapper>
            <S.SignUpTxt>비밀번호</S.SignUpTxt>
            <S.SignUpInput
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.SignUpWrapper>
          <S.SignUpWrapper>
            <S.SignUpTxt>비밀번호확인</S.SignUpTxt>
            <S.SignUpInput
              type="password"
              placeholder="비밀번호확인"
              onChange={props.onChangePasswordCheck}
            />
            <S.Error>{props.passwordCheckError}</S.Error>
          </S.SignUpWrapper>

          <S.SubmitBtn isActive={props.isActive} onClick={props.onClickSubmit}>
            가입하기
          </S.SubmitBtn>
        </S.Wrapper>
      </S.OutWrapper>
    </div>
  );
}
