import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

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
  const onClickSubmit = async () => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imgUrl = result1.data?.uploadFile.url;
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "푸딩",
          title: "애옹",
          password: "1234",
          contents: "이미지업로드",
          images: [imgUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
    console.log("등록완료");
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
