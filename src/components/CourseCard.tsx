import React from 'react';

interface Course {
  id: string;
  title: string;
  host: string;
  studentsEnrolled: number;
  studentsCompleted: number;
  tags?: string[]; // Added tags property
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
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

  // Matte colors for tags (copied from StudentCourseCard for consistency)
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

  const handleCardClick = () => {
    window.location.href = `/course/${course.id}`;
  };

  return (
    <div 
      className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      onClick={handleCardClick}
    >      {/* Layout with thumbnail and title */}
      <div className="mb-3">
        {/* Top Row - Thumbnail and Title with fixed host position */}
        <div className="flex gap-4 mb-2">
          {/* Left Column - Course Thumbnail */}
          <div className="flex-shrink-0">
            <div className={`w-36 h-20 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center text-xl font-bold text-white shadow-sm group-hover:scale-105 transition-transform duration-300`} style={{ aspectRatio: '16/9' }}>
              {course.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
            </div>
          </div>

          {/* Right Column - Course Title with fixed height space */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Title area with fixed 2-line height */}
            <div className="h-11 mb-4">
              <h3 className="text-sm font-black text-gray-800 leading-5 tracking-tight group-hover:text-blue-600 transition-colors duration-300 break-words line-clamp-2">
                {course.title}
              </h3>
            </div>
            
            {/* Host at fixed position - always 2 lines after title start */}
            <p className="text-sm font-semibold bg-gradient-to-r from-purple-700 via-indigo-800 to-slate-800 bg-clip-text text-transparent tracking-wide break-words">
              by {course.host}
            </p>
          </div>
        </div>

        {/* Bottom Row - Stats below thumbnail and Tag on the right */}
        <div className="flex justify-between items-center gap-4">
          {/* Left: Stats below thumbnail */}
          <div className="w-36 flex-shrink-0">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-sm font-bold text-blue-600">{course.studentsEnrolled}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide leading-tight">Enrolled</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm font-bold text-green-600">{course.studentsCompleted}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide leading-tight">Completed</div>
              </div>
            </div>
          </div>

          {/* Right: Tag display */}
          {course.tags && course.tags.length > 0 && (
            <div className="flex-shrink-0">
              <span 
                className={`${tagColors[course.tags[0].length % tagColors.length]} text-white text-xs font-medium px-2 py-0.5 rounded-md`}
              >
                {course.tags[0]}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
