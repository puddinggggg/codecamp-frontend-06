import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import CommentWriteUI from "./comment.write.presenter";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { IFormValues } from "./comment.write.types";
import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  FETCH_USED_ITEM_COMMENTS,
} from "./comment.write.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  contents: yup
    .string()
    .max(100, "100글자 이내로 입력해주세요.")
    .required("문의 내용을 입력해주세요."),
});
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function CommentWrite() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    // 수정할때 defaultvalue가 있어도 빈값처럼 오류뜨는것 3항연산자로 해결
    mode: "onChange",
    // formState 안에 에러가 담겨있다
    // mode onChange하면 버튼 처음에 안눌러도 에러메세지 바로 뜸
  });
  const [createComment] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_COMMENT);

  const onClickCommentSubmit = async (data: IFormValues) => {
    if (data.contents) {
      try {
        await createComment({
          variables: {
            useditemId: String(router.query.useditemId),
            createUseditemQuestionInput: {
              contents: data.contents,
            },
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_COMMENTS,
              variables: { useditemId: router.query.useditemId },
            },
          ],
        });
        alert("문의 등록에 성공하였습니다.");
      } catch (error: any) {
        alert(error.message);
      }
    }
  };
  return (
    <div>
      <CommentWriteUI
        formState={formState}
        register={register}
        onClickCommentSubmit={onClickCommentSubmit}
        handleSubmit={handleSubmit}
        data={props.data}
      />
    </div>
  );
}
