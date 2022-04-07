import styled from "@emotion/styled";
import Slick from "../../../../../pages/slick";
const Wrapper = styled.div`
  background-color: pink;
  height: 400px;
`;
export default function LayoutBanner() {
  return (
    <Wrapper>
      Banner area 배너영역
      <Slick />
    </Wrapper>
  );
}
