import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth, signInWithGoogle } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/AnimatedBackground.css'; // This will now use the new combined effect CSS

const GoogleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 48 48">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.35 6.48C12.73 13.72 17.95 9.5 24 9.5z"></path>
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.42-4.55H24v8.51h13.04c-.58 2.77-2.29 5.12-4.78 6.7l8.2 6.33C43.51 38.07 46.98 32.07 46.98 24.55z"></path>
        <path fill="#FBBC05" d="M10.91 28.7A14.9 14.9 0 0 1 9.5 24c0-1.45.22-2.85.61-4.18l-8.35-6.48A24.01 24.01 0 0 0 0 24c0 4.52 1.24 8.68 3.37 12.15l8.15-6.33-.61-1.12z"></path>
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.82l-8.2-6.33c-2.15 1.45-4.92 2.3-8.29 2.3-6.04 0-11.26-4.22-13.09-9.92L2.56 34.78C6.51 42.62 14.62 48 24 48z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
);

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [resetMessage, setResetMessage] = useState('');
    const [showResetModal, setShowResetModal] = useState(false);

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setError('');
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/demo');
        } catch (err) {
            console.error("Firebase Email Login Error:", err.code);
            switch (err.code) {
                case 'auth/user-not-found':
                case 'auth/invalid-email':
                    setError("No account found with that email address.");
                    break;
                case 'auth/wrong-password':
                case 'auth/invalid-credential':
                    setError("Incorrect password. Please try again.");
                    break;
                default:
                    setError("Failed to log in. Please check your credentials.");
            }
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        try {
            await signInWithGoogle();
            navigate('/demo');
        } catch (err) {
            console.error("Google Login Error:", err);
            setError('Failed to sign in with Google. Please try again.');
        }
    };
    
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setError('');
        setResetMessage('');
        try {
            await sendPasswordResetEmail(auth, resetEmail);
            setResetMessage(`Password reset link sent to ${resetEmail}.`);
        } catch (err) {
            console.error("Password Reset Error:", err);
            setResetMessage("Failed to send reset email. Please check the address.");
        }
    };

    const containerVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    const modalVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

    return (
        <div className="min-h-screen font-sans text-white flex items-center justify-center p-6 overflow-hidden">
            <div className="stars-bg"></div>
            <div className="twinkling"></div>

            <motion.div
                className="relative w-full max-w-md p-8 space-y-6 bg-slate-900/70 backdrop-blur-sm shadow-2xl rounded-2xl border border-slate-700"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* ... The rest of your JSX remains the same ... */}
                 <motion.div className="text-center" variants={itemVariants}>
                    <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-400">
                        Welcome Back TO TensorGo
                    </h1>
                    <p className="text-lg text-slate-300 mt-2">Enter your details and login</p>
                </motion.div>

                {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center font-medium bg-red-900/30 p-3 rounded-lg border border-red-800">{error}</motion.p>}

                <motion.form onSubmit={handleEmailLogin} className="space-y-4" variants={itemVariants}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
                    
                    <div className="text-right">
                        <button type="button" onClick={() => setShowResetModal(true)} className="text-sm text-indigo-400 hover:underline">
                            Forgot Password?
                        </button>
                    </div>

                    <motion.button type="submit" className="w-full px-6 py-3 font-semibold text-lg bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-lg transform transition" whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(56, 189, 248, 0.5)' }} whileTap={{ scale: 0.95 }}>
                        LogIn
                    </motion.button>
                </motion.form>

                <motion.div variants={itemVariants} className="relative py-2">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-600"></span></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-slate-900 text-slate-400 rounded-full">OR</span></div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 px-6 py-3 font-semibold text-lg bg-white text-slate-800 rounded-xl shadow-lg transform transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <GoogleIcon />
                        <span>Continue with Google</span>
                    </motion.button>
                </motion.div>

                <motion.p className="text-center text-slate-400" variants={itemVariants}>
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-bold text-indigo-400 hover:underline hover:text-indigo-300 transition-colors">
                        Sign Up
                    </Link>
                </motion.p>
            </motion.div>

            <AnimatePresence>
                {showResetModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-sm p-8 space-y-4 bg-slate-800 rounded-2xl border border-slate-700"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <h2 className="text-2xl font-bold text-center text-white">Reset Password</h2>
                            {resetMessage ? (
                                <p className="text-center text-green-400">{resetMessage}</p>
                            ) : (
                                <p className="text-center text-slate-400">Enter Your Email To Generate Otp.</p>
                            )}
                            
                            <form onSubmit={handlePasswordReset} className="space-y-4">
                                <input type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} placeholder="Your Email Address" className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
                                <button type="submit" className="w-full py-3 font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">Send Reset Link</button>
                            </form>

                            <button onClick={() => { setShowResetModal(false); setResetMessage(''); }} className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ✅ FIXED: Corrected the typo from 'ault' to 'default'
export default LoginPage;