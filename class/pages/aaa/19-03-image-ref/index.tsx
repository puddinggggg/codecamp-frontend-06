import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkFileValidation } from "../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageValidationPage() {
  const fileRef = useRef(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    const isValid = checkFileValidation(file);
    if (!isValid) {
      return;
    }
    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };
  return (
    <div>
      <div>이미지업로드</div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple
      />
      {/* multiple이 있으면 여러 파일 업로드 가능 없으면 1개만 가능 */}
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
// input type file에 파일확장자를 지정해주는 속성 accept="image/png, image/jpeg
