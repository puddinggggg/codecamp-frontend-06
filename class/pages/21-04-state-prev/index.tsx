import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    // // 1. 화살표함수
    // setCount((prev) => prev + 1);
    // // 2. 함수선언식
    // setCount(function (prev) {
    //   return prev + 1;
    // 로직 추가 가능(if, for 등)
    // }
    // 3. 매개변수 바꾸기
    setCount((pudding) => pudding + 1);
  };
  return (
    <div>
      <div>count:{count}</div>
      <button onClick={onClickCount}>count up</button>
    </div>
  );
}
