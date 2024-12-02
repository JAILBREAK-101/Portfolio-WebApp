import { useEffect, useState } from "react";
import { parsePdf } from "@/lib/utils/pdfParser";
import styles from "@/styles/pages.module/Dashboard/Resume.module.css";

const pdfPath = "/path/to/resume.pdf"; // Ensure the PDF is in the public folder.

type Experience = {
  role: string;
  company: string;
  description: string;
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
        const pdfText = await parsePdf(pdfPath);

        // Parse the text into structured data (simplified example)
        const parsedData: ResumeData = {
          experiences: [
            {
              role: "Frontend Developer",
              company: "XYZ Corp",
              description: "Developed and maintained web applications using React and Next.js.",
              date: "Jan 2022 - Present",
            },
            {
              role: "UI/UX Designer",
              company: "Creative Studio",
              description: "Designed user-friendly interfaces and optimized user experiences.",
              date: "May 2020 - Dec 2021",
            },
          ],
          skills: ["React", "Next.js", "JavaScript", "TailwindCSS", "TypeScript", "Figma"],
          education: [
            {
              degree: "B.Sc. in Computer Science",
              institution: "Tech University",
              date: "2016 - 2020",
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
              <p className={styles.description}>{exp.description}</p>
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
