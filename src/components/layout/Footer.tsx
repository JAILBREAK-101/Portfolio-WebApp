import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "@/styles/layout.module/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "1rem 0",
        textAlign: "center",
      }}
    >
      <div>
        {/* Social Media Links */}
        <div style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://github.com/JAILBREAK-101"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "white", fontSize: "1.5rem" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jailbreak"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "white", fontSize: "1.5rem" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/GenixTech1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "white", fontSize: "1.5rem" }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com/@Genix-Js"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "white", fontSize: "1.5rem" }}
          >
            <FaYoutube />
          </a>
        </div>

        {/* Contact Info */}
        <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          Email: <a href="mailto:info@genixtechsolutions.com" style={{ color: "white" }}>info@genixtechsolutions.com</a>
        </p>
        <p style={{ fontSize: "0.9rem" }}><span>Phone:</span> +1 (123) 456-7890</p>

        {/* Copyright */}
        <p style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
          &copy; {new Date().getFullYear()} GenixTech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
