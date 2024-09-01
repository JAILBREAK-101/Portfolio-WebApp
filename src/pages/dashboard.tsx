// (Dashboard page listing projects)
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  // Dummy project data
  const projects = [
    { id: 1, title: "Project 1", description: "Description of project 1" },
    { id: 2, title: "Project 2", description: "Description of project 2" },
    // Add more projects as needed
  ];

  return (
    <Layout>
      <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.content}>
          <h1>My Projects</h1>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
