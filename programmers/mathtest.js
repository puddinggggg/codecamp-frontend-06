const answerTable = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];
function solution(answers) {
  const answer = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answerTable.length; j++) {
      if (answerTable[j][i % answerTable[j].length] === answers[i]) {
        answer[j]++;
      }
    }
  }

  const big = Math.max(...answer);

  const result = [];
  for (let i = 0; i < 3; i++) {
    if (answer[i] === big) {
      result.push(i + 1);
    }
  }

  return result;
}

// function solution(answers) {
//     const oneA = [1,2,3,4,5]
//     const twoA = [2, 1, 2, 3, 2, 4, 2, 5]
//     const threeA = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//         const score1 = new Array(answers.length).fill(1).reduce((acc,cur,i)=>{
//       return answers[i]===oneA[i%oneA.length]?
//     acc=cur+1:acc
//     },0)
//         const score2 = new Array(answers.length).fill(1).reduce((acc,cur,i)=>{
//       return answers[i]===twoA[i%twoA.length]?
//     acc=cur+1:acc
//     },0)
//         const score3 = new Array(answers.length).fill(1).reduce((acc,cur,i)=>{
//       return answers[i]===threeA[i%threeA.length]?
//     acc=cur+1:acc
//     },0)
//       let first = Math.max(score1,score2,score3);
//         let list = [score1,score2,score3]
//         const answer =[]
//        for(let i=0;i<3;i++){
//            if(list[i]===first){
//                answer.push(i+1)
//            }
//        }

//        return answer;

//     }
