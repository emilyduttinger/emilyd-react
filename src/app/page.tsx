import HomeIntro from "@/components/HomeIntro/HomeIntro";
import WorkGrid from "@/components/Work/WorkGrid";

export default function Home() {
  return (
    <div className="py-[var(--stacked-component-lg)]">
      <HomeIntro />
      <WorkGrid />
    </div>
  );
}
