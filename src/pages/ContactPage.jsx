import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: 'Address',
            details: 'Boliyar, Mangalore, Karnataka, India'
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone',
            details: '+91 XXX XXX XXXX'
        },
        {
            icon: <Mail size={24} />,
            title: 'Email',
            details: 'info@as-swuffah.org'
        },
        {
            icon: <Clock size={24} />,
            title: 'Office Hours',
            details: 'Mon - Sat: 9:00 AM - 5:00 PM'
        }
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
                        <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-6 leading-tight">Contact Us</h1>
                        <p className="text-xl text-dark/70 mx-auto leading-relaxed">
                            We're here to answer your questions and help you begin your journey with AS-SWUFFAH
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

            {/* Contact Info & Form */}
            <section className="py-24 bg-peach">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-8">Get In Touch</h2>
                            <p className="text-dark/70 text-lg mb-12 leading-relaxed">
                                Have questions about our programs or admissions? We'd love to hear from you.
                                Reach out to us through any of the following channels.
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
                                            <h3 className="text-lg font-bold text-navy mb-1">{info.title}</h3>
                                            <p className="text-dark/60">{info.details}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl p-10 shadow-premium">
                                <h3 className="text-2xl font-serif font-bold text-navy mb-8">Send Us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-navy/10 focus:border-gold outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-navy/10 focus:border-gold outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-navy/10 focus:border-gold outline-none transition-colors"
                                            placeholder="+91 XXX XXX XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-navy/10 focus:border-gold outline-none transition-colors"
                                            placeholder="What is this regarding?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-navy/10 focus:border-gold outline-none transition-colors resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-gold w-full py-5 text-lg inline-flex items-center justify-center gap-3">
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-navy mb-4">Visit Our Campus</h2>
                        <p className="text-dark/60 text-lg">Find us at our location in Boliyar, Mangalore</p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-premium h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7!2d74.85!3d12.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUxJzAwLjAiTiA3NMKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="AS-SWUFFAH Foundation Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
