// (Services offered page)
import Dashboard from '.';

export default function Services() {
  const services = [
    { title: "Frontend Development", description: "Building responsive and modern web applications" },
    { title: "Backend Development", description: "Writing reusable " },
    { title: "Graphic Design", description: "Designing high catching graphics", tools: [] },
    { title: "SEO Optimization", description: "Improving search engine rankings for your website" },
  ];

  return (
    <Dashboard>
      <h1>Services</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </Dashboard>
  );
}
