import CardMedia from "./CardMedia";
import Button from "../UI/Button";
import styles from "./WorkCard.module.css"

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
  id: string;
}

export default function WorkCard({ title, videoUrl, imageSrc, imageAlt = "", url, urlArray, details, role, tags, id }: WorkCardProps) {
  return (
    <div className={styles.workCard}>
      <div className={`${styles.cardMediaWrapper} rounded-sm overflow-hidden`}>
        <CardMedia videoUrl={videoUrl} imageSrc={imageSrc} imageAlt={imageAlt} />
        <div className={`${styles.hoverContent} hoverContent`}>
          <Button linkPath={`/work/${id}`}>View Case Study</Button>
        </div>
        <ul className="tags unstyled-list absolute bottom-[0] left-[0] flex flex-wrap gap-[0.25rem] p-[1rem] sm:gap-[0.5rem]">
          {
            tags.map((item, index) => {
              return <li key={index} className="font-headings px-[0.5rem] py-[0.25rem] m-0 bg-[var(--background-transparency)] backdrop-blur-md text-primary flex items-center rounded-[2rem] text-[0.75rem] sm:px-[0.75rem] sm:text-[0.875rem] text-[var(--text-primary)]">{item}</li>
            })
          }
        </ul>
      </div>
      <div className="card-content">
        <h3 className="m-0">{title}</h3>
        <div className="card-table border-t border-[var(--border-primary)] mt-[1.5rem]">
          <div className={styles.row}>
            <p className="heading-6 m-0">
              {
                urlArray && urlArray.length > 0 ? "URLs" : "URL"
              }
            </p>
            {
              urlArray && urlArray.length > 0 ? (
                <ul className={styles.urlList}>
                  {
                    urlArray.map((url, index) => {
                      return (
                        <li key={index}>
                          <a href={url} target="_blank">{url.replace('https://',"")}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              ) : url ? (
                <p><a href={url} target="_blank">{url.replace('https://',"")}</a></p>
              ) : null
            }
          </div>
          <div className={styles.row}>
            <p className="heading-6 m-0">Details</p>
            <p>{details}</p>
          </div>
          <div className={styles.row}>
            <p className="heading-6 m-0">Role</p>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}