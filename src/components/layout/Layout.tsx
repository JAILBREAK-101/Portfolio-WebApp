import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../styles/layout.module/Layout.module.css';
import { TypeComponent } from '@/types/global.types';

const Layout: React.FC<TypeComponent> = ({ children }) => {
  return (
    <div className={`main-page ${styles.layout}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;