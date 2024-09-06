// (Dashboard page listing projects)
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import styles from "../../styles/Dashboard.module.css";

export default function Dashboard({children}) {
  return (
    <>
      <Navbar />
      <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
}
