import { ChangeEvent, useState } from "react";

import { useRouter } from "next/router";
import SignUpUI from "./signup.presenter";

import { ISignUpUIProps } from "./signup.types";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.queries";
// import { checkFileValidation } from "../../../../commons/libraries/validation";

export default function SignUp(props: ISignUpUIProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const emailRule = /^\w+@\w+\.\w+$/;
  const passwordRule = /^[A-Za-z0-9]{6,12}$/;

  // const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // const fileRef = useRef<HTMLInputElement>(null);

  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
    if (
      event.target.value !== "" &&
      password !== "" &&
      name !== "" &&
      email !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setPasswordCheckError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (
      passwordCheck !== "" &&
      event.target.value !== "" &&
      name !== "" &&
      email !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (
      passwordCheck !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      email !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setNameError("");
    }
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (
      passwordCheck !== "" &&
      password !== "" &&
      name !== "" &&
      event.target.value !== ""
    ) {
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
    } else if (password !== passwordCheck) {
      setPasswordError("입력하신 비밀번호가 서로 다릅니다.");
    } else {
      setPasswordError("");
    }

    if (passwordCheck === "") {
      setPasswordCheckError("비밀번호를 입력해주세요.");
    } else if (!passwordRule.test(passwordCheck)) {
      setPasswordCheckError("비밀번호는 영어 대소문자, 숫자 포함 6~12자");
    } else if (password !== passwordCheck) {
      setPasswordCheckError("입력하신 비밀번호가 서로 다릅니다.");
    } else {
      setPasswordCheckError("");
    }
    if (name === "") {
      setNameError("이름을 입력해주세요.");
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("이메일주소를 입력해주세요.");
    } else if (!emailRule.test(email)) {
      setEmailError("이메일주소를 확인해주세요.");
    } else {
      setEmailError("");
    }
    if (
      passwordCheck !== "" &&
      password !== "" &&
      name !== "" &&
      email !== "" &&
      emailRule.test(email) &&
      passwordRule.test(password) &&
      passwordRule.test(passwordCheck) &&
      password === passwordCheck
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              name,
              password,
            },
          },
        });
        console.log(result);
        Modal.success({ content: "회원가입에 성공하였습니다!" });
        router.push(`/login/`);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };
  return (
    <SignUpUI
      isActive={isActive}
      passwordCheckError={passwordCheckError}
      passwordError={passwordError}
      nameError={nameError}
      emailError={emailError}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onClickSubmit={onClickSubmit}

      // fileRef={fileRef}
    />
  );
}
