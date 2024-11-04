import Link from 'next/link';
import styles from "../../styles/layout.module/Navbar.module.css";
import { FaGithub } from 'react-icons/fa6';
import Logo from "@/assets/images/logo.svg";
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.navbar_brand}><Link href="/">
          <Image 
            src={Logo}
            width={80}
            height={50}
            alt='Logo'
          />
        </Link></li>

         <button className={styles.mobile_menu_button} onClick={toggleMobileMenu}>
          {/* Icon for the menu (can use any icon you prefer) */}
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />} 
        </button>

        
        <ol className={styles.semi_navbar}>
          <li className={styles.navbar_nav}><Link className={styles.navbar_link} href="https://www.github.com/JAILBREAK-101"><FaGithub size={20} className={styles.nav_icon}/></Link></li>
          <li className={styles.navbar_nav}><Link className={styles.navbar_link} href="/contact">About me</Link></li>
          <li className={styles.navbar_nav}><Link className={styles.navbar_link} href="/contact">Contact me</Link></li>
        </ol>
      </ul>
    </nav>
  );
}
