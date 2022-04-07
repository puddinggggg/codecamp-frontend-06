import { Component } from "react";

interface IState {
  count: number;
}
// class에서 확장 기능을 사용하기 위해 extends 를 사용. Component를 react에서 불러와 해당 기능을 갖게 됨.
export default class CounterPage extends Component {
  // state, render()는 component에서 정해진 이름 변경불가. 새로운 것 사용도 가능
  state = {
    count: 0,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>count : {this.state.count}</div>
        <button onClick={this.onClickCounter}>count up</button>
      </div>
    );
  }
}
