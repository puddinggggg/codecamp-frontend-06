// 공약수 찾기
function solution(n, m) {
  let LCM, GCD;
  let i = 1;
  let a, b;

  a = Math.max(m, n);
  b = Math.min(m, n);

  for (i = a; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      GCD = i;
      break;
    }
  }
  LCM = (a / GCD) * b;
  return [GCD, LCM];
}
// 유클리드 호제법
function solution(n, m) {
  let a, b, c;
  a = Math.max(m, n);
  b = Math.min(m, n);
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return [a, (n * m) / a];
}
