import { useRouter } from "next/router";

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push("/quiz06/map1");
  };
  return (
    <div>
      <button onClick={onClickMoveToMap}>이동하기</button>
    </div>
  );
}
