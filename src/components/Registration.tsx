"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Registration = () => {
    return (
        <section id="registration" className="py-20 px-4 bg-brand-green text-black relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 rounded-full bg-black/10 blur-3xl" />

            <div className="container mx-auto max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Left: Text & CTA */}
                <div className="p-10 md:p-14 md:w-3/5 flex flex-col justify-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-oswald font-bold text-black uppercase leading-tight">
                        Secure Your Spot Now!
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Scan the QR code to register directly via our Google Form. Spots are filling up fast for all competitive events.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-1 bg-brand-orange rounded-full" />
                        <p className="font-bold text-black uppercase tracking-widest">
                            Registration Closes Jan 25th
                        </p>
                    </div>
                </div>

                {/* Right: QR Code */}
                <div className="bg-black/5 md:w-2/5 flex flex-col items-center justify-center p-10 border-l border-gray-100">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative w-48 h-48 bg-white p-2 rounded-xl shadow-lg"
                    >
                        <Image
                            src="/assets/Sanghati_Global_QR.png"
                            alt="Registration QR Code"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                    <p className="mt-4 font-bold text-sm uppercase tracking-wider text-black/60">Scan to Register</p>
                </div>

            </div>
        </section>
    );
};

export default Registration;
