import React from 'react';
import styles from "../styles/pages.module/Dashboard/Services.module.css";
import { Button } from './form/Button/Button';

export default function Services() {
  const services = [
    { title: "Frontend Development", description: "Building responsive and modern web applications." }, // projects to show
    { title: "Backend Development", description: "Creating scalable and efficient server-side solutions." }, // projects to show
    { title: "Fullstack Development", description: "Creating scalable and efficient server-side solutions." }, // projects to show
    { title: "Mobile Application Development", description: "Creating scalable and efficient server-side solutions." }, // build projects to show - Use Flutter
    { title: "AI Application Development", description: "Creating scalable and efficient server-side solutions." }, // complete projects to show
    { title: "Custom Software Development", description: "Creating scalable and efficient server-side solutions." }, // build projects to show
    { title: "Open Source Software Development", description: "Creating scalable and efficient server-side solutions." }, // contribute to Open Source to show
    { title: "Graphic Design", description: "Designing visually captivating and professional graphics." }, // design graphical content to show
    { title: "Flyer Design", description: "Designing visually captivating and professional graphics." }, // design graphical flyers to show
    { title: "Logo Design", description: "Designing visually captivating and professional graphics." }, // Finish up SISTN Logo to show
    { title: "Illustration", description: "Designing visually captivating and professional graphics." }, // Finish up more Illustrations (2 more) to show
    { title: "SEO Optimization", description: "Improving search engine rankings for your website." }, // Learn about SEO and apply to your projects to show
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.pageTitle}>Services</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>

            <div style={{display: 'flex', justifyContent: 'center', gap: '0.4rem', alignItems: 'center'}}>
              <span style={{color: '#e5e5e5'}}>Have a project? </span>
              <Button btnClass={styles.serviceCardButton} onClick={() => console.log("Service Loading")} body={
                  "Let's talk"
                } 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
