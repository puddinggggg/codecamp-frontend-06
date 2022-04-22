// setTimeout(()=>{
//     console.log("1초")
// },1000)
// setInterval(()=>{
//     document.getElementById("timer")?.innerHTML = "59:30"
// },1000)

export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("시작");
    setTimeout(() => {
      console.log("0초 뒤 실행");
    }, 0);
    console.log("끝");
  };
  return <button onClick={onClickTimer}>setTimeout</button>;
}
