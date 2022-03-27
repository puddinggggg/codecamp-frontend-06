// isNaN

// Number.isNaN

function solution(s) {
    if(s.length!==4 && s.length !==6)
           {return false;}
    for(let i=0; i<s.length;i++){
        if(isNaN( s[i]) === true){
            return false;
        }
    } return true;
    
  
}

// 위 식은 정상 작동 아래식은 왜 케이스11에서 오류 이유 수가 너무 커지면
// 11112222222222222222222222  를 1111E+ 와 같은 모양으로 표기하기때문에

// function solution(s) {
//     if(s.length!==4 && s.length !==6)
//            {return false;}
//     else{
//         if(isNaN(Number(s))=== true){
//             return false;
//         }else{return true;}
//     }
    
  
// }



// s.split("") 을 하면 괄호안의 문자를 기준으로 쪼개 array를 만들어준다.
// s = "123" 일 경우 const s2 = s.split("") 하면 s2=["1","2","3"]

// const answer = s.split("").filter(num =>{ return isNaN(num) === true})
// return answer.length ===0;
// isNaN의 결과가 true인 경우 배열에 넣는다.

