import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { BookOpen, Trophy, Clock } from 'lucide-react';

const SchoolDashboard: React.FC = () => {
  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  
  // Mock booked dates (some consecutive pairs to show as unavailable)
  const bookedDates = [
    [11, 12], // October 10-11
    [15, 16], // October 15-16
    [23, 24], // October 22-23
  ];

  // Calendar constants
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Calendar navigation functions
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
    setSelectedDates([]); // Clear selection when changing months
  };

  // Calendar helper functions
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const currentMonth = currentDate.getMonth();
    
    // Only allow clicking on current month dates
    if (month !== currentMonth) return;
    
    // Check if date is booked
    const isDateBooked = bookedDates.some(pair => pair.includes(dayOfMonth));
    if (isDateBooked) return;

    // Only allow even-odd consecutive pairs (1-2, 3-4, 5-6, etc.)
    let validPair: number[];
    
    if (dayOfMonth % 2 === 1) {
      // Odd number clicked - pair with next even number
      validPair = [dayOfMonth, dayOfMonth + 1];
    } else {
      // Even number clicked - pair with previous odd number
      validPair = [dayOfMonth - 1, dayOfMonth];
    }
    
    // Check if the pair is already selected
    if (selectedDates.length === 2 && 
        selectedDates[0] === validPair[0] && 
        selectedDates[1] === validPair[1]) {
      setSelectedDates([]);
      return;
    }
    
    // Check if either date in the pair is booked
    const isPairBooked = bookedDates.some(bookedPair => 
      bookedPair.some(bookedDate => validPair.includes(bookedDate))
    );
    
    if (!isPairBooked) {
      // Ensure both dates are valid for current month
      const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      if (validPair[1] <= daysInCurrentMonth && validPair[0] >= 1) {
        setSelectedDates(validPair);
      }
    }
  };

  // Mock data for courses
  const courses = [
    {
      id: 'course-1',
      title: 'Advanced Mathematics',
      host: 'MIT OpenCourseWare',
      studentsEnrolled: 124,
      studentsCompleted: 89,
      tags: ['#Free'] // Added tag
    },
    {
      id: 'course-2',
      title: 'Computer Science Fundamentals',
      host: 'Stanford Online',
      studentsEnrolled: 98,
      studentsCompleted: 67,
      tags: ['#Free'] // Added tag
    },
    {
      id: 'course-3',
      title: 'Physics & Engineering',
      host: 'Harvard Extension',
      studentsEnrolled: 156,
      studentsCompleted: 112,
      tags: ['#Free'] // Added tag
    },
    {
      id: 'course-4',
      title: 'Data Science Basics',
      host: 'Coursera',
      studentsEnrolled: 203,
      studentsCompleted: 145,
      tags: ['#Free'] // Added tag
    },
    {
      id: 'course-5',
      title: 'Digital Marketing',
      host: 'Google Digital Garage',
      studentsEnrolled: 87,
      studentsCompleted: 64,
      tags: ['#Free'] // Added tag
    },
    {
      id: 'course-6',
      title: 'Creative Writing',
      host: 'MasterClass',
      studentsEnrolled: 76,
      studentsCompleted: 52,
      tags: ['#Free'] // Added tag
    },
  ];

  // Calculate statistics
  const stats = {
    totalCourses: courses.length,
    totalStudents: courses.reduce((total, course) => total + course.studentsEnrolled, 0),
    totalChallenges: 12, // Mock data
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">        {/* Header */}
        <div className="mb-4">
          <h1 className="text-4xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-1 tracking-tight">
            School Dashboard
          </h1>
          <p className="text-xl font-medium text-slate-600 tracking-wide">
            Manage courses, challenges, and track student progress
          </p>
        </div>{/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
              <BookOpen size={24} />
            </div>            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">{stats.totalCourses}</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wide">Total Courses</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-red-700 bg-clip-text text-transparent">{stats.totalStudents}</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wide">Total Students</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-white">
              <Trophy size={24} />
            </div>            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">{stats.totalChallenges}</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wide">Total Challenges</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
                  <BookOpen size={28} className="text-purple-600" />
                  Available Courses
                </h2>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  View All
                </button>
              </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Challenge */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">              <div className="mb-4">
                <h2 className="text-2xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent flex items-center gap-3 tracking-tight">
                  <Trophy size={28} className="text-orange-600" />
                  Current Challenge
                </h2>
              </div>                {/* Challenge Image */}
              <div className="mb-4 overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: '24/9' }}>
                <img 
                  src="/images/challenges/innoventure_challenge.png"
                  alt="Challenge" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Date Selection Alert */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg mb-4">
                <div className="text-blue-600">
                  <Clock size={16} />
                </div>                <div>
                  <h4 className="text-sm font-bold text-slate-800 tracking-wide">Select Your Challenge Dates</h4>
                  <p className="text-xs font-medium text-slate-600">Choose consecutive dates for the challenge participation</p>
                </div>
              </div>

              {/* Mini Calendar */}
              <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">                <div className="flex justify-between items-center mb-3">
                  <button 
                    type="button" 
                    className="w-6 h-6 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 font-bold text-sm"
                    onClick={() => navigateMonth('prev')}
                    aria-label="Previous month"
                  >
                    ‹
                  </button>
                  <div className="text-sm font-semibold text-gray-800 mx-2">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </div>
                  <button 
                    type="button" 
                    className="w-6 h-6 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 font-bold text-sm"
                    onClick={() => navigateMonth('next')}
                    aria-label="Next month"
                  >
                    ›
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-0.5 mb-1">
                  {daysOfWeek.map(day => (
                    <div key={day} className="text-center py-1 text-xs font-semibold text-gray-500 uppercase">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-0.5">
                  {getDaysInMonth().map((date, index) => {
                    const dayOfMonth = date.getDate();
                    const month = date.getMonth();
                    const currentMonth = currentDate.getMonth();
                    const isCurrentMonth = month === currentMonth;
                    const isSelected = selectedDates.includes(dayOfMonth) && isCurrentMonth;
                    const isBooked = bookedDates.some(pair => pair.includes(dayOfMonth)) && isCurrentMonth;
                    const isToday = date.toDateString() === new Date().toDateString();
                    
                    return (
                      <div
                        key={index}
                        className={`
                          aspect-square flex items-center justify-center rounded-md cursor-pointer transition-all duration-200 text-xs font-medium
                          ${!isCurrentMonth 
                            ? 'text-gray-300 bg-gray-50 cursor-default opacity-50' 
                            : isSelected 
                              ? 'bg-blue-600 text-white shadow-md transform scale-105'
                              : isBooked 
                                ? 'bg-red-100 text-red-600 cursor-not-allowed line-through opacity-70'
                                : isToday
                                  ? 'bg-yellow-100 border border-yellow-300 text-yellow-800 font-semibold'
                                  : 'bg-white border border-gray-100 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 hover:scale-105'
                          }
                          ${isCurrentMonth && !isBooked ? 'min-h-[28px]' : ''}
                        `}
                        onClick={() => handleDateClick(date)}
                      >
                        {dayOfMonth}
                      </div>
                    );
                  })}
                </div>
              </div>
                {/* Challenge Action Buttons */}
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => window.location.href = '/school/challenges/innovation-championship-2025'}
                  className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Go to Challenge
                </button>
                <button 
                  onClick={() => window.location.href = '/challenges/innovation-championship-2025'}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-200 transition-colors text-sm"
                >
                  Confirm Dates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
