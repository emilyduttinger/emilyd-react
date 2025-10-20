import Navigation from "@/components/Navigation/Navigation";

export default function Header() {
  return (
    <footer className="flex flex-col justify-center text-center gap-[1.5rem] px-[var(--container-padding)] py-[1.5rem] sm:text-left sm:flex-row sm:items-center sm:justify-between md:px-[2.5rem]">
      <Navigation />
      <p className="m-0 text-[1rem]">&copy; Emily Duttinger {new Date().getFullYear()}</p>
    </footer>
  );
}