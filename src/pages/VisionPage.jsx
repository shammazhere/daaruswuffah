import React from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Users, BookOpen } from 'lucide-react';
import Commitment from '../components/Commitment';

const VisionPage = () => {
    const visionItems = [
        { icon: <Building2 size={32} />, title: 'Model Islamic School', description: 'Establishing a comprehensive Islamic school that sets the standard for academic excellence and spiritual development', timeline: 'Phase 1: 2025–2027' },
        { icon: <BookOpen size={32} />, title: 'Hifzul Quran College', description: 'A dedicated institution for memorization and deep understanding of the Holy Quran with qualified scholars', timeline: 'Phase 2: 2027–2029' },
        { icon: <Users size={32} />, title: "Women's Islamic College", description: 'Empowering women through higher Islamic education and leadership development programs', timeline: 'Phase 3: 2029–2031' },
        { icon: <GraduationCap size={32} />, title: 'College of Islamic Studies', description: 'Advanced research and scholarship in Islamic sciences, producing future scholars and leaders', timeline: 'Phase 4: 2031–2033' }
    ];

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,161,90,0.12) 0%, transparent 70%)' }} />
                <div className="absolute -bottom-10 left-0 w-[400px] h-[400px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26,85,96,0.25) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Future</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">Vision &amp; Roadmap</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            Building a grand city of learning — A comprehensive educational ecosystem for generations to come
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Vision Statement */}
            <section className="py-24 bg-peach dark:bg-[#071d21]">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-gold font-serif text-5xl md:text-7xl font-bold mb-12 tracking-wider uppercase">Vision</h2>
                        <h3 className="text-3xl md:text-4xl font-serif italic text-navy dark:text-gold-light mb-8 leading-relaxed max-w-3xl mx-auto">
                            From the beginning, we envisioned creating a beacon of knowledge that will become a grand city of learning
                        </h3>
                        <p className="text-dark/70 dark:text-peach/80 text-lg leading-relaxed">
                            Our mission is not just to impart knowledge but to establish a foundation for generations to thrive, academically and spiritually.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-24 bg-white dark:bg-[#0c2429] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 opacity-0 dark:opacity-100 pointer-events-none blur-3xl" style={{ background: 'radial-gradient(circle, rgba(199,161,90,0.06) 0%, transparent 70%)' }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Development Plan</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Future Projects</h2>
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
                                <div className="bg-white dark:bg-[#0a2025] rounded-3xl p-10 border border-navy/5 dark:border-gold/10 hover:border-gold/30 transition-all duration-500 h-full shadow-gold">
                                    <div className="w-16 h-16 bg-gold/10 dark:bg-gold/5 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-4">{item.title}</h3>
                                    <p className="text-dark/70 dark:text-peach/80 mb-6 leading-relaxed">{item.description}</p>
                                    <div className="pt-6 border-t border-navy/10 dark:border-gold/10">
                                        <span className="text-gold text-sm font-bold tracking-wider">{item.timeline}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Commitment />
        </div>
    );
};

export default VisionPage;
