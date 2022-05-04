import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input = styled.input`
  width: 100%;
  height: 64px;
  background: #F6F6F6;
border: 1px solid #CCCCCC;
box-sizing: border-box;
border-radius: 5px;
  padding: 14px 16px;
`;

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input03(props: IProps) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue || ""}
      onKeyUp={props.onKeyUp}
    />
  );
}
