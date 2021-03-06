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
import { accessTokenState, isLoadedState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsLoaded] = useRecoilState(isLoadedState);
  useEffect(() => {
    setIsLoaded(true);
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
      setIsLoaded(false);
    });
  }, []);
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        if (error.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            return forward(operation);
          });
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
