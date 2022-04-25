import axios from "axios";
import { useState } from "react";

export default function CallbackPromiseAsyncawaitPage() {
  const [list, setList] = useState([]);
  const onClickCallback = () => {
    const callback = new XMLHttpRequest();
    callback.open("get", "http://numbersapi.com/random?min=1&max=200");
    callback.send();
    callback.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];
      console.log(num);

      const openPost = new XMLHttpRequest();
      openPost.open("get", `http://koreanjson.com/posts/${num}`);
      openPost.send();
      openPost.addEventListener("load", (res) => {
        const user = JSON.parse(res.target.response);
        const userId = user.UserId;
        console.log(userId);

        const openList = new XMLHttpRequest();
        openList.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        openList.send();
        openList.addEventListener("load", (res) => {
          const result = JSON.parse(res.target.response);
          setList(result);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        const result = res.data;
        setList(result);
        console.log(result);
      });
  };

  const onClickAsyncawait = async () => {
    {
      const num1 = await axios.get(
        "http://numbersapi.com/random?min=1&max=200"
      );
      const num2 = num1.data.split(" ")[0];
      console.log(num1);
      console.log(num2);
      const user = await axios.get(`http://koreanjson.com/posts/${num2}`);
      console.log(user.data.UserId);
      const userId = user.data.UserId;
      const result = await axios.get(
        `http://koreanjson.com/posts?userId=${userId}`
      );
      console.log(result.data);
      setList(result.data);
    }
  };
  return (
    <div>
      <button onClick={onClickCallback}>Callback</button>
      <br />
      <button onClick={onClickPromise}>Promise</button>
      <br />
      <button onClick={onClickAsyncawait}>Async/Await</button>
      <br />
      결과:
      {list?.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
          <div>{el.content}</div>
        </div>
      ))}
    </div>
  );
}
