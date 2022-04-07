const classmates =[
    {name:"철수", age:10, school:"토끼초등학교"},
    {name:"영희", age:13, school:"다람쥐초등학교"},
    {name:"훈이", age:11, school:"토끼초등학교"},
];
let rabbits = classmates.filter((el)=>(el.school ==="토끼초등학교")).map((item)=>({name: item.name, age: item.age, candy : 10}))

let squirrels = classmates.filter((el)=>(el.school ==="다람쥐초등학교")).map((item)=>({name : item.name + "어린이"}))
