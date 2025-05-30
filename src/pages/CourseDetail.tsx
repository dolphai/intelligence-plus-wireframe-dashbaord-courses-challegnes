import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  Lock,
  CheckCircle,
  Target,
  Clock,
  Users,
  Award,
  Star,
  ChevronDown,
  ChevronRight,
  FileText,
  HelpCircle,
  Download,
  Video,
  BookOpen,
  Folder,
  Calendar,
  Trophy,
  Book,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

type ContentType = "video" | "text" | "quiz" | "resources";

interface Lesson {
  id: number;
  title: string;
  type: ContentType;
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface Section {
  id: number;
  title: string;
  lessons: Lesson[];
  isOpen: boolean;
}

interface FAQ {
  id: number
  question: string
  answer: string
  isOpen: boolean
  category: "general" | "technical" | "registration"
}


const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [progress, setProgress] = useState(25);
  const [activeTab, setActiveTab] = useState<"overview" | "rounds" | "faqs">("overview")
  
  const [selectedContent, setSelectedContent] = useState<{ type: ContentType; title: string } | null>(null);
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      title: "Newton's Laws of Motion",
      isOpen: false,
      lessons: [
        {
          id: 1,
          title: "Introduction to Newton's Laws",
          type: "video",
          duration: "15 min",
          completed: isEnrolled,
          locked: !isEnrolled,
        },
        {
          id: 2,
          title: "First Law of Motion",
          type: "text",
          duration: "10 min",
          completed: false,
          locked: !isEnrolled,
        },
        { id: 3, title: "Newton's Laws Quiz", type: "quiz", duration: "5 min", completed: false, locked: !isEnrolled },
        {
          id: 4,
          title: "Study Materials & References",
          type: "resources",
          duration: "—",
          completed: false,
          locked: !isEnrolled,
        },
      ],
    },
    {
      id: 2,
      title: "Work, Energy, and Power",
      isOpen: false,
      lessons: [
        {
          id: 5,
          title: "Work and Energy Basics",
          type: "video",
          duration: "20 min",
          completed: false,
          locked: !isEnrolled,
        },
        {
          id: 6,
          title: "Understanding Energy Types",
          type: "text",
          duration: "15 min",
          completed: false,
          locked: !isEnrolled,
        },
        {
          id: 7,
          title: "Power and Efficiency",
          type: "video",
          duration: "18 min",
          completed: false,
          locked: !isEnrolled,
        },
        {
          id: 8,
          title: "Energy Conservation Q&A",
          type: "quiz",
          duration: "8 min",
          completed: false,
          locked: !isEnrolled,
        },
        {
          id: 9,
          title: "Formulas and Examples",
          type: "resources",
          duration: "—",
          completed: false,
          locked: !isEnrolled,
        },
      ],
    },
    {
      id: 3,
      title: "Gravity and Projectile Motion",
      isOpen: false,
      lessons: [
        {
          id: 10,
          title: "Understanding Gravity",
          type: "video",
          duration: "22 min",
          completed: false,
          locked: !isEnrolled,
        },
        {
          id: 11,
          title: "Projectile Motion Theory",
          type: "text",
          duration: "25 min",
          completed: false,
          locked: !isEnrolled,
        },
        {
          id: 12,
          title: "Projectile Motion Problems",
          type: "quiz",
          duration: "15 min",
          completed: false,
          locked: !isEnrolled,
        },
        { id: 13, title: "Simulation Tools", type: "resources", duration: "—", completed: false, locked: !isEnrolled },
      ],
    },
  ]);

  const courseData = {
    title: "Physics for Beginners",
    description:
      "Are you ready to unlock the power of physics and build a solid foundation in mathematical thinking using a comprehensive approach? Whether you're a student seeking to enhance your skills or someone looking to refresh your skills.",
    instructor: "Dr. Neil Science",
    longDescription: "Innoventure Innovation course is a pioneering 1st of its kind program with age appropriate courses for grades 1 to 9 teaching world class innovation techniques and frameworks using two of the most powerful pedagogy methods : 1. The case study method pioneering at Harvard University and 2. Engaging Storytelling in video format Each grade is empowered with 3 frameworks of ideation and innovation with numerous examples and applications giving conceptual clarity and relevance. The thought provoking application based and open ended subjective questions shifts the students  into a solution creator mindset. On completion, children get an important certificate of skill mastery and most importantly it's FREE for all the students.",
    rating: 4.8,
    students: 1234,
    duration: "8 weeks",
    level: "Beginner",
    tags: ["Best Seller", "Most Popular", "Beginner"],
  };  const partners = [
    { name: "Knowledge Partner", logo: "/images/partners/iit.png" },
    { name: "Outreach Partner - EW", logo: "/images/partners/education_world.png" },
    { name: "Outreach Partner - APER", logo: "/images/partners/aper.jpeg" },
    { name: "IntelligencePlus", logo: "/images/partners/intelligenceplus.png" }
  ];
    const [faqs, setFaqs] = useState<FAQ[]>([
      {
        id: 1,
        question: "Who can participate in InnoVenture 2025?",
        answer:
          "Students from grades 1st to 9th studying in any recognized school in India can participate. The challenge is designed with age-appropriate problem statements for each grade level.",
        category: "general",
        isOpen: false,
      },
      {
        id: 2,
        question: "What is the registration process and deadline?",
        answer:
          "Registration is done through schools only. Schools must register their students on the official Innoventure platform. Individual registrations are not accepted. Registration deadline is mid-September 2025.",
        category: "registration",
        isOpen: false,
      },
      {
        id: 3,
        question: "Is there any participation fee?",
        answer:
          "The challenge is completely FREE for all participants. There are no hidden charges or registration fees. This is part of our commitment to making innovation accessible to all students.",
        category: "registration",
        isOpen: false,
      },
      {
        id: 4,
        question: "What technical setup do I need?",
        answer:
          "You need a stable internet connection (minimum 2 Mbps), a device with web-camera (laptop/smartphone), and a quiet environment. We recommend testing your setup using our practice portal before the actual challenge.",
        category: "technical",
        isOpen: false,
      },
      {
        id: 5,
        question: "How are the challenges evaluated?",
        answer:
          "Evaluation is based on innovation quotient, creativity, problem-solving approach, feasibility of solutions, and presentation skills. Each round has specific evaluation criteria appropriate to the grade level.",
        category: "general",
        isOpen: false,
      },
    ])
  
  const toggleSection = (sectionId: number) => {
    setSections(
      sections.map((section) => (section.id === sectionId ? { ...section, isOpen: !section.isOpen } : section)),
    );
  };

  const handleEnrollment = () => {
    const newEnrollmentStatus = !isEnrolled;
    setIsEnrolled(newEnrollmentStatus);

    // Update lesson lock status
    setSections(
      sections.map((section) => ({
        ...section,
        lessons: section.lessons.map((lesson) => ({
          ...lesson,
          locked: !newEnrollmentStatus,
        })),
      })),
    );
  };
  const openContent = (lesson: Lesson) => {
    if (lesson.locked) return;
    // Open course viewer in new tab with specific lesson
    window.open(`/course-viewer/${id}?lesson=${lesson.id}`, '_blank');
  };
  const getContentIcon = (type: ContentType, className = "w-4 h-4") => {
    switch (type) {
      case "video":
        return <Video className={`${className} text-red-500`} />;
      case "text":
        return <BookOpen className={`${className} text-blue-500`} />;
      case "quiz":
        return <HelpCircle className={`${className} text-purple-500`} />;
      case "resources":
        return <Folder className={`${className} text-green-500`} />;
    }
  };

  const renderContentViewer = () => {
    if (!selectedContent) return null;

    switch (selectedContent.type) {
      case "video":
        return (
          <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{selectedContent.title}</h3>
              <p className="text-gray-300">Video content would load here</p>
            </div>
          </div>
        );

      case "text":
        return (
          <div className="bg-white rounded-lg p-8 prose prose-lg max-w-none">
            <h1>{selectedContent.title}</h1>
            <p>
              This is where the comprehensive text content would appear. The content would be formatted like a proper
              document with:
            </p>
            <ul>
              <li>Detailed explanations</li>
              <li>Mathematical formulas</li>
              <li>Diagrams and illustrations</li>
              <li>Step-by-step examples</li>
            </ul>
            <h2>Key Concepts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <h3>Example Problem</h3>
            <p>Here would be a detailed worked example with solution steps...</p>
          </div>
        );

      case "quiz":
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">{selectedContent.title}</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3">Question 1: What is Newton's First Law?</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" />
                    <span>An object at rest stays at rest</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" />
                    <span>Force equals mass times acceleration</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="q1" />
                    <span>Every action has an equal and opposite reaction</span>
                  </label>
                </div>
              </div>
              <Button>Submit Quiz</Button>
            </div>
          </div>
        );

      case "resources":
        return (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">{selectedContent.title}</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-medium">Physics Formulas Cheat Sheet</h4>
                    <p className="text-sm text-gray-600">PDF • 2.3 MB</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-green-600" />
                  <div>
                    <h4 className="font-medium">Practice Problems</h4>
                    <p className="text-sm text-gray-600">PDF • 1.8 MB</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <div>
                    <h4 className="font-medium">Additional Reading Materials</h4>
                    <p className="text-sm text-gray-600">PDF • 4.1 MB</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="w-full h-64 relative">
                <img
                  src="/images/challenges/banner.png"
                  alt="InnoVenture Challenge Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
              </div>
            {/* Course Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              {/* Share Button */}
              <button 
              onClick={() => {
                if (navigator.share) {
                navigator.share({
                  title: courseData.title,
                  text: courseData.description,
                  url: window.location.href,
                });
                } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
                }
              }}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200 group"
              title="Share course"
              >
              <svg 
                className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              </button>

              <div className="flex flex-wrap gap-3 mb-6">
              {courseData.tags.map((tag, index) => {
                if (tag === "Best Seller") {
                return (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-black rounded-xl shadow-lg">
                  ⭐ {tag}
                  </span>
                );
                } else if (tag === "Most Popular") {
                return (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-black rounded-xl shadow-lg">
                  🔥 {tag}
                  </span>
                );
                } else if (tag === "Beginner") {
                return (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-black rounded-xl shadow-lg">
                  🌱 {tag}
                  </span>
                );
                } else {
                return (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-black rounded-xl shadow-lg">
                  {tag}
                  </span>
                );
                }
              })}
              </div>

              <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">{courseData.title}</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Left side - Description */}
              <div className="lg:col-span-2">
                <p className="text-gray-600 mb-4 leading-relaxed">
                Are you ready to unlock the power of physics and build a solid foundation in mathematical thinking? 
                Whether you're a student seeking to enhance your skills or someone looking to refresh your knowledge.
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-purple-700">by {courseData.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                  <span className="font-medium">{courseData.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <Clock size={16} className="text-red-500" />
                  <span className="font-bold">Deadline: 15th May</span>
                </div>
                </div>
                
                <div className="flex items-center gap-3 mb-1 mt-4"></div>
            <div className="flex items-center gap-3 mb-1 mt-4">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-black text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              {/* <ShoppingCart size={16} /> */}
              Enrol
            </button>
            <span className="text-2xl font-black text-green-600">
              ₹1000
            </span>
            <span className="text-lg font-bold text-gray-400 line-through">
              ₹2000
            </span>
            {/* <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-black">
              {Math.round((1 - course.discountedPrice / course.originalPrice) * 100)}% OFF
            </span> */}
            
          </div>  
          </div>
          
                {/* Right side - Small Certificate Preview */}
                <div className="lg:col-span-1">
                  <div className="lg:col-span-1">
                          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                          <img
                            src="/images/certificates/Certificate.jpeg"
                            alt="Course Completion Certificate"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"><div class="text-center"><Award class="w-8 h-8 mx-auto mb-2 text-blue-500" /><p class="text-sm font-medium text-gray-600">Certificate Preview</p></div></div>';
                            }}
                          />
                          
                          {/* Lock Overlay */}
                          {!isEnrolled && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="text-center text-white bg-black/70 px-3 py-2 rounded-lg">
                            <Lock className="w-5 h-5 mx-auto mb-1" />
                            <p className="text-xs font-semibold">Enroll to unlock</p>
                            </div>
                            </div>
                          )}
                          </div>
                        </div>
                </div>
              </div>              
              {/* <div className="flex gap-3 mb-4">
                {!isEnrolled ? (
                  <>
                    <button 
                      onClick={handleEnrollment}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-black text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      🎓 Enroll Now - $299
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => window.open(`/course-viewer/${id}`, '_blank')}
                      className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-6 rounded-xl font-black text-sm hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      ▶️ Resume Course
                    </button>
                    <button 
                      onClick={handleEnrollment}
                      className="px-6 py-3 border-2 border-red-300 text-red-600 rounded-xl font-bold text-sm hover:bg-red-50 hover:border-red-400 transition-all duration-300"
                    >
                      🚫 Unenroll
                    </button>
                  </>
                )}
              </div> */}
                      
            </div>

            {/* Content Viewer */}
            {selectedContent && (
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Content Viewer</h3>
                  <Button variant="outline" size="sm" onClick={() => setSelectedContent(null)}>
                    Close
                  </Button>
                </div>
                {renderContentViewer()}
              </div>            )}

           

            {/* Progress Section */}
            {isEnrolled && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Course Completion</span>
                    <span className="text-sm font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-gray-600">Keep going! You're making great progress.</p>
                </div>
              </div>
            )}            {/* Course Content */}
                     {/* About Course */}
            {/* <div className="bg-white rounded-xl p-6 shadow-lg border-2">
              <h3 className="text-xl font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
                ℹ️ About this Course
              </h3>
              <div className="prose prose-sm text-gray-600 space-y-4">
                <p>
                  Welcome to this comprehensive course designed to provide you with in-depth knowledge and practical
                  skills in Physics Basics! Whether you're a beginner or looking to advance your expertise, this course
                  is structured to cater to learners at all levels.
                </p>
                <p>
                  The course is divided into several modules, each covering a key area that builds upon the previous
                  one. You'll engage with a mix of theoretical content, practical exercises, and real-world
                  applications.
                </p>
              </div>
            </div>
          </div>   */}
          {/* Challenge Content */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2">
              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-100 mb-6">
                {[
                  { id: "overview", label: "Overview", icon: Target },
                  { id: "content", label: "Contents", icon: Book },
                  { id: "faqs", label: "FAQs", icon: BookOpen },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 px-6 py-4 text-sm font-bold transition-all duration-300 flex items-center justify-center space-x-2 rounded-t-lg ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div>
                
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        📚 About InnoVenture 2025
                      </h3>
                      <div className="prose prose-sm text-gray-600 space-y-4">
                        {courseData.longDescription.split("\n\n").map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "content" && (
                  <div className="bg-white rounded-xl p-6 shadow-lg border-2">
              <h3 className="text-xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                📚 Course Content
              </h3>
              <div className="space-y-4">
                {sections.map((section, sectionIndex) => (
                  <div key={section.id} className="border rounded-lg">
                    <Collapsible open={section.isOpen} onOpenChange={() => toggleSection(section.id)}>
                      <CollapsibleTrigger>                        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b hover:from-blue-100 hover:to-purple-100 transition-all duration-300 w-full">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center text-sm font-black mr-3 shadow-lg">
                                {sectionIndex + 1}
                              </span>
                              <h4 className="font-bold text-gray-800 text-left">{section.title}</h4>
                            </div>
                            {section.isOpen ? (
                              <ChevronDown className="w-5 h-5 text-blue-600" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-purple-600" />
                            )}
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 space-y-3">                          {section.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 ${
                                lesson.locked
                                  ? "bg-gray-50 border-gray-200 cursor-not-allowed opacity-60"
                                  : lesson.completed
                                  ? "bg-green-50 border-green-200 hover:bg-green-100 cursor-pointer shadow-sm"
                                  : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300 cursor-pointer shadow-sm hover:shadow-md"
                              }`}
                              onClick={() => openContent(lesson)}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${
                                  lesson.locked 
                                    ? "bg-gray-200" 
                                    : lesson.completed 
                                    ? "bg-green-100" 
                                    : lesson.type === "video" 
                                    ? "bg-red-100" 
                                    : lesson.type === "text"
                                    ? "bg-blue-100"
                                    : lesson.type === "quiz"
                                    ? "bg-purple-100"
                                    : "bg-green-100"
                                }`}>
                                  {lesson.locked ? (
                                    <Lock className="w-5 h-5 text-gray-400" />
                                  ) : lesson.completed ? (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                  ) : (
                                    getContentIcon(lesson.type, "w-5 h-5")
                                  )}
                                </div>
                                <div>
                                  <h5 className={`text-sm font-bold ${
                                    lesson.locked ? "text-gray-500" : lesson.completed ? "text-green-800" : "text-gray-900"
                                  }`}>
                                    {lesson.title}
                                  </h5>
                                  <p className="text-xs text-gray-600 mt-1 capitalize font-medium">
                                    {lesson.type} • {lesson.duration}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {lesson.completed && (
                                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg">
                                    Completed
                                  </span>
                                )}
                                {lesson.locked && (
                                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-lg">
                                    Locked
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </div>   
                )}

                {/* FAQs Tab */}
                {activeTab === "faqs" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
                      ❓ Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {faqs.map((faq) => (
                        <div key={faq.id} className="border border-gray-200 rounded-lg">
                          <Collapsible open={faq.isOpen} onOpenChange={() => toggleFAQ(faq.id)}>
                            <CollapsibleTrigger className="w-full">
                              <div className="p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between">
                                <h5 className="font-semibold text-gray-900">{faq.question}</h5>
                                {faq.isOpen ? (
                                  <ChevronDown className="w-5 h-5 text-gray-500" />
                                ) : (
                                  <ChevronRight className="w-5 h-5 text-gray-500" />
                                )}
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="px-4 pb-4">
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              </div>
            </div>
          {/* Sidebar */}
          <div className="space-y-6">            {/* Associated Challenge */}
            <Card className="bg-white shadow-lg border-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  🏆 Associated Challenge
                </CardTitle>
                <p className="text-gray-600 text-sm font-medium">Showcase your skills and get awards</p>
              </CardHeader>
              <CardContent>
                {/* Single Challenge Card */}
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Challenge Thumbnail */}
                  <div className="w-full h-30 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <img 
                      src="/images/challenges/innoventure_challenge.png"
                      alt="Innovation Championship 2025"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Registration Status Badge */}
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                        Open
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    {/* Challenge Title */}
                    <div className="h-12 mb-3">
                      <h3 className="text-lg font-black text-gray-800 tracking-tight leading-tight line-clamp-2">
                        Innovation Championship 2025
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-purple-700">by Smith Eve</span>
                      </div>
                    </div>
                    
                    {/* Challenge Description */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        A comprehensive challenge focusing on innovative problem-solving and creative thinking.
                      </p>
                    </div>

                    {/* Challenge Stats */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={14} className="text-red-500" />
                      <span className="font-medium">Deadline: Nov 30, 2024</span>
                    </div>

                    {/* Go to Challenge Button */}
                    <div className="mt-4">
                      <Link
                        to="/challenges/1"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow hover:from-green-600 hover:to-emerald-700 transition-all text-sm"
                      >
                        Go to Challenge
                        <Trophy className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Partners */}
            <Card className="bg-white shadow-lg border-2">
                <CardHeader className="pb-4 text-center">
                <CardTitle className="text-xl font-black bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                   Our Partners
                </CardTitle>
                <p className="text-gray-600 text-sm font-medium">Trusted by leading institutions</p>
                </CardHeader>
                <CardContent>
              <div className="space-y-2">
              {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-30 rounded-lg hover:bg-gray-100 transition-colors p-2"
              >
                <h4 className="font-bold text-gray-900 mb-2 text-center">{partner.name}</h4>
                <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-full h-full object-contain"
                />
                </div>
              </div>
              ))}
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
