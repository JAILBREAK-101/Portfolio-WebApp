import Dashboard from '../../../components/layout/Dashboard';
import Projects from '../../../components/projects/index';

export default function DashboardIndex() {
  return (
    <div className='dashboard-page'>
      <Dashboard>
        <Projects />
      </Dashboard>
    </div>
  );
}
