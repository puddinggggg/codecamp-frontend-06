function solution(s) {
  let answer = "";
  let array = [];
  for (i = 0; i < s.length; i++) {
    array.push(s[i]);
  }
  array.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  for (i = 0; i < array.length; i++) {
    answer = answer + array[i];
  }
  return answer;
}
