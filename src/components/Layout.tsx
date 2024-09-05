// (main layout component for the app)
import Navbar from './Navbar';
import Footer from './Footer';
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
