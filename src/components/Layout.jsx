import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';
import SEO from './SEO';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-peach bg-islamic-pattern">
            <ScrollToTop />
            <SEO />
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-medium">
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-grow">
                <Outlet />
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Layout;
