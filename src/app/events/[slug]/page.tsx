import { eventsData } from "@/data/eventsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText, CheckCircle } from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Ensure the page is dynamically rendered since we are using params
export const dynamic = "force-dynamic";

export default async function EventPage({ params }: Props) {
    const { slug } = await params;
    const event = eventsData[slug];

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Back Button */}
                <Link
                    href="/#events"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-oswald uppercase tracking-wide">Back to Events</span>
                </Link>

                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src={event.image}
                            alt={event.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-brand-orange text-sm font-bold uppercase tracking-widest mb-4 w-fit">
                            {event.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-oswald font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
                            {event.name}
                        </h1>
                        <p className="text-xl text-white/80 mb-8 font-light">
                            {event.description}
                        </p>

                        {event.schedule && (
                            <div className="flex items-center gap-3 text-brand-orange mb-6">
                                <Calendar className="w-6 h-6" />
                                <span className="text-lg font-medium">{event.schedule}</span>
                            </div>
                        )}

                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-oswald font-bold text-white mb-2">Registration</h3>
                            <p className="text-white/60 mb-4">
                                Secure your spot for {event.name}!
                            </p>
                            <Link href="/#registration" className="block w-full py-3 text-center bg-brand-orange text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-lg">
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Rules & Details Section */}
                <div className="grid gap-8">
                    {/* Theme List (If present) */}
                    {event.themeList && (
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-oswald font-bold text-brand-orange mb-6 flex items-center gap-3">
                                <CheckCircle className="w-6 h-6" />
                                Approved Themes
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {event.themeList.map((theme, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                                        <span>{theme}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Rules */}
                    {event.rules.map((section, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                            <h3 className="text-2xl font-oswald font-bold text-white mb-6 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-brand-orange" />
                                {section.title || "Rules & Regulations"}
                            </h3>
                            <ul className="space-y-4">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70 group">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5 text-xs text-brand-orange font-bold mt-0.5 shrink-0 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                                            {i + 1}
                                        </span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
