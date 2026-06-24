import React from 'react';

/**
 * HeroCurve — Perfect circular arc SVG placed at the bottom of hero sections.
 * Fills with the background colour of the section below, making the curve
 * clearly visible against the hero gradient. Shadow is rendered via SVG filter
 * so it bleeds outside the overflow:hidden hero container cleanly.
 */
const HeroCurve = ({ fillLight = '#F8F5EC', fillDark = '#071A14' }) => {
    const [isDark, setIsDark] = React.useState(
        () => document.documentElement.classList.contains('dark')
    );

    React.useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        const observer = new MutationObserver(check);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const fill = isDark ? fillDark : fillLight;

    return (
        <div
            style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'visible', lineHeight: 0, zIndex: 20, pointerEvents: 'none' }}
        >
            <svg
                viewBox="0 0 1200 150"
                preserveAspectRatio="none"
                style={{ display: 'block', width: '100%', height: '105px', overflow: 'visible' }}
                aria-hidden="true"
            >
                <defs>
                    <filter id="curveShadow" x="-5%" y="-80%" width="110%" height="200%">
                        {/* Deep black shadow under the curve */}
                        <feDropShadow dx="0" dy="-7" stdDeviation="10"  floodColor="#000000" floodOpacity="0.32" />
                        {/* Gold glow under the curve */}
                        <feDropShadow dx="0" dy="-12" stdDeviation="20" floodColor="#D6B44C" floodOpacity="0.40" />
                    </filter>
                </defs>

                {/*
                  Perfect circular arc:
                  - Starts at (0, 0)  — exact left edge of screen, no vertical line
                  - Ends   at (1200, 0) — exact right edge of screen, no vertical line
                  - Dips to y ≈ 130 at centre  (R=1450 verified mathematically)
                  - L 1200,150 L 0,150 fills the rectangular area below the arc
                */}
                <path
                    d="M 0,0 A 1450,1450 0 0,0 1200,0 L 1200,150 L 0,150 Z"
                    fill={fill}
                    stroke="none"
                    filter="url(#curveShadow)"
                />
            </svg>
        </div>
    );
};

export default HeroCurve;
