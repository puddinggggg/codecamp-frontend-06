import styled from "@emotion/styled";

const UploadImage = styled.img``;
const UploadButton = styled.div``;
export default function Uploads01UI(props) {
  return (
    <>
      {/* // fileUrls 배열에서 해당 인덱스 위치에 값이 있다면 이미지를 보여주고 //
      없다면 추가 버튼을 보여주게 됩니다. */}
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
