// (navigation bar component)
import Link from 'next/link';
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li><Link href="/"><i>GenixTechSolutions</i></Link></li>
        <li><Link href="/contact">Contact me</Link></li>
      </ul>
    </nav>
  );
}
