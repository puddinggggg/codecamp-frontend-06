import { useAuth } from "../../src/components/commons/hooks/useAuth-short";

export default function CustomHooksUseAuthPage() {
  useAuth();
  //   이 페이지를 들어올 때 useAuth 검증을 거친다
  return <div>푸딩의 프로필페이지</div>;
}
