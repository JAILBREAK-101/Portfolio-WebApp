import React from 'react';
import styles from "../styles/pages.module/Dashboard/Overview.module.css";
import { FaGithub, FaLink, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdSchool } from 'react-icons/md';
import SkillsOverview from './SkillOverview';
import { Button } from './form/Button/Button';

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

      {/* Dynamically Pull Projects from GitHub Pins */}
      <div className={styles.projectsOverview}>
        <h2>Recent Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>SISTN Website</h3>
            <p>Website for a nongovernmental organisation registered in Nigeria by the Corporate Affairs Commission (CAC) with a broad mandate to cater for the professional interests of information professionals and allied disciplines in Nigeria.</p>
            <span><b>Tech Stack:</b> React, Next.js, TailwindCSS, PHP, MySQL, Hostinger</span>
            <div style={{display: 'flex', gap: '1rem', marginTop: "10px"}}>
              <Button 
                body={<a href='https://www.sistn.org'>
                  <FaLink />
                </a>}
              />
              <Button 
                body={<a href=''>
                  <FaGithub color='black'/>
                </a>}
              />
            </div>
          </div>
          <div className={styles.projectCard}>
            <h3>Subtilo: <small><i>In Development</i></small></h3>
            <p>An AI-Powered application that creates accurate, multi-language subtitles online or offline in seconds, no extra tools needed.</p>
            <span><b>Tech Stack:</b> React, TailwindCSS, Flask, Firebase Authentication, PostgreSQL, Google Cloud Platform</span>
            <div style={{display: 'flex', gap: '1rem', marginTop: "10px"}}>
              <Button 
                body={<a href=''>
                  <FaLink />
                </a>}
              />
              <Button 
                body={<a href=''>
                  <FaGithub color='black'/>
                </a>}
              />
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>

      {/* Certifications */}
      {/* <div className={styles.certifications}>
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
        {/* </div> */}
      {/* </div> */}

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <h2>Connect with Me</h2>
        <div className={styles.socialLinksGrid}>
          <a href="https://github.com/JAILBREAK-101" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.socialIcon} /> GitHub
          </a>
          <a href="https://linkedin.com/in/oluwagbemigaawosope" target="_blank" rel="noopener noreferrer">
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
