import Image from "next/image";
import VideoPlayer from "../Base/VideoPlayer";
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

export interface CardMediaProps {
  videoUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  isVisible?: boolean;
}

export default function CardMedia({ videoUrl, imageSrc, imageAlt = "", className = "", isVisible }: CardMediaProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5 }} transition={{ duration: 0.4, ease: "easeInOut" }} className={`rounded-sm overflow-hidden ${className}`}>
        {
          videoUrl ? <VideoPlayer videoUrl={videoUrl} poster={imageSrc} /> : <Image className="w-full" src={imageSrc} alt={imageAlt} width={1600} height={900} />
        }
      </m.div>
    </LazyMotion>
  );
}