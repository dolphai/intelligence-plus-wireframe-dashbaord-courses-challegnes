import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Lock, Calendar, School, Mail, Phone, User, Loader2, CheckCircle, MapPin } from 'lucide-react';

interface StudentProfileData {
  firstName: string;
  lastName: string;
  dob: string;
  alternate_email: string;
  alternate_contact: string;
  schoolName: string;
  customSchoolName?: string;
  schoolAddress?: string;
  grade: string;
  schoolEmail: string;
  updatedAt: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const StudentProfilePage: React.FC = () => {
  // Predefined school options
  const schoolOptions = [
    'St. Mary\'s International School',
    'Greenwood High School',
    'International Academy',
    'Riverside Preparatory School',
    'Westfield International School',
    'Cambridge International School',
    'Heritage Academy',
    'Sunrise International School',
    'Others'
  ];

  const gradeOptions = [
    '6th Grade',
    '7th Grade', 
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade'
  ];

  // Mock static data
  const [profileData, setProfileData] = useState<StudentProfileData>({
    firstName: 'Sarah',
    lastName: 'Nelson',
    dob: '2008-03-15',
    alternate_email: 'sarah.personal@gmail.com',
    alternate_contact: '+1234567890',
    schoolName: 'St. Mary\'s International School',
    grade: '10th Grade',
    schoolEmail: 'sarah.nelson@stmarys.edu',
    updatedAt: '2025-05-20'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editedData, setEditedData] = useState<StudentProfileData>(profileData);
  const [passwordData, setPasswordData] = useState<PasswordData>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const initials = `${profileData.firstName[0]}${profileData.lastName[0]}`;

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...profileData });
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProfileData({ ...editedData, updatedAt: new Date().toISOString().split('T')[0] });
    setIsEditing(false);
    setIsSaving(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(profileData);
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword === passwordData.confirmPassword) {
      console.log('Password change requested');
      setIsChangingPassword(false);
      setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-600">Loading your profile...</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6 text-center lg:text-left">
          <div className="mb-6">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 tracking-tight antialiased leading-normal">
            Student Profile
          </h1>

          <p className="text-lg font-medium text-slate-600">
            Manage your personal and academic information
          </p>
        </div> 
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left Card - Personal Information */}
          <div className="xl:col-span-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/30">
              {/* Profile Picture and Name Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                {/* <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-2xl">
                    {initials}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div> */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">Student Profile</p>
                </div>
              </div>

              {/* Personal Information Fields */}
              <div className="space-y-6">
                {/* First Name and Last Name - Side by side on md+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <User size={16} className="text-blue-500" />
                      First Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.firstName}
                        onChange={(e) => setEditedData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.firstName}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <User size={16} className="text-blue-500" />
                      Last Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.lastName}
                        onChange={(e) => setEditedData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.lastName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Calendar size={16} className="text-green-500" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedData.dob}
                      onChange={(e) => setEditedData(prev => ({ ...prev, dob: e.target.value }))}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  ) : (
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 flex items-center gap-2">
                      <Calendar size={16} className="text-green-500" />
                      {formatDate(profileData.dob)}
                    </div>
                  )}
                </div>

                {/* Personal Email and Contact - Side by side on md+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Mail size={16} className="text-purple-500" />
                      Personal Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedData.alternate_email}
                        onChange={(e) => setEditedData(prev => ({ ...prev, alternate_email: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 break-all">
                        {profileData.alternate_email}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Phone size={16} className="text-orange-500" />
                      Contact Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editedData.alternate_contact}
                        onChange={(e) => setEditedData(prev => ({ ...prev, alternate_contact: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.alternate_contact}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Password Change Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setIsChangingPassword(true)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-slate-700 hover:from-gray-700 hover:to-slate-800 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <Lock size={16} />
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Right Card - Academic Information */}
          <div className="xl:col-span-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 h-fit">
              {/* Header with Edit Button */}
              <div className="mb-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Academic Information</h3>
                  
                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                    >
                      <Edit3 size={16} />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                      >
                        {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        {isSaving ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={handleCancel}
                        disabled={isSaving}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                      >
                        <X size={16} />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Academic Fields */}
              <div className="space-y-6">
                {/* School Name */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <School size={16} className="text-indigo-500" />
                    School Name
                  </label>
                  {isEditing ? (
                    <select
                      value={editedData.schoolName}
                      onChange={(e) => {
                        setEditedData(prev => ({ 
                          ...prev, 
                          schoolName: e.target.value,
                          customSchoolName: e.target.value === 'Others' ? prev.customSchoolName : undefined,
                          schoolAddress: e.target.value === 'Others' ? prev.schoolAddress : undefined
                        }));
                      }}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    >
                      {schoolOptions.map((school) => (
                        <option key={school} value={school}>{school}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                      {profileData.customSchoolName || profileData.schoolName}
                    </div>
                  )}
                </div>

                {/* Custom School Name - Only show if "Others" is selected */}
                {isEditing && editedData.schoolName === 'Others' && (
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <School size={16} className="text-cyan-500" />
                      Custom School Name
                    </label>
                    <input
                      type="text"
                      value={editedData.customSchoolName || ''}
                      onChange={(e) => setEditedData(prev => ({ ...prev, customSchoolName: e.target.value }))}
                      placeholder="Enter your school name"
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  </div>
                )}

                {/* School Address - Only show if "Others" is selected */}
                {isEditing && editedData.schoolName === 'Others' && (
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <MapPin size={16} className="text-red-500" />
                      School Address
                    </label>
                    <textarea
                      value={editedData.schoolAddress || ''}
                      onChange={(e) => setEditedData(prev => ({ ...prev, schoolAddress: e.target.value }))}
                      placeholder="Enter your school address"
                      rows={3}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white/80 text-base font-medium resize-none"
                      required
                    />
                  </div>
                )}

                {/* Display School Address when not editing and Others is selected */}
                {!isEditing && profileData.schoolName === 'Others' && profileData.schoolAddress && (
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <MapPin size={16} className="text-red-500" />
                      School Address
                    </label>
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                      {profileData.schoolAddress}
                    </div>
                  </div>
                )}

                {/* Grade and School Email - Side by side on md+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <School size={16} className="text-purple-500" />
                      Grade
                    </label>
                    {isEditing ? (
                      <select
                        value={editedData.grade}
                        onChange={(e) => setEditedData(prev => ({ ...prev, grade: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      >
                        {gradeOptions.map((grade) => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.grade}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Mail size={16} className="text-blue-500" />
                      School Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedData.schoolEmail}
                        onChange={(e) => setEditedData(prev => ({ ...prev, schoolEmail: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 break-all">
                        {profileData.schoolEmail}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl border border-white/30">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Change Password</h3>
              <p className="text-gray-600 text-sm md:text-base">Enter your current and new password</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">Current Password</label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, oldPassword: e.target.value }))}
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base"
                  placeholder="Enter current password"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base"
                  placeholder="Enter new password"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handlePasswordChange}
                disabled={!passwordData.oldPassword || !passwordData.newPassword || passwordData.newPassword !== passwordData.confirmPassword}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 disabled:scale-100"
              >
                Update Password
              </button>
              <button
                onClick={() => {
                  setIsChangingPassword(false);
                  setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
                }}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfilePage;