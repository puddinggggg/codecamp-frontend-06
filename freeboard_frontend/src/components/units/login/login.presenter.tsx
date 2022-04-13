import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <div>
      <S.OutWrapper>
        <S.Wrapper>
          <S.Head>로그인</S.Head>

          <S.LoginWrapper>
            <S.LoginTxt>이메일주소</S.LoginTxt>
            <S.LoginInput
              type="text"
              placeholder="이메일주소"
              onChange={props.onChangeEmail}
            />
          </S.LoginWrapper>

          <S.LoginWrapper>
            <S.LoginTxt>비밀번호</S.LoginTxt>
            <S.LoginInput
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
          </S.LoginWrapper>

          <S.SubmitBtn isActive={props.isActive} onClick={props.onClickLogin}>
            로그인
          </S.SubmitBtn>
        </S.Wrapper>
      </S.OutWrapper>
    </div>
  );
}
