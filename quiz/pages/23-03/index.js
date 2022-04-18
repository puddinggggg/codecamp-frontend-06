export default function Hofhof() {
  const cats = ["푸딩", "애옹", "춘식"];
  const onClickButton = (el) => (event) => {
    console.log(el);
  };

  return (
    <div>
      {cats.map((el) => (
        <button key={el} onClick={onClickButton(el)}>
          {el}
        </button>
      ))}
    </div>
  );
}
