// import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import styled from "@emotion/styled";

const GraphqlApiBtn = styled.button``;

const CREATE_PROFILE = gql`
mutation {
    createProfile(name:"이름",age:100, school:"노인대학"){
        _id
        number
        message}}
`;

export default function createProfile() {
    // const [data, setData] = useState("");
    const [callApi] = useMutation(CREATE_PROFILE);

    const callGraphqlApi = async () => {
        const result = await callApi();
        console.log(result);
        console.log(result.data.createProfile.message);
    };
    return(
        <div>
      <GraphqlApiBtn onClick={callGraphqlApi}>GRAPHQL-API 요청하기</GraphqlApiBtn>
      
    </div>
    )
}
