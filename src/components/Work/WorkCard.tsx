import CardMedia from "./CardMedia";

export interface WorkCardProps {
  title: string;
  videoUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  url?: string;
  urlArray?: string[];
  details: string;
  role: string;
  tags: string[];
}

export default function WorkCard({ title, videoUrl, imageSrc, imageAlt = "", url, urlArray, details, role, tags }: WorkCardProps) {
  return (
    <div className="work-card">
      <a
        className="card-image-link unstyled-link relative text-primary"
        href={urlArray && urlArray.length > 0 ? urlArray[0] : url}
        target="_blank"
      >
        <CardMedia videoUrl={videoUrl} imageSrc={imageSrc} imageAlt={imageAlt} />
        <ul className="tags unstyled-list absolute bottom-[0] left-[0] flex flex-wrap gap-[0.25rem] p-[1rem] sm:gap-[0.5rem]">
          {
            tags.map((item, index) => {
              return <li key={index} className="font-headings px-[0.5rem] py-[0.25rem] m-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-primary flex items-center rounded-[2rem] text-[0.75rem] sm:px-[0.75rem] sm:py-[0.5rem] sm:text-[0.875rem]">{item}</li>
            })
          }
        </ul>
      </a>
    </div>
  );
}