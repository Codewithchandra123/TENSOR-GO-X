// src/Pages/Pricing/components/FaqSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data';
import { FiChevronDown } from 'react-icons/fi';

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-6 font-semibold text-lg text-white"
      >
        <span>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-6 text-slate-300"
          >
            <p className="pb-6">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => (
  <section className="py-16 sm:py-20">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;