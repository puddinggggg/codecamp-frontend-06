import FunctionalComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  //   return <FunctionalComponentChildPage count={123} />;
  return <div>{FunctionalComponentChildPage({ count: 123 })}</div>;
}

// 함수로 내보내기 해도 상관없다
