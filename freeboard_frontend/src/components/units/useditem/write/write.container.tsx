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
const nonSchema = yup.object({});
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
    resolver: yupResolver(props.isEdit ? nonSchema : schema),
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
  const [hashArr, setHashArr] = useState([]);
  // const onKeyUpHash = (event) => {
  //   if (event.KeyCode === 32 && event.target.value !== " ") {
  //     setHashArr([...hashArr, "#" + event.target.value]);
  //     event.target.value = "";
  //   }
  // };
  const onClickSubmit = async (data: ISubmitVariables) => {
    console.log(data);
    console.log("데이타콘솔");
    if (data.tags) {
      data.tags = data.tags
        .toString()
        .replace(/(\s*)/g, "")
        .split("#")
        .filter((e) => e !== "");
    }
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashArr,
            images: fileUrls,
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
    const updateVariables = {
      name: data.name ? data.name : props.data?.name,
      remarks: data.remarks ? data.remarks : props.data?.remarks,
      contents: data.contents ? data.contents : props.data?.contents,
      price: data.price ? Number(data.price) : Number(props.data?.price),
      tags: hashArr,
      images: fileUrls,
      useditemAddress: {
        address: data.address
          ? data.address
          : props.data?.useditemAddress.address,
        addressDetail: data.addressDetail
          ? data.addressDetail
          : props.data?.useditemAddress.addressDetail,
      },
    };
    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput: updateVariables,
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
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  useEffect(() => {
    // 상품설명
    reset({ contents: props.data?.contents });
    // 태그
    if (props.data?.tags?.length) {
      setHashArr([...props.data?.tags]);
    }
    // 이미지
    if (props.data?.images?.length) {
      setFileUrls([...props.data?.images]);
    }
  }, [props.data]);
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  // 해쉬태그 삭제
  const onClickDeleteTag = (tag) => () => {
    setHashArr(hashArr.filter((el) => el !== `${tag}`));
  };

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
      onKeyUpHash={onKeyUpHash}
      onClickDeleteTag={onClickDeleteTag}
      hashArr={hashArr}
    />
  );
}
