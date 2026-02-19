import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50">
            <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8 font-serif">
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary text-white">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
