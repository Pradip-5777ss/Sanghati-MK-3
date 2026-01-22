"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const scheduleData = {
    "Day 1": [
        { time: "12:00 PM", event: "Inauguration Ceremony", location: "Main Stage" },
        { time: "01:30 PM", event: "Extempore and Recitation", location: "Auditorium" },
        { time: "03:00 PM", event: "Megh Mancha (Drama)", location: "Creative Zone" },
        { time: "04:00 PM", event: "Plugged In (Band Competition)", location: "Open Air" },
    ],
    "Day 2": [
        { time: "11:00 AM", event: "Art Battles(T-shirt painting)", location: "Exhibition Hall" },
        { time: "12:30 PM", event: "Art Battles(Rangoli)", location: "Main Entrance Concourse" },
        { time: "02:00 PM", event: "Inauguration Ceremony", location: "Main Stage" },
        { time: "03:00 PM", event: "Dance competition", location: "Main Stage" },
        { time: "06:00 PM", event: "The Canvas of Muscle", location: "Main Stage" },
    ],
    "Day 3": [
        { time: "01:00 PM", event: "Inauguration Ceremony", location: "Main Stage" },
        { time: "02:00 PM", event: "Dance and singing performance", location: "Main Stage" },
        { time: "03:00 PM", event: "Tarader Kotha (Fashion Show)", location: "Main Stage" },
        { time: "07:30 PM", event: "Band Performance", location: "Open Air" },
    ],
};

const Schedule = () => {
    const [activeTab, setActiveTab] = useState("Day 1");

    return (
        <section id="schedule" className="py-20 px-4 bg-black text-white relative min-h-[800px]">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-brand-green uppercase tracking-widest font-bold mb-2">Event Timeline</h2>
                    <h3 className="text-4xl md:text-5xl font-oswald font-bold">Schedule</h3>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-16">
                    {Object.keys(scheduleData).map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveTab(day)}
                            className={clsx(
                                "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border",
                                activeTab === day
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-white/50 border-white/20 hover:border-white hover:text-white"
                            )}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-ml-[1px]" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-12"
                        >
                            {scheduleData[activeTab as keyof typeof scheduleData].map((item, index) => (
                                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between group">

                                    {/* Dot */}
                                    <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-orange border-4 border-black z-10 md:-ml-2 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(249,115,22,0.8)]`} />

                                    {/* Time (Left on Desktop) */}
                                    <div className={clsx(
                                        "pl-20 md:pl-0 md:w-1/2 md:pr-12 text-left md:text-right",
                                        index % 2 !== 0 ? "md:order-2 md:pl-12 md:text-left" : ""
                                    )}>
                                        <span className="text-brand-green font-bold font-oswald text-xl">{item.time}</span>
                                    </div>

                                    {/* Content (Right on Desktop) */}
                                    <div className={clsx(
                                        "pl-20 md:pl-0 md:w-1/2 md:pl-12",
                                        index % 2 !== 0 ? "md:order-1 md:pr-12 md:text-right" : ""
                                    )}>
                                        <h4 className="text-2xl font-bold">{item.event}</h4>
                                        <p className="text-white/50 text-sm uppercase tracking-wide mt-1">{item.location}</p>
                                    </div>

                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Schedule;
