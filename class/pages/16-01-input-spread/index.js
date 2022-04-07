// import axios from "axios"
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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
  // const [myWriter, setMyWriter] = useState("")
  // const [myTitle, setMyTitle] = useState("")
  // const [myContents, setMyContents] = useState("")

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await callApi({
      variables: { ...inputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    console.log(data);
  };

  const onChangeInputs = (event) => {
    // setMyWriter(event.target.value)
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
      // 대괄호로 감싸주면 event.target.id의 값을 확인하고(예:writer) 그걸 key로 사용 배열이 아님
    });
  };
  // const onChangeTitle = (event) => {
  //   // setMyTitle(event.target.value)
  //   setInputs({
  //     ...inputs,
  //     [event.target.id]: event.target.value,
  //   });
  // };
  // const onChangeContents = (event) => {
  //   // setMyContents(event.target.value)
  //   setInputs({
  //     ...inputs,
  //     [event.target.id]: event.target.value,
  //   });
  // };

  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청</button>
      {/* <div>{data}</div> */}
    </div>
  );
}
