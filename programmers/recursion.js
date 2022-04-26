let count = 0;
function recursion() {
  if (count === 5) {
    return;
  } // 재귀함수중단시점 이게 없다면 무한반복
  console.log(count);
  count++;
  return recursion();
}
recursion();
