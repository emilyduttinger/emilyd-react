import Image from "next/image";
import VideoPlayer from "../UI/VideoPlayer";
import Fade from "../Animation/Fade";

export interface CardMediaProps {
  videoUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  animateOnScroll?: boolean;
  priority?: boolean;
}

export default function CardMedia({ videoUrl, imageSrc, imageAlt = "", className = "",  animateOnScroll = true, priority = false}: CardMediaProps) {
  return (
    <Fade scrolling={animateOnScroll} className={`rounded-sm overflow-hidden ${className}`}>
      {
        videoUrl ? (
          <VideoPlayer videoUrl={videoUrl} poster={imageSrc} />
        ) : (
          <Image 
            className="w-full" 
            src={imageSrc} 
            alt={imageAlt} 
            width={1600} 
            height={900}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
          />
        )
      }
    </Fade>
  );
}