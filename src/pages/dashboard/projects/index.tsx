import { useRouter } from "next/router";
import Link from 'next/link';
import Dashboard from "..";
import styles from "../../../styles/Projects.module.css";
import cardStyles from "../../../styles/Card.module.css";
import { TProject } from "../../../types/dashboard.types";
import { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase";

// project data
export const projectData: TProject[] = [
  {
    id: "1",
    name: "Subtilo",
    description: "Subtitle Generation Application",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"]
  },
  {
    id: "2",
    name: "ChatUp",
    description: "Enterprise-level Collaboration Application for managing projects, teams and scaling up big time",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"]
  },
  {
    id: "3",
    name: "Queenz Treats n Events",
    description: "Website for Queenz Treats n Events",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"]
  },
  {
    id: "4",
    name: "ThoughtSphere",
    description: "Blogging Application for my Brand: GenixTechSolutions where I share my thoughts and connect with like-minds. Live updates on my development journey and my blog articles are also involved",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"]
  },
    // Add more projects as needed
];


export default function Projects() {

  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const snapshot = await db.collection('projects').get();
  //     setProjects(snapshot.docs.map(doc => doc.data()));
  //   };
  //   fetchData();
  // }, []);

  const router = useRouter();

    return (
        <Dashboard>
          <h1>My Projects</h1>
          <ul className={styles.projects}>
            {projectData.map((project) => (
              <li key={project.id} className={cardStyles.card}>
                <div className={cardStyles.card_header}>
                  <h2 className={cardStyles.card_title}>{project.name}</h2>
                  {/* <img src={project.image} alt="project image" /> */}
                </div>
    
                <div className={cardStyles.card_body}>
                  <p className={cardStyles.card_text}>{project.description}</p>
                  <p className={cardStyles.card_link}>
                    View Project: {project.livelink}
                  </p>
                </div>
    
                <div className={cardStyles.card_footer}>
                  <div role="tech-stack">
                    {project.techstack.map((stack, index) => (
                      <span key={index}>{stack} {" "}</span>
                    ))}
                  </div>
                    <Link href={`/dashboard/projects/${project.id}`}>
                      <button>Project Details</button>
                    </Link>
                </div>
              </li>
            ))}
          </ul>
        </Dashboard>
    )
}