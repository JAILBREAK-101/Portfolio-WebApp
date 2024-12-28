import { useEffect, useState } from "react";
// import { parsePdf } from "@/lib/utils/pdfParser";
import styles from "@/styles/pages.module/Dashboard/Resume.module.css";

const pdfPath = "/path/to/resume.pdf"; // Ensure the PDF is in the public folder.

type Experience = {
  role: string;
  company: string;
  description: string[];
  date: string;
};

type Education = {
  degree: string;
  institution: string;
  date: string;
};

type ResumeData = {
  experiences: Experience[];
  skills: string[];
  education: Education[];
};

export default function Resume(): JSX.Element {
  const [resumeData, setResumeData] = useState<ResumeData>({
    experiences: [],
    skills: [],
    education: [],
  });

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        // const pdfText = await parsePdf(pdfPath);

        // Parse the text into structured data (simplified example)
        const parsedData: ResumeData = {
          experiences: [
            {
              role: "Frontend Developer",
              company: "390 Labs",
              description: [
                  "- Developed and maintained web applications using React and Next.js.",

                  "- Worked with cross-functional teams, including designers, backend engineers, and product managers, to turn project ideas into measurable, business-driven results.",
                
                  "- Increased practical application of knowledge in web application development by gaining proficiency in the Angular Framework, effectively contributing to the development of another of the company’s product.",
                
                  "- Maintained website performance by conducting regular updates and addressing compatibility issues across various platforms."
              ],
              date: "March 2023 - August 2023",
            },
            {
              role: "Frontend Developer",
              company: "Liquidmoni",
              description: [
                "- Developed and maintained web applications using React and Next.js.",

                "- Worked with cross-functional teams, including designers, backend engineers, and product managers, to turn project ideas into measurable, business-driven results.",
              
                "- Increased practical application of knowledge in web application development by gaining proficiency in the Angular Framework, effectively contributing to the development of another of the company’s product.",
              
                "- Maintained website performance by conducting regular updates and addressing compatibility issues across various platforms."
              ],
              date: "May 2023 - June 2023",
            },
          ],
          skills: ["React", "Next.js", "Angular", "JavaScript", "TailwindCSS", "TypeScript", "Figma"],
          education: [
            {
              degree: "B.Sc. Computer Science",
              institution: "Trinity University",
              date: "2021 - 2024",
            },
          ],
        };

        // Example: Use `pdfText` to populate these fields dynamically
        setResumeData(parsedData);
      } catch (error) {
        console.error("Error loading PDF data:", error);
      }
    };

    loadResumeData();
  }, []);

  const { experiences, skills, education } = resumeData;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>My Resume</h1>
        <p>
          Download my resume{" "}
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            here
          </a>
          .
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <ul className={styles.list}>
          {experiences.map((exp, index) => (
            <li key={index} className={styles.listItem}>
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>
                {exp.company} | {exp.date}
              </p>
              <ul>{exp.description.map(eachDescription => {
                return <li className={styles.description}>{eachDescription} <br /></li>
              })}</ul>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.skillList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.list}>
          {education.map((edu, index) => (
            <li key={index} className={styles.listItem}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.institution}>
                {edu.institution} | {edu.date}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
