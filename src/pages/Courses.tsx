import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, ShoppingCart, Eye, Clock, Users, Award } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  instructor: string;
  duration: string;
  validTill: string;
  rating: number;
  level: string;
  category: string;
  grade: string;
  image: string;
  label?: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');
  // Mock courses data with pricing and better details
  const courses: Course[] = [
    {
      id: 'course-1',
      title: 'Introduction to Web Development',
      description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript. Build responsive websites from scratch and understand modern web development practices.',
      originalPrice: 999,
      discountedPrice: 799,
      instructor: 'Sarah Johnson',
      duration: '12 weeks',
      validTill: '2025-12-31',
      rating: 4.8,
      level: 'Beginner',
      category: 'Web Development',
      grade: 'Grades 9-12',
      image: '/images/courses/web-dev.jpg',
      label: 'Best Seller',
      isBestseller: true,
      isNew: false
    },
    {
      id: 'course-2',
      title: 'React Development Masterclass',
      description: 'Master React.js with hooks, context, Redux, and modern development patterns. Build real-world applications and learn industry best practices.',
      originalPrice: 1299,
      discountedPrice: 999,
      instructor: 'Mike Chen',
      duration: '16 weeks',
      validTill: '2026-01-15',
      rating: 4.9,
      level: 'Intermediate',
      category: 'React Development',
      grade: 'Grades 10-12',
      image: '/images/courses/react.jpg',
      label: 'React Development',
      isBestseller: false,
      isNew: true
    },
    {
      id: 'course-3',
      title: 'Python for Data Science',
      description: 'Complete Python course covering data analysis, visualization, and machine learning. Work with pandas, numpy, matplotlib and scikit-learn.',
      originalPrice: 1199,
      discountedPrice: 899,
      instructor: 'Dr. Emily Watson',
      duration: '14 weeks',
      validTill: '2025-11-30',
      rating: 4.7,
      level: 'Intermediate',
      category: 'Data Science',
      grade: 'Grades 8-12',
      image: '/images/courses/python.jpg',
      label: 'Most Popular',
      isBestseller: true,
      isNew: false
    },
    {
      id: 'course-4',
      title: 'Mobile App Development with Flutter',
      description: 'Build cross-platform mobile applications using Flutter and Dart. Create beautiful, fast apps for both iOS and Android platforms.',
      originalPrice: 1099,
      discountedPrice: 799,
      instructor: 'Alex Rodriguez',
      duration: '10 weeks',
      validTill: '2026-02-28',
      rating: 4.6,
      level: 'Intermediate',
      category: 'Mobile Development',
      grade: 'Grades 9-12',
      image: '/images/courses/flutter.jpg',
      label: 'Trending',
      isBestseller: false,
      isNew: true
    },
    {
      id: 'course-5',
      title: 'Advanced JavaScript & ES6+',
      description: 'Deep dive into modern JavaScript features, asynchronous programming, modules, and advanced concepts. Perfect for intermediate developers.',
      originalPrice: 899,
      discountedPrice: 699,
      instructor: 'James Wilson',
      duration: '8 weeks',
      validTill: '2025-10-15',
      rating: 4.8,
      level: 'Advanced',
      category: 'JavaScript',
      grade: 'Grades 11-12',
      image: '/images/courses/javascript.jpg',
      label: 'Advanced',
      isBestseller: false,
      isNew: false
    },
    {
      id: 'course-6',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn user interface and user experience design principles. Master Figma, create wireframes, prototypes, and design systems.',
      originalPrice: 799,
      discountedPrice: 599,
      instructor: 'Lisa Park',
      duration: '6 weeks',
      validTill: '2025-09-30',
      rating: 4.7,
      level: 'Beginner',
      category: 'Design',
      grade: 'Grades 8-12',
      image: '/images/courses/uiux.jpg',
      label: 'Creative',
      isBestseller: false,
      isNew: false
    }
  ];
  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesGrade = selectedGrade === 'all' || course.grade === selectedGrade;
    return matchesSearch && matchesCategory && matchesLevel && matchesGrade;
  });

  const categories = ['all', ...Array.from(new Set(courses.map(course => course.category)))];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const grades = ['all', ...Array.from(new Set(courses.map(course => course.grade)))];

  const getLabelColor = (label: string) => {
    switch (label) {
      case 'Best Seller': return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'React Development': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Most Popular': return 'bg-green-100 text-green-800 border border-green-200';
      case 'Trending': return 'bg-purple-100 text-purple-800 border border-purple-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border border-red-200';
      case 'Creative': return 'bg-pink-100 text-pink-800 border border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-3 tracking-tight">
            Courses
          </h1>
          <p className="text-xl font-medium text-slate-600 tracking-wide">
            Discover and enroll in comprehensive courses to enhance your skills
          </p>
        </div>        {/* Search and Filter Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses, instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium"
            />
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter size={20} className="text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-10 pr-8 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-gray-700 appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Award size={20} className="text-gray-400" />
            </div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="block w-full pl-10 pr-8 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-gray-700 appearance-none"
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </option>
              ))}
            </select>
          </div>

          {/* Grade Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users size={20} className="text-gray-400" />
            </div>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="block w-full pl-10 pr-8 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-gray-700 appearance-none"
            >
              {grades.map(grade => (
                <option key={grade} value={grade}>
                  {grade === 'all' ? 'All Grades' : grade}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >              {/* Course Image */}
              <div className="relative w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold group-hover:scale-105 transition-transform duration-300">
                  {course.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
                
                {/* Labels - Single label only */}
                <div className="absolute top-4 left-4">
                  {course.label && (
                    <div className={`px-3 py-1.5 rounded-full text-xs font-black ${getLabelColor(course.label)} backdrop-blur-sm`}>
                      {course.label}
                    </div>
                  )}
                </div>

                {/* Rating */}
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-gray-800">{course.rating}</span>
                </div> */}

                {/* Host/Instructor Overlay - Bottom Left */}
                {/* <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-white text-xs font-bold">{course.instructor}</span>
                  </div>
                </div> */}

                {/* Validity Overlay - Bottom Right */}
                {/* <div className="absolute bottom-3 right-3 bg-green-600/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-white" />
                    <span className="text-white text-xs font-bold">
                      Validity: 6 months
                    </span>
                  </div>
                </div> */}
              </div>{/* Course Content */}
              <div className="p-6">
                {/* Course Title - Fixed 2-line height */}
                <div className="h-14 mb-3">
                  <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2">
                  <span className="font-bold text-purple-700">by {course.instructor}</span>
                  </div>
                  
                </div>    
                            
                {/* Course Description - Fixed height */}
                <div className="h-16 mb-4">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Course Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <span className="bg-white-100 text-green-800 px-2 py-1 rounded-full text-xs font-black">
                    ⭐ 4.6
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-600">
                  <Users size={14} className="text-green-500" />
                  <span className="font-semibold">{course.grade}</span>
                  </div>
                  
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-black text-green-600">
                    ₹{course.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-lg font-bold text-gray-400 line-through">
                    ₹{course.originalPrice.toLocaleString()}
                  </span>
                  {/* <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-black">
                    {Math.round((1 - course.discountedPrice / course.originalPrice) * 100)}% OFF
                  </span> */}
                  
                  
                </div>                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-black text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <ShoppingCart size={16} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
