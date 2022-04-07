import ReactPlayer from "react-player";
export default function YoutubePlayer() {
  return (
    <div>
      <ReactPlayer
        url="https://youtu.be/zUNM61rRTBA"
        width={800}
        height={600}
        playing={true}
        muted={true}
      />
    </div>
  );
}
