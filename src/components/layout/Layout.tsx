import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../styles/layout.module/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={`main-page ${styles.layout}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
