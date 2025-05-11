'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import { useTheme } from 'next-themes';

const exampleQuestions = [
  'How do I sell my license?',
  'Is the process secure?',
  'How long does it take to get paid?',
];

export default function ChatWidget() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Hello! I’m here to help you with selling your software licenses. Ask me anything or click one of the example questions below.' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: message }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response from AI');
      }

      setMessages((prev) => [...prev, { role: 'ai', content: data.response }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'I’m sorry, I couldn’t process your request. Please try again or click one of the example questions.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  const buttonBg = theme === 'light' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-blue-700 to-blue-800';
  const panelBg = theme === 'light' ? 'bg-white/80' : 'bg-gray-800/80';
  const titleText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const questionText = theme === 'light' ? 'text-blue-600' : 'text-blue-400';
  const userMessageBg = theme === 'light' ? 'bg-blue-500' : 'bg-blue-700';
  const userMessageText = 'text-white';
  const aiMessageBg = theme === 'light' ? 'bg-gray-200' : 'bg-gray-600';
  const aiMessageText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const inputBg = theme === 'light' ? 'bg-white' : 'bg-gray-700';
  const inputText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const sendButtonBg = theme === 'light' ? 'bg-blue-600' : 'bg-blue-700';
  const sendButtonHoverBg = theme === 'light' ? 'hover:bg-blue-700' : 'hover:bg-blue-800';

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 ${buttonBg} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
      {isOpen && (
        <motion.div
          className={`absolute bottom-20 right-0 w-96 ${panelBg} p-6 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col max-h-[500px] border border-opacity-20 ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className={`text-xl font-semibold mb-4 ${titleText}`}>SoftSell Chatbot</h3>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.role === 'user'
                    ? `ml-auto ${userMessageBg} ${userMessageText}`
                    : `mr-auto ${aiMessageBg} ${aiMessageText}`
                }`}
                initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.content}
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                className={`p-3 rounded-lg max-w-[80%] mr-auto ${aiMessageBg} ${aiMessageText}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="flex items-center">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"
                  />
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
                    className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"
                  />
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
                    className="inline-block w-2 h-2 bg-blue-500 rounded-full"
                  />
                </span>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Example Questions */}
          <div className="mb-4">
            <p className={`text-sm ${titleText} mb-2 font-medium`}>Try these:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSend(question)}
                  className={`text-xs ${questionText} hover:underline bg-opacity-10 p-2 rounded-lg transition-all duration-300 transform hover:scale-105`}
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>
          {/* Input Area */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
              className={`flex-1 p-3 rounded-lg ${inputBg} ${inputText} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm`}
              placeholder="Ask a question..."
              disabled={isLoading}
            />
            <motion.button
              onClick={() => handleSend(input)}
              className={`p-3 ${sendButtonBg} text-white rounded-lg ${sendButtonHoverBg} transition-all duration-300 disabled:opacity-50 shadow-sm`}
              disabled={isLoading || !input.trim()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}