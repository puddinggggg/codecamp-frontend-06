import Presenter from "../child";

// container 부분
export default function Container() {
  return <div>{Presenter({ child: "철수", age: 13 })}</div>;
}
