export interface EventRule {
    title?: string;
    items: string[];
}

export interface EventDetail {
    slug: string;
    name: string;
    description: string;
    image: string;
    category: string;
    rules: EventRule[];
    themeList?: string[];
    contactInfo?: string; // Optional
    schedule?: string; // Optional
    registrationLink?: string; // Optional
}

export const eventsData: Record<string, EventDetail> = {
    "tal-tarang": {
        slug: "tal-tarang",
        name: "Tal Tarang",
        description: "Dance Competition - Group, Social Message",
        image: "/assets/events/tal_tarang_detail.png",
        category: "Cultural & Performance",
        rules: [
            {
                title: "Rules and Regulations",
                items: [
                    "Only group dance performances are permitted. Solo performances are strictly not allowed.",
                    "Each group must consist of a minimum of five (5) participants.",
                    "The dance performance must convey a clear social message or social awareness theme.",
                    "A list of approved themes will be provided by the organizing committee, and each group must select only one theme from the given list.",
                    "Performances based on themes outside the provided list will not be permitted.",
                    "The maximum time limit for each performance is six (7) minutes. If a performance exceeds the allotted time, the organizing committee reserves the right to stop the performance immediately.",
                    "Participants must arrange their own costumes, props, and music tracks.",
                    "The use of obscene gestures, inappropriate songs, offensive content, or vulgar expressions is strictly prohibited.",
                    "All performances must maintain discipline, decency, and respect for social and cultural values.",
                    "Participants must report at the venue well in advance of their scheduled performance time.",
                    "Prizes will be awarded to the First, Second, and Third place winners.",
                    "The decision of the judging panel shall be final and binding.",
                    "Any violation of the above rules may lead to disqualification."
                ]
            }
        ],
        themeList: [
            "Women Empowerment & Gender Equality – Education, safety, self-reliance, breaking stereotypes",
            "Save the Environment – Climate change, pollution control, plastic ban, tree plantation",
            "Unity in Diversity (Indian Culture) – Harmony among religions, cultures, and communities",
            "Drug Abuse & Addiction Awareness – Effects of substance abuse, youth awareness, recovery",
            "Save Water, Save Life – Water conservation, water scarcity, sustainable future",
            "Education for All – Importance of education, girl child education",
            "Stop Violence Against Women – Domestic violence, respect, women’s rights",
            "Digital Addiction & Its Impact on Youth – Mobile addiction, excessive social media usage",
            "Mental Health Awareness – Stress management, depression awareness, emotional well-being",
            "Corruption-Free Society – Honesty, ethics, accountability",
            "Child Labour & Child Rights – Education over exploitation",
            "Respect for Farmers (Annadata) – Farmers’ struggles, importance of agriculture",
            "Health & Hygiene Awareness – Clean India, personal and public hygiene",
            "Women Safety & Self-Defense – Awareness, courage, empowerment",
            "Patriotism & Social Responsibility – Duties of citizens, nation building"
        ],
        registrationLink: "https://forms.gle/zJMukGv38KZbVNAm9"
    },
    "megh-mancha": {
        slug: "megh-mancha",
        name: "Megh Mancha",
        description: "Drama - Folk/Recitation",
        image: "/assets/events/megh_mancha_detail.png",
        category: "Cultural & Performance",
        rules: [
            {
                title: "Event Rules & Guidelines",
                items: [
                    "Eligibility: Open to all university students; teams/individuals",
                    "Theme Focus: Bengal folk/culture emphasized; other cultural narratives allowed",
                    "Props & Costumes: Simple, thematic; no electronics or hazards."
                ]
            },
            {
                title: "Time Limitations",
                items: [
                    "Short Drama: Duration 8-10 mins, Prep 2 mins, Total 15 mins",
                    "Recitation: Duration 6-8 mins, Prep 2 mins, Total 10 mins",
                    "Extempore: Duration 3-4 mins, Prep 5 mins, Total 10 mins"
                ]
            },
            {
                title: "Judging Criteria (Scores out of 100)",
                items: [
                    "Content Relevance (30 marks): Cultural depth, originality, theme fit",
                    "Performance Quality (30 marks): Expression, modulation, impact",
                    "Artistic Presentation (20 marks): Creativity, authenticity",
                    "Time & Discipline (10 marks): Adherence, flow",
                    "Overall Impact (10 marks): Engagement, resonance"
                ]
            }
        ],
        registrationLink: "https://forms.gle/oD41jJPmduVCHgeL8"
    },
    "plugged-in": {
        slug: "plugged-in",
        name: "Plugged In",
        description: "Band - Inter-College, Jan 27",
        image: "/assets/events/plugged_in_detail.png",
        category: "Cultural & Performance",
        rules: [
            {
                title: "Participation & Band Size",
                items: [
                    "Open to college/University students only.",
                    "Band size: 4-6 members.",
                    "A participant can perform in only one band."
                ]
            },
            {
                title: "Performance Guidelines",
                items: [
                    "Stage time: 20 minutes.",
                    "Sound check: 10 minutes.",
                    "Exceeding time will result in sound being muted."
                ]
            },
            {
                title: "Music Guidelines",
                items: [
                    "Any genre allowed.",
                    "Clean lyrics only (no obscenity, hate speech, political lyrics, or slang).",
                    "Originals and covers allowed (at least one original composition is mandatory)."
                ]
            },
            {
                title: "Equipment",
                items: [
                    "Provided: Microphones, Basic drum kit, Output Sounds.",
                    "Bring your own: instruments, pedals, sticks, cymbals."
                ]
            },
            {
                title: "Disqualification Criteria",
                items: [
                    "Vulgarity or indiscipline.",
                    "Damage to equipment.",
                    "Any type of violations."
                ]
            }
        ],
        schedule: "27th January, 2026 at Swami Vivekananda University",
        registrationLink: "https://forms.gle/jJcDiiG9XBBH865cA"
    },
    "creative-gallery": {
        slug: "creative-gallery",
        name: "Creative Gallery",
        description: "Sustainability Theme",
        image: "/assets/events/creative_gallery.png",
        category: "Art & Creativity",
        rules: [
            {
                title: "Theme & Categories",
                items: [
                    "Theme: 'Sustainability' - Reflect environmental awareness, eco-friendly practices, and sustainable living.",
                    "Painting Categories: Jamini Roy style, Folk Art, Mandala Art."
                ]
            },
            {
                title: "Submission Guidelines",
                items: [
                    "Submission Venue: Block 8, JCB Room No. 306.",
                    "Paintings must be created on 1/4th Chart Paper (11 inches × 14 inches)."
                ]
            },
            {
                title: "General Instructions",
                items: [
                    "Each submission must be original and handmade.",
                    "Participants should clearly mention their name, department, contact number, and category on the back of the artwork.",
                    "Selected artworks will be displayed at the official fest exhibition.",
                    "Handmade crafts and paintings will be available for purchase during the exhibition."
                ]
            }
        ],
        registrationLink: "https://forms.gle/HoUhQAHrTRRtaQrv6"
    },
    "art-battles": {
        slug: "art-battles",
        name: "Art Battles",
        description: "Rangoli, Face Painting, T-Shirt",
        image: "/assets/events/art_battles.png",
        category: "Art & Creativity",
        rules: [
            {
                title: "Rangoli Competition",
                items: [
                    "Participants must bring their own rangoli colours/materials.",
                    "Time limit: 1 hour.",
                    "Theme is open but should represent Indian culture and/or highlight a social cause.",
                    "Maintain cleanliness and discipline."
                ]
            },
            {
                title: "T-Shirt Design / Painting",
                items: [
                    "Participants must bring their own plain T-shirt and painting materials.",
                    "Time limit: 1 hour.",
                    "Theme is open. Designs should reflect creativity, Indian culture, or social awareness.",
                    "Offensive or copied designs are prohibited."
                ]
            },
            {
                title: "Face Painting",
                items: [
                    "Bring your own model/volunteer and skin-friendly face paints.",
                    "Time limit: 1 hour.",
                    "Theme is open.",
                    "Offensive or copied designs are not allowed."
                ]
            },
            {
                title: "Caricature Face Painting",
                items: [
                    "Model and drawing paper provided by organizers.",
                    "Participants bring their own colours/materials.",
                    "Time limit: 40 Minutes.",
                    "Caricatures should display creative exaggeration while maintaining decency."
                ]
            }
        ],
        registrationLink: "https://forms.gle/K2TdSwX55AThv6NA6"
    },
    "doodleverse": {
        slug: "doodleverse",
        name: "Doodleverse",
        description: "Scribbles to Stories",
        image: "/assets/events/doodleverse.png",
        category: "Art & Creativity",
        rules: [
            {
                title: "Doodle Competition",
                items: [
                    "Conducted on the spot during the fest.",
                    "Required materials and time limits will be announced at the venue.",
                    "Registration is mandatory."
                ]
            }
        ],
        registrationLink: "https://forms.gle/RAQ5MiJCvVgxZSjcA"
    },
    "tarader-kotha": {
        slug: "tarader-kotha",
        name: "Tarader Kotha",
        description: "Theme: Biswer Golpo, Fashion er Canvas e",
        image: "/assets/events/tarader_kotha.png",
        category: "Fashion",
        rules: [
            {
                title: "Theme: Stories of Global Figures",
                items: [
                    "Portray recognized personalities who have influenced the world through leadership, culture, art, science, sports, etc.",
                    "Narrative must be conveyed through fashion, costume design, choreography, music, and stage presentation."
                ]
            },
            {
                title: "Rules & Regulations",
                items: [
                    "Team Size: 10–12 members per group.",
                    "Time Limit: Maximum 10 minutes.",
                    "Music must be submitted in advance to Student Representatives.",
                    "Costumes and performances must clearly reflect the theme.",
                    "Political, religious, or historical portrayals must be handled with respect and sensitivity."
                ]
            }
        ],
        registrationLink: "https://forms.gle/g9u1YhrczQBGehVa7"
    },
    "photography-exhibition": {
        slug: "photography-exhibition",
        name: "Photography Exhibition",
        description: "JPEG, 300 DPI",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
        category: "Lens & Film",
        rules: [
            {
                title: "Submission Guidelines",
                items: [
                    "Each participant may submit 1 photograph.",
                    "Format: JPEG/JPG/PNG, Min resolution: 300 DPI, Max size: 10 MB.",
                    "Must be original. Basic editing allowed; heavy manipulation/AI not allowed."
                ]
            },
            {
                title: "Ethical & Legal",
                items: [
                    "No offensive/defamatory content.",
                    "Consent required if people are recognizable.",
                    "Copyright violations lead to disqualification."
                ]
            }
        ],
        registrationLink: "https://forms.gle/CsB9UNiiBm8oUiw17"
    },
    "short-film": {
        slug: "short-film",
        name: "Short Film",
        description: "3 Mins, General Topic",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
        category: "Lens & Film",
        rules: [
            {
                title: "Rules & Regulations",
                items: [
                    "Max team size: 10 participants.",
                    "Topic: General topics (based on SVU Guidelines).",
                    "Max duration: 3 minutes.",
                    "No inflammatory content (political, religious, caste-based, etc.).",
                    "Audio must be clear and piracy-free.",
                    "Must be original work."
                ]
            }
        ],
        registrationLink: "https://forms.gle/Ro4wnA2ijFr1iZ5r5"
    }
};
