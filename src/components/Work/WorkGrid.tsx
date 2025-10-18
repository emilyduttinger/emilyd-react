import Container from "@/components/Container/Container";
import WorkCard from "./WorkCard";
import { workItems } from "@/data/workItems";

export default function WorkGrid({ id }: { id: string }) {
  return (
    <div id={id} className="work-grid">
      <Container fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[3.5rem] pt-[var(--stacked-component-lg)]">
          {
            workItems.map((item, index) => (
              <WorkCard key={index} {...item} />
            ))
          }
        </div>
      </Container>
    </div>
  );
}