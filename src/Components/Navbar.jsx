// src/Components/Navbar.js

// ✅ --- IMPORTS FOR AUTH & ICONS ---
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase'; // Make sure you have a firebase.js file in src/
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

import './Navbar.css';

import React, { useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// --- LOGO ---
import tensorGoLogo from '../assets/tensor1.png';

// --- ICONS ---
const HamburgerIcon = () => ( <svg xmlns="http://www.w.w3.org/2000/svg" className="h-7 w-7 text-slate-200 hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-200 hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> );
const ChevronDownIcon = ({ isOpen }) => ( <motion.svg variants={chevronVariants} animate={isOpen ? "open" : "closed"} className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg> );

const chevronVariants = { closed: { rotate: 0 }, open: { rotate: 180 } };
const menuVariants = { open: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }, closed: { x: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } } };
const dropdownVariants = { hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } }, visible: { opacity: 1, y: 0, transition: { duration: 0.2 } } };
const dropdownItemVariants = { hidden: { x: -20, opacity: 0 }, visible: i => ({ x: 0, opacity: 1, transition: { delay: i * 0.05 } }) };

// --- DESKTOP & MOBILE DROPDOWNS (No changes here) ---
const DesktopDropdown = ({ title, children, activePaths }) => { const [isOpen, setIsOpen] = useState(false); const location = useLocation(); const timeoutRef = useRef(null); const isActive = activePaths.includes(location.pathname); const handleMouseEnter = () => { clearTimeout(timeoutRef.current); setIsOpen(true); }; const handleMouseLeave = () => { timeoutRef.current = setTimeout(() => setIsOpen(false), 300); }; return ( <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><button className={`flex items-center nav-link ${isActive ? 'active' : ''}`}>{title}<ChevronDownIcon isOpen={isOpen} /></button><AnimatePresence>{isOpen && ( <motion.div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-auto min-w-max rounded-lg overflow-hidden dropdown-container" initial="hidden" animate="visible" exit="hidden" variants={dropdownVariants}><div className="flex flex-col p-2">{React.Children.map(children, (child, i) => ( <motion.div key={i} variants={dropdownItemVariants} custom={i}>{child}</motion.div> ))}</div></motion.div> )}</AnimatePresence></div> ); };
const MobileDropdown = ({ title, children, activePaths, closeParentMenu }) => { const [isOpen, setIsOpen] = useState(false); const location = useLocation(); const isActive = activePaths.includes(location.pathname); const childrenWithProps = React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { onClick: closeParentMenu }) : child); return ( <div className="w-full"><button onClick={() => setIsOpen(!isOpen)} className={`w-full flex justify-between items-center text-2xl font-semibold py-4 transition-colors duration-300 ${isActive ? 'text-sky-400' : 'text-slate-200'}`}><span>{title}</span><ChevronDownIcon isOpen={isOpen} /></button><AnimatePresence>{isOpen && ( <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }}><div className="flex flex-col items-start pt-2 pl-6 border-l-2 border-slate-700">{childrenWithProps}</div></motion.div> )}</AnimatePresence></div> ); };


// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    signOut(auth).then(() => {
      closeMenu();
      navigate('/');
    }).catch((error) => {
      console.error("Sign Out Error", error);
    });
  };

  return (
    <header className="sticky top-0 z-50 navbar-gradient shadow-lg shadow-blue-900/10 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
          <motion.img 
            src={tensorGoLogo} 
            alt="TensorGo Logo" 
            className="h-20 w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 15px rgba(34, 211, 238, 0.7))" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-10">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <DesktopDropdown title="Company" activePaths={['/about', '/careers']}><NavLink to="/about" className="dropdown-link">About Us</NavLink><NavLink to="/careers" className="dropdown-link">Careers</NavLink></DesktopDropdown>
          <DesktopDropdown title="Product" activePaths={['/features', '/how-it-works', '/integrations']}><NavLink to="/features" className="dropdown-link">Features</NavLink><NavLink to="/how-it-works" className="dropdown-link">How It Works</NavLink><NavLink to="/integrations" className="dropdown-link">Integrations</NavLink></DesktopDropdown>
          <DesktopDropdown title="Demo" activePaths={['/demo', '/upload']}><NavLink to="/demo" className="dropdown-link">Live Demo</NavLink><NavLink to="/upload" className="dropdown-link">Upload & Analyze</NavLink></DesktopDropdown>
          <DesktopDropdown title="Resources" activePaths={['/pricing', '/contact']}>
            <NavLink to="/pricing" className="dropdown-link">Start Your Journey With Us</NavLink>
            <NavLink to="/contact" className="dropdown-link">Contact</NavLink>
          </DesktopDropdown>
        </nav>

        {/* ✅ --- FINAL DESKTOP AUTH BUTTONS --- */}
        <div className="hidden lg:flex items-center space-x-6">
          {user ? (
            <button onClick={handleLogout} className="cta-button flex items-center justify-center">
              <BiLogOut className="mr-2" />
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="contact-button">Sign Up</Link>
              <Link to="/login" className="cta-button">Login</Link>
            </>
          )}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden z-50 p-2" aria-label="Toggle menu" aria-expanded={isMenuOpen}><AnimatePresence mode="wait">{isMenuOpen ? <motion.div key="close"><CloseIcon /></motion.div> : <motion.div key="open"><HamburgerIcon /></motion.div>}</AnimatePresence></button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="lg:hidden fixed inset-0 navbar-gradient" initial="closed" animate="open" exit="closed" variants={menuVariants}>
            <nav className="flex flex-col items-center justify-center h-full space-y-2 px-8">
              <motion.div variants={dropdownItemVariants} custom={0}><NavLink to="/" onClick={closeMenu} className={({isActive}) => `text-2xl font-semibold py-4 ${isActive ? 'text-sky-400' : 'text-slate-200'}`}>Home</NavLink></motion.div>
              <motion.div className="w-full" variants={dropdownItemVariants} custom={1}><MobileDropdown title="Company" activePaths={['/about', '/careers']} closeParentMenu={closeMenu}><NavLink to="/about" className="mobile-dropdown-link">About Us</NavLink><NavLink to="/careers" className="mobile-dropdown-link">Careers</NavLink></MobileDropdown></motion.div>
              <motion.div className="w-full" variants={dropdownItemVariants} custom={2}><MobileDropdown title="Product" activePaths={['/features', '/how-it-works', '/integrations']} closeParentMenu={closeMenu}><NavLink to="/features" className="mobile-dropdown-link">Features</NavLink><NavLink to="/how-it-works" className="mobile-dropdown-link">How It Works</NavLink><NavLink to="/integrations" className="mobile-dropdown-link">Integrations</NavLink></MobileDropdown></motion.div>
              <motion.div className="w-full" variants={dropdownItemVariants} custom={3}><MobileDropdown title="Demo" activePaths={['/demo', '/upload']} closeParentMenu={closeMenu}><NavLink to="/demo" className="mobile-dropdown-link">Live Demo</NavLink><NavLink to="/upload" className="mobile-dropdown-link">Upload & Analyze</NavLink></MobileDropdown></motion.div>
              <motion.div className="w-full" variants={dropdownItemVariants} custom={4}>
                <MobileDropdown title="Resources" activePaths={['/pricing', '/contact']} closeParentMenu={closeMenu}>
                  <NavLink to="/pricing" className="mobile-dropdown-link">Start Your Journey</NavLink>
                  <NavLink to="/contact" className="mobile-dropdown-link">Contact</NavLink>
                </MobileDropdown>
              </motion.div>

              {/* ✅ --- FINAL MOBILE AUTH BUTTONS --- */}
              <div className="w-full pt-8 mt-4 border-t border-slate-700 flex flex-col items-center gap-4">
                {user ? (
                  <motion.div variants={dropdownItemVariants} custom={5} className="w-full">
                    <button onClick={handleLogout} className="cta-button w-full text-center text-lg flex items-center justify-center">
                      <BiLogOut className="mr-2" />
                      Logout
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <motion.div variants={dropdownItemVariants} custom={5} className="w-full"><Link to="/signup" onClick={closeMenu} className="contact-button w-full text-center text-lg">Sign Up</Link></motion.div>
                    <motion.div variants={dropdownItemVariants} custom={6} className="w-full"><Link to="/login" onClick={closeMenu} className="cta-button w-full text-center text-lg">Login</Link></motion.div>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;