// src/app/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InterestsSection from '@/components/InterestsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SkillModal from '@/components/SkillModal';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
      
      setShowScrollTop(currentScrollY > 500);
      setLastScrollY(currentScrollY);
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeSkillModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isModalOpen, lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "hero") {
      scrollToTop();
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  const handleInterestClick = (interest) => {
    setSelectedInterest(selectedInterest?.name === interest.name ? null : interest);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation 
        isNavVisible={isNavVisible}
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
      />
      
      <HeroSection 
        isVisible={isVisible}
        scrollToSection={scrollToSection}
      />
      
      <AboutSection />
      
      <InterestsSection 
        selectedInterest={selectedInterest}
        handleInterestClick={handleInterestClick}
        setSelectedInterest={setSelectedInterest}
      />
      
      <ProjectsSection />
      
      <SkillsSection 
        openSkillModal={openSkillModal}
      />
      
      <ContactSection />
      
      <Footer />
      
      <SkillModal 
        isModalOpen={isModalOpen}
        selectedSkill={selectedSkill}
        closeSkillModal={closeSkillModal}
      />
      
      <ScrollToTopButton 
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default Portfolio;