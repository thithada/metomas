// src/components/Footer.tsx
'use client'

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white/90 backdrop-blur border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-700 text-lg">
          © 2024 Thithada Islam. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
