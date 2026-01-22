"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
    { label: "Students", value: "10,000+" },
    { label: "Prize Pool", value: "Upto ₹50K" },
    { label: "Events", value: "10+" },
];

const About = () => {
    return (
        <section id="about" className="relative w-full py-20 px-4 md:px-6 bg-black text-white overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-brand-green text-lg uppercase tracking-widest font-bold">About 
                        <span className="text-brand-green lowercase"> সংহti</span>
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold font-oswald leading-tight">
                        Celebrating <span className="text-brand-orange">Performance</span>, <span className="text-brand-red">Heritage</span>, & Sound.
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed font-light">
                        সংহti 2K26 is more than just a fest; it's a convergence of art, culture, and rhythm.
                        Hosted by Swami Vivekananda University, we bring together the brightest talents for 3 days
                        of electrifying performances and creative showcases.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <h4 className="text-2xl md:text-4xl font-bold font-oswald text-white">{stat.value}</h4>
                                <p className="text-brand-green text-sm uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Image Collage */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <Image
                        src="/assets/about_collage.png"
                        alt="Sanghati Highlights"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
