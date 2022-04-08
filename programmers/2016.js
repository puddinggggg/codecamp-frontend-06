// 2016년
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

function solution(a, b) {
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const days = [b - 1, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;
  for (let i = 0; i < a; i++) {
    sum += days[i];
  }
  let div = sum % 7;
  return day[div];
}

// const answer = new Array(a).fill(1).reduce((acc,cur,i)=>{
//     const mn = cur +i;
//     return acc+( mn!==a
//         ? days[mn] // a월 이전
//         : b-1
// )},0)
// return day[answer%7]

// const day = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
// return days[ answer = new Date( 2016, a-1,b).getDay()]
