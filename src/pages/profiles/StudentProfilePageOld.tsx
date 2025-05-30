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
    alternate_contact: '+91 7985434378',
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-2 tracking-tight">
            My Profile
          </h1>
          <p className="text-lg font-medium text-slate-600">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {initials}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-sm text-gray-500">Student</p>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <School className="text-blue-600" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Grade</p>
                    <p className="text-sm font-semibold text-gray-800">{profileData.grade}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Calendar className="text-green-600" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Last Updated</p>
                    <p className="text-sm font-semibold text-gray-800">{formatDate(profileData.updatedAt)}</p>
                  </div>
                </div>
              </div>

              {/* Password Section */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setIsChangingPassword(true)}
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors"
                >
                  <Lock size={16} />
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* Header with Edit Button */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Edit3 size={16} />
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <Save size={16} />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <X size={16} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    First Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.firstName}
                      onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {profileData.firstName}
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Last Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.lastName}
                      onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {profileData.lastName}
                    </div>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedData.dob}
                      onChange={(e) => setEditedData({ ...editedData, dob: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {formatDate(profileData.dob)}
                    </div>
                  )}
                </div>

                {/* Grade */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <School size={16} className="inline mr-2" />
                    Grade
                  </label>
                  {isEditing ? (
                    <select
                      value={editedData.grade}
                      onChange={(e) => setEditedData({ ...editedData, grade: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {profileData.grade}
                    </div>
                  )}
                </div>

                {/* School Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <School size={16} className="inline mr-2" />
                    School Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.schoolName}
                      onChange={(e) => setEditedData({ ...editedData, schoolName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {profileData.schoolName}
                    </div>
                  )}
                </div>

                {/* School Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    School Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.schoolEmail}
                      onChange={(e) => setEditedData({ ...editedData, schoolEmail: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {profileData.schoolEmail}
                    </div>
                  )}
                </div>

                {/* Alternate Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Alternate Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.alternate_email}
                      onChange={(e) => setEditedData({ ...editedData, alternate_email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {profileData.alternate_email}
                    </div>
                  )}
                </div>

                {/* Alternate Contact */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Alternate Contact
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedData.alternate_contact}
                      onChange={(e) => setEditedData({ ...editedData, alternate_contact: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium">
                      {profileData.alternate_contact}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Change Modal */}
        {isChangingPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Change Password</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.oldPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handlePasswordChange}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors"
                >
                  Update Password
                </button>
                <button
                  onClick={() => setIsChangingPassword(false)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2.5 px-4 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfilePage;
