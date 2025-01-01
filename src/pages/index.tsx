import { motion } from 'framer-motion';
import Image from 'next/image';
import GTS from "@/assets/images/GTS.png";
import styles from '../styles/pages.module/Home/Home.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaPerson, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Button } from "../components/form/Button/Button";

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>GenixTech Solutions</h1>
          <p className={styles.subheading}><Link href={'/dashboard/services'} >Multidisciplinary</Link> Tech Agency with over 2 years expertise engineering solutions for small businesses and solopreneurs.</p>

          <blockquote className={styles.quote}>"Your Vision! Our Solution!"</blockquote>
          {/* <blockquote className={styles.quote}>"Curiosity fuels me to do more."</blockquote> */}
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={GTS}
            alt="Profile Picture"
            width={200}
            height={200}
            className={styles.profilePicture}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="https://github.com/JAILBREAK-101" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/jailbreak" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/GenixTech1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com/@Genix-Js" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <Link href="/about" target="_blank" rel="noopener noreferrer"><FaPerson /></Link>
        </motion.div>

        <div className={styles.buttonGroup}>
          {/* Explore Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link href="/dashboard/projects">
              <Button btnClass={`${styles.exploreButton}`} body={'Solutions'} />
            </Link>
          </motion.div>
          
          {/* Hire me button Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link href="/dashboard/services">
              <Button btnClass={`${styles.secondaryButton}`} body={"Work with us"} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* <section className={styles.missionSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
        <h2 className={styles.sectionTitle}>What We Do</h2>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <FaGithub className={styles.icon} />
            <h3>Software Development</h3>
            <p>Building robust and scalable software solutions tailored to your needs.</p>
          </div>
          <div className={styles.service}>
            <FaYoutube className={styles.icon} />
            <h3>YouTube Content</h3>
            <p>Educational tech tutorials and creative content.</p>
          </div>
          {/* <div className={styles.serviceItem}>
            <FaYoutube className={styles.icon} />
            <h3>Creative Content Creation</h3>
            <p>Producing engaging videos and designs that tell your story.</p>
          </div>
          <div className={styles.serviceItem}>
            <FaLinkedin className={styles.icon} />
            <h3>Graphic Design</h3>
            <p>Crafting visually stunning designs that make your brand stand out.</p>
          </div>
        </div>
      </motion.div>
    </section> */}
    </>
  );
}

// import React, { useState } from 'react';
// import styles from "@/styles/index.module.css";
// import Countdown from 'react-countdown';

// export default function ComingSoon() {
//   const [email, setEmail] = useState('');

//   const tenDaysFromNow = Date.now() + 10 * 24 * 60 * 60 * 1000;

//   const handleInputChange = (e: any) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     // Handle email submission logic (could integrate with a service like Mailchimp)
//     console.log("Submitted email:", email);
//     alert("Thank you for signing up! You'll be notified when the website is live.");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.heading}>My Website is Coming Soon!</h1>
//         <p className={styles.description}>I'm building something amazing. Stay tuned for updates!</p>

//         {/* Countdown (optional) */}
//         <div className={styles.countdown}>
//           <Countdown date={tenDaysFromNow} />
//         </div>
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.heading}>My Website is Coming Soon!</h1>
//         <p className={styles.description}>I'm building something amazing. Stay tuned for updates!</p>

//         {/* Countdown (optional) */}
//         <div className={styles.countdown}>
//           <Countdown date={tenDaysFromNow} />
//         </div>

//         {/* Sign-up Form */}
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="email"
//             placeholder="Enter your email to stay updated"
//             value={email}
//             onChange={handleInputChange}
//             className={styles.emailInput}
//             required
//           />
//           <button type="submit" className={styles.submitButton}>Notify Me</button>
//         </form>
//         {/* Sign-up Form */}
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="email"
//             placeholder="Enter your email to stay updated"
//             value={email}
//             onChange={handleInputChange}
//             className={styles.emailInput}
//             required
//           />
//           <button type="submit" className={styles.submitButton}>Notify Me</button>
//         </form>

//         {/* Social Links */}
//         <div className={styles.socialLinks}>
//           <a href="https://github.com/JAILBREAK-101" target="_blank" rel="noopener noreferrer">
//             GitHub
//           </a>
//           <a href="https://linkedin.com/in/jailbreak" target="_blank" rel="noopener noreferrer">
//             LinkedIn
//           </a>
//         <div className={styles.socialLinks}>
//           <a href="https://github.com/JAILBREAK-101" target="_blank" rel="noopener noreferrer">
//             GitHub
//           </a>
//           <a href="https://linkedin.com/in/jailbreak" target="_blank" rel="noopener noreferrer">
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
