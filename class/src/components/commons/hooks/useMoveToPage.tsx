import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMoveToPage = (path) => () => {
    setVisitedPage(path); // 이동하기 전에 현재 페이지 정보를 저장하고 이동
    router.push(path);
  };
  return {
    visitedPage,
    onClickMoveToPage,
  };
}
