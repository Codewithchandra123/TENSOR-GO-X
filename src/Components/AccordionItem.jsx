// src/components/AccordionItem.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-white/10 last-of-type:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6 px-8 hover:bg-white/5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <span className="flex items-center gap-x-4">
          <span className="text-sky-300">{icon}</span>
          {/* FONT & SIZE: Title is now larger and bolder for better hierarchy */}
          <span className="text-xl font-semibold text-gray-100">{title}</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {/* ALIGNMENT: Content padding matches the button's horizontal padding perfectly */}
            <div className="pt-2 pb-8 px-8 prose prose-lg prose-invert max-w-none prose-a:text-sky-400 hover:prose-a:text-sky-300 prose-p:text-gray-300">
              {children}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;