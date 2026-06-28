import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/Asswuffah Logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => 
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const location = useLocation();

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine direction and visibility
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling DOWN and past 150px - Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling UP - Show Navbar
        setIsVisible(true);
      }

      // Handle background style
      setScrolled(currentScrollY > 50);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' }
  ];

  const dropdownLinks = [
    { name: 'Campus Facilities', path: '/campus' },
    { name: 'Vision & Roadmap', path: '/vision' },
    { name: 'Faculty & Scholars', path: '/faculty' },
    { name: 'Academy Gallery', path: '/gallery' },
    { name: 'Events & News', path: '/events' },
    { name: 'FAQs', path: '/faqs' }
  ];

  const mobileLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Academy', path: '/about' },
    { name: 'Courses & Programs', path: '/programs' },
    { name: 'Admissions Open', path: '/admissions' },
    { name: 'Campus Facilities', path: '/campus' },
    { name: 'Vision & Roadmap', path: '/vision' },
    { name: 'Faculty & Scholars', path: '/faculty' },
    { name: 'Academy Gallery', path: '/gallery' },
    { name: 'Events & News', path: '/events' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';
  const isProgramPage = location.pathname.startsWith('/program/');
  const hasDarkHero = isHomePage || isProgramPage;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusables = Array.from(
      menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
    const trigger = hamburgerRef.current;
    const trapEls = [trigger, ...focusables].filter(Boolean);

    if (trapEls.length === 0) return;

    // Focus first menu link (index 1), falling back to trigger (index 0)
    (trapEls[1] || trapEls[0]).focus();

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;
      const first = trapEls[0];
      const last = trapEls[trapEls.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled ? 'py-4' : 'py-6 lg:py-8'} ${scrolled && !isMenuOpen ? 'bg-white/10 backdrop-blur-md border-b border-navy/5' : 'bg-transparent'}`}
      >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center group"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className={`flex flex-col leading-none transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <img
              src={logoImg}
              alt="AS-SWUFFAH Islamic Academy Logo"
              className={`h-20 lg:h-32 w-auto object-contain transition-all duration-300 ${
                hasDarkHero && !scrolled && !isDarkMode
                  ? '[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.25))_drop-shadow(0_2px_8px_rgba(0,0,0,0.9))]'
                  : ''
              }`}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {primaryLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${isActive(link.path)
                ? 'text-gold'
                : (hasDarkHero && !scrolled ? 'text-white hover:text-gold' : 'text-navy dark:text-white hover:text-gold dark:hover:text-gold')
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </Link>
          ))}

          {/* Elegant Dropdown for Extra Pages */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsDropdownOpen(false);
              }
            }}
          >
            <button
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-label="Explore pages"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsDropdownOpen((prev) => !prev);
                } else if (e.key === 'Escape') {
                  setIsDropdownOpen(false);
                }
              }}
              className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${isDropdownOpen ? 'text-gold' : (hasDarkHero && !scrolled ? 'text-white hover:text-gold' : 'text-navy dark:text-white hover:text-gold dark:hover:text-gold')
                }`}
            >
              <span>Explore</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 pt-4 bg-transparent animate-fade-in z-55">
                <div className="bg-white dark:bg-[#0D2A21] rounded-2xl p-4 border border-navy/5 dark:border-white/5 shadow-premium space-y-1">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`block text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${isActive(link.path)
                        ? 'bg-gold/10 text-gold'
                        : 'text-dark/70 dark:text-peach/80 hover:bg-gold/10 hover:text-gold'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${isActive('/contact')
              ? 'text-gold'
              : (hasDarkHero && !scrolled ? 'text-white hover:text-gold' : 'text-navy dark:text-white hover:text-gold dark:hover:text-gold')
              }`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
          </Link>

          {/* Theme Toggle Desktop */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full hover:bg-gold/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${hasDarkHero && !scrolled ? 'text-white hover:text-gold' : 'text-navy dark:text-white hover:text-gold dark:hover:text-gold'
              }`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full hover:bg-gold/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${isMenuOpen || (hasDarkHero && !scrolled) ? 'text-white hover:text-gold' : 'text-navy dark:text-white hover:text-gold dark:hover:text-gold'
              }`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>


          <button
            ref={hamburgerRef}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={`p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${isMenuOpen || (hasDarkHero && !scrolled) ? 'text-white hover:text-gold' : 'text-navy dark:text-white hover:text-gold dark:hover:text-gold'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        aria-label="Mobile navigation"
        className={`lg:hidden fixed inset-0 z-40 bg-[#071A14] dark:bg-[#071A14] transition-all duration-500 overflow-y-auto ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-start min-h-[100svh] py-24 space-y-6 px-6 text-center">
          {mobileLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-serif text-white/80 hover:text-gold transition-all duration-300 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A14] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-gold mt-6 w-full max-w-xs"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
