import { ChangeEvent, useState, useEffect, MouseEvent } from "react";
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
  });

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  // const [errors, setErrors] = useState({
  //   writer: "",
  //   password: "",
  //   title: "",
  //   contents: "",
  // });
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // const onChangeWriterError = (event: ChangeEvent<HTMLInputElement>)=>{
  //   if(inputs.writer){setWriterError("")}
  // }
  // const onChangeTitleError = (event: ChangeEvent<HTMLInputElement>)=>{
  //   if(inputs.title){setTitleError("")}
  // }
  // const onChangePasswordError = (event: ChangeEvent<HTMLInputElement>)=>{
  //   if(inputs.password){setPasswordError("")}
  // }
  // const onChangeContentsError = (event: ChangeEvent<HTMLTextAreaElement>)=>{
  //   if(inputs.contents){setContentsError("")}
  // }

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    // if (event.target.value) {
    //   setErrors({ ...errors, [event.target.id]: "" });
    // }
    if (inputs.writer) {
      setWriterError("");
    }
    if (inputs.title) {
      setTitleError("");
    }
    if (inputs.password) {
      setPasswordError("");
    }
    if (inputs.contents) {
      setContentsError("");
    }
    // inputs.xxx 로 해서 한 번 더 입력해야 오류메세지 사라짐
    // 바로 없에려면 event.target.value 썼어야했는데 사용방법 알아볼것
    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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
    if (inputs.writer === "") {
      setWriterError("작성자를 입력해주세요.");
    } else {
      setWriterError("");
    }
    if (inputs.password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }
    if (inputs.title === "") {
      setTitleError("제목을 입력해주세요.");
    } else {
      setTitleError("");
    }
    if (inputs.contents === "") {
      setContentsError("내용을 입력해주세요.");
    } else {
      setContentsError("");
    }

    if (
      inputs.writer !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.contents !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: { zipcode, address, addressDetail },
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
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
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
      onChangeInputs={onChangeInputs}
      onClickAddressCode={onClickAddressCode}
      onChangeAddressDetail={onChangeAddressDetail}
      afterAddressSearch={afterAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      isVisible={isVisible}
      // errors={errors}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
    />
  );
}
