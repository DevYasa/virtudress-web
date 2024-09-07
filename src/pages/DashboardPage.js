import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';

const DashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/user/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#13072e] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome, {user.name}!</h1>
        
        <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>

        {stats && (
          <div className="bg-[#1f0f47] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Products</h3>
                <p className="text-3xl font-bold">{stats.totalProducts}</p>
              </div>
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Try-ons</h3>
                <p className="text-3xl font-bold">{stats.totalTryOns}</p>
              </div>
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Conversions</h3>
                <p className="text-3xl font-bold">{stats.conversionRate}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;