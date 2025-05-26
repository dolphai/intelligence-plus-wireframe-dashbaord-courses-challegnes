import React from 'react';
import { Users, TrendingUp, Eye, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  host: string;
  studentsEnrolled: number;
  studentsCompleted: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const completionRate = Math.round((course.studentsCompleted / course.studentsEnrolled) * 100);
  
  // Generate a gradient color based on course ID for visual variety
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-purple-500 to-pink-600',
    'from-orange-500 to-red-600',
    'from-indigo-500 to-blue-600',
    'from-teal-500 to-green-600',
  ];
  
  const gradientIndex = course.id.charCodeAt(course.id.length - 1) % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      {/* Header with thumbnail and title */}
      <div className="flex gap-4 mb-4">
        {/* Course Thumbnail */}
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center text-lg font-bold text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}>
          {course.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
        </div>
        
        {/* Course Title and Host */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-black text-gray-800 line-clamp-2 leading-tight mb-1 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-sm font-semibold bg-gradient-to-r from-purple-700 via-indigo-800 to-slate-800 bg-clip-text text-transparent">
            by {course.host}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center justify-center mb-1">
            <Users size={16} className="text-blue-600" />
          </div>
          <div className="text-lg font-bold text-blue-600">{course.studentsEnrolled}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">Enrolled</div>
        </div>
        
        <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
          <div className="flex items-center justify-center mb-1">
            <TrendingUp size={16} className="text-green-600" />
          </div>
          <div className="text-lg font-bold text-green-600">{course.studentsCompleted}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">Completed</div>
        </div>
        
        <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-100">
          <div className="flex items-center justify-center mb-1">
            <BookOpen size={16} className="text-amber-600" />
          </div>
          <div className="text-lg font-bold text-amber-600">{completionRate}%</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">Rate</div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex gap-2">
        <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-4 rounded-lg font-bold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 shadow-md">
          Manage Course
        </button>
        <button className="px-3 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center">
          <Eye size={16} />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
