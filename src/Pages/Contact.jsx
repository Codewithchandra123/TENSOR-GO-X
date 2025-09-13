import React from 'react';
import { FaEnvelope, FaBookOpen, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    // Added a class for the new animated gradient background
    <div className="overflow-x-hidden bg-animated-gradient">
      {/* 1. Hero Section */}
      <section className="bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-20 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold font-headings text-primary-deep-blue">
            Get in Touch with Go-X.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-text-dark-gray max-w-2xl mx-auto">
            We're here to help you enhance your virtual collaboration. Have a question or want a demo? Let us know.
          </p>
        </div>
      </section>

      {/* 2. Contact Form and Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Added contact-card class for enhanced hover effects */}
          <div className="contact-card bg-white p-8 rounded-2xl shadow-2xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            
            {/* Column 1: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-headings text-text-dark-gray mb-6">Send Us a Message</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
                  <input type="text" name="name" id="name" required className="contact-input" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                  <input type="email" name="email" id="email" required className="contact-input" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700">Company</label>
                  <input type="text" name="company" id="company" className="contact-input" />
                </div>
                 <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
                  <textarea name="message" id="message" rows="4" required className="contact-input"></textarea>
                </div>
                <div>
                  <button type="submit" className="contact-button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Column 2: Contact Details */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold font-headings text-text-dark-gray mb-6">Other Ways to Reach Us</h2>
              
              <div className="contact-detail-item animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4 className="font-bold text-lg text-primary-teal">Email Us</h4>
                  <p className="mt-1 text-text-dark-gray">Get in touch with our team for support or sales inquiries.</p>
                  <a href="mailto:info@tensorgo.com" className="animated-link">info@tensorgo.com</a>
                </div>
              </div>
              
               <div className="contact-detail-item animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <FaBookOpen className="contact-icon" />
                <div>
                  <h4 className="font-bold text-lg text-primary-teal">Knowledge Base</h4>
                  <p className="mt-1 text-text-dark-gray">Find answers to common questions and learn how to get the most out of Go-X.</p>
                  <a href="#" className="animated-link">Visit our Help Center</a>
                </div>
              </div>

              <div className="contact-detail-item animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4 className="font-bold text-lg text-primary-teal">Our Office</h4>
                  <p className="mt-1 text-text-dark-gray">
                    1007 North Orange Street, 4th Floor St 1382<br/>
                    Wilmington, Delaware(DE), 19801<br/>
                    United States
                  </p>
                </div>
              </div>
              
              {/* Interactive Map */}
              <div className="rounded-lg overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.884511210165!2d-75.55171798462438!3d39.74233797944884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd6a4d6b6339%3A0x384abece47835158!2s1007%20N%20Orange%20St%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sin!4v1633512456789!5m2!1sen!2sin"
                    width="100%" 
                    height="200" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Office Location"
                 ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Styles are preserved and enhanced */}
      <style jsx global>{`
        /* Enhanced animated gradient background */
        .bg-animated-gradient {
          background: linear-gradient(-45deg, #f0f9ff, #e0f2fe, #bae6fd, #7dd3fc);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Enhanced hover effect for the main card */
        .contact-card {
            transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
        }
        .contact-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .contact-input {
          margin-top: 0.25rem; display: block; width: 100%;
          padding: 0.75rem 1rem; border: 1px solid #d1d5db;
          border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .contact-input:focus {
          outline: none; border-color: #14b8a6; /* primary-teal */
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.3);
        }
        
        /* Enhanced gradient button with animated hover */
        .contact-button {
          width: 100%;
          background-image: linear-gradient(to right, #10b981 0%, #14b8a6 50%, #0ea5e9 100%);
          background-size: 200% auto;
          color: white; font-weight: bold; padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          transition: all 0.4s ease-out;
          box-shadow: 0 4px 15px 0 rgba(20, 184, 166, 0.4);
          border: none;
        }
        .contact-button:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(20, 184, 166, 0.3);
        }
        
        /* Enhanced animated link with gradient fill on hover */
        .animated-link {
            font-weight: 600;
            color: #1e3a8a; /* primary-deep-blue */
            background-image: linear-gradient(90deg, #1e3a8a, #14b8a6);
            background-size: 0% 3px;
            background-repeat: no-repeat;
            background-position: left bottom;
            transition: background-size 0.4s ease;
            text-decoration: none;
        }
        .animated-link:hover {
            background-size: 100% 3px;
        }
        
        .contact-detail-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        
        .contact-icon {
            color: #14b8a6; /* primary-teal */
            font-size: 1.5rem;
            margin-top: 0.25rem;
            flex-shrink: 0;
            transition: transform 0.3s ease-in-out, filter 0.3s ease;
        }
        .contact-detail-item:hover .contact-icon {
            transform: scale(1.2) rotate(-10deg);
            filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.7));
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Contact;