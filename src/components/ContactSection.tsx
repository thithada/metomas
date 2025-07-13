// src/components/ContactSection.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Send, MessageCircle, Sword, X } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormStatus('');

    try {
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setFormStatus('validation');
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setFormStatus(''), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    } finally {
      setIsFormSubmitting(false);
    }
  };

  // Handle modal open
  const handleOpenModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowModal(true);
      setIsTransitioning(false);
    }, 150);
  };

  // Handle modal close
  const closeModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowModal(false);
      setFormStatus('');
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [showModal]);

  return (
    <>
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4 drop-shadow-lg" style={{ letterSpacing: '1px' }}>
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-red-800 mx-auto shadow-md shadow-red-800/50"></div>
            <p className="text-xl text-gray-600 mt-6 font-medium drop-shadow-sm" style={{ letterSpacing: '0.3px' }}>
              Ready to forge new partnerships and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="bg-black/95 p-8 rounded-lg border-l-4 border-red-800 shadow-xl">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-4" style={{ letterSpacing: '0.5px' }}>
                  The Way of the Developer
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed font-medium" style={{ letterSpacing: '0.2px' }}>
                  I'm currently seeking <span className="text-red-800 font-bold">internship opportunities</span> in DevOps and
                  Full-Stack Development. Let's connect and create something powerful together!
                </p>
              </div>
            </div>
            
            {/* Send a Message Box */}
            <div 
              onClick={handleOpenModal}
              className="cursor-pointer bg-white/95 backdrop-blur rounded-lg p-8 shadow-xl border-2 border-gray-200 hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-red-800 group h-full"
              style={{ transition: 'all 0.4s ease-in-out' }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-gray-900 group-hover:text-red-800 group-hover:drop-shadow-lg transition-all duration-300">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-800 drop-shadow-sm transition-all duration-300" style={{ letterSpacing: '0.5px' }}>
                  Send a Message
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-500 ease-out ${
            showModal && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: showModal && !isTransitioning ? 'fadeInModal 0.5s ease-out forwards' : 'none'
          }}
          onClick={closeModal}
        >
          <div 
            className={`bg-white/95 backdrop-blur rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gray-200 transform transition-all duration-500 ease-out ${
              showModal && !isTransitioning ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
            }`}
            style={{
              animation: showModal && !isTransitioning ? 'slideInModal 0.5s ease-out forwards' : 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-red-800/30 transition-all duration-300 border border-red-800/30 hover:border-red-800"
              >
                <X className="w-6 h-6 text-gray-700 hover:text-red-800 transition-colors duration-300" />
              </button>
              
              {/* Modal Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-red-800 drop-shadow-lg">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-red-800 drop-shadow-lg" style={{ letterSpacing: '1px' }}>
                  Send a Message
                </h3>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2" style={{ letterSpacing: '0.5px' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-800/20 transition-all duration-300 bg-white/90 backdrop-blur text-gray-900 font-medium"
                      placeholder="Your name"
                      style={{ letterSpacing: '0.3px' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2" style={{ letterSpacing: '0.5px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-800/20 transition-all duration-300 bg-white/90 backdrop-blur text-gray-900 font-medium"
                      placeholder="your.email@example.com"
                      style={{ letterSpacing: '0.3px' }}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2" style={{ letterSpacing: '0.5px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-800/20 transition-all duration-300 bg-white/90 backdrop-blur text-gray-900 font-medium"
                    placeholder="What's this about?"
                    style={{ letterSpacing: '0.3px' }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2" style={{ letterSpacing: '0.5px' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-800/20 transition-all duration-300 bg-white/90 backdrop-blur resize-none text-gray-900 font-medium"
                    placeholder="Your message here..."
                    style={{ letterSpacing: '0.3px' }}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isFormSubmitting}
                  className="w-full bg-black hover:bg-red-800 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-105 disabled:transform-none shadow-lg flex items-center justify-center border-2 border-red-800 hover:border-white group"
                  style={{ 
                    letterSpacing: '0.5px',
                    boxShadow: '0 0 15px rgba(153, 27, 27, 0.4)'
                  }}
                >
                  {isFormSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
                
                <div className="text-center">
                  <p className="text-gray-600 font-medium" style={{ letterSpacing: '0.3px' }}>
                    or <a href="mailto:madname00@gmail.com" className="text-red-800 hover:text-red-600 font-bold underline transition-colors duration-300">madname00@gmail.com</a>
                  </p>
                </div>
                
                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="bg-black/95 border-2 border-green-600 text-white px-6 py-4 rounded-lg shadow-lg">
                    <p className="font-bold text-green-400" style={{ letterSpacing: '0.3px' }}>✅ Message sent successfully!</p>
                    <p className="text-sm text-gray-300 mt-1">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-black/95 border-2 border-red-600 text-white px-6 py-4 rounded-lg shadow-lg">
                    <p className="font-bold text-red-400" style={{ letterSpacing: '0.3px' }}>❌ Failed to send message.</p>
                    <p className="text-sm text-gray-300 mt-1">Please try again or contact me directly via email.</p>
                  </div>
                )}
                
                {formStatus === 'validation' && (
                  <div className="bg-black/95 border-2 border-yellow-600 text-white px-6 py-4 rounded-lg shadow-lg">
                    <p className="font-bold text-yellow-400" style={{ letterSpacing: '0.3px' }}>⚠️ Please fill in all fields.</p>
                    <p className="text-sm text-gray-300 mt-1">All fields are required to send your message.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
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
        
        .group:hover {
          box-shadow: 0 0 15px rgba(153, 27, 27, 0.4) !important;
        }
        
        .group {
          border-style: solid !important;
        }
        
        input:focus, textarea:focus {
          box-shadow: 0 0 10px rgba(153, 27, 27, 0.3) !important;
        }
      `}</style>
    </>
  );
};

export default ContactSection;