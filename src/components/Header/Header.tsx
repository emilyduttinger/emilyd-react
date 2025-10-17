import './Header.css';
import Navigation from "@/components/Navigation/Navigation";

export default function Header() {
  return (
    <header className="header flex flex-col justify-center items-center text-center sm:flex-row sm:justify-between sm:text-left">
      <span className="heading-3 m-0">Emily Duttinger</span>
      <Navigation />
    </header>
  );
}