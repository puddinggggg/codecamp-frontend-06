for (let i=0;i<5;i++){
    if (i===2){
        break;
    }
    console.log(i)
}
//2가 되면 break

for (let i=0;i<5;i++){
    if (i===2){
        continue;
    }
    console.log(i)
}
// 2가 되면 건너뜀

let str = "abc";
for(let key in str){
    console.log(key, str[key]);
}
// for -in
// key를 적으면 해당 문자/배열의 index값, str[key]를 적으면 해당 문자/요소를 반환
// 객체에서 사용시 각각 키값, 밸류값 반환 
// key는 고정된 명령어 아니고 임의로 설정 가능

let str2 = "abc";
for(let data of str2){
    console.log(data)
// for -of
// 해당 문자/요소를 바로 반환
// 속도가 느린편

const arr= [1,2,3,4];
arr.forEach( list =>{console.log(list)});
// forEach
//  배열 요소 반환

let count = 0;
while (count !==5) {
    count++;
    console.log(count);
}
// while
