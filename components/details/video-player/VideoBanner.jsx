import ReactPlayer from "react-player";

export default function VideoBanner({videos}) {
  return (
    // Important! Alwys set the container height explicitlya
    <ReactPlayer
      url={videos && videos[0]?.url}
      height="100%"
      width="100%"
    />
  );
}
