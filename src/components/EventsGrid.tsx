"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Music, Palette, Camera, Shirt, ArrowRight } from "lucide-react";

// Wait, I didn't see utils.ts in the file list earlier. 
// Step 4 list_dir of src: 
// {"name":"src","isDir":true,"numChildren":12}
// I didn't check inside src fully. Let me assume I can just use `clsx` and `tailwindMerge` directly or standard strings if I don't want to risk it. 
// I'll stick to standard template literals or inline clsx to be safe.

// actually I'll just use template literals to be safe.

type Event = {
    name: string;
    desc: string;
    image: string;
    slug: string;
};

type EventCategory = {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
    events: Event[];
};

const categories: EventCategory[] = [
    {
        id: "cultural",
        title: "Cultural & Performance",
        icon: <Music className="w-5 h-5" />,
        color: "from-green-500 to-emerald-700",
        events: [
            {
                name: "Tal Tarang",
                desc: "Dance Competition - Group, Social Message",
                image: "/assets/events/tal_tarang.png",
                slug: "tal-tarang"
            },
            {
                name: "Megh Mancha",
                desc: "Drama - Folk/Recitation",
                image: "/assets/events/megh_mancha.png",
                slug: "megh-mancha"
            },
            {
                name: "Plugged In",
                desc: "Band - Inter-College, Jan 27",
                image: "/assets/events/plugged_in.png",
                slug: "plugged-in"
            },
        ],
    },
    {
        id: "art",
        title: "Art & Creativity",
        icon: <Palette className="w-5 h-5" />,
        color: "from-orange-500 to-amber-700",
        events: [
            {
                name: "Creative Gallery",
                desc: "Sustainability Theme",
                image: "/assets/events/creative_gallery.png",
                slug: "creative-gallery"
            },
            {
                name: "Art Battles",
                desc: "Rangoli, Face Painting, T-Shirt",
                image: "/assets/events/art_battles.png",
                slug: "art-battles"
            },
            {
                name: "Doodleverse",
                desc: "Scribbles to Stories",
                image: "/assets/events/doodleverse.png",
                slug: "doodleverse"
            },
        ],
    },
    {
        id: "lens",
        title: "Lens & Film",
        icon: <Camera className="w-5 h-5" />,
        color: "from-red-500 to-rose-700",
        events: [
            {
                name: "Photography Exhibition",
                desc: "JPEG, 300 DPI",
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop", // Camera/Lens
                slug: "photography-exhibition"
            },
            {
                name: "Short Film",
                desc: "3 Mins, General Topic",
                image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop", // Film/Cinema
                slug: "short-film"
            },
        ],
    },
    {
        id: "fashion",
        title: "Fashion",
        icon: <Shirt className="w-5 h-5" />,
        color: "from-purple-500 to-indigo-700",
        events: [
            {
                name: "Tarader Kotha",
                desc: "Theme: Biswer Golpo, Fashion er Canvas e",
                image: "/assets/events/tarader_kotha.png",
                slug: "tarader-kotha"
            },
        ],
    },
];

const EventsGrid = () => {
    const [activeTab, setActiveTab] = useState("cultural");

    const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

    return (
        <section id="events" className="py-24 px-4 bg-black/95 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/5 via-transparent to-transparent opacity-50" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16 px-2"
                >
                    <h2 className="text-brand-orange uppercase tracking-widest font-bold mb-3 text-xs md:text-base">Competing Zones</h2>
                    <h3 className="text-3xl md:text-6xl font-oswald font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2 leading-tight">
                        Event Categories
                    </h3>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                relative px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 md:gap-3 transition-all duration-300
                border border-white/10 hover:border-white/30
                ${activeTab === cat.id ? "bg-white/10 text-white" : "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"}
              `}
                        >
                            <span className={`p-1 md:p-1.5 rounded-full ${activeTab === cat.id ? "bg-brand-orange text-black" : "bg-white/10"}`}>
                                {cat.icon}
                            </span>
                            <span className="font-oswald tracking-wide text-sm md:text-lg whitespace-nowrap">{cat.title}</span>

                            {activeTab === cat.id && (
                                <motion.div
                                    layoutId="activeTabOutline"
                                    className="absolute inset-0 rounded-full border-2 border-brand-orange"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Dynamic Content Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {activeCategory.events.map((event, idx) => (
                            <Link href={`/events/${event.slug}`} key={event.name}>
                                <motion.div
                                    key={event.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10"
                                >
                                    {/* Image Background */}
                                    <Image
                                        src={event.image}
                                        alt={event.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h4 className="text-3xl font-oswald font-bold mb-2 text-white">{event.name}</h4>
                                            <p className="text-brand-orange font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase tracking-wider text-sm">
                                                {event.desc}
                                            </p>

                                            <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors cursor-pointer">
                                                <span className="text-sm font-bold uppercase tracking-widest">View Details</span>
                                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Border Effect */}
                                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-500 pointer-events-none`} />
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default EventsGrid;
