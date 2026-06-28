import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { programsData } from '../data/programsData';
import { ChevronLeft, ChevronRight, ArrowRight, User, Users, Baby, TrendingUp } from 'lucide-react';

const Programs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isMobile, setIsMobile] = useState(() => 
        typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        };
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);

    const categories = [
        { id: 'All', label: 'All', icon: <Users size={18} /> },
        { id: 'Kids', label: 'Kids', icon: <Baby size={18} /> },
        { id: 'Ladies', label: 'Ladies', icon: <User size={18} /> },
        { id: 'Gents', label: 'Gents', icon: <User size={18} /> },
    ];

    const filteredPrograms = activeCategory === 'All'
        ? programsData
        : programsData.filter(program => program.category === activeCategory);

    const [prevCategory, setPrevCategory] = useState(activeCategory);
    if (activeCategory !== prevCategory) {
        setPrevCategory(activeCategory);
        setCurrentIndex(0);
    }

    const maxIndex = isMobile ? filteredPrograms.length : Math.max(1, filteredPrograms.length - 1);

    // Reset index if it goes out of bounds on transition
    if (currentIndex >= maxIndex && maxIndex > 0) {
        setCurrentIndex(0);
    }

    const nextSlide = () => {
        if (maxIndex <= 1) return;
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) >= maxIndex ? 0 : prev + 1);
    };

    const prevSlide = () => {
        if (maxIndex <= 1) return;
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1) < 0 ? maxIndex - 1 : prev - 1);
    };

    // Auto-slide logic
    useEffect(() => {
        if (filteredPrograms.length <= 1) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) >= maxIndex ? 0 : prev + 1);
        }, 2500);

        return () => clearInterval(timer);
    }, [filteredPrograms.length, maxIndex]);

    const getVisiblePrograms = () => {
        if (filteredPrograms.length === 0) return [];
        if (filteredPrograms.length === 1) return [filteredPrograms[0]];

        let visible = [];
        visible.push(filteredPrograms[currentIndex]);

        if (!isMobile) {
            let nextIdx = currentIndex + 1;
            if (nextIdx >= filteredPrograms.length) nextIdx = 0;
            visible.push(filteredPrograms[nextIdx]);
        }
        return visible;
    };

    const slideVariants = {
        initial: (dir) => ({
            opacity: 0,
            x: dir > 0 ? 200 : -200
        }),
        animate: {
            opacity: 1,
            x: 0
        },
        exit: (dir) => ({
            opacity: 0,
            x: dir > 0 ? -200 : 200
        })
    };

    return (
        <section id="programs" className="bg-white dark:bg-[#0c2429] py-24 overflow-hidden relative">
            {/* Unique Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-peach/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    <div className="max-w-2xl text-center lg:text-left">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Academic Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light leading-tight mb-6">
                            An Insight of <span className="text-gold italic">The Courses</span>
                        </h2>
                        <div className="w-24 h-1 bg-gold rounded-full mb-8 mx-auto lg:ml-0"></div>
                        <p className="text-dark/70 dark:text-peach/80 text-lg leading-relaxed font-light">
                            Assuffa encourages education regardless of age. We believe in lifelong learning and providing opportunities for spiritual and academic growth for every member of the community.
                        </p>
                    </div>

                    {/* Filter Buttons Grid */}
                    <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
                                    col-span-2 px-2 py-6 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 border-2
                                    ${activeCategory === cat.id
                                        ? 'bg-navy text-white border-navy shadow-lg scale-105'
                                        : 'bg-white dark:bg-[#0a2025] text-navy/70 dark:text-peach/70 border-navy/10 dark:border-gold/10 hover:border-gold hover:text-navy dark:hover:text-gold hover:shadow-md'}
                                `}
                            >
                                <span className={activeCategory === cat.id ? 'text-gold' : 'text-navy/40'}>
                                    {cat.icon}
                                </span>
                                <span className="font-bold tracking-widest text-[10px] uppercase">{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Slider and Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Carousel */}
                    <div className="lg:col-span-7 relative px-8">
                        {filteredPrograms.length > 1 && (
                            <>
                                <button onClick={prevSlide} className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-navy/20 dark:border-gold/20 flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300 bg-white dark:bg-[#0a2025] dark:text-peach shadow-lg">
                                    <ChevronLeft size={20} className="md:w-6 md:h-6" />
                                </button>
                                <button onClick={nextSlide} className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-navy/20 dark:border-gold/20 flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300 bg-white dark:bg-[#0a2025] dark:text-peach shadow-lg">
                                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                                </button>
                            </>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AnimatePresence mode='popLayout' custom={direction}>
                                {getVisiblePrograms().map((program) => (
                                    <motion.div
                                        key={program.id}
                                        layout={!isMobile}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        drag={isMobile ? "x" : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={(e, info) => {
                                            const swipeThreshold = 50;
                                            if (info.offset.x < -swipeThreshold) {
                                                nextSlide();
                                            } else if (info.offset.x > swipeThreshold) {
                                                prevSlide();
                                            }
                                        }}
                                        style={{ 
                                            ...(isMobile ? { willChange: 'transform, opacity', touchAction: 'pan-y' } : {}), 
                                            WebkitBackfaceVisibility: 'hidden', 
                                            WebkitPerspective: 1000,
                                            WebkitTransform: 'translateZ(0)' 
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        className="group relative h-[480px] rounded-[2rem] overflow-hidden cursor-pointer shadow-premium"
                                    >
                                        <Link to={`/program/${program.id}`} className="block w-full h-full select-none">
                                            <img src={program.image} alt={program.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu [backface-visibility:hidden]" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="text-xl font-serif font-bold text-white mb-2 uppercase tracking-wide">{program.name}</h3>
                                                    <span className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs">
                                                        View Program <ArrowRight size={14} />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Info Area */}
                    <div className="lg:col-span-5 pl-0 lg:pl-8">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="bg-navy/5 dark:bg-[#071d21] p-8 rounded-3xl border border-navy/5 dark:border-gold/10 relative overflow-hidden"
                        >
                            <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-4 relative z-10">
                                {activeCategory === 'All' ? 'Education for All' : `Programs for ${categories.find(c => c.id === activeCategory)?.label || activeCategory}`}
                            </h3>
                            <div className="w-12 h-1 bg-gold rounded-full mb-6 relative z-10"></div>
                            <p className="text-dark/70 dark:text-peach/70 leading-relaxed mb-8 relative z-10 text-sm">
                                {activeCategory === 'All' ? "Our curriculum caters to every stage of development, ensuring academic excellence and spiritual growth." :
                                    activeCategory === 'Kids' ? "Start them young with our nurturing programs combining foundational academics with moral education." :
                                        activeCategory === 'Ladies' ? "Empowering women with knowledge that transforms families and communities." :
                                            "Programs tailored for men to grow in knowledge and leadership."
                                }
                            </p>
                            <Link to="/programs" className="inline-flex items-center gap-3 text-navy font-bold uppercase tracking-widest hover:text-gold transition-colors text-sm">
                                Explore Full Curriculum
                                <div className="w-8 h-px bg-current"></div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
