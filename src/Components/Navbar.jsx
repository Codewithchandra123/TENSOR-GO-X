import React, { useState, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase'; // Ensure this path is correct
import { BiLogOut } from 'react-icons/bi';
import './Navbar.css'; // Ensure this path is correct

// ✅ 1. IMPORT THE PNG LOGO FROM YOUR ASSETS FOLDER
import tensorGoLogo from '../assets/logo.png'; 

// --- ICON COMPONENTS (UNCHANGED) ---
const HamburgerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-200 hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-200 hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> );
const ChevronDownIcon = ({ isOpen }) => ( <motion.svg variants={chevronVariants} animate={isOpen ? "open" : "closed"} className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg> );

// --- ANIMATION VARIANTS (UNCHANGED) ---
const chevronVariants = { closed: { rotate: 0 }, open: { rotate: 180 } };
const menuVariants = { open: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }, closed: { x: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } } };
const dropdownVariants = { hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } }, visible: { opacity: 1, y: 0, transition: { duration: 0.2 } } };
const dropdownItemVariants = { hidden: { x: -20, opacity: 0 }, visible: i => ({ x: 0, opacity: 1, transition: { delay: i * 0.05 } }) };

// --- DROPDOWN COMPONENTS (UNCHANGED) ---
const DesktopDropdown = ({ title, children, activePaths }) => { const [isOpen, setIsOpen] = useState(false); const location = useLocation(); const timeoutRef = useRef(null); const isActive = activePaths.includes(location.pathname); const handleMouseEnter = () => { clearTimeout(timeoutRef.current); setIsOpen(true); }; const handleMouseLeave = () => { timeoutRef.current = setTimeout(() => setIsOpen(false), 300); }; return ( <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><button className={`flex items-center nav-link ${isActive ? 'active' : ''}`}>{title}<ChevronDownIcon isOpen={isOpen} /></button><AnimatePresence>{isOpen && ( <motion.div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-auto min-w-max rounded-lg overflow-hidden dropdown-container" initial="hidden" animate="visible" exit="hidden" variants={dropdownVariants}><div className="flex flex-col p-2">{React.Children.map(children, (child, i) => ( <motion.div key={i} variants={dropdownItemVariants} custom={i}>{child}</motion.div> ))}</div></motion.div> )}</AnimatePresence></div> ); };
const MobileDropdown = ({ title, children, activePaths, closeParentMenu }) => { const [isOpen, setIsOpen] = useState(false); const location = useLocation(); const isActive = activePaths.includes(location.pathname); const childrenWithProps = React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { onClick: closeParentMenu }) : child); return ( <div className="w-full"><button onClick={() => setIsOpen(!isOpen)} className={`w-full flex justify-between items-center text-2xl font-semibold py-4 transition-colors duration-300 ${isActive ? 'text-sky-400' : 'text-slate-200'}`}><span>{title}</span><ChevronDownIcon isOpen={isOpen} /></button><AnimatePresence>{isOpen && ( <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }}><div className="flex flex-col items-start pt-2 pl-6 border-l-2 border-slate-700">{childrenWithProps}</div></motion.div> )}</AnimatePresence></div> ); };


// --- HELPER COMPONENTS FOR MOBILE MENU ---
// Define a style for the root mobile NavLinks (large and centered)
const MobileRootNavLink = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <NavLink 
            to={to} 
            onClick={onClick} 
            className={`text-2xl font-semibold py-4 transition-colors duration-300 w-full text-center ${isActive ? 'text-sky-400' : 'text-slate-200'} hover:text-sky-400`}
        >
            {children}
        </NavLink>
    );
};

