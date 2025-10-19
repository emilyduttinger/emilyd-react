import Navigation from "@/components/Navigation/Navigation";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center text-center gap-[1.5rem] px-[var(--container-padding)] py-[1.5rem] sm:flex-row sm:justify-between sm:text-left sm:px-[2.5rem] relative z-100">
      <span className="heading-3 m-0">Emily Duttinger</span>
      <Navigation />
    </header>
  );
}