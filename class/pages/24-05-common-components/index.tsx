import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";
const Errors = styled.div`
  color: red;
  font-size: 8px;
`;

// 이 스키마는 컴포넌트 분리할 때 validations.ts 로 분리 가능
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 정확하지 않습니다.")
    .required("이메일 주소를 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(4, "비밀번호는 4자리 이상 15자리 이하")
    .max(15, "비밀번호는 4자리 이상 15자리 이하"),
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    // formState 안에 에러가 담겨있다
    // mode onChange하면 버튼 처음에 안눌러도 에러메세지 바로 뜸
  });

  const onclickSubmit = (data: IFormValues) => {
    console.log(data);
  };
  console.log("rerendered");
  return (
    <form onSubmit={handleSubmit(onclickSubmit)}>
      email: <Input01 type="text" register={register("email")} />
      <Errors>{formState.errors.email?.message}</Errors>
      password:
      <Input01 type="password" register={register("password")} />
      <Errors>{formState.errors.password?.message}</Errors>
      <Button01 isActive={formState.isValid} texts="log in" />
    </form>
  );
}
