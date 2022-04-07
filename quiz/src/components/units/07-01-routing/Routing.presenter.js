import {SubmitBtn, WriterInput, TitleInput, ContentsInput} from './Routing.styles'
export default function BoardWriteUI(props) {

return (
    <div>
      작성자: <WriterInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목: <TitleInput type="text" onChange={props.onChangeTitle} />
      <br />
      내용: <ContentsInput type="text" onChange={props.onChangeContents} />
      <br />
      <SubmitBtn onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청</SubmitBtn>
    </div>
  )}