import Container from "@/components/Container/Container";
import WorkCard from "./WorkCard";
import { workItems } from "@/data/workItems";

export default function WorkGrid() {
  return (
    <Container fullWidth>
      <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[3.5rem] pt-[var(--stacked-component-lg)]">
        {
          workItems.map((item, index) => (
            <WorkCard key={index} {...item} />
          ))
        }
      </div>
    </Container>
  );
}