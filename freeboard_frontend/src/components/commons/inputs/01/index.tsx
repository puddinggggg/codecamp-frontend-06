import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input = styled.input`
width: 1000px;
height: 56px;
background: #E9E9E9;
border:none;
padding: 21px 19px;
`;

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
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
