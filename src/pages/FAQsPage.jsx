import React, { useState } from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIdx, setActiveIdx] = useState(null);

    const faqItems = [
        {
            q: "Where is AS-SWUFFAH Islamic Academy located?",
            a: "We are situated in Mangalore, Karnataka. Our campus offers a serene environment designed with world-class facilities and air-conditioned classes to foster focused study.",
            category: "General"
        },
        {
            q: "Is there separate styling or gender divisions for courses?",
            a: "Yes. In keeping with Islamic principles, we maintain separate designated study modules, schedules, and campuses for gentlemen, ladies, boys, and girls. For example, Bloom and EmpowHer are dedicated to ladies, while Thrive is for teenage boys.",
            category: "General"
        },
        {
            q: "What is the Value+ Integrated Course?",
            a: "Value+ is our flagship youth program that offers a state-syllabus Pre-University Course (PUC) integrated with classical Sharee'ath knowledge. This prepares female students to achieve academic credentials while staying spiritually grounded.",
            category: "Courses"
        },
        {
            q: "How can I apply for admission?",
            a: "You can submit an inquiry through our online Admissions Page. Our counsellors will guide you through the documents required, academic evaluation, and subsequent personal interview.",
            category: "Admissions"
        },
        {
            q: "Are scholarship programs available for deserving candidates?",
            a: "Yes. AS-SWUFFAH offers merit-based and need-based scholarships. Deserving candidates from challenging backgrounds are encouraged to apply by presenting relevant academic and financial transcripts during evaluation.",
            category: "Admissions"
        },
        {
            q: "Are the courses certified?",
            a: "Yes, our academic modules issue formal Academy Diplomas upon completion. For integrated programs like Value+, students receive their Pre-University certificates from the state board alongside our certification.",
            category: "Courses"
        }
    ];

    const filteredFaqs = faqItems.filter(item =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(214,180,76,0.1) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Got Questions?</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">FAQs & Support</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            Find quick answers regarding our syllabus, admissions requirements, and campus rules.
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Accordion List */}
            <section className="py-24 bg-peach dark:bg-[#071A14]">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    {/* Search Bar */}
                    <div className="relative mb-16">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search your question here..."
                            aria-label="Search FAQs"
                            className="w-full px-8 py-5 pl-16 rounded-2xl border border-navy/10 dark:border-white/5 bg-white dark:bg-[#0D2A21] shadow-soft focus:outline-none focus:border-gold transition-all duration-300 text-base"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/40 dark:text-peach/50" size={22} />
                    </div>

                    <div className="space-y-6">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white dark:bg-[#0D2A21] rounded-3xl border border-navy/5 dark:border-white/5 shadow-soft overflow-hidden"
                                >
                                    <button
                                        onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                                        aria-expanded={activeIdx === idx}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <HelpCircle className="text-gold shrink-0" size={22} />
                                            <span className="text-lg font-bold text-navy dark:text-gold-light group-hover:text-gold transition-colors">{faq.q}</span>
                                        </div>
                                        <div className="text-navy dark:text-peach shrink-0">
                                            {activeIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {activeIdx === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-8 pb-8 pt-2 border-t border-navy/10 dark:border-white/5 text-dark/65 dark:text-peach/75 text-base leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-dark/50 dark:text-peach/60 font-semibold">
                                No questions found matching your search. Try another query.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQsPage;
