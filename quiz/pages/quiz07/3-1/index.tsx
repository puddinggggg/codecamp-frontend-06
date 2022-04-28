import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";
export default function MemoizationParentPage() {
  console.log("parent page rendered");
  //   1
  let countLet = 0;
  const [countState, setCountState] = useState(0);
  const onClickCountLet = useMemo(() => {
    return () => {
      console.log(countLet + 1);
      countLet++;
    };
  }, []);
  //   const onClickCountState = useMemo(() => {
  //     return () => {
  //       console.log(countState + 1);
  //       setCountState(countState + 1);
  //     };
  //   }, []);
  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);

  //   const onClickCountState = () => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   };

  // 9
  const byUseMemo = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);
  return (
    <div>
      <div>=========================</div>
      <div>ParentPage</div>
      <div>count(let):{countLet}</div>
      <div>count(state):{countState}</div>
      <button onClick={onClickCountLet}>count(let) + 1</button>
      <button onClick={onClickCountState}>count(state) + 1</button>
      <div>=========================</div>
      <MemoizationChildPage />
    </div>
  );
}
