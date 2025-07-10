//src\admin\messages\page.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AdminMessages() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📧 Contact Messages</h1>
          <p className="text-gray-600">Total messages: {messages.length}</p>
          <p className="text-sm text-gray-500">Database: PostgreSQL (Neon)</p>
        </div>
        
        <div className="grid gap-6">
          {messages.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500 text-lg">No messages yet</p>
              <p className="text-sm text-gray-400">Try sending a message from the contact form</p>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{message.name}</h3>
                    <a href={`mailto:${message.email}`} className="text-blue-600 hover:text-blue-800">
                      {message.email}
                    </a>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">
                      {new Date(message.createdAt).toLocaleDateString('th-TH', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">📋 Subject: {message.subject}</h4>
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                </div>
                
                <div className="text-xs text-gray-400">
                  ID: {message.id}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}