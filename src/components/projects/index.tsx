import { Card } from "../ui/Card";
import styles from "../../styles/pages.module/Dashboard/NewProjects.module.css";
import { TProject } from "@/types/dashboard.types";
import { SiFirebase, SiFlask, SiGooglecloud, SiHeroku, SiTailwindcss } from "react-icons/si";
import { DiPostgresql, DiMongodb, DiExtjs } from "react-icons/di";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { Button } from "../form/Button/Button";
import Link from "next/link";

const categories = {
    "Design Works": ["Illustrations", "Logo Designs", "Flyer Designs", "UI Mockups", "Figma Templates"],
    // "Mobile Apps": ["ChatUp"],
    "Web Apps": [
      // "ThoughtSphere", 
      "Subtilo"
    ],
    "Websites": ["Queenz Treats n Events", "SISTN"],
    // "Custom Software": [],
};

// project data
export const projectData: TProject[] = [
    {
      id: "1",
      name: "Subtilo",
      description: "Subtitle Generation Application",
      image: "",
      githublink: "",
      livelink: "",
      techstack: ["React.Js", "Redux", "Tailwind CSS", "Node.Js", "Flask", "PostgreSQL", "MongoDB", "Firebase", "Google Cloud Services", "Heroku"],
      detailsLink: "Learn More",
      problemStatement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto odio enim quod quibusdam sint placeat veritatis vero possimus pariatur est culpa aut, beatae totam rerum, minus veniam maxime! Quaerat!",
      screenshots: [],
      gitHubHistory: [],
      phase: "Development",
      projectType: "web-app"
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
      phase: "Completed",
      projectType: "mobile-app"
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
      phase: "Development",
      projectType: "website"
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
      phase: "Completed",
      projectType: "web-app"
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
      phase: "Development",
      projectType: "website"
    }
  ];

  // Define the tech icons map
  const techIcons = {
    "React.Js": FaReact,
    "Tailwind CSS": SiTailwindcss,
    "Node.Js": FaNodeJs,
    "Flask": SiFlask,
    "PostgreSQL": DiPostgresql,
    "MongoDB": DiMongodb,
    "Firebase": SiFirebase,
    "Google Cloud Services": SiGooglecloud,
    "Heroku": SiHeroku,
    "Express.Js": DiExtjs,
  };
  
  
  export default function Projects() {
    return (
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsHeader}>Products</h1>
        {Object.entries(categories).map(([category, projects]) => (
          <section key={category}>
            <h2 className={styles.categoryHeader}>{category}</h2>
            <ul className={styles.projects}>
              {projectData
                // .filter((project) => {
                //   if (project.projectType === "design") {
                //     return (
                //       <Button body={
                //         <Link href={""}>Behance Projects</Link>
                //       }></Button>
                //     )
                //   }
                // })   
                .filter((project) => projects.includes(project.name))
                .map((project) => (
                  <li key={project.id} className={styles.card}>
                    <Card
                      image={project.image}
                      title={project.name}
                      description={project.description}
                      link={`/dashboard/projects/${project.name}`}
                      isProjectCard={true}
                      projectLinks={[
                        { url: project.livelink, label: "Live" },
                        { url: project.githublink, label: "GitHub" },
                      ]}
                      techstack={project.techstack}
                      techIcons={techIcons}
                    />
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    );
  }
  