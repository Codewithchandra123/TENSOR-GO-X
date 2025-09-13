import React from 'react';
import { Link } from 'react-router-dom';

// SVG Logo Component for a self-contained, high-quality logo
const GoXLogo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#82ca9d", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#8884d8", stopOpacity:1}} />
      </linearGradient>
    </defs>
    <circle cx="25" cy="25" r="23" fill="url(#gradient)" stroke="#e2e8f0" strokeWidth="2" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy="0.35em"
      fontSize="16"
      fontWeight="bold"
      fill="#fff"
      fontFamily="sans-serif"
    >
      Go-X
    </text>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 font-sans py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          
          {/* Logo and Copyright */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link to="/" className="transform transition-transform duration-300 hover:scale-110 mb-4">
              <GoXLogo />
            </Link>
            {/* Changed text-gray-400 to text-white */}
            <p className="mt-4 text-sm text-white">&copy; {new Date().getFullYear()} TensorGo. All rights reserved.</p>
          </div>

          {/* Footer Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8 text-center lg:text-left">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              {/* Added styles for the heading */}
              <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider pb-2 mb-2 border-b-2 border-gray-700">Company</h3>
              <Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link>
              <Link to="/careers" className="hover:text-teal-400 transition-colors">Careers</Link>
              <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              {/* Added styles for the heading */}
              <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider pb-2 mb-2 border-b-2 border-gray-700">Product</h3>
              <Link to="/features" className="hover:text-teal-400 transition-colors">Features</Link>
              <Link to="/how-it-works" className="hover:text-teal-400 transition-colors">How It Works</Link>
              <Link to="/integrations" className="hover:text-teal-400 transition-colors">Integrations</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-3">
              {/* Added styles for the heading */}
              <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider pb-2 mb-2 border-b-2 border-gray-700">Resources</h3>
              <Link to="/demo" className="hover:text-teal-400 transition-colors">Live Demo</Link>
              <Link to="/upload" className="hover:text-teal-400 transition-colors">Upload & Analyze</Link>
              <Link to="/pricing" className="hover:text-teal-400 transition-colors">Pricing</Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col space-y-3">
              {/* Added styles for the heading */}
              <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider pb-2 mb-2 border-b-2 border-gray-700">Legal</h3>
              <Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-125" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-125" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.65-1.002.274-2.071.353-3.161.213.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.029-1.451-.086 2.679 1.728 5.863 2.735 9.282 2.735 11.137 0 17.228-9.255 17.16-17.348 .011-.264.004-.528-.022-.79.962-.693 1.798-1.562 2.457-2.548z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;