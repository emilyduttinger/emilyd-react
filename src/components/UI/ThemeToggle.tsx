import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  return (
    <div className={styles.themeToggle}>
      <span className={styles.toggle} />
      <span className="visually-hidden">Enable Light Mode</span>
    </div>
  )
} 