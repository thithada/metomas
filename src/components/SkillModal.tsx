// src/components/SkillModal.tsx
'use client'

import React from 'react';

interface Skill {
  name: string;
  logo: string;
  category: string;
  description: string;
}

interface SkillModalProps {
  isModalOpen: boolean;
  selectedSkill: Skill | null;
  closeSkillModal: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ 
  isModalOpen, 
  selectedSkill, 
  closeSkillModal 
}) => {
  if (!isModalOpen || !selectedSkill) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeSkillModal();
        }
      }}
    >
      <div className="bg-white rounded-2xl p-10 max-w-md w-full relative border shadow-2xl">
        <button
          onClick={closeSkillModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border">
            <span className="text-lg font-bold text-white">
              {selectedSkill.logo}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {selectedSkill.name}
          </h3>
          <p className="text-red-500 text-sm mb-6 font-medium uppercase tracking-wide">
            {selectedSkill.category}
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            {selectedSkill.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
