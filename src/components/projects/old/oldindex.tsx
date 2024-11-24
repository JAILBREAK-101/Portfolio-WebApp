"use client";

// Make the Projects Page to be in Categories: Having Design Works (Illustrations, Logo Designs, Flyer Designs, UI Mockups, Figma Templates), Mobile Apps, Web Apps, WebSites, Custom Softwares.

import { useState, } from "react";
import { useRouter } from "next/router";
import { Card } from "../../ui/Card";
import styles from "../../../styles/pages.module/Dashboard/Projects.module.css";
import customFetch from "../../../lib/utils/api";
import { TProject } from "../../../types/dashboard.types";
import ReactJs from "@/assets/icons/react.svg";
import Redux from "@/assets/icons/redux.svg";
import TailwindCSS from "@/assets/icons/tailwind-css.svg";
import NodeJs from "@/assets/icons/nodejs.svg";
import Flask from "@/assets/icons/flask.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
import MongoDB from "@/assets/icons/mongodb.svg";
import Firebase from "@/assets/icons/firebase.svg";
import GoogleCloudServices from "@/assets/icons/google-cloud.svg";
import Heroku from "@/assets/icons/heroku.svg";
import ExpressJs from "@/assets/icons/express-js.svg";

// Icons
import {FaAngular, FaNodeJs, FaReact, SiTailwindcss, DiPostgresql, DiPhp, DiJavascript, DiMongodb, SiFlask} from "@/components/ui/icon";

// project data
export const projectData: TProject[] = [
  {
    id: "1",
    name: "Subtilo",
    description: "Subtitle eeneration Application",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"],
    detailsLink: "Learn More",
    problemStatement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto odio enim quod quibusdam sint placeat veritatis vero possimus pariatur est culpa aut, beatae totam rerum, minus veniam maxime! Quaerat!",
    screenshots: [],
    gitHubHistory: [],
    phase: "Development"
  },
  {
    id: "2",
    name: "ChatUp",
    description: "Enterprise-level Collaboration Application for managing projects, teams and scaling up big time",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"],
    detailsLink: "Learn More",
    problemStatement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto odio enim quod quibusdam sint placeat veritatis vero possimus pariatur est culpa aut, beatae totam rerum, minus veniam maxime! Quaerat!",
    screenshots: [],
    gitHubHistory: [],
    phase: "Completed"
  },
  {
    id: "3",
    name: "Queenz Treats n Events",
    description: "Website for Queenz Treats n Events",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"],
    detailsLink: "Learn More",
    problemStatement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto odio enim quod quibusdam sint placeat veritatis vero possimus pariatur est culpa aut, beatae totam rerum, minus veniam maxime! Quaerat!",
    screenshots: [],
    gitHubHistory: [],
    phase: "Development"
  },
  {
    id: "4",
    name: "ThoughtSphere",
    description: "Blogging Application for my Brand: GenixTechSolutions where I share my thoughts and connect with like-minds. Live updates on my development journey and my blog articles are also involved",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"],
    detailsLink: "Learn More",
    problemStatement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto odio enim quod quibusdam sint placeat veritatis vero possimus pariatur est culpa aut, beatae totam rerum, minus veniam maxime! Quaerat!",
    screenshots: [],
    gitHubHistory: [],
    phase: "Completed"
  },
  {
    id: "5",
    name: "SISTN",
    description: "Website for a nongovernmental organisation registered in Nigeria by the Corporate Affairs Commission (CAC) with a broad mandate to cater for the professional interests of information professionals and allied disciplines in Nigeria.",
    image: "",
    githublink: "",
    livelink: "",
    techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Express.Js", "Netlify"],
    detailsLink: "Learn More",
    problemStatement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto odio enim quod quibusdam sint placeat veritatis vero possimus pariatur est culpa aut, beatae totam rerum, minus veniam maxime! Quaerat!",
    screenshots: [],
    gitHubHistory: [],
    phase: "Development"
  }
];

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
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsHeader}>Projects</h1>
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
              techIcons={techIcons} // fix this icon issue
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
