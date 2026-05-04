import { useAuth } from '../context/AuthContext';
import DashboardPage from './DashboardPage';
import CompanyDashboard from './CompanyDashboard';
import IndividualDashboard from './IndividualDashboard';
import TrainerDashboard from './TrainerDashboard';

export default function DashboardRouter() {
  const { user } = useAuth();

  switch (user?.role) {
    case 'company':
      return <CompanyDashboard />;
    case 'individual':
      return <IndividualDashboard />;
    case 'trainer':
      return <TrainerDashboard />;
    case 'admin':
    default:
      return <DashboardPage />;
  }
}
