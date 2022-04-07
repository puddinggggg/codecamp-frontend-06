import { useState } from "react";

export default function Random02() {
  const [random, setRandom] = useState("000000");

  function randomNumber() {
    setRandom(String(Math.floor(Math.random()*1000000)).padStart(6, "0"))
  }
  return (
    <div>
      <div>{random}</div>
      <button onClick={randomNumber}>인증번호전송</button>
    </div>
  );
}



