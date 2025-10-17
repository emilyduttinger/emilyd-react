import Image from "next/image";

export interface CardMediaProps {
  videoUrl?: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function CardMedia({ videoUrl, imageSrc, imageAlt = "" }: CardMediaProps) {
  return (
    <div className="card-media">
      {
        videoUrl ? <video src={videoUrl} poster={imageSrc} preload="none" autoPlay muted loop playsInline></video>
        : <Image src={imageSrc} alt={imageAlt} width={1600} height={900} />
      }
    </div>
  );
}