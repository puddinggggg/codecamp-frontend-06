import styled from "@emotion/styled";
import Carousel from "../carousel"

const Wrapper = styled.div`
  background-color: pink;
  height: 300px;
`;
export default function LayoutBanner() {
  return (
    <Wrapper>
      
      <Carousel />
    </Wrapper>
  );
}
