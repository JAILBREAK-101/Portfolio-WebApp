import React from 'react';
import styles from "../styles/pages.module/Dashboard/Overview.module.css";
import { FaGithub, FaLink, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import SkillsOverview from './SkillOverview';
import { Button } from './form/Button/Button';
import Link from 'next/link';

export default function Overview() {

  // During Open Source Contributions
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchPinnedRepos = async () => {
  //     const response = await fetch("/api/github");
  //     const data = await response.json();
  //     setProjects(data.data.user.pinnedItems.nodes);
  //   };
  
  //   fetchPinnedRepos();
  // }, []);  

  return (
    <div className={styles.overview}>
      
      {/* Welcome and Introduction */}
      <div className={styles.welcome}>
        <h1>GenixTech Solutions</h1>
        <p>Explore my <Link className={styles.link} href={"/dashboard/projects"}>projects</Link> and <Link className={styles.link} href={"/dashboard/projects"}>solutions</Link> that leverage modern tools to create innovative software, designs, and content.</p>
      </div>

      {/* Skills & Technologies */}
      <SkillsOverview />

      {/* Dynamically Pull Projects from GitHub Pins */}
      <div className={styles.projectsOverview}>
        <h2>Recent Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>SISTN Website</h3>
            <p>Website for a nongovernmental organisation registered in Nigeria by the Corporate Affairs Commission (CAC) with a broad mandate to cater for the professional interests of information professionals and allied disciplines in Nigeria.</p>
            <span><b>Tech Stack:</b> React, TailwindCSS, PHP, MySQL, Hostinger</span>
            <div style={{display: 'flex', gap: '1rem', marginTop: "10px"}}>
              <Link target='_blank' href='https://www.sistn.org'>
                <Button 
                  body={<FaLink />}
                />
              </Link>

              <Link target='_blank' href='https://github.com/JAILBREAK-101/SISTN_web'>
                <Button 
                  body={<FaGithub color='white'/>}
                  />
              </Link>
            </div>
          </div>
          <div className={styles.projectCard}>
            <h3>Subtilo: <small><i>In Development</i></small></h3>
            <p>An AI-Powered application that creates accurate, multi-language subtitles online or offline in seconds, no extra tools needed.</p>
            <span><b>Tech Stack:</b> React, TailwindCSS, Firebase Authentication, Flask</span>
            <div style={{display: 'flex', gap: '1rem', marginTop: "10px"}}>
              {/* <Button 
                body={<a href=''>
                  <FaLink />
                </a>}
              /> */}
              <Link target='_blank' href='https://github.com/JAILBREAK-101/Subtilo_Frontend'>
                <Button 
                  body={<FaGithub color='white'/>}
                />
              </Link>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>

      {/* Highlighted Projects
      <div className={styles.projectsOverview}>
      <h2>Recent Projects</h2>
      <p>Here are my most recent projects and open source contributions</p>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description || "No description provided."}</p>
            <span>
              <b>Primary Language:</b> {project.primaryLanguage?.name || "N/A"}
            </span>
            <div style={{ display: "flex", gap: "1rem", marginTop: "10px" }}>
              {project.homepageUrl && (
                <a href={project.homepageUrl} target="_blank" rel="noreferrer">
                  <FaLink />
                </a>
              )}
              <a href={project.url} target="_blank" rel="noreferrer">
                <FaGithub color="black" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div> */}

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
