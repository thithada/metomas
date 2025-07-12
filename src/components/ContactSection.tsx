// src/components/ContactSection.tsx
'use client'

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

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

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-800 leading-relaxed">
              I'm currently seeking internship opportunities in DevOps and
              Full-Stack Development. Let's connect!
            </p>
            
            <div className="space-y-6">
              <a
                href="mailto:madname00@gmail.com"
                className="flex items-center bg-white/90 backdrop-blur px-6 py-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg transform hover:scale-105 group"
              >
                <Mail className="w-5 h-5 mr-4 text-red-500 group-hover:text-white" />
                <span className="font-medium text-gray-900 group-hover:text-white">madname00@gmail.com</span>
              </a>
              
              <a
                href="tel:093-494-9511"
                className="flex items-center bg-white/90 backdrop-blur px-6 py-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-red-500 shadow-lg transform hover:scale-105 group"
              >
                <Phone className="w-5 h-5 mr-4 text-red-500 group-hover:text-white" />
                <span className="font-medium text-gray-900 group-hover:text-white">093-494-9511</span>
              </a>
            </div>
            
            <div className="flex space-x-6 pt-6">
              <a
                href="https://linkedin.com/in/thithada"
                className="bg-white/90 backdrop-blur p-4 rounded-2xl hover:bg-red-500 transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-red-500 shadow-lg group"
              >
                <Linkedin className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </a>
              <a
                href="https://github.com/thithada"
                className="bg-white/90 backdrop-blur p-4 rounded-2xl hover:bg-red-500 transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-red-500 shadow-lg group"
              >
                <Github className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-red-500 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Send a Message</h3>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur text-gray-900"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 bg-white/70 backdrop-blur resize-none text-gray-900"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isFormSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg flex items-center justify-center"
              >
                {isFormSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </>
                )}
              </button>
              
              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">✅ Message sent successfully!</p>
                  <p className="text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">❌ Failed to send message.</p>
                  <p className="text-sm">Please try again or contact me directly via email.</p>
                </div>
              )}
              
              {formStatus === 'validation' && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">⚠️ Please fill in all fields.</p>
                  <p className="text-sm">All fields are required to send your message.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// ===========================
