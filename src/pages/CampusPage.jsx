import React from 'react';
import { motion } from 'framer-motion';
import classroomImg from '../assets/classroom.png';
import libraryImg from '../assets/library.png';
import { CheckCircle, BookOpen, Users, Wifi, Shield } from 'lucide-react';

const CampusPage = () => {
    const facilities = [
        {
            title: 'Modern Classrooms',
            description: 'State-of-the-art learning spaces equipped with the latest educational technology',
            image: classroomImg,
            features: [
                'Smart boards and projectors',
                'Comfortable seating arrangements',
                'Natural lighting and ventilation',
                'Audio-visual equipment'
            ],
            icon: <BookOpen size={24} />
        },
        {
            title: 'Comprehensive Library',
            description: 'A sanctuary of knowledge with extensive Islamic and academic resources',
            image: libraryImg,
            features: [
                'Vast collection of Islamic texts',
                'Modern academic resources',
                'Quiet study areas',
                'Digital catalog system'
            ],
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
            {/* Hero Section */}
            <section className="relative min-h-[72vh] flex items-center bg-gradient-to-b from-gold-light to-white pt-48 pb-36 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230e2f36' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Campus</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-6 leading-tight">World-Class Facilities</h1>
                        <p className="text-xl text-dark/70 mx-auto leading-relaxed">
                            A nurturing environment designed to inspire learning and spiritual growth
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

            {/* Facilities Section */}
            <section className="py-24 bg-peach">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
                    {facilities.map((facility, index) => (
                        <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
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
                                    <div className={`absolute ${index % 2 === 0 ? '-top-6 -left-6' : '-bottom-6 -right-6'} w-24 h-24 bg-gold/10 rounded-full blur-2xl`}></div>
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
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">{facility.title}</h2>
                                <p className="text-dark/70 text-lg mb-8 leading-relaxed">{facility.description}</p>

                                <div className="space-y-4">
                                    {facility.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="text-dark/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Amenities Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Campus Amenities</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">Everything You Need</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-peach/30 rounded-3xl p-8 text-center hover:bg-white hover:shadow-premium transition-all duration-500 border border-navy/5"
                            >
                                <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                                    {amenity.icon}
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2">{amenity.title}</h3>
                                <p className="text-dark/60 text-sm">{amenity.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampusPage;
