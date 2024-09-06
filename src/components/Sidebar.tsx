// Side bar component to be used in Dashboard
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import { FaHouseChimneyUser, FaCode, FaLaptopCode, FaYoutube, FaGithub } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li><Link href="/dashboard"><FaHouseChimneyUser /> Overview</Link></li>
        <li><Link href="/dashboard/projects"><FaCode /> Projects</Link></li>
        <li><Link href="/dashboard/services"><FaLaptopCode /> Services</Link></li>
        <li><Link href="/dashboard/youtube"><FaYoutube /> YouTube</Link></li>
        <li><Link href="/dashboard/github"><FaGithub /> GitHub</Link></li>
        <li><Link href="/dashboard/resume">Resume</Link></li>
      </ul>

        <button>
          <Link href={'/about'}>About me</Link>
        </button>
        
        <button>
          <Link href={'/thoughtsphere'}>ThoughtSphere</Link>
        </button>
    </aside>
  );
}
