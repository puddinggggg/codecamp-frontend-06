import BoardWriteUI from "./Routing.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./Routing.queries";

export default function BoardWrite() {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
const [isActive, setIsActive] = useState(false);

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    try {
      const result = await callApi({
        variables: { writer: myWriter, title: myTitle, contents: myContents },
      });
      console.log(result);
      console.log(result.data.createBoard.message);
      alert("게시물 등록 성공");
      alert("페이지 이동");
      router.push(
        `/06-03-DRI-container-presenter/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
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
      isActive={isActive}
    />
  );
}
