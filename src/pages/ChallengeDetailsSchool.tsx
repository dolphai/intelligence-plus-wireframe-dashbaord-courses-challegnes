import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, Trophy, Download, Clock, Target, BookOpen, Award, FileText } from 'lucide-react';
import { Link } from "react-router-dom"

const ChallengeDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllResources, setShowAllResources] = useState(false);
  const [activeRound, setActiveRound] = useState(0);
  // Dynamic stat and student data for rounds and grades
  const [selectedGrade, setSelectedGrade] = useState('5');
  const grades = ['All Grades','1','2','3','4','5', '6', '7', '8','9','10'];
  const rounds = ['Round 1', 'Round 2', 'Finale'];
  const statData = [
    { round: 'Round 1', grade: '5', registered: 58, appeared: 50, qualified: 30 },
    { round: 'Round 2', grade: '5', registered: 60, appeared: 52, qualified: 28 },
    { round: 'Finale', grade: '5', registered: 62, appeared: 54, qualified: 25 },
    { round: 'Round 1', grade: '6', registered: 55, appeared: 48, qualified: 27 },
    { round: 'Round 2', grade: '6', registered: 57, appeared: 50, qualified: 25 },
    { round: 'Finale', grade: '6', registered: 59, appeared: 51, qualified: 22 },
    // Add more grades/rounds as needed
  ];
  const filteredStats = statData.filter(s => (selectedGrade === 'All Grades' || s.grade === selectedGrade) && s.round === rounds[activeRound]);
  const currentStat = filteredStats[0] || { registered: 0, appeared: 0, qualified: 0, grade: selectedGrade };
  const studentsData = [
    { name: 'Aarav Sharma', grade: '5', email: 'aarav.sharma@email.com', status: 'R2 Qualified' },
    { name: 'Priya Verma', grade: '5', email: 'priya.verma@email.com', status: 'R1 Qualified' },
    { name: 'Rahul Singh', grade: '5', email: 'rahul.singh@email.com', status: 'R1 Attempted' },
    { name: 'Simran Kaur', grade: '6', email: 'simran.kaur@email.com', status: 'R2 Qualified' },
    { name: 'Vikram Patel', grade: '6', email: 'vikram.patel@email.com', status: 'R1 Attempted' },
    // Add more students as needed
  ];
  const filteredStudents = studentsData.filter(s => selectedGrade === 'All Grades' || s.grade === selectedGrade);

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

  // Mocked per-round summary data for the new table
  const roundSummary = [
    { attempted: 341, qualified: 45, date: '2025-03-01' },
    { attempted: 320, qualified: 32, date: '2025-04-01' },
    { attempted: 290, qualified: 20, date: '2025-05-01' },
    { attempted: 180, qualified: 10, date: '2025-06-01' },
  ];

  const resources = [
    { name: "Challenge Guidelines", url: "/files/challenge-guidelines.pdf", size: "2.5 MB" },
    { name: "Sample Problems", url: "/files/sample-problems.pdf", size: "1.8 MB" },
    { name: "Submission Template", url: "/files/submission-template.docx", size: "0.5 MB" },
    { name: "Evaluation Criteria", url: "/files/evaluation-criteria.pdf", size: "1.2 MB" },
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
    { name: "Knowlege Partner", logoUrl: "/images/partners/iit.png" }, // Placeholder
    { name: "Outreach Partner - EW", logoUrl: "/images/partners/education_world.png" }, // Placeholder
    { name: "Outreach Partner - APER", logoUrl: "/images/partners/aper.jpeg" }, // Placeholder
    { name: "IntelligencePlus", logoUrl: "/images/partners/intelligenceplus.png" }, // Placeholder
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h1 className="text-4xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-1 tracking-tight antialiased leading-normal">
            Challenge Resources
          </h1>
          <p className="text-xl font-medium text-slate-600 tracking-wide">
            Information and resources for the Innovation Championship 2025
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
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


        {/* Rounds Summary Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Round-wise Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 font-semibold text-gray-900 text-left">&nbsp;</th>
                  {challengeDetails.rounds.map((round, idx) => (
                    <th key={round} className="py-3 px-4 font-semibold text-gray-900 text-center">{round}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700 text-left">Attempted</td>
                  {roundSummary.map((r, idx) => (
                    <td key={idx} className="py-3 px-4 text-center text-blue-700 font-bold">{r.attempted}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-700 text-left">Qualified</td>
                  {roundSummary.map((r, idx) => (
                    <td key={idx} className="py-3 px-4 text-center text-green-700 font-bold">{r.qualified}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-700 text-left">Date</td>
                  {roundSummary.map((r, idx) => (
                    <td key={idx} className="py-3 px-4 text-center text-gray-600">{r.date}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Resources Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenge Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(showAllResources ? resources : resources.slice(0, 4)).map((resource, idx) => (
              <div
          key={idx}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
              >
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <Download size={18} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">{resource.name}</h4>
            </div>
          </div>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-medium">
            Download
          </button>
              </div>
            ))}
          </div>
          {resources.length > 4 && (
            <div className="flex justify-center mt-2">
              <button
          className="text-blue-600 hover:underline text-sm font-semibold bg-transparent px-2 py-1 rounded"
          onClick={() => setShowAllResources((prev) => !prev)}
          type="button"
              >
          {showAllResources ? 'Show Less' : 'View More'}
              </button>
            </div>
          )}
        </div>
        

        
        

          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Partners Section */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2">🤝 Our Partners</h3>
              <p className="text-gray-600 text-sm font-medium mb-4">Trusted by leading institutions</p>
              <div className="space-y-4">
                {partners.map((partner) => (
                  <div key={partner.name} className="border p-3 rounded-lg flex flex-col items-center text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-2">
                      <img src={partner.logoUrl} alt={partner.name} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-bold text-gray-700">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Redesigned Challenge Rounds Section (as per sketch) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Rounds Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['Round 1', 'Round 2', 'Finale'].map((round, idx) => (
              <button
                key={round}
                onClick={() => setActiveRound(idx)}
                className={`px-5 py-2 rounded-lg font-bold transition-colors border-2 ${
                  activeRound === idx
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50'
                }`}
              >
                {round}
              </button>
            ))}
          </div>

          {/* Grade Selector */}
          {/* Grade Selector */}
          <div className="flex flex-wrap gap-2 mb-6 items-center">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-3 py-1 rounded-full font-medium border-2 text-sm transition-colors ${
                  selectedGrade === grade
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
          
          {/* Stats and Actions - Improved UI, now dynamic */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4 mb-6">
            <div className="flex flex-row gap-8 bg-gray-50 rounded-xl px-6 py-4 shadow-sm border border-gray-100 w-fit">
              <div className="flex flex-col items-center ml-12 mr-20">
                <span className="text-sm text-gray-500 font-medium mb-1">Registered</span>
                <span className="text-2xl font-black text-blue-700">{currentStat.registered}</span>
              </div>
              
            </div>
            <div className="flex flex-row gap-8 bg-gray-50 rounded-xl px-6 py-4 shadow-sm border border-gray-100 w-fit">
              <div className="flex flex-col items-center ml-12 mr-20">
                <span className="text-sm text-gray-500 font-medium mb-1">Appeared</span>
                <span className="text-2xl font-black text-purple-700">{currentStat.appeared}</span>
              </div>
              
            </div>
            <div className="flex flex-row gap-8 bg-gray-50 rounded-xl px-6 py-4 shadow-sm border border-gray-100 w-fit">
              <div className="flex flex-col items-center ml-12 mr-20">
                <span className="text-sm text-gray-500 font-medium mb-1">Qualified</span>
                <span className="text-2xl font-black text-green-700">{currentStat.qualified}</span>
              </div>
              
            </div>
            
            <div className="flex flex-col gap-2 md:ml-auto">
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-bold flex items-center gap-2 shadow hover:from-green-600 hover:to-blue-600">
                Grade {currentStat.grade} Report
                <span className="ml-1">▼</span>
              </button>
              {/* <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold flex items-center gap-2 shadow hover:from-purple-600 hover:to-pink-600">
                Sample Questions
                <span className="ml-1">↗</span>
              </button> */}
            </div>
          </div>
        
            {/* Table Controls - Improved */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-3 mb-4">
              <input type="text" placeholder="Search students..." className="px-5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto flex-1" />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold flex items-center gap-2 shadow hover:from-blue-700 hover:to-purple-700 ml-[auto]">
              Download CSV
              </button>
            </div>

          {/* Data Table - Improved, scrollable, mail contact, single status, dynamic */}
          <div className="overflow-x-auto max-h-80 rounded-lg border border-gray-100 bg-white shadow-inner">
            <table className="min-w-full border-collapse">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 text-left font-bold text-gray-900">Name</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-900">Grade</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-900">Contact</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4">{student.grade}</td>
                    <td className="py-3 px-4">
                      <a href={`mailto:${student.email}`} className="text-blue-600 underline">{student.email}</a>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold">{student.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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