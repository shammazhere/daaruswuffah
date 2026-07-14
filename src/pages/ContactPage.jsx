import React, { useState } from 'react';
import HeroCurve from '../components/HeroCurve';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import mapImg from '../assets/footer.webp';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

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
                    ...formData
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            }
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: <MapPin size={24} />, title: 'Address', details: 'HH Diamond City, Jeppu, Mangalore' },
        { icon: <Phone size={24} />, title: 'Phone', details: '+91 8970402313' },
        { icon: <Mail size={24} />, title: 'Email', details: 'info@as-swuffah.com' },
        { icon: <Clock size={24} />, title: 'Office Hours', details: 'Mon – Sat: 9:00 AM – 5:00 PM' }
    ];

    return (
        <div>
            <div className="hero-arc-wrap">
            <section className="relative h-[85vh] flex items-center bg-gradient-to-b from-gold-light to-peach dark:from-[#0D2A21] dark:to-[#071A14] pt-32 hero-arc">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-islamic-pattern rounded-b-[inherit]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(199,161,90,0.12) 0%, transparent 70%)' }} />
                <div className="absolute -bottom-10 left-0 w-[400px] h-[400px] rounded-full opacity-0 dark:opacity-100 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26,85,96,0.25) 0%, transparent 70%)' }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="max-w-4xl mx-auto">
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy dark:text-gold-light mb-6 leading-tight">Contact Us</h1>
                        <p className="text-xl text-dark/70 dark:text-peach/80 mx-auto leading-relaxed">
                            We're here to answer your questions and help you begin your journey with AS-SWUFFAH
                        </p>
                    </motion.div>
                </div>
</section>
                            <HeroCurve fillLight="#F8F5EC" fillDark="#071A14" />

            </div>

            {/* Contact Info & Form */}
            <section className="py-24 bg-peach dark:bg-[#071d21]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy dark:text-gold-light mb-8">Get In Touch</h2>
                            <p className="text-dark/70 dark:text-peach/80 text-lg mb-12 leading-relaxed">
                                Have questions about our programs or admissions? We'd love to hear from you.
                            </p>

                            <div className="space-y-8">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-6"
                                    >
                                        <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-gold shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-navy dark:text-gold-light mb-1">{info.title}</h3>
                                            <p className="text-dark/60 dark:text-peach/70">{info.details}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="bg-white dark:bg-[#0c2429] rounded-3xl p-10 shadow-gold border border-navy/5 dark:border-gold/10">
                                <h3 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-8">Send Us a Message</h3>
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
                                            <Send size={32} />
                                        </div>
                                        <h4 className="text-2xl font-serif font-bold text-navy dark:text-gold-light mb-4">Thank You!</h4>
                                        <p className="text-dark/70 dark:text-peach/80 mb-6">Your message has been sent successfully. We will get back to you shortly.</p>
                                        <button onClick={() => setSubmitted(false)} className="btn-gold">
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {[
                                            { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your name' },
                                            { label: 'Email *', name: 'email', type: 'email', placeholder: 'your@email.com' },
                                            { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 8970402313' },
                                            { label: 'Subject *', name: 'subject', type: 'text', placeholder: 'What is this regarding?' },
                                        ].map(field => (
                                            <div key={field.name}>
                                                <label className="block text-sm font-bold text-navy dark:text-peach mb-2">{field.label}</label>
                                                <input
                                                    type={field.type} name={field.name} value={formData[field.name]}
                                                    onChange={handleChange} required={field.label.includes('*')}
                                                    aria-required={field.label.includes('*') ? 'true' : 'false'}
                                                    className="w-full px-6 py-4 rounded-2xl border-2 border-navy/10 dark:border-gold/20 bg-peach dark:bg-[#071d21] text-dark dark:text-peach focus:border-gold outline-none transition-colors"
                                                    placeholder={field.placeholder}
                                                />
                                            </div>
                                        ))}
                                        <div>
                                            <label className="block text-sm font-bold text-navy dark:text-peach mb-2">Message *</label>
                                            <textarea
                                                name="message" value={formData.message} onChange={handleChange} required rows="5"
                                                aria-required="true"
                                                className="w-full px-6 py-4 rounded-2xl border-2 border-navy/10 dark:border-gold/20 bg-peach dark:bg-[#071d21] text-dark dark:text-peach focus:border-gold outline-none transition-colors resize-none"
                                                placeholder="Tell us more about your inquiry..."
                                            ></textarea>
                                        </div>
                                        <button type="submit" disabled={isSubmitting} className="btn-gold w-full py-5 text-lg inline-flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed">
                                            {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-white dark:bg-[#0c2429]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-navy dark:text-gold-light mb-4">Visit Our Campus</h2>
                        <p className="text-dark/60 dark:text-peach/70 text-lg">Find us at our location in Boliyar, Mangalore</p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-premium h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7!2d74.85!3d12.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUxJzAwLjAiTiA3NMKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%" height="100%"
                            style={{ border: 0 }}
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="AS-SWUFFAH Foundation Location"
                            className="map-iframe w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
