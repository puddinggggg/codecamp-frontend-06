import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import LoginUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { ILoginUIProps } from "./login.types";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { accessTokenState } from "../../../commons/store";
// import { checkFileValidation } from "../../../../commons/libraries/validation";

export default function Login(props: ILoginUIProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const emailRule = /^\w+@\w+\.\w+$/;
  const passwordRule = /^[A-Za-z0-9]{6,12}$/;

  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "" && email !== "" && emailRule.test(email)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (
      password !== "" &&
      event.target.value !== "" &&
      passwordRule.test(password)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickLogin = async () => {
    if (password === "") {
      Modal.error({ content: "비밀번호를 입력해주세요." });
    } else if (!passwordRule.test(password)) {
      Modal.error({ content: "비밀번호는 영어 대소문자, 숫자 포함 6~12자" });
    }

    if (email === "") {
      Modal.error({ content: "이메일주소를 입력해주세요." });
    } else if (!emailRule.test(email)) {
      Modal.error({ content: "이메일주소를 확인해주세요." });
    }
    if (
      password !== "" &&
      email !== "" &&
      emailRule.test(email) &&
      passwordRule.test(password)
    ) {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        Modal.success({ content: "로그인하였습니다!" });
        router.push(`/boards/`);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };
  return (
    <LoginUI
      isActive={isActive}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
      onClickLogin={onClickLogin}
    />
  );
}
