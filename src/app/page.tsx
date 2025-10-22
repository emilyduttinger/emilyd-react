import HomeIntro from "@/components/HomeIntro/HomeIntro";
import WorkGrid from "@/components/Work/WorkGrid";

export default function Home() {
  return (
    <div>
      <HomeIntro />
      <WorkGrid className="sm:pt-[var(--stacked-component-lg)]" />
    </div>
  );
}
