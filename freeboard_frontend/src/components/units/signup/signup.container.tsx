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
      setPasswordError("??????????????? ??????????????????.");
    } else if (!passwordRule.test(password)) {
      setPasswordError("??????????????? ?????? ????????????, ?????? ?????? 6~12???");
    } else if (password !== passwordCheck) {
      setPasswordError("???????????? ??????????????? ?????? ????????????.");
    } else {
      setPasswordError("");
    }

    if (passwordCheck === "") {
      setPasswordCheckError("??????????????? ??????????????????.");
    } else if (!passwordRule.test(passwordCheck)) {
      setPasswordCheckError("??????????????? ?????? ????????????, ?????? ?????? 6~12???");
    } else if (password !== passwordCheck) {
      setPasswordCheckError("???????????? ??????????????? ?????? ????????????.");
    } else {
      setPasswordCheckError("");
    }
    if (name === "") {
      setNameError("????????? ??????????????????.");
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("?????????????????? ??????????????????.");
    } else if (!emailRule.test(email)) {
      setEmailError("?????????????????? ??????????????????.");
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
        Modal.success({ content: "??????????????? ?????????????????????!" });
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
