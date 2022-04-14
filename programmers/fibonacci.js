function solution(n) {
  const arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    // console.log(arr[i-2],arr[i-1])
    arr.push((arr[i - 2] % 1234567) + (arr[i - 1] % 1234567));
  }
  return arr[arr.length - 1] % 1234567;
}

// 결과가 아니라 계산과정에서도 1234567로 나눠줘야하는 이유
// INT의 범위 밖의 수가 나올 수 있기 때문

let prev = 0;
let next = 1;
let sum = prev + next;
const answer = new Array(n - 1).fill(1).reduce((acc) => {
  sum = prev + acc;
  prev = acc;
  next = sum;
  return sum % 1234567;
}, sum);
