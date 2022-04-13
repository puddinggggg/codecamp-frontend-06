import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  const [accessToken, _] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (accessToken === "") {
      alert("로그인을 먼저해주세요.");
      router.push("/22-01");
    }
  }, [accessToken]);

  return <div>{data?.fetchUserLoggedIn.name} 로그인</div>;
}
