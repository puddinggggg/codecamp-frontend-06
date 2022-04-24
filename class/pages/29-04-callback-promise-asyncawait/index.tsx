import axios from "axios";
import { resolve } from "path";

export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener(
      "load",
      // 아래가 callback 함수부분
      (res) => {
        const num = res.target?.response.split(" ")[0];
        const bbb = new XMLHttpRequest();
        bbb.open("get", `http://koreanjson.com/posts/${num}`);
        bbb.send();
        bbb.addEventListener("load", (res) => {
          const userId = res.target?.response.UserId;
          const ccc = new XMLHttpRequest();
          ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
          ccc.send();
          ccc.addEventListener("load", () => {
            resolve(res); // 결과값
          });
        });
      }
    );
  };

  // new Promise((resolve, reject) => {
  // 외부 요청 코드
  // // 성공시
  // resolve("성공");
  // // 실패시
  // reject("에러발생");
  // })
  // .then((res) => {})
  // .catch((err) => {});

  const onClickPromise = () => {
    console.log("여기는 1번");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는 2번");
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번");
        console.log(res);
      });
    console.log("여기는 5번");
  };
  const onClickAsyncawait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };
  return (
    <div>
      <button onClick={onClickCallback}>callback request</button>
      <button onClick={onClickPromise}>promise request</button>
      <button onClick={onClickAsyncawait}>asyncAwait request</button>
    </div>
  );
}
