import Image from "next/image";
import VideoPlayer from "../Base/VideoPlayer";

export interface CardMediaProps {
  videoUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export default function CardMedia({ videoUrl, imageSrc, imageAlt = "", className = "" }: CardMediaProps) {
  return (
    <div className={`rounded-sm overflow-hidden ${className}`}>
      {
        videoUrl ? <VideoPlayer videoUrl={videoUrl} poster={imageSrc} /> : <Image src={imageSrc} alt={imageAlt} width={1600} height={900} />
      }
    </div>
  );
}