import React from 'react';
import Link from 'next/link';
import styles from '../../styles/component.module/Card.module.css';
import { IconType } from 'react-icons';

interface ProjectLink {
  url: string;
  label: string;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  isProjectCard?: boolean; 
  projectLinks?: ProjectLink[]; 
  techstack?: string[]; 
  techIcons?: { [key: string]: IconType };
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  link,
  isProjectCard = false,
  projectLinks = [],
  techstack = [],
  techIcons = {},
}) => {
  return (
    <div className={styles.card}>
      <div className="relative">
        <img src={image} alt={title} className={styles.image} />
        {isProjectCard && projectLinks.length > 0 && (
          <div className={styles.projectOverlay}>
            {projectLinks.map((projectLink, index) => (
              <Link key={index} href={projectLink.url} className={styles.link}>
                {projectLink.label}
              </Link>
            ))}
            <Link href={link} className={styles.button}>
              Learn More
            </Link>
          </div>
        )}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        {/* Tech Stacks*/}
        {isProjectCard && techstack.length > 0 && (
          <div className={styles.techStack}>
           {techstack.map((tech) => (
              <div key={tech}>
                {/* Render the icon component directly */}
                {techIcons[tech] && React.createElement(techIcons[tech])}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
