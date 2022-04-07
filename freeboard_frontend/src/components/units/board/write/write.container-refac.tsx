import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.queries";
import { IWriteBoardProps, IUpdateBoardInput } from "./write.types";
import { Modal } from "antd";

export default function WriteBoard(props: IWriteBoardProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
    youtubeUrl: "",
    boardAddress: {
      zipcode: "",
      address: "",
      addressDetail: "",
    },
  });
  // const [writer, setWriter] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");
  // const [youtubeUrl, setYouTubeUrl] = useState("");

  // const [zipcode, setZipcode] = useState("");
  // const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");
  const [errors, setErrors] = useState({
    writerError: "",
    passwordError: "",
    titleError: "",
    contentsError: "",
  });
  // const [writerError, setWriterError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [titleError, setTitleError] = useState("");
  // const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (
      event.target.value !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (
      inputs.writer !== "" &&
      event.target.value !== "" &&
      inputs.title !== "" &&
      inputs.contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (
      inputs.writer !== "" &&
      inputs.password !== "" &&
      event.target.value !== "" &&
      inputs.contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (
      inputs.writer !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYouTubeUrl(event.target.value);
  };
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressCode = () => {
    setIsVisible(true);
  };
  const afterAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsVisible(false);
  };
  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    } else {
      setWriterError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    } else {
      setTitleError("");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    } else {
      setContentsError("");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
             ...inputs
            },
          },
        });
        console.log(result);
        Modal.success({ content: "게시물 등록에 성공하였습니다!" });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onClickUpdate = async () => {
    if (!inputs.password) {
      Modal.error({ content: "비밀번호를 입력하세요." });
      // alert("비밀번호를 입력하세요.");
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput,
        },
      });
      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
      // 에러 any 처리 말고 해결법 뭐가 좋을까?
    }
  };
  return (
    <BoardWriteUI
      isActive={isActive}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutube={onChangeYoutube}
      onClickAddressCode={onClickAddressCode}
      onChangeAddressDetail={onChangeAddressDetail}
      afterAddressSearch={afterAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      isVisible={isVisible}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
    />
  );
}
