export default function Hello01(){

    function Hello() {
        
        document.getElementById("hi").innerText ="반갑습니다";
    }
return(
    <div>

<button id="hi" onClick={Hello}>안녕하세요</button>
</div>
)

}