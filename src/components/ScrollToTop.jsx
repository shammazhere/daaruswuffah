import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, state } = useLocation();

    useEffect(() => {
        if (state && state.scrollTo) {
            // Retry logic to handle race conditions
            const scrollToElement = (retries = 3) => {
                const element = document.getElementById(state.scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else if (retries > 0) {
                    // Retry after a short delay if element not found
                    setTimeout(() => scrollToElement(retries - 1), 100);
                } else {
                    // Fallback: scroll to top if element never found
                    window.scrollTo(0, 0);
                }
            };
            scrollToElement();
        } else {
            const html = document.documentElement;
            const originalScrollBehavior = html.style.scrollBehavior;
            html.style.scrollBehavior = 'auto';
            window.scrollTo(0, 0);
            // Force reflow/repaint before restoring style, or restore on next event loop tick
            setTimeout(() => {
                html.style.scrollBehavior = originalScrollBehavior;
            }, 0);
        }
    }, [pathname, state]);

    return null;
};

export default ScrollToTop;
