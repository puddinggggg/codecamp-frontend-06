import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkFileValidation } from "./upload.validation";
import UploadUI from "./upload.presenter";
import { IUploadProps } from "./upload.types";
import { UPLOAD_FILE } from "./upload.queries";
import { Modal } from "antd";

export default function Upload(props: IUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkFileValidation(event.target.files?.[0]);
    if (!file) return;
    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
