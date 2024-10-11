"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card } from "../ui/Card";
import styles from "../../styles/pages.module/Dashboard/Projects.module.css";
import customFetch from "../../lib/utils/api";
import { TProject } from "../../types/dashboard.types";

// Define the tech icons map
const techIcons = {
  "React.Js": "/icons/react.svg",
  "Redux": "/icons/redux.svg",
  "Tailwind CSS": "/icons/tailwindcss.svg",
  "Node.Js": "/icons/nodejs.svg",
  "Flask": "/icons/flask.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "MongoDB": "/icons/mongodb.svg",
  "Firebase": "/icons/firebase.svg",
  "Google Cloud Services": "/icons/google-cloud.svg",
  "Heroku": "/icons/heroku.svg",
  "Express.Js": "/icons/express.svg",
};

// Define the shape of the API response using an interface
interface ApiResponse {
  id: string;
  name: string;
  description: string;
  image: string;
  githublink: string;
  livelink: string;
  techstack: string[];
  detailsLink: string;
  problemStatement: string;
  screenshots: string[];
  gitHubHistory: string[];
  phase: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<TProject[]>([]);
  const router = useRouter();

  // Fetch project data from the API on component mount
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const data = await customFetch<ApiResponse[]>({
  //         endpoint: "/projects",
  //       });
  //       setProjects(data);
  //     } catch (error) {
  //       console.error("Error fetching project data:", error.message);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <>
      <h1 className={styles.projectsHeader}>My Projects</h1>
      <ul className={styles.projects}>
        {projectData.map((project) => (
          <li key={project.id} className={styles.card}>
            <Card
              image={project.image}
              title={project.name}
              description={project.description}
              link={`/dashboard/projects/${project.id}`}
              isProjectCard={true}
              projectLinks={[
                { url: project.livelink, label: 'Live' },
                { url: project.githublink, label: 'GitHub' },
              ]}
              techstack={project.techstack}
              techIcons={techIcons}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
