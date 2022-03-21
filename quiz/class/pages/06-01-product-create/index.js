import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const router = useRouter();
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_PRODUCT);

  const callGraphqlApi = async () => {
    try {
      const result = await callApi({
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
      router.push(`/06-02-product-page/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
    
  };
  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.valueAsNumber);
  };

  return (
    <div>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      판매물품: <input type="text" onChange={onChangeName} />
      <br />
      상세설명: <input type="text" onChange={onChangeDetail} />
      <br />
      가격: <input type="number" onChange={onChangePrice} /> <br />
      <button onClick={callGraphqlApi}>상품 등록하기</button>
    </div>
  );
}
