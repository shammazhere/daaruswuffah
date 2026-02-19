import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_campus.png';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-navy">
            {/* Background Image with Premium Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImg}
                    alt="Campus"
                    className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
                    fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy/90"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 lg:px-12 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    {/* <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in">
                        Welcome to AS-SWUFFAH FOUNDATION
                    </span> */}

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-shadow-md">
                        Imparting <span className="text-gold italic">Knowledge</span><br />
                        Illuminating <span className="text-gold">Hearts</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-peach/80 mb-10 font-sans tracking-wide">
                        Join a community dedicated to academic excellence and spiritual enrichment in the heart of Mangalore.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto">
                        <Link
                            to="/programs"
                            className="btn-gold text-lg py-4 flex items-center justify-center"
                        >
                            Explore Programs
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                        >
                            Apply Now
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-white/50 hover:text-gold transition-colors"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} className="animate-bounce" />
            </motion.div>

            {/* Premium Curved Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[120%] h-[70px] md:h-[110px] left-[-10%]"
                >
                    <path
                        d="M0,0 C450,150 750,150 1200,0 L1200,120 L0,120 Z"
                        className="fill-peach"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
