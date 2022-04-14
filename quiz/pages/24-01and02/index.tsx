import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface IFormProps {
  writer: string;
  password: string;
  title: string;
  content: string;
}
const Input = styled.input``;
interface IBtnProps {
  isActive: boolean;
}
const Btn = styled.button`
  background-color: ${(props: IBtnProps) => (props.isActive ? "yellow" : "")};
`;
const Errors = styled.div`
  color: red;
  font-size: 8px;
`;
const schema = yup.object({
  writer: yup.string().max(5, "5자이내 입력").required("작성자를 입력"),
  password: yup
    .string()
    .required("비밀번호 입력")
    .max(8, "8자 이내 입력")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,}$/,
      "각각 하나이상의 문자,숫자,특수문자입력"
    ),
  title: yup.string().max(100, "100자 이내 입력").required("제목 입력"),
  contents: yup.string().max(1000, "1000자 이내 입력").required("내용 입력"),
});
export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: IFormProps) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      Writer:
      <Input type="text" {...register("writer")} />
      <br />
      <Errors>{formState.errors.writer?.message}</Errors>
      Password:
      <Input type="password" {...register("password")} />
      <br />
      <Errors>{formState.errors.password?.message}</Errors>
      Title:
      <Input type="text" {...register("title")} />
      <br />
      <Errors>{formState.errors.title?.message}</Errors>
      Contents:
      <Input type="text" {...register("contents")} />
      <br />
      <Errors>{formState.errors.contents?.message}</Errors>
      <Btn isActive={formState.isValid}>Submit</Btn>
    </form>
  );
}
