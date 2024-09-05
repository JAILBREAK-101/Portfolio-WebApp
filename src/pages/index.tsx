// (Homepage or a redirect to a specific page)

// const Page = () => {
//     return (
//         <>
//             GTS Portfolio Web App
//         </>
//     )
// }

// export default Page;

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className={styles.landing}>
        <h1 className={styles.title}>GenixTech Solutions</h1>
        <p className={styles.subheading}>I am Oluwagbemiga. Software Engineer || Graphic Designer.</p>

        <blockquote>"Curiousity fuels me to do more."</blockquote>
        <div className={styles.socialLinks}>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://youtube.com/@Genix-Js" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
        <Link href="/dashboard">
          <button className={styles.exploreButton}>Explore</button>
        </Link>
      </div>
    </Layout>
  );
}
