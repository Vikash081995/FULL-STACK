import React, { useRef, useState } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Skip forward 10 seconds
    }
  };

  return (
    <div>
      <Video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleFastForward}>Forward 10 seconds</button>
    </div>
  );
}
