import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}
// class에서 확장 기능을 사용하기 위해 extends 를 사용. Component를 react에서 불러와 해당 기능을 갖게 됨.
export default class CounterPage extends Component {
  // input tag를 담을 변수 연결. 즉 aaa에 inputtag 변수를 담았다.
  inputRef = createRef<HTMLInputElement>();
  // state, render()는 component에서 정해진 이름 변경불가. 새로운 것 사용도 가능
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("mounted");
    // ex: 포커스 깜빡일때

    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    console.log("updated and rerendered");
  }

  componentWillUnmount() {
    console.log("unmounted");
    // ex: 채팅방 나가기, api 요청
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>count : {this.state.count}</div>
        <button onClick={this.onClickCounter}>count up</button>
        <button onClick={this.onClickMove}>exit</button>
      </div>
    );
  }
}
