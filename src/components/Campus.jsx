import React from 'react';
import { motion } from 'framer-motion';
import classroomImg from '../assets/classroom.png';
import libraryImg from '../assets/library.png';
import { CheckCircle } from 'lucide-react';

const Campus = () => {
    return (
        <section id="campus" className="bg-peach py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">World-Class Facilities</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">The Heart of Learning</h2>
                </div>

                <div className="space-y-32">
                    {/* Classrooms */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-serif font-bold text-navy mb-6">Designed for Excellence</h3>
                            <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                                Our classrooms are designed to create a comfortable and productive learning environment. Featuring modern visual aids and climate control, we ensure students can focus on their educational journey with peace of mind.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Full Air Conditioning', 'Modern Visual Aids', 'Ergonomic Seating', 'Intuitive Layout'].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-navy">
                                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                            <CheckCircle size={14} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-premium">
                                <img src={classroomImg} alt="Classroom" className="w-full h-auto" loading="lazy" />
                            </div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
                        </motion.div>
                    </div>

                    {/* Library */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2"
                        >
                            <h3 className="text-3xl font-serif font-bold text-navy mb-6">A Sanctuary of Knowledge</h3>
                            <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                                Our library is a peaceful haven with a rich collection of Islamic books. From classical texts to modern research papers, it offers an ideal space for students and researchers to deepen their understanding.
                            </p>
                            <button className="btn-gold px-10">Explore Collection</button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-1 relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-premium">
                                <img src={libraryImg} alt="Library" className="w-full h-auto" loading="lazy" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-navy/10 rounded-full blur-2xl"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campus;
