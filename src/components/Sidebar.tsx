// Side bar component to be used in Dashboard
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li><Link href="/dashboard">Projects</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/youtube">YouTube</Link></li>
        <li><Link href="/github">GitHub</Link></li>
        <li><Link href="/resume">Resume</Link></li>
      </ul>
    </aside>
  );
}
