import { type } from "os";

export default function  TypeScriptPage (){
    
    interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
    }
// Pick 타입 : 골라서 가져옴
    type MyType1 = Pick<IProfile, "name" | "age">
// Omit 타입 : 빼고 가져옴
    type MyType2 = Omit<IProfile, "school">
// Partial 타입 : 전부다 가져오되, 모든 요소 ? 붙여서 가져옴
    type MyType3 = Partial<IProfile>
// Required 타입 : 전부다 필수요소로 가져옴
    type MyType4 = Required<IProfile>
// Record 타입
    type ZZZ = "aaa" | "bbb" | "ccc"  //union type : 정해놓은 타입 중 하나만 사용 할 수 있게 함 아래 예시에서 apple은 "aaa" "bbb" "ccc" 중 하나의 값을 가져야 함
    // let apple : ZZZ
    // apple = "q"
    type MyType5 = Record<ZZZ, IProfile> //ZZZ의 타입이 key IProfile이 value가 된다.

// *추가내용* 선언병합 : 위에서도 IProfile을 선언하고 여기서도 하면 두 내용이 합쳐진다.
    interface IProfile {
        candy : number;
    }

    return (
        <div>typescript test</div>
    )
}