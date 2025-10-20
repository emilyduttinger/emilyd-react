"use client"

import { useTheme } from '@/app/contexts/ThemeContext'
import IconMoon from '@/components/Icons/IconMoon'
import IconSun from '@/components/Icons/IconSun'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`${styles.themeToggle} ${ theme === 'dark' ? styles.darkActive : styles.lightActive }`} onClick={toggleTheme}>
      <span className="visually-hidden">{ theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme' }</span>
      <IconMoon className={`${styles.toggle} ${styles.iconMoon}`} />
      <IconSun className={`${styles.toggle} ${styles.iconSun}`} />
    </button>
  )
} 