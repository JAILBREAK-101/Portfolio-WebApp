import Dashboard from '../../components/layout/Dashboard';
import GitHub from '../../components/GitHub';

export default function DashboardIndex() {
  return (
    <Dashboard>
      <GitHub activities={[]} />
    </Dashboard>
  );
}
