import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Trophy, User, GraduationCap, Home, UserCheck, X } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, setIsOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen?.(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-600 to-purple-700 text-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen?.(false)}
          className="lg:hidden absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg"
        >
          <X size={20} />
        </button>
        
        <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg backdrop-blur">
            IP
          </div>
          <h2 className="text-xl font-semibold">Intelligence Plus</h2>
        </div>
      </div>

      <nav className="p-3 flex flex-col gap-1">
        <NavLink
          to="/school"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
              isActive
                ? 'bg-white/20 text-white backdrop-blur transform translate-x-1'
                : 'text-white/80 hover:bg-white/10 hover:text-white hover:transform hover:translate-x-1'
            }`
          }
        >
          <Home size={20} />
          <span className="text-sm">School Dashboard</span>
        </NavLink>

        

        <NavLink
          to="/student"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
              isActive
                ? 'bg-white/20 text-white backdrop-blur transform translate-x-1'
                : 'text-white/80 hover:bg-white/10 hover:text-white hover:transform hover:translate-x-1'
            }`
          }
        >
          <User size={20} />
          <span className="text-sm">Student Dashboard</span>
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
              isActive
                ? 'bg-white/20 text-white backdrop-blur transform translate-x-1'
                : 'text-white/80 hover:bg-white/10 hover:text-white hover:transform hover:translate-x-1'
            }`
          }
        >
          <GraduationCap size={20} />
          <span className="text-sm">Courses</span>
        </NavLink>

        <NavLink
          to="/challenges"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
              isActive
                ? 'bg-white/20 text-white backdrop-blur transform translate-x-1'
                : 'text-white/80 hover:bg-white/10 hover:text-white hover:transform hover:translate-x-1'
            }`
          }
        >
          <Trophy size={20} />
          <span className="text-sm">Challenges</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
              isActive
                ? 'bg-white/20 text-white backdrop-blur transform translate-x-1'
                : 'text-white/80 hover:bg-white/10 hover:text-white hover:transform hover:translate-x-1'
            }`
          }
        >
          <UserCheck size={20} />
          <span className="text-sm">Profile</span>
        </NavLink>        </nav>
      </div>
    </>
  );
};

export default Sidebar;
