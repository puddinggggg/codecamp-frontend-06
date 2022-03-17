import axios from "axios";
import styled from "@emotion/styled";
// import {useState} from "react";

const RestApiBtn = styled.button``;
export default function RestApi () {

    // const [data, setData] = useState("");
    const getRestApi = async ()=>{
        const result = await axios.get("https://koreanjson.com/users")
        // setData(result);
        console.log(result);
    } 

    return(
        <RestApiBtn onClick={getRestApi}>REST-API 요청하기</RestApiBtn>


    )
}