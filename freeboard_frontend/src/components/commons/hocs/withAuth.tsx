// @ts-ignore
import { useRouter } from "next/router";
import { useEffect } from "react";
import { accessTokenState } from "../../../commons/store";
// 권한분기 로직 추가하기
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!accessTokenState) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
    }
  }, []);
  return <Component {...props} />;
};
// 권한분기 로직 추가하기
