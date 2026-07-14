import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programsData, getIcon } from '../data/programsData';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ProgramDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const program = programsData.find(p => p.id === id);

    if (!program) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-peach dark:bg-[#071d21] py-20">
                <h2 className="text-3xl font-serif font-bold text-navy dark:text-gold-light mb-4">Program Not Found</h2>
                <Link to="/" className="btn-gold">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-peach dark:bg-[#071d21] min-h-screen flex flex-col">
            <div className="hero-arc-wrap">
            <div
                className="relative bg-navy h-[100svh] min-h-[600px] flex flex-col overflow-hidden z-10 hero-arc"
            >
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img src={program.image} alt="" decoding="async" className="w-full h-full object-cover object-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
                </div>
                {/* Gold glow top-right */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(199,161,90,0.08) 0%, transparent 70%)' }} />

                {/* Zone 1: Back button — pinned just below the navbar */}
                <div className="relative z-20 pt-32 lg:pt-48 max-w-7xl mx-auto px-6 lg:px-12 w-full shrink-0">
                    <motion.button
                        onClick={() => navigate(-1)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center text-gold hover:text-white uppercase tracking-[0.3em] text-[10px] font-bold transition-all group"
                    >
                        <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-2 transition-transform" /> Back to Programs
                    </motion.button>
                </div>

                {/* Zone 2: Program content — centered in remaining space */}
                <div className="flex-grow flex items-center relative z-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8 text-gold backdrop-blur-md">
                                <span>{getIcon(program.iconName)}</span>
                                <span className="text-xs font-bold uppercase tracking-widest">{program.category}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
                                {program.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-peach/80 font-serif italic max-w-2xl leading-relaxed">
                                {program.tagline}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
            </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow max-w-7xl mx-auto py-20 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <motion.div className="lg:col-span-2 space-y-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="bg-white dark:bg-[#0c2429] rounded-3xl p-10 shadow-premium border border-navy/5 dark:border-gold/10">
                            <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-8 border-b border-navy/5 dark:border-gold/10 pb-4">Course Overview</h3>
                            <p className="text-dark/70 dark:text-peach/85 leading-relaxed text-lg mb-6">{program.description}</p>
                            <p className="text-dark/70 dark:text-peach/85 leading-relaxed text-lg italic">
                                At AS-SWUFFAH, we believe in providing education that transcends mere academics. The {program.name} program is meticulously crafted to ensure every student receives the guidance and spiritual nurturing required to excel.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-[#0c2429] rounded-3xl p-10 shadow-premium border border-navy/5 dark:border-gold/10">
                            <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-8">What You Will Gain</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {program.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-peach/30 dark:bg-[#071d21] rounded-2xl group hover:bg-gold/10 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                                            <CheckCircle size={16} />
                                        </div>
                                        <span className="font-bold text-navy dark:text-peach text-sm uppercase tracking-wide">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div className="lg:col-span-1" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="bg-navy rounded-3xl p-10 sticky top-32 shadow-premium">
                            <h4 className="font-bold text-gold uppercase tracking-[0.2em] mb-8 text-xs">Admission Details</h4>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Target Audience</p>
                                    <p className="text-lg font-serif font-bold text-white">{program.targetAudience}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Duration</p>
                                    <p className="text-lg font-serif font-bold text-white">Academic Sessions</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Certification</p>
                                    <p className="text-lg font-serif font-bold text-white">Foundation Diploma</p>
                                </div>
                                <Link to="/contact" className="w-full btn-gold py-5 mt-6 uppercase tracking-[0.2em] text-sm flex items-center justify-center text-center">
                                    Apply Now
                                </Link>
                                <p className="text-[10px] text-center text-white/80 mt-6 leading-relaxed">
                                    Limited seats available. Please complete your application to secure enrollment.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetail;
