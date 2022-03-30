function solution(num) {
  let counter = 0;
  for (let i = 0; i < 501; i++) {
    if (num === 1) {
      return counter;
    }
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    counter++;
  }
  if (counter > 500) {
    return -1;
  } else {
    return counter;
  }
}
