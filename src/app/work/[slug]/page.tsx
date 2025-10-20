import { workItems } from "@/data/workItems";
import PageHeading from "@/components/UI/PageHeading";
import Container from "@/components/Container/Container";
import CardMedia from "@/components/Work/CardMedia";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return workItems.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = workItems.find((item) => item.id === params.slug);
  
  if (!data) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: data.title,
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const data = workItems.find((item) => item.id === params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <PageHeading heading={data.title} url={data.urlArray && data.urlArray.length > 0 ? data.urlArray[0] : data.url} buttonLabel="Visit Website" buttonExternal={true} />
      <Container fullWidth>
        <CardMedia
          className="mt-[var(--stacked-component-sm)]"
          videoUrl={data.videoUrl}
          imageSrc={data.imageSrc}
          imageAlt={data.imageAlt}
        />
      </Container>
      <Container fullWidth>
        <p className="heading-2 w-[50ch] !mt-[var(--stacked-component-sm)]">{data.details}</p>
        {
          data.urlArray && data.urlArray.length > 0 ? (
            <ul className="unstyled-list">
              {
                data.urlArray.map((url, index) => {
                  return (
                    <li key={index} className="mb-[0.5rem] last:mb-0">
                      <a href={url} target="_blank">{url.replace('https://',"")}</a>
                    </li>
                  )
                })
              }
            </ul>
          ) : data.url ? (
            <p className="mb-0"><a href={data.url} target="_blank">{data.url.replace('https://',"")}</a></p>
          ) : null
        }
      </Container>
    </div>
  );
}

