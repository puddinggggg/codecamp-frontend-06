import { useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");
  const onChangeFile = (event) => {
    const file = event.target.files?.[0]; // 배열에도 optional chaining 가능하다
    if (!file) {
      alert("파일 없음");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
      }
    };
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
    </div>
  );
}
