function solution(n) {
    
    let sum = n;
      for (let i = 1; i <= n/2; i++) {
      if(n%i===0){
          sum = sum +i;
      }
      }
       
  return sum;
}


// .fill(1)  array를 괄호 안의 내용으로 채워준다
// .reduce((acc,cur,i)=>{},0)

// const answer = new Array(n).fill(1).reduce((acc, cur, i)=>{
//     return n%(cur+i) ===0
//      약수가 맞다면 약수를 더한값을 다음으로 넘겨준다
//     ? acc+ (cur+i)
//      약수가 아니라면 더하지 않고 그냥 다음값으로 넘긴다
//     :acc
// },0)