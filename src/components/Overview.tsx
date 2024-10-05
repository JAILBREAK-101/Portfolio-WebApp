import React from 'react';
import styles from "../styles/pages.module/Dashboard/Overview.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdSchool } from 'react-icons/md';
import SkillsOverview from './SkillOverview';

export default function Overview() {
  return (
    <div className={styles.overview}>
      
      {/* Welcome and Introduction */}
      <div className={styles.welcome}>
        <h1>Welcome to My Portfolio</h1>
        <p>I am a full-stack developer specializing in building responsive web applications with modern frameworks.</p>
      </div>

      {/* Skills & Technologies */}
      <SkillsOverview />

      {/* Highlighted Projects */}
      <div className={styles.projectsOverview}>
        <h2>Highlighted Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>Portfolio Website</h3>
            <p>A personal website showcasing my work, blog, and resume.</p>
            <span>Tech Stack: React, Next.js, TailwindCSS</span>
          </div>
          <div className={styles.projectCard}>
            <h3>Video Caption Generator</h3>
            <p>Tool for generating and customizing subtitles for videos.</p>
            <span>Tech Stack: Python, Flask, ffmpeg</span>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>

      {/* Certifications */}
      <div className={styles.certifications}>
        <h2>Certifications</h2>
        <div className={styles.certificationList}>
          <div className={styles.certificationCard}>
            <MdSchool className={styles.certificationIcon} />
            <p>Full-Stack Web Development - XYZ Academy</p>
          </div>
          <div className={styles.certificationCard}>
            <MdSchool className={styles.certificationIcon} />
            <p>Python Programming - ABC Institute</p>
          </div>
          {/* Add more certifications as needed */}
        </div>
      </div>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <h2>Connect with Me</h2>
        <div className={styles.socialLinksGrid}>
          <a href="https://github.com/JAILBREAK-101" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.socialIcon} /> GitHub
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.socialIcon} /> LinkedIn
          </a>
          <a href="https://twitter.com/GenixTech1" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.socialIcon} /> Twitter
          </a>
          <a href="https://youtube.com/@Genix-Js" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={styles.socialIcon} /> YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
