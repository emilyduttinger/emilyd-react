import Container from "../Container/Container";
import Button from "./Button";
import Fade from "../Animation/Fade";

export interface PageHeadingProps {
  heading: string;
  url?: string;
  buttonLabel?: string;
  buttonExternal?: boolean;
}

export default function PageHeading({heading, url, buttonLabel, buttonExternal = false}: PageHeadingProps) {
  return (
    <Fade fadeUp className="pt-[var(--stacked-component-sm)] sm:pt-[var(--stacked-component-xl)] pb-[var(--stacked-component-md)]">
      <Container className="sm:flex sm:justify-between sm:items-center text-center sm:text-left">
        <h1 className="mb-0 max-w-[22ch] heading-lg">{heading}</h1>
        {
          typeof url === 'string' && typeof buttonLabel === 'string' && (
            <Button linkPath={url} className="mt-[var(--heading-margin)] sm:mt-0" external={buttonExternal}>{buttonLabel}</Button>
          )
        }
      </Container>
    </Fade>
  );
}