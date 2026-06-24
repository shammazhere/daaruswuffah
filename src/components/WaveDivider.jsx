import React from 'react';

/**
 * WaveDivider — renders the bottom curved SVG wave.
 * fillDark: hex color matching the section BELOW the hero in dark mode.
 * fillLight: hex color matching the section BELOW the hero in light mode.
 */
const WaveDivider = ({ fillLight = '#f7f5f0', fillDark = '#071d21' }) => {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const observer = new MutationObserver(check);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-[120%] h-[70px] md:h-[110px] left-[-10%]"
            >
                <path
                    d="M0,0 C450,150 750,150 1200,0 L1200,120 L0,120 Z"
                    style={{ fill: isDark ? fillDark : fillLight }}
                />
            </svg>
        </div>
    );
};

export default WaveDivider;
