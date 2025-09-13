// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../Context/AuthContext';

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();

//   if (!user) {
//     // If user is not logged in, redirect to the login page
//     return <Navigate to="/login" />;
//   }

//   // If user is logged in, render the child component
//   return children;
// };

// export default ProtectedRoute;