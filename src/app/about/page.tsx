import type { Metadata } from "next";
import PageHeading from "@/components/UI/PageHeading";
import AboutContent from "@/components/UI/AboutContent";

export const metadata: Metadata = {
  title: "About | Emily Duttinger",
  description: "Frontend UX/UI Engineer Based in Boynton Beach, FL",
};

export default function About() {
  return (
    <div>
      <PageHeading heading="UX/UI Engineer" />
      <AboutContent />
    </div>
  );
}