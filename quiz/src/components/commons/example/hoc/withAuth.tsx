// @ts-ignore
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  // 권한분기 로직 추가하기
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 먼저 접속 나중에");
      router.push("/23-01/example/hoc/login");
    }
  }, []);
  return <Component {...props} />;
};
