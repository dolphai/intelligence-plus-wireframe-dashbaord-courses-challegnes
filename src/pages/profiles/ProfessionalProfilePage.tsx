import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Lock, Calendar, Building, Briefcase, Mail, Phone, User, Loader2, CheckCircle, MapPin, GraduationCap, Award, Globe } from 'lucide-react';

interface ProfessionalProfileData {
  firstName: string;
  lastName: string;
  dob: string;
  personalEmail: string;
  personalContact: string;
  workEmail: string;
  companyName: string;
  customCompanyName?: string;
  companyAddress?: string;
  designation: string;
  department: string;
  yearsOfExperience: string;
  highestEducation: string;
  skillSet: string;
  linkedinProfile?: string;
  updatedAt: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ProfessionalProfilePage: React.FC = () => {
  // Predefined company options
  const companyOptions = [
    'Microsoft Corporation',
    'Google LLC',
    'Apple Inc.',
    'Amazon.com Inc.',
    'Meta Platforms Inc.',
    'Tesla Inc.',
    'Netflix Inc.',
    'Adobe Inc.',
    'Salesforce Inc.',
    'IBM Corporation',
    'Oracle Corporation',
    'Others'
  ];

  const departmentOptions = [
    'Software Development',
    'Data Science & Analytics',
    'Product Management',
    'Marketing & Communications',
    'Sales & Business Development',
    'Human Resources',
    'Finance & Accounting',
    'Operations & Supply Chain',
    'Customer Success',
    'Research & Development',
    'Design & User Experience',
    'Quality Assurance',
    'Information Technology',
    'Legal & Compliance',
    'Others'
  ];

  const experienceOptions = [
    'Entry Level (0-1 years)',
    '2-3 years',
    '4-5 years',
    '6-8 years',
    '9-12 years',
    '13-15 years',
    '16-20 years',
    '20+ years'
  ];

  const educationOptions = [
    'High School Diploma',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'MBA',
    'Doctoral Degree (PhD)',
    'Professional Certification',
    'Others'
  ];

  // Mock static data
  const [profileData, setProfileData] = useState<ProfessionalProfileData>({
    firstName: 'Sarah',
    lastName: 'Johnson',
    dob: '1990-07-15',
    personalEmail: 'sarah.johnson@gmail.com',
    personalContact: '+1234567890',
    workEmail: 'sarah.johnson@microsoft.com',
    companyName: 'Microsoft Corporation',
    designation: 'Senior Software Engineer',
    department: 'Software Development',
    yearsOfExperience: '6-8 years',
    highestEducation: 'Master\'s Degree',
    skillSet: 'React, Node.js, Python, AWS, Docker, Kubernetes',
    linkedinProfile: 'https://linkedin.com/in/sarah-johnson',
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

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Professional Portal</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-3 tracking-tight">
            My Professional Profile
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl">
            Manage your professional information and career details
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left Card - Personal Information */}
          <div className="xl:col-span-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/30">
              {/* Profile Picture and Name Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-2xl">
                    {initials}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className="text-lg text-indigo-600 font-semibold mb-1">{profileData.designation}</p>
                  <p className="text-sm text-gray-500 font-medium">{profileData.companyName}</p>
                </div>
              </div>

              {/* Personal Information Fields */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <User size={20} className="text-indigo-500" />
                  Personal Information
                </h3>

                {/* First Name and Last Name */}
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
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/80 text-base font-medium"
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
                      <User size={16} className="text-indigo-500" />
                      Last Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.lastName}
                        onChange={(e) => setEditedData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/80 text-base font-medium"
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
                    <Calendar size={16} className="text-purple-500" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedData.dob}
                      onChange={(e) => setEditedData(prev => ({ ...prev, dob: e.target.value }))}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  ) : (
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 flex items-center gap-2">
                      <Calendar size={16} className="text-purple-500" />
                      {formatDate(profileData.dob)}
                    </div>
                  )}
                </div>

                {/* Personal Email and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Mail size={16} className="text-green-500" />
                      Personal Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedData.personalEmail}
                        onChange={(e) => setEditedData(prev => ({ ...prev, personalEmail: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 break-all">
                        {profileData.personalEmail}
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
                        value={editedData.personalContact}
                        onChange={(e) => setEditedData(prev => ({ ...prev, personalContact: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.personalContact}
                      </div>
                    )}
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Globe size={16} className="text-blue-600" />
                    LinkedIn Profile (Optional)
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={editedData.linkedinProfile || ''}
                      onChange={(e) => setEditedData(prev => ({ ...prev, linkedinProfile: e.target.value }))}
                      placeholder="https://linkedin.com/in/your-profile"
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base font-medium"
                    />
                  ) : (
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 break-all">
                      {profileData.linkedinProfile || 'Not provided'}
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
          <div className="xl:col-span-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 h-fit">
              {/* Header with Edit Button */}
              <div className="mb-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <Briefcase size={24} className="text-indigo-500" />
                    Professional Details
                  </h3>
                  
                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105"
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

