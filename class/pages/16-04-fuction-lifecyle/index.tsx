import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

// interface IState {
//   count: number;
// }
// class에서 확장 기능을 사용하기 위해 extends 를 사용. Component를 react에서 불러와 해당 기능을 갖게 됨.
export default function CounterPage() {
  // input tag를 담을 변수 연결. 즉 aaa에 inputtag 변수를 담았다.
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  // state, render()는 component에서 정해진 이름 변경불가. 새로운 것 사용도 가능
  const [count, setCount] = useState(0);

  // 1. didMount
  // componentDidMount() {
  //   console.log("mounted");
  //   // ex: 포커스 깜빡일때

  //   this.inputRef.current?.focus();
  // }

  // useEffect(() => {
  //   console.log("mounted");
  //   inputRef.current?.focus();
  // }, []);
  useEffect(() => {
    console.log("mounted");
    inputRef.current?.focus();

    return () => {
      console.log("unmounted");
    };
  }, []);

  // 2.didUpdate
  // componentDidUpdate() {
  //   console.log("updated and rerendered");
  // }
  useEffect(() => {
    console.log("updated and rerendered");
  }); // didUpdate와 차이점 : 처음 랜더할때도 한 번 실행됨
  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("unmounted");
  //   // ex: 채팅방 나가기, api 요청
  // }
  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  // 4.DidMount, WillUnmount 합쳐서

  // 5. useEffect 잘못된 사용 사례
  // 5-1. useEffect안에 setState를 사용하면 랜더링을 2번 하게 된다. 어쩔수 없는 상황이 아니면 피할것.
  // useEffect(() => {
  //   setCount(10)
  // },[])
  // 5-2. 무한루프현상
  // useEffect(() => {
  //   setCount(prev=>prev+1)
  // },[count])

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };
  console.log("실행순서 확인");
  // useEffect가 랜더링 된 다음 실행되는 것을 알 수 있다

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>count : {count}</div>
      <button onClick={onClickCounter}>count up</button>
      <button onClick={onClickMove}>exit</button>
    </div>
  );
}
