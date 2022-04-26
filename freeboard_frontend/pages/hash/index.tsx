import { useState } from "react";

export const HashTag = () => {
  const [hashTag, setHashTag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const onKeyUpHash = (event) => {
    if (event.KeyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div>
      <div>
        <span>
          {hashArr.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </div>
  );
};

// 클릭 했을 때 인덱스 값이나 기타 값을 가지고 splice 등의 메서드를 이용해 제거되도록
