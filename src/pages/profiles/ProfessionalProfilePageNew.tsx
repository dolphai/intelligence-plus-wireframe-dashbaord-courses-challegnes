import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Lock, Calendar, Building, Briefcase, User, Loader2, CheckCircle, Mail, Phone } from 'lucide-react';

  firstName: string;
  lastName: string;
  dob: string;
  personalEmail: string;
  personalContact: string;
  organization: string;
  designation: string;
  updatedAt: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ProfessionalProfilePage: React.FC = () => {
  // Mock static data - replace with actual API data
  const [profileData, setProfileData] = useState<ProfessionalProfileData>({
    firstName: 'Alex',
    lastName: 'Freeman',
    dob: '1985-08-22',
    personalEmail: 'alex.freeman@gmail.com',
    personalContact: '+11234567890',
    organization: 'Tech Solutions Inc.',
    designation: 'Senior Software Engineer',
    updatedAt: '2025-05-20'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editedData, setEditedData] = useState<ProfessionalProfileData>(profileData);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-600">Loading your profile...</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Professional Portal</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-3 tracking-tight">
            My Professional Profile
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Manage your professional information and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Card - Personal Information */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
              {/* Profile Picture, Name, and Contact Row */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-8">
                <div className="relative flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
                  <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                    {initials}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {profileData.firstName} {profileData.lastName}
                    </h2>
                    <span className="text-base text-indigo-600 font-semibold">{profileData.designation}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-600 text-base font-medium">
                    <span className="flex items-center gap-2"><Mail size={16} className="text-indigo-500" />{profileData.personalEmail}</span>
                    <span className="hidden sm:inline-block">|</span>
                    <span className="flex items-center gap-2"><Phone size={16} className="text-pink-500" />{profileData.personalContact}</span>
                  </div>
                </div>
              </div>

              {/* Personal Information Fields */}
              <div className="space-y-6">
                {/* First Name & Last Name (Editable) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <User size={16} className="text-indigo-500" />
                      First Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.firstName}
                        onChange={(e) => setEditedData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.firstName}
                      </div>
                    )}
                  </div>
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <User size={16} className="text-indigo-500" />
                      Last Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.lastName}
                        onChange={(e) => setEditedData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.lastName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Calendar size={16} className="text-purple-500" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedData.dob}
                      onChange={(e) => setEditedData(prev => ({ ...prev, dob: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 flex items-center gap-2">
                      <Calendar size={16} className="text-purple-500" />
                      {formatDate(profileData.dob)}
                    </div>
                  )}
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

          {/* Right Card - Professional Information */}
          <div className="lg:col-span-5">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 h-fit">
              {/* Header with Edit Button */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Professional Information</h3>
                </div>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                  >
                    <Edit3 size={16} />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                    >
                      {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                      {isSaving ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={isSaving}
                      className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                    >
                      <X size={16} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Organization */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Building size={16} className="text-emerald-500" />
                    Organization
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.organization}
                      onChange={(e) => setEditedData(prev => ({ ...prev, organization: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                      {profileData.organization}
                    </div>
                  )}
                </div>

                {/* Designation */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Briefcase size={16} className="text-pink-500" />
                    Designation
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.designation}
                      onChange={(e) => setEditedData(prev => ({ ...prev, designation: e.target.value }))}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  ) : (
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                      {profileData.designation}
                    </div>
                  )}
                </div>

                {/* Last Updated */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Calendar size={16} className="text-purple-500" />
                    Last Updated
                  </label>
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 flex items-center gap-2">
                    <Calendar size={16} className="text-purple-500" />
                    {formatDate(profileData.updatedAt)}
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
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20 transform scale-100 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter current password"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter new password"
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePasswordChange}
                disabled={!passwordData.oldPassword || !passwordData.newPassword || passwordData.newPassword !== passwordData.confirmPassword}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white py-3.5 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 disabled:scale-100"
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

export default ProfessionalProfilePage;
