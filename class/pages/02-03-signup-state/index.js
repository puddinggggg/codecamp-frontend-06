import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(event) {
    //   event.target => 태그 전체 <input ......>
    //   event.target.value => 입력한 값 a@a.com
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onClickSignup() {
      //   작동 잘 하나 확인
      console.log(email, password)


      if(email.includes("@")===false){
          setEmailError("이메일 주소를 제대로 입력하세요. @ 없음")
      }
      else{
          alert("회원 가입 완료")
      }
  }

  return (
    <div>
      이메일: <input id="mail" type="text" onChange={onChangeEmail} />
      <br />
      <div>{emailError}</div>
      <br />
      비밀번호: <input
        id="pw"
        type="password"
        onChange={onChangePassword}
      />
      <br />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
