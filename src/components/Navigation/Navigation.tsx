import Link from 'next/link';
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className="unstyled-list navigation-menu">
        <li><Link className="inline-link" href="/work">Work</Link></li>
        <li><Link className="inline-link" href="/about">About</Link></li>
        <li><a className="inline-link" href="https://www.linkedin.com/in/emilyduttinger/" target="_blank">LinkedIn</a></li>
        <li><a className="inline-link" href="mailto:emilyduttinger@gmail.com">Email</a></li>
      </ul>
    </nav>
  )
}