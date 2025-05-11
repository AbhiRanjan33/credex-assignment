'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!theme) {
      setTheme('light');
    }
  }, [theme, setTheme]);

  if (!mounted) {
    // Render a placeholder with the same dimensions to avoid layout shift
    return <div className="fixed top-4 right-4 p-4 rounded-full w-14 h-14" />;
  }

  const buttonBg = theme === 'light' ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-gradient-to-r from-gray-700 to-gray-900';
  const iconColor = theme === 'light' ? 'text-yellow-300' : 'text-white';

  return (
    <motion.button
      onClick={() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      }}
      className={`fixed top-4 right-4 p-4 ${buttonBg} rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 z-[100]`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, rotate: theme === 'light' ? 0 : 360 }}
      transition={{ 
        opacity: { duration: 0.5, delay: 0.2 },
        scale: { duration: 0.5, delay: 0.2 },
        rotate: { duration: 0.5 }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'light' ? <Moon className={`w-6 h-6 ${iconColor}`} /> : <Sun className={`w-6 h-6 ${iconColor}`} />}
    </motion.button>
  );
}