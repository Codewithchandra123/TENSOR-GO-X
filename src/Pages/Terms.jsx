// src/pages/Terms.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaGavel, FaShieldAlt, FaUserCheck, FaBan, FaHeadset } from 'react-icons/fa';
import AccordionItem from '../components/AccordionItem';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 font-sans text-white overflow-x-hidden">
      {/* --- HERO SECTION (No Changes) --- */}
      <section className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-20 text-center md:text-left">
          <motion.h1 className="font-bold text-4xl sm:text-5xl md:text-7xl text-white">Terms and Conditions</motion.h1>
          <motion.p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl">Please read these terms carefully. By using our Service, you agree to be bound by this agreement.</motion.p>
      </section>

      {/* --- REFINED MAIN CONTENT SECTION --- */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // ALIGNMENT: Padding removed from the card itself for edge-to-edge internal content
          className="bg-white/5 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Introduction block with its own consistent padding */}
          <div className="p-8 border-b border-white/10">
            <p className="text-gray-200 text-lg leading-relaxed">
              Welcome to Go-X. These Terms and Conditions ("Terms") govern your access to and use of the Go-X application and services ("Service") provided by TensorGo Inc.
            </p>
          </div>

          <AccordionItem title="Your Account" icon={<FaUserCheck size={22} />} defaultOpen={true}>
            <p>To use our Service, you must create an account. You agree to provide accurate, complete, and current information during registration. You are responsible for safeguarding your password and for all activities that occur under your account.</p>
          </AccordionItem>
          
          <AccordionItem title="Use of the Service" icon={<FaFileContract size={22} />}>
            <p>TensorGo grants you a limited, non-exclusive, non-transferable license to use the Service for internal business purposes, subject to these Terms.</p>
            <h3>Acceptable Use Policy</h3>
            <ul>
                <li>Probe, scan, or test the vulnerability of any system or network.</li>
                <li>Breach or otherwise circumvent any security or authentication measures.</li>
                <li>Use the Service for any illegal purpose or in violation of any law.</li>
            </ul>
          </AccordionItem>
          
          <AccordionItem title="User Data & Privacy" icon={<FaShieldAlt size={22} />}>
            <p>You retain all rights and ownership of your content. Our <a href="/privacy">Privacy Policy</a> explains how we collect, use, and protect the information you provide.</p>
          </AccordionItem>
          
          <AccordionItem title="Disclaimers and Liability" icon={<FaGavel size={22} />}>
            <p>The Service is provided on an "AS IS" basis. To the fullest extent permitted by law, TensorGo makes no warranties, either express or implied, and will not be liable for any indirect, incidental, or consequential damages.</p>
          </AccordionItem>
          
          <AccordionItem title="Contact Us" icon={<FaHeadset size={22} />}>
            <p>If you have any questions, please contact us at: <a href="mailto:info@tensorgo.com">info@tensorgo.com</a>.</p>
          </AccordionItem>
        </motion.div>
      </section>
    </div>
  );
};

export default Terms;