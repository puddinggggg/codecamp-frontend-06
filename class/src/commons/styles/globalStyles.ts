// 전역에서 사용하는 global styles 만들기
import { css } from "@emotion/react"
export const globalStyles = css`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: "cyworldfont";
    font-size: 30px;
}

@font-face {
    font-family: "cyworldfont";
    src: url("/font/scifibit.ttf");
}



`;