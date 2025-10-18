import Image from "next/image";

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
        videoUrl ? <video src={videoUrl} poster={imageSrc} preload="none" autoPlay muted loop playsInline></video>
        : <Image src={imageSrc} alt={imageAlt} width={1600} height={900} />
      }
    </div>
  );
}