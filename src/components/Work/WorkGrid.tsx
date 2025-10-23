import Container from "@/components/Container/Container";
import WorkCard from "./WorkCard";
import { workItems } from "@/data/workItems";

export default function WorkGrid({ className }: { className?: string }) {
  return (
    <div className={`work-grid ${className}`}>
      <Container fullWidth>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[3.5rem]">
          {
            workItems.map((item, index) => (
              <WorkCard key={index} {...item} priority={index < 2} />
            ))
          }
        </div>
      </Container>
    </div>
  );
}