import React, { useRef } from "react";
import "./VideoPlayer.css";
import defaultVideo from "../../assets/Columbia-Barnard.mp4";

const VideoPlayer = (props) => {
  const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
          player.current.classList.add("hide");
        }
      };

  return (
    <div
      ref={player}
      className={`video-player ${props.className}`}
      onClick={closePlayer}
    >
      <video src={props.src} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
