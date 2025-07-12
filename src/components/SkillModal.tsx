// src/components/SkillModal.tsx
'use client'

import React, { useEffect } from 'react';

interface Skill {
  name: string;
  logo: string | React.ReactNode;
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
  // Prevent body scroll when modal is open และป้องกันการกระตุก
  useEffect(() => {
    if (isModalOpen) {
      // เก็บ scroll position ปัจจุบัน
      const scrollY = window.scrollY;
      
      // ตั้งค่า body ให้ไม่สามารถ scroll ได้และรักษา position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // คืนค่า body กลับสู่สถานะเดิม
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        // คืนค่า scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModalOpen]);

  if (!isModalOpen || !selectedSkill) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-500 ease-out opacity-100"
      style={{
        animation: isModalOpen ? 'fadeInModal 0.5s ease-out forwards' : 'none'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeSkillModal();
        }
      }}
    >
      <div 
        className="bg-white/95 backdrop-blur rounded-2xl p-10 max-w-md w-full relative shadow-2xl border-2 border-gray-200 transform transition-all duration-500 ease-out opacity-100 scale-100 translate-y-0"
        style={{
          animation: isModalOpen ? 'slideInModal 0.5s ease-out forwards' : 'none'
        }}
      >
        <button
          onClick={closeSkillModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-500/20 hover:bg-gray-500/30 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-700"
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
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 drop-shadow-lg">
            {typeof selectedSkill.logo === 'string' ? (
              <span className="text-5xl font-bold text-gray-900">
                {selectedSkill.logo}
              </span>
            ) : (
              <div className="text-gray-900" style={{ transform: 'scale(1.5)' }}>
                {selectedSkill.logo}
              </div>
            )}
          </div>

          <h3 className="text-3xl font-bold text-red-800 mb-2 drop-shadow-lg" style={{ letterSpacing: '1px' }}>
            {selectedSkill.name}
          </h3>
          <p className="text-red-800 text-sm mb-6 font-medium uppercase tracking-wide">
            {selectedSkill.category}
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            {selectedSkill.description}
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInModal {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes slideInModal {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillModal;