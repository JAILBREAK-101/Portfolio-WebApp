import Link from 'next/link';
import styles from "../../styles/layout.module/Navbar.module.css";
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "@/assets/images/GTS.png";
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src={Logo} width={80} height={80} alt="Logo" />
        </Link>
      </div>
      
      <button className={styles.mobile_menu_button} onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <ol className={`${styles.semi_navbar} ${isMobileMenuOpen ? styles.open : ''}`}>
        <li className={styles.navbar_nav}>
          <Link className={styles.navbar_link} href="https://www.github.com/JAILBREAK-101">
            <FaGithub size={20} className={styles.nav_icon} />
          </Link>
        </li>
        <li className={styles.navbar_nav}>
          <Link className={styles.navbar_link} href="/about">About me</Link>
        </li>
        <li className={styles.navbar_nav}>
          <Link className={styles.navbar_link} href="/contact">Contact me</Link>
        </li>
      </ol>
    </nav>
  );
}
