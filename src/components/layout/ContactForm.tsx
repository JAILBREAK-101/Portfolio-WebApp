import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '../form/Button/Button';
import styles from "@/styles/layout.module/ContactForm.module.css";

// Define a type for the form data
type FormData = {
  fullname: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  // Initialize state with type FormData
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    service: "",
    message: ""
  });

  // Handle input changes with the correct event types
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Process form submission (e.g., send data to an API or email service)
    console.log("Form submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <label className={styles.formLabel} htmlFor="fullname">Full Name <span style={{color: "red"}}>*</span></label>
        <input
          type="text"
          className={styles.inputField}
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div>
        <label className={styles.formLabel} htmlFor="email">Email Address <span style={{color: "red"}}>*</span></label>
        <input
          type="email"
          className={styles.inputField}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label className={styles.formLabel} htmlFor="service">Service Requested <span style={{color: "red"}}>*</span></label>
        <select
          id="service"
          className={styles.selectField}
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a service</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Fullstack Development">Fullstack Development</option>
          <option value="Mobile Application Development">Mobile App Development</option>
          {/* <option value="AI Application Development">AI Application Development</option> */}
          {/* <option value="Custom Software Development">Custom Software Development</option> */}
          {/* <option value="Open Source Development">Open Source Software Development</option> */}
          <option value="Graphic Design">Graphic Design</option>
          <option value="Flyer Design">Flyer Design</option>
          <option value="Logo Design">Logo Design</option>
          <option value="Illustration">Illustration</option>
          <option value="SEO Optimization">SEO Optimization</option>
        </select>
      </div>

      <div>
        <label className={styles.formLabel} htmlFor="message">What would you like us to do? <span style={{color: "red"}}>*</span></label>
        <textarea
          id="message"
          className={styles.textAreaField}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>

      <Button body={"Submit "} />
    </form>
  );
}
