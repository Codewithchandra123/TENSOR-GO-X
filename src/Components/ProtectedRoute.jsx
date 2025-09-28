import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

// Install this helper library: npm install react-firebase-hooks
const ProtectedRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        // You can add a loading spinner here
        return <div>Loading...</div>;
    }

    if (!user) {
        // If user is not logged in, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If user is logged in, render the child components
    return children;
};

export default ProtectedRoute;