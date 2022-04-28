import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, isLoadedState } from "../../../commons/store";

// import { accessTokenState } from "../../../commons/store";
// 권한분기 로직 추가하기
// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoaded] = useRecoilState(isLoadedState);
  useEffect(() => {
    if (!isLoaded && !accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다!!!");
          router.push("/login");
        }
      });
    }
  }, []);
  return <Component {...props} />;
};
