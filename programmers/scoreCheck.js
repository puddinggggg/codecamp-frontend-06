function solution(answers) {
  let score1 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (
      (i % 5 === 0 && answers[i] === 1) ||
      (i % 5 === 1 && answers[i] === 2) ||
      (i % 5 === 2 && answers[i] === 3) ||
      (i % 5 === 3 && answers[i] === 4) ||
      (i % 5 === 4 && answers[i] === 5)
    ) {
      score1++;
    }
  }
  //i % 5 ===0 이면 answers[i] ===1일 때 score1++
  //i % 5 ===1 이면 answers[i] ===2일 때 score1++
  //i % 5 ===2 이면 answers[i] ===3일 때 score1++
  //i % 5 ===3 이면 answers[i] ===4일 때 score1++
  //i % 5 ===4 이면 answers[i] ===5일 때 score1++

  let score2 = 0;
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  for (let i = 0; i < answers.length; i++) {
    if (i % 2 === 0 && answers[i] === 2) {
      score2++;
    } else {
      if (
        ((i / 2) % 4 === 0 && answers[i] === 5) ||
        ((i / 2) % 4 === 1 && answers[i] === 1) ||
        ((i / 2) % 4 === 2 && answers[i] === 3) ||
        ((i / 2) % 4 === 3 && answers[i] === 4)
      ) {
        score2++;
      }
    }
  }

  //     i가 짝수면 index[i]===2일때 score2++;
  // i가 홀수면
  //(i/2) % 4 ===0 이면 answers[i] ===5일 때 score2++
  //(i/2) % 4 ===1 이면 answers[i] ===1일 때 score2++
  //(i/2) % 4 ===2 이면 answers[i] ===3일 때 score2++
  //(i/2) % 4 ===3 이면 answers[i] ===4일 때 score2++

  let score3 = 0;
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (
      (Math.floor(i / 2) % 5 === 0 && answers[i] === 3) ||
      (Math.floor(i / 2) % 5 === 1 && answers[i] === 1) ||
      (Math.floor(i / 2) % 5 === 2 && answers[i] === 2) ||
      (Math.floor(i / 2) % 5 === 3 && answers[i] === 4) ||
      (Math.floor(i / 2) % 5 === 4 && answers[i] === 5)
    ) {
      score3++;
    }
  }
  // Math.floor(i/2)%5 ===0 이면 answers[i] ===3일 때 score3++
  // Math.floor(i/2)%5 ===1 이면 answers[i] ===1일 때 score3++
  // Math.floor(i/2)%5 ===2 이면 answers[i] ===2일 때 score3++
  // Math.floor(i/2)%5 ===3 이면 answers[i] ===4일 때 score3++
  // Math.floor(i/2)%5 ===4 이면 answers[i] ===5일 때 score3++
}

// 아직 하는중
