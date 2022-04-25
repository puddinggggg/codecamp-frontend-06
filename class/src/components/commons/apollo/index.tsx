import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccesToken";
import { accessTokenState, userInfoState } from "../../../commons/store";
// import { GraphQLClient, gql } from "graphql-request";
export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // 0. 프리랜더링에서 문제가 되는 코드
  // const localAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(localAccessToken || "");
  // 1. 더이상 지원안하는 방법
  // if(process.browser) {
  //     } else{}
  // 2. 조건문 사용하는 방법
  // if (typeof window !== "undefined") {
  //   // 브라우저가 윈도우이다. undefined란 얘기는 터미널에서 yarn dev하고 프리랜더링 할때 라는 뜻
  //   console.log("브라우저");
  //   const localAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(localAccessToken || "");
  // } else {
  //   //
  //   console.log("FE서버 yarn dev");
  // }
  // 3. useEffect 사용하는 방법
  useEffect(() => {
    // 기존에 localStorage에 저장할 때 쓰던 코드
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급받아서 state에 넣어주기

    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // const RESTORE_ACCESS_TOKEN = gql`
  //   mutation restoreAccessToken {
  //     restoreAccessToken {
  //       accessToken
  //     }
  //   }
  // `;

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // graphQL docs에도 나와있다.
    // 1-1. 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러(unauthenticated)인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken 재발급
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            // 3-1. 재발급받은 accessToken으로 방금 실패한 쿼리 재요청
            // getContext, setContext를 이용해 정보를 받아오거나 수정할 수 있다.

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                // 기존의 header 정보를 받아오고
                Authorization: `Bearer ${newAccessToken}`,
                // 토큰값만 새로 설정
              },
            });

            // const graphQLClient = new GraphQLClient(
            //   "https://backend06.codebootcamp.co.kr/graphql"
            // );

            // const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
            // const newAccessToken = result.restoreAccessToken.accessToken;
            // 2-2. 재발급한 accessToken 저장
          });

          // 3-2. 변경된 operation 재요청
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 중요한 정보 포함여부
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
