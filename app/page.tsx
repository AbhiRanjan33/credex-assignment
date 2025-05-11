'use client';

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <>
      
      <motion.div
        className="min-h-screen bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ThemeToggle />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <Footer />
        <ChatWidget />
      </motion.div>
    </>
  );
}