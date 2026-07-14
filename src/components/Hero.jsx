import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
const heroVideo = new URL('../assets/hero-bg.mp4', import.meta.url).href;
const heroPoster = new URL('../assets/hero-poster.webp', import.meta.url).href;
import WaveDivider from './WaveDivider';

const Hero = () => {
    return (
        <section id="hero" className="relative h-[100svh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-navy">
            {/* Background Video with Premium Overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={heroPoster}
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05] saturate-[0.9] animate-slow-zoom"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                
                {/* Brand Pattern Overlay */}
                <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

                {/* Radial Vignette Overlay for focus on typography */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,47,54,0.05)_0%,rgba(7,26,20,0.45)_100%)] pointer-events-none"></div>

                {/* Linear Gradient Overlay for smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/35 to-navy/85 dark:from-[#071A14]/10 dark:via-[#071A14]/35 dark:to-[#071A14]/90 pointer-events-none"></div>
            </div>

            {/* Subtle gold glow top-right */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(199,161,90,0.08) 0%, transparent 70%)' }} />

            {/* Content */}
            <div className="container relative z-10 px-6 lg:px-12 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-shadow-md">
                        Imparting <span className="text-gold italic">Knowledge</span><br />
                        Illuminating <span className="text-gold">Hearts</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-peach/80 mb-10 font-sans tracking-wide">
                        Join a community dedicated to academic excellence and spiritual enrichment in the heart of Mangalore.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto">
                        <Link to="/programs" className="btn-gold text-lg py-4 flex items-center justify-center">
                            Explore Programs
                        </Link>
                        <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                            Apply Now
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-white/80 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full p-1"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll to about section"
            >
                <ChevronDown size={32} className="animate-bounce" />
            </motion.button>

            {/* Wave — transitions into the peach/dark section below */}
            <WaveDivider fillLight="#f7f5f0" fillDark="#071d21" />
        </section>
    );
};

export default Hero;
