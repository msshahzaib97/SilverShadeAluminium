import { ServiceItem, ProjectItem, BeforeAfterItem, TestimonialItem, FaqItem } from '../types';

export const COMPANY_CONFIG = {
  brandName: "Silver Shade Aluminium",
  tagline: "Premium Aluminium & Glass Solutions in Dubai",
  domain: "silvershadealuminium.com",
  location: "Dubai, United Arab Emirates",
  address: "Industrial Area / Al Quoz & Business Bay Design District, Dubai, UAE",
  phone: "+971 XX XXX XXXX",
  phoneDisplay: "+971 4 XXX XXXX",
  whatsappNumber: "+971501234567", // Configurable WhatsApp contact
  whatsappDisplay: "+971 50 XXX XXXX",
  email: "info@silvershadealuminium.com",
  workingHours: "Monday – Saturday: 8:00 AM – 7:00 PM (GST)",
  establishedYear: 2026,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "aluminium-doors",
    number: "01",
    name: "Aluminium Doors",
    shortDesc: "Modern sliding, hinged, folding and custom aluminium doors designed for contemporary spaces.",
    fullDesc: "Engineered for superior weather resistance and effortless operation in Dubai's climate. Our luxury aluminium door systems feature ultra-slim profiles, multi-point locking systems, and thermal break engineering for maximum acoustic and thermal insulation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    category: "Doors & Entrances",
    specs: [
      { label: "Profile Width", value: "Slim 45mm – 75mm sightlines" },
      { label: "Thermal Rating", value: "U-value as low as 1.1 W/m²K" },
      { label: "Finishes", value: "Anodized, Matt Black, Champagne Gold, Custom RAL" },
      { label: "Glass Options", value: "Double / Triple Glazed Low-E Acoustic Glass" },
    ],
    features: [
      "Heavy-duty German & Italian hardware mechanisms",
      "Seamless flush threshold options for zero-trip transition",
      "Corrosion-resistant marine-grade powder coating",
      "Smart electronic lock and biometric integration"
    ]
  },
  {
    id: "glass-doors",
    number: "02",
    name: "Glass Doors",
    shortDesc: "Elegant glass door solutions that create openness, natural light and a sophisticated finish.",
    fullDesc: "Frameless and minimal-frame glass door systems crafted to illuminate luxury interiors while maintaining structural rigidity. Ideal for master suites, entrance lobbies, and modern office entrances.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    category: "Doors & Entrances",
    specs: [
      { label: "Glass Type", value: "10mm / 12mm Toughened & Laminated Safety Glass" },
      { label: "Operation", value: "Pivot, Soft-Close Sliding, Floor-Spring Hinged" },
      { label: "Hardware", value: "Solid Brushed Stainless Steel & Matte Black" },
      { label: "Clarity", value: "Ultra-Clear Low Iron / Tinted / Fluted Reeded Glass" }
    ],
    features: [
      "Ultra-clear low-iron float glass with superior transparency",
      "Custom decorative fluted, frosted, or acoustic interlayer glass",
      "Self-closing hydraulic floor springs with 90° hold-open",
      "Minimalist architectural pull handles up to 2.4m height"
    ]
  },
  {
    id: "aluminium-windows",
    number: "03",
    name: "Aluminium Windows",
    shortDesc: "Durable and stylish aluminium window systems designed for residential and commercial properties.",
    fullDesc: "Precision-crafted window systems with ultra-narrow sightlines that maximize daylight. Designed to withstand Dubai's extreme heat and desert dust storms through advanced multi-chamber seals and solar reflective glazing.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
    category: "Windows & Glazing",
    specs: [
      { label: "Frame Type", value: "High-Performance Thermal Break Aluminium" },
      { label: "Configurations", value: "Casement, Tilt & Turn, Fixed Panoramic, Awning" },
      { label: "Solar Control", value: "Solar Factor (g-value) < 0.28" },
      { label: "Sound Proofing", value: "Acoustic attenuation up to 45 dB" }
    ],
    features: [
      "Multi-chamber thermal barrier against high ambient temperatures",
      "Concealed sash profiles for uninterrupted exterior glass plane",
      "High-security multi-point locking around entire perimeter",
      "Integrated micro-ventilation and magnetic insect screens"
    ]
  },
  {
    id: "sliding-bifold-systems",
    number: "04",
    name: "Sliding & Bifold Systems",
    shortDesc: "Large-opening systems designed to create seamless indoor-outdoor living spaces.",
    fullDesc: "Expansive multi-panel sliding and folding glass walls that open up to 90% of the aperture. Connect your living spaces directly to garden courtyards, swimming pools, and scenic Dubai skylines with effortless fingertip sliding.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    category: "Expansive Openings",
    specs: [
      { label: "Max Panel Height", value: "Up to 4.0 meters" },
      { label: "Max Panel Weight", value: "Up to 500 kg per sash with smooth stainless rollers" },
      { label: "Interlock Sightline", value: "Super-slim 20mm minimal interlock" },
      { label: "Pocket Sliding", value: "Available concealed wall pocket configurations" }
    ],
    features: [
      "Hidden drainage systems engineered for Dubai rainfall drainage",
      "Motorized automated sliding options with smart home sync",
      "90-degree floating post-free corner openings",
      "High wind-load resistance for beachfront & high-rise installations"
    ]
  },
  {
    id: "glass-partitions",
    number: "05",
    name: "Glass Partitions",
    shortDesc: "Minimal glass partition systems for offices, villas, retail spaces and commercial interiors.",
    fullDesc: "Architectural acoustic glass partitioning for boardrooms, executive suites, showroom divisions, and open-concept villas. Maintains luminous transparency while providing speech privacy and zoning.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    category: "Interior Glazing",
    specs: [
      { label: "Acoustic Rating", value: "Rw 36dB to 48dB with acoustic laminated glass" },
      { label: "Profiles", value: "Slim 25mm perimeter channels or micro-framed grid" },
      { label: "Configurations", value: "Single Glazed, Double Glazed, Crittall Industrial Style" },
      { label: "Integrations", value: "Smart Switchable Privacy PDLC Glass, Timber Doors" }
    ],
    features: [
      "Dry-joint crystal clear polycarbonate tape connections",
      "Integrated electrical switchable privacy glass options",
      "Custom manifestation film and architectural fluted glass",
      "Frameless pivot or top-hung sliding glass door integration"
    ]
  },
  {
    id: "aluminium-wardrobes",
    number: "06",
    name: "Aluminium Wardrobes",
    shortDesc: "Contemporary wardrobe systems combining durability, clean aesthetics and practical storage.",
    fullDesc: "Bespoke Italian-style walk-in closets and wardrobe cabinets structured with anodized aluminium extrusions, smoked tempered glass doors, integrated continuous LED linear illumination, and luxury leatherette storage modules.",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85",
    category: "Interior Joinery & Storage",
    specs: [
      { label: "Frame Finish", value: "Brushed Bronze, Champagne Gold, Matte Charcoal, Black" },
      { label: "Door Materials", value: "Bronze Smoked Glass, Fluted Glass, Back-Painted Glass" },
      { label: "Lighting", value: "Concealed 3000K Warm LED with motion proximity sensor" },
      { label: "Hinges", value: "Concealed 3D adjustable soft-close pivot hinges" }
    ],
    features: [
      "Ultra-slim anodized aluminium profiles with 45° miter joints",
      "Dust-proof magnetic perimeter seals with air dampeners",
      "Customizable accessory trays for watches, jewelry, and belts",
      "Floor-to-ceiling single-panel doors up to 3.2m height"
    ]
  },
  {
    id: "glass-facades",
    number: "07",
    name: "Glass Facades",
    shortDesc: "Architectural aluminium and glass façade solutions for modern buildings and commercial properties.",
    fullDesc: "Curtain wall and structural unitized glass facade engineering that defines modern Dubai architecture. Combines high thermal performance, extreme wind load tolerance, and clean monolithic exterior aesthetics.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    category: "Building Envelope",
    specs: [
      { label: "System Type", value: "Stick Curtain Wall, Unitized Facades, Spider Glass" },
      { label: "Glass Coating", value: "High-Performance Low-E Solar Control Coatings" },
      { label: "Pressure Equalized", value: "Rainscreen principle with multi-tier weep drainage" },
      { label: "Engineering", value: "Compliant with Dubai Municipality & Civil Defense codes" }
    ],
    features: [
      "Custom extruded aluminium mullions with high moment of inertia",
      "Structural silicone glazed exterior without visible exterior caps",
      "Integrated operable concealed top-hung vents for smoke/air",
      "Comprehensive seismic and high-velocity wind load resistance"
    ]
  },
  {
    id: "aluminium-pergolas",
    number: "08",
    name: "Aluminium Pergolas",
    shortDesc: "Modern outdoor aluminium structures designed for elegant outdoor spaces.",
    fullDesc: "Bioclimatic motorized aluminium pergolas with rotating louvers, integrated rain drainage channels, motorized zip screens, and warm perimeter LED lighting. Transform your Dubai villa terrace and pool deck into a year-round luxury lounge.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    category: "Outdoor Architectural",
    specs: [
      { label: "Louver Rotation", value: "Motorized 0° to 135° angle adjustment" },
      { label: "Wind Resistance", value: "Tested up to Beaufort Class 11 (120 km/h)" },
      { label: "Coating", value: "Qualicoat Class 2 Super-Durable Architectural Powder" },
      { label: "Rain Management", value: "100% watertight closed louver system with internal downspouts" }
    ],
    features: [
      "Somfy motorization with rain, wind and sun automatic sensors",
      "Integrated perimeter dimmable warm white LED linear strips",
      "Optional motorized solar zip screens and sliding glass curtains",
      "Heavy-gauge extruded aluminium construction engineered for UAE weather"
    ]
  },
  {
    id: "glass-railings",
    number: "09",
    name: "Glass Railings",
    shortDesc: "Minimal glass railing and balustrade systems for stairs, balconies and terraces.",
    fullDesc: "Frameless glass balustrades providing unobstructed panoramic views of the Arabian Gulf and Dubai skylines. Embedded bottom base shoe channels and stainless steel side-mount spigots ensure maximum structural safety.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
    category: "Safety & Architectural Glazing",
    specs: [
      { label: "Glass Spec", value: "17.52mm / 21.52mm SentryGlas (SGP) Laminated Toughened" },
      { label: "Mounting Style", value: "Recessed Sub-Floor Channel, Side Standoff Pins, Spigots" },
      { label: "Handrail Options", value: "Top-Mounted Slimline Stainless / Micro-Cap / Handrail-Free" },
      { label: "Load Capacity", value: "Up to 3.0 kN/m line load capacity (exceeds UAE building code)" }
    ],
    features: [
      "Structural SentryGlas interlayer maintains stiffness if broken",
      "Concealed base shoe installation with anodized aluminium covers",
      "Custom curved and spiral glass balustrades for sculptural staircases",
      "Water drainage weep holes preventing water accumulation"
    ]
  },
  {
    id: "custom-aluminium-works",
    number: "10",
    name: "Custom Aluminium Works",
    shortDesc: "Bespoke aluminium fabrication tailored to the client's exact requirements.",
    fullDesc: "From parametric mashrabiya decorative screens and laser-cut villa entrance gates to bespoke aluminium wall paneling and architectural louvers. We bring complex architectural visions to life with CNC precision cutting and custom alloy welding.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    category: "Bespoke Architectural",
    specs: [
      { label: "Fabrication Method", value: "CNC 5-Axis Milling, Laser Cutting, TIG/MIG Welding" },
      { label: "Alloy Grades", value: "6063-T6, 6082-T6, 5083 Marine-Grade Sheet" },
      { label: "Customization", value: "Parametric geometry, Arabic geometric Mashrabiya patterns" },
      { label: "Applications", value: "Decorative facades, louvers, privacy gates, architectural screens" }
    ],
    features: [
      "In-house 3D CAD modeling and shop drawing engineering",
      "Color-matching to existing architectural finishes and stone",
      "Precision robotic cutting ensuring 0.1mm tolerance",
      "Custom integrated LED light recesses in architectural louvers"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "palm-jumeirah-villa",
    title: "Palm Jumeirah Contemporary Villa",
    category: "Sliding Systems",
    categorySlug: "sliding-systems",
    location: "Palm Jumeirah, Dubai",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    ],
    year: "2025 - 2026",
    scope: "Minimalist floor-to-ceiling sliding glass walls, slim entrance door, and frameless glass balustrades",
    description: "Custom engineered 3.8m tall slim-profile sliding doors connecting beachfront terrace with open-plan interior living space, featuring high acoustic and solar attenuation.",
    systemUsed: "Silver Shade Thermal-Break Slim Sliding System (20mm interlock)"
  },
  {
    id: "emirates-hills-mansion",
    title: "Emirates Hills Architectural Residence",
    category: "Luxury Villas",
    categorySlug: "luxury-villas",
    location: "Emirates Hills, Dubai",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
    ],
    year: "2025",
    scope: "Full architectural envelope including curtain walling, motorized pergolas, and pivot entrance doors",
    description: "Comprehensive aluminium and glass solution for a modern luxury mansion, incorporating grand double-height glass facades and custom champagne anodized finishes.",
    systemUsed: "Structural Curtain Wall & Motorized Pivot Systems"
  },
  {
    id: "dubai-hills-estate-villa",
    title: "Dubai Hills Estate Golf Villa",
    category: "Aluminium Doors",
    categorySlug: "aluminium-doors",
    location: "Dubai Hills Estate, Dubai",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Oversized aluminium hinged pivot doors and integrated thermal break casement windows",
    description: "Minimalist entrance architecture with hidden hinges and integrated biometric smart access handle set in dark charcoal powder finish.",
    systemUsed: "Thermal Pivot Door Series 85"
  },
  {
    id: "difc-corporate-headquarters",
    title: "DIFC Executive Corporate Suite",
    category: "Glass Partitions",
    categorySlug: "glass-partitions",
    location: "DIFC, Downtown Dubai",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Acoustic double glazed partitions, switchable smart privacy glass, and frameless pivot doors",
    description: "High-spec acoustic office zoning system with concealed tracks and magnetic drop seals achieving 45dB sound reduction for confidential boardroom spaces.",
    systemUsed: "Acoustic PureGlass Slim Partitioning"
  },
  {
    id: "jumeirah-bay-island-penthouse",
    title: "Jumeirah Bay Island Seafront Penthouse",
    category: "Glass Railings",
    categorySlug: "railings",
    location: "Jumeirah Bay Island, Dubai",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Frameless cantilevered glass balustrades and wind-barrier glass screens",
    description: "Ultra-clear low-iron laminated glass balustrades embedded directly into the perimeter coping stones for completely invisible structural support.",
    systemUsed: "SentryGlas Laminated Invisible Base Shoe System"
  },
  {
    id: "al-barari-luxury-villa",
    title: "Al Barari Bioclimatic Pool Lounge",
    category: "Pergolas",
    categorySlug: "pergolas",
    location: "Al Barari, Dubai",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Free-standing motorized bioclimatic aluminium pergola with sliding glass curtain walls",
    description: "Weather-adaptive outdoor oasis with automated sensor-guided louvers, integrated rain drainage channels, and dimmable perimeter lighting.",
    systemUsed: "AeroLouvre Bioclimatic 135° Series"
  },
  {
    id: "downtown-luxury-penthouse-wardrobes",
    title: "Downtown Dubai Master Suite Dressing Room",
    category: "Wardrobes",
    categorySlug: "wardrobes",
    location: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Custom walk-in aluminium and bronze smoked glass wardrobe system with integrated lighting",
    description: "Floor-to-ceiling luxury wardrobe installation with 3.2m tall glass doors, concealed soft-closing pivot hardware, and intelligent sensor illumination.",
    systemUsed: "Lumina Bronze Glass & Aluminium Wardrobe System"
  },
  {
    id: "business-bay-commercial-tower",
    title: "Business Bay Commercial Facade",
    category: "Facades",
    categorySlug: "facades",
    location: "Business Bay, Dubai",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Unitized glass facade curtain walling with solar control reflective glazing",
    description: "Engineered building envelope maximizing internal natural daylight while maintaining optimal thermal efficiency under direct UAE sunlight.",
    systemUsed: "Unitized Structural Glazing Facade Series"
  },
  {
    id: "bluewaters-residence-folding-system",
    title: "Bluewaters Luxury Balcony Bifold",
    category: "Sliding Systems",
    categorySlug: "sliding-systems",
    location: "Bluewaters Island, Dubai",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "6-Panel thermal break bifold door system with flush floor track",
    description: "Expansive bi-folding glass doors that fold neatly to one side, opening up unobstructed views of Ain Dubai and the Arabian coastline.",
    systemUsed: "Panorama Fold-80 Heavy Duty Bifold"
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "entrance-transformation",
    title: "Villa Entrance Modernization",
    subtitle: "From Dated Wooden Entry to Modern Pivot Glass & Aluminium",
    beforeLabel: "Traditional Heavy Entrance",
    afterLabel: "Modern Luxury Pivot Entrance",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    description: "Replaced an outdated, dark timber doorway with an oversized 3.5m tall insulated aluminium pivot door with low-iron side glazing, creating instant architectural grandeur.",
    location: "Palm Jumeirah Villa"
  },
  {
    id: "windows-transformation",
    title: "Living Room Panoramic Opening",
    subtitle: "From Small Framed Windows to Floor-to-Ceiling Slim Glazing",
    beforeLabel: "Restricted View Windows",
    afterLabel: "Ultra-Slim Sliding Glass Wall",
    beforeImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    description: "Expanded structural wall openings into continuous 12-meter panoramic glass sliding systems with flush floor integration, flooding the space with natural light.",
    location: "Emirates Hills Residence"
  },
  {
    id: "office-partition-transformation",
    title: "Corporate Office Spatial Zoning",
    subtitle: "From Opaque Drywall to Frameless Acoustic Glass Partitions",
    beforeLabel: "Dark Closed Drywall",
    afterLabel: "Frameless Acoustic Glass System",
    beforeImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    description: "Converted closed, segmented office cabins into bright, collaborative executive zones with 42dB acoustic glass partitions and matte black slim headers.",
    location: "DIFC Corporate Office"
  },
  {
    id: "wardrobe-transformation",
    title: "Master Suite Dressing Transformation",
    subtitle: "From Standard Closed Joinery to Illuminated Aluminium Glass Wardrobe",
    beforeLabel: "Standard Closed Wardrobe",
    afterLabel: "Smoked Glass & Aluminium System",
    beforeImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1000&q=80",
    description: "Upgraded conventional melamine closets to an architectural Italian-style glass and aluminium wardrobe with integrated bronze profiles and warm 3000K illumination.",
    location: "Dubai Hills Villa"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote: "The precision and finish of Silver Shade's sliding door systems completely transformed our villa living space in Palm Jumeirah. The thermal insulation and smooth glide are exceptional.",
    clientName: "Private Villa Owner",
    role: "Homeowner",
    location: "Palm Jumeirah, Dubai",
    projectType: "Full Villa Slim Sliding Doors & Balustrades",
    rating: 5
  },
  {
    id: "t2",
    quote: "As an architectural studio in Dubai, we demand uncompromising tolerances and slim profiles. Silver Shade fabricated and installed our bespoke 4-meter glass partitions flawlessly on schedule.",
    clientName: "Senior Partner & Architect",
    role: "Architectural Studio",
    location: "DIFC, Dubai",
    projectType: "Corporate Office Glass Partitions & Facades",
    rating: 5
  },
  {
    id: "t3",
    quote: "From initial laser measurements to final silicone sealing, their engineering team demonstrated true craftsmanship. The bioclimatic pergola and pool glass railings look magnificent.",
    clientName: "Luxury Property Developer",
    role: "Residential Developer",
    location: "Dubai Hills Estate",
    projectType: "Outdoor Pergolas & Architectural Railings",
    rating: 5
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you provide custom aluminium designs?",
    answer: "Yes. Every aluminium and glass solution is custom-engineered to your exact architectural drawings, opening dimensions, preferred profile colors (anodized, powder coated RAL), and performance specifications."
  },
  {
    id: "faq-2",
    question: "Do you provide installation?",
    answer: "Yes, our in-house certified engineering and installation teams manage the complete process — from site laser survey and structural sub-frame preparation to final glazing, sealing, and testing."
  },
  {
    id: "faq-3",
    question: "Can I request a quotation?",
    answer: "Yes. You can contact Silver Shade Aluminium through WhatsApp, telephone, or our website quotation form. Simply share your project drawings or approximate dimensions, and we will prepare a detailed technical estimate."
  },
  {
    id: "faq-4",
    question: "Do you work on residential and commercial projects?",
    answer: "Yes, Silver Shade Aluminium delivers solutions for private luxury villas, penthouses, high-end commercial offices, luxury retail stores, hospitality developments, and residential towers across the UAE."
  },
  {
    id: "faq-5",
    question: "Which areas do you serve?",
    answer: "We primarily serve Dubai (including Palm Jumeirah, Emirates Hills, Dubai Hills Estate, Downtown Dubai, Jumeirah, Al Barari, Arabian Ranches, DIFC, and Business Bay) as well as Abu Dhabi, Sharjah, and other emirates across the UAE."
  },
  {
    id: "faq-6",
    question: "How do your aluminium and glass systems perform in Dubai's summer climate?",
    answer: "Our systems utilize certified thermal-break aluminium extrusions and double/triple glazed Low-E acoustic solar control glass. This minimizes heat transfer, prevents condensation, significantly lowers cooling energy costs, and blocks UV damage to interiors."
  }
];
