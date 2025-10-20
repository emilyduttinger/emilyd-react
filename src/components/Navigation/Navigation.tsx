import Link from 'next/link';
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className="unstyled-list navigation-menu">
        <li><Link href="/work">work</Link></li>
        <li><a href="/pdf/EmilyDuttingerResume.pdf" target="_blank">resume</a></li>
        <li><a href="https://www.linkedin.com/in/emilyduttinger/" target="_blank">linkedin</a></li>
        <li><a href="mailto:emilyduttinger@gmail.com">email me</a></li>
      </ul>
    </nav>
  )
}