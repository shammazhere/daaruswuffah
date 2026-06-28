import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const CountUp = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const [prefersReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 120,
        damping: 20,
    });

    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toLocaleString() + suffix
    );

    useEffect(() => {
        if (prefersReduced) return;
        if (isInView) {
            spring.set(value);
        } else {
            spring.set(0);
        }
    }, [isInView, spring, value, prefersReduced]);

    if (prefersReduced) {
        return <span ref={ref}>{value}{suffix}</span>;
    }

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Commitment = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0c2429] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Community Impact</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-gold-light">Our Commitment</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="text-5xl font-serif font-bold text-gold mb-4">
                            <CountUp value={12} suffix="+" />
                        </div>
                        <h3 className="text-lg font-bold text-navy dark:text-peach mb-2 uppercase tracking-wider">Years of Impact</h3>
                        <p className="text-dark/60 dark:text-peach/60 text-sm">A legacy of excellence</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center"
                    >
                        <div className="text-5xl font-serif font-bold text-gold mb-4">
                            <CountUp value={1000} suffix="+" />
                        </div>
                        <h3 className="text-lg font-bold text-navy dark:text-peach mb-2 uppercase tracking-wider">Students</h3>
                        <p className="text-dark/60 dark:text-peach/60 text-sm">Empowered annually</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                    >
                        <div className="text-5xl font-serif font-bold text-gold mb-4">
                            <CountUp value={50} suffix="+" />
                        </div>
                        <h3 className="text-lg font-bold text-navy dark:text-peach mb-2 uppercase tracking-wider">Educators</h3>
                        <p className="text-dark/60 dark:text-peach/60 text-sm">Qualified scholars</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                    >
                        <div className="text-5xl font-serif font-bold text-gold mb-4">
                            <CountUp value={8} suffix="+" />
                        </div>
                        <h3 className="text-lg font-bold text-navy dark:text-peach mb-2 uppercase tracking-wider">Courses</h3>
                        <p className="text-dark/60 dark:text-peach/60 text-sm">Specialized programs</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Commitment;
