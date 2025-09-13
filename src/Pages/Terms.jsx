import React from 'react';
import { FaFileContract, FaGavel, FaShieldAlt } from 'react-icons/fa';

// This component includes the themed hero section and content layout directly,
// creating a complete and consistent page.
const Terms = () => (
  <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
    {/* 1. Hero Section */}
    <section className="relative text-slate-900 text-center py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-white via-sky-100 to-slate-100">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute w-96 h-96 bg-violet-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-sky-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-0"></div>
      </div>
      
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Terms and Conditions
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Please read these terms carefully. By using our Service, you agree to be bound by this agreement.
        </p>
        <p className="mt-2 text-sm text-slate-500">Last Updated: September 12, 2025</p>
      </div>
    </section>

    {/* 2. Main Terms Content */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="prose prose-lg max-w-none">
            <p>Welcome to Go-X. These Terms and Conditions ("Terms") govern your access to and use of the Go-X application and services ("Service") provided by TensorGo Inc. ("TensorGo", "we", "us").</p>
            
            <h2 id="your-account">1. Your Account</h2>
            <p>To use our Service, you must create an account. You agree to provide accurate, complete, and current information during registration and to update such information to keep it accurate. You are responsible for safeguarding your password and for all activities that occur under your account.</p>

            <h2 id="use-of-service">2. Use of the Service</h2>
            <p>TensorGo grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your internal business purposes, subject to these Terms.</p>
            <h3>Acceptable Use Policy</h3>
            <p>You agree not to misuse the Service or help anyone else to do so. You must not, and must not attempt to, do the following things:</p>
            <ul>
                <li>Probe, scan, or test the vulnerability of any system or network.</li>
                <li>Breach or otherwise circumvent any security or authentication measures.</li>
                <li>Access, tamper with, or use non-public areas of the Service.</li>
                <li>Reverse engineer or decompile any part of the Service.</li>
                <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
            </ul>

            <h2 id="user-data">3. User Data & Privacy <FaShieldAlt className="inline-block ml-2 text-slate-500" /></h2>
            <p>You retain all rights and ownership of your content and data ("User Data"). We do not claim any ownership of it. These Terms do not grant us any rights to your User Data except for the limited rights needed to provide the Service.</p>
            <p>Our <a href="/privacy">Privacy Policy</a> explains how we collect, use, and protect the information you provide to us. By using the Service, you agree to be bound by our Privacy Policy.</p>
            
            <h2 id="intellectual-property">4. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of TensorGo and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of TensorGo.</p>

            <h2 id="termination">5. Termination</h2>
            <p>You are free to stop using our Service at any time. We also reserve the right to suspend or terminate your access to the Service with notice to you if you are in breach of these Terms, or if your use of the Service could cause real risk of harm or loss to us or other users.</p>
            
            <h2 id="disclaimers">6. Disclaimers and Limitation of Liability <FaGavel className="inline-block ml-2 text-slate-500" /></h2>
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. To the fullest extent permitted by law, TensorGo makes no warranties, either express or implied, about the Service. TensorGo will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>

            <h2 id="contact-us">7. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><a href="mailto:legal@tensorgo.com">info@tensorgo.com</a></p>
          </div>
        </div>
      </div>
    </section>

    {/* --- STYLES FOR ANIMATIONS & EFFECTS --- */}
    <style jsx>{`
      /* Using a basic prose class for readability */
      .prose h2 {
        font-size: 1.875rem; /* 30px */
        font-weight: 700;
        color: #1e293b; /* slate-800 */
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0; /* slate-200 */
        padding-bottom: 0.5rem;
      }
      .prose h3 {
        font-size: 1.25rem; /* 20px */
        font-weight: 600;
        color: #334155; /* slate-700 */
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      .prose p, .prose ul {
        color: #475569; /* slate-600 */
        line-height: 1.75;
      }
      .prose ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .prose li {
        margin-bottom: 0.5rem;
      }
      .prose a {
        color: #0284c7; /* sky-600 */
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .prose a:hover {
        text-decoration: underline;
        color: #0369a1; /* sky-700 */
      }

      /* --- Blob Animation --- */
      @keyframes blob {
        0% { transform: scale(1) translate(0, 0); }
        33% { transform: scale(1.1) translate(30px, -50px); }
        66% { transform: scale(0.9) translate(-20px, 20px); }
        100% { transform: scale(1) translate(0, 0); }
      }
      .animate-blob { animation: blob 8s infinite ease-in-out; }
      .animation-delay-2000 { animation-delay: 2s; }
      
      /* --- General Animations --- */
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0; /* Start hidden */
      }
    `}</style>
  </div>
);

export default Terms;