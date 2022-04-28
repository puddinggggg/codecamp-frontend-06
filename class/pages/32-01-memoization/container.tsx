import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("container page rendered");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //   const randomNumber = Math.random();
  //   console.log(randomNumber);
  // countState 버튼을 누를 때 마다 수가 바뀌는 것을(리랜더되는 것을) 확인 가능
  // useMemo 쓰면 막을 수 있음

  const memo = useMemo(() => {
    Math.random();
  }, []); // 대괄호 안에 값을 넣으면(컴포넌트, state 등) 해당 값이 변할 때 재실행
  console.log(memo);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet++;
  }, []);
  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);

  //   const onClickCountState = () => {
  //     console.log(countState + 1);
  //     setCountState(countState + 1);
  //   };

  // useMemo로 useCallback만드는 것도 가능
  const makeUseCallback = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);
  return (
    <div>
      <div>=========================</div>
      <h1>ContainerPage</h1>
      <div>count(let):{countLet}</div>
      <div>count(state):{countState}</div>
      <button onClick={onClickCountLet}>count(let) + 1</button>
      <button onClick={onClickCountState}>count(state) + 1</button>
      <div>=========================</div>
      <MemoizationPresenterPage />
    </div>
  );
}
