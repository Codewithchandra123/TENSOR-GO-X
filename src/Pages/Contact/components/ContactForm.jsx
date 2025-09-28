// // src/Pages/Contact/components/ContactForm.jsx
// import React from 'react';
// import { useContactForm } from '../hooks/useContactForm';
// import SuccessMessage from './SuccessMessage';
// import { motion } from 'framer-motion';

// const SpinnerIcon = () => (
//   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//   </svg>
// );

// const ContactForm = () => {
//   const { formData, status, handleChange, handleSubmit, resetForm } = useContactForm();

//   if (status === 'success') {
//     return <SuccessMessage onReset={resetForm} />;
//   }

//   return (
//     <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
//       <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label htmlFor="name" className="block text-sm font-bold text-slate-300">Name</label>
//           <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="contact-input" placeholder="Your Name" />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-bold text-slate-300">Email</label>
//           <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="contact-input" placeholder="you@company.com" />
//         </div>
//         <div>
//           <label htmlFor="company" className="block text-sm font-bold text-slate-300">Company (Optional)</label>
//           <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="contact-input" placeholder="Your Company" />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-bold text-slate-300">Message</label>
//           <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleChange} className="contact-input" placeholder="How can we help?"></textarea>
//         </div>
//         <div>
//           <button type="submit" className="contact-button flex items-center justify-center" disabled={status === 'submitting'}>
//             {status === 'submitting' ? <><SpinnerIcon /> Sending...</> : 'Send Message'}
//           </button>
//         </div>
//       </form>
//     </motion.div>
//   );
// };

// export default ContactForm;


import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import SuccessMessage from './SuccessMessage';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const SpinnerIcon = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const ContactForm = () => {
  const { formData, status, error, handleChange, handleSubmit, resetForm } = useContactForm();

  if (status === 'success') {
    return <SuccessMessage onReset={resetForm} />;
  }

  return (
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-white">Name</label>
          <input type="text" name="name" id="name" autoComplete="name" required value={formData.name} onChange={handleChange} className="contact-input" placeholder="Your Name" aria-required="true" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-white">Email</label>
          <input type="email" name="email" id="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="contact-input" placeholder="you@company.com" aria-required="true" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-bold text-white">Company (Optional)</label>
          <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="contact-input" placeholder="Your Company" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-white">Message</label>
          <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleChange} className="contact-input" placeholder="How can we help?" aria-required="true"></textarea>
        </div>
        {error && <div className="text-red-400 font-bold">{error}</div>}
        <div>
          <button
            type="submit"
            className={`contact-button flex items-center justify-center group hover:scale-105 transition focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
            disabled={status === 'submitting'}
            aria-label={status === 'submitting' ? "Sending message" : "Send message"}
          >
            {status === 'submitting'
              ? (<><SpinnerIcon /> Sending...</>)
              : (
                <>
                  Send Message
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:text-cyan-300" />
                </>
              )
            }
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
