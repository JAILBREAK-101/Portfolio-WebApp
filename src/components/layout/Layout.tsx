import Footer from './Footer';
import styles from '../../styles/layout.module/Layout.module.css';
import { TypeComponent } from '@/types/global.types';
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

const Layout: React.FC<TypeComponent> = ({ children }) => {
  return (
    <div className={`main-page ${styles.layout}`}>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Analytics /> */}
      {/* <SpeedInsights /> */}
      <Footer />
    </div>
  );
}

export default Layout;