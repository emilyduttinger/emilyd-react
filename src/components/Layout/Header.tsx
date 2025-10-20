import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center text-center gap-[1.5rem] px-[var(--container-padding)] py-[1.5rem] sm:flex-row sm:justify-between sm:text-left sm:px-[2.5rem] relative z-100">
      <Link href="/" className="heading-3 m-0 unstyled-link">Emily Duttinger</Link>
      <Navigation />
    </header>
  );
}