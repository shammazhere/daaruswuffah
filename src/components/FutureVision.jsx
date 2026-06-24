import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, UserCheck } from 'lucide-react';

const visions = [
    { title: 'Model Islamic School', icon: <School size={32} />, desc: 'Embodying the highest standards of Islamic and academic education for the next generation.' },
    { title: 'Hifzul Quran College', icon: <BookOpen size={32} />, desc: 'A dedicated institution focused on the memorization and mastery of the Holy Quran.' },
    { title: 'Women’s Islamic College', icon: <UserCheck size={32} />, desc: 'A dedicated space for women to pursue their educational aspirations in a safe environment.' },
    { title: 'College of Islamic Studies', icon: <GraduationCap size={32} />, desc: 'A wide range of academic programs for in-depth knowledge and advanced degrees.' },
];

const FutureVision = () => {
    return (
        <section id="vision" className="bg-gradient-to-b from-gold-light to-white dark:from-[#0f2b30] dark:to-[#071d21] py-32 text-navy dark:text-peach/90 relative overflow-hidden">
            {/* Unique Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C7A15A' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Roadmap</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Vision for the Future</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {visions.map((vision, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-white/40 dark:bg-[#0a2025]/60 backdrop-blur-md border border-navy/5 dark:border-gold/10 p-10 rounded-3xl hover:bg-white/60 dark:hover:bg-[#0a2025]/80 hover:border-gold/30 transition-all duration-500 shadow-lg shadow-navy/5"
                        >
                            <div className="flex items-start gap-8">
                                <div className="p-5 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 shrink-0">
                                    {vision.icon}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-serif font-bold mb-3 text-navy dark:text-gold-light group-hover:text-gold transition-colors">{vision.title}</h4>
                                    <p className="text-navy/70 dark:text-peach/70 leading-relaxed font-bold">{vision.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-flex items-center gap-6">
                        <div className="h-px w-12 bg-gold/50"></div>
                        <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Building a Grand City of Learning</p>
                        <div className="h-px w-12 bg-gold/50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureVision;
