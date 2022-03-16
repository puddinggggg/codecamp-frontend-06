import {useState} from 'react';

export default function Hello02(){
    const[hi, setHi] = useState("안녕하세요");

    function Hello() {
        setHi("반갑습니다")

    }
return(
    <div>

<button onClick={Hello}>{hi}</button>
</div>
)

}