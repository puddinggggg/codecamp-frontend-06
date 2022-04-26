import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { useForm } from "react-hook-form";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function ImageUploadPreviewPage() {
  const [file1, setFile1] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue } = useForm({
    mode: "onchange",
    // 레지스터로 등록하지 않고 강제로 값을 넣어주는 기능
  });
  const onChangeFile = (event) => {
    const file = event.target.files?.[0]; // 배열에도 optional chaining 가능하다
    if (!file) {
      alert("파일 없음");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target.result);
        setImgUrl(data.target.result);
        setFile1(file);
      }
    };
  };
  const onClickSubmit = async (data) => {
    if (!(data.writer && data.title && data.password && data.contents)) {
      alert("모두 입력해야 함");
      return;
    }
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imgUrl = result1.data?.uploadFile.url;
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            images: [imgUrl],
          },
        },
      });
      alert("등록완료");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        {/* handleSubmit으로 감싸줘야 입력한 데이터들이 넘어온다 */}
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        내용:
        {/* { typeof window !== undefined &&(<ReactQuill onChange={onChangeContents}/>)} */}
        <input type="text" {...register("contents")} />
        <br />
        <input type="file" onChange={onChangeFile} />
        <img src={imgUrl} />
        <button>등록하기</button>
      </form>

      {/* <button onClick={onClickSubmit}>게시글 등록하기</button> */}
    </div>
  );
}
