import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
// ✅ Using the improved animated background CSS
import '../../styles/AnimatedBackground.css';

const GoogleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 48 48">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.35 6.48C12.73 13.72 17.95 9.5 24 9.5z"></path>
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.42-4.55H24v8.51h13.04c-.58 2.77-2.29 5.12-4.78 6.7l8.2 6.33C43.51 38.07 46.98 32.07 46.98 24.55z"></path>
        <path fill="#FBBC05" d="M10.91 28.7A14.9 14.9 0 0 1 9.5 24c0-1.45.22-2.85.61-4.18l-8.35-6.48A24.01 24.01 0 0 0 0 24c0 4.52 1.24 8.68 3.37 12.15l8.15-6.33-.61-1.12z"></path>
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.82l-8.2-6.33c-2.15 1.45-4.92 2.3-8.29 2.3-6.04 0-11.26-4.22-13.09-9.92L2.56 34.78C6.51 42.62 14.62 48 24 48z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
);

const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // ✅ FIXED: Robust error handling for manual email sign-up
    const handleEmailSignUp = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (!email || !password) {
                setError("Please enter both email and password.");
                return;
            }
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/demo');
        } catch (err) {
            console.error("Firebase Email Signup Error:", err.code);
            let userMessage = "Failed to create account. Please try again.";
            switch (err.code) {
                case 'auth/email-already-in-use':
                    userMessage = "This email address is already in use.";
                    break;
                case 'auth/invalid-email':
                    userMessage = "Please enter a valid email address.";
                    break;
                case 'auth/weak-password':
                    userMessage = "Password must be at least 6 characters long.";
                    break;
                default:
                    userMessage = "An unexpected error occurred. Please try again.";
            }
            setError(userMessage);
        }
    };

    const handleGoogleSignUp = async () => {
        setError(''); // Clear previous errors
        try {
            await signInWithGoogle();
            navigate('/demo');
        } catch (err) {
            console.error("Google Sign-Up Error:", err);
            setError('Failed to sign up with Google. Please try again.');
        }
    };

    const containerVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="relative min-h-screen font-sans text-white flex items-center justify-center p-6 overflow-hidden">
            {/* ✅ Using your CSS for the star background */}
            <div className="stars-bg"></div>
            <div className="twinkling"></div>

            <motion.div
                className="relative w-full max-w-md p-8 space-y-6 bg-slate-900/70 backdrop-blur-sm shadow-2xl rounded-2xl border border-slate-700"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="text-center" variants={itemVariants}>
                    <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-300">
                        Create A New Account
                    </h1>
                    <p className="text-lg text-slate-300 mt-2">
                        Enter your details and signup
                    </p>
                </motion.div>

                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-center font-medium p-3 bg-red-900/30 rounded-lg border border-red-800"
                    >
                        {error}
                    </motion.p>
                )}

                {/* --- Email and Password Form --- */}
                <motion.form onSubmit={handleEmailSignUp} className="space-y-4" variants={itemVariants}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
                        required
                    />
                     <motion.button
                        type="submit"
                        className="w-full px-6 py-3 font-semibold text-lg bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg transform transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(20, 184, 166, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Sign Up with Email
                    </motion.button>
                </motion.form>

                {/* --- OR Divider --- */}
                 <motion.div variants={itemVariants} className="relative py-2">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-600"></span></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-slate-900 text-slate-400 rounded-full">OR</span></div>
                </motion.div>

                {/* --- Google Sign-Up Button --- */}
                <motion.div variants={itemVariants}>
                    <motion.button
                        onClick={handleGoogleSignUp}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 font-semibold text-lg bg-white text-slate-800 rounded-xl shadow-lg transform transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <GoogleIcon />
                        <span>Sign Up with Google</span>
                    </motion.button>
                </motion.div>

                <motion.p className="text-center text-slate-400" variants={itemVariants}>
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-indigo-400 hover:underline hover:text-indigo-300 transition-colors">
                        Log In
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default SignupPage;