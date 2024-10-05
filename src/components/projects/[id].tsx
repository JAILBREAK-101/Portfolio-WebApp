import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/pages.module/Dashboard/ProjectDetails.module.css";
import { projectData } from ".";
import { Button } from "../form/Button/Button";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projectData.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div>
        <h1>Project not found</h1>
        <Link href="/dashboard/projects">
          <button className={styles.button}>Back to Projects</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.projectDetail}>
      <h1>{project.name}</h1>
      
      <p>{project.description}</p>

      <div className={styles.problemStatement}>
        <h3>Problem Statement:</h3>
        <p>{project.problemStatement}</p>
      </div>

      <div className={styles.screenshots}>
        <h3>Screenshots:</h3>
        <div className={styles.screenshotContainer}>
          {project.screenshots.map((screenshot, index) => (
            <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
          ))}
        </div>
      </div>

      <div className={styles.gitHubHistory}>
        <h3>GitHub History:</h3>
        <ul>
          {/* Fetch from API */}
          {/* {project.gitHubHistory.map((entry, index) => (
            <li key={index}>
              <a href={entry.link} target="_blank" rel="noopener noreferrer">
                {entry.message} - {entry.date}
              </a>
            </li>
          ))} */}
        </ul>
      </div>

      <div className={styles.phase}>
        <h3>Project Phase:</h3>
        <p>{project.phase}</p>
      </div>

      <div className={styles.techStack}>
        <h3>Tech Stack:</h3>
        <ul>
          {project.techstack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className={styles.links}>
        <h3>Links:</h3>
        <a href={project.githublink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <a href={project.livelink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>

      <Link className={styles.button} href="/dashboard/projects">
        <Button
          body={"Back to projects"}
        />
      </Link>
    </div>
  );
}
