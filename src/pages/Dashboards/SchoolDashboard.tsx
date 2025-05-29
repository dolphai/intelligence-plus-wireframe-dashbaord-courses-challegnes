import React from 'react';
import SchoolChallengeDashboardCard from '../../components/school/SchoolChallengeDashboardCard';
import SchoolCourseDashboardCard from '../../components/school/SchoolCourseDashboardCard';
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
      title: 'Innovation Course For Beginners',
      host: 'Sarah Joe',
      studentsEnrolled: 50,
      studentsCompleted: 50,
      tags: ['#Free']
    },
    {
      id: 'course-2',
      title: 'Mathematics Basics for Kids',
      host: 'John Doe',
      studentsEnrolled: 40,
      studentsCompleted: 30,
      tags: ['#Math']
    },
    {
      id: 'course-3',
      title: 'Science Explorers for Kids',
      host: 'Jane Smith',
      studentsEnrolled: 35,
      studentsCompleted: 20,
      tags: ['#Science']
    },
  ];

  // Mock challenges

  // Mock challenges
  const challenges = [
    {
      id: 'challenge-1',
      title: 'Innoventure Challenge',
      host: 'Dr. Ken',
      deadline: '15th May 2025',
      image: '/images/challenges/innoventure_challenge.png',
    },
    {
      id: 'challenge-2',
      title: 'Math Olympiad',
      host: 'Prof. Alan',
      deadline: '1st June 2025',
      image: '/images/challenges/innoventure_challenge.png',
    },
    {
      id: 'challenge-3',
      title: 'Science Fair',
      host: 'Dr. Marie',
      deadline: '10th June 2025',
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
                <SchoolCourseDashboardCard key={course.id} course={course} />
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/school/courses" className="text-blue-600 font-semibold hover:underline">View More</Link>
            </div>
            </div>
             {/* Available Challenges */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col h-full min-h-[420px]">
            <h2 className="mb-3 text-2xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
              <Trophy size={28} className="text-orange-600" />
              Available Challenges
            </h2>
            <div className="flex flex-col gap-6 flex-1">
              {challenges.map((challenge) => (
                <SchoolChallengeDashboardCard key={challenge.id} challenge={challenge} />
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
