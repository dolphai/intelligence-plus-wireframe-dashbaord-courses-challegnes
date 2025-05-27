import React from 'react';

interface StudentCourse {
  id: string;
  title: string;
  host: string;
  studentProgress: number;
  tags: string[];
  validTill: string;
}

interface StudentCourseCardProps {
  course: StudentCourse;
}

const StudentCourseCard: React.FC<StudentCourseCardProps> = ({ course }) => {
  // Generate a gradient color based on course ID for visual variety
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-purple-500 to-pink-600',
    'from-orange-500 to-red-600',
    'from-indigo-500 to-blue-600',
    'from-teal-500 to-green-600',
  ];
  // Matte colors for tags (softer, less irritating)
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
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {/* Top Row - Thumbnail and Title */}
      <div className="flex gap-3 mb-2">
        {/* Left Column - Thumbnail */}
        <div className="flex-shrink-0 w-28">
          <div className={`w-28 h-16 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center text-lg font-bold text-white shadow-sm`}>
            {course.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
          </div>
        </div>

        {/* Right Column - Course Title and Tag */}
        <div className="flex flex-col justify-start flex-1 min-w-0">
          {/* Fixed height container for title (2 lines) */}
          <div className="h-10 mb-1"> {/* h-10 for 2 lines (2.5rem), mb-1 for spacing */}
            <h3 className="text-sm font-black text-gray-800 line-clamp-2 leading-5 tracking-tight"> {/* leading-5 for 1.25rem line height */}
              {course.title}
            </h3>
          </div>
          
          {/* Tags Display - Single tag only, now at a fixed position */}
          {course.tags && course.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span 
                className={`${tagColors[0]} text-white text-xs font-medium px-2 py-0.5 rounded-md`}
              >
                {course.tags[0]}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Second Row - Host beside thumbnail bottom and Valid Till */}
      <div className="flex gap-3 mb-3">
        <div className="w-28 flex-shrink-0">
          <p className="text-sm font-semibold bg-gradient-to-r from-purple-700 via-indigo-800 to-slate-800 bg-clip-text text-transparent truncate tracking-wide">
            {course.host}
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <span className="text-xs font-medium text-gray-500">
            Valid till: {new Date(course.validTill).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      {/* Progress Bar - Full width from thumbnail to end */}
      <div className="group">
        <div className="w-full bg-gray-200 rounded-full h-1 relative overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-500"
            style={{ width: `${course.studentProgress}%` }}
          ></div>
        </div>
        {/* Tooltip on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
          <span className="text-xs font-semibold text-blue-600">
            {course.studentProgress}% Complete
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseCard;
