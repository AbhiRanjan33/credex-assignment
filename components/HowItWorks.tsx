'use client';

import { motion } from 'framer-motion';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const steps = [
  {
    icon: Upload,
    title: 'Upload License',
    description: 'Submit your software license details securely.',
  },
  {
    icon: DollarSign,
    title: 'Get Valuation',
    description: 'Receive a fair market valuation within 24 hours.',
  },
  {
    icon: CheckCircle,
    title: 'Get Paid',
    description: 'Complete the sale and get paid quickly.',
  },
];

export default function HowItWorks() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sectionBg = theme === 'light' ? 'bg-gray-50' : 'bg-gray-900';
  const titleText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const cardBg = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const iconColor = theme === 'light' ? 'text-blue-600' : 'text-blue-400';
  const descriptionText = theme === 'light' ? 'text-gray-600' : 'text-gray-300';

  return (
    <section id="how-it-works" className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-4xl font-poppins font-bold text-center mb-16 ${titleText}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`text-center ${cardBg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className={`w-14 h-14 ${iconColor}`} />
              </motion.div>
              <h3 className={`text-2xl font-semibold mb-3 ${titleText}`}>
                {step.title}
              </h3>
              <p className={descriptionText}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}