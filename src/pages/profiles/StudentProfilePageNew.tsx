import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Lock, Calendar, School, Mail, Phone, User, Loader2, CheckCircle } from 'lucide-react';

interface StudentProfileData {
  firstName: string;
  lastName: string;
  dob: string;
  schoolName: string;
  grade: string;
  schoolEmail: string;
  alternate_email: string;
  alternate_contact: string;
  updatedAt: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const StudentProfilePage: React.FC = () => {
  // Mock static data - replace with actual API data
  const [profileData, setProfileData] = useState<StudentProfileData>({
    firstName: 'Sarah',
    lastName: 'Nelson',
    dob: '2008-03-15',
    schoolName: 'St. Mary\'s International School',
    grade: '10th Grade',
    schoolEmail: 'sarah.nelson@stmarys.edu',
    alternate_email: 'sarah.personal@gmail.com',
    alternate_contact: '+1234567890',
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
    setProfileData(editedData);
    setIsEditing(false);
    setIsSaving(false);
    // Update the updatedAt timestamp
    setProfileData(prev => ({ ...prev, updatedAt: new Date().toISOString().split('T')[0] }));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(profileData);
  };

  const handlePasswordChange = () => {
    // TODO: API call to change password
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

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Enhanced Header */}
        <div className="mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Student Portal</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3 tracking-tight">
            My Profile
          </h1>
          <p className="text-xl font-medium text-slate-600 max-w-2xl">
            Manage your personal information and account settings with ease
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Enhanced Profile Card */}
          <div className="xl:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 sticky top-6">
              {/* Profile Picture with Animation */}
              <div className="text-center mb-8">
                <div className="relative mx-auto mb-6">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
                    {initials}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-base font-medium text-gray-500 mb-1">Student</p>
                <p className="text-sm text-blue-600 font-semibold">{profileData.grade}</p>
              </div>

              {/* Enhanced Quick Stats */}
              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <School className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">School</p>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">{profileData.schoolName}</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Last Updated</p>
                    <p className="text-sm font-semibold text-gray-800">{formatDate(profileData.updatedAt)}</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Profile Status</p>
                    <p className="text-sm font-semibold text-green-600">Active</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Password Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setIsChangingPassword(true)}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 py-3.5 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                >
                  <Lock size={18} />
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="xl:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              {/* Enhanced Header with Edit Button */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-600">Keep your information up to date</p>
                </div>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                  >
                    <Edit3 size={18} />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                    >
                      {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                      {isSaving ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={isSaving}
                      className="flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 disabled:opacity-50 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                    >
                      <X size={18} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* First Name */}
                <div className="group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <User size={18} className="text-blue-500" />
                    First Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.firstName}
                      onChange={(e) => setEditedData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300">
                      {profileData.firstName}
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div className="group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <User size={18} className="text-blue-500" />
                    Last Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.lastName}
                      onChange={(e) => setEditedData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300">
                      {profileData.lastName}
                    </div>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Calendar size={18} className="text-green-500" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedData.dob}
                      onChange={(e) => setEditedData(prev => ({ ...prev, dob: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-green-50 group-hover:to-emerald-50 transition-all duration-300">
                      {formatDate(profileData.dob)}
                    </div>
                  )}
                </div>

                {/* Grade */}
                <div className="group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <School size={18} className="text-purple-500" />
                    Grade
                  </label>
                  {isEditing ? (
                    <select
                      value={editedData.grade}
                      onChange={(e) => setEditedData(prev => ({ ...prev, grade: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    >
                      <option value="6th Grade">6th Grade</option>
                      <option value="7th Grade">7th Grade</option>
                      <option value="8th Grade">8th Grade</option>
                      <option value="9th Grade">9th Grade</option>
                      <option value="10th Grade">10th Grade</option>
                      <option value="11th Grade">11th Grade</option>
                      <option value="12th Grade">12th Grade</option>
                    </select>
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-purple-50 group-hover:to-pink-50 transition-all duration-300">
                      {profileData.grade}
                    </div>
                  )}
                </div>

                {/* School Name - Full Width */}
                <div className="lg:col-span-2 group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <School size={18} className="text-indigo-500" />
                    School Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.schoolName}
                      onChange={(e) => setEditedData(prev => ({ ...prev, schoolName: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-indigo-50 group-hover:to-blue-50 transition-all duration-300">
                      {profileData.schoolName}
                    </div>
                  )}
                </div>

                {/* School Email */}
                <div className="group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Mail size={18} className="text-blue-500" />
                    School Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.schoolEmail}
                      onChange={(e) => setEditedData(prev => ({ ...prev, schoolEmail: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-blue-50 group-hover:to-cyan-50 transition-all duration-300">
                      {profileData.schoolEmail}
                    </div>
                  )}
                </div>

                {/* Alternate Email */}
                <div className="group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Mail size={18} className="text-green-500" />
                    Personal Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.alternate_email}
                      onChange={(e) => setEditedData(prev => ({ ...prev, alternate_email: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-green-50 group-hover:to-teal-50 transition-all duration-300">
                      {profileData.alternate_email}
                    </div>
                  )}
                </div>

                {/* Alternate Contact */}
                <div className="group">
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Phone size={18} className="text-orange-500" />
                    Contact Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedData.alternate_contact}
                      onChange={(e) => setEditedData(prev => ({ ...prev, alternate_contact: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-800 text-lg font-medium group-hover:from-orange-50 group-hover:to-yellow-50 transition-all duration-300">
                      {profileData.alternate_contact}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Password Change Modal */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20 transform scale-100 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Change Password</h3>
              <p className="text-gray-600">Enter your current and new password</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">Current Password</label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, oldPassword: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter current password"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter new password"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePasswordChange}
                disabled={!passwordData.oldPassword || !passwordData.newPassword || passwordData.newPassword !== passwordData.confirmPassword}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-3.5 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
              >
                Update Password
              </button>
              <button
                onClick={() => {
                  setIsChangingPassword(false);
                  setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
                }}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3.5 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105"
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
