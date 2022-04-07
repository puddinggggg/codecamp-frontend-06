import { useState } from "react";
export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount(count + 1);
    setCount(count + 3);
    setCount(count + 5);
    setCount(count + 7);
  };
  return (
    <div>
      <div>Count:{count}</div>
      <button onClick={onClickCount}>Count Up</button>
    </div>
  );
}
