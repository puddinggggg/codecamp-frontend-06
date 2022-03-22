function solution(num) {
    let remain = num % 2
    if (remain === 0) {return "Even";}
    return "Odd";
    
    // return num % 2 === 0 ? "Even" : "Odd";
};