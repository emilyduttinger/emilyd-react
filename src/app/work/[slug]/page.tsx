import { workItems } from "@/data/workItems";
import PageHeading from "@/components/Base/PageHeading";
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
      <PageHeading heading={data.title} />
      <Container fullWidth>
        <CardMedia
          className="mt-[var(--stacked-component-md)]"
          videoUrl={data.videoUrl}
          imageSrc={data.imageSrc}
          imageAlt={data.imageAlt}
        />
      </Container>
    </div>
  );
}

