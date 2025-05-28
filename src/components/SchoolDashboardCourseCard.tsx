import React from 'react';

interface SchoolDashboardCourseCardProps {
  title: string;
  host: string;
  studentsCompleted: number;
  studentsEnrolled: number;
  thumbnailUrl?: string;
}

const SchoolDashboardCourseCard: React.FC<SchoolDashboardCourseCardProps> = ({
  title,
  host,
  studentsCompleted,
  studentsEnrolled,
  thumbnailUrl,
}) => {
  return (
    <div className="flex bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden">
      {/* Thumbnail */}
      <div className="w-24 h-16 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl font-bold text-blue-700">{title.split(' ').map(w => w[0]).join('').slice(0,2)}</span>
        )}
      </div>
      {/* Info */}
      <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="text-base font-bold text-gray-800 truncate mb-1">{title}</h3>
          <div className="text-xs text-gray-500 mb-1 truncate">by {host}</div>
        </div>
        <div className="flex gap-4 text-xs">
          <div className="text-green-700 font-semibold">Completed {studentsCompleted}</div>
          <div className="text-blue-700 font-semibold">Enrolled {studentsEnrolled}</div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboardCourseCard;
