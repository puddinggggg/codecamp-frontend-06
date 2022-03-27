export default function  TypeScriptPage (){
    // 타입추론
    let aaa= "안녕하세요";
    aaa = 3;

    // 타입명시
    let bbb : string = "반갑습니다";
    
    // 문자타입
    let ccc: string;
    ccc = "c가 3개";
    ccc = 3
    
    // 숫자타입
    let ddd : number = 10;
    ddd = "d가 3개"

    // 불리언타입
    let eee : boolean = true;
    eee = false;
    eee = "false"; // true로 작동한다

    // 배열타입
    let fff : number[] = [1, 2, 3, 4, 5, 6, "f"];
    let ggg : string[] = ["푸딩", "애옹", "나비", 12]
    let hhh : (number | string)[] = ["푸딩", "애옹", "나비", 12] // &, | 모두 1개씩 쓴다

    // 객체타입 여기서 설정한 요소는 꼭 있어야한다. 대신 ?를 붙이면 없어도 되는 요소로 인식.
    interface IProfile {
        name: string
        age: string | number
        school : string
        hobby? : string
    };

    let profile : IProfile= {
        name : "푸딩",
        age : 11,
        school : "고양이학교"
    } ;
     profile.age = "11살";
     profile.school = 1;


    // 함수타입
    const add = (money1:number, money2:number, unit:string) :string => {
        return money1 + money2 + unit
    }
    const result = add(1000, 2000, "달러")

    return (
        <div>typescript test</div>
    )
}