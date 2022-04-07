import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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
  const [mySeller, setMySeller] = useState("");
  const [myName, setMyName] = useState("");
  const [myDetail, setMyDetail] = useState("");
  const [myPrice, setMyPrice] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_PRODUCT);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: {
        seller: mySeller,
        createProductInput: {
        name: myName,
        detail: myDetail,
        price: myPrice}
      },
    });
    console.log(result);
    console.log(result.data.createProduct.message);
    setData(result.data.createProduct.message);
  };

  const onChangeSeller = (event) => {
    setMySeller(event.target.value);
  };
  const onChangeName = (event) => {
    setMyName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setMyDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setMyPrice(event.target.valueAsNumber);
  };

  return (
    <div>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      판매물품: <input type="text" onChange={onChangeName} />
      <br />
      상세설명: <input type="text" onChange={onChangeDetail} />
      <br />
      가격: <input type="number" onChange={onChangePrice} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청</button>
    </div>
  );
}
