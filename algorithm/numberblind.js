function solution(phone_number) {
    let num = phone_number.length - 4;
    let star = "*".repeat(num)
    let four = phone_number.slice(-4);
    return (star + four);
    
//         let answer= "";
//     for (let i = 0; i<phone_number.length;i++){
//     if( i<phone_number.length -4){
//          answer += "*";}
//     else{ answer += phone_number[i];}
    
//     }
// return answer;
}