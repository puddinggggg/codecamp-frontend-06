export default function FunctionalComponentChildPage(abc) {
  return <div>내 카운트:{abc.count}</div>;
}

// 함수의 매개변수이기 때문에 props가 아니라 다른 이름으로 가져와도 된다.
