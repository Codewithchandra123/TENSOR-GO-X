import React from 'react';
import { 
  FaLaptopCode, 
  FaUserTie, 
  FaRocket, 
  FaHandshake, 
  FaLightbulb, 
  FaRegLifeRing,
  FaComments, 
  FaBrain 
} from 'react-icons/fa';

// --- DATA ORGANIZATION ---
const coreValues = [
  { icon: <FaBrain />, title: "Think", description: "Thinking deeply and intelligently with attention to detail.", color: "sky" },
  { icon: <FaComments />, title: "Communicate", description: "Communicate effectively and precisely while staying on point.", color: "indigo" },
  { icon: <FaRocket />, title: "Action", description: "Implement massive action and take ownership of things while getting them done.", color: "violet" },
  { icon: <FaHandshake />, title: "Relation", description: "Build, engage and nurture relationships with colleagues, clients and stakeholders.", color: "pink" },
  { icon: <FaLightbulb />, title: "Potential", description: "Harness and enhance the potential of the individual and organization.", color: "amber" },
  { icon: <FaRegLifeRing />, title: "Battle Ready", description: "Always remain battle ready for challenging situations or complex problems.", color: "rose" },
];

const jobOpenings = [
  { 
    icon: <FaLaptopCode />, 
    title: "Senior AI Engineer", 
    location: "Remote", 
    description: "Develop and refine our core machine learning models. Experience with computer vision and NLP is a must.",
    color: "sky"
  },
  { 
    icon: <FaUserTie />, 
    title: "Lead Frontend Developer (React)", 
    location: "Remote", 
    description: "Lead our frontend team in building a high-performance UI. Expertise in React, Tailwind CSS, and state management is required.",
    color: "indigo"
  },
];

// --- MAIN COMPONENT ---
const Careers = () => (
  <div className="bg-slate-50 text-slate-800 font-sans">
    
    {/* 1. Hero Section */}
    <section className="relative text-center py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-white via-sky-100 to-slate-100">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute w-96 h-96 bg-violet-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-sky-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-0"></div>
      </div>
      
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 pulse-shadow">
          Architect Intelligence, Engineer Tomorrow.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-600">
          Dive into AI's cutting edge, transforming industries and tackling global challenges. 
          Your brilliance, our innovative platform. Ready to redefine possibilities?
        </p>
        <a 
          href="#openings" 
          className="inline-block py-3 px-8 bg-white text-sky-600 font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Explore Open Positions
        </a>
      </div>
    </section>

    {/* 2. Core Values Section */}
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Values Unite, Differences Ignite
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            These are the principles that guide our work and our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={value.title} 
              className="value-card text-center p-8 rounded-2xl shadow-lg border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`icon-wrapper bg-gradient-to-br from-${value.color}-400 to-${value.color}-600`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-6">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. Current Openings Section */}
    <section id="openings" className="bg-slate-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Current Openings
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Find your place on our team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {jobOpenings.map((job, index) => (
            <div 
              key={job.title} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-sky-500 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`flex-shrink-0 text-3xl p-4 rounded-full bg-${job.color}-100 text-${job.color}-600`}>{job.icon}</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>
                <p className="text-slate-500 mt-1 mb-3 font-medium">{job.location}</p>
                <p className="text-slate-700 leading-relaxed">
                  {job.description}
                </p>
              </div>
              <a 
                href="mailto:careers@tensorgo.com?subject=Application for ${job.title}" 
                className="cta-button flex-shrink-0 mt-4 md:mt-0"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center p-8 bg-white rounded-2xl max-w-3xl mx-auto shadow-lg">
            <h3 className="font-bold text-2xl text-slate-800">Don't see a role that fits?</h3>
            <p className="mt-2 text-lg text-slate-600">
            We're always looking for talented and passionate people. Send your resume to our talent team!
            </p>
            <a href="mailto:info@tensorgo.com" className="inline-block mt-4 font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                info@tensorgo.com
            </a>
        </div>
      </div>
    </section>

    {/* --- STYLES FOR ANIMATIONS & EFFECTS --- */}
    <style jsx global>{`
        /* Blob Animation for Hero */
        @keyframes blob {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }

        /* General Fade-in Animation */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Value Card specific styles */
        .value-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        .icon-wrapper {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            border-radius: 9999px; /* rounded-full */
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2.25rem; /* text-4xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        /* Gradient CTA Button from Navbar for consistency */
        .cta-button {
          display: inline-block;
          background-image: linear-gradient(to right, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%);
          background-size: 200% auto;
          color: white;
          font-weight: 600;
          padding: 0.6rem 1.5rem;
          border-radius: 9999px;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 4px 15px 0 rgba(14, 165, 233, 0.3);
          border: none;
        }
        .cta-button:hover {
          background-position: right center;
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(139, 92, 246, 0.25);
        }

        /* Utility classes for dynamic colors in Tailwind */
        .from-sky-400 { --tw-gradient-from: #38bdf8; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(56, 189, 248, 0)); }
        .to-sky-600 { --tw-gradient-to: #0284c7; }
        .bg-sky-100 { background-color: #e0f2fe; }
        .text-sky-600 { color: #0284c7; }
        .from-indigo-400 { --tw-gradient-from: #818cf8; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(129, 140, 248, 0)); }
        .to-indigo-600 { --tw-gradient-to: #4f46e5; }
        .bg-indigo-100 { background-color: #e0e7ff; }
        .text-indigo-600 { color: #4f46e5; }
        .from-violet-400 { --tw-gradient-from: #a78bfa; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(167, 139, 250, 0)); }
        .to-violet-600 { --tw-gradient-to: #7c3aed; }
        .from-pink-400 { --tw-gradient-from: #f472b6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(244, 114, 182, 0)); }
        .to-pink-600 { --tw-gradient-to: #db2777; }
        .from-amber-400 { --tw-gradient-from: #fbbf24; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 191, 36, 0)); }
        .to-amber-600 { --tw-gradient-to: #d97706; }
        .from-rose-400 { --tw-gradient-from: #fb7185; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 113, 133, 0)); }
        .to-rose-600 { --tw-gradient-to: #e11d48; }
    `}</style>
  </div>
);

export default Careers;