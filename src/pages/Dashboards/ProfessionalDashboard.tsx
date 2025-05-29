import React from 'react';
import { BookOpen, Trophy } from 'lucide-react';
import ProfessionalDashboardCourseCard from '../../components/professional/ProfessionalCourseDashboardCard';
import ProfessionalChallengeDashboardCard from '../../components/professional/ProfessionalChallengeDashboardCard';
import { Link } from 'react-router-dom';

const ProfessionalDashboard: React.FC = () => {
  // Mock data for Professional
  const ProfessionalName = 'Samyak Nahar';
  const logoUrl = '/images/partners/intelligenceplus.png';
  const stats = {
    enrolledCourses: 6,
    completedAssignments: 24,
    activeChallenges: 3,
  };

  // Mock courses
  const enrolledCourses = [
    {
      id: 'course-1',
      title: 'Innovation Course',
      host: 'Sarah Joe',
      ProfessionalProgress: 75,
      tags: ['#Free'],
      validTill: '2025-12-31',
    },
    {
      id: 'course-2',
      title: 'Mathematics Basics',
      host: 'John Doe',
      ProfessionalProgress: 60,
      tags: ['#Math'],
      validTill: '2026-01-15',
    },
    {
      id: 'course-3',
      title: 'Science Explorers',
      host: 'Jane Smith',
      ProfessionalProgress: 80,
      tags: ['#Science'],
      validTill: '2025-11-30',
    },
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center justify-between">
          <div>
        
        <h1 className="text-2xl font-bold text-violet-800">Welcome<br />{ProfessionalName}</h1>
          </div>
          <img src={logoUrl} alt="Intelligence Plus" className="h-10" />
        </div>
        
        {/* Purple modern line */}
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-700 mb-4 rounded-full"></div>


        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-500 mb-1">Enrolled Courses</div>
            <div className="text-3xl font-black text-blue-600">{stats.enrolledCourses}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-500 mb-1">Completed Assignments</div>
            <div className="text-3xl font-black text-green-600">{stats.completedAssignments}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <div className="text-lg font-semibold text-gray-500 mb-1">Active Challenges</div>
            <div className="text-3xl font-black text-orange-600">{stats.activeChallenges}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* My Learning */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col h-full min-h-[420px]">
            <h2 className="mb-3 text-2xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
              <BookOpen size={28} className="text-purple-600" />
              My Learning
            </h2>
            <div className="flex flex-col gap-6 flex-1">
              {enrolledCourses.map((course) => (
                <ProfessionalDashboardCourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/Professional/courses" className="text-blue-600 font-semibold hover:underline">View More</Link>
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
                <ProfessionalChallengeDashboardCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/Professional/challenges" className="text-blue-600 font-semibold hover:underline">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
