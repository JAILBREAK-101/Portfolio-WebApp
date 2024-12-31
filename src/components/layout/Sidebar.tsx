import Link from 'next/link';
import styles from '../../styles/layout.module/Sidebar.module.css';
import { FaHouseChimneyUser, FaCertificate, FaCode, FaLaptopCode, FaYoutube, FaGithub } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <aside className={`side-panel ${styles.sidebar}`}>
      <ul>
        <li>
          <Link className='next-link' title='Overview' href="/dashboard">
            <span className={styles.icon}><FaHouseChimneyUser /></span>
            <span className={styles.label}>Overview</span>
          </Link>
        </li>
        <li>
          <Link className='next-link' title='Solutions' href="/dashboard/solutions">
            <span className={styles.icon}><FaCode /></span>
            <span className={styles.label}>Solutions</span>
          </Link>
        </li>
        <li>
          <Link className='next-link' title='Services' href="/dashboard/services">
            <span className={styles.icon}><FaLaptopCode /></span>
            <span className={styles.label}>Services</span>
          </Link>
        </li>
        <li>
          <Link className='next-link' title='YouTube' href="/dashboard/youtube">
            <span className={styles.icon}><FaYoutube /></span>
            <span className={styles.label}>YouTube</span>
          </Link>
        </li>
        <li>
          <Link className='next-link' title='GitHub' href="/dashboard/github">
            <span className={styles.icon}><FaGithub /></span>
            <span className={styles.label}>GitHub</span>
          </Link>
        </li>
        <li>
          <Link className='next-link' title='Resume' href="/dashboard/resume">
            <span className={styles.icon}><FaCertificate /></span>
            <span className={styles.label}>Resume</span>
          </Link>
        </li>
      </ul>

      {/* <Button
        body={
          <Link href={'/about'}>About me</Link>
        }
      /> */}

      {/* <Button
        body={
          <Link href={'#'}>ThoughtSphere</Link>
        }
      /> */}
    </aside>
  );
}
