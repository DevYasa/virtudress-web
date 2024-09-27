import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminDashboard from './AdminDashboard';

const AdminLayout = () => {
  const { user, isAdmin } = useAuth();

  if (!user || !isAdmin) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="admin-layout">
      <AdminDashboard />
    </div>
  );
};

export default AdminLayout;