import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block relative w-24 h-24">
                            <Image src="/assets/logo.png" alt="Sanghati Logo" fill className="object-contain" />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Celebrating culture, creativity, and unity. Join us for the biggest fest of the year at Swami Vivekananda University.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-oswald font-bold uppercase tracking-wider mb-6 text-brand-orange">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Events', 'Schedule', 'Sponsors', 'Gallery'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-brand-orange opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal & Help */}
                    <div>
                        <h4 className="text-lg font-oswald font-bold uppercase tracking-wider mb-6 text-brand-orange">Support</h4>
                        <ul className="space-y-3">
                            {['Rules & Regulations', 'Privacy Policy', 'Terms of Service', 'FAQ', 'Contact Support'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-brand-orange opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-lg font-oswald font-bold uppercase tracking-wider mb-6 text-brand-orange">Get in Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-white/60">
                                <MapPin size={20} className="text-brand-orange shrink-0 mt-1" />
                                <p>Swami Vivekananda University,<br />Barrackpore, Kolkata - 700121</p>
                            </div>
                            <div className="flex items-center gap-4 text-white/60">
                                <Mail size={20} className="text-brand-orange shrink-0" />
                                <a href="mailto:contact@sanghati-fest.com" className="hover:text-white transition-colors">contact@sanghati-fest.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-white/60">
                                <Phone size={20} className="text-brand-orange shrink-0" />
                                <a href="tel:+918910729952" className="hover:text-white transition-colors">+91 89107 29952</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} <span className="text-white font-bold">সংহti</span>. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-white/40 font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
