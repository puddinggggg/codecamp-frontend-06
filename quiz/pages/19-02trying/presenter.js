import Uploads01 from "./uploadcontainer";
import styled from "@emotion/styled";

const ImageWrapper = styled.div``;
export default function BoardWriteUI(props) {
  <ImageWrapper>
    <div>사진첨부</div>
    {/* // 항상 3개의 컴포넌트가 뿌려집니다. // 이미지를 보여줄지, 추가 버튼을
    보여줄지는 안에서 조건부로 구분합니다. */}
    {new Array(3).fill(1).map((data, index) => (
      <Uploads01
        key={`${data}_${index}`}
        index={index}
        onChangeFiles={props.onChangeFiles}
        fileUrls={props.fileUrls}
      />
    ))}
  </ImageWrapper>;
}
