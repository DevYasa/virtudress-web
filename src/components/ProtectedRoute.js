import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  if (!adminOnly && user.isAdmin) {
    return <Navigate to="/admin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;