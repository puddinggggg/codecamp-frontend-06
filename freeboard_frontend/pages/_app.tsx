import "../styles/globals.css";
import "antd/dist/antd.css";

import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { initializeApp } from "firebase/app";
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
  return (
    <RecoilRoot>
      <ApolloSetting>
        {/* <Global styles={globalStyles} /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
