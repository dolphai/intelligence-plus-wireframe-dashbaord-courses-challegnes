import React from 'react';
import AdminDashboardCard from './AdminDashboardCard';
import { Link } from 'react-router-dom';
import { Edit } from 'lucide-react';

interface AdminCourse {
  id: string;
  title: string;
  host: string;
  studentsEnrolled: number;
  studentsCompleted: number;
  tags: string[];
}

interface AdminCourseDashboardCardProps {
  course: AdminCourse;
}

const AdminCourseDashboardCard: React.FC<AdminCourseDashboardCardProps> = ({ course }) => {
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
    <AdminDashboardCard>
      <div className="relative">
        <Link
          to={`/edit/course/${course.id}`}
          className="absolute top-0 right-0 z-10 text-blue-600 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg border border-blue-200 transition-colors shadow-sm"
        >
          <Edit className="w-4 h-4" />
        </Link>
        <div className="flex gap-6 items-center h-full">
          <div className={`w-32 h-24 rounded-xl overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
            <span className="text-2xl font-bold text-white">
              {course.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
            </span>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-black text-gray-800 leading-6 tracking-tight mb-0 line-clamp-2">{course.title}</h3>
              <div className="text-sm text-violet-600 font-semibold mb-8">by {course.host}</div>
              <div className="flex gap-4 items-center mb-2">
                <div className="text-sm text-green-600 font-semibold mr-2">Enrolled: {course.studentsEnrolled}</div>
                <div className="text-sm text-blue-600 font-semibold">Completed: {course.studentsCompleted}</div>
              </div>
            </div>
            {/* {course.tags && course.tags.length > 0 && (
              <span className={`${tagColors[course.tags[0].length % tagColors.length]} text-white text-xs font-medium px-2 py-0.5 rounded-md`}>{course.tags[0]}</span>
            )} */}
          </div>
        </div>
      </div>
    </AdminDashboardCard>
  );
};

export default AdminCourseDashboardCard;
