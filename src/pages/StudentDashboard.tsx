import React, { useState } from 'react';
import { BookOpen, Trophy, Target, CheckCircle, Book } from 'lucide-react';
import StudentCourseCard from '../components/StudentCourseCard';

const StudentDashboard: React.FC = () => {
  // Challenge dates state
  const [selectedChallengeDates] = useState<number[]>([15, 16]); // Mock selected dates  // Mock data for student courses
  const enrolledCourses = [
    {
      id: 'course-1',
      title: 'Advanced Mathematics',
      host: 'Dr. Smith',
      studentProgress: 75,
      tags: ['#free', '#awesome', '#beginner', '#math'],
      validTill: '2025-12-31',
    },
    {
      id: 'course-2', 
      title: 'Computer Science Fundamentals',
      host: 'Prof. Johnson',
      studentProgress: 60,
      tags: ['#popular', '#coding', '#tech', '#essential'],
      validTill: '2026-01-15',
    },
    {
      id: 'course-3',
      title: 'Physics Laboratory',
      host: 'Dr. Williams', 
      studentProgress: 80,
      tags: ['#hands-on', '#science', '#lab'],
      validTill: '2025-11-30',
    },
    {
      id: 'course-4',
      title: 'English Literature',
      host: 'Ms. Davis',
      studentProgress: 90,
      tags: ['#creative', '#writing', '#classic', '#literature'],
      validTill: '2026-02-28',
    },
  ];

  // Statistics
  const stats = {
    enrolledCourses: 6,
    completedAssignments: 24,
    activeChallenges: 3,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-3 tracking-tight">
            Student Dashboard
          </h1>
          <p className="text-xl font-medium text-slate-600 tracking-wide">
            Track your academic progress and stay on top of your coursework
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
              <Book size={24} />
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">{stats.enrolledCourses}</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wide">Enrolled Courses</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white">
              <Target size={24} />
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">{stats.completedAssignments}</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wide">Completed Assignments</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
              <Trophy size={24} />
            </div>
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">{stats.activeChallenges}</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wide">Active Challenges</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
                  <BookOpen size={28} className="text-purple-600" />
                  My Learning
                </h2>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  View All
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {enrolledCourses.map((course) => (
                  <StudentCourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Challenge */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-4">
                <h2 className="text-2xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
                  <Trophy size={28} className="text-orange-600" />
                  Challenge Participation
                </h2>
              </div>
                {/* Challenge Image */}
              <div className="mb-4 overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: '24/9' }}>
                <img 
                  src="/images/challenges/innoventure_challenge.png"
                  alt="Challenge" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Selected Challenge Dates */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-lg mb-4">
                <div className="text-green-600">
                  <CheckCircle size={16} />
                </div>c 
                <div>
                  <h4 className="text-sm font-bold text-slate-800 tracking-wide">School Selected Dates</h4>
                  <p className="text-xs font-medium text-slate-600">Your school has registered for these dates</p>
                </div>
              </div>
              
              {/* Date Display */}
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                    {selectedChallengeDates[0]} Oct
                  </div>
                  <span className="text-gray-400 font-bold">-</span>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                    {selectedChallengeDates[1]} Oct
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm font-semibold text-green-600">✓ Confirmed</span>
                </div>
              </div>

              {/* Challenge Action Button */}
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => window.location.href = '/student/challenges/innovation-championship-2025'}
                  className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Go to Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
