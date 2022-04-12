import { ChangeEvent, useRef, useState } from "react";

import { useRouter } from "next/router";
import SignUpUI from "./signup.presenter";

import { IWriteBoardProps, IUpdateBoardInput } from "./signup.types";
import { Modal } from "antd";
import { checkFileValidation } from "../../../../commons/libraries/validation";

export default function SignUp(props: IWriteBoardProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailRule = /^\w+@\w+\.\w+$/;

  const passwordRule = /^[A-Za-z0-9]{6,12}$/;

  // const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "" && email !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (password !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const onClickSubmit = async () => {
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else if (!passwordRule.test(password)) {
      setPasswordError("비밀번호는 영어 대소문자, 숫자 포함 6~12자");
    } else {
      setPasswordError("");
    }

    if (email === "") {
      setEmailError("이메일주소를 입력해주세요.");
    } else if (!emailRule.test(email)) {
      setEmailError("이메일주소를 확인해주세요.");
    } else {
      setEmailError("");
    }
    if (password !== "" && email !== "") {
      try {
        //   const result = await

        //   }
        // };

        Modal.success({ content: "로그인하였습니다!" });
        router.push(`/boards/`);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };
  return (
    <SignUpUI
      isActive={isActive}
      passwordError={passwordError}
      emailError={emailError}
      onChangePassword={onChangePassword}
      onChangeEmail={onChangeEmail}
      onClickSubmit={onClickSubmit}
      data={props.data}
      fileRef={fileRef}
    />
  );
}
