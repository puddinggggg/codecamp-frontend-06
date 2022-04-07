// 주어진대로 실행시 결과는 4가 된다. 밖에서 불러오는 state는 계속 0인데 맨 마지막 줄의 코드가 state+4이기 때문에
import { useState } from "react";
export default function PlusPage() {
  const [state, setState] = useState(0);

  function sumAll() {
    setState((prev) => prev + 1);
    setState((prev) => prev + 2);
    setState((prev) => prev + 3);
    setState((prev) => prev + 4);
  }

  return (
    <>
      <div>결과는: {state}</div>
      <button onClick={sumAll}>실행!</button>
    </>
  );
}
