export default function PromiseAllPage() {
  const onClickPromise = async () => {
    // async,await 대신 뒤에 .then 붙여도 된다.
    console.time("promise시작");
    const result1 = await new Promise((resolve, reject) => {
      // promise는 시간이 걸리는 작업에 사용.(setTimeout같은 것)
      setTimeout(() => {
        resolve("https://푸딩1.png");
      }, 3000);
    });
    console.log(result1);
    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://푸딩2.png");
      }, 1000);
    });
    console.log(result2);
    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://푸딩3.png");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("promise시작");
  };
  const onClickPromiseAll = async () => {
    // 동시에 실행하고 싶은 promise를 배열로 넣는다.
    // 1. 하나씩 확인하는 방법
    // console.time("promiseall시작");
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://푸딩1.png");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://푸딩2.png");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://푸딩3.png");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("promiseall시작");

    // 2. 한 번에 확인하는 방법
    console.time("promiseall시작");

    const result = await Promise.all(
      ["https://푸딩1.png", "https://푸딩2.png", "https://푸딩3.png"].map(
        (el) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          });
        }
      )
    );
    console.log(result);
    console.timeEnd("promiseall시작");
  };

  return (
    <div>
      <button onClick={onClickPromise}>promise</button>
      <button onClick={onClickPromiseAll}>promise all</button>
    </div>
  );
}
