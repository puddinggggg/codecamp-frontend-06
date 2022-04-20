import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { HomeOutlined } from "@ant-design/icons";
const Wrapper = styled.div`
  background-color: orange;
  height: 50px;
  display: flex;
  justify-content:space-between;
`;
const Home = styled(HomeOutlined)`
  font-size: 20px;
  line-height: 50px;
  margin-left: 15px;
`;
const SignWrapper = styled.div`
display:flex;
`;

const Login = styled.button``;
const SignUp = styled.button``;

export default function LayoutHeader() {
  const router = useRouter();

  function goHome() {
    router.push("/boards");
  }
  function login(){
    router.push("/login");
  }
  function signUp(){
    router.push("/signup");
  }
  return (
    <Wrapper>
      <Home onClick={goHome} />
      <SignWrapper>
<Login onClick={login}>로그인</Login>
<SignUp onClick={signUp}>회원가입</SignUp>
      </SignWrapper>
    </Wrapper>
  );
}
