import Link from 'next/link';
import styles from '../../styles/layout.module/Sidebar.module.css';
import { FaHouseChimneyUser, FaCertificate, FaCode, FaLaptopCode, FaYoutube, FaGithub } from 'react-icons/fa6';
import { Button } from '../form/Button/Button';

export default function Sidebar() {
  return (
    <aside className={`side-panel ${styles.sidebar}`}>
      <ul>
        <li>
          <Link href="/dashboard">
            <span className={styles.icon}><FaHouseChimneyUser /></span>
            <span className={styles.label}>Overview</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/projects">
            <span className={styles.icon}><FaCode /></span>
            <span className={styles.label}>Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/services">
            <span className={styles.icon}><FaLaptopCode /></span>
            <span className={styles.label}>Services</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/youtube">
            <span className={styles.icon}><FaYoutube /></span>
            <span className={styles.label}>YouTube</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/github">
            <span className={styles.icon}><FaGithub /></span>
            <span className={styles.label}>GitHub</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/resume">
            <span className={styles.icon}><FaCertificate /></span>
            <span className={styles.label}>Resume</span>
          </Link>
        </li>
      </ul>

      <Button
        body={
          <Link href={'/about'}>About me</Link>
        }
      />

      {/* <Button
        body={
          <Link href={'#'}>ThoughtSphere</Link>
        }
      /> */}
    </aside>
  );
}
