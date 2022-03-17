// import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import styled from "@emotion/styled";

const GraphqlApiBtn = styled.button``;

const CREATE_PRODUCT = gql`
mutation {
    createProduct(seller:"테스터", createProductInput:{name:"테스트",detail:"테스형",price:12345}){
        _id
        number
        message 
    }}
`;

export default function createProduct() {
    // const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_PRODUCT);

    const callGraphqlApi = async () => {
        const result = await callApi();
        console.log(result);
        console.log(result.data.createProduct.message);
    };
    return(
        <div>
      <GraphqlApiBtn onClick={callGraphqlApi}>GRAPHQL-API 요청하기</GraphqlApiBtn>
      
    </div>
    )
}