// Define a style for links inside the MobileDropdown (smaller than root links)
const MobileDropdownLink = ({ to, children, onClick }) => {
    return (
        <NavLink 
            to={to} 
            onClick={onClick} 
            className="text-xl py-2 my-1 text-slate-300 hover:text-sky-400 transition-colors duration-300 w-full text-left"
        >
            {children}
        </NavLink>
    );
};


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
    <header className="sticky top-0 z-50 navbar-gradient shadow-lg shadow-blue-900/10">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3">

        {/* ✅ 2. LOGO AND TEXT SECTION - FIX: Removed 'hidden sm:flex' from text container */}
        <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            {/* The PNG Logo Image */}
            <img 
              src={tensorGoLogo} 
              alt="TensorGo Logo" 
              className="h-12 w-auto" // Adjust height here, width will scale automatically
            />
            
            {/* 💡 FIX APPLIED HERE: Removed 'hidden sm:flex' and changed to just 'flex' */}
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold text-slate-100 tracking-wider leading-none">
                <span className="text-sky-400">Tensor</span>
                <span className="text-amber-500">Go</span>
              </span>
            </div>
          </motion.div>
        </Link>
        {/* END OF LOGO SECTION */}

        {/* --- DESKTOP NAVIGATION (UNCHANGED) --- */}
        <nav className="hidden lg:flex items-center space-x-10">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <DesktopDropdown title="Company" activePaths={['/about', '/careers']}><NavLink to="/about" className="dropdown-link">About Us</NavLink><NavLink to="/careers" className="dropdown-link">Careers</NavLink></DesktopDropdown>
          <DesktopDropdown title="Product" activePaths={['/features', '/how-it-works', '/integrations']}><NavLink to="/features" className="dropdown-link">Features</NavLink><NavLink to="/how-it-works" className="dropdown-link">How It Works</NavLink><NavLink to="/integrations" className="dropdown-link">Integrations</NavLink></DesktopDropdown>
          <DesktopDropdown title="Demo" activePaths={['/demo', '/upload']}><NavLink to="/demo" className="dropdown-link">Live Demo</NavLink><NavLink to="/upload" className="dropdown-link">Upload & Analyze</NavLink></DesktopDropdown>
          <DesktopDropdown title="Resources" activePaths={['/pricing', '/contact']}>
            <NavLink to="/pricing" className="dropdown-link">Start Your Journey</NavLink>
            <NavLink to="/contact" className="dropdown-link">Contact</NavLink>
          </DesktopDropdown>
        </nav>

        {/* --- AUTH BUTTONS (UNCHANGED for DESKTOP) --- */}
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

        {/* --- MOBILE MENU TOGGLE (UNCHANGED) --- */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden z-50 p-2" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <AnimatePresence mode="wait">
            {isMenuOpen ? <motion.div key="close"><CloseIcon /></motion.div> : <motion.div key="open"><HamburgerIcon /></motion.div>}
          </AnimatePresence>
        </button>
      </div>

      {/* --- MOBILE MENU PANEL: FIX APPLIED HERE to populate and align --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="lg:hidden fixed inset-0 navbar-gradient" initial="closed" animate="open" exit="closed" variants={menuVariants}>
            {/* Added w-full and max-w-sm mx-auto for better mobile alignment and centered content */}
            <nav className="flex flex-col items-start justify-start pt-24 space-y-2 px-8 w-full max-w-sm mx-auto"> 

                <MobileRootNavLink to="/" onClick={closeMenu}>Home</MobileRootNavLink>
                
                <MobileDropdown title="Company" activePaths={['/about', '/careers']} closeParentMenu={closeMenu}>
                    <MobileDropdownLink to="/about" onClick={closeMenu}>About Us</MobileDropdownLink>
                    <MobileDropdownLink to="/careers" onClick={closeMenu}>Careers</MobileDropdownLink>
                </MobileDropdown>

                <MobileDropdown title="Product" activePaths={['/features', '/how-it-works', '/integrations']} closeParentMenu={closeMenu}>
                    <MobileDropdownLink to="/features" onClick={closeMenu}>Features</MobileDropdownLink>
                    <MobileDropdownLink to="/how-it-works" onClick={closeMenu}>How It Works</MobileDropdownLink>
                    <MobileDropdownLink to="/integrations" onClick={closeMenu}>Integrations</MobileDropdownLink>
                </MobileDropdown>

                <MobileDropdown title="Demo" activePaths={['/demo', '/upload']} closeParentMenu={closeMenu}>
                    <MobileDropdownLink to="/demo" onClick={closeMenu}>Live Demo</MobileDropdownLink>
                    <MobileDropdownLink to="/upload" onClick={closeMenu}>Upload & Analyze</MobileDropdownLink>
                </MobileDropdown>

                <MobileDropdown title="Resources" activePaths={['/pricing', '/contact']} closeParentMenu={closeMenu}>
                    <MobileDropdownLink to="/pricing" onClick={closeMenu}>Start Your Journey</MobileDropdownLink>
                    <MobileDropdownLink to="/contact" onClick={closeMenu}>Contact</MobileDropdownLink>
                </MobileDropdown>

                {/* Mobile Auth Buttons: Added inside the menu, using full width and consistent mobile styling */}
                <div className="flex flex-col items-center space-y-4 pt-10 w-full">
                    {user ? (
                        <button onClick={handleLogout} className="cta-button w-full flex items-center justify-center text-xl py-3 rounded-lg">
                            <BiLogOut className="mr-2" />
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/signup" className="contact-button w-full text-center text-xl py-3 rounded-lg" onClick={closeMenu}>Sign Up</Link>
                            <Link to="/login" className="cta-button w-full text-center text-xl py-3 rounded-lg" onClick={closeMenu}>Login</Link>
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