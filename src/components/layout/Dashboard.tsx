import Navbar from '../../components/layout/Navbar';
import Sidebar from '../../components/layout/Sidebar';
import styles from "../../styles/pages.module/Dashboard/Dashboard.module.css";
import { TypeComponent } from '@/types/global.types';

const Dashboard: React.FC<TypeComponent> = ({ children }) => {
  return (
    <div className={styles.dashboardLayout}>
      <Navbar />
      <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;