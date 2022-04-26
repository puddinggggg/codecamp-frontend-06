import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { HomeOutlined } from "@ant-design/icons";
import ReloadPoint from "../../reload";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
const Wrapper = styled.div`
  background-color: orange;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Home = styled(HomeOutlined)`
  font-size: 20px;
  line-height: 50px;
  margin-left: 15px;
`;
const SignWrapper = styled.div`
  display: flex;
`;
const Name = styled.span``;
const Point = styled.span``;

const Login = styled.button``;
const LogOut = styled.button``;
const SignUp = styled.button``;

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  function goHome() {
    router.push("/boards");
    console.log(accessToken);
  }
  function onClicklogin() {
    router.push("/login");
  }
  function onClickSignUp() {
    router.push("/signup");
  }
  const onClickLogOut = async () => {
    try {
      setAccessToken("");
      alert("로그아웃완료");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      <Home onClick={goHome} />
      {accessToken ? (
        <SignWrapper>
          <Name>{data?.fetchUserLoggedIn.name}님</Name>
          <LogOut onClick={onClickLogOut}>로그아웃</LogOut>
          <Point>
            보유 포인트 : {data?.fetchUserLoggedIn.userPoint.amount} 원
          </Point>
          <ReloadPoint />
        </SignWrapper>
      ) : (
        <SignWrapper>
          <Login onClick={onClicklogin}>로그인</Login>
          <SignUp onClick={onClickSignUp}>회원가입</SignUp>
        </SignWrapper>
      )}
    </Wrapper>
  );
}
