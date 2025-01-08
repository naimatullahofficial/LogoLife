import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      player.current.classList.add("hide");
      if (videoRef.current) {
        videoRef.current.pause(); // Pause the video
        videoRef.current.currentTime = 0; // Reset the video to the beginning
      }
    }
  };

  return (
    <div
      ref={player}
      className={`video-player ${props.className}`}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={props.src} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
