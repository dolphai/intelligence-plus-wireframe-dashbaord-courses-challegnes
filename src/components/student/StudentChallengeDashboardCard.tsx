
import React from 'react';
import StudentDashboardCard from './StudentDashboardCard';

interface StudentChallenge {
  id: string;
  title: string;
  host: string;
  deadline: string;
  image: string;
  status?: 'upcoming' | 'ongoing' | 'expired'; // Optional status for future use
}

interface StudentChallengeDashboardCardProps {
  challenge: StudentChallenge;
}


// Helper to parse deadline string (e.g., '15th May 2025') to Date
const parseDeadline = (deadline: string): Date | null => {
  // Try to parse formats like '15th May 2025', '1st June 2025', etc.
  const cleaned = deadline.replace(/(st|nd|rd|th)/, '');
  const date = new Date(cleaned);
  return isNaN(date.getTime()) ? null : date;
};

const getStatus = (deadline: string): { label: string; color: string } => {
  const now = new Date();
  const deadlineDate = parseDeadline(deadline);
  if (!deadlineDate) {
    return { label: 'Unknown', color: 'bg-gray-400 text-white' };
  }
  // Set challenge as Ongoing if today is deadline, Upcoming if in future, Expired if in past
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const deadlineDay = new Date(deadlineDate.getFullYear(), deadlineDate.getMonth(), deadlineDate.getDate());
  if (deadlineDay.getTime() > today.getTime()) {
    return { label: 'Upcoming', color: 'bg-blue-500 text-white' };
  } else if (deadlineDay.getTime() === today.getTime()) {
    return { label: 'Ongoing', color: 'bg-green-500 text-white' };
  } else {
    return { label: 'Expired', color: 'bg-red-500 text-white' };
  }
};

const StudentChallengeDashboardCard: React.FC<StudentChallengeDashboardCardProps> = ({ challenge }) => {
  const status = getStatus(challenge.deadline);
  return (
    <StudentDashboardCard>
      <div className="relative flex gap-6 items-center h-full min-h-[96px]">
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
        {/* Status Button at bottom right */}
        <div className="absolute right-4 bottom-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${status.color} border border-white/70`}
          >
            {status.label}
          </span>
        </div>
      </div>
    </StudentDashboardCard>
  );
};

export default StudentChallengeDashboardCard;
