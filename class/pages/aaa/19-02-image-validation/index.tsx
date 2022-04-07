import { ChangeEvent, useState } from "react";
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
  return (
    <div>
      <div>이미지업로드</div>
      <input type="file" onChange={onChangeFile} multiple />
      {/* multiple이 있으면 여러 파일 업로드 가능 없으면 1개만 가능 */}
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
