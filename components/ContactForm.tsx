'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ContactForm() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.licenseType) newErrors.licenseType = 'License type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
    }
  };

  const sectionBg = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
  const titleText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const labelText = theme === 'light' ? 'text-gray-900' : 'text-gray-300';
  const inputBg = theme === 'light' ? 'bg-white' : 'bg-gray-700';
  const inputBorder = theme === 'light' ? 'border-gray-300' : 'border-gray-600';
  const inputText = theme === 'light' ? 'text-gray-900' : 'text-white';
  const buttonBg = theme === 'light' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-blue-700 to-blue-800';
  const buttonHoverBg = theme === 'light' ? 'hover:from-blue-700 hover:to-blue-800' : 'hover:from-blue-800 hover:to-blue-900';

  return (
    <section id="contact" className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-4xl font-poppins font-bold text-center mb-16 ${titleText}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="max-w-lg mx-auto bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 relative">
              <motion.label
                className={`block text-sm font-medium mb-2 ${labelText}`}
                htmlFor="name"
                animate={{ y: formData.name ? -10 : 0, fontSize: formData.name ? '0.75rem' : '1rem' }}
                transition={{ duration: 0.3 }}
              >
                Name
              </motion.label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${inputBg} ${inputBorder} ${inputText} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-6 relative">
              <motion.label
                className={`block text-sm font-medium mb-2 ${labelText}`}
                htmlFor="email"
                animate={{ y: formData.email ? -10 : 0, fontSize: formData.email ? '0.75rem' : '1rem' }}
                transition={{ duration: 0.3 }}
              >
                Email
              </motion.label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${inputBg} ${inputBorder} ${inputText} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6 relative">
              <motion.label
                className={`block text-sm font-medium mb-2 ${labelText}`}
                htmlFor="company"
                animate={{ y: formData.company ? -10 : 0, fontSize: formData.company ? '0.75rem' : '1rem' }}
                transition={{ duration: 0.3 }}
              >
                Company (Optional)
              </motion.label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${inputBg} ${inputBorder} ${inputText} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
            </div>
            <div className="mb-6 relative">
              <motion.label
                className={`block text-sm font-medium mb-2 ${labelText}`}
                htmlFor="licenseType"
                animate={{ y: formData.licenseType ? -10 : 0, fontSize: formData.licenseType ? '0.75rem' : '1rem' }}
                transition={{ duration: 0.3 }}
              >
                License Type
              </motion.label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${inputBg} ${inputBorder} ${inputText} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              >
                <option value="">Select License Type</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Adobe">Adobe</option>
                <option value="Autodesk">Autodesk</option>
                <option value="Other">Other</option>
              </select>
              {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
            </div>
            <div className="mb-6 relative">
              <motion.label
                className={`block text-sm font-medium mb-2 ${labelText}`}
                htmlFor="message"
                animate={{ y: formData.message ? -10 : 0, fontSize: formData.message ? '0.75rem' : '1rem' }}
                transition={{ duration: 0.3 }}
              >
                Message
              </motion.label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${inputBg} ${inputBorder} ${inputText} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                rows={4}
              />
            </div>
            <motion.button
              type="submit"
              className={`w-full ${buttonBg} text-white py-3 rounded-lg ${buttonHoverBg} shadow-lg transition-all duration-300 transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}