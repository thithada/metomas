// src/components/InterestsSection.tsx
'use client'

import React from 'react';

interface Interest {
  name: string;
  emoji: string;
  description: string;
  theme: {
    background: string;
    accent: string;
    border: string;
    hover: string;
  };
}

interface InterestsSectionProps {
  selectedInterest: Interest | null;
  handleInterestClick: (interest: Interest) => void;
  setSelectedInterest: (interest: Interest | null) => void;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ 
  selectedInterest, 
  handleInterestClick, 
  setSelectedInterest 
}) => {
  const interests: Interest[] = [
    {
      name: "Fitness & Exercise",
      emoji: "💪",
      description: "Staying active and maintaining physical health through regular workouts and exercise routines.",
      theme: {
        background: "bg-gradient-to-br from-green-50 to-emerald-100",
        accent: "text-green-600",
        border: "border-green-300",
        hover: "hover:bg-green-500"
      }
    },
    {
      name: "Travel & Adventure",
      emoji: "✈️",
      description: "Exploring new places, cultures, and experiences around the world.",
      theme: {
        background: "bg-gradient-to-br from-blue-50 to-cyan-100",
        accent: "text-blue-600",
        border: "border-blue-300",
        hover: "hover:bg-blue-500"
      }
    },
    {
      name: "Finance & Business",
      emoji: "💼",
      description: "Understanding markets, investments, and business strategies for financial growth.",
      theme: {
        background: "bg-gradient-to-br from-yellow-50 to-amber-100",
        accent: "text-yellow-600",
        border: "border-yellow-300",
        hover: "hover:bg-yellow-500"
      }
    },
    {
      name: "Self-Development",
      emoji: "🧠",
      description: "Continuous learning and personal growth through books, courses, and new experiences.",
      theme: {
        background: "bg-gradient-to-br from-purple-50 to-violet-100",
        accent: "text-purple-600",
        border: "border-purple-300",
        hover: "hover:bg-purple-500"
      }
    },
    {
      name: "Reading Books",
      emoji: "📚",
      description: "Expanding knowledge and imagination through various genres of literature and non-fiction.",
      theme: {
        background: "bg-gradient-to-br from-orange-50 to-red-100",
        accent: "text-orange-600",
        border: "border-orange-300",
        hover: "hover:bg-orange-500"
      }
    },
    {
      name: "Gaming",
      emoji: "🎮",
      description: "Enjoying video games as entertainment and exploring game design and development.",
      theme: {
        background: "bg-gradient-to-br from-pink-50 to-rose-100",
        accent: "text-pink-600",
        border: "border-pink-300",
        hover: "hover:bg-pink-500"
      }
    }
  ];

  return (
    <section 
      id="interests" 
      className={`py-20 px-6 transition-all duration-500 ${
        selectedInterest ? selectedInterest.theme.background : ''
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4">Interests</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-800">
            Click on any interest to learn more about my passion
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {interests.map((interest, index) => (
            <div
              key={index}
              onClick={() => handleInterestClick(interest)}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedInterest?.name === interest.name
                  ? `bg-white shadow-2xl border-2 ${interest.theme.border} scale-105`
                  : `bg-white/90 backdrop-blur ${interest.theme.hover} hover:text-white border border-gray-200 hover:border-red-500 shadow-lg hover:shadow-xl`
              }`}
              style={{
                borderRadius: '1rem',
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              <div className="text-3xl mb-3">{interest.emoji}</div>
              <span className={`font-medium text-lg transition-colors ${
                selectedInterest?.name === interest.name 
                  ? interest.theme.accent 
                  : 'text-gray-900 group-hover:text-white'
              }`}>
                {interest.name}
              </span>
            </div>
          ))}
        </div>

        {/* Interest Detail */}
        {selectedInterest && (
          <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-2xl border-2 border-gray-200 transform animate-in fade-in duration-500">
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedInterest.emoji}</div>
              <h3 className={`text-3xl font-bold mb-4 ${selectedInterest.theme.accent}`}>
                {selectedInterest.name}
              </h3>
              <p className="text-gray-800 text-xl leading-relaxed max-w-3xl mx-auto">
                {selectedInterest.description}
              </p>
              <button
                onClick={() => setSelectedInterest(null)}
                className="mt-6 px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InterestsSection;
