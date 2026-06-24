import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-peach/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4">
            <div className="relative w-20 h-20">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gold/20 border-t-gold animate-spin"></div>
                {/* Inner counter-spinning decorative ring */}
                <div className="absolute inset-2 rounded-full border-4 border-navy/10 border-b-navy animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                {/* Center dot */}
                <div className="absolute inset-8 bg-gold rounded-full animate-pulse"></div>
            </div>
            <span className="text-navy font-serif font-semibold tracking-widest text-sm uppercase animate-pulse">Loading...</span>
        </div>
    );
};

export default LoadingSpinner;
