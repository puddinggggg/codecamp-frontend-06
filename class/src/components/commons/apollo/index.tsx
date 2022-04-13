import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 0. 프리랜더링에서 문제가 되는 코드
  // const localAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(localAccessToken || "");
  // 1. 더이상 지원안하는 방법
  // if(process.browser) {
  //     } else{}
  // 2. 조건문 사용하는 방법
  if (typeof window !== "undefined") {
    // 브라우저가 윈도우이다. undefined란 얘기는 터미널에서 yarn dev하고 프리랜더링 할때 라는 뜻
    console.log("브라우저");
    const localAccessToken = localStorage.getItem("accessToken");
    setAccessToken(localAccessToken || "");
  } else {
    //
    console.log("FE서버 yarn dev");
  }
  // 3. useEffect 사용하는 방법
  //   useEffect(() => {
  //   const localAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(localAccessToken || "");
  // },[])

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
