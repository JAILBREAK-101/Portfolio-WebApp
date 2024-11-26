import React from 'react';
import styles from "../styles/pages.module/Dashboard/Services.module.css";
import { Button } from './form/Button/Button';

export default function Services() {
  const services = [
    { title: "Frontend Development", description: "Crafting visually appealing, responsive, and user-friendly interfaces using modern web technologies." },
    { title: "Backend Development", description: "Building robust and scalable server-side architectures with seamless API integration and optimized performance." },
    { title: "Fullstack Development", description: "Combining expertise in both frontend and backend to deliver end-to-end solutions that meet user and business needs." },
    { title: "Mobile Application Development", description: "Designing and developing high-performance, user-friendly mobile apps with Flutter for both iOS and Android." },
    // { title: "AI Application Development", description: "Leveraging machine learning and AI technologies to build intelligent applications that drive innovation and business efficiency." },
    // { title: "Custom Software Development", description: "Developing tailored software solutions that address specific business challenges, enhancing operational workflows." },
    // { title: "Open Source Software Development", description: "Contributing to and building open-source software that benefits the developer community and fosters collaboration." },
    { title: "Graphic Design", description: "Creating stunning graphics that enhance brand identity and visually communicate your message with precision." },
    { title: "Flyer Design", description: "Designing eye-catching flyers for events, promotions, and marketing campaigns that attract attention and engage audiences." },
    { title: "Logo Design", description: "Designing memorable and impactful logos that capture your brand's essence and leave a lasting impression." },
    { title: "Illustration", description: "Bringing concepts to life with unique, creative illustrations that complement your brand and enhance storytelling." },
    { title: "SEO Optimization", description: "Enhancing your website’s visibility on search engines through effective SEO strategies, driving more organic traffic." }
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
