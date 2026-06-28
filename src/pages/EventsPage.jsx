import React from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight, Bell } from 'lucide-react';

const EventsPage = () => {
    const events = [
        {
            date: "Jul 15",
            year: "2026",
            title: "Seminar on Contemporary Youth Ethics",
            category: "Seminars",
            time: "10:00 AM – 01:00 PM",
            location: "Academy Main Seminar Hall",
            desc: "Addressing identity and spiritual confidence in a digital age, featuring guest scholars and Q&A boards.",
            tag: "Upcoming"
        },
        {
            date: "Aug 01",
            year: "2026",
            title: "Value+ Integrated Course Orientation",
            category: "Academic",
            time: "09:30 AM – 12:30 PM",
            location: "Auditorium A",
            desc: "General instructions and overview of state syllabus PUC alongside classical Sharee'ath modules for registered students.",
            tag: "Upcoming"
        },
        {
            date: "Sep 05",
            year: "2026",
            title: "Annual Quran Recitation Assembly",
            category: "Spiritual",
            time: "04:30 PM – 08:30 PM",
            location: "Academy Masjid Block",
            desc: "An assembly of students demonstrating memorization standards under expert panel judges. Open to parents.",
            tag: "Upcoming"
        },
        {
            date: "Jun 10",
            year: "2026",
            title: "Pre-Term Parent Teacher Convention",
            category: "Meetings",
            time: "10:00 AM – 01:00 PM",
            location: "Interactive Hall B",
            desc: "Structuring academic development goals and moral character building benchmarks with parents.",
            tag: "Completed"
        }
    ];

    const announcements = [
        "Admissions for the Academic Session 2026-27 are now open. Register before August 31st.",
        "Daily reflection sessions under the Navigate Platform have transitioned to evening prayer slots.",
        "The Academy Library has received 50+ classical treatises on Usool-al-Fiqh from Al-Medina donors."
    ];

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(214,180,76,0.1) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Stay Updated</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">Events & News</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            Stay connected with academic calendars, guest talks, and announcements from the Academy.
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Content Blocks */}
            <section className="py-24 bg-peach dark:bg-[#071A14]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Events List (Col-span-2) */}
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-navy dark:text-gold-light mb-8">Calendar of Events</h2>
                        
                        <div className="space-y-6">
                            {events.map((ev, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white dark:bg-[#0D2A21] rounded-3xl p-8 border border-navy/5 dark:border-white/5 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col md:flex-row gap-8 items-start group"
                                >
                                    {/* Date Flag */}
                                    <div className="w-24 h-24 bg-gold/10 dark:bg-gold/5 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-gold/15">
                                        <span className="text-2xl font-serif font-bold text-gold leading-none">{ev.date.split(' ')[1]}</span>
                                        <span className="text-xs uppercase tracking-wider text-navy dark:text-peach/80 mt-1.5 font-bold">{ev.date.split(' ')[0]}</span>
                                        <span className="text-[10px] text-navy/40 dark:text-peach/40 mt-1 font-semibold">{ev.year}</span>
                                    </div>

                                    {/* Event Details */}
                                    <div className="space-y-4 flex-grow">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="text-xs font-bold uppercase tracking-widest text-gold">{ev.category}</span>
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                ev.tag === 'Upcoming'
                                                    ? 'bg-blue-500/10 text-blue-500'
                                                    : 'bg-dark/10 dark:bg-white/10 text-dark/65 dark:text-peach/70'
                                            }`}>
                                                {ev.tag}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light group-hover:text-gold transition-colors">{ev.title}</h3>
                                        <p className="text-dark/60 dark:text-peach/70 text-sm leading-relaxed">{ev.desc}</p>
                                        
                                        <div className="flex flex-wrap gap-6 pt-2 text-xs text-dark/50 dark:text-peach/60 font-semibold">
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} className="text-gold" />
                                                <span>{ev.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={14} className="text-gold" />
                                                <span>{ev.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Announcements Sidebar */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-navy dark:text-gold-light mb-8">Announcements</h2>

                        <div className="bg-white dark:bg-[#0D2A21] rounded-3xl p-8 border border-navy/5 dark:border-white/5 shadow-soft space-y-6">
                            {announcements.map((ann, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 items-start border-b border-navy/10 dark:border-white/5 pb-6 last:border-none last:pb-0"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-0.5">
                                        <Bell size={14} />
                                    </div>
                                    <p className="text-sm text-dark/70 dark:text-peach/80 leading-relaxed font-medium">{ann}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Contact Widget */}
                        <div className="bg-gradient-to-br from-gold to-gold-light text-navy rounded-3xl p-8 space-y-6 shadow-premium">
                            <h3 className="text-2xl font-serif font-bold">Have an Event Question?</h3>
                            <p className="text-sm font-medium leading-relaxed opacity-90">
                                Connect with the Academy administrative desk directly via phone or register as a volunteer coordinator.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-navy text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-navy/90 hover:scale-105 transition-all duration-300"
                            >
                                <span>Get in touch</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
