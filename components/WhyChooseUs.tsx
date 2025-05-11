'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, DollarSign } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Your data and transactions are protected with top-tier security.',
  },
  {
    icon: Clock,
    title: 'Fast Valuations',
    description: 'Get your license valuation in under 24 hours.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our team is here to guide you every step of the way.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Offers',
    description: 'We ensure you get the best market value for your licenses.',
  },
];

export default function WhyChooseUs() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sectionBg = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
  const titleText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const cardBg = theme === 'light' ? 'bg-white' : 'bg-gray-700';
  const iconColor = theme === 'light' ? 'text-blue-600' : 'text-blue-400';
  const descriptionText = theme === 'light' ? 'text-gray-600' : 'text-gray-300';

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
          Why Choose SoftSell?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${cardBg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <feature.icon className={`w-12 h-12 ${iconColor}`} />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-3 ${titleText}`}>
                {feature.title}
              </h3>
              <p className={descriptionText}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}