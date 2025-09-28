// import React, { useState } from 'react';
// import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const links = [
//   { name: 'Home', href: '#' },
//   { name: 'Testimonials', href: '#testimonials' },
//   { name: 'FAQ', href: '#faq' },
//   { name: 'Pricing', href: '#pricing' },
// ];

// const Navbar = ({ dark, onToggleDark }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.nav className="sticky top-0 z-50 w-full shadow-md bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 px-8 py-4 flex items-center justify-between">
//       <span className="text-2xl font-bold text-white">AnalyzePro</span>
//       <div className="hidden md:flex gap-6 items-center">
//         {links.map(l => (
//           <a
//             key={l.name}
//             href={l.href}
//             className="text-white border-b-2 border-transparent hover:border-blue-500 transition-transform duration-300 px-2"
//             aria-label={l.name}
//           >
//             {l.name}
//           </a>
//         ))}
//         <button
//           aria-label="Toggle theme"
//           onClick={onToggleDark}
//           className="ml-4 bg-white/10 text-white p-2 rounded-full hover:bg-blue-500 transition"
//         >
//           {dark ? <FaSun /> : <FaMoon />}
//         </button>
//       </div>
//       {/* Hamburger */}
//       <div className="md:hidden flex items-center">
//         <button aria-label="Open menu" className="text-white" onClick={() => setOpen(true)}>
//           <FaBars />
//         </button>
//         <motion.div initial={{ x: '100%' }} animate={open ? { x: 0 } : { x: '100%' }} className="fixed top-0 right-0 w-64 h-full bg-slate-900 z-50 shadow-lg px-6 py-8">
//           <div className="flex justify-end">
//             <button aria-label="Close menu" className="text-white text-2xl mb-4" onClick={() => setOpen(false)}>
//               <FaTimes />
//             </button>
//           </div>
//           <nav className="flex flex-col gap-6 mt-8">
//             {links.map(l => (
//               <a key={l.name} href={l.href} className="text-white text-lg border-b border-slate-700 pb-2" aria-label={l.name}>
//                 {l.name}
//               </a>
//             ))}
//             <button
//               aria-label="Toggle theme"
//               onClick={onToggleDark}
//               className="mt-4 bg-white/10 text-white p-2 rounded-full hover:bg-blue-500 transition"
//             >
//               {dark ? <FaSun /> : <FaMoon />}
//             </button>
//           </nav>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// };
// export default Navbar;
