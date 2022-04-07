export default function Child2(props) {
  return (
    <div>
      <div>Child2 Count : {props.count}</div>
      <button onClick={props.onClickCountUp}>count up</button>
    </div>
  );
}
