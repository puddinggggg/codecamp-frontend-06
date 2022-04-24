import { useRouter } from "next/router";
import Link from "next/Link";

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };
  return (
    <div>
      <button onClick={onClickMoveToMap}>go to map</button>
      <Link href="/29-03-kakao-map-routed">go to map by Link</Link>
      <Link href="/29-03-kakao-map-routed">
        <a>go to map by Link</a>
        {/* a태그는 꼭 안써도 되지만 사용하는 것을 권장. 가짜a */}
      </Link>
      <a href="/29-03-kakao-map-routed">서버사이드랜더링</a>
    </div>
  );
}
