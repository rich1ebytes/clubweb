import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtectedRoute = () => {
  const adminToken = localStorage.getItem('adminToken');
  const adminRole = localStorage.getItem('adminRole');

  return adminToken && adminRole === 'admin' ? <Outlet /> : <Navigate to="/admin" />;
};

export default AdminProtectedRoute;