import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";
import ThemeToggle from "../UI/ThemeToggle";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center text-center gap-[1.5rem] px-[var(--container-padding)] py-[1.5rem] md:flex-row md:justify-between md:text-left md:px-[2.5rem] relative z-100">
      <Link href="/" className="heading-3 m-0 font-black uppercase unstyled-link">Emily Duttinger</Link>
      <div className="flex items-center gap-[2.5rem]">
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  );
}