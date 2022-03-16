export default function Random01() {
  function random() {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("randomNumber").innerText = token;
  }
  return (
    <div>
      <div id="randomNumber">000000</div>
      <button onClick={random}>인증번호전송</button>
    </div>
  );
}
