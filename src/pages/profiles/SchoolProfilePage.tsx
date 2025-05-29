import React, { useState } from 'react';
import { Edit3, Save, X, Lock, Calendar, School, Mail, Phone, User, MapPin, Users, BookOpen } from 'lucide-react';

interface SchoolProfileData {
  schoolName: string;
  establishedYear: string;
  schoolType: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  website: string;
  schoolEmail: string;
  schoolPhone: string;
  totalStudents: string;
  totalTeachers: string;
  principalName: string;
  principalEmail: string;
  principalPhone: string;
  coordinatorName: string;
  coordinatorEmail: string;
  coordinatorPhone: string;
  coordinatorDepartment: string;
  schoolDescription: string;
  updatedAt: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const SchoolProfilePage: React.FC = () => {
  // Mock static data - replace with actual API data
  const [profileData, setProfileData] = useState<SchoolProfileData>({
    schoolName: 'St. Mary\'s International School',
    establishedYear: '1985',
    schoolType: 'SSC',
    address: '123 Education Avenue',
    city: 'Springfield',
    state: 'Illinois',
    zipCode: '62701',
    website: 'www.stmarys-intl.edu',
    schoolEmail: 'admin@stmarys-intl.edu',
    schoolPhone: '+1 (555) 123-4567',
    totalStudents: '1,250',
    totalTeachers: '85',
    principalName: 'Dr. Margaret Williams',
    principalEmail: 'principal@stmarys-intl.edu',
    principalPhone: '+1 (555) 123-4568',
    coordinatorName: 'Sarah Johnson',
    coordinatorEmail: 'coordinator@stmarys-intl.edu',
    coordinatorPhone: '+1 (555) 123-4569',
    coordinatorDepartment: 'Academic Affairs',
    schoolDescription: 'A leading international school committed to providing excellent education and fostering global citizenship among our students.',
    updatedAt: '2025-05-20'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [editedData, setEditedData] = useState<SchoolProfileData>(profileData);
  const [passwordData, setPasswordData] = useState<PasswordData>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const schoolInitials = profileData.schoolName.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...profileData });
  };

