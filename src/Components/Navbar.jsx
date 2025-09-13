import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// --- IMPORTANT: Import your logo from the assets folder ---
import tensorGoLogo from '../assets/tensor1.png'; 

// --- ICONS ---
const HamburgerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> );
const ChevronDownIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg> );

// --- REUSABLE DESKTOP DROPDOWN COMPONENT ---
const DesktopDropdown = ({ title, children, activePaths }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const timeoutRef = useRef(null);
    const isActive = activePaths.includes(location.pathname);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 300); // 300ms delay before closing
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className={`flex items-center nav-link ${isActive ? 'active' : ''}`}>
                {title}
                <span className={`${isOpen ? 'rotate-180' : ''}`}><ChevronDownIcon/></span>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-gradient-to-br from-white to-slate-50 rounded-lg shadow-2xl overflow-hidden ring-1 ring-slate-900/5 transition-all duration-300 ease-in-out border-t-2 border-sky-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="flex flex-col p-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- MOBILE ACCORDION DROPDOWN ---
const MobileDropdown = ({ title, children, activePaths, closeParentMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isActive = activePaths.includes(location.pathname);

    // This makes sure that when a link is clicked, the entire mobile menu closes
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onClick: closeParentMenu });
        }
        return child;
    });

    return (
        <div className="w-full">
            <button onClick={() => setIsOpen(!isOpen)} className={`w-full flex justify-between items-center text-2xl font-semibold py-4 ${isActive ? 'text-sky-500' : 'text-slate-700'}`}>
                <span>{title}</span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><ChevronDownIcon/></span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col items-start pt-2 pl-6 border-l-2 border-slate-200">
                    {childrenWithProps}
                </div>
            </div>
        </div>
    );
};


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white/80 shadow-lg backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
<Link to="/" className="flex-shrink-0" onClick={closeMenu}>
  <img 
    src={tensorGoLogo} 
    alt="TensorGo Logo" 
    className="h-20 w-auto transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(14,165,233,0.6)] hover:animate-pulse"
  />
</Link> 


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <DesktopDropdown title="Company" activePaths={['/about', '/careers']}>
                <NavLink to="/about" className="dropdown-link">About Us</NavLink>
                <NavLink to="/careers" className="dropdown-link">Careers</NavLink>
            </DesktopDropdown>
            <DesktopDropdown title="Product" activePaths={['/features', '/how-it-works', '/integrations']}>
                <NavLink to="/features" className="dropdown-link">Features</NavLink>
                <NavLink to="/how-it-works" className="dropdown-link">How It Works</NavLink>
                <NavLink to="/integrations" className="dropdown-link">Integrations</NavLink>
            </DesktopDropdown>
            <DesktopDropdown title="Demo" activePaths={['/demo', '/upload']}>
                <NavLink to="/demo" className="dropdown-link">Live Demo</NavLink>
                <NavLink to="/upload" className="dropdown-link">Upload & Analyze</NavLink>
            </DesktopDropdown>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-6">
            <Link to="/contact" className="font-semibold text-slate-600 hover:text-sky-500 transition-colors duration-300">Contact</Link>
            <Link to="/pricing" className="cta-button">Get Started</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-slate-800 z-50" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-lg transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-2 px-8">
            <NavLink to="/" onClick={closeMenu} className={({isActive}) => `text-2xl font-semibold py-4 ${isActive ? 'text-sky-500' : 'text-slate-700'}`}>Home</NavLink>
            <MobileDropdown title="Company" activePaths={['/about', '/careers']} closeParentMenu={closeMenu}>
                <NavLink to="/about" className={({isActive}) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
                <NavLink to="/careers" className={({isActive}) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}>Careers</NavLink>
            </MobileDropdown>
            <MobileDropdown title="Product" activePaths={['/features', '/how-it-works', '/integrations']} closeParentMenu={closeMenu}>
                <NavLink to="/features" className={({isActive}) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}>Features</NavLink>
                <NavLink to="/how-it-works" className={({isActive}) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}>How It Works</NavLink>
                <NavLink to="/integrations" className={({isActive}) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}>Integrations</NavLink>
            </MobileDropdown>
            <MobileDropdown title="Demo" activePaths={['/demo', '/upload']} closeParentMenu={closeMenu}>
                <NavLink to="/demo" className={({isActive}) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}>Live Demo</NavLink>
                <NavLink to="/upload" className={({isActive}) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}>Upload & Analyze</NavLink>
            </MobileDropdown>
            <div className="w-full pt-8 mt-4 border-t border-slate-200 flex flex-col items-center gap-4">
                <Link to="/contact" onClick={closeMenu} className="w-full text-center text-lg py-3 px-8 rounded-full font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 transition-colors duration-300">Contact</Link>
                <Link to="/pricing" onClick={closeMenu} className="cta-button text-lg w-full text-center">Get Started</Link>
            </div>
        </nav>
      </div>

       {/* --- STYLES FOR ANIMATIONS & EFFECTS --- */}
       <style jsx global>{`
        .nav-link {
            position: relative;
            font-weight: 500; /* medium */
            color: #334155; /* slate-700 */
            transition: color 0.3s;
            padding-bottom: 8px; /* space for the underline */
        }
        .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #0ea5e9, #8b5cf6);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-out;
        }
        .nav-link:hover::after, .nav-link.active::after {
            transform: scaleX(1);
        }
        .nav-link.active {
            color: #0ea5e9; /* sky-500 */
        }
        .dropdown-link {
            padding: 0.75rem 1.25rem;
            border-radius: 0.5rem;
            font-weight: 500;
            color: #334155;
            transition: all 0.2s ease-in-out;
            display: block;
            text-align: left;
        }
        .dropdown-link:hover {
            background-color: #f1f5f9; /* slate-100 */
            color: #0ea5e9;
            transform: translateX(5px);
        }
        .mobile-dropdown-link {
            padding: 0.75rem 0;
            font-size: 1.125rem; /* text-lg */
            font-weight: 500;
            color: #475569; /* slate-600 */
            width: 100%;
        }
        .mobile-dropdown-link.active {
            color: #0ea5e9; /* sky-500 */
            font-weight: 600;
        }
        .cta-button {
          display: inline-block;
          background-image: linear-gradient(to right, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%);
          background-size: 200% auto;
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.75rem;
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
      `}</style>
    </header>
  );
};

export default Navbar;