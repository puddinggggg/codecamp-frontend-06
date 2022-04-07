import { useState } from "react";

export default function Counter02() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count++);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={counter}>Count Up</button>
    </div>
  );
}
