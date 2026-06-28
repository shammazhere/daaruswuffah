import React, { useState } from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Image as ImageIcon, X } from 'lucide-react';

const GalleryPage = () => {
    const categories = ['All', 'Campus', 'Classrooms', 'Library', 'Events'];
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const closeBtnRef = React.useRef(null);

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };
        if (selectedImage) {
            document.addEventListener('keydown', handleKeyDown);
            // Move focus to close button when lightbox opens
            setTimeout(() => closeBtnRef.current?.focus(), 50);
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    const galleryItems = [
        {
            id: 1,
            category: 'Campus',
            title: 'Main Entrance & Mosque Architecture',
            desc: 'The beautiful architecture that defines our campus landscape.',
            url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80'
        },
        {
            id: 2,
            category: 'Classrooms',
            title: 'Modern Fully AC Lecture Hall',
            desc: 'Equipped with smart aids, ergonomic seating, and audio tools.',
            url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80'
        },
        {
            id: 3,
            category: 'Library',
            title: 'Classic Islamic Book Sanctuary',
            desc: 'Housing hundreds of ancient manuscripts, translation papers, and study spaces.',
            url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80'
        },
        {
            id: 4,
            category: 'Events',
            title: 'Annual Graduation Convocation',
            desc: 'Honoring our dedicated PUC & Sharee\'ath graduates.',
            url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80'
        },
        {
            id: 5,
            category: 'Events',
            title: 'Weekly Youth Reflection Circle',
            desc: 'Interactive guidance, reflections, and contemporary discussions.',
            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80'
        },
        {
            id: 6,
            category: 'Campus',
            title: 'Green Surrounding Campus Pathway',
            desc: 'A calm, serene environment to inspire peaceful reflection.',
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80'
        },
        {
            id: 7,
            category: 'Classrooms',
            title: 'Kids Foundational Class Activity',
            desc: 'Developing basic ethics and Islamic history knowledge in playful ways.',
            url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80'
        },
        {
            id: 8,
            category: 'Library',
            title: 'Self-Discovery Research Study Area',
            desc: 'Dedicated desks with access to online resources and reference systems.',
            url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80'
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(214,180,76,0.1) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">A Visual Journey</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">Academy Gallery</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            Glance into our vibrant learning activities, modern amenities, and rich campus events.
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Gallery Grid Section */}
            <section className="py-24 bg-peach dark:bg-[#071A14]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Category Filter bar */}
                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${
                                    activeCategory === cat
                                        ? 'bg-gold text-white shadow-md'
                                        : 'bg-white dark:bg-[#0D2A21] text-navy dark:text-peach/85 border border-navy/5 dark:border-white/5 hover:border-gold/30'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setSelectedImage(item)}
                                    className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-500 bg-white dark:bg-[#0D2A21] cursor-pointer"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                                                <Search size={20} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-gold text-xs font-bold uppercase tracking-widest">{item.category}</span>
                                        <h3 className="text-lg font-bold text-navy dark:text-gold-light mt-2 mb-1">{item.title}</h3>
                                        <p className="text-xs text-dark/60 dark:text-peach/70 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-55 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            ref={closeBtnRef}
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close image preview"
                            className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-240"
                        >
                            <X size={24} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="max-w-5xl w-full rounded-[2rem] overflow-hidden bg-white dark:bg-[#0D2A21] border border-white/15"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video w-full">
                                <img
                                    src={selectedImage.url}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-10">
                                <span className="text-gold text-sm font-bold uppercase tracking-widest">{selectedImage.category}</span>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy dark:text-gold-light mt-2 mb-3">{selectedImage.title}</h2>
                                <p className="text-dark/70 dark:text-peach/85 text-base leading-relaxed">{selectedImage.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
