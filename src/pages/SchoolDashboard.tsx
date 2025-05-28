import React from 'react';
import SchoolDashboardCourseCard from '../components/SchoolDashboardCourseCard';
import { BookOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchoolDashboard: React.FC = () => {
  // Mock data for school
  const schoolName = 'St. Algyus School';
  const totalCourses = 50;
  const totalStudents = 40;
  const totalChallenges = 20;
  const logoUrl = '/images/partners/intelligenceplus.png';

  // Mock courses
  const courses = [
    {
      id: 'course-1',
      title: 'Innovation Course',
      host: 'Sarah Joe',
      studentsEnrolled: 50,
      studentsCompleted: 50,
      tags: ['#Free']
    },
    {
      id: 'course-2',
      title: 'Mathematics Basics',
      host: 'John Doe',
      studentsEnrolled: 40,
      studentsCompleted: 30,
      tags: ['#Math']
    },
    {
      id: 'course-3',
      title: 'Science Explorers',
      host: 'Jane Smith',
      studentsEnrolled: 35,
      studentsCompleted: 20,
      tags: ['#Science']
    },
  ];

  // Mock challenges
  const challenges = [
    {
      id: 'challenge-1',
      title: 'Innoventure Challenge',
      host: 'Dr. Ken',
      deadline: '15th March 2025',
      image: '/images/challenges/innoventure_challenge.png',
    },
  ];

  // // Mock data for courses
  // const courses = [
  //   {
  //     id: 'course-1',
  //     title: 'Advanced Mathematics',
  //     host: 'MIT OpenCourseWare',
  //     studentsEnrolled: 124,
  //     studentsCompleted: 89,
  //     tags: ['#Free'] // Added tag
  //   },
  //   {
  //     id: 'course-2',
  //     title: 'Computer Science Fundamentals',
  //     host: 'Stanford Online',
  //     studentsEnrolled: 98,
  //     studentsCompleted: 67,
  //     tags: ['#Free'] // Added tag
  //   },
  //   {
  //     id: 'course-3',
  //     title: 'Physics & Engineering',
  //     host: 'Harvard Extension',
  //     studentsEnrolled: 156,
  //     studentsCompleted: 112,
  //     tags: ['#Free'] // Added tag
  //   },
  //   {
  //     id: 'course-4',
  //     title: 'Data Science Basics',
  //     host: 'Coursera',
  //     studentsEnrolled: 203,
  //     studentsCompleted: 145,
  //     tags: ['#Free'] // Added tag
  //   },
  //   {
  //     id: 'course-5',
  //     title: 'Digital Marketing',
  //     host: 'Google Digital Garage',
  //     studentsEnrolled: 87,
  //     studentsCompleted: 64,
  //     tags: ['#Free'] // Added tag
  //   },
  //   {
  //     id: 'course-6',
  //     title: 'Creative Writing',
  //     host: 'MasterClass',
  //     studentsEnrolled: 76,
  //     studentsCompleted: 52,
  //     tags: ['#Free'] // Added tag
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center justify-between">
          <div>
        
        <h1 className="text-2xl font-bold text-violet-800">Welcome<br />{schoolName}</h1>
          </div>
          <img src={logoUrl} alt="Intelligence Plus" className="h-10" />
        </div>
        
        {/* Purple modern line */}
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-700 mb-4 rounded-full"></div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-500 mb-1">Total Courses</div>
            <div className="text-3xl font-black text-blue-600">{totalCourses}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-500 mb-1">Total Students</div>
            <div className="text-3xl font-black text-pink-600">{totalStudents}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-500 mb-1">Total Challenges</div>
            <div className="text-3xl font-black text-cyan-600">{totalChallenges}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Available Courses */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
            <h2 className="mb-3 text-2xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
              <BookOpen size={28} className="text-purple-600" />
              Available Courses
            </h2>
            <div className="flex flex-col gap-6 flex-1">
              {courses.map((course) => (
              <div key={course.id} className="flex gap-6 items-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="w-32 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-200 flex items-center justify-center shadow-sm">
                <BookOpen size={32} className="text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-black text-gray-800 leading-6 tracking-tight">{course.title}</h3>
                <div className="text-sm text-violet-600 font-semibold mb-2">by {course.host}</div>
                <div className="flex gap-2 items-center">
                <div className="text-xs text-green-600 font-semibold">Enrolled: {course.studentsEnrolled}</div>
                <div className="text-xs text-blue-600 font-semibold">Completed: {course.studentsCompleted}</div>
                </div>
                
              </div>
              </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/school/courses" className="text-blue-600 font-semibold hover:underline">View More</Link>
            </div>
            </div>
            {/* Available Challenges */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
            <h2 className="mb-3 text-2xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
              <Trophy size={28} className="text-orange-600" />
              Available Challenges
            </h2>
            <div className="flex flex-col gap-6 flex-1">
              {challenges.map((challenge) => (
              <div key={challenge.id} className="flex gap-6 items-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-32 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 flex items-center justify-center shadow-sm">
                <img src={challenge.image} alt={challenge.title} className="aspect-[24/9] object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                <h3 className="text-lg font-black text-gray-800 leading-6 tracking-tight ">{challenge.title}</h3>
                <div className="text-sm text-violet-600 font-semibold mb-5">by {challenge.host}</div>
                {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                  
                </div> */}
                <div className="text-xs pt-4 text-red-600 font-semibold mb-2">Deadline: {challenge.deadline}</div>
                </div>
              </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/school/challenges" className="text-blue-600 font-semibold hover:underline">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
