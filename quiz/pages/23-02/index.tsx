export default function Hofhof() {
  const onClickButton = (el) => (event) => {
    console.log(el);
  };
  return (
    <div>
      <button onClick={onClickButton(123)}>클릭</button>
    </div>
  );
}
