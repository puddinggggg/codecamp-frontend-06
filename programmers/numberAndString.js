// replace
// 문자열 메서드 첫번째 인자의 데이터를 두번째 인자의 데이터로 변경
// 같은 내용이 중복해서 나올 때 제일 처음 나오는 값만 변경하기 때문에 그런 경우에는 replaceAll을 써야함
// 프로그래머스에서는 아직 replaceAll 적용 안되어있음

const string = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function solution(s) {
  for (let i = 0; i < string.length; i++) {
    while (s.includes(string[i])) {
      s = s.replace(string[i], i);
    }
  }
  return Number(s);
}

function solution2(s) {
  string.forEach((str, i) => {
    s = s.split(str).join(i);
  });
  return Number(s);
}
// 정규표현식
function solution3(s) {
  for (let i = 0; i < string.length; i++) {
    let regExp = new RegExp(string[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
