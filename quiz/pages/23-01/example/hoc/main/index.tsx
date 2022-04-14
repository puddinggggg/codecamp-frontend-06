import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../../../src/components/commons/example/hoc/withAuth";
import styled from "@emotion/styled";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
const Img = styled.img`
  width: 600px;
  object-fit: cover;
`;

function LoginSuccessPage() {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다.");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);
  return (
    <div>
      {data?.fetchUserLoggedIn.name}님 어서오시개
      <Img src="https://patch.com/img/cdn20/shutterstock/22821257/20200106/020124/styles/patch_image/public/shutterstock-260124632___06140043794.jpg" />
    </div>
  );
}

export default withAuth(LoginSuccessPage);
