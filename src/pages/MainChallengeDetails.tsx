import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User, ChevronDown, ChevronUp } from 'lucide-react';

// Note: You'll need to create these components or adjust imports based on your project structure
// import CourceDetailsLayout from "../Components/CourceDetailsLayout";
// import UpgradeCard from "../Components/UpgradeCard";
// import AdvertisingBanner from "../Components/AdvertisingBanner";
// import TabSwitcher from "../Components/TabSwitcher";
// import Timeline from "../Components/Timeline";
// import image from "../../../assets/image.png"; // default fallback image

const MainChallengeDetails = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const [challenge, setchallenge] = useState<any>(null);
  useEffect(() => {
    // Mock challenge data - replace with actual API call when backend is available
    const mockChallengeData = {
      _id: id || 'innovation-championship-2025',
      title: 'Innovation Championship 2025',
      shortDescription: 'A comprehensive challenge focusing on innovative problem-solving and creative thinking.',
      longDescription: 'A comprehensive challenge focusing on innovative problem-solving and creative thinking. Students will work in teams to develop solutions for real-world problems. This challenge spans multiple rounds with increasing difficulty levels, testing both individual skills and collaborative abilities.\n\nParticipants will engage in:\n- Creative problem-solving sessions\n- Team collaboration exercises\n- Technical skill demonstrations\n- Presentation and communication challenges\n\nThis is an excellent opportunity for students to showcase their innovative thinking and compete with peers from around the region.',
      gradeEligibility: 'Grades 5-12',
      host: 'Innovation Academy',
      keywords: ['Innovation', 'Problem Solving', 'Teamwork', 'Creativity', 'STEM'],      isFree: false,
      originalPrice: 299,
      discountedPrice: 199,
      banner: '/images/challenges/innoventure_challenge.png',
      rounds: [
        {
          _id: 'round1',
          title: 'Ideation Round',
          description: 'Generate innovative ideas and present initial concepts',
          startDate: '2025-06-01T09:00:00Z',
          endDate: '2025-06-03T17:00:00Z'
        },
        {
          _id: 'round2',
          title: 'Development Phase',
          description: 'Develop prototypes and detailed solutions',
          startDate: '2025-06-10T09:00:00Z',
          endDate: '2025-06-15T17:00:00Z'
        },
        {
          _id: 'round3',
          title: 'Presentation Round',
          description: 'Present final solutions to judges',
          startDate: '2025-06-20T09:00:00Z',
          endDate: '2025-06-22T17:00:00Z'
        }
      ],
      timeline: [
        { step: 'Registration', date: '2025-05-15', completed: true },
        { step: 'Round 1: Ideation', date: '2025-06-01', completed: false },
        { step: 'Round 2: Development', date: '2025-06-10', completed: false },
        { step: 'Final Presentations', date: '2025-06-20', completed: false }
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'Who can participate in this challenge?',
          answer: 'Students from grades 5-12 can participate. Teams of 2-4 students are recommended.'
        },
        {
          id: 'faq2',
          question: 'What is the registration fee?',
          answer: 'The discounted registration fee is ₹199 per team (original price ₹299).'
        },
        {
          id: 'faq3',
          question: 'What equipment or materials are needed?',
          answer: 'Basic materials will be provided. Students should bring their creativity and problem-solving skills!'
        },
        {
          id: 'faq4',
          question: 'How are teams evaluated?',
          answer: 'Teams are evaluated based on creativity, technical feasibility, presentation skills, and teamwork.'
        }
      ],      partners: [
        {
          _id: 'partner1',
          name: 'Education World',
          imageLink: '/images/partners/education_world.png',
          partnerLink: 'https://example.com/education-world'
        },
        {
          _id: 'partner2',
          name: 'IIT Hydrabad',
          imageLink: '/images/partners/iit.png',
          partnerLink: 'https://example.com/iit-hydrabad'
        },
        {
          _id: 'partner3',
          name: 'intelligenceplus',
          imageLink: '/images/partners/intelligenceplus.png',
          partnerLink: 'https://example.com/intelligenceplus'
        }
      ]
    };

    // Simulate API delay
    setTimeout(() => {
      setchallenge(mockChallengeData);
    }, 500);
  }, [id]);
  if (!challenge) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-500 text-lg">
            Loading challenge details...
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    {
      label: "Content",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Challenge Rounds</h2>
          {challenge.rounds?.map((round: any) => {
            const now = new Date();
            const startDate = new Date(round.startDate);
            const endDate = new Date(round.endDate);
            const isActive = now >= startDate && now <= endDate;

            return (
              <div
                key={round._id}
                className="my-4 p-4 rounded-lg shadow bg-blue-50 hover:bg-blue-100 transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-blue-800">{round.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isActive
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {isActive ? "Active" : "Not Started"}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{round.description}</p>
                <p className="mt-1 text-sm text-gray-500">
                  Start: {new Date(round.startDate).toLocaleDateString()} | End:{" "}
                  {new Date(round.endDate).toLocaleDateString()}
                </p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      label: "About",
      content: (
        <div className="mt-10 bg-blue-50 p-6 rounded-lg shadow text-gray-700">
          <h3 className="text-2xl text-blue-700 font-semibold mb-4">About challenge</h3>
          <p className="text-md leading-relaxed whitespace-pre-line">
            {challenge.longDescription}
          </p>
        </div>
      ),
    },
    {
      label: "Reviews",
      content: <p className="text-blue-700">Customer reviews will show here.</p>,
    },
    {
      label: "FAQs",
      content: (
        <div className="max-w-3xl mx-auto">
          {challenge.faqs?.map(({ id, question, answer }: any) => (
            <div key={id} className="mb-4 border border-blue-300 rounded-lg">
              <button
                onClick={() => setOpenFAQ(openFAQ === id ? null : id)}
                className="w-full flex justify-between items-center p-4 bg-blue-100 text-blue-800 font-semibold rounded-t-lg hover:bg-blue-200 transition"
              >
                {question}                {openFAQ === id ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </button>
              <div
                className={`px-4 pb-4 text-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openFAQ === id ? "max-h-40" : "max-h-0"
                }`}
              >
                {openFAQ === id && <p>{answer}</p>}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="main-challenge-details min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md space-y-6">            {/* Banner */}
            <img
              src={challenge.banner || "/images/challenges/banner.png"}
              alt="Banner"
              className="w-full h-60 object-cover rounded-lg shadow"
            />

            {/* Title + Info */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-4">
              <div>
                <h1 className="text-3xl font-bold text-blue-700">{challenge.title}</h1>
                <p className="text-gray-600 mt-2">{challenge.shortDescription}</p>
                <p className="text-gray-400 text-lg mt-2">{challenge.gradeEligibility}</p>                <div className="flex items-center gap-2 mt-4 text-gray-700 text-xl">
                  <User size={30} />
                  {challenge.host}
                </div>                <div className="flex flex-wrap gap-2 mt-4 text-gray-700 text-xl">
                  {challenge.keywords?.map((keyword: string) => (
                    <span
                      key={keyword}
                      className="bg-blue-100 text-blue-800 p-4 h-10 flex items-center rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex gap-6 mt-6 text-xl">
                  {!challenge.isFree && (
                    <span className="line-through text-red-500 font-semibold">
                      ₹{challenge.originalPrice}
                    </span>
                  )}
                  <span className="text-green-600 font-bold">
                    {challenge.isFree ? "FREE" : `₹${challenge.discountedPrice}`}
                  </span>
                </div>

                {/* Enroll Button */}
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition">
                  Register Now
                </button>
              </div>              {/* Right Image - Made much bigger and wider */}
              <img
                src="/images/challenges/innoventure_challenge.png"
                alt={challenge.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Challenge Banner */}
            <div className="bg-blue-100 text-blue-700 text-lg font-medium text-center p-4 rounded-md">
              Take the {challenge.title} challenge
            </div>

            {/* Timeline - placeholder for now */}
            {challenge.timeline && challenge.timeline.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Challenge Timeline</h3>
                {/* Add Timeline component when available */}
                <p className="text-gray-600">Timeline component will be displayed here</p>
              </div>
            )}

            {/* Tab Content - simplified for now */}
            <div className="space-y-4">
              {tabs.map((tab, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">{tab.label}</h3>
                  {tab.content}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            {/* Upgrade Card placeholder */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg mb-4">
              <h3 className="font-semibold">Upgrade Your Plan</h3>
              <p className="text-sm">Get access to premium features</p>
            </div>

            <h2 className="text-2xl font-bold text-blue-700 text-center mb-4 mt-5">
              Partners
            </h2>            <div className="space-y-6">
              {challenge.partners?.map((partner: any) => (
                <div
                  key={partner._id}
                  className="bg-blue-50 p-4 rounded-lg shadow-sm text-center hover:shadow-md transition"
                >                  <img
                    src={partner.imageLink}
                    alt={partner.name}
                    className="w-full h-24 object-cover mx-auto mb-2 rounded-lg border border-blue-300"
                    style={{ aspectRatio: '16/9' }}
                  />
                  <p className="text-lg font-medium text-blue-800">{partner.name}</p>
                  <a
                    href={partner.partnerLink}
                    className="text-sm text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>

            {/* Advertising Banner placeholder */}
            <div className="bg-yellow-100 p-4 rounded-lg mt-6 text-center">
              <p className="text-sm text-gray-700">Sponsored Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChallengeDetails;
