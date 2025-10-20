import Container from "../Container/Container";

export interface PageHeadingProps {
  heading: string;
}

export default function PageHeading({heading}: PageHeadingProps) {
  return (
    <div className="pt-[var(--stacked-component-lg)]">
      <Container>
        <h1 className="mb-0 heading-lg">{heading}</h1>
      </Container>
    </div>
  )
}