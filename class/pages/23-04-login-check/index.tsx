import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    // 1. 로그인하기
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;

    // 2. 유저정보 받아오기

    // 3. 글로벌스테이트에 저장하기
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken); // refresh token 활용전까지 사용

    // 4. 로그인성공페이지로 이동하기
    alert("로그인성공");
    router.push("23-05-login-check-success");
  };

  return (
    <div>
      이메일:
      <input onChange={onChangeEmail} type="text" />
      <br />
      비밀번호:
      <input onChange={onChangePassword} type="password" />
      <br />
      <button onClick={onClickLogin}> 로그인</button>
    </div>
  );
}
