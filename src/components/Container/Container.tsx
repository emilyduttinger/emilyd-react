import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export default function Container({ children, fullWidth = false, className = '' }: ContainerProps) {
  return (
    <div className={`${fullWidth ? `${styles.container} !max-w-full` : styles.container} ${className}`}>{children}</div>
  );
}