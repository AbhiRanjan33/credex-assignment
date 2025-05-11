'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'IT Manager',
    company: 'TechCorp',
    quote: 'SoftSell made selling our unused licenses a breeze. Fast, secure, and great value!',
  },
  {
    name: 'Sarah Johnson',
    role: 'Procurement Lead',
    company: 'Innovate Ltd',
    quote: 'The process was seamless, and the support team was incredibly helpful.',
  },
];

export default function Testimonials() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sectionBg = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const titleText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const cardBg = theme === 'light' ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-gradient-to-br from-gray-700 to-gray-800';
  const quoteText = theme === 'light' ? 'text-gray-600' : 'text-gray-300';
  const nameText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const roleText = theme === 'light' ? 'text-gray-500' : 'text-gray-400';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-4xl font-poppins font-bold text-center mb-16 ${titleText}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`${cardBg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <p className={`${quoteText} mb-4 italic`}>"{testimonial.quote}"</p>
              <p className={`font-semibold ${nameText}`}>{testimonial.name}</p>
              <p className={`text-sm ${roleText}`}>{testimonial.role}, {testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}