import type { Metadata } from "next";
import PageHeading from "@/components/UI/PageHeading";
import WorkGrid from "@/components/Work/WorkGrid";

export const metadata: Metadata = {
  title: "Work | Emily Duttinger",
  description: "I'm a Frontend UI/UX Engineer specializing in creating engaging and accessible web experiences. I'm a firm believer in the power of design systems to create scalable and consistent user interfaces.",
};

export default function Work() {
  return (
    <div>
      <PageHeading heading="My Work" />
      <WorkGrid />
    </div>
  );
}
