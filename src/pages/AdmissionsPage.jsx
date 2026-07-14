import React, { useState } from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
import { FileText, Calendar, DollarSign, Award, ChevronRight, Send, Loader2 } from 'lucide-react';

const AdmissionsPage = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', program: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Note: You'll need to sign up at web3forms.com and paste your free key here
                    ...formData,
                    subject: `Admission Inquiry from ${formData.name}`
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', program: '', message: '' });
            }
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    const steps = [
        { num: '01', title: 'Submit Inquiry', desc: 'Fill out the online application inquiry form or visit our campus office.' },
        { num: '02', title: 'Personal Interview', desc: 'A meeting with the candidate and parents to understand goals and values.' },
        { num: '03', title: 'Entrance Evaluation', desc: 'Basic assessment of academic standing and moral foundation.' },
        { num: '04', title: 'Enrollment Approval', desc: 'Final review by the academy board and notification of admission.' }
    ];

    const requirements = [
        'Completed Application Form with passport-size photographs',
        'Academic transcripts/report card from the previous institution',
        'ID proof'
    ];

    /* handleSubmit defined above */

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(214,180,76,0.1) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Join Our Community</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">Admissions Open</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            Embark on an educational journey that integrates spiritual wisdom with academic distinction.
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Steps & Requirements Grid */}
            <section className="py-24 bg-peach dark:bg-[#071A14]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">The Journey</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Admission Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-[#0D2A21] rounded-3xl p-8 border border-navy/5 dark:border-white/5 relative shadow-soft hover:shadow-premium transition-all duration-300 group"
                            >
                                <span className="absolute top-4 right-6 text-5xl font-serif font-bold text-gold/20 group-hover:text-gold/45 transition-colors">{step.num}</span>
                                <h3 className="text-xl font-bold text-navy dark:text-gold-light mb-4 mt-4">{step.title}</h3>
                                <p className="text-dark/60 dark:text-peach/70 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-[#0D2A21] rounded-[2.5rem] p-12 border border-navy/5 dark:border-white/5 shadow-premium"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                                    <FileText size={24} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-navy dark:text-gold-light">Requirements</h3>
                            </div>
                            <ul className="space-y-6">
                                {requirements.map((req, idx) => (
                                    <li key={idx} className="flex gap-4 items-start text-dark/70 dark:text-peach/80">
                                        <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-0.5">
                                            <Award size={14} />
                                        </div>
                                        <span className="text-base font-medium">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-gold-light leading-snug">
                                Secure Your Future with Spiritual & Academic Integrity
                            </h3>
                            <p className="text-lg text-dark/60 dark:text-peach/70 leading-relaxed">
                                Our institution accepts applicants regardless of background, emphasizing character and willingness to grow. Scholarship options and custom installment programs are available.
                            </p>
                            <div className="flex flex-wrap gap-8 items-center pt-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="text-gold" size={24} />
                                    <div>
                                        <h4 className="font-bold text-navy dark:text-peach text-sm uppercase tracking-wider">Deadline</h4>
                                        <p className="text-xs text-dark/70 dark:text-peach/60 font-semibold">August 31, 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <DollarSign className="text-gold" size={24} />
                                    <div>
                                        <h4 className="font-bold text-navy dark:text-peach text-sm uppercase tracking-wider">Installments</h4>
                                        <p className="text-xs text-dark/70 dark:text-peach/60 font-semibold">Flexible plans available</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Inquiry Form */}
            <section className="py-24 bg-white dark:bg-[#0c2429] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Inquiry Form</span>
                        <h2 className="text-4xl font-serif font-bold text-navy dark:text-gold-light">Online Inquiry</h2>
                        <p className="text-dark/70 dark:text-peach/60 mt-4 max-w-lg mx-auto">
                            Submit a brief inquiry and our admissions counsellor will schedule an interview.
                        </p>
                    </div>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-peach/30 dark:bg-[#071A14] rounded-[2.5rem] p-10 md:p-14 border border-navy/5 dark:border-white/5 shadow-premium text-center"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
                                <Send size={32} />
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-4">Thank You!</h4>
                            <p className="text-dark/70 dark:text-peach/80 mb-6">Your inquiry has been sent successfully. Our admissions team will contact you soon.</p>
                            <button onClick={() => setSubmitted(false)} className="btn-gold">
                                Submit Another Inquiry
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="bg-peach/30 dark:bg-[#071A14] rounded-[2.5rem] p-10 md:p-14 border border-navy/5 dark:border-white/5 shadow-premium space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-navy dark:text-peach/95">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        placeholder="Enter your name"
                                        className="w-full px-6 py-4 rounded-2xl border border-navy/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-gold transition-all duration-300 text-dark dark:text-peach"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-navy dark:text-peach/95">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        placeholder="Enter your email"
                                        className="w-full px-6 py-4 rounded-2xl border border-navy/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-gold transition-all duration-300 text-dark dark:text-peach"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-navy dark:text-peach/95">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        placeholder="Enter your contact number"
                                        className="w-full px-6 py-4 rounded-2xl border border-navy/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-gold transition-all duration-300 text-dark dark:text-peach"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-navy dark:text-peach/95">Program of Interest</label>
                                    <select
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-navy/10 dark:border-white/10 bg-transparent dark:bg-[#071A14] focus:outline-none focus:border-gold transition-all duration-300 text-dark/70 dark:text-peach/85"
                                    >
                                        <option value="">Select Program</option>
                                        <option value="nurture">Nurture (Std 1-8)</option>
                                        <option value="hifzul-quran">Hifzul Quran (Quran Memorization)</option>
                                        <option value="bloom">Bloom (Teenage Girls Diploma)</option>
                                        <option value="sparkle">Sparkle (Women Diploma)</option>
                                        <option value="thrive">Thrive (Teenage Boys Diploma)</option>
                                        <option value="empowher">EmpowHer (Women Foundational)</option>
                                        <option value="valueplus">Value+ (PUC & Sharee'ath)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-navy dark:text-peach/95">Message / Inquiries</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Any specific requirements or questions?"
                                    className="w-full px-6 py-4 rounded-2xl border border-navy/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-gold transition-all duration-300 text-dark dark:text-peach"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-gold w-full py-4 text-base font-bold flex items-center justify-center gap-3 hover:shadow-gold-hover hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>{isSubmitting ? 'Submitting...' : 'Submit Admission Inquiry'}</span>
                                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            </button>
                        </motion.form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AdmissionsPage;
