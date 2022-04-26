import { useEffect, useRef, useState } from "react";

export default function ImgPreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  // imgTag는 <img src=""/> 와 같은 모양으로 태그까지 포함된 상태이다.
  const divRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
    // document.getElementById("aaa")?.appendChild(imgTag)
  };
  const onClickLoad = () => {
    setisLoaded(true);
  };
  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreLoad}>이미지 프리로드</button>
      <br />
      {isLoaded && (
        <img src="https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg" />
      )}
      <button onClick={onClickLoad}>이미지 일반로드</button>
    </div>
  );
}
