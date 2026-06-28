import React from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
const classroomImg = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80';
const libraryImg = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80';
import { CheckCircle, BookOpen, Users, Wifi, Shield } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const CampusPage = () => {
    const facilities = [
        {
            title: 'Modern Classrooms',
            description: 'State-of-the-art learning spaces equipped with the latest educational technology',
            image: classroomImg,
            features: ['Smart boards and projectors', 'Comfortable seating arrangements', 'Natural lighting and ventilation', 'Audio-visual equipment'],
            icon: <BookOpen size={24} />
        },
        {
            title: 'Comprehensive Library',
            description: 'A sanctuary of knowledge with extensive Islamic and academic resources',
            image: libraryImg,
            features: ['Vast collection of Islamic texts', 'Modern academic resources', 'Quiet study areas', 'Digital catalog system'],
            icon: <Users size={24} />
        }
    ];

    const amenities = [
        { icon: <Wifi size={20} />, title: 'High-Speed Internet', description: 'Campus-wide connectivity' },
        { icon: <Shield size={20} />, title: 'Safe Environment', description: '24/7 security and monitoring' },
        { icon: <BookOpen size={20} />, title: 'Resource Center', description: 'Academic support services' },
        { icon: <Users size={20} />, title: 'Community Spaces', description: 'Areas for collaboration' }
    ];

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,161,90,0.12) 0%, transparent 70%)' }} />
                <div className="absolute -bottom-10 left-0 w-[400px] h-[400px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26,85,96,0.25) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Campus</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">World-Class Facilities</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            A nurturing environment designed to inspire learning and spiritual growth
                        </p>
                    </motion.div>
                </div>
                <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />
            </section>

            </div>

            {/* Facilities Section */}
            <section className="py-24 bg-peach dark:bg-[#071d21]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
                    {facilities.map((facility, index) => (
                        <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={index % 2 === 1 ? 'lg:order-2' : ''}
                            >
                                <div className="relative">
                                    <div className="rounded-3xl overflow-hidden shadow-premium">
                                        <img src={facility.image} alt={facility.title} className="w-full h-auto" loading="lazy" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={index % 2 === 1 ? 'lg:order-1' : ''}
                            >
                                <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-gold mb-6">
                                    {facility.icon}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-gold-light mb-6">{facility.title}</h2>
                                <p className="text-dark/70 dark:text-peach/80 text-lg mb-8 leading-relaxed">{facility.description}</p>
                                <div className="space-y-4">
                                    {facility.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="text-dark/70 dark:text-peach/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Amenities Grid */}
            <section className="py-24 bg-white dark:bg-[#0c2429]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Campus Amenities</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Everything You Need</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-peach/30 dark:bg-[#071d21] rounded-3xl p-8 text-center hover:bg-white dark:hover:bg-[#0a2025] hover:shadow-gold transition-all duration-500 border border-navy/5 dark:border-gold/10"
                            >
                                <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                                    {amenity.icon}
                                </div>
                                <h3 className="text-lg font-bold text-navy dark:text-gold-light mb-2">{amenity.title}</h3>
                                <p className="text-dark/60 dark:text-peach/70 text-sm">{amenity.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampusPage;
