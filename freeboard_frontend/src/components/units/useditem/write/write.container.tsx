import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import UseditemWriteUI from "./write.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./write.queries";
import {
  IWriteUseditemProps,
  IUpdateUsemitemInput,
  ISubmitVariables,
} from "./write.types";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄 요약을 입력해주세요."),
  contents: yup.string().required("상품 설명을 입력해주세요."),
  price: yup.number().required("판매 가격을 입력해주세요."),
});
export default function WriteBoard(props: IWriteUseditemProps) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    // 수정할때 defaultvalue가 있어도 빈값처럼 오류뜨는것 3항연산자로 해결
    mode: "onChange",
    // formState 안에 에러가 담겨있다
    // mode onChange하면 버튼 처음에 안눌러도 에러메세지 바로 뜸
  });

  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  // const [tags, setTags] = useState("");
  // const [zipcode, setZipcode] = useState("");
  // const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");
  // const [tagsError, setTagsError] = useState("");

  const onClickSubmit = async (data: ISubmitVariables) => {
    const { price, ...rest } = data;
    console.log(data);
    if (
      data.remarks !== "" &&
      Number(data.price) &&
      data.name !== "" &&
      data.contents !== ""
    ) {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              price: Number(data.price),
              ...rest,
              images: fileUrls,
              // boardAddress: {
              //   zipcode,
              //   address,
              //   addressDetail,
              // },
            },
          },
        });

        Modal.success({ content: "상품 등록에 성공하였습니다!" });
        console.log(result);
        router.push(`/useditem/${result.data.createUseditem._id}`);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onClickUpdate = async (data) => {
    // if (!Price) {
    //   Modal.error({ content: "비밀번호를 입력하세요." });
    //   // alert("비밀번호를 입력하세요.");
    // }

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.contents) updateUseditemInput.contents = data.contents;
    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          price: Number(data.price),
          updateUseditemInput,
        },
      });
      Modal.success({ content: "상품 수정에 성공하였습니다!" });
      router.push(`/useditem/${router.query.useditemId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
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
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
