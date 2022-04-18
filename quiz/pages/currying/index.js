function CurryingTest(word) {
  return function (cat) {
    console.log(`${word}, 저는 ${cat} 입니다.`);
  };
}

const sayHello = CurryingTest("안녕하세요");
sayHello("푸딩");
