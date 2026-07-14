import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import mapImg from '../assets/footer.webp';

const Footer = () => {
    return (
        <footer id="footer" className="relative bg-white/40 dark:bg-[#041214] text-navy dark:text-peach/80 pt-24 pb-12 overflow-hidden border-t border-navy/5 dark:border-gold/10">
            {/* Map Background - Static Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={mapImg}
                    alt="Academy Location Map"
                    className="w-full h-full object-cover opacity-30 filter grayscale(100%) brightness(1.1) contrast(0.9) dark:opacity-20 dark:invert dark:hue-rotate-180 pointer-events-none"
                />
                {/* Minimal Overlay to keep it calm and allow legibility */}
                <div className="absolute inset-0 bg-white/20 dark:bg-[#041214]/70 pointer-events-none backdrop-blur-[1px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-serif text-3xl font-bold tracking-tight text-navy dark:text-gold-light">AS-SWUFFAH</span>
                        </div>
                        <p className="text-navy/90 dark:text-peach/80 text-sm font-bold leading-relaxed mb-8 max-w-sm">
                            Imparting Knowledge. Illuminating Hearts. We are committed to providing premium academic and spiritual education in Mangalore.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" aria-label={`${['Facebook','Instagram','Twitter','Youtube'][i]}`} className="w-10 h-10 rounded-full border border-navy/20 dark:border-gold/20 flex items-center justify-center text-navy dark:text-peach/80 hover:bg-gold hover:border-gold hover:text-white transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                                    <Icon size={18} strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-6 text-gold uppercase tracking-wider text-sm">Explore</h4>
                            <ul className="space-y-4 text-sm text-navy dark:text-peach/80 font-bold">
                                <li><Link to="/" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Home</Link></li>
                                <li><Link to="/about" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">About Us</Link></li>
                                <li><Link to="/programs" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Programs</Link></li>
                                <li><Link to="/campus" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Campus</Link></li>
                                <li><Link to="/vision" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Vision</Link></li>
                                <li><Link to="/contact" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-6 text-gold uppercase tracking-wider text-sm">Contact</h4>
                            <ul className="space-y-4 text-sm text-navy dark:text-peach/80 font-bold">
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
                                    href="https://www.google.com/maps/search/?api=1&query=New+India+HH+Diamond+City+Nandi+Gudda+Mangalore"
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
                <div className="pt-8 border-t border-navy/10 dark:border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-navy/70 dark:text-peach/70 font-bold uppercase tracking-[0.2em]">
                    <p>© 2026 AS-SWUFFAH FOUNDATION. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
