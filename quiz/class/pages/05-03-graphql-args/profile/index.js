import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_PROFILE = gql`
  mutation createProfile($name: String, $age: Int , $school: String) {
    createProfile(name: $name, age: $age, school: $school) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [myName, setMyName] = useState("")
  const [myAge, setMyAge] = useState("")
  const [mySchool, setMySchool] = useState("")
  
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_PROFILE);

  const callGraphqlApi = async () => {
      const result = await callApi({
      variables: {   name: myName, age: myAge, school: mySchool  }
    })
    console.log(result);
    console.log(result.data.createProfile.message);
    setData(result.data.createProfile.message);
  };

  const onChangeName = (event)=>{
    setMyName(event.target.value)

  }
  const onChangeAge = (event)=>{
    setMyAge(event.target.valueAsNumber);
  }
  const onChangeSchool = (event)=>{
    setMySchool(event.target.value)
  }

  return (
    <div>
      이름: <input type="text" onChange={onChangeName}/><br />
      나이: <input type="number" onChange={onChangeAge}/><br />
      학교: <input type="text" onChange={onChangeSchool}/><br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청</button>
      
    </div>
  );
}
