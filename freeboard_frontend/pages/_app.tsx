import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
// Import the functions you need from the SDKs you need
import { createUploadLink } from "apollo-upload-client";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfd1FYqmucaERCohzOw4W7hGL60Y38Je4",
  authDomain: "firetry-a2eb0.firebaseapp.com",
  projectId: "firetry-a2eb0",
  storageBucket: "firetry-a2eb0.appspot.com",
  messagingSenderId: "545291890263",
  appId: "1:545291890263:web:859df91df0da55effa3d12",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
