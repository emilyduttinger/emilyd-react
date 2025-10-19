"use client"

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
  const [isPlaying, setIsPlaying] = useState(true);

  const playVideo = () => {
    setIsPlaying(true);
  }

  const pauseVideo = () => {
    setIsPlaying(false);
  }

  return (
    <div className={`video-player relative aspect-video ${className}`}>
      <button onClick={isPlaying ? pauseVideo : playVideo} className="flex items-center justify-center absolute bottom-[1rem] right-[1rem] bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-primary border border-[var(--border-primary)] w-[1.75rem] h-[1.75rem] z-1 rounded-full">
        {isPlaying ? <IconPause className="w-[0.75rem] h-[0.75rem]" /> : <IconPlay className="w-[0.75rem] h-[0.75rem]" />}
      </button>
      <video src={videoUrl} poster={poster} preload="none" autoPlay={autoplay} muted={muted} loop={loop} playsInline={playsInline}></video>
    </div>
  )
}