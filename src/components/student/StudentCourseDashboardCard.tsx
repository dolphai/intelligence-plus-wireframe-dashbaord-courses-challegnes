import React from 'react';
import StudentDashboardCard from './StudentDashboardCard';

interface StudentCourse {
  id: string;
  title: string;
  host: string;
  studentProgress: number;
  tags: string[];
  validTill: string;
}

interface StudentCourseDashboardCardProps {
  course: StudentCourse;
}

const StudentCourseDashboardCard: React.FC<StudentCourseDashboardCardProps> = ({ course }) => {
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-purple-500 to-pink-600',
    'from-orange-500 to-red-600',
    'from-indigo-500 to-blue-600',
    'from-teal-500 to-green-600',
  ];
  const tagColors = [
    'bg-red-400',
    'bg-orange-400', 
    'bg-yellow-400',
    'bg-green-400',
    'bg-blue-400',
    'bg-indigo-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-teal-400',
    'bg-cyan-400',
  ];
  const gradientIndex = course.id.charCodeAt(course.id.length - 1) % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <StudentDashboardCard>
      <div className="flex gap-6 items-center h-full">
        <div className={`w-32 h-24 rounded-xl overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
          <span className="text-2xl font-bold text-white">
            {course.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
          </span>
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-black text-gray-800 leading-6 tracking-tight mb-0 line-clamp-2">{course.title}</h3>
            <div className="text-sm text-violet-600 font-semibold mb-2">by {course.host}</div>
            <div className="flex gap-4 items-center mb-2">
              <div className="text-xs text-green-600 font-semibold">Progress: {course.studentProgress}%</div>
               <div className="text-xs text-blue-600 font-semibold">Valid till: {new Date(course.validTill).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${course.studentProgress}%` }}
            ></div>
          </div>
          {/* {course.tags && course.tags.length > 0 && (
            <span className={`${tagColors[course.tags[0].length % tagColors.length]} text-white text-xs font-medium px-2 py-0.5 rounded-md`}>{course.tags[0]}</span>
          )} */}
        </div>
      </div>
    </StudentDashboardCard>
  );
};

export default StudentCourseDashboardCard;
