import { Input, Wrapper } from "./firebase.write.styles";
import { IFirebaseWriteUIProps } from "./firebase.write.types";

export default function FirebaseWriteUI(props: IFirebaseWriteUIProps) {
  return (
    <Wrapper>
      <div>
        작성자: <Input type="text" onChange={props.onChangeWriter} />
      </div>
      <div>
        제 목: <Input type="text" onChange={props.onChangeTitle} />
      </div>
      <div>
        내 용: <Input type="text" onChange={props.onChangeContents} />
      </div>
      <div>
        <button onClick={props.onClickSubmit}>등록하기</button>
      </div>
    </Wrapper>
  );
}
