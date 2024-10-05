import React from 'react';
import styles from "../styles/pages.module/Dashboard/Services.module.css";

export default function Services() {
  const services = [
    { title: "Frontend Development", description: "Building responsive and modern web applications." },
    { title: "Backend Development", description: "Creating scalable and efficient server-side solutions." },
    { title: "Graphic Design", description: "Designing visually captivating and professional graphics." },
    { title: "SEO Optimization", description: "Improving search engine rankings for your website." },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.pageTitle}>Our Services</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
