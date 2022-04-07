import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Change() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);
  const inputRef = useRef(null);

  const onClickIsChange = () => {
    console.log(isChange);
    setIsChange(true);
  };

  const consoleCheck = () => {
    console.log(isChange);
  };

  const onClickMove = () => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!");
    inputRef.current?.focus();

    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    alert("changed!!");
  });

  return (
    <div>
      <span>비밀번호입력:</span>
      <input type="password" ref={inputRef} />
      <br />
      <button onClick={onClickIsChange}>변경</button>
      <br />
      <button onClick={onClickMove}>이동</button>
      <br />
      <button onClick={consoleCheck}>변경체크</button>
    </div>
  );
}
