import React from 'react';
import { FaLock, FaUserShield, FaServer, FaHandshake } from 'react-icons/fa';

// This component replaces the need for a separate PageLayout for this specific design,
// as it includes the themed hero section and content layout directly.
const Privacy = () => (
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
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Your privacy is foundational to our technology. We are committed to transparency in how we handle and protect your data.
        </p>
        <p className="mt-2 text-sm text-slate-500">Last Updated: September 12, 2025</p>
      </div>
    </section>

    {/* 2. Main Policy Content */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="prose prose-lg max-w-none">
            <p>This Privacy Policy describes how TensorGo Inc. ("TensorGo", "we", "us", or "our") collects, uses, and discloses your information in connection with your use of our Go-X application, websites, and related services (collectively, the "Service"). Your trust is our most important asset, and we are committed to protecting your privacy.</p>
            
            <h2 id="information-we-collect">Information We Collect</h2>
            <p>To provide and improve our Service, we collect information in several ways:</p>
            
            <h3>1. Information You Provide to Us</h3>
            <ul>
              <li><strong>Account Information:</strong> When you register for an account, we collect personal information such as your name, email address, company name, and password.</li>
              <li><strong>Payment Information:</strong> If you subscribe to a paid plan, our third-party payment processors will collect your payment card information. We do not store this information on our servers.</li>
            </ul>

            <h3>2. Information We Process on Your Behalf (Service Data)</h3>
            <p>The core of Go-X involves the analysis of meeting data. This is your data, and we process it solely to provide the Service to you.</p>
            <ul>
              <li><strong>Meeting Content:</strong> We process the audio and video streams from meetings you connect to Go-X.</li>
              <li><strong>Analytical Data:</strong> Our AI generates analytical insights from the meeting content. This includes transcription, summaries, sentiment analysis, facial expression data, voice intonation, and derived physiological signals like heart rate variability. This data is intrinsically linked to the meeting and is protected with the highest level of security.</li>
            </ul>
            
            <h3>3. Information We Collect Automatically</h3>
            <ul>
                <li><strong>Usage Data:</strong> We collect metadata about your use of the Service, such as the features you use, the duration of meetings, and performance metrics. This helps us understand how to improve the product.</li>
            </ul>
            
            <h2 id="how-we-use-information">How We Use Your Information</h2>
            <p>Our use of your data is guided by one principle: to provide you with a powerful and secure service. We use the information we collect to:</p>
            <ul>
              <li><strong>Provide, maintain, and improve the Service:</strong> This includes generating live cues, creating post-meeting dashboards, and ensuring the reliability of our platform.</li>
              <li><strong>Enhance our AI Models:</strong> We may use anonymized and aggregated Service Data to train and improve the algorithms that power Go-X. We will never use your personal or identifiable meeting data for training without your explicit, opt-in consent.</li>
              <li><strong>Communicate with you:</strong> To send service-related notifications, respond to support requests, and inform you about new features or updates.</li>
              <li><strong>Ensure Security and Compliance:</strong> To protect against fraud, abuse, and security risks, and to comply with legal obligations.</li>
            </ul>

            <h2 id="data-security">Data Security <FaLock className="inline-block ml-2 text-slate-500" /></h2>
            <p>We implement state-of-the-art technical and organizational measures to protect your data. This includes:</p>
            <ul>
              <li><strong>Encryption:</strong> Your data is encrypted both in transit (using TLS) and at rest (using AES-256).</li>
              <li><strong>Access Control:</strong> We enforce strict access controls within our organization to ensure that only authorized personnel can access your data for legitimate purposes, such as customer support.</li>
              <li><strong>Regular Audits:</strong> Our security practices are regularly reviewed and updated to meet and exceed industry standards like SOC 2 and GDPR.</li>
            </ul>

            <h2 id="your-rights">Your Rights and Choices <FaUserShield className="inline-block ml-2 text-slate-500" /></h2>
            <p>You have rights and control over your personal data. Depending on your location, these may include the right to:</p>
            <ul>
                <li><strong>Access and Portability:</strong> Request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request that we correct any inaccurate personal information.</li>
                <li><strong>Deletion:</strong> Request that we delete your personal information ("Right to be Forgotten").</li>
            </ul>
            <p>You can exercise these rights by contacting us at the email address below.</p>

            <h2 id="contact-us">Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact our privacy team at:</p>
            <p><a href="mailto:privacy@tensorgo.com" className="text-sky-600 hover:underline">info@tensorgo.com</a></p>
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

export default Privacy;