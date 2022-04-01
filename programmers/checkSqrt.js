// 정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1

function solution(n) {
  let root = Math.sqrt(n);
  let floorRoot = Math.floor(root);
  if (root === floorRoot) {
    return (root + 1) ** 2;
  } else {
    return -1;
  }
}

// 2 ** 3 <- 2의 3제곱
// Math.pow(2,4) <- 2의 4제곱
// Number.isInteger() <- 정수판별

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
