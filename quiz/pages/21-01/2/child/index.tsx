// presenter 부분
export default function Presenter(props) {
  return (
    <div>
      {props.child}는 {props.age}살입니다.
    </div>
  );
}
