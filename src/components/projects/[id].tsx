import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/pages.module/Dashboard/ProjectDetails.module.css";
import { projectData } from "./index";
import { Button } from "../form/Button/Button";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projectData.find((proj) => proj.name === id);

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
      <h1 className={styles.projectName}>{project.name}</h1>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.problemStatement}>
        <h3>Problem Statement:</h3>
        <p>{project.problemStatement}</p>
      </div>

      <div className={styles.screenshots}>
        <h3>Screenshots:</h3>
        <div className={styles.screenshotContainer}>
          {project.screenshots.length > 0 ? (
            project.screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
            ))
          ) : (
            <img src="https://via.placeholder.com/300x200?text=No+Screenshot+Available" alt="Placeholder screenshot" className={styles.screenshotPlaceholder} />
          )}
        </div>
      </div>

      <div className={styles.gitHubHistory}>
        <h3>GitHub History:</h3>
        <ul>
          {project.gitHubHistory?.date ? (
            // project.((entry: any, index: number) => (
              <li key={project.id}>
              <a href={project.gitHubHistory.link} target="_blank" rel="noopener noreferrer">
                {project.gitHubHistory.message} - {project.gitHubHistory.date}
              </a>
            </li>
            // ))
          ) : (
            <p>No GitHub history available.</p>
          )}
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
        {project.githublink && (
            <a href={project.githublink} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          )
        }

        {project.livelink && (
          <a href={project.livelink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )
      }
      </div>

      <div className={styles.action}>
        <Link className={styles.button} href="/dashboard/projects">
          <Button
            body={"Back to projects"}
            />
        </Link>
      </div>
    </div>
  );
}
