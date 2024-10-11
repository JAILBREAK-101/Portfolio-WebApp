import React from 'react';
import styles from "../styles/pages.module/Dashboard/Overview.module.css";
import { FaReact, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiNextdotjs, SiPython, SiFlask, SiExpress, SiTailwindcss, SiSass, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiCanva, SiCss3, SiHtml5, SiTypescript } from "react-icons/si";
import { DiJavascript, DiMongodb, DiPostgresql } from "react-icons/di";

export default function SkillsOverview() {
  return (
    <div className={styles.skills}>
      <h2>Tech Stack</h2>
      <div className={styles.skillsList}>
        <div className={styles.skillBadge}>
          <FaAngular color="#DD0031" size={40} />
          <span className={styles.label}>Angular</span>
        </div>
        <div className={styles.skillBadge}>
          <FaReact color="#61DBFB" size={40} />
          <span className={styles.label}>React</span>
        </div>
        <div className={styles.skillBadge}>
          <SiNextdotjs color="#000000" size={40} />
          <span className={styles.label}>Next.js</span>
        </div>
        <div className={styles.skillBadge}>
          <SiHtml5 color="orange" size={40} />
          <span className={styles.label}>HTML</span>
        </div>
        <div className={styles.skillBadge}>
          <SiCss3 color="#0000FA" size={40} />
          <span className={styles.label}>CSS</span>
        </div>
        <div className={styles.skillBadge}>
          <DiJavascript color="#F7DF1E" size={40} />
          <span className={styles.label}>JavaScript</span>
        </div>
        <div className={styles.skillBadge}>
          <SiTypescript color="blue" size={40} />
          <span className={styles.label}>TypeScript</span>
        </div>
        <div className={styles.skillBadge}>
          <SiPython color="#3776AB" size={40} />
          <span className={styles.label}>Python</span>
        </div>
        <div className={styles.skillBadge}>
          <SiFlask color="#000000" size={40} />
          <span className={styles.label}>Flask</span>
        </div>
        <div className={styles.skillBadge}>
          <FaNodeJs color="#68A063" size={40} />
          <span className={styles.label}>Node.js</span>
        </div>
        <div className={styles.skillBadge}>
          <SiExpress color="#000000" size={40} />
          <span className={styles.label}>Express.js</span>
        </div>
        <div className={styles.skillBadge}>
          <DiMongodb color="#4DB33D" size={40} />
          <span className={styles.label}>MongoDB</span>
        </div>
        <div className={styles.skillBadge}>
          <DiPostgresql color="#336791" size={40} />
          <span className={styles.label}>PostgreSQL</span>
        </div>
        <div className={styles.skillBadge}>
          <SiTailwindcss color="#38B2AC" size={40} />
          <span className={styles.label}>Tailwind CSS</span>
        </div>
        <div className={styles.skillBadge}>
          <SiSass color="#CC6699" size={40} />
          <span className={styles.label}>SASS</span>
        </div>
      </div>

      <h2>Graphic Design</h2>
      <div className={styles.skillsList}>
        <div className={styles.skillBadge}>
          <SiAdobeillustrator color="orange" size={40} />
          <span className={styles.label}>Adobe Illustrator</span>
        </div>
        <div className={styles.skillBadge}>
          <SiAdobeindesign color="purple" size={40} />
          <span className={styles.label}>Adobe Indesign</span>
        </div>
        <div className={styles.skillBadge}>
          <SiAdobephotoshop color="blue" size={40} />
          <span className={styles.label}>Adobe Photoshop</span>
        </div>
        <div className={styles.skillBadge}>
          <SiCanva color="blue" size={40} />
          <span className={styles.label}>Canva</span>
        </div>
      </div>
    </div>
  );
}