              {/* Professional Fields */}
              <div className="space-y-6">
                {/* Company Name */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Building size={16} className="text-indigo-500" />
                    Company Name
                  </label>
                  {isEditing ? (
                    <select
                      value={editedData.companyName}
                      onChange={(e) => {
                        setEditedData(prev => ({ 
                          ...prev, 
                          companyName: e.target.value,
                          customCompanyName: e.target.value === 'Others' ? prev.customCompanyName : undefined,
                          companyAddress: e.target.value === 'Others' ? prev.companyAddress : undefined
                        }));
                      }}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    >
                      {companyOptions.map((company) => (
                        <option key={company} value={company}>{company}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                      {profileData.customCompanyName || profileData.companyName}
                    </div>
                  )}
                </div>

                {/* Custom Company Name - Only show if "Others" is selected */}
                {isEditing && editedData.companyName === 'Others' && (
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Building size={16} className="text-cyan-500" />
                      Custom Company Name
                    </label>
                    <input
                      type="text"
                      value={editedData.customCompanyName || ''}
                      onChange={(e) => setEditedData(prev => ({ ...prev, customCompanyName: e.target.value }))}
                      placeholder="Enter your company name"
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  </div>
                )}

                {/* Company Address - Only show if "Others" is selected */}
                {isEditing && editedData.companyName === 'Others' && (
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <MapPin size={16} className="text-red-500" />
                      Company Address
                    </label>
                    <textarea
                      value={editedData.companyAddress || ''}
                      onChange={(e) => setEditedData(prev => ({ ...prev, companyAddress: e.target.value }))}
                      placeholder="Enter your company address"
                      rows={3}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 bg-white/80 text-base font-medium resize-none"
                      required
                    />
                  </div>
                )}

                {/* Display Company Address when not editing and Others is selected */}
                {!isEditing && profileData.companyName === 'Others' && profileData.companyAddress && (
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <MapPin size={16} className="text-red-500" />
                      Company Address
                    </label>
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                      {profileData.companyAddress}
                    </div>
                  </div>
                )}

                {/* Work Email */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Mail size={16} className="text-blue-500" />
                    Work Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.workEmail}
                      onChange={(e) => setEditedData(prev => ({ ...prev, workEmail: e.target.value }))}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 text-base font-medium"
                      required
                    />
                  ) : (
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100 break-all">
                      {profileData.workEmail}
                    </div>
                  )}
                </div>

                {/* Designation and Department */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Briefcase size={16} className="text-purple-500" />
                      Designation
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.designation}
                        onChange={(e) => setEditedData(prev => ({ ...prev, designation: e.target.value }))}
                        placeholder="e.g., Senior Software Engineer"
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      />
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.designation}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Building size={16} className="text-pink-500" />
                      Department
                    </label>
                    {isEditing ? (
                      <select
                        value={editedData.department}
                        onChange={(e) => setEditedData(prev => ({ ...prev, department: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      >
                        {departmentOptions.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.department}
                      </div>
                    )}
                  </div>
                </div>

                {/* Experience and Education */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <Award size={16} className="text-emerald-500" />
                      Experience
                    </label>
                    {isEditing ? (
                      <select
                        value={editedData.yearsOfExperience}
                        onChange={(e) => setEditedData(prev => ({ ...prev, yearsOfExperience: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      >
                        {experienceOptions.map((exp) => (
                          <option key={exp} value={exp}>{exp}</option>
                        ))}
                      </select>
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.yearsOfExperience}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      <GraduationCap size={16} className="text-teal-500" />
                      Education
                    </label>
                    {isEditing ? (
                      <select
                        value={editedData.highestEducation}
                        onChange={(e) => setEditedData(prev => ({ ...prev, highestEducation: e.target.value }))}
                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 bg-white/80 text-base font-medium"
                        required
                      >
                        {educationOptions.map((edu) => (
                          <option key={edu} value={edu}>{edu}</option>
                        ))}
                      </select>
                    ) : (
                      <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                        {profileData.highestEducation}
                      </div>
                    )}
                  </div>
                </div>

                {/* Skill Set */}
                <div className="group">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    <Award size={16} className="text-yellow-500" />
                    Skill Set
                  </label>
                  {isEditing ? (
                    <textarea
                      value={editedData.skillSet}
                      onChange={(e) => setEditedData(prev => ({ ...prev, skillSet: e.target.value }))}
                      placeholder="e.g., React, Node.js, Python, AWS, Docker"
                      rows={3}
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all duration-300 bg-white/80 text-base font-medium resize-none"
                      required
                    />
                  ) : (
                    <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-gray-800 text-base font-medium border border-gray-100">
                      {profileData.skillSet}
                    </div>
                  )}
                </div>

                {/* Last Updated */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      Last Updated
                    </span>
                    <span className="font-medium">{formatDate(profileData.updatedAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/30 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Lock size={20} className="text-indigo-500" />
                Change Password
              </h3>
              <button
                onClick={() => setIsChangingPassword(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, oldPassword: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-3 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePasswordChange}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                Update Password
              </button>
              <button
                onClick={() => setIsChangingPassword(false)}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105"
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