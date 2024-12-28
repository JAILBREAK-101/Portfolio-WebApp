import React from 'react';
import styles from "../styles/pages.module/Home/About.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Layout from '@/components/layout/Layout';

export default function AboutMe() {
  return (
    <Layout>
      <div className={styles.aboutMe}>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>About Me</h1>
            <p>
              I’m Oluwagbemiga, a Full-Stack Developer passionate about technology, learning, and creating innovative solutions. 
              Join me on a visual journey through my career and aspirations.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="https://via.placeholder.com/800x400" 
              alt="Hero placeholder - coding journey" 
              className={styles.placeholderImage} 
            />
          </div>
        </section>

        {/* Journey Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>My Journey</h2>
          <div className={styles.contentGrid}>
            <div>
              <p>
                My tech journey started with curiosity and grew into a full-fledged passion. From learning the basics of HTML and CSS 
                to mastering modern frameworks like React and Next.js, I’ve constantly pushed myself to improve.
              </p>
              <p>
                Along the way, I discovered the power of problem-solving through code and the satisfaction of creating 
                applications that simplify tasks and bring ideas to life.
              </p>
            </div>
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Learning to code placeholder" 
              className={styles.placeholderImage} 
            />
          </div>
        </section>

        {/* Events Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Tech Events and Community</h2>
          <div className={styles.contentGrid}>
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Attending tech events placeholder" 
              className={styles.placeholderImage} 
            />
            <div>
              <p>
                One of the highlights of my journey has been attending tech meetups, hackathons, and community events. 
                These experiences have connected me with brilliant minds, challenged my skills, and expanded my understanding 
                of cutting-edge technologies.
              </p>
              <p>
                I’ve also participated in webinars and workshops, sharing my knowledge while learning from others in the community.
              </p>
            </div>
          </div>
        </section>

        {/* Internship and Work Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Internship & Work Experience</h2>
          <div className={styles.contentGrid}>
            <div>
              <p>
                My internships provided invaluable hands-on experience, allowing me to apply theoretical knowledge to real-world projects. 
                From collaborating with teams to building robust applications, I honed my technical and interpersonal skills.
              </p>
              <p>
                These experiences shaped my professional ethos: a commitment to quality, collaboration, and continuous learning.
              </p>
            </div>
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Internship experience placeholder" 
              className={styles.placeholderImage} 
            />
          </div>
        </section>

        {/* Goals Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Future Goals</h2>
          <div className={styles.contentGrid}>
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Goals placeholder - innovative projects" 
              className={styles.placeholderImage} 
            />
            <div>
              <p>
                Looking ahead, I aim to merge my skills in Full-Stack Development with AI/ML technologies to create intelligent, 
                impactful applications. I am committed to contributing to the tech community, mentoring others, and building projects 
                that make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Connect with Me</h2>
          <p>Let’s collaborate and build something amazing together!</p>
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
        </section>
      </div>
    </Layout>
  );
}
