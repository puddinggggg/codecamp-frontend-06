// import axios from "axios"
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [myWriter, setMyWriter] = useState<string>("")
  const [myTitle, setMyTitle] = useState<string>("")
  const [myContents, setMyContents] = useState<string>("")
  
  const [data, setData] = useState("");
  const [callApi] = useMutation<Pick<IMutation, 'createBoard'>,IMutationCreateBoardArgs>(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await callApi({
      variables: {   writer: myWriter, title: myTitle, contents: myContents  }
    })
    console.log(result);
    console.log(result.data?.createBoard?.message);
    // setData(result.data?.createBoard?.message ||""); 바로 아래와 같은 의미코드
    if(result.data?.createBoard?.message){
    setData(result.data?.createBoard?.message);}
  };

  const onChangeWriter = (event)=>{
    setMyWriter(event.target.value)

  }
  const onChangeTitle = (event)=>{
    setMyTitle(event.target.value)
  }
  const onChangeContents = (event)=>{
    setMyContents(event.target.value)
  }

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter}/><br />
      제목: <input type="text" onChange={onChangeTitle}/><br />
      내용: <input type="text" onChange={onChangeContents}/><br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청</button>
      {/* <div>{data}</div> */}
    </div>
  );
}
