'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const heroGradient = theme === 'light' ? 'from-blue-600 to-blue-800' : 'from-blue-900 to-blue-950';
  const getAQuoteBg = theme === 'light' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gradient-to-r from-yellow-500 to-yellow-600';
  const getAQuoteHoverBg = theme === 'light' ? 'hover:from-yellow-500 hover:to-yellow-600' : 'hover:from-yellow-600 hover:to-yellow-700';
  const sellLicensesBg = theme === 'light' ? 'bg-gradient-to-r from-blue-800 to-blue-900' : 'bg-gradient-to-r from-blue-700 to-blue-800';
  const sellLicensesHoverBg = theme === 'light' ? 'hover:from-blue-900 hover:to-blue-950' : 'hover:from-blue-800 hover:to-blue-900';

  return (
    <section className={`relative bg-gradient-to-r ${heroGradient} text-white py-24 overflow-hidden`}>
      {/* Subtle Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: theme === 'light'
            ? ['radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)']
            : ['radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'],
          scale: [1, 1.2, 1],
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-poppins font-extrabold mb-6 tracking-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Sell Your Software Licenses with Ease
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-10 font-light"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Get top value for your unused software licenses in just a few clicks.
        </motion.p>
        <div className="flex justify-center gap-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#contact"
              scroll={true}
              className={`inline-block ${getAQuoteBg} text-gray-900 font-semibold py-4 px-8 rounded-full ${getAQuoteHoverBg} shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              Get a Quote
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="#how-it-works"
              scroll={true}
              className={`inline-block ${sellLicensesBg} text-white font-semibold py-4 px-8 rounded-full ${sellLicensesHoverBg} shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              Sell Licenses
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}