//컨테이너컴포넌트
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
export default function BoardWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState("false");
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = async() =>{
    const result = await updateBoard({
        variables: { number: Number(router.query.mynumber) , writer: myWriter, title: myTitle, contents: myContents }})
        alert("게시물 수정 성공")
        router.push('/08-05-boards/${result.query.mynumber}');
    
  }

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    // console.log(result);
    // console.log(result.data.createBoard.message);
    // setData(result.data.createBoard.message);
    alert("게시물 등록 성공")
    router.push('/08-05-boards/${result.data.createBoard.number}');
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);

    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);

    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (event) => {
    setMyContents(event.target.value);

    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
