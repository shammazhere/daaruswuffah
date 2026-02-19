import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="relative bg-white/40 text-navy pt-24 pb-12 overflow-hidden border-t border-navy/5">
            {/* Map Background - Always Visible & Calm */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3889.92!2d74.8451!3d12.8485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Area Map"
                    className="w-full h-full opacity-30 filter grayscale(100%) brightness(1.1) contrast(0.9)"
                ></iframe>
                {/* Minimal Overlay to keep it calm and allow legibility */}
                <div className="absolute inset-0 bg-white/20 pointer-events-none backdrop-blur-[1px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-serif text-3xl font-bold tracking-tight text-navy">AS-SWUFFAH</span>
                        </div>
                        <p className="text-navy/90 text-sm font-bold leading-relaxed mb-8 max-w-sm">
                            Imparting Knowledge. Illuminating Hearts. We are committed to providing premium academic and spiritual education in Mangalore.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-gold hover:border-gold hover:text-white transition-all duration-700">
                                    <Icon size={18} strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-6 text-gold uppercase tracking-wider text-sm">Explore</h4>
                            <ul className="space-y-4 text-sm text-navy font-bold">
                                <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                                <li><Link to="/programs" className="hover:text-gold transition-colors">Programs</Link></li>
                                <li><Link to="/campus" className="hover:text-gold transition-colors">Campus</Link></li>
                                <li><Link to="/vision" className="hover:text-gold transition-colors">Vision</Link></li>
                                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-6 text-gold uppercase tracking-wider text-sm">Contact</h4>
                            <ul className="space-y-4 text-sm text-navy font-bold">
                                <li className="flex gap-4">
                                    <MapPin size={20} strokeWidth={2.5} className="text-gold shrink-0" />
                                    <span>HH Diamond City, Jeppu, Mangalore</span>
                                </li>
                                <li className="flex gap-4">
                                    <Phone size={20} strokeWidth={2.5} className="text-gold shrink-0" />
                                    <span>+91 8970402313</span>
                                </li>
                                <li className="flex gap-4">
                                    <Mail size={20} strokeWidth={2.5} className="text-gold shrink-0" />
                                    <span>info@as-swuffah.com</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a
                                    href="https://maps.app.goo.gl/k98tS7vG54U2M2C67"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white font-bold text-sm hover:bg-navy transition-all duration-300 shadow-lg shadow-gold/20"
                                >
                                    <MapPin size={16} />
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-navy/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-navy/50 font-bold uppercase tracking-[0.2em]">
                    <p>© 2026 AS-SWUFFAH FOUNDATION. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
