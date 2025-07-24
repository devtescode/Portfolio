import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const token = localStorage.getItem('token'); // Check if token exists

    if (!token) {
        // If token is missing, redirect to login
        return <Navigate to="/adminlogin" replace />;
    }
    return children; // Render protected component if token exists
};

export default Protected;
