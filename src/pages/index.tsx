import { motion } from 'framer-motion';
import Image from 'next/image';
import Gbemiga from "@/assets/images/Gbemiga.jpg";
import Layout from '../components/layout/Layout';
import styles from '../styles/pages.module/Home/Home.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Button } from "../components/form/Button/Button";

export default function Home() {
  return (
    <Layout>
      <div className={styles.landing}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>GenixTech Solutions</h1>
          <p className={styles.subheading}>Software Engineer || Graphic Designer || YouTuber</p>
          <blockquote className={styles.quote}>"Your Vision! My Solution!"</blockquote>
          {/* <blockquote className={styles.quote}>"Curiosity fuels me to do more."</blockquote> */}
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={Gbemiga}
            alt="Profile Picture"
            width={200}
            height={200}
            className={styles.profilePicture}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="https://github.com/JAILBREAK-101" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/jailbreak" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/GenixTech1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com/@Genix-Js" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </motion.div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/dashboard">
            <Button btnClass={`${styles.exploreButton}`} body={'See my work'} />
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
