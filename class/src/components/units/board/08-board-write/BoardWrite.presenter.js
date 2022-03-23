// 프리젠터컴포넌트
import {SubmitBtn, WriterInput} from './BoardWrite.styles'
export default function BoardWriteUI(props) {
    
  return (
    <div>
        <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자: <WriterInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목: <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용: <input type="text" onChange={props.onChangeContents} />
      <br />
      <SubmitBtn onClick={props.idEdit? props.onClickUpdate : props.callGraphqlApi } isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}하기</SubmitBtn>
      {/* <div>{data}</div> */}
    </div>
  );
}
