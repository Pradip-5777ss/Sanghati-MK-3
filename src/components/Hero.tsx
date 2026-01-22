"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const targetDate = new Date("2026-01-27T10:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days.toString().padStart(2, "0"),
                hours: hours.toString().padStart(2, "0"),
                minutes: minutes.toString().padStart(2, "0"),
                seconds: seconds.toString().padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-start overflow-hidden text-center px-4 pt-24 md:pt-32">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero_bg.png"
                    alt="Concert Background"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">

                {/* Floating 3D Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="animate-float"
                >
                    <div className="relative w-[300px] h-[150px] md:w-[600px] md:h-[300px]">
                        <Image
                            src="/assets/title_3d_v3.png"
                            alt="Sanghati 2K26 Title"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                            unoptimized
                        />
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-white/90 text-lg md:text-2xl font-light tracking-[0.2em] uppercase font-sans"
                >
                    Unity in Rhythm, Heritage in Soul
                </motion.p>

                {/* Bengali Accent Timer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex items-start gap-4 md:gap-8 mt-4"
                >
                    <TimerUnit value={timeLeft.days} label="Days" />
                    <Separator />
                    <TimerUnit value={timeLeft.hours} label="Hours" />
                    <Separator />
                    <TimerUnit value={timeLeft.minutes} label="Mins" />
                    <Separator />
                    <TimerUnit value={timeLeft.seconds} label="Secs" />
                </motion.div>


                {/* Date & Venue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col items-center gap-2 mt-4"
                >
                    <h3 className="text-xl md:text-2xl text-brand-orange font-bold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        27th - 29th Jan 2026
                    </h3>
                    <p className="text-white text-sm md:text-base font-medium tracking-wide drop-shadow-md">
                        Swami Vivekananda University Campus
                    </p>
                </motion.div>

                {/* CTA Button */}
                {/* CTA Button */}
                <motion.a
                    href="https://forms.gle/catDTgVFz7bUtgLd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-brand-green to-brand-orange text-white font-bold uppercase text-lg tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all animate-pulse-slow cursor-pointer"
                >
                    Participate Now
                </motion.a>

            </div>
        </section>
    );
};

const TimerUnit = ({ value, label }: { value: string; label: string }) => {
    const toBengaliDigits = (num: string) => {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.replace(/\d/g, (d) => bengaliDigits[parseInt(d)]);
    };

    return (
        <div className="flex flex-col items-center gap-1">
            <span className="timer-font text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-brand-orange drop-shadow-lg leading-tight">
                {toBengaliDigits(value)}
            </span>
            <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest font-sans">
                {label}
            </span>
        </div>
    );
};

const Separator = () => (
    <span className="timer-font text-2xl md:text-4xl text-white/30 h-full pt-2">:</span>
);

export default Hero;
