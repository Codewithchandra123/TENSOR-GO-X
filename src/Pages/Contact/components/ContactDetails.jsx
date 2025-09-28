// // src/Pages/Contact/components/ContactDetails.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { contactDetails } from '../data';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.4,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const ContactDetails = () => (
//   <motion.div
//     variants={containerVariants}
//     initial="hidden"
//     animate="visible"
//     className="space-y-10"
//   >
//     <h2 className="text-3xl font-bold text-white">Other Ways to Reach Us</h2>
    
//     {contactDetails.map((item, index) => (
//       <motion.div key={index} variants={itemVariants} className="contact-detail-item">
//         <div className="contact-icon-wrapper">{item.icon}</div>
//         <div>
//           <h4 className="font-bold text-lg text-white">{item.title}</h4>
//           {item.lines.map((line, i) => (
//             <p key={i} className="mt-1 text-slate-300">{line}</p>
//           ))}
//           {item.link && (
//             <a href={item.link.href} className="animated-link mt-2">{item.link.text}</a>
//           )}
//         </div>
//       </motion.div>
//     ))}
    
//     <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg">
//       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495267881958!2d78.36676181534217!3d17.43618478804863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a1f6a69527%3A0x633d908281c6c21b!2sThe%20Platina!5e0!3m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="TensorGo Office Location"></iframe>
//     </motion.div>
//   </motion.div>
// );

// export default ContactDetails;



import React from 'react';
import { motion } from 'framer-motion';
import { contactDetails } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const ContactDetails = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-10"
  >
    <h2 className="text-3xl font-bold text-white">Other Ways to Reach Us</h2>
    {contactDetails.map((item, index) => (
      <motion.div key={index} variants={itemVariants} className="contact-detail-item group">
        <div className="contact-icon-wrapper" aria-hidden>
          <span className="contact-icon group-hover:scale-110 group-hover:text-cyan-300 transition">{item.icon}</span>
        </div>
        <div>
          <h4 className="font-bold text-lg text-white">{item.title}</h4>
          {item.lines.map((line, i) => (
            <p key={i} className="mt-1 text-white text-base">{line}</p>
          ))}
          {item.link && (
            <a href={item.link.href}
              className="animated-link mt-2"
              aria-label={item.link.text}
              rel={item.link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              target={item.link.href.startsWith('http') ? "_blank" : undefined}
            >
              {item.link.text}
            </a>
          )}
        </div>
      </motion.div>
    ))}
    <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-2xl border-2 border-indigo-500/40 mt-7">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495267881958!2d78.36676181534217!3d17.43618478804863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a1f6a69527%3A0x633d908281c6c21b!2sThe%20Platina!5e0!3m2!1sen!2sin"
        width="100%" height="250" style={{ border: 0, filter: "invert(0.05) hue-rotate(10deg) brightness(1.1)" }}
        allowFullScreen=""
        loading="lazy"
        aria-label="TensorGo Office Location Map"
        title="TensorGo Office Location - Live"
      ></iframe>
    </motion.div>
  </motion.div>
);

export default ContactDetails;
