// import { useRouter } from "next/router";
// import { useRecoilState } from "recoil";
// import { visitedPageState } from "../../src/commons/store";

import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  // useRouter 이용한 부분을 따로 빼면 custom-hook이 된다.
  // const router = useRouter();
  // const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState)
  // const onClickMoveToPage = (path) => () => {
  //   setVisitedPage(path) // 이동하기 전에 현재 페이지 정보를 저장하고 이동
  //   router.push(path);
  // };
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <div>
      <button
        // id ="/board" 라고 하고 event.target.id 이용해도 되지만 중복 가능성이 있어 HOF 사용
        onClick={onClickMoveToPage("/board")}
      >
        게시판으로 이동
      </button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  );
}
