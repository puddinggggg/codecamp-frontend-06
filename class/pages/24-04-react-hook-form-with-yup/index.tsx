import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
const Errors = styled.div`
  color: red;
  font-size: 8px;
`;
interface IBtnProps {
  isActive: boolean;
}
const Btn = styled.button`
  background-color: ${(props: IBtnProps) => (props.isActive ? "yellow" : "")};
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 정확하지 않습니다.")
    .required("이메일 주소를 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리 이상 15자리 이하")
    .max(15, "비밀번호는 4자리 이상 15자리 이하")
    .required(" 입력해주세요."),
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
      email: <input type="text" {...register("email")} />
      <Errors>{formState.errors.email?.message}</Errors>
      password:
      <input type="password" {...register("password")} />
      <Errors>{formState.errors.password?.message}</Errors>
      <Btn isActive={formState.isValid}>log in</Btn>
    </form>
  );
}
