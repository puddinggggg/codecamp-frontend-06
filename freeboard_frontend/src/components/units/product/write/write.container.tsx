import { ChangeEvent, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWriteUI from "./write.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM, UPLOAD_FILE } from "./write.queries";
import { IWriteProductProps, IUpdateProductInput } from "./write.types";
import { Modal } from "antd";
import { checkFileValidation } from "../../../../commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export default function WriteBoard(props: IWriteProductProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [nameError, setNameError] = useState("");
  const [remarksError, setRemarksError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [tagsError, setTagsError] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (
      event.target.value !== "" &&
      remarks !== "" &&
      price !== "" &&
      contents !== ""&&
      tags !==""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setNameError("");
    }
  };
  const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value);
    if (
      name !== "" &&
      event.target.value !== "" &&
      price !== "" &&
      contents !== ""&&
      tags !==""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setRemarksError("");
    }
  };
  
  
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (
      name !== "" &&
      remarks !== "" &&
      price !== "" &&
      event.target.value !== "" &&
      tags !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setContentsError("");
    }
  };
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
    if (
      name !== "" &&
      remarks !== "" &&
      event.target.value !== "" &&
      contents !== ""&&
      tags !==""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setRemarksError("");
    }
  };

  // const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
  //   setYouTubeUrl(event.target.value);
  // };
  // const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAddressDetail(event.target.value);
  // };

  // const onClickAddressCode = () => {
  //   setIsVisible(true);
  // };
  // const afterAddressSearch = (data: any) => {
  //   setAddress(data.address);
  //   setZipcode(data.zonecode);
  //   setIsVisible(false);
  // };
  const onClickSubmit = async () => {
    if (name === "") {
      setRemarksError("작성자를 입력해주세요.");
    } else {
      setRemarksError("");
    }
    if (price === "") {
      setPriceError("비밀번호를 입력해주세요.");
    } else {
      setPriceError("");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    } else {
      setContentsError("");
    }
    // if (tags === "") {
    //   setTagsError("제목을 입력해주세요.");
    // } else {
    //   setTagsError("");
    // }
    if (remarks !== "" && price !== "" && name !== "" && contents !== "") {
      try {
        const result = await createUseditem({
          variables: {
            createBoardInput: {
              remarks,
              price,
              name,
              contents,
              images: [imageUrl],
              // boardAddress: {
              //   zipcode,
              //   address,
              //   addressDetail,
              // },
            },
          },
        });
        console.log(result);
        Modal.success({ content: "상품 등록에 성공하였습니다!" });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onClickUpdate = async () => {
    // if (!Price) {
    //   Modal.error({ content: "비밀번호를 입력하세요." });
    //   // alert("비밀번호를 입력하세요.");
    // }

    const updateBoardInput: IUpdateBoardInput = {};
    if (name) updateBoardInput.name = name;
    if (contents) updateBoardInput.contents = contents;
    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.boardId,
          Price: price,
          updateUseditemInput,
        },
      });
      Modal.success({ content: "상품 수정에 성공하였습니다!" });
      router.push(`/boards/${router.query.productId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
      // 에러 any 처리 말고 해결법 뭐가 좋을까?
    }
  };
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      RemarksError={RemarksError}
      PriceError={PriceError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeRemarks={onChangeRemarks}
      onChangePrice={onChangePrice}
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
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      imageUrl={imageUrl}
    />
  );
}
