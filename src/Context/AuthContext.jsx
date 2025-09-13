// import React, { createContext, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Create the context
// const AuthContext = createContext(null);

// // Create the provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Login function
//   const login = (userData) => {
//     // In a real app, you'd get a token from your API
//     // For this example, we'll just set the user object
//     setUser({ email: userData.email });
//     navigate('/dashboard'); // Redirect to dashboard after login
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null); // Clear the user state
//     navigate('/'); // Redirect to home page after logout
//   };

//   // The value provided to consuming components
//   const value = {
//     user,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// // Create a custom hook to use the auth context easily
// export const useAuth = () => {
//   return useContext(AuthContext);
// };