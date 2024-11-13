import React from 'react';
import styles from "../styles/pages.module/Home/About.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdSchool } from 'react-icons/md';
import { Button } from '@/components/form/Button/Button';
import Layout from '@/components/layout/Layout';

export default function AboutMe() {
  return (
    <Layout>
        <div className={styles.aboutMe}>
        
        {/* Welcome Section */}
        <div className={styles.welcome}>
            <h1>About Me</h1>
            <p>Hello! I'm Oluwagbemiga, a passionate Full-Stack Developer, dedicated to building impactful and innovative web applications. I specialize in front-end technologies like React, Angular, and Next.js, and have experience working with back-end technologies like Flask, PostgreSQL, and Firebase.</p>
        </div>
    
        {/* My Journey in Tech */}
        <div className={styles.journey}>
            <h2>My Journey in Tech</h2>
            <p>My journey in tech began out of curiosity, quickly evolving into a deep passion. After learning the basics of HTML, CSS, and JavaScript, I dove into the world of React, Next.js, and other modern frameworks. The problem-solving aspect of coding intrigued me, and I soon realized that I wanted to not only create apps but build solutions that make people's lives easier.</p>
            <p>Throughout my journey, I have worked on several exciting projects such as building web applications, learning about AI/ML development, and working with various databases and cloud technologies. I take pride in my ability to adapt and learn new skills as needed, whether it's mastering a new language or diving into a new tool. </p>
        </div>
    
        {/* Passions & Interests */}
        <div className={styles.passions}>
            <h2>Passions & Interests</h2>
            <p>Beyond coding, I am passionate about AI and machine learning, especially how they intersect with web development. I believe that the future of tech lies in creating intelligent, intuitive systems that can automate tasks and solve real-world problems in innovative ways.</p>
            <p>I’m also deeply interested in graphic design and have been honing my skills using tools like Photoshop and Illustrator. The creative aspect of design allows me to express my ideas in a visually compelling way, which complements my technical skills in building beautiful user interfaces.</p>
            <p>Additionally, I enjoy sharing my knowledge with others, which is why I created a YouTube channel where I teach web development topics. Helping others learn and grow in tech brings me immense satisfaction.</p>
        </div>
    
        {/* Long-term Goals */}
        <div className={styles.goals}>
            <h2>My Long-Term Goals</h2>
            <p>In the long run, I aim to become an AI/ML Software Engineer, combining my passion for software development with the limitless possibilities of artificial intelligence. I plan to continue learning, experimenting with cutting-edge technologies, and working on innovative projects that can contribute to society. I also aspire to become a mentor and leader, helping others on their journey in tech and inspiring the next generation of developers.</p>
            <p>My current projects, such as Subtilo, an AI-powered subtitle generator, are just the beginning of what I hope to accomplish. I’m also eager to continue contributing to open-source projects, collaborating with other developers, and sharing my knowledge with the community. The journey is long, but I’m excited for what the future holds.</p>
        </div>
    
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
    </Layout>
  );
}
