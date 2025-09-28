// // src/Pages/Contact/hooks/useContactForm.js
// import { useState } from 'react';

// export const useContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus('submitting');
//     console.log("Submitting form data:", formData);

//     // Simulate network request
//     setTimeout(() => {
//       setStatus('success');
//     }, 2000);
//   };

//   const resetForm = () => {
//     setFormData({ name: '', email: '', company: '', message: '' });
//     setStatus('idle');
//   };

//   return { formData, status, handleChange, handleSubmit, resetForm };
// };



import { useState } from 'react';
// npm install emailjs-com
import emailjs from 'emailjs-com';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields except company are required.');
      setStatus('idle');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Enter a valid email address.');
      setStatus('idle');
      return;
    }
    // Send via EmailJS (configure with your service)
    emailjs.send(
      "service_pvo4aj6",
      "template_ijikrm9",
      formData,
      "nL8yoAqEMgarDKgSn"
    )
    .then(() => setStatus('success'))
    .catch(() => {
      setError('Email couldn\'t be sent. Try again.');
      setStatus('idle');
    });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', company: '', message: '' });
    setStatus('idle');
    setError('');
  };

  return { formData, status, error, handleChange, handleSubmit, resetForm };
};
