import Presenter from "../child";

export default function Container() {
  return <div>{Presenter({ child: "철수" })}</div>;
}
