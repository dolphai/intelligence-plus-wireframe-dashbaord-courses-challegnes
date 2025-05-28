import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, Trophy, Download, Clock, Target, BookOpen, Award, FileText } from 'lucide-react';
import { Link } from "react-router-dom"

const ChallengeDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeRound, setActiveRound] = useState(0);

  // Mock challenge details
  const challengeDetails = {
    _id: 'challenge-123',
    name: 'Innovation Championship 2025',
    description: 'A comprehensive challenge focusing on innovative problem-solving and creative thinking.',
    fullDescription: 'This challenge spans multiple rounds with increasing difficulty levels, designed to test students\' creativity, analytical thinking, and implementation skills. Participants will engage in collaborative problem-solving sessions and present innovative solutions to real-world challenges.',
    deadline: '2025-07-15T23:59:59Z',
    participants: 245,
    qualified: 45,
    status: 'active',
    difficulty: 'Advanced',
    category: 'Innovation',
    rounds: ['Round 1', 'Round 2', 'Round 3', 'Round 4'],
    createdAt: '2025-01-15T00:00:00Z',
    image: '/images/challenges/innoventure_challenge.png',
    organizer: 'Innovation Hub',
    prizeMoney: '₹50,000'
  };
  interface Partner {
    name: string;
    logoUrl: string;
  }
  const roundData = [
    { grade: "Grade 5", registered: 100, attempted: 90, qualified: 15 },
    { grade: "Grade 6", registered: 85, attempted: 85, qualified: 12 },
    { grade: "Grade 7", registered: 78, attempted: 78, qualified: 10 },
    { grade: "Grade 8", registered: 88, attempted: 88, qualified: 8 },
  ];

  const resources = [
    { name: "Challenge Guidelines", url: "/files/challenge-guidelines.pdf", size: "2.5 MB" },
    { name: "Sample Problems", url: "/files/sample-problems.pdf", size: "1.8 MB" },
    { name: "Submission Template", url: "/files/submission-template.docx", size: "0.5 MB" },
    { name: "Evaluation Criteria", url: "/files/evaluation-criteria.pdf", size: "1.2 MB" },
  ];

  // Associated course data
  const associatedCourse = {
    id: 'course-innovation-101',
    name: 'Innovation and Problem Solving Fundamentals',
    description: 'Core course designed to prepare students for innovation challenges through creative thinking and systematic problem-solving approaches.',
    instructor: 'Dr. Sarah Mitchell',
    totalStudents: 351,
    completedStudents: 245
  };

  const courseEnrollmentData = [
    { grade: "LKG", enrolled: 45, completed: 42, completionRate: 93 },
    { grade: "UKG", enrolled: 52, completed: 48, completionRate: 92 },
    { grade: "1st", enrolled: 68, completed: 61, completionRate: 90 },
    { grade: "2nd", enrolled: 72, completed: 65, completionRate: 90 },
    { grade: "3rd", enrolled: 78, completed: 68, completionRate: 87 },
    { grade: "4th", enrolled: 85, completed: 72, completionRate: 85 },
    { grade: "5th", enrolled: 95, completed: 78, completionRate: 82 },
    { grade: "6th", enrolled: 88, completed: 71, completionRate: 81 },
    { grade: "7th", enrolled: 92, completed: 56, completionRate: 61 },
    { grade: "8th", enrolled: 76, completed: 40, completionRate: 53 },
    { grade: "9th", enrolled: 84, completed: 38, completionRate: 45 },
    { grade: "10th", enrolled: 79, completed: 32, completionRate: 41 },
  ];

  const getDaysRemaining = () => {
    const deadline = new Date(challengeDetails.deadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const partners: Partner[] = [
    { name: "Education Word", logoUrl: "/images/partners/education_world.png" }, // Placeholder
    { name: "IIT Hydrabad", logoUrl: "/images/partners/iit.png" }, // Placeholder
    { name: "Intelligence Plus", logoUrl: "/images/partners/intelligenceplus.png" }, // Placeholder
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-700 bg-green-100 border-green-200';
      case 'upcoming': return 'text-blue-700 bg-blue-100 border-blue-200';
      case 'completed': return 'text-gray-700 bg-gray-100 border-gray-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
       <div className="mb-4">
      <h1 className="text-4xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-1 tracking-tight antialiased leading-normal">
        Challenge Resources
      </h1>



        <p className="text-xl font-medium text-slate-600 tracking-wide">
          Information and resources for the Innovation Championship 2025
        </p>

        </div>
        {/* Header
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <button 
            onClick={() => console.log('Navigate back to challenges')} 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Challenges
          </button>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <h1 className="text-3xl font-bold text-gray-900">{challengeDetails.name}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(challengeDetails.status)}`}>
                  {challengeDetails.status.charAt(0).toUpperCase() + challengeDetails.status.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 text-lg">{challengeDetails.description}</p>
            </div>
          </div>
        </div> */}

        {/* Hero Section with Image and Meta */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-6 p-6">
            <div className="lg:w-1/3">
              <img 
              src={challengeDetails.image} 
              alt={challengeDetails.name} 
              className="w-full bg-gray-100 aspect-[24/9] object-cover rounded-xl shadow-sm"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{challengeDetails.name}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border w-fit ${getStatusColor(challengeDetails.status)}`}>
                  {challengeDetails.status.charAt(0).toUpperCase() + challengeDetails.status.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{challengeDetails.description}</p>
                <span className="text-sm font-semibold text-white-700 ">📅 Deadline: 15th May 2025</span>

                </div>
              </div>
              </div>
            </div>
            </div>
        </div>

        {/* Stats Overview */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar size={24} className="text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{getDaysRemaining()}</div>
                <div className="text-sm text-gray-500">Days Remaining</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users size={24} className="text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{challengeDetails.participants}</div>
                <div className="text-sm text-gray-500">Total Participants</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Trophy size={24} className="text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{challengeDetails.qualified}</div>
                <div className="text-sm text-gray-500">Qualified Students</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Target size={24} className="text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{challengeDetails.rounds.length}</div>
                <div className="text-sm text-gray-500">Total Rounds</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Rounds Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenge Rounds</h2>
          
          {/* Round Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {challengeDetails.rounds.map((round, index) => (
              <button
                key={index}
                onClick={() => setActiveRound(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeRound === index
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {round}
              </button>
            ))}
          </div>

          {/* Round Data Table */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {challengeDetails.rounds[activeRound]} Statistics
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Grade Level</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Students Registered</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Students Attempted</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Students Qualified</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Success Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {roundData.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{row.grade}</td>
                      <td className="py-3 px-4 text-gray-700">{row.registered}</td>
                      <td className="py-3 px-4 text-gray-700">{row.attempted}</td>
                      <td className="py-3 px-4 text-gray-700">{row.qualified}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-900">
                            {Math.round((row.qualified / row.attempted) * 100)}%
                          </span>
                          <div className="flex-1 max-w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(row.qualified / row.attempted) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenge Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Download size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{resource.name}</h4>
                    <span className="text-sm text-gray-500">{resource.size}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className=" border p-4 rounded-md flex flex-col items-center text-center">
                <img src={partner.logoUrl} alt={partner.name} className="bg-gray-300 aspect-[16/9] object-contain mb-3" />
                <p className="font-bold text-gray-700">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Associated Course Section */}
        {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"> */}
          {/* Single Course - Horizontal Layout */}
          <div className=" mt-12 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group p-6">
            <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            📚 Associated Course
          </h3>
            <div className="flex items-center gap-6">
              {/* Course Thumbnail */}
              <div className="relative w-48 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                  AI
                </div>

                <div className="absolute top-2 left-2">
                  <div className="px-2 py-1 rounded-full text-xs font-black bg-green-100 text-green-800 backdrop-blur-sm">
                    Prerequisite
                  </div>
                </div>

              </div>

              {/* Course Info - Horizontal Layout */}
              <div className="flex-1 flex flex-col justify-between h-32">
                {/* Title and Description */}
                <div>
                 
                  <h3 className="text-2xl font-black text-gray-900 leading-tight tracking-tight mb-2">
                    Artificial Intelligence Fundamentals
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Master the basics of AI and machine learning. Essential preparation for the Innovation Championship
                    challenge with hands-on projects and real-world applications.
                  </p>
                </div>

                {/* Course Details and Actions */}
                <div className="flex items-center justify-between">
                  {/* Course Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    
                    
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-purple-700">by Sarah</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Users size={16} className="text-green-500" />
                      <span className="font-semibold">1st-9th Grade</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center gap-4">
                    
                    <Link
                      to="/courses/ai-fundamentals"
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-black text-sm hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <BookOpen size={16} />
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          

          {/* Course Enrollment Chart */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Course Enrollment & Completion by Grade</h3>

            {/* Legend */}
            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="relative">
              {/* Y-axis label */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600">
              Students
              </div>
              
              <div className="ml-8 flex items-end gap-3 h-64 p-4 bg-gray-50 rounded-lg overflow-x-auto">
              {courseEnrollmentData.map((data, idx) => {
                const maxValue = Math.max(...courseEnrollmentData.map(d => d.enrolled));
                const enrolledHeight = (data.enrolled / maxValue) * 200;
                const completedHeight = (data.completed / maxValue) * 200;
                
                return (
                <div key={idx} className="flex flex-col items-center gap-2 min-w-16">
                  <div className="flex items-end gap-1 h-52">
                  <div 
                    className="w-6 bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600"
                    style={{ height: `${enrolledHeight}px` }}
                    title={`Enrolled: ${data.enrolled}`}
                  ></div>
                  <div 
                    className="w-6 bg-green-500 rounded-t transition-all duration-500 hover:bg-green-600"
                    style={{ height: `${completedHeight}px` }}
                    title={`Completed: ${data.completed}`}
                  ></div>
                  </div>
                  <div className="text-xs font-medium text-gray-900">{data.grade}</div>
                  <div className="text-xs text-green-600 font-medium">{data.completionRate}%</div>
                </div>
                );
              })}
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
    </div>
  );
};

export default ChallengeDetails;