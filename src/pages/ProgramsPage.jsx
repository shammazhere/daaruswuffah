import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { programsData, getIcon } from '../data/programsData';
import { Download, ArrowRight } from 'lucide-react';

const ProgramsPage = () => {
    const categories = ['Kids', 'Youth', 'Ladies', 'Gents'];

    return (
        <div className="bg-peach min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[67vh] flex items-center bg-gradient-to-b from-gold-light to-white pt-48 pb-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230e2f36' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Education Ecosystem</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-8 leading-tight">Our Programs</h1>
                        <p className="text-xl text-dark/70 mx-auto leading-relaxed max-w-2xl">
                            A comprehensive range of courses tailored for every stage of your spiritual and academic journey.
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
                            className="fill-white"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Categorized Sections */}
            {categories.map((category) => (
                <section key={category} className="py-24 relative even:bg-white odd:bg-peach/30">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Programs for</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">{category}</h2>
                            </div>
                            <div className="h-0.5 flex-grow mx-8 bg-navy/5 hidden md:block"></div>
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
                                            <div className="bg-white rounded-3xl overflow-hidden hover:shadow-premium transition-all duration-500 border-2 border-transparent hover:border-gold h-full flex flex-col">
                                                {/* Image Section */}
                                                <div className="relative h-56 overflow-hidden">
                                                    <img
                                                        src={program.image}
                                                        alt={program.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500"></div>
                                                </div>

                                                <div className="p-8 pt-0 flex flex-col flex-grow">
                                                    <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-gold mb-6 -mt-8 relative z-10 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                                        {getIcon(program.iconName)}
                                                    </div>

                                                    <h3 className="text-2xl font-serif font-bold text-navy mb-3">{program.name}</h3>
                                                    <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">{program.tagline}</p>
                                                    <p className="text-dark/60 text-sm mb-6 leading-relaxed flex-grow">{program.description}</p>

                                                    <div className="pt-6 border-t border-navy/10 mt-auto">
                                                        <p className="text-xs text-dark/40 uppercase tracking-widest mb-2">Target Audience</p>
                                                        <p className="text-navy font-bold mb-4">{program.targetAudience}</p>

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
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-serif font-bold text-navy mb-6">Download Our Prospectus</h2>
                        <p className="text-dark/60 text-lg mb-10">
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
