import { workItems } from "@/data/workItems";
import PageHeading from "@/components/UI/PageHeading";
import Container from "@/components/Container/Container";
import CardMedia from "@/components/Work/CardMedia";
import { notFound } from "next/navigation";
import Link from "next/link";
import IconArrowRight from "@/components/Icons/IconArrowRight";

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

  const currentIndex = workItems.findIndex((item) => item.id === params.slug);
  const prevItem = currentIndex > 0 ? workItems[currentIndex - 1] : null;
  const nextItem = currentIndex < workItems.length - 1 ? workItems[currentIndex + 1] : null;

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
                      <a className="inline-link" href={url} target="_blank">{url.replace('https://',"")}</a>
                    </li>
                  )
                })
              }
            </ul>
          ) : data.url ? (
            <p className="mb-0"><a className="inline-link" href={data.url} target="_blank">{data.url.replace('https://',"")}</a></p>
          ) : null
        }
      </Container>
      
      <div className="mt-[var(--stacked-component-lg)] border-t border-b border-[var(--border-primary)] w-full">
        <div className="flex">
          {prevItem ? (
            <Link
              href={`/work/${prevItem.id}`}
              className="w-[50%] hover:text-[var(--text-secondary)] hover:bg-[var(--background-secondary)] transition px-[var(--container-padding)] py-[var(--stacked-component-sm)] border-r border-[var(--border-primary)]"
            >
              <span className="heading-6 !mb-[0.5rem] block">Previous Project</span>
              <span className="heading-3 mb-0 block flex items-center gap-2">
                <IconArrowRight className="w-[2rem] h-[2rem] rotate-180" />
                {prevItem.title}
              </span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextItem ? (
            <Link
              href={`/work/${nextItem.id}`}
              className="w-[50%] hover:text-[var(--text-secondary)] hover:bg-[var(--background-secondary)] transition px-[var(--container-padding)] py-[var(--stacked-component-sm)] text-right border-l border-[var(--border-primary)] ml-[-1px]"
            >
              <span className="heading-6 !mb-[0.5rem] block">Next Project</span>
              <span className="heading-3 mb-0 block flex items-center gap-2 justify-end">
                {nextItem.title}
                <IconArrowRight className="w-[2rem] h-[2rem]" />
              </span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

