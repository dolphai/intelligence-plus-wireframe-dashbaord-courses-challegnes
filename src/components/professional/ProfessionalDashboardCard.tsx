import React from 'react';

interface ProfessionalDashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

const ProfessionalDashboardCard: React.FC<ProfessionalDashboardCardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full ${className}`}>
    {children}
  </div>
);

export default ProfessionalDashboardCard;
