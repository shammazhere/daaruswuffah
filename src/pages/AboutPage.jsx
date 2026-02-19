import React from 'react';
import { motion } from 'framer-motion';
import chairmanImg from '../assets/chairman.png';
import viceChairmanImg from '../assets/vice_chairman.png';
import { GraduationCap, Heart, Users, Lightbulb } from 'lucide-react';

const AboutPage = () => {
    const values = [
        {
            title: 'Academic Excellence',
            description: 'Commitment to the highest standards of Islamic and modern education',
            icon: <GraduationCap size={40} />,
            color: 'from-blue-500/10 to-transparent'
        },
        {
            title: 'Spiritual Growth',
            description: 'Nurturing faith and character development alongside academics',
            icon: <Heart size={40} />,
            color: 'from-gold/10 to-transparent'
        },
        {
            title: 'Community Impact',
            description: 'Building leaders who serve and uplift their communities',
            icon: <Users size={40} />,
            color: 'from-peach/20 to-transparent'
        },
        {
            title: 'Innovation',
            description: 'Blending traditional wisdom with contemporary teaching methods',
            icon: <Lightbulb size={40} />,
            color: 'from-gold-light/20 to-transparent'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[67vh] flex items-center bg-gradient-to-b from-gold-light to-white pt-48 pb-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230e2f36' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Foundation</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-6 leading-tight">About AS-SWUFFAH</h1>
                        <p className="text-xl text-dark/70 mx-auto leading-relaxed">
                            Imparting Knowledge, Illuminating Hearts - A beacon of Islamic education and progress in Mangalore since 12+ years
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

            {/* Leadership Section */}
            <section className="bg-peach py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Leadership</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">Guiding Vision</h2>
                    </div>

                    <div className="space-y-32">
                        {/* Chairman */}
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
                                <span className="text-gold text-5xl font-serif mb-6 block leading-none">"</span>
                                <h3 className="text-2xl md:text-3xl font-serif italic text-navy mb-8 leading-relaxed">
                                    A beacon of Islamic education & progress in the coastal city of Mangalore.
                                </h3>
                                <p className="text-dark/70 text-lg mb-10 leading-relaxed">
                                    Our mission is to foster holistic development, blending deep-rooted Islamic values with academic excellence. We strive to empower individuals of all ages through diverse courses, enriching knowledge and nurturing spiritual growth.
                                </p>
                                <div className="border-l-4 border-gold pl-6 py-2">
                                    <h4 className="text-xl font-bold text-navy tracking-tight">BMM RASHEED SA'ADI BOLIYAR</h4>
                                    <p className="text-gold text-sm font-medium tracking-widest uppercase">Chairman</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Vice Chairman */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:order-2"
                            >
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-premium">
                                    <img src={viceChairmanImg} alt="Vice Chairman" className="w-full h-auto transition-all duration-700" loading="lazy" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:order-1"
                            >
                                <span className="text-gold text-5xl font-serif mb-6 block leading-none">"</span>
                                <h3 className="text-2xl md:text-3xl font-serif italic text-navy mb-8 leading-relaxed">
                                    Envisioning a grand city of learning where values shape leaders.
                                </h3>
                                <p className="text-dark/70 text-lg mb-10 leading-relaxed">
                                    From the beginning, we envisioned creating a beacon of knowledge that will become a grand city of learning. Our mission is not just to impart knowledge but to establish a foundation for generations to thrive, academically and spiritually.
                                </p>
                                <div className="border-l-4 border-gold pl-6 py-2">
                                    <h4 className="text-xl font-bold text-navy tracking-tight">HAJEE HH MUHAMMAD AMEEN</h4>
                                    <p className="text-gold text-sm font-medium tracking-widest uppercase">Vice Chairman</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%230e2f36' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Principles</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">Core Values</h2>
                        <div className="w-20 h-1 bg-gold rounded-full mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-white rounded-[2.5rem] p-10 border border-gold/20 shadow-[0_10px_40px_-15px_rgba(14,47,54,0.1)] hover:border-gold hover:shadow-premium transition-all duration-500 overflow-hidden`}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${value.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-navy mb-8 shadow-sm border border-navy/5 group-hover:bg-gold group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-navy mb-4 group-hover:text-gold transition-colors">{value.title}</h3>
                                    <p className="text-dark/60 leading-relaxed group-hover:text-dark/80 transition-colors">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
