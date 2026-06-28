import React from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, Award, Heart } from 'lucide-react';

const ustadImg = new URL('../assets/Ustad.webp', import.meta.url).href;

const FacultyPage = () => {
    const scholars = [
        {
            name: "BMM Rasheed Sa'adi Boliyar",
            role: "Chairman & Lead Islamic Scholar",
            degree: "Masters in Islamic Theology (Sa'adi)",
            bio: "With over 20 years of dedication, overseeing the academic and spiritual syllabus of the Academy.",
            image: ustadImg,
            specialty: "Fiqh & Hadith studies"
        },
        {
            name: "Dr. Sheikh Farouq Al-Hassan",
            role: "Academic Dean",
            degree: "Ph.D. in Islamic Law, Al-Azhar University",
            bio: "Expert in comparative jurisprudence and classical text translation, mentoring higher-education PUC candidates.",
            image: ustadImg,
            specialty: "Usool-al-Fiqh & Arabic Literature"
        },
        {
            name: "Usthad Muhammad Shamil",
            role: "Director of Hifz Quran",
            degree: "Ijazah in Ten Qira'at",
            bio: "Nurturing students in tajweed mastery and memorization standards, ensuring absolute accuracy and spiritual reflection.",
            image: ustadImg,
            specialty: "Quranic Sciences & Tajweed"
        },
        {
            name: "Sayyida Fathima Al-Zahra",
            role: "Head of Women's Diploma Studies",
            degree: "B.A. in Islamic Studies, Medina College",
            bio: "Designing empowering syllabus modules for Bloom & Sparkle courses, tailoring personal developmental tools.",
            image: ustadImg,
            specialty: "Seerah & Women's Jurisprudence"
        },
        {
            name: "Muallimah Aysha Siddiqa",
            role: "Kids Nurture Coordinator",
            degree: "Diploma in Child Psychology & Islamic Ethics",
            bio: "Focusing on child psychology and moral foundation classes for standards 1 to 8, bringing interactive teaching tools.",
            image: ustadImg,
            specialty: "Islamic Ethics & Character Building"
        },
        {
            name: "Usthad Abdul Hameed",
            role: "Senior Instructor - Youth Development",
            degree: "B.Sc. & Diploma in Arabic Linguistics",
            bio: "Leading physical fitness, leadership modules, and career counseling for teenage boys under the Thrive course.",
            image: ustadImg,
            specialty: "Grammar, Balagha & Mentorship"
        }
    ];

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(214,180,76,0.1) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Meet Our Educators</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">Faculty & Scholars</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            Guided by experienced scholars dedicated to academic excellence, moral leadership, and spiritual guidance.
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Scholars Grid */}
            <section className="py-24 bg-peach dark:bg-[#071A14]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Dedicated Teachers</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Academic & Religious Faculty</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {scholars.map((scholar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white dark:bg-[#0D2A21] rounded-[2.5rem] p-8 border border-navy/5 dark:border-white/5 shadow-soft hover:shadow-premium hover:border-gold/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                            >
                                <div>
                                    {/* Faculty Photo */}
                                    <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square max-h-[250px] w-full mx-auto">
                                        <img
                                            src={scholar.image}
                                            alt={scholar.name}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Faculty Info */}
                                    <span className="text-gold text-xs font-semibold tracking-wider uppercase block mb-2">{scholar.role}</span>
                                    <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-4">{scholar.name}</h3>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex gap-2.5 items-start text-dark/70 dark:text-peach/80 text-sm">
                                            <GraduationCap className="text-gold shrink-0 mt-0.5" size={16} />
                                            <span>{scholar.degree}</span>
                                        </div>
                                        <div className="flex gap-2.5 items-start text-dark/70 dark:text-peach/80 text-sm">
                                            <Award className="text-gold shrink-0 mt-0.5" size={16} />
                                            <span>Specialty: <strong className="text-navy dark:text-peach font-semibold">{scholar.specialty}</strong></span>
                                        </div>
                                    </div>

                                    <p className="text-dark/65 dark:text-peach/75 text-sm leading-relaxed mb-6 italic">
                                        "{scholar.bio}"
                                    </p>
                                </div>

                                <div className="border-t border-navy/10 dark:border-white/5 pt-5 flex items-center justify-between">
                                    <a
                                        href="mailto:admissions@daaruswuffah.org"
                                        className="text-xs font-bold text-navy dark:text-peach hover:text-gold dark:hover:text-gold transition-colors flex items-center gap-2"
                                    >
                                        <Mail size={14} />
                                        <span>Contact Scholar</span>
                                    </a>
                                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                        <Heart size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dedication Block */}
            <section className="py-24 bg-white dark:bg-[#0c2429] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Academic Oath</span>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-navy dark:text-gold-light mb-8">
                        “The best of you are those who learn the Qur'an and teach it.”
                    </h2>
                    <p className="text-dark/60 dark:text-peach/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        At AS-SWUFFAH, our teachers do not simply deliver lectures. They cultivate the heart, nourish the mind, and inspire the spirit of each seeker of knowledge.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default FacultyPage;
