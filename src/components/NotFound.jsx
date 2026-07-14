import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Compass, BookOpen, Users, MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Trigger analytics event (conceptual)
        console.log('Analytics Event: 404 Search', searchQuery);
        
        if (searchQuery.toLowerCase().includes('program') || searchQuery.toLowerCase().includes('course')) {
            navigate('/programs');
        } else {
            navigate('/contact');
        }
    };

    const sitemapLinks = [
        { name: 'Programs', path: '/programs', icon: <BookOpen size={16} /> },
        { name: 'Admissions', path: '/admissions', icon: <Users size={16} /> },
        { name: 'Campus', path: '/campus', icon: <MapPin size={16} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
    ];

    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 bg-peach dark:bg-[#071d21] relative overflow-hidden py-24">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-islamic-pattern" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-2xl w-full"
            >
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-white dark:bg-[#0D2A21] rounded-[2rem] shadow-premium flex items-center justify-center text-gold border border-navy/5 dark:border-white/5 animate-slow-zoom">
                        <Compass size={48} strokeWidth={1.5} />
                    </div>
                </div>

                <h1 className="text-8xl md:text-9xl font-serif font-bold text-navy dark:text-gold-light mb-2 drop-shadow-sm">404</h1>
                <p className="text-2xl text-navy/80 dark:text-peach/80 mb-8 font-serif font-bold">
                    Oops! You've wandered off the path.
                </p>

                <form onSubmit={handleSearch} className="relative max-w-md mx-auto mb-12">
                    <input 
                        type="text" 
                        placeholder="Search for programs, campus..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-6 py-4 rounded-full border border-navy/10 dark:border-gold/20 bg-white dark:bg-[#0a2025] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-navy dark:text-peach transition-all shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40 dark:text-peach/50" size={20} />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-white p-2 rounded-full hover:bg-navy transition-colors" aria-label="Search">
                        <Search size={16} />
                    </button>
                </form>

                <div className="border-t border-navy/10 dark:border-gold/10 pt-8">
                    <p className="text-sm font-bold text-navy/60 dark:text-peach/60 uppercase tracking-widest mb-6">Helpful Links</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {sitemapLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path}
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#0D2A21] border border-navy/5 dark:border-gold/10 text-navy dark:text-peach/90 hover:border-gold hover:text-gold dark:hover:text-gold transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                {link.icon}
                                <span className="text-sm font-semibold">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
