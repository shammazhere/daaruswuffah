import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Building2, GraduationCap, Users, BookOpen } from 'lucide-react';
import Commitment from '../components/Commitment';

const VisionPage = () => {
    const visionItems = [
        {
            icon: <Building2 size={32} />,
            title: 'Model Islamic School',
            description: 'Establishing a comprehensive Islamic school that sets the standard for academic excellence and spiritual development',
            timeline: 'Phase 1: 2025-2027'
        },
        {
            icon: <BookOpen size={32} />,
            title: 'Hifzul Quran College',
            description: 'A dedicated institution for memorization and deep understanding of the Holy Quran with qualified scholars',
            timeline: 'Phase 2: 2027-2029'
        },
        {
            icon: <Users size={32} />,
            title: "Women's Islamic College",
            description: 'Empowering women through higher Islamic education and leadership development programs',
            timeline: 'Phase 3: 2029-2031'
        },
        {
            icon: <GraduationCap size={32} />,
            title: 'College of Islamic Studies',
            description: 'Advanced research and scholarship in Islamic sciences, producing future scholars and leaders',
            timeline: 'Phase 4: 2031-2033'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[72vh] flex items-center bg-gradient-to-b from-gold-light to-white pt-48 pb-36 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230e2f36' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Future</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-6 leading-tight">Vision & Roadmap</h1>
                        <p className="text-xl text-dark/70 mx-auto leading-relaxed">
                            Building a grand city of learning - A comprehensive educational ecosystem for generations to come
                        </p>
                    </motion.div>
                </div>

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

            {/* Vision Statement */}
            <section className="py-24 bg-peach">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-gold font-serif text-5xl md:text-7xl font-bold mb-12 tracking-wider uppercase">Vision</h2>
                        <h3 className="text-3xl md:text-4xl font-serif italic text-navy mb-8 leading-relaxed max-w-3xl mx-auto">
                            From the beginning, we envisioned creating a beacon of knowledge that will become a grand city of learning
                        </h3>
                        <p className="text-dark/70 text-lg leading-relaxed">
                            Our mission is not just to impart knowledge but to establish a foundation for generations to thrive,
                            academically and spiritually. We are committed to building an educational ecosystem that serves the
                            community and upholds the highest standards of Islamic scholarship.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-24 bg-gradient-to-b from-gold-light to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Development Plan</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">Future Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {visionItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="bg-white/40 backdrop-blur-md rounded-3xl p-10 border border-navy/5 hover:border-gold/30 hover:bg-white/60 transition-all duration-500 h-full shadow-lg shadow-navy/5">
                                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-navy mb-4">{item.title}</h3>
                                    <p className="text-navy/70 mb-6 leading-relaxed font-bold">{item.description}</p>
                                    <div className="pt-6 border-t border-navy/10">
                                        <span className="text-gold text-sm font-bold tracking-wider">{item.timeline}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitment (Animated Counts) */}
            <Commitment />
        </div>
    );
};

export default VisionPage;
