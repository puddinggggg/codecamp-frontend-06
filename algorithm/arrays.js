const cats = ["푸딩", "쿠키", "몰리", "푸딩", "버찌"]

// forEach
cats.forEach((item)=>{return console.log(item + "의 냥젤리")})
// indexOf
cats.indexOf("푸딩")
// indexOf 시작점 지정
cats.indexOf("푸딩",1)
// lastIndexOf
cats.lastIndexOf("푸딩")
// lastIndexOf
cats.lastIndexOf("푸딩",2)
// includes true
cats.includes("푸딩")
// includes 시작점 지정
cats.includes("푸딩", 4)