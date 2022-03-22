import {SubmitBtn, WriterInput} from './BoardWrite.styles'
export default function BoardWriteUI(props) {
    
  return (
    <div>
      작성자: <WriterInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목: <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용: <input type="text" onChange={props.onChangeContents} />
      <br />
      <SubmitBtn onClick={props.callGraphqlApi } isActive={props.isActive}>GRAPHQL-API 요청</SubmitBtn>
      {/* <div>{data}</div> */}
    </div>
  );
}
