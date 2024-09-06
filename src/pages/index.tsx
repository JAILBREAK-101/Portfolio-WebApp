// (Homepage or a redirect to a specific page)

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function Home() {
  return (
    <Layout>
      <div className={styles.landing}>
        <h1 className={styles.title}>GenixTech Solutions</h1>
        <p className={styles.subheading}>I am Oluwagbemiga. Software Engineer || Graphic Designer.</p>

        <blockquote className='m-2'>"Curiousity fuels me to do more."</blockquote>
        <div className={styles.socialLinks}>
          <a href="https://github.com/JAILBREAK-101" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com/@Genix-Js" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
        <Link href="/dashboard">
          <button className={styles.exploreButton}>Explore</button>
        </Link>
      </div>
    </Layout>
  );
}
