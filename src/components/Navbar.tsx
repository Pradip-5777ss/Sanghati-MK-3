"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Schedule", href: "#schedule" },
    { name: "Gallery", href: "#gallery" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-3 md:gap-4">
                    <Link href="https://www.swamivivekanandauniversity.ac.in" className="relative h-12 w-12 md:h-16 md:w-16 shrink-0">
                        <Image
                            src="/assets/logo.png"
                            alt="SVU Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Divider */}
                    <div className="h-8 md:h-10 w-[1.5px] bg-white/30 rounded-full" />

                    {/* Text */}
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-wide font-oswald pb-1">
                        সংহti
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/80 hover:text-brand-green uppercase tracking-wider text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex">
                    <Link
                        href="https://forms.gle/catDTgVFz7bUtgLd8"
                        target="_blank"
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-brand-green to-brand-orange text-white font-bold uppercase text-sm tracking-wide shadow-lg hover:shadow-brand-green/50 transition-all hover:scale-105"
                    >
                        Participate Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 items-center">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg uppercase font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://forms.gle/catDTgVFz7bUtgLd8"
                        target="_blank"
                        className="w-full max-w-xs text-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-green to-brand-orange text-white font-bold uppercase text-sm tracking-wide"
                    >
                        Participate Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
