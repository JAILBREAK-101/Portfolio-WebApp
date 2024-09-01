// (Resume details page)
import Layout from '../components/Layout';

export default function Resume() {
  return (
    <Layout>
      <h1>My Resume</h1>
      <p>Download my resume <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Frontend Developer at XYZ Corp</h3>
            <p>Developed and maintained web applications using React and Next.js.</p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
