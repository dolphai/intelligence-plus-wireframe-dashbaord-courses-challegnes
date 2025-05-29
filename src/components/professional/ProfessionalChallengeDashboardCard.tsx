import React from 'react';
import ProfessionalDashboardCard from './ProfessionalDashboardCard';

interface ProfessionalChallenge {
  id: string;
  title: string;
  host: string;
  deadline: string;
  image: string;
}

interface ProfessionalChallengeDashboardCardProps {
  challenge: ProfessionalChallenge;
}

const ProfessionalChallengeDashboardCard: React.FC<ProfessionalChallengeDashboardCardProps> = ({ challenge }) => {
  return (
    <ProfessionalDashboardCard>
      <div className="flex gap-6 items-center h-full">
        <div className="w-32 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 flex items-center justify-center shadow-sm">
          <img src={challenge.image} alt={challenge.title} className="aspect-[24/9] object-cover" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-black text-gray-800 leading-6 tracking-tight mb-1 line-clamp-2">{challenge.title}</h3>
            <div className="text-sm text-violet-600 font-semibold mb-2">by {challenge.host}</div>
            <div className="text-xs pt-4 text-red-600 font-semibold mb-2">Deadline: {challenge.deadline}</div>
          </div>
        </div>
      </div>
    </ProfessionalDashboardCard>
  );
};

export default ProfessionalChallengeDashboardCard;
