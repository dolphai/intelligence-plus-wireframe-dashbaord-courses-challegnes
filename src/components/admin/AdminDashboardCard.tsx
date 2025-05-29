import React from 'react';

interface AdminDashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

const AdminDashboardCard: React.FC<AdminDashboardCardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full ${className}`}>
    {children}
  </div>
);

export default AdminDashboardCard;
