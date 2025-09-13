import React from 'react';
import PageLayout from '../components/PageLayout'; // Assuming you have this component
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

// --- DATA ORGANIZATION (Cleaner & Easier to Manage) ---

const coreValues = [
  { icon: <FaBrain />, title: "Think", description: "Thinking deeply and intelligently with attention to detail.", color: "teal" },
  { icon: <FaComments />, title: "Communicate", description: "Communicate effectively and precisely while staying on point.", color: "indigo" },
  { icon: <FaRocket />, title: "Action", description: "Implement massive action and take ownership of things while getting them done.", color: "purple" },
  { icon: <FaHandshake />, title: "Relation", description: "Build, engage and nurture relationships with colleagues, clients and stakeholders.", color: "pink" },
  { icon: <FaLightbulb />, title: "Potential", description: "Harness and enhance the potential of the individual and organization.", color: "yellow" },
  { icon: <FaRegLifeRing />, title: "Battle Ready", description: "Always remain battle ready for challenging situations or complex problems.", color: "red" },
];

const jobOpenings = [
  { 
    icon: <FaLaptopCode />, 
    title: "Senior AI Engineer", 
    location: "Remote", 
    description: "Develop and refine our core machine learning models. Experience with computer vision and NLP is a must.",
    color: "teal"
  },
  { 
    icon: <FaUserTie />, 
    title: "Lead Frontend Developer (React)", 
    location: "Remote", 
    description: "Lead our frontend team in building a high-performance UI. Expertise in React, Tailwind CSS, and state management is required.",
    color: "indigo"
  },
  // Add more jobs here easily
];


// --- MAIN COMPONENT ---

const Careers = () => (
    // Note: The PageLayout component might add its own padding. The content inside is structured to fit well.
    <div>
        {/* 1. Hero Section */}
        <section className="relative text-center py-24 px-6 overflow-hidden bg-gradient-to-br from-purple-800 to-indigo-900 text-white">
            {/* Animated background blobs */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob [animation-delay:2s]"></div>
                <div className="w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob [animation-delay:4s]"></div>
            </div>
            
            <div className="relative z-10 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 animate-pulse-shadow">
                    Architect Intelligence, Engineer Tomorrow.
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-indigo-200">
                    Dive into AI's cutting edge, transforming industries and tackling global challenges. Your brilliance, our innovative platform. Ready to redefine possibilities?
                </p>
                <a href="#openings" className="inline-block py-3 px-8 bg-white text-indigo-700 font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200">
                    Explore Open Positions
                </a>
            </div>
        </section>

        {/* 2. Core Values Section */}
        <section className="bg-white dark:bg-gray-950 py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white animate-slide-in-down">
                        Values Unite, Differences Ignite
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        These are the principles that guide our work and our culture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <div 
                          key={value.title} 
                          className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border-b-4 transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in"
                          style={{ borderColor: `var(--color-${value.color}-500)`, animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`text-4xl text-${value.color}-500 mb-4`}>
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Current Openings Section */}
        <section id="openings" className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white animate-slide-in-right">
                        Current Openings
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Find your place on our team.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-8">
                    {jobOpenings.map((job) => (
                        <div 
                          key={job.title} 
                          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-indigo-500 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 animate-fade-in-up"
                        >
                            <div className={`text-4xl text-${job.color}-500`}>{job.icon}</div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 mt-1 mb-3">{job.location}</p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                            <a href="mailto:careers@tensorgo.com" className={`flex-shrink-0 mt-4 md:mt-0 bg-${job.color}-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-${job.color}-700 transition-colors`}>
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
                
                <p className="mt-16 text-center text-lg text-gray-700 dark:text-gray-300">
                    Don't see a role that fits? We're always looking for talented people. <br/>
                    Send your resume to <a href="mailto:careers@tensorgo.com" className="text-indigo-600 hover:underline font-semibold">info@tensorgo.com</a>.
                </p>
            </div>
        </section>
    </div>
);

export default Careers;