import { useState } from 'react';
import IconPlay from '../Icons/IconPlay';
import IconPause from '../Icons/IconPause';

export interface VideoPlayerProps {
  videoUrl: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ videoUrl, autoplay = true, muted = true, loop = true, playsInline = true, poster = "", className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  }

  const pauseVideo = () => {
    setIsPlaying(false);
  }

  return (
    <div className={`video-player ${className}`}>
      <video src={videoUrl} poster={poster} preload="none" autoPlay={autoplay} muted={muted} loop={loop} playsInline={playsInline}></video>
    </div>
  )
}