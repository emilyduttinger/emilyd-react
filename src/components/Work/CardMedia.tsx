import Image from "next/image";
import VideoPlayer from "../UI/VideoPlayer";
import Fade from "../Animation/Fade";

export interface CardMediaProps {
  videoUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  animateOnScroll?: boolean;
}

export default function CardMedia({ videoUrl, imageSrc, imageAlt = "", className = "",  animateOnScroll = true}: CardMediaProps) {
  return (
    <Fade scrolling={animateOnScroll} className={`rounded-sm overflow-hidden ${className}`}>
      {
        videoUrl ? <VideoPlayer videoUrl={videoUrl} poster={imageSrc} /> : <Image className="w-full" src={imageSrc} alt={imageAlt} width={1600} height={900} />
      }
    </Fade>
  );
}