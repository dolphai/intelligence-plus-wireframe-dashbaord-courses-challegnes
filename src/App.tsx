import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import SchoolDashboard from './pages/Dashboards/SchoolDashboard';
// import SchoolTailwind from './pages/SchoolTailwind';
import StudentDashboard from './pages/Dashboards/StudentDashboard';
import ProfessionalDashboard from './pages/Dashboards/ProfessionalDashboard';
import AdminDashboard from './pages/Dashboards/AdminDashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import CourseViewer from './pages/CourseViewer';
import Challenges from './pages/Challenges';
import ChallengeDetails from './pages/ChallengeDetailsSchool';
import ChallengeDetailsNew from './pages/ChallengeDetailsNew';
import StudentProfilePage from './pages/profiles/StudentProfilePage';
import SchoolProfilePage from './pages/profiles/SchoolProfilePage';
import ProfessionalProfilePage from './pages/profiles/ProfessionalProfilePage';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-layout">
        {/* Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-30 p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Menu size={20} />
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        {/* Main Content */}
        <main className="main-content lg:ml-64 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Navigate to="/school" replace />} />
            <Route path="/school" element={<SchoolDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/professional" element={<ProfessionalDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/course-viewer/:id" element={<CourseViewer />} />
            <Route path="/challenges" element={<Challenges />} />
            {/* School view - simplified challenge overview for schools */}
            <Route path="/school/challenges/:id" element={<ChallengeDetails />} />
            {/* Main detailed view - comprehensive challenge details for students/participants */}
            <Route path="/challenges/:id" element={<ChallengeDetailsNew />} />
            {/* Legacy route - redirect to main detailed view */}
            <Route path="/challenge-details" element={<Navigate to="/challenges/innovation-championship-2025" replace />} />
            {/* Profile Routes */}
            <Route path="/student-profile" element={<StudentProfilePage />} />
            <Route path="/school-profile" element={<SchoolProfilePage />} />
            <Route path="/professional-profile" element={<ProfessionalProfilePage />} />
            <Route path="/profile" element={<SchoolDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
