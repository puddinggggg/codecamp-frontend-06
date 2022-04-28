import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import UseditemWriteUI from "./write.presenter";

import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./write.queries";
import { ISubmitVariables, IWriteUseditemProps } from "./write.types";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄 요약을 입력해주세요."),
  contents: yup.string().required("상품 설명을 입력해주세요."),
  price: yup.number().required("판매 가격을 입력해주세요."),
});
export default function WriteBoard(props: IWriteUseditemProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    // 수정할때 defaultvalue가 있어도 빈값처럼 오류뜨는것 3항연산자로 해결
    mode: "onChange",
    // formState 안에 에러가 담겨있다
    // mode onChange하면 버튼 처음에 안눌러도 에러메세지 바로 뜸
  });

  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  // const [hashTag, setHashTag] = useState("");
  // const [hashArr, setHashArr] = useState([]);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  // 에디터
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  // 지도주소 관련

  const [isVisible, setIsVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  const onClickAddressCode = () => {
    setIsVisible((prev) => !prev);
  };
  const afterAddressSearch = (data: any) => {
    setAddress(data.address);

    setIsVisible(false);
    console.log(data.address);
  };
  useEffect(() => {
    setAddress(props.data?.fetchUseditem?.useditemAddress?.address);
  }, [props.data]);

  // 태그 관련
  // const [tags, setTags] = useState("");
  // const onKeyUpHash = (event) => {
  //   if (event.KeyCode === 32 && event.target.value !== " ") {
  //     setHashArr([...hashArr, "#" + event.target.value]);
  //     event.target.value = "";
  //   }
  // };
  const onClickSubmit = async (data: ISubmitVariables) => {
    const { price, ...rest } = data;
    console.log(data);
    console.log("데이타콘솔");

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            price: Number(data.price),
            ...rest,
            images: fileUrls,
            // tags: hashArr,
            useditemAddress: {
              address,
              addressDetail,
            },
          },
        },
      });

      Modal.success({ content: "상품 등록에 성공하였습니다!" });
      console.log("리절트콘솔", result);
      router.push(`/useditem/${result.data.createUseditem._id}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
      console.log("에러", error);
      console.log("에러메시지", error.message);
    }
  };
  const onClickUpdate = async (data) => {
    // const updateUseditemInput: IUpdateUseditemInput = {};
    // if (data.name) updateUseditemInput.name = data.name;
    // if (data.contents) updateUseditemInput.contents = data.contents;
    const updateUseditemInput: IUpdateUseditemInput = {};
    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
      });
      Modal.success({ content: "상품 수정에 성공하였습니다!" });
      router.push(`/useditem/${router.query.useditemId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
      // console.log("에러", error);
      // console.log("에러메시지", error.message);
      // 에러 any 처리 말고 해결법 뭐가 좋을까?
    }
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);
  return (
    <UseditemWriteUI
      isActive={formState.isValid}
      isVisible={isVisible}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      getValues={getValues}
      reset={reset}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onChangeAddressDetail={onChangeAddressDetail}
      address={address}
      addressDetail={addressDetail}
      onClickAddressCode={onClickAddressCode}
      afterAddressSearch={afterAddressSearch}
      // onKeyUpHash={onKeyUpHash}
      // hashArr={hashArr}
    />
  );
}
