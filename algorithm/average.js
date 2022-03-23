function solution(arr){
const answer = arr.reduce((acc,cur)=>{
    return acc + cur;},0)
    return answer / arr.length;}