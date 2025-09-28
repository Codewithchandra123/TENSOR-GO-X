// src/Pages/Careers/components/JobOpeningsSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { jobOpenings } from '../data'; // Import your data
import './JobOpeningsSection.css'; // We will create this new CSS file

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' } }
};

const JobOpeningsSection = () => {
  return (
    <section id="openings" className="job-openings-section">
      <div className="container mx-auto py-20 md:py-24 px-6">
        {/* --- Heading --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Current Openings</h2>
          <p className="mt-4 text-lg text-white/80">Find your place on our team.</p>
        </motion.div>
        
        {/* --- Job List --- */}
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {jobOpenings.map((job) => (
            <motion.div
              key={job.title}
              className="job-card-wrapper"
              variants={itemVariants}
              style={{
                '--glow-color-from': job.gradient.from,
                '--glow-color-to': job.gradient.to,
              }}
            >
              <div className="job-card">
                <div className="icon-wrapper">
                  {React.cloneElement(job.icon, { className: 'w-8 h-8 text-white' })}
                </div>
                <div className="flex-grow text-left">
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <p className="text-blue-400 mt-1 mb-3 font-medium">{job.location}</p>
                  <p className="text-white/70 leading-relaxed">{job.description}</p>
                </div>
                <a
                  href={`mailto:careers@tensorgo.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="primary-button group mt-4 md:mt-0"
                >
                  Apply Now
                  <span className="button-arrow"><FaArrowRight /></span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* --- "Don't see a role?" Card --- */}
        <motion.div
          className="mt-16 text-center p-8 max-w-3xl mx-auto glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <h3 className="font-bold text-2xl text-white">Don't see a role that fits?</h3>
          <p className="mt-2 text-lg text-white/80">
            We're always looking for talented and passionate people. Send your resume to our talent team!
          </p>
          <a href="mailto:info@tensorgo.com" className="inline-block mt-4 font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300">
            info@tensorgo.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JobOpeningsSection; 