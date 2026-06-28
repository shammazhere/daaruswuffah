import React from 'react';

const LoadingSpinner = () => {
    return (
        <div
            role="status"
            aria-busy="true"
            aria-label="Loading"
            style={{
                position: 'fixed',
                inset: 0,
                background: '#071A14',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '28px',
            }}
        >
            {/* Hairline shimmer bar */}
            <div style={{
                position: 'relative',
                width: '160px',
                height: '1px',
                borderRadius: '1px',
                overflow: 'hidden',
            }}>
                {/* Dim track */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(214, 180, 76, 0.12)',
                    borderRadius: '1px',
                }} />
                {/* Gliding shimmer */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, transparent 0%, #D6B44C 50%, transparent 100%)',
                    borderRadius: '1px',
                    animation: 'luxuryShimmer 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                }} />
            </div>

            {/* Three micro dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            width: '3px',
                            height: '3px',
                            borderRadius: '50%',
                            background: '#D6B44C',
                            opacity: 0.3,
                            animation: 'luxuryDot 1.8s ease-in-out infinite',
                            animationDelay: `${i * 0.28}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default LoadingSpinner;
