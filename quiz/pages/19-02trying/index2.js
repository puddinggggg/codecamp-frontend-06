// import axios from 'axios'
import { useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";

import { checkFileValidation } from "../../src/commons/libraries/validation";
import { Modal } from "antd";
import { LikeOutlined } from "@ant-design/icons";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef(null);
  
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  
  const [uploadFile] = useMutation(UPLOAD_FILE);
  
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  
  const [createBoard] = useMutation(CREATE_BOARD);
  
  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    }); // graphql-api 방식
    console.log(result);
    console.log(result.data.createBoard.message);
    // setData(result.data.createBoard.message);
  };
  
  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };
  
  const onChangePassword = (event) => {
    setMyPassword(event.target.value);
  };
  
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };
  
  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };
  
  const onChangeFiles = async (event) => {
    const newImages = [...images];
    const newImageUrls = [...imageUrl];
    if (images[index]) {
      newImages[index] = file;
      newFileUrls[index] = url;
    } else { // 빈 곳이라면 맨 뒤에 추가해줍니다.
      newFiles.push(file);
      newFileUrls.push(url);
    }

		// 변경된 배열을 state에 저장해줍니다.
    setFiles([...newFiles]);
    setFileUrls([...newFileUrls]);
 }
    const file = event.target.files?.[0];
    console.log(file);
    
    const isValid = checkFileValidation(file);
    if (!isValid) return;
    
    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  // const onChangeFile = async (event) => {
  //   const file = event.target.files?.[0];
  //   console.log(file);
    
  //   const isValid = checkFileValidation(file);
  //   if (!isValid) return;
    
  //   try {
  //     const result = await uploadFile({ variables: { file } });
  //     console.log(result.data?.uploadFile.url);
      
  //     setImageUrl(result.data?.uploadFile.url);
  //   } catch (error) {
  //     Modal.error({ content: error.message });
  //   }
  // };
  
  const onClickIcon = () => {
    fileRef.current?.click();
  };
  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <div>
        <div>이미지 업로드</div>
        <LikeOutlined
          onClick={onClickIcon}
          style={{ fontSize: 30, cursor: "pointer" }}
        />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        {imageUrl ? (
          <img src={`https://storage.googleapis.com/${imageUrl}`} />
        ) : (
          "이미지를 등록하세요"
        )}
      </div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </div>
  );
}
