import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/ProjectDetails.module.css";
import { projectData } from ".";


export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projectData.find((proj) => proj.id === id);

  if (!project) {
    return(
        <div>
            <h1>Project not found</h1>
            <Link href="/dashboard/projects">
                <button className={styles.button} >Back to Projects</button>
            </Link>
        </div>
    ) 
  }

  return (
    <div className={styles.projectDetail}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <div className={styles.techStack}>
        <h3>Tech Stack:</h3>
        <ul>
          {project.techstack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className={styles.links}>
        <a href={project.githublink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <a href={project.livelink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>

      <Link className={styles.button} href="/dashboard/projects">
        <button>Back to Projects</button>
      </Link>
    </div>
  );
}
