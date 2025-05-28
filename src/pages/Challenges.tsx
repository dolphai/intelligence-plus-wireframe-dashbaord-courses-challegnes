import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Calendar, Users, Clock, Filter, Search } from 'lucide-react';

const Challenges: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedGradeFilter, setSelectedGradeFilter] = useState('all');
  // Mock challenges data
  const challenges = [
    {
      _id: '1',
      name: 'Innovation Championship 2025',
      description: 'A comprehensive challenge focusing on innovative problem-solving and creative thinking. Students will work in teams to develop solutions for real-world problems.',
      deadline: '2025-07-15',
      instructor: 'Dr. Jane Smith',
      startDate: '2025-06-01',
      endDate: '2025-06-15',
      registrationStatus: 'open',
      difficulty: 'Advanced',
      category: 'Innovation',
      thumbnail: '/images/challenges/innovation.jpg',
      grades: '9-12'
    },
    {
      _id: '2',
      name: 'Math Olympiad Spring Competition',
      description: 'Test your mathematical skills in this challenging competition covering algebra, geometry, and calculus with expert problem sets.',
      deadline: '2025-06-20',
      instructor: 'Dr. Jane Smith',
      startDate: '2025-06-15',
      endDate: '2025-06-15',
      registrationStatus: 'registered',
      difficulty: 'Expert',
      category: 'Mathematics',
      thumbnail: '/images/challenges/math.jpg',
      grades: '10-12'
    },
    {
      _id: '3',
      name: 'Coding Challenge Pro Developer ',
      description: 'Programming competition featuring algorithms, data structures, and software development challenges for aspiring developers.',
      deadline: '2025-08-10',
      instructor: 'Dr. Jane Smith',
      startDate: '2025-07-20',
      endDate: '2025-08-10',
      registrationStatus: 'open',
      difficulty: 'Intermediate',
      category: 'Programming',
      thumbnail: '/images/challenges/coding.jpg',
      grades: '8-12'
    },
    {
      _id: '4',
      name: 'Science Fair Regional Championships',
      description: 'Present your scientific research and innovations in this regional science fair competition with expert judging panel.',
      deadline: '2025-05-30',
      instructor: 'Dr. Jane Smith',
      startDate: '2025-05-25',
      endDate: '2025-06-15',
      registrationStatus: 'expired',
      difficulty: 'Beginner',
      category: 'Science',
      thumbnail: '/images/challenges/science.jpg',
      grades: '6-8'
    },
    {
      _id: '5',
      name: 'Creative Writing Competition',
      description: 'Express your creativity through compelling stories, poems, and essays in this literary challenge.',
      instructor: 'Dr. Jane Smith',
      deadline: '2025-06-30',
      startDate: '2025-06-10',
      endDate: '2025-06-15',
      registrationStatus: 'open',
      difficulty: 'Intermediate',
      category: 'Literature',
      thumbnail: '/images/challenges/writing.jpg',
      grades: '9'
    },
    {
      _id: '6',
      name: 'Elementary Art Showcase',
      description: 'Young artists showcase their creativity in this fun and engaging art competition designed for elementary students.',
      instructor: 'Dr. Jane Smith',
      deadline: '2025-07-05',
      startDate: '2025-06-20',
      endDate: '2025-07-05',
      registrationStatus: 'open',
      difficulty: 'Beginner',
      category: 'Arts',
      thumbnail: '/images/challenges/art.jpg',
      grades: '3-5'
    }
  ];  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || challenge.registrationStatus === selectedFilter;
    const matchesGrade = selectedGradeFilter === 'all' || challenge.grades === selectedGradeFilter;
    return matchesSearch && matchesFilter && matchesGrade;
  });

  const getRegistrationStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800 border border-green-200';
      case 'registered': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'expired': return 'bg-red-100 text-red-800 border border-red-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getRegistrationButtonText = (status: string) => {
    switch (status) {
      case 'open': return 'Register';
      case 'registered': return 'Registered';
      case 'expired': return 'Expired';
      default: return 'Register';
    }  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-3 tracking-tight">
            Challenges
          </h1>
          <p className="text-xl font-medium text-slate-600 tracking-wide">
            Discover and participate in exciting challenges to test your skills
          </p>
        </div>        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search challenges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium"
            />
          </div>
          
          {/* Status Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter size={20} className="text-gray-400" />
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="block w-full pl-10 pr-8 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-gray-700 appearance-none"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="registered">Registered</option>
              <option value="expired">Expired</option>
            </select>
          </div>

          {/* Grade Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <select
              value={selectedGradeFilter}
              onChange={(e) => setSelectedGradeFilter(e.target.value)}
              className="block w-full pl-10 pr-8 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-gray-700 appearance-none"
            >
              <option value="all">All Grades</option>
              <option value="3-5">Grades 3-5</option>
              <option value="6-8">Grades 6-8</option>
              <option value="8-12">Grades 8-12</option>
              <option value="9">Grade 9</option>
              <option value="9-12">Grades 9-12</option>
              <option value="10-12">Grades 10-12</option>
            </select>
          </div>
        </div>{/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <div 
              key={challenge._id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              onClick={() => navigate(`/challenges/${challenge._id}`)}
            >
              {/* Challenge Thumbnail */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img 
                  src={challenge.thumbnail}
                  alt={challenge.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {challenge.category.substring(0, 2).toUpperCase()}
                </div>
                
                {/* Registration Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getRegistrationStatusColor(challenge.registrationStatus)}`}>
                    {challenge.registrationStatus.charAt(0).toUpperCase() + challenge.registrationStatus.slice(1)}
                  </span>
                </div>
              </div>              {/* Card Content */}
              <div className="p-6">
                {/* Challenge Title - Fixed height with line clamp */}
                <div className="h-12 mb-3">
                  <h3 className="text-lg font-black text-gray-800 tracking-tight leading-tight line-clamp-2">
                    {challenge.name}
                  </h3>
                  <div className="flex items-center gap-2">
                  <span className="font-bold text-purple-700">by {challenge.instructor}</span>
                  </div>
                </div>
                
                {/* Challenge Description - Fixed height with line clamp */}
                <div className="h-16 mb-4">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {challenge.description}
                  </p>
                </div>                {/* Challenge Stats */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-red-500" />
                    <span className="font-medium">Deadline: {new Date(challenge.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">
                      {challenge.grades.includes('-') ? `Grades ${challenge.grades}` : `Grade ${challenge.grades}`}
                    </span>
                  </div>
                </div>

                {/* Challenge Actions */}
                <div className="flex gap-2">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all duration-200 ${
                      challenge.registrationStatus === 'registered' 
                        ? 'bg-blue-100 text-blue-800 cursor-default' 
                        : challenge.registrationStatus === 'expired'
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                    disabled={challenge.registrationStatus === 'expired'}
                  >
                    {getRegistrationButtonText(challenge.registrationStatus)}
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredChallenges.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Trophy size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No challenges found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenges;
