// src/Pages/Contact/index.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Child Components
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';

// Styles
import './Contact.css';

const Contact = () => {
  // Effect to add a class to the body for the gradient background
  useEffect(() => {
    document.body.classList.add('contact-page-background');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('contact-page-background');
    };
  }, []);

  return (
    <div>
      <HeroSection />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="glass-card p-8 md:p-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Column 1: Contact Form */}
            <ContactForm />
            
            {/* Column 2: Contact Details */}
            <ContactDetails />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;