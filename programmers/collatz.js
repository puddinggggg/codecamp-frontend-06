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

//  비슷한 방법
// function solution(num) {
//   let counter = 0;
//   for(let i=0;i<500;i++){
//     if(num ===1){return counter;}
//     counter++;
//     if(num%2===0){
//       num /= 2;
//     } else{
//       num = num*3 +1;
//     }
//   }
//   return -1;
// }

// while 사용
// function solution(num) {
//   let answer = 0;
//   while (num !== 1) {
//     if (answer >= 500) {
//       return -1;
//     }

//     answer++;
//     num = num % 2 === 0 ? num / 2 : num * 3 + 1;
//   }
//   return answer;
// }

// method 사용 여기서는 비효율적
// function solution(num) {
//   let answer = 0;
//   const result = new Array(500).fill(1).reduce((acc) => {
//     // cur을 안쓸 경우 그 자리에 _를 넣거나(acc,_) 아예 acc만 쓴다
//     if (acc !== 1) {
//       answer++;
//       return acc % 2 === 0 ? acc / 2 : acc * 3 + 1;
//     } else {
//       return 1;
//     }
//   }, num);
//   return result !== 1 ? -1 : answer;
// }
