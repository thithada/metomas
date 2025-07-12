// src/components/InterestsSection.tsx
'use client'

import React from 'react';
import InterestsModalSection from './InterestsModalSection';

interface Interest {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  backgroundImage?: string;
  theme: {
    background: string;
    accent: string;
    border: string;
    hover: string;
  };
}

interface InterestsSectionProps {
  selectedInterest?: Interest | null;
  handleInterestClick?: (interest: Interest) => void;
  setSelectedInterest?: (interest: Interest | null) => void;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ 
  selectedInterest, 
  handleInterestClick, 
  setSelectedInterest 
}) => {
  // Simply return the modal-based interests section
  // The props are optional now since the modal version handles its own state
  return <InterestsModalSection />;
};

export default InterestsSection;