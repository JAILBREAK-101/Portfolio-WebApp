import styles from "../styles/Layout.module.css";

export default function Projects() {

    // Dummy project data
    const projects = [
        { id: 1, title: "Subtilo", description: "Description of project 1" },
        { id: 2, title: "ChatUp", description: "Description of project 2" },
        // Add more projects as needed
    ];

    return (
        <>
        <h1>My Projects</h1>
          <ul className={styles.projects}>
            {projects.map((project) => (
              <li key={project.id}>
                <img src="" alt="project image" />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </>
    )
}