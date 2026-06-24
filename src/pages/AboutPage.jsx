import React from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
const chairmanImg = 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=800&q=80';
const viceChairmanImg = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80';
import { GraduationCap, Heart, Users, Lightbulb } from 'lucide-react';

const AboutPage = () => {
    const values = [
        { title: 'Academic Excellence', description: 'Commitment to the highest standards of Islamic and modern education', icon: <GraduationCap size={40} />, color: 'from-blue-500/10 to-transparent' },
        { title: 'Spiritual Growth', description: 'Nurturing faith and character development alongside academics', icon: <Heart size={40} />, color: 'from-gold/10 to-transparent' },
        { title: 'Community Impact', description: 'Building leaders who serve and uplift their communities', icon: <Users size={40} />, color: 'from-peach/20 to-transparent' },
        { title: 'Innovation', description: 'Blending traditional wisdom with contemporary teaching methods', icon: <Lightbulb size={40} />, color: 'from-gold-light/20 to-transparent' }
    ];

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                {/* Gold glow top-right (dark mode) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,161,90,0.12) 0%, transparent 70%)' }} />
                {/* Teal glow bottom-left (dark mode) */}
                <div className="absolute -bottom-10 left-0 w-[400px] h-[400px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26,85,96,0.25) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Foundation</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">About AS-SWUFFAH</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            Imparting Knowledge, Illuminating Hearts — A beacon of Islamic education in Mangalore since 12+ years
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Leadership Section */}
            <section className="bg-peach dark:bg-[#071d21] py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Leadership</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Guiding Vision</h2>
                    </div>

                    <div className="space-y-32">
                        {/* Chairman */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-premium">
                                    <img src={chairmanImg} alt="Chairman" className="w-full h-auto transition-all duration-700" loading="lazy" />
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <span className="text-gold text-5xl font-serif mb-6 block leading-none">"</span>
                                <h3 className="text-2xl md:text-3xl font-serif italic text-navy dark:text-gold-light mb-8 leading-relaxed">
                                    A beacon of Islamic education &amp; progress in the coastal city of Mangalore.
                                </h3>
                                <p className="text-dark/70 dark:text-peach/80 text-lg mb-10 leading-relaxed">
                                    Our mission is to foster holistic development, blending deep-rooted Islamic values with academic excellence. We strive to empower individuals of all ages through diverse courses, enriching knowledge and nurturing spiritual growth.
                                </p>
                                <div className="border-l-4 border-gold pl-6 py-2">
                                    <h4 className="text-xl font-bold text-navy dark:text-peach tracking-tight">BMM RASHEED SA'ADI BOLIYAR</h4>
                                    <p className="text-gold text-sm font-medium tracking-widest uppercase">Chairman</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Vice Chairman */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:order-2">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-premium">
                                    <img src={viceChairmanImg} alt="Vice Chairman" className="w-full h-auto transition-all duration-700" loading="lazy" />
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:order-1">
                                <span className="text-gold text-5xl font-serif mb-6 block leading-none">"</span>
                                <h3 className="text-2xl md:text-3xl font-serif italic text-navy dark:text-gold-light mb-8 leading-relaxed">
                                    Envisioning a grand city of learning where values shape leaders.
                                </h3>
                                <p className="text-dark/70 dark:text-peach/80 text-lg mb-10 leading-relaxed">
                                    From the beginning, we envisioned creating a beacon of knowledge that will become a grand city of learning. Our mission is not just to impart knowledge but to establish a foundation for generations to thrive.
                                </p>
                                <div className="border-l-4 border-gold pl-6 py-2">
                                    <h4 className="text-xl font-bold text-navy dark:text-peach tracking-tight">HAJEE HH MUHAMMAD AMEEN</h4>
                                    <p className="text-gold text-sm font-medium tracking-widest uppercase">Vice Chairman</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white dark:bg-[#0c2429] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Principles</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Core Values</h2>
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
                                className="group relative bg-white dark:bg-[#0a2025] rounded-[2.5rem] p-10 border border-gold/20 dark:border-gold/10 shadow-gold hover:border-gold hover:shadow-gold-hover transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${value.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-peach dark:bg-[#071d21] rounded-2xl flex items-center justify-center text-navy dark:text-gold mb-8 border border-navy/5 dark:border-gold/10 group-hover:bg-gold group-hover:text-white transition-all duration-500 group-hover:scale-110">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-4 group-hover:text-gold transition-colors">{value.title}</h3>
                                    <p className="text-dark/60 dark:text-peach/70 leading-relaxed">{value.description}</p>
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
