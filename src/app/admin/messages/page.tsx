// src/app/admin/messages/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Calendar, User, MessageSquare, Eye, Trash2, RefreshCw } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

const AdminMessagesPage = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ตรวจสอบการ authentication
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('admin_logged_in');
      const token = localStorage.getItem('admin_token');
      
      if (!isLoggedIn || !token) {
        window.location.href = '/admin';
        return;
      }
      
      setIsAuthenticated(true);
    };

    checkAuth();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', {
        method: 'DELETE',
      });
      
      localStorage.removeItem('admin_logged_in');
      localStorage.removeItem('admin_token');
      window.location.href = '/admin';
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout ถึงจะ error
      localStorage.removeItem('admin_logged_in');
      localStorage.removeItem('admin_token');
      window.location.href = '/admin';
    }
  };

  // Fetch messages from API
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/messages');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Delete message
  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete message');
      }
      
      setMessages(messages.filter(msg => msg.id !== id));
      setShowModal(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete message');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const openMessageModal = (message: ContactMessage) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 animate-spin text-red-800 mx-auto mb-4" />
          <p className="text-gray-600 text-xl">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 animate-spin text-red-800 mx-auto mb-4" />
          <p className="text-gray-600 text-xl">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-600 text-xl mb-4">Error: {error}</p>
          <button 
            onClick={fetchMessages}
            className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-red-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-red-800 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-red-800 text-white px-4 py-2 rounded-lg font-bold">
                {messages.length} Total Messages
              </span>
              <button
                onClick={fetchMessages}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {messages.length === 0 ? (
          <div className="text-center py-16">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Messages Yet</h2>
            <p className="text-gray-500">Contact messages will appear here when received.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((message) => (
              <div 
                key={message.id}
                className="bg-white rounded-lg shadow-lg border-l-4 border-red-800 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openMessageModal(message)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-red-800 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">{message.name}</h3>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(message.createdAt)}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email</label>
                      <p className="text-gray-900 font-medium">{message.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Subject</label>
                      <p className="text-gray-900 font-medium">{message.subject}</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Message Preview</label>
                    <p className="text-gray-700 line-clamp-3">
                      {message.message.length > 150 
                        ? `${message.message.substring(0, 150)}...` 
                        : message.message
                      }
                    </p>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <button className="text-red-800 hover:text-red-600 font-semibold flex items-center transition-colors">
                      <Eye className="w-4 h-4 mr-1" />
                      View Full Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Message Modal */}
      {showModal && selectedMessage && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <MessageSquare className="w-8 h-8 text-red-800 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Message Details</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Message Content */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Name</label>
                    <p className="text-xl font-bold text-gray-900 bg-gray-50 p-3 rounded">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Email</label>
                    <p className="text-xl font-bold text-gray-900 bg-gray-50 p-3 rounded">
                      <a href={`mailto:${selectedMessage.email}`} className="text-red-800 hover:underline">
                        {selectedMessage.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Subject</label>
                  <p className="text-xl font-bold text-gray-900 bg-gray-50 p-3 rounded">{selectedMessage.subject}</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Message</label>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">{selectedMessage.message}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <label className="font-semibold uppercase tracking-wide">Received</label>
                    <p>{formatDate(selectedMessage.createdAt)}</p>
                  </div>
                  <div>
                    <label className="font-semibold uppercase tracking-wide">Message ID</label>
                    <p className="font-mono">{selectedMessage.id}</p>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => deleteMessage(selectedMessage.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Message
                </button>
                
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </a>
                  <button
                    onClick={closeModal}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AdminMessagesPage;