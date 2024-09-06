// (navigation bar component)
import Link from 'next/link';
import styles from "../styles/Navbar.module.css";
import { FaGithub, FaPhone } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.navbar_brand}><Link href="/">GTS</Link></li>
        
        <ol className={styles.semi_navbar}>
          <li className={styles.navbar_nav}><Link className={styles.navbar_link} href="https://www.github.com/JAILBREAK-101"><FaGithub size={20} className={styles.nav_icon}/></Link></li>
          <li className={styles.navbar_nav}><Link className={styles.navbar_link} href="/contact">Contact me</Link></li>
        </ol>
      </ul>
    </nav>
  );
}
