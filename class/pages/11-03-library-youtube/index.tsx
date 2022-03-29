import ReactPlayer from "react-player";
export default function LibraryYoutubePage() {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      {/* 플레이어는 <ReactPlayer width={300}> 처럼 해당 마크업 안에서  크기 설정 */}
    </div>
  );
}
