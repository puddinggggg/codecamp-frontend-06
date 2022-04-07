import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const Wrapper = styled.div`
  background-color: orange;
  height: 50px;
`;
const Home = styled(HomeOutlined)`
  font-size: 20px;
  line-height: 50px;
  margin-left: 15px;
`;
export default function LayoutHeader() {
  const router = useRouter();

  function goHome() {
    router.push("/boards");
  }
  return (
    <Wrapper>
      <Home onClick={goHome} />
    </Wrapper>
  );
}
