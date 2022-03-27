//컨테이너
import { useState } from "react";
import { useMutation } from "@apollo/client";
import ProductWriteUI from "./Product.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./Product.queries";
import { useRouter } from "next/router";

export default function ProductWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState("");
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const onClickUpdate = async () => {
    await updateProduct({
      
      variables: {
        seller,
        productId : router.query.productId,
          updateProductInput: {
            name,
            detail,
            price,
          },
      },
    });
    alert("게시물 수정 성공");
    alert("페이지 이동")

    router.push(`/09-01-product/${router.query.productId}`);
  };

  const callGraphqlApi = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price,
          },
        },
      });
      console.log(result);
      console.log(result.data.createProduct.message);
      setData(result.data.createProduct.message);
      alert("게시물 등록 성공")
      alert("페이지 이동")
      router.push(`/09-01-product/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
    
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);

    if (event.target.value !== "" && name !== "" && detail !== ""&& price !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);

    if (seller !== "" && event.target.value !== "" && detail !== ""&& price !== "") {
        setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);

    if (seller !== "" && name !== "" && event.target.value !== ""&& price !== "") {
        setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePrice = (event) => {
    setPrice(event.target.valueAsNumber);
    if (seller !== "" && name !== "" && detail !== ""&& event.target.value !== "") {
        setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <ProductWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      callGraphqlApi={callGraphqlApi}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
