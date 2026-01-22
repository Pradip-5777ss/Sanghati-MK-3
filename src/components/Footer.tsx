import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUpRight, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Background Aesthetic Elements */}
            <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] gap-10 lg:gap-16 mb-10">

                    {/* Column 1: Brand Identity */}
                    <div className="space-y-8 flex flex-col items-start">
                        <Link href="/" className="block relative w-32 h-32 -ml-2">
                            <Image src="/assets/logo.png" alt="SVU Logo" fill className="object-contain" priority />
                        </Link>
                        <p className="text-white/60 text-base leading-relaxed max-w-sm font-light">
                            Crafting moments of culture, creativity, and unity. <br />
                            The biggest annual fest at <span className="text-white font-medium">Swami Vivekananda University</span>.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4 pt-2">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/SwamiVivekanandaUniversityOfficial" },
                                { Icon: Instagram, href: "https://instagram.com/swamivivekananda_university/" },
                                { Icon: Youtube, href: "https://www.youtube.com/channel/UCYfEd6-RAGFoi-o1GpVMCqA" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/swami-vivekananda-university/" }
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group"
                                >
                                    <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="text-xl font-oswald font-medium uppercase tracking-[0.2em] mb-8 text-white">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'Events', 'Schedule', 'Sponsors', 'Gallery'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/50 hover:text-brand-orange transition-colors flex items-center gap-3 group text-lg font-light"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-xl font-oswald font-medium uppercase tracking-[0.2em] mb-8 text-white">Contact</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-white/60 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                    <MapPin size={18} className="text-brand-orange" />
                                </div>
                                <div className="leading-relaxed font-light">
                                    <p className="text-white/90 font-medium mb-1">Swami Vivekananda University</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Swami+Vivekananda+University+Barrackpore"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white/70 hover:text-brand-orange transition-colors block"
                                    >
                                        Barrackpore - Barasat Rd, Sewli Telinipara <br />
                                        Malir Math, Bara Kanthalia, West Bengal 700121
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-white/60 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                    <Mail size={18} className="text-brand-orange" />
                                </div>
                                <a href="mailto:culturalclubsvu@svu.ac.in" className="hover:text-white transition-colors font-light">culturalclubsvu@svu.ac.in</a>
                            </div>

                            <div className="flex items-start gap-4 text-white/60 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors mt-1">
                                    <Phone size={18} className="text-brand-orange" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+91 8910729952" className="hover:text-white transition-colors font-light font-mono">+91 89107 29952</a>
                                    <a href="tel:+91 8918524603" className="hover:text-white transition-colors font-light font-mono">+91 89185 24603</a>
                                    <a href="tel:+91 9339426259" className="hover:text-white transition-colors font-light font-mono">+91 93394 26259</a>
                                    <a href="tel:+91 7908694255" className="hover:text-white transition-colors font-light font-mono">+91 79086 94255</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-sm font-light tracking-wide text-center md:text-left">
                        © {new Date().getFullYear()} <span className="text-brand-orange font-bold mx-1">সংহti</span>. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        {['Privacy Policy', 'Terms of Service', 'Support'].map((link) => (
                            <Link key={link} href="#" className="text-sm text-white/40 hover:text-white transition-colors font-light">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
