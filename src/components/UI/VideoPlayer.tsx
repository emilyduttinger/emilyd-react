"use client"

import { useRef, useState } from 'react';
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const playVideo = () => {
    setIsPlaying(true);
    videoRef?.current?.play();
  }

  const pauseVideo = () => {
    setIsPlaying(false);
    videoRef?.current?.pause();
  }

  return (
    <div className={`video-player relative aspect-video ${className}`}>
      <button onClick={isPlaying ? pauseVideo : playVideo} className="flex items-center justify-center absolute bottom-[1rem] right-[1rem] bg-[var(--background-transparency)] backdrop-blur-md text-[var(--text-primary)] border border-[var(--border-primary)] w-[1.75rem] h-[1.75rem] z-100 rounded-full cursor-pointer hover:border-[var(--text-primary)] transition">
        {isPlaying ? <IconPause className="w-[0.75rem] h-[0.75rem]" /> : <IconPlay className="w-[0.75rem] h-[0.75rem]" />}
        <span className="visually-hidden">{ isPlaying ? 'Pause Video' : 'Play Video' }</span>
      </button>
      <video ref={videoRef} src={videoUrl} poster={poster} preload="metadata" autoPlay={autoplay} muted={muted} loop={loop} playsInline={playsInline} className="w-full"></video>
    </div>
  )
}