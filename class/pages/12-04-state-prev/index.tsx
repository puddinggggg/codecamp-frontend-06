import { useState } from "react";
export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>Count:{count}</div>
      <button onClick={onClickCount}>Count Up</button>
    </div>
  );
}
