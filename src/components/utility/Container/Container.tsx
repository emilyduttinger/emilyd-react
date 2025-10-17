import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Container({ children, fullWidth = false }: ContainerProps) {
  const className = fullWidth ? 'container w-full' : 'container mx-auto';
  return (
    <div className={className}>{children}</div>
  );
}