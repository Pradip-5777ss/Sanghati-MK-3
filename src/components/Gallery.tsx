"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/assets/gallery/one.jpg",
    "/assets/gallery/two.jpg",
    "/assets/gallery/three.JPG",
    "/assets/gallery/four.JPG",
    "/assets/gallery/five.JPG",
    "/assets/gallery/six.jpg",
    "/assets/gallery/seven.jpg",
    "/assets/gallery/eight.jpg",
    "/assets/gallery/nine.jpg",
    "/assets/gallery/ten.jpg",
    "/assets/gallery/eleven.jpg",
    "/assets/gallery/twelve.jpg",
    "/assets/gallery/thirteen.jpg",
    "/assets/gallery/fourteen.JPG",
    "/assets/gallery/fifteen.JPG",
    "/assets/gallery/sixteen.JPG",

];

const Gallery = () => {
    return (
        <section id="gallery" className="relative w-full py-20 bg-black overflow-hidden flex flex-col items-center gap-10">
            {/* Section Title */}
            <div className="text-center z-10 px-4">
                <h2 className="text-4xl md:text-6xl text-brand-orange uppercase font-bold tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]">
                    Memories of
                    <span className="text-brand-green lowercase"> সংহti</span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent mx-auto mt-4 rounded-full" />
                <p className="text-white/70 mt-4 text-lg font-light tracking-wider max-w-2xl mx-auto">
                    Glimpses from our previous celebrations of culture, rhythm, and unity.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="w-full flex relative overflow-hidden mask-linear-fade">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Moving Slider */}
                <motion.div
                    className="flex gap-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        ease: "linear",
                        duration: 80, // Adjust speed here (higher = slower)
                        repeat: Infinity,
                    }}
                    style={{ width: "fit-content", willChange: "transform" }}
                >
                    {/* Render images twice for seamless loop */}
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[350px] h-[250px] md:w-[400px] md:h-[250px] shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow duration-300 group"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index}`}
                                fill
                                sizes="(max-width: 768px) 380px, 480px"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
