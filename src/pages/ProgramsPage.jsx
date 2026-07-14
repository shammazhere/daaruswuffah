import React from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
import { programsData, getIcon } from '../data/programsData';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramsPage = () => {
    const categories = ['Kids', 'Ladies', 'Gents'];

    return (
        <div className="bg-peach dark:bg-[#071d21] min-h-screen">
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />

                {/* Radial gold glow — top right (dark mode accent) */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/10 to-transparent pointer-events-none opacity-0 dark:opacity-100 blur-3xl" />
                {/* Subtle teal glow bottom left */}
                <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#1a5560]/20 to-transparent pointer-events-none opacity-0 dark:opacity-100 blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Education Ecosystem</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-8 leading-tight">Our Programs</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed max-w-2xl">
                            A comprehensive range of courses tailored for every stage of your spiritual and academic journey.
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Categorized Sections */}
            {categories.map((category, catIndex) => (
                <section key={category} className={`py-24 relative ${catIndex % 2 === 0 ? 'bg-peach/30 dark:bg-[#071d21]' : 'bg-white dark:bg-[#0c2429]'}`}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Programs for</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">{category}</h2>
                            </div>
                            <div className="h-0.5 flex-grow mx-8 bg-navy/5 dark:bg-gold/10 hidden md:block"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {programsData
                                .filter(p => p.category === category)
                                .map((program, index) => (
                                    <motion.div
                                        key={program.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link to={`/program/${program.id}`} className="group block h-full">
                                            <div className="bg-white dark:bg-[#0a2025] rounded-3xl overflow-hidden shadow-gold hover:shadow-gold-hover hover:scale-[1.02] transition-premium border-2 border-transparent hover:border-gold h-full flex flex-col">
                                                <div className="relative h-56 overflow-hidden">
                                                    <img src={program.image} alt={program.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500"></div>
                                                </div>
                                                <div className="p-8 pt-0 flex flex-col flex-grow">
                                                    <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-gold mb-6 -mt-8 relative z-10 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-premium">
                                                        {getIcon(program.iconName)}
                                                    </div>
                                                    <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-3">{program.name}</h3>
                                                    <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">{program.tagline}</p>
                                                    <p className="text-dark/60 dark:text-peach/70 text-sm mb-6 leading-relaxed flex-grow">{program.description}</p>
                                                    <div className="pt-6 border-t border-navy/10 dark:border-gold/10 mt-auto">
                                                        <p className="text-xs text-dark/60 dark:text-peach/70 uppercase tracking-widest mb-2">Target Audience</p>
                                                        <p className="text-navy dark:text-peach font-bold mb-4">{program.targetAudience}</p>
                                                        <div className="flex items-center gap-2 text-gold font-bold text-sm">
                                                            View Details
                                                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="py-24 bg-white dark:bg-[#0c2429]">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-serif font-bold text-navy dark:text-gold-light mb-6">Download Our Prospectus</h2>
                        <p className="text-dark/60 dark:text-peach/70 text-lg mb-10">
                            Get detailed information about all our programs, admission process, and curriculum
                        </p>
                        <button className="btn-gold text-lg py-5 px-10 inline-flex items-center gap-3">
                            <Download size={20} />
                            Download Prospectus
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProgramsPage;
