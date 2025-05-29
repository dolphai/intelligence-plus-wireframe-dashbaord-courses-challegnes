"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Clock,
  Users,
  ChevronDown,
  ChevronRight,
  Trophy,
  BookOpen,
  Award,
  Target,
  CheckCircle,
  PlayCircle,
  Star,
  Medal,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"
import { Badge } from "../components/ui/badge"

interface Round {
  id: number
  title: string
  subtitle: string
  format: string
  timeline: string
  requirements: string[]
  awards: string[]
  isOpen: boolean
  status: "upcoming" | "active" | "completed"
  participants?: string
}

interface FAQ {
  id: number
  question: string
  answer: string
  isOpen: boolean
  category: "general" | "technical" | "registration"
}

const ChallengeDetails: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [activeTab, setActiveTab] = useState<"overview" | "rounds" | "faqs">("overview")

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<number[]>([])
  const [bookedDates] = useState<number[][]>([
    [15, 16],
    [22, 23],
    [29, 30],
  ]) // Example booked date pairs
  const [confirmedDates, setConfirmedDates] = useState<number[]>([])
  const [showCalendar, setShowCalendar] = useState(true)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]

  const [rounds, setRounds] = useState<Round[]>([
    {
      id: 1,
      title: "Round 1",
      subtitle: "Online Subjective Challenge",
      format: "AI-monitored online assessment on the Innoventure platform",
      timeline: "September - October 2025",
      status: "active",
      participants: "All registered students",
      requirements: [
        "Stable internet connection (minimum 2 Mbps)",
        "Web-camera enabled device (laptop/mobile)",
        "Quiet environment for 2 hours",
        "Valid school registration",
      ],
      awards: [
        "Digital Certificate of Merit from E-Cell, IIT Hyderabad",
        "Detailed Performance Report with personalized feedback",
        "Access to exclusive preparation materials for Round 2",
        "Results announced: Last week of October 2025",
      ],
      isOpen: false,
    },
    {
      id: 2,
      title: "Round 2",
      subtitle: "Online Interview & Assessment",
      format: "One-on-one video interview with innovation experts",
      timeline: "Mid October - Mid November 2025",
      status: "upcoming",
      participants: "Top performers from Round 1",
      requirements: [
        "Qualification based on All-India Round 1 performance",
        "HD web-camera and clear audio setup",
        "Professional presentation skills",
        "Critical thinking and communication abilities",
      ],
      awards: [
        "Digital Certificate of Excellence from E-Cell, IIT Hyderabad",
        "Zonal Excellence Gold Medal for outstanding performers",
        "Mentorship opportunities with industry experts",
        "Results announced: Last week of November 2025",
      ],
      isOpen: false,
    },
    {
      id: 3,
      title: "National Finale",
      subtitle: "Jury Round & Grand Finale",
      format: "Offline presentation to expert jury panel",
      timeline: "January 2026 (Weekend)",
      status: "upcoming",
      participants: "40 finalists per grade (4th-9th)",
      requirements: [
        "Top 40 students per grade from Round 2",
        "Physical presence in Pune/IIT Hyderabad",
        "Real-world problem solution presentation",
        "Travel arrangements (grants available for deserving students)",
      ],
      awards: [
        "Physical Certificate of National Excellence",
        "Gold Medal for National Excellence",
        "Cash prizes and scholarships for top 3 per grade",
        "Lifetime recognition and alumni network access",
      ],
      isOpen: false,
    },
  ])

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

  const challengeData = {
    title: "InnoVenture Challenge 2025",
    subtitle: "India's Largest National Innovation Challenge",
    description:
      "InnoVenture 2025—India's largest national-level Ideation and Innovation challenge for students. This platform is widely regarded as India's most transformational initiative for students from 1st to 9th grade.",
    longDescription: `After a decade of tremendous success, IntelligencePlus is proud to present InnoVenture 2025—India's largest national-level Ideation and Innovation challenge for students.

Organized by the Innoventure World Foundation and powered by IntelligencePlus, InnoVenture aims to nurture innovation and creativity among young minds, paving the way for a sustainable and inclusive future for India.

The key outcome of this challenge is to prepare students for solving real-life challenges by equipping them with 21st century skills. Across the last 10 editions, InnoVenture has already greatly benefited over 50,000 students from 500+ schools across 100+ cities of India.`,
    startDate: "September 15, 2025",
    endDate: "January 31, 2026",
    registrationDeadline: "September 10, 2025",
    grades: "1st to 9th Grade",
    participants: "50,000+",
    schools: "500+",
    cities: "100+",
    tags: ["Innovation", "Ideation", "Entrepreneurship", "National Level"],
    organizer: "Innoventure World Foundation",
    level: "All Grades",
  }

  const partners = [
    { 
      name: "Knowledge Partner", 
      logo: "/images/partners/iit.png",
      description: "Premier technical institute supporting innovation and research"
    },
    { 
      name: "Outreach Partner - EW", 
      logo: "/images/partners/education_world.png",
      description: "India's largest education community and resource platform"
    },
    { 
      name: "Outreach Partner - APER", 
      logo: "/images/partners/aper.jpeg",
      description: "India's largest education community and resource platform"
    },
    { 
      name: "IntelligencePlus", 
      logo: "/images/partners/intelligenceplus.png",
      description: "Leading educational technology platform for student innovation"
    },
  ]

  const toggleRound = (roundId: number) => {
    setRounds(rounds.map((round) => (round.id === roundId ? { ...round, isOpen: !round.isOpen } : round)))
  }

  const toggleFAQ = (faqId: number) => {
    setFaqs(faqs.map((faq) => (faq.id === faqId ? { ...faq, isOpen: !faq.isOpen } : faq)))
  }

  const handleRegistration = () => {
    setIsRegistered(!isRegistered)
  }

  const getRoundStatusColor = (status: Round["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRoundIcon = (status: Round["status"]) => {
    switch (status) {
      case "active":
        return <PlayCircle className="w-5 h-5" />
      case "upcoming":
        return <Clock className="w-5 h-5" />
      case "completed":
        return <CheckCircle className="w-5 h-5" />
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  // Calendar functions
  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add days from previous month
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevMonth = new Date(year, month - 1, 0)
      days.push(new Date(year, month - 1, prevMonth.getDate() - i))
    }

    // Add days from current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    // Add days from next month to fill the grid
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      days.push(new Date(year, month + 1, day))
    }

    return days
  }

  const handleDateClick = (date: Date) => {
    const dayOfMonth = date.getDate()
    const month = date.getMonth()
    const currentMonth = currentDate.getMonth()

    if (month !== currentMonth) return

    const isBooked = bookedDates.some((pair) => pair.includes(dayOfMonth))
    if (isBooked) return

    // Only allow even pairs: 1,2 or 3,4 or 5,6 etc.
    const pairStart = dayOfMonth % 2 === 1 ? dayOfMonth : dayOfMonth - 1
    const pairEnd = pairStart + 1

    // Check if either date in the pair is booked
    const isPairBooked = bookedDates.some((pair) => pair.includes(pairStart) || pair.includes(pairEnd))
    if (isPairBooked) return

    // Toggle the entire pair
    const hasPairStart = selectedDates.includes(pairStart)
    const hasPairEnd = selectedDates.includes(pairEnd)

    if (hasPairStart && hasPairEnd) {
      // Remove both dates
      setSelectedDates((prev) => prev.filter((d) => d !== pairStart && d !== pairEnd))
    } else {
      // Add both dates
      setSelectedDates((prev) => {
        const newDates = prev.filter((d) => d !== pairStart && d !== pairEnd)
        return [...newDates, pairStart, pairEnd].sort((a, b) => a - b)
      })
    }
  }

  const handleConfirmDates = () => {
    setConfirmedDates([...selectedDates])
    setShowCalendar(false)
  }

  const handleUpdateDates = () => {
    setShowCalendar(true)
    setSelectedDates([...confirmedDates])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/challenges"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Challenges
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Challenge Header with Banner */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Banner Image */}
              <div className="w-full h-64 relative">
                <img
                  src="/images/challenges/banner.png"
                  alt="InnoVenture Challenge Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-6">
                  {challengeData.tags.map((tag, index) => {
                    const colors = [
                      "from-blue-500 to-cyan-500",
                      "from-purple-500 to-pink-500",
                      "from-green-500 to-emerald-500",
                      "from-orange-500 to-red-500",
                    ]
                    const icons = ["💡", "🎯", "🚀", "🏆"]
                    return (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${colors[index % colors.length]} text-white text-sm font-black rounded-xl shadow-lg`}
                      >
                        {icons[index % icons.length]} {tag}
                      </span>
                    )
                  })}
                </div>

                <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">{challengeData.title}</h1>

                {/* Main content grid - Description left, Thumbnail right */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {/* Left side - Description */}
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{challengeData.description}</p>
                  </div>

                  {/* Right side - Challenge Thumbnail with Reviews Overlay */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      {/* Challenge Thumbnail - smaller size */}
                      <img
                        src="/images/challenges/innoventure_challenge.png"
                        alt="InnoVenture Challenge"
                        className="w-full aspect-[24/9] object-cover rounded-xl shadow-lg"
                      />

                      {/* Reviews Overlay */}
                      <div className="absolute inset-0 bg-black/40 rounded-xl flex items-end p-4">
                        {/* <div className="absolute top-2 right-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center ">
                          <Star size={14} className="text-amber-500 fill-amber-500" />
                          <span className="text-xs font-bold text-gray-800">4.6</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  {!isRegistered ? (
                    <>
                      <button
                        onClick={handleRegistration}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-black text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        🏆 Already Registered
                      </button>
                      <button className="px-3 py-3 border-0 border-gray-300 text-purple-700 rounded-xl font-bold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                        by Sarah Jonah
                      </button>
                      <button className="px-2 py-3 border-0 border-gray-300 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                        ⭐ 4.6
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-6 rounded-xl font-black text-sm hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      ✅ Registered Successfully
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Challenge Content */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2">
              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-100 mb-6">
                {[
                  { id: "overview", label: "Overview", icon: Target },
                  { id: "rounds", label: "Challenge Rounds", icon: Trophy },
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
                        {challengeData.longDescription.split("\n\n").map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Rounds Tab */}
                {activeTab === "rounds" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                      🏆 Challenge Rounds
                    </h3>
                    {rounds.map((round, index) => (
                      <div key={round.id} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                        <Collapsible open={round.isOpen} onOpenChange={() => toggleRound(round.id)}>
                          <CollapsibleTrigger className="w-full">
                            <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 transition-all duration-300">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-lg font-black shadow-lg">
                                    {index + 1}
                                  </div>
                                  <div className="text-left">
                                    <h4 className="text-xl font-black text-gray-900">{round.title}</h4>
                                    <p className="text-gray-600 font-medium">{round.subtitle}</p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <Badge className={`${getRoundStatusColor(round.status)} font-bold`}>
                                    {getRoundIcon(round.status)}
                                    <span className="ml-1 capitalize">{round.status}</span>
                                  </Badge>
                                  {round.isOpen ? (
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
                                  ) : (
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="p-6 bg-white space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                                    <Target className="w-4 h-4 mr-2 text-blue-600" />
                                    Requirements
                                  </h5>
                                  <ul className="space-y-2">
                                    {round.requirements.map((req, reqIndex) => (
                                      <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                                    <Trophy className="w-4 h-4 mr-2 text-yellow-600" />
                                    Awards & Recognition
                                  </h5>
                                  <ul className="space-y-2">
                                    {round.awards.map((award, awardIndex) => (
                                      <li key={awardIndex} className="text-sm text-gray-600 flex items-start">
                                        <Medal className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                        {award}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <h6 className="font-semibold text-gray-800 mb-2">Format & Timeline</h6>
                                <p className="text-sm text-gray-600 mb-2">{round.format}</p>
                                <p className="text-sm text-blue-600 font-medium">{round.timeline}</p>
                                {round.participants && (
                                  <p className="text-sm text-purple-600 font-medium">
                                    Participants: {round.participants}
                                  </p>
                                )}
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    ))}
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

          {/* Sidebar with Calendar */}
          
          <div className="lg:col-span-1 space-y-6">
            {/* Calendar */}
            <Card className="bg-white shadow-lg border-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  📅 Schedule Your Challenge
                </CardTitle>
                <p className="text-gray-600 text-sm font-medium">Select your preferred date pairs</p>
              </CardHeader>
              <CardContent>
                {showCalendar ? (
                  <>
                    {/* Calendar */}
                    <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <button
                          type="button"
                          className="w-6 h-6 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 font-bold text-sm"
                          onClick={() => navigateMonth("prev")}
                          aria-label="Previous month"
                        >
                          ‹
                        </button>
                        <div className="text-sm font-semibold text-gray-800 mx-2">
                          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </div>
                        <button
                          type="button"
                          className="w-6 h-6 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 font-bold text-sm"
                          onClick={() => navigateMonth("next")}
                          aria-label="Next month"
                        >
                          ›
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-0.5 mb-1">
                        {daysOfWeek.map((day) => (
                          <div key={day} className="text-center py-1 text-xs font-semibold text-gray-500 uppercase">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-0.5">
                        {getDaysInMonth().map((date, index) => {
                          const dayOfMonth = date.getDate()
                          const month = date.getMonth()
                          const currentMonth = currentDate.getMonth()
                          const isCurrentMonth = month === currentMonth
                          const isSelected = selectedDates.includes(dayOfMonth) && isCurrentMonth
                          const isBooked = bookedDates.some((pair) => pair.includes(dayOfMonth)) && isCurrentMonth
                          const isToday = date.toDateString() === new Date().toDateString()

                          return (
                            <div
                              key={index}
                              className={`
                                aspect-square flex items-center justify-center rounded-md cursor-pointer transition-all duration-200 text-xs font-medium
                                ${
                                  !isCurrentMonth
                                    ? "text-gray-300 bg-gray-50 cursor-default opacity-50"
                                    : isSelected
                                      ? "bg-blue-600 text-white shadow-md transform scale-105"
                                      : isBooked
                                        ? "bg-red-100 text-red-600 cursor-not-allowed line-through opacity-70"
                                        : isToday
                                          ? "bg-yellow-100 border border-yellow-300 text-yellow-800 font-semibold"
                                          : "bg-white border border-gray-100 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 hover:scale-105"
                                }
                                ${isCurrentMonth && !isBooked ? "min-h-[28px]" : ""}
                              `}
                              onClick={() => handleDateClick(date)}
                            >
                              {dayOfMonth}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Info about pair selection */}
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-xs text-blue-700 font-medium">
                        💡 Dates are selected in pairs: (1,2), (3,4), (5,6), etc.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={handleConfirmDates}
                        disabled={selectedDates.length === 0}
                        className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-700 transition-colors text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Confirm Dates ({selectedDates.length} selected)
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Confirmed Dates Display */}
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl mb-4">
                      <h4 className="font-semibold text-green-800 mb-2">📅 Confirmed Dates</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {confirmedDates.map((date) => (
                          <span
                            key={date}
                            className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm font-medium"
                          >
                            {monthNames[currentDate.getMonth()]} {date}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-green-600">✅ Your challenge dates have been confirmed!</p>
                    </div>

                    <button
                      onClick={handleUpdateDates}
                      className="w-full bg-gray-100 text-gray-700 py-2 px-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-200 transition-colors text-sm"
                    >
                      Update Dates
                    </button>
                  </>
                )}
              </CardContent>
            </Card>            {/* Partners Section */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Our Partners</h3>
                <div className="space-y-6">
                  {partners.map((partner, index) => (
                    <div key={index} className="space-y-3">
                      {/* Partner Name */}
                      <h4 className="font-bold text-gray-900 text-lg">{partner.name}</h4>
                      
                      {/* Partner Logo - 16:9 aspect ratio */}
                      <div className="w-full aspect-video bg-gray-50 rounded-lg overflow-hidden hover:bg-gray-100 transition-colors">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

          {/* Single Course - Horizontal Layout */}
          <div className=" mt-12 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group p-6">
            <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            📚 Associated Course
          </h3>
            <div className="flex items-center gap-6">
              {/* Course Thumbnail */}
              <div className="relative w-48 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                  AI
                </div>

                <div className="absolute top-2 left-2">
                  <div className="px-2 py-1 rounded-full text-xs font-black bg-green-100 text-green-800 backdrop-blur-sm">
                    Prerequisite
                  </div>
                </div>

                {/* <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-gray-800">4.8</span>
                </div> */}

                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="text-white text-xs font-bold">AI Academy</span>
                  </div>
                </div>
              </div>

              {/* Course Info - Horizontal Layout */}
              <div className="flex-1 flex flex-col justify-between h-32">
                {/* Title and Description */}
                <div>
                  {/* <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    📚 Associated Course
                  </h3> */}
                  <h3 className="text-2xl font-black text-gray-900 leading-tight tracking-tight mb-2">
                    Artificial Intelligence Fundamentals
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Master the basics of AI and machine learning. Essential preparation for the Innovation Championship
                    challenge with hands-on projects and real-world applications.
                  </p>
                </div>

                {/* Course Details and Actions */}
                <div className="flex items-center justify-between">
                  {/* Course Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Clock size={16} className="text-blue-500" />
                      <span className="font-semibold">5 months</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Award size={16} className="text-purple-500" />
                      <span className="font-semibold">Beginner</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Users size={16} className="text-green-500" />
                      <span className="font-semibold">1st-9th Grade</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Clock size={16} className="text-orange-500" />
                      <span className="font-semibold">Validity: 6 months</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-green-600">FREE</span>
                    <Link
                      to="/courses/ai-fundamentals"
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-black text-sm hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <BookOpen size={16} />
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChallengeDetails
