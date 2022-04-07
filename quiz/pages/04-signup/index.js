import { useState } from "react";
import {
    OutWrapper,
    Wrapper,
    Title,
  Error,
  InputBox,
  PhoneWrapper,
  PhoneNum,
  TokenWrapper,
  Token,
  TokenTimer,
  TokenButton,
  TokenTimerButton,
  LocationWrapper,
  SelectLocation,
  ErrorLocation,
  GenderWrapper,
  Gender,
  Line,
  ErrorGender,
  SignUp,
} from "../../styles/04-signup/04-signup";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [pwError, setPwError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangePasswordCheck(event) {
    setPasswordCheck(event.target.value);
  }
  function onClickSignup() {
    if (password === "" || passwordCheck === "") {
      setPwError("비밀번호를 입력해주세요.");
    } else if (password === passwordCheck) {
      setPwError("");
    } else {
      setPwError("입력하신 비밀번호가 서로 다릅니다. 확인해주세요.");
    }

    if (email.includes("@") === false) {
      setEmailError("이메일 주소를 제대로 입력하세요. @ 없음");
    } else {
      setEmailError("");
    }
  }

  return (
      <OutWrapper>
    <Wrapper>
      <Title>코드캠프 회원가입</Title>
      <InputBox
        placeholder="이메일을 입력해 주세요."
        type="text"
        onChange={onChangeEmail}
      />
      <br />
      <Error>{emailError}</Error>
      <InputBox type="text" placeholder="이름을 입력해 주세요." /><br/>
      <InputBox
        placeholder="비밀번호를 입력해 주세요."
        
        type="password"
        onChange={onChangePassword}
      />
      <br />
      <InputBox
        placeholder="비밀번호를 다시 입력해 주세요."
        
        type="password"
        onChange={onChangePasswordCheck}
      />
      <br />
      <Error>{pwError}</Error>
      <br />
      <PhoneWrapper>
        <PhoneNum type="text" /> -
        <PhoneNum type="text" /> -
        <PhoneNum type="text" />
      </PhoneWrapper>
      <TokenWrapper>
        <Token>000000</Token>
        <TokenButton disabled>인증번호 전송</TokenButton>
      </TokenWrapper>
      <TokenWrapper>
        <TokenTimer>3:00</TokenTimer>
        <TokenTimerButton disabled>인증 완료</TokenTimerButton>
      </TokenWrapper>
      <LocationWrapper>
        <SelectLocation>
          <option disabled selected>
            지역을 선택하세요.
          </option>
          <option>서울</option>
          <option>경기</option>
          <option>인천</option>
        </SelectLocation>
      </LocationWrapper>
      <ErrorLocation></ErrorLocation>
      <GenderWrapper>
        <Gender>
          <input type="radio" name="gender" /> 여성
        </Gender>
        <div class="gender">
          <input type="radio" name="gender" /> 남성
        </div>
      </GenderWrapper>
      <ErrorGender></ErrorGender>
      <Line />
      <SignUp onClick={onClickSignup}>회원가입</SignUp>
    </Wrapper>
    </OutWrapper>
  );
}
