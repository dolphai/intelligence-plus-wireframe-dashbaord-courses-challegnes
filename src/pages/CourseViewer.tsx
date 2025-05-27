import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  Users,
  Award,
  Star,
  ChevronDown,
  ChevronRight,
  Video,
  BookOpen,
  HelpCircle,
  Folder,
  Maximize,
  Menu,
  X,
  Download,
  FileText,
  ChevronLeft,
  ChevronLeftIcon,
} from 'lucide-react';
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
  content?: string;
  videoUrl?: string;
}

interface Section {
  id: number;
  title: string;
  lessons: Lesson[];
  isOpen: boolean;
}

const CourseViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const lessonId = searchParams.get('lesson');
  
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress] = useState(35);
  // Sample course data
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      title: "Newton's Laws of Motion",
      isOpen: true,
      lessons: [
        {
          id: 1,
          title: "Introduction to Newton's Laws",
          type: "video",
          duration: "15 min",
          completed: true,
          locked: false,
          videoUrl: "https://www.youtube.com/embed/kKKM8Y-u7ds",
          content: "Welcome to this comprehensive introduction to Newton's Laws of Motion..."
        },
        {
          id: 2,
          title: "First Law of Motion",
          type: "text",
          duration: "10 min",
          completed: true,
          locked: false,
          content: `# Newton's First Law of Motion

## Overview
Newton's first law of motion states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.

## Key Concepts
- **Inertia**: The tendency of objects to resist changes in their state of motion
- **Force**: A push or pull that can change an object's motion
- **Equilibrium**: When all forces acting on an object are balanced

## Examples
1. A book lying on a table will remain at rest unless someone pushes it
2. A ball rolling on a smooth surface will continue rolling unless friction stops it
3. Passengers in a car lurch forward when the car suddenly stops

## Mathematical Expression
If the net force on an object is zero, then:
**ΣF = 0**

This means the object will maintain its current state of motion.`
        },
        {
          id: 3,
          title: "Newton's Laws Quiz",
          type: "quiz",
          duration: "5 min",
          completed: false,
          locked: false,
          content: "quiz-content"
        },
        {
          id: 4,
          title: "Study Materials & References",
          type: "resources",
          duration: "—",
          completed: false,
          locked: false,
          content: "resources-content"
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
          locked: false,
          videoUrl: "https://www.youtube.com/embed/w4QFJb9a8vo",
        },
        {
          id: 6,
          title: "Understanding Energy Types",
          type: "text",
          duration: "15 min",
          completed: false,
          locked: false,
          content: `# Energy Types and Conservation

## Kinetic Energy
Energy of motion, calculated as KE = ½mv²

## Potential Energy
Stored energy due to position or configuration

## Conservation of Energy
Energy cannot be created or destroyed, only transformed from one form to another.`
        },
      ],
    },
  ]);

  const courseData = {
    title: "Physics for Beginners",
    instructor: "Dr. Neil Science",
    rating: 4.8,
    totalLessons: 12,
    completedLessons: 4,
  };

  useEffect(() => {
    // Set initial lesson based on URL parameter or first lesson
    const initialLessonId = lessonId ? parseInt(lessonId) : 1;
    const lesson = sections.flatMap(s => s.lessons).find(l => l.id === initialLessonId);
    if (lesson) {
      setCurrentLesson(lesson);
    }
  }, [lessonId, sections]);

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

  const selectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lesson', lesson.id.toString());
    window.history.pushState({}, '', url.toString());
  };  const toggleSection = (sectionId: number) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === sectionId 
          ? { ...section, isOpen: !section.isOpen }
          : section
      )
    );
  };

  // Navigation functions
  const getAllLessons = () => {
    return sections.flatMap(section => section.lessons);
  };

  const getCurrentLessonIndex = () => {
    const allLessons = getAllLessons();
    return allLessons.findIndex(lesson => lesson.id === currentLesson?.id);
  };

  const goToNextLesson = () => {
    const allLessons = getAllLessons();
    const currentIndex = getCurrentLessonIndex();
    if (currentIndex < allLessons.length - 1) {
      selectLesson(allLessons[currentIndex + 1]);
    }
  };

  const goToPreviousLesson = () => {
    const allLessons = getAllLessons();
    const currentIndex = getCurrentLessonIndex();
    if (currentIndex > 0) {
      selectLesson(allLessons[currentIndex - 1]);
    }
  };

  const canGoNext = () => {
    const currentIndex = getCurrentLessonIndex();
    return currentIndex < getAllLessons().length - 1;
  };

  const canGoPrevious = () => {
    const currentIndex = getCurrentLessonIndex();
    return currentIndex > 0;
  };

  const renderContent = () => {
    if (!currentLesson) return null;

    switch (currentLesson.type) {
      case "video":
        return (
          <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'bg-black rounded-lg'} flex items-center justify-center`}>
            {isFullscreen && (
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}
            <div className={`w-full ${isFullscreen ? 'h-full' : 'aspect-video'} relative`}>
              <iframe
                src={currentLesson.videoUrl}
                title={currentLesson.title}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              {!isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors"
                >
                  <Maximize className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        );

      case "text":
        return (
          <div className="bg-white rounded-lg p-8 prose prose-lg max-w-none h-96 overflow-y-auto">
            <div className="whitespace-pre-wrap">{currentLesson.content}</div>
          </div>
        );

      case "quiz":
        return (
          <div className="bg-white rounded-lg p-8 h-96 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">📝 Quiz: {currentLesson.title}</h2>
            <div className="space-y-6">
              <div className="p-6 border-2 border-purple-200 rounded-xl bg-purple-50">
                <h3 className="text-lg font-bold mb-4 text-purple-800">Question 1</h3>
                <p className="mb-4 text-gray-700">What is Newton's First Law of Motion also known as?</p>
                <div className="space-y-2">
                  <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-purple-50 cursor-pointer">
                    <input type="radio" name="q1" className="mr-3" />
                    <span>Law of Inertia</span>
                  </label>
                  <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-purple-50 cursor-pointer">
                    <input type="radio" name="q1" className="mr-3" />
                    <span>Law of Acceleration</span>
                  </label>
                  <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-purple-50 cursor-pointer">
                    <input type="radio" name="q1" className="mr-3" />
                    <span>Law of Action-Reaction</span>
                  </label>
                </div>
              </div>
              
              <div className="p-6 border-2 border-purple-200 rounded-xl bg-purple-50">
                <h3 className="text-lg font-bold mb-4 text-purple-800">Question 2</h3>
                <p className="mb-4 text-gray-700">Which of the following demonstrates inertia?</p>
                <div className="space-y-2">
                  <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-purple-50 cursor-pointer">
                    <input type="radio" name="q2" className="mr-3" />
                    <span>A ball rolling down a hill</span>
                  </label>
                  <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-purple-50 cursor-pointer">
                    <input type="radio" name="q2" className="mr-3" />
                    <span>A book staying on a table</span>
                  </label>
                  <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:bg-purple-50 cursor-pointer">
                    <input type="radio" name="q2" className="mr-3" />
                    <span>A car accelerating</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-black hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                📊 Submit Quiz
              </button>
            </div>
          </div>
        );

      case "resources":
        return (
          <div className="bg-white rounded-lg p-8 h-96 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">📚 Resources: {currentLesson.title}</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="font-bold text-gray-800">Newton's Laws Formula Sheet</h3>
                    <p className="text-sm text-gray-600">PDF • 2.5 MB</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 ml-auto cursor-pointer hover:text-blue-500" />
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-red-500" />
                  <div>
                    <h3 className="font-bold text-gray-800">Additional Video Lectures</h3>
                    <p className="text-sm text-gray-600">YouTube Playlist • 45 mins</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 ml-auto cursor-pointer hover:text-red-500" />
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-gray-800">Practice Problems</h3>
                    <p className="text-sm text-gray-600">PDF • 1.8 MB</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 ml-auto cursor-pointer hover:text-green-500" />
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Folder className="w-6 h-6 text-purple-500" />
                  <div>
                    <h3 className="font-bold text-gray-800">Simulation Tools</h3>
                    <p className="text-sm text-gray-600">Interactive Physics Simulator</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 ml-auto cursor-pointer hover:text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link 
              to={`/courses/${id}`}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Course
            </Link>
            <div className="hidden md:block">
              <h1 className="text-lg font-black text-gray-900">{courseData.title}</h1>
              <p className="text-sm text-gray-600">by {courseData.instructor}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Progress */}
            <div className="hidden md:flex items-center gap-3">
              <div className="text-sm">
                <span className="font-bold text-gray-900">{courseData.completedLessons}/{courseData.totalLessons}</span>
                <span className="text-gray-600"> lessons completed</span>
              </div>
              <div className="w-32">
                <Progress value={progress} className="h-2" />
              </div>
              <span className="text-sm font-bold text-gray-900">{progress}%</span>
            </div>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Main Content */}
        <div className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen && !isFullscreen ? 'md:mr-80' : ''}`}>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              {currentLesson && getContentIcon(currentLesson.type, "w-6 h-6")}
              <h2 className="text-2xl font-black text-gray-900">{currentLesson?.title}</h2>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentLesson?.duration}
              </span>
              <span className="capitalize font-medium">{currentLesson?.type}</span>
              {currentLesson?.completed && (
                <span className="flex items-center gap-1 text-green-600 font-bold">
                  <CheckCircle className="w-4 h-4" />
                  Completed
                </span>
              )}
            </div>
          </div>

          {renderContent()}
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={goToPreviousLesson}
              disabled={!canGoPrevious()}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                canGoPrevious()
                  ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Lesson
            </button>
            
            <div className="text-sm text-gray-600">
              Lesson {getCurrentLessonIndex() + 1} of {getAllLessons().length}
            </div>
            
            <button
              onClick={goToNextLesson}
              disabled={!canGoNext()}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                canGoNext()
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Next Lesson
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-gray-200 transform transition-transform duration-300 z-40 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isFullscreen ? 'hidden' : ''} md:fixed`}>
          
          {/* Mobile sidebar header */}
          <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">Course Content</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 border-b border-gray-200 hidden md:block">
            <h3 className="font-black text-lg text-gray-900 mb-2">📚 Course Content</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{courseData.completedLessons}/{courseData.totalLessons} completed</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {sections.map((section, sectionIndex) => (
                <div key={section.id} className="border rounded-xl overflow-hidden">
                  <Collapsible open={section.isOpen} onOpenChange={() => toggleSection(section.id)}>                    <CollapsibleTrigger>
                      <div className="w-full p-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center text-xs font-black">
                              {sectionIndex + 1}
                            </span>
                            <h4 className="font-bold text-gray-800 text-left text-sm">{section.title}</h4>
                          </div>
                          {section.isOpen ? (
                            <ChevronDown className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-purple-600" />
                          )}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="p-2 space-y-2">
                        {section.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                              currentLesson?.id === lesson.id
                                ? "bg-blue-100 border-2 border-blue-300"
                                : lesson.completed
                                ? "bg-green-50 hover:bg-green-100"
                                : "bg-white hover:bg-gray-50 border border-gray-200"
                            }`}
                            onClick={() => selectLesson(lesson)}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-1 rounded ${
                                lesson.type === "video" ? "bg-red-100" :
                                lesson.type === "text" ? "bg-blue-100" :
                                lesson.type === "quiz" ? "bg-purple-100" : "bg-green-100"
                              }`}>
                                {lesson.completed ? (
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                ) : (
                                  getContentIcon(lesson.type, "w-4 h-4")
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className={`text-xs font-bold truncate ${
                                  currentLesson?.id === lesson.id ? "text-blue-800" : "text-gray-900"
                                }`}>
                                  {lesson.title}
                                </h5>
                                <p className="text-xs text-gray-600">{lesson.duration}</p>
                              </div>
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
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default CourseViewer;