  const handleSave = () => {
    // TODO: API call to save data
    setProfileData(editedData);
    setIsEditing(false);
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
      <div className="max-w-8xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 tracking-tight antialiased leading-normal">
            School Profile
          </h1>

          <p className="text-lg font-medium text-slate-600">
            Discover and enroll in comprehensive courses to enhance your skills
          </p>
        </div> 
        {/* <div className="mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 tracking-tight">
            School Profile
          </h1>
          <p className="text-lg font-medium text-slate-600">
            Manage your school information and institutional settings
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6 ">
              {/* School Logo */}
              <div className="flex-1 text-center sm:text-left mb-6 border-b border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {profileData.schoolName} 
                  </h2>
                </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Users className="text-blue-600" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Students</p>
                    <p className="text-sm font-semibold text-gray-800">{profileData.totalStudents}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <BookOpen className="text-green-600" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Teachers</p>
                    <p className="text-sm font-semibold text-gray-800">{profileData.totalTeachers}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Calendar className="text-purple-600" size={20} />
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
          <div className="lg:col-span-2 space-y-6">
            
            {/* School Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">School Information</h3>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Edit3 size={16} />
                    Edit Profile
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
                      className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <X size={16} />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* School Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <School size={16} />
                    School Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.schoolName}
                      onChange={(e) => setEditedData(prev => ({ ...prev, schoolName: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.schoolName}</p>
                  )}
                </div>

                {/* School Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <BookOpen size={16} />
                    School Type
                  </label>
                  {isEditing ? (
                    <select
                      value={editedData.schoolType}
                      onChange={(e) => setEditedData(prev => ({ ...prev, schoolType: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Public School">Public School</option>
                      <option value="Private School">Private School</option>
                      <option value="Private International School">Private International School</option>
                      <option value="Charter School">Charter School</option>
                      <option value="Religious School">Religious School</option>
                    </select>
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.schoolType}</p>
                  )}
                </div>

                {/* Established Year */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} />
                    Established Year
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editedData.establishedYear}
                      onChange={(e) => setEditedData(prev => ({ ...prev, establishedYear: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.establishedYear}</p>
                  )}
                </div>

                {/* Website */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <School size={16} />
                    Website
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={editedData.website}
                      onChange={(e) => setEditedData(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.website}</p>
                  )}
                </div>

                {/* Total Students */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Users size={16} />
                    Total Students
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.totalStudents}
                      onChange={(e) => setEditedData(prev => ({ ...prev, totalStudents: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.totalStudents}</p>
                  )}
                </div>

                {/* Total Teachers */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <BookOpen size={16} />
                    Total Teachers
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.totalTeachers}
                      onChange={(e) => setEditedData(prev => ({ ...prev, totalTeachers: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.totalTeachers}</p>
                  )}
                </div>
              </div>

              {/* School Description */}
              <div className="mt-6">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <School size={16} />
                  School Description
                </label>
                {isEditing ? (
                  <textarea
                    value={editedData.schoolDescription}
                    onChange={(e) => setEditedData(prev => ({ ...prev, schoolDescription: e.target.value }))}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.schoolDescription}</p>
                )}
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Address Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} />
                    Street Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.address}
                      onChange={(e) => setEditedData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.address}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">City</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.city}
                      onChange={(e) => setEditedData(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.city}</p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">State</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.state}
                      onChange={(e) => setEditedData(prev => ({ ...prev, state: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.state}</p>
                  )}
                </div>

                {/* Zip Code */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Zip Code</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.zipCode}
                      onChange={(e) => setEditedData(prev => ({ ...prev, zipCode: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.zipCode}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* School Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} />
                    School Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.schoolEmail}
                      onChange={(e) => setEditedData(prev => ({ ...prev, schoolEmail: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.schoolEmail}</p>
                  )}
                </div>

                {/* School Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} />
                    School Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedData.schoolPhone}
                      onChange={(e) => setEditedData(prev => ({ ...prev, schoolPhone: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.schoolPhone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Principal Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Principal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Principal Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User size={16} />
                    Principal Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.principalName}
                      onChange={(e) => setEditedData(prev => ({ ...prev, principalName: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.principalName}</p>
                  )}
                </div>

                {/* Principal Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} />
                    Principal Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.principalEmail}
                      onChange={(e) => setEditedData(prev => ({ ...prev, principalEmail: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.principalEmail}</p>
                  )}
                </div>

                {/* Principal Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} />
                    Principal Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedData.principalPhone}
                      onChange={(e) => setEditedData(prev => ({ ...prev, principalPhone: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.principalPhone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Coordinator Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Academic Coordinator Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coordinator Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User size={16} />
                    Coordinator Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.coordinatorName}
                      onChange={(e) => setEditedData(prev => ({ ...prev, coordinatorName: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.coordinatorName}</p>
                  )}
                </div>

                {/* Coordinator Department */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <BookOpen size={16} />
                    Department
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.coordinatorDepartment}
                      onChange={(e) => setEditedData(prev => ({ ...prev, coordinatorDepartment: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.coordinatorDepartment}</p>
                  )}
                </div>

                {/* Coordinator Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} />
                    Coordinator Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.coordinatorEmail}
                      onChange={(e) => setEditedData(prev => ({ ...prev, coordinatorEmail: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.coordinatorEmail}</p>
                  )}
                </div>

                {/* Coordinator Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} />
                    Coordinator Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedData.coordinatorPhone}
                      onChange={(e) => setEditedData(prev => ({ ...prev, coordinatorPhone: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-800">{profileData.coordinatorPhone}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Change Password</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Current Password</label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, oldPassword: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePasswordChange}
                disabled={!passwordData.oldPassword || !passwordData.newPassword || passwordData.newPassword !== passwordData.confirmPassword}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                Update Password
              </button>
              <button
                onClick={() => {
                  setIsChangingPassword(false);
                  setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
                }}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors"
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

export default SchoolProfilePage;
