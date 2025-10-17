interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <header className="flex flex-col justify-center items-center gap-(1.5rem) text-center .sm:flex-row .sm:justify-between .sm:text-left ">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}