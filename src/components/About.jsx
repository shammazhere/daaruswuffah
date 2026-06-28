import React from 'react';
import { motion } from 'framer-motion';
import chairmanImg from '../assets/Ustad.webp';

const About = () => {
    return (
        <section id="about" className="bg-peach dark:bg-[#071d21] py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Foundation</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Leadership &amp; Vision</h2>
                </div>

                <div className="space-y-32">
                    {/* Chairman Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-premium">
                                <img src={chairmanImg} alt="Chairman" className="w-full h-auto transition-all duration-700" loading="lazy" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold text-5xl font-serif mb-6 block leading-none">“</span>
                            <h3 className="text-2xl md:text-3xl font-serif italic text-navy dark:text-gold-light mb-8 leading-relaxed">
                                A beacon of Islamic education &amp; progress in the coastal city of Mangalore.
                            </h3>
                            <p className="text-dark/70 dark:text-peach/85 text-lg mb-10 leading-relaxed">
                                Our mission is to foster holistic development, blending deep-rooted Islamic values with academic excellence. We strive to empower individuals of all ages through diverse courses, enriching knowledge and nurturing spiritual growth.
                            </p>
                            <div className="border-l-4 border-gold pl-6 py-2">
                                <h4 className="text-xl font-bold text-navy dark:text-peach tracking-tight">BMM RASHEED SA'ADI BOLIYAR</h4>
                                <p className="text-gold text-sm font-medium tracking-widest uppercase">Chairman</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
