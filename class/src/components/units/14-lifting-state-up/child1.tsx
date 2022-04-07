export default function Child1(props) {
  const onClickCountUp2 = () => {
    props.setCount((prev) => prev + 2);
  };
  return (
    <div>
      <div>Child1 Count : {props.count}</div>
      <button onClick={onClickCountUp2}>count up</button>
    </div>
  );
}
