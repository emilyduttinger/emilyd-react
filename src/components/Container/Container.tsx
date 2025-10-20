import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Container({ children, fullWidth = false }: ContainerProps) {
  return (
    <div className={fullWidth ? `${styles.container} !max-w-full` : styles.container}>{children}</div>
  );
}