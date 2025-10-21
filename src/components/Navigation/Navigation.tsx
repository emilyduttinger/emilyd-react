import Link from 'next/link';
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className="unstyled-list navigation-menu">
        <li><Link className="inline-link" href="/work">work</Link></li>
        <li><a className="inline-link" href="/pdf/EmilyDuttingerResume.pdf" target="_blank">resume</a></li>
        <li><a className="inline-link" href="https://www.linkedin.com/in/emilyduttinger/" target="_blank">linkedin</a></li>
        <li><a className="inline-link" href="mailto:emilyduttinger@gmail.com">email</a></li>
      </ul>
    </nav>
  )
}