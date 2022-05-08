import { useForm } from "react-hook-form";

interface IFromValues {
  writer?: string;
  title?: string;
  content?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  const onclickSubmit = (data: IFromValues) => {
    console.log(data);
  };
  console.log("rerendered");
  return (
    <form onSubmit={handleSubmit(onclickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      제목:
      <input type="text" {...register("title")} />
      내용:
      <input type="text" {...register("contents")} />
      <button>등록하기</button>
    </form>
  );
}
