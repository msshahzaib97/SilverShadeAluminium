import { ServiceItem, ProjectItem, BeforeAfterItem, TestimonialItem, FaqItem } from '../types';

export const COMPANY_CONFIG = {
  brandName: "Silver Shade Aluminium",
  tagline: "Premium Aluminium & Glass Solutions in Abu Dhabi, Dubai & UAE",
  domain: "silvershadealuminium.com",
  location: "Musaffah, Abu Dhabi, UAE",
  address: "Industrial Area, Musaffah, Abu Dhabi, United Arab Emirates",
  phone: "+971 52 335 2536",
  phoneSecondary: "+971 56 607 6460",
  phoneDisplay: "+971 52 335 2536 / +971 56 607 6460",
  phones: [
    { number: "+971523352536", raw: "0523352536", display: "+971 52 335 2536" },
    { number: "+971566076460", raw: "0566076460", display: "+971 56 607 6460" }
  ],
  whatsappNumber: "+971523352536",
  whatsappNumberSecondary: "+971566076460",
  whatsappDisplay: "+971 52 335 2536 / +971 56 607 6460",
  email: "Silvershadesales@gmail.com",
  workingHours: "Monday – Saturday: 8:00 AM – 7:00 PM (GST)",
  establishedYear: 2026,
};

export const ALUMINIUM_SYSTEM_OPTIONS = [
  {
    id: "10cm-single-glass",
    name: "10cm Aluminium with Single Glass",
    arabicName: "ألمنيوم 10 سم زجاج مفرد",
    description: "Standard 100mm extruded aluminium profile system with single tempered safety glass (6mm/8mm/10mm). Ideal for interior partitions and standard residential windows.",
    category: "Aluminium Systems"
  },
  {
    id: "10cm-double-glass",
    name: "10cm Aluminium with Double Glass",
    arabicName: "ألمنيوم 10 سم زجاج دبل",
    description: "Heavy-duty 100mm aluminium profile with double glazed insulated acoustic Low-E glass (6mm+12A+6mm). Superior heat barrier and dust isolation.",
    category: "Aluminium Systems"
  },
  {
    id: "10.5cm-single-glass",
    name: "10.5cm Aluminium with Single Glass",
    arabicName: "ألمنيوم 10.5 سم زجاج مفرد",
    description: "Reinforced 105mm architectural profile with deeper glazing bead for single toughened glass. Extra wind load resistance for villa exterior openings.",
    category: "Aluminium Systems"
  },
  {
    id: "10.5cm-double-glass",
    name: "10.5cm Aluminium with Double Glass",
    arabicName: "ألمنيوم 10.5 سم زجاج دبل",
    description: "Premium 105mm thermal-acoustic aluminium profile engineered for high-performance double insulated glass (up to 24mm DGU). Maximum thermal barrier for UAE summers.",
    category: "Aluminium Systems"
  },
  {
    id: "curtain-wall-10x5",
    name: "Curtain Wall 10x5 cm (100x50 mm)",
    arabicName: "كيرتن وول واجهات زجاجية 10×5 سم",
    description: "100mm x 50mm heavy structural mullion & transom curtain wall system. Ideal for double-height villa facades, commercial showrooms, and grand glass envelopes.",
    category: "Curtain Wall Systems"
  },
  {
    id: "curtain-wall-8x5",
    name: "Curtain Wall 8x5 cm (80x50 mm)",
    arabicName: "كيرتن وول واجهات زجاجية 8×5 سم",
    description: "80mm x 50mm medium structural grid curtain wall system for residential villa facade openings, entrance double glazing, and stairwell light wells.",
    category: "Curtain Wall Systems"
  },
  {
    id: "12mm-toughened-frameless",
    name: "12mm Toughened Frameless Glass",
    arabicName: "زجاج سيكوريت 12 ملم بدون إطار",
    description: "Monolithic 12mm tempered safety glass for frameless partitions, shower cabins, and staircase balustrades.",
    category: "Structural Glass"
  },
  {
    id: "sentryglas-laminated",
    name: "SentryGlas Structural Laminated Glass",
    arabicName: "زجاج مصفح سانتري جلاس عالي الأمان",
    description: "DuPont SGP laminated structural glass for high-load railings, cantilevered stairs, and impact-resistant envelopes.",
    category: "Structural Glass"
  },
  {
    id: "smart-switchable-pdlc",
    name: "Smart Switchable Privacy PDLC Glass",
    arabicName: "زجاج ذكي قابل للتبديل للخصوصية",
    description: "Electrically switchable polymer dispersed liquid crystal glass for instant frosted privacy on demand.",
    category: "Smart Glass"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "villas-architectural",
    number: "01",
    name: "Luxury Villas & Facades",
    shortDesc: "Complete aluminium and architectural glass facades, panoramic sliding systems, and envelope solutions for luxury villas (واجهات وفلل).",
    fullDesc: "Engineered specifically for luxury private residences, mansions, and beachfront villas in Abu Dhabi and Dubai. We deliver full turnkey architectural envelopes including double-height structural curtain walls, minimal sightline panoramic sliding doors, thermal break windows, and bespoke exterior metal cladding.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    category: "Villas & Architecture",
    specs: [
      { label: "Engineering Scope", value: "Turnkey Villa Facades, Curtain Walls & Sliding Walls" },
      { label: "Thermal Rating", value: "U-value < 1.1 W/m²K (Thermal Break Systems)" },
      { label: "Profile Finish", value: "Qualicoat Class 2 Anodized, Champagne, RAL Matt Black" },
      { label: "Glass Technology", value: "Double / Triple Glazed Acoustic Low-E Solar Control" },
    ],
    features: [
      "Custom oversized floor-to-ceiling glass panels up to 4.5m height",
      "Concealed sub-floor tracks for 100% barrier-free indoor-outdoor living",
      "Full engineering shop drawings & Dubai/Abu Dhabi municipality compliance",
      "Integrated motorized automated sliding drive mechanisms"
    ]
  },
  {
    id: "kitchen-cabinets",
    number: "02",
    name: "Aluminium Kitchen Cabinets",
    shortDesc: "Modern moisture-proof, fire-resistant luxury aluminium modular kitchens and pantry storage systems (مطابخ ألمنيوم).",
    fullDesc: "Bespoke Italian-engineered aluminium kitchen cabinetry designed to eliminate warping, termite damage, and moisture issues common in the Gulf climate. Features aircraft-grade extruded aluminium carcasses, smoked tempered glass door shutters, soft-close Blum hardware, integrated under-cabinet warm LED lighting, and premium porcelain/quartz finishes.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    category: "Villas & Interiors",
    specs: [
      { label: "Core Material", value: "100% Aircraft-Grade Extruded Aluminium (Non-combustible)" },
      { label: "Door Finishes", value: "Smoked Tempered Glass, Porcelain Slab, Matt Metallic" },
      { label: "Hardware", value: "German Blum Soft-Close Hinges & Push-to-Open Tracks" },
      { label: "Hygiene", value: "100% Waterproof, Termite-Proof & Easy Clean" }
    ],
    features: [
      "Zero formaldehyde emissions and fully fire-retardant construction",
      "Integrated continuous 3000K warm LED linear ambient channels",
      "Heavy load capacity drawers with custom cutlery and spice organizers",
      "High resistance to cooking steam, humidity, and heat"
    ]
  },
  {
    id: "glass-aluminium-doors",
    number: "03",
    name: "Glass & Aluminium Doors",
    shortDesc: "Ultra-slim sliding, pivot, bifold, and entrance door systems for contemporary architecture (أبواب زجاج وألمنيوم).",
    fullDesc: "Precision-engineered door systems combining minimal aluminium profiles with heavy-duty structural rigidity. Ideal for grand villa main entrances, master bedrooms, garden patio openings, and commercial entrances. Features multi-point German locking, hydraulic concealed floor springs, and biometric smart lock integration.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    category: "Doors & Windows",
    specs: [
      { label: "Sightline", value: "Ultra-slim 20mm – 45mm minimal interlocks" },
      { label: "Door Formats", value: "Pivot Doors, Multi-Track Sliding, Bifold, Hinged" },
      { label: "Security", value: "Multi-Point Security Lock & Biometric Smart Access" },
      { label: "Glass Options", value: "10mm–12mm Toughened / Double Glazed Acoustic" }
    ],
    features: [
      "Oversized pivot doors up to 3.5m height and 2m width with heavy-duty pivot pins",
      "Zero-threshold flush floor track design for smooth transitions",
      "Marine-grade anti-corrosion powder coating resistant to salt and humidity",
      "Concealed self-closing hydraulic dampeners and magnetic air seals"
    ]
  },
  {
    id: "glass-partitions",
    number: "04",
    name: "Glass Partitions",
    shortDesc: "Acoustic single & double glazed glass partitions for offices, executive suites, and villas (قواطع زجاجية).",
    fullDesc: "Architectural frameless and micro-framed glass wall systems designed for corporate boardrooms, executive offices, and luxury villa interior zoning. Provides superior acoustic sound reduction up to 48dB while maintaining luminous transparency and natural daylight transmission.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    category: "Villas & Interiors",
    specs: [
      { label: "Acoustic Rating", value: "Rw 36dB to 48dB Sound Insulation" },
      { label: "Frame Style", value: "Frameless Minimal Channel / Crittall Industrial Grid" },
      { label: "Glass Thickness", value: "10mm / 12mm Toughened & Acoustic Laminated Glass" },
      { label: "Special Finishes", value: "Smart Switchable Privacy PDLC Glass, Fluted Reeded Glass" }
    ],
    features: [
      "Crystal clear dry-joint polycarbonate tape connections with zero silicon mess",
      "Integrated frameless glass pivot doors or soft-close sliding doors",
      "Custom sandblasted manifestation designs and corporate frosted logos",
      "Instant switchable privacy glass controlled via wall switch or remote"
    ]
  },
  {
    id: "bathrooms-shower-glass",
    number: "05",
    name: "Bathrooms & Shower Enclosures",
    shortDesc: "Frameless tempered glass shower cabins, sliding shower screens, and luxury bathroom partitions (كبائن شاور وزجاج حمامات).",
    fullDesc: "Custom-fabricated frameless glass shower enclosures and luxury bathroom screens tailored to exact bathroom dimensions. Built using premium 10mm or 12mm toughened safety glass with anti-limescale hydrophobic nano-coating, solid brass or 304 stainless steel hardware in brushed gold, matte black, chrome, and bronze finishes.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    category: "Villas & Interiors",
    specs: [
      { label: "Glass Specification", value: "10mm / 12mm Clear Toughened Safety Glass (EN 12150)" },
      { label: "Hardware Material", value: "Solid Forged Brass & Grade 304 Stainless Steel" },
      { label: "Finishes", value: "Brushed Gold, Matte Black, Chrome, Gunmetal, Rose Gold" },
      { label: "Surface Coating", value: "Anti-Limescale Hydrophobic Nano Easy-Clean Shield" }
    ],
    features: [
      "Custom corner entry, walk-in wet room screens, and sliding enclosure systems",
      "Decorative fluted (reeded), frosted, and smoked bronze/grey glass options",
      "Magnetic watertight door seals and custom water barrier threshold bars",
      "Heavy-duty continuous top-hung stainless steel rollers for smooth sliding"
    ]
  },
  {
    id: "car-parking-shades",
    number: "06",
    name: "Car Parking Shades (مضلات سيارات)",
    shortDesc: "Heavy-duty tensile fabric, cantilever, arch, and modern aluminium car parking shades for villas and commercial projects (مضلات سيارات).",
    fullDesc: "Engineered car shade structures designed to protect vehicles from extreme UAE sunlight, high UV radiation, and desert dust. Available in premium cantilever, pyramidal, top-support arch, and modern aluminium louver styles with high-grade German PVC/PVDF or Australian HDPE shade fabric with 95%+ UV block rating.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=85",
    category: "Shading & Roofing",
    specs: [
      { label: "Fabric Material", value: "German PVC/PVDF (900gsm) & Australian HDPE Mesh" },
      { label: "Structure Material", value: "Hot-Dip Galvanized & Epoxy Powder-Coated Steel / Aluminium" },
      { label: "UV Protection", value: "Blocks 95% to 99% Harmful UV Rays & Reduces Heat up to 15°C" },
      { label: "Wind Rating", value: "Engineered to withstand UAE wind speeds up to 140 km/h" }
    ],
    features: [
      "Custom cantilever single-pole designs for easy parking and door clearance",
      "Fire-retardant (DIN 4102 B1) and tear-resistant architectural membrane fabrics",
      "Available for single villa parking, multi-car residential lots, and commercial plazas",
      "Corrosion-resistant epoxy finish in custom RAL colors matching villa exterior"
    ]
  },
  {
    id: "pergolas-carports",
    number: "07",
    name: "Pergolas & Carports (برجولات سيارات وجلسات)",
    shortDesc: "Bioclimatic motorized aluminium pergolas, outdoor sitting gazebos, and luxury modern carports (برجولات سيارات).",
    fullDesc: "Architectural motorized bioclimatic aluminium pergolas and modern shaded carports equipped with 0°–135° rotating louvers, concealed internal rain gutter systems, motorized zip screens, and warm LED ambient lighting. Transforms outdoor gardens, pool decks, and villa parking bays into luxury all-weather spaces.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    category: "Shading & Roofing",
    specs: [
      { label: "Louver Control", value: "Motorized 0° to 135° angle adjustment (Somfy Systems)" },
      { label: "Material", value: "High-Strength 6063-T6 Extruded Aluminium Alloy" },
      { label: "Rain Management", value: "100% Watertight Closed Louver with Internal Downspouts" },
      { label: "Lighting Integration", value: "Dimmable 3000K Linear LED Strips in Louvers & Beams" }
    ],
    features: [
      "Smart automatic weather sensors (auto-close on rain, auto-open on high wind)",
      "Optional motorized windproof zip screens and sliding glass curtains",
      "Heavy-gauge corrosion-proof structural pillars engineered for Abu Dhabi climate",
      "Available in standalone 4-post or wall-mounted cantilever configurations"
    ]
  },
  {
    id: "privacy-screens-hijab",
    number: "08",
    name: "Privacy Screens & Louvers (سواتر حجاب)",
    shortDesc: "Aluminium privacy screens, decorative laser-cut Mashrabiya panels, and villa boundary hijab fencing (سواتر حجاب).",
    fullDesc: "Bespoke aluminium privacy screens (سواتر حجاب) and boundary fencing designed to provide complete visual privacy for villa courtyards, swimming pools, rooftops, and boundary walls. Crafted with fixed or adjustable louvers, CNC laser-cut Arabic geometric patterns, or modern minimal horizontal slats.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
    category: "Railings & Ironworks",
    specs: [
      { label: "Screen Types", value: "Louvered Slat Screens, CNC Laser-Cut Mashrabiya, Perforated" },
      { label: "Material", value: "High-Grade Corrosion-Proof Aluminium (Marine Grade)" },
      { label: "Coating", value: "Qualicoat Class 2 Powder Coating / Wood-Grain Finish" },
      { label: "Privacy Level", value: "100% Sightline Blockage with Airflow Ventilation" }
    ],
    features: [
      "Enhances family privacy without blocking cooling natural airflow",
      "Authentic Arabic Mashrabiya and contemporary geometric laser designs",
      "Zero maintenance — rust-proof, fade-resistant, and weather-tolerant",
      "Custom height extensions for existing villa boundary walls and rooftop decks"
    ]
  },
  {
    id: "tabuk-majlis",
    number: "09",
    name: "Tabuk Majlis & Glass Annexes (مجلس تبوك)",
    shortDesc: "Traditional and modern Tabuk-style Arabic Majlis, heritage guest halls, and insulated glass annexes (مجلس تبوك وملاحق).",
    fullDesc: "Specialized design, fabrication, and construction of Tabuk-style external Majlis buildings (مجلس تبوك), luxury outdoor guest salons, and modern glass garden annexes. Built with high-insulation structural sandwich panels, thermal break glass walls, decorative Arabic mouldings, and integrated air-conditioning ducting for year-round hospitality.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    category: "Tents & Majlis",
    specs: [
      { label: "Structure", value: "Heavy Steel / Thermal Aluminium Frame + Insulated Panels" },
      { label: "Wall Insulation", value: "High-Density Polyurethane / Rockwool Thermal Core" },
      { label: "Glazing", value: "Panoramic Double Glazed Low-E Reflective Glass" },
      { label: "Interior Finishes", value: "Heritage Arabic Plaster, Gypsum Decor, Custom Lighting" }
    ],
    features: [
      "Custom Tabuk-style architectural facades with traditional cornices and arches",
      "Floor-to-ceiling panoramic glass windows for garden & fountain views",
      "Complete electrical, concealed AC ducting, and luxury chandelier provisions",
      "Fast-track modular construction with zero mess to existing villa gardens"
    ]
  },
  {
    id: "qarmid-roofing",
    number: "10",
    name: "Qarmid Roofing & Sheds (قراميد وسقوف)",
    shortDesc: "Italian & Spanish clay tile roofing (قراميد), insulated metal tile sheds, and decorative villa canopies (قراميت).",
    fullDesc: "High-grade natural clay tile (قراميد) and insulated metal tile roofing installations for villa porches, entrance canopies, outdoor majlis roofs, car garages, and BBQ gazebos. Provides outstanding thermal insulation, classic Mediterranean and Arabic architectural character, and 100% waterproof protection against heavy rainfall.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    category: "Shading & Roofing",
    specs: [
      { label: "Tile Types", value: "Natural Spanish/Italian Clay Qarmid, Metal Tile, Roman Tiles" },
      { label: "Thermal Insulation", value: "Multi-layer Rockwool & Waterproofing Bitumen Membrane" },
      { label: "Under-Structure", value: "Heavy-Gauge Galvanized Steel / Treated Wood Trusses" },
      { label: "Colors", value: "Terracotta Red, Desert Sand, Antique Brown, Gloss Glazed" }
    ],
    features: [
      "Superior heat reflection keeping spaces underneath up to 10°C cooler",
      "Integrated concealed guttering and rainwater drainage spouts",
      "High wind resistance with mechanical clip fastening system",
      "Lifetime durability with colorfast UV-resistant ceramic glaze"
    ]
  },
  {
    id: "labour-tents",
    number: "11",
    name: "Labour Tents (خيام عمال ومشاريع)",
    shortDesc: "Industrial heavy-duty PVC & aluminium structure labour accommodation, dining halls, and site tents (خيام عمال).",
    fullDesc: "Engineered large-span aluminium clear-span structure and heavy-duty PVC fabric tents for UAE construction sites, industrial labour camps, temporary work shelters, dining halls, and storage warehouses in Musaffah and industrial zones. Fully compliant with UAE Civil Defense safety and fire-retardant standards.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    category: "Tents & Majlis",
    specs: [
      { label: "Structure Frame", value: "Hard-Pressed Extruded Aluminium Alloy (6061/T6)" },
      { label: "Fabric Cover", value: "Heavy-Duty 850gsm PVC Coated Polyester (DIN 4102 B1 M2)" },
      { label: "Clear Span", value: "Widths from 6m to 40m with Unlimited Length Expansion" },
      { label: "Compliance", value: "UAE Civil Defense Approved Fire Retardant & Wind Tested" }
    ],
    features: [
      "Rapid assembly and demounting with modular bay expansions",
      "Provisions for high-capacity industrial split/package AC cooling units",
      "Options for insulated sandwich panel hard walls or double PVC fabric",
      "Complete electrical distribution, emergency exits, and LED high-bay lighting"
    ]
  },
  {
    id: "royal-vip-tents",
    number: "12",
    name: "Royal VIP Tents (خيمه مالكي)",
    shortDesc: "Luxury Royal Arabic VIP Tents (خيمة ملكي) with panoramic insulated glass facades, ornate fabrics, and climate control.",
    fullDesc: "Bespoke Royal VIP Arabic Tents (خيمة ملكي) custom built for luxury private estates, VIP hospitality, and prestigious outdoor events. Features grand architectural proportions, full-height double glazed glass side walls, ornate traditional Sadu and velvet interior drapery, crystal chandelier rigging, and whisper-quiet concealed air-conditioning.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    category: "Tents & Majlis",
    specs: [
      { label: "Structure System", value: "Heavy Structural Steel / Aluminium with Glass Facades" },
      { label: "Thermal Wall", value: "Insulated 50mm PU Panels + Double Glazed Low-E Glass" },
      { label: "Interior Fabric", value: "Fire-Resistant Royal Sadu, Velvet, Silk & Damask Lining" },
      { label: "Climate Control", value: "Concealed Duct AC System with 100% Thermal Insulation" }
    ],
    features: [
      "Full panoramic glass front doors with brass handles and decorative crests",
      "Solid raised sub-floor system with luxury marble, porcelain, or carpet finish",
      "Integrated audio-visual, indirect LED lighting, and chandelier supports",
      "Permanent or seasonal installation with zero weather degradation"
    ]
  },
  {
    id: "winter-tents",
    number: "13",
    name: "Winter Tents (خيمه شتاء وجلسات)",
    shortDesc: "Cozy winter seasonal tents, desert camp pavilions, and weather-resistant outdoor majlis gazebos (خيمه شتاء).",
    fullDesc: "Authentic Arabian winter tents (خيمة شتاء) and outdoor seasonal sitting pavilions engineered for winter gatherings, desert retreats, and villa courtyards. Features heavy insulated weather-resistant canvas, traditional interior warm patterns, central fire pit / wood burner chimney exhaust provisions, and zip-down clear PVC storm windows.",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=85",
    category: "Tents & Majlis",
    specs: [
      { label: "Canvas Grade", value: "Heavy-Duty Multi-Layer Weatherproof Ripstop Canvas" },
      { label: "Frame", value: "Galvanized High-Tensile Steel Tube / Modular Aluminium" },
      { label: "Ventilation", value: "Integrated Chimney Flue Ports & Bug-Proof Mesh Windows" },
      { label: "Protection", value: "100% Rainproof, Wind-Resistant & Desert Sand Tight" }
    ],
    features: [
      "Traditional Arabic Sadu interior designs paired with modern thermal comfort",
      "Detachable clear transparent sides for scenic garden or desert views",
      "Safe provisions for central heating stoves, BBQ grills, and Arabic coffee stations",
      "Quick seasonal setup and storage service available across Abu Dhabi & UAE"
    ]
  },
  {
    id: "kuwaiti-iron-fencing",
    number: "14",
    name: "Kuwaiti Style Iron Fencing (سيف حديد شكل كويتي)",
    shortDesc: "Authentic Kuwaiti-style decorative wrought iron boundary fencing, spearhead railings, and grand villa gates (سيف حديد بين شكل كويتي).",
    fullDesc: "Traditional Kuwaiti-style architectural wrought iron boundary fencing (سيف حديد بين شكل كويتي), decorative spearhead railings, and ornamental villa entrance gates. Custom forged with high-tensile steel, hot-dip galvanization for 100% rust prevention, and hand-finished in rich black, antique gold patina, or bronze tones.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85",
    category: "Railings & Ironworks",
    specs: [
      { label: "Style Profile", value: "Traditional Kuwaiti Sword / Spearhead Ornamental Fencing" },
      { label: "Material", value: "Solid Forged Wrought Iron & High-Tensile Structural Steel" },
      { label: "Corrosion Protection", value: "Hot-Dip Galvanized (BS EN ISO 1461) + Epoxy Primer" },
      { label: "Finish", value: "Electrostatic Powder Coating with Hand-Applied Antique Patina" }
    ],
    features: [
      "Authentic Kuwaiti sword and spear architectural geometry representing prestige",
      "Custom height configurations for villa boundary walls, parapets, and gates",
      "Automated sliding and swing gate motorization options (Italian motors)",
      "High structural security with impenetrable forged steel bars"
    ]
  },
  {
    id: "railings-balustrades",
    number: "15",
    name: "Railings & Balustrades (درابزين)",
    shortDesc: "Frameless SentryGlas laminated glass balustrades, aluminium handrails, and modern stair railings (درابزين).",
    fullDesc: "Modern frameless glass balustrades and architectural aluminium railings for balconies, staircases, swimming pool perimeters, and rooftop lounges. Engineered with structural SentryGlas (SGP) laminated glass and concealed sub-floor base shoes to provide maximum safety with totally unobstructed views.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
    category: "Railings & Ironworks",
    specs: [
      { label: "Glass Spec", value: "17.52mm / 21.52mm SentryGlas (SGP) Laminated Toughened" },
      { label: "Mounting Style", value: "Recessed Floor Channel, Stainless Side Standoffs, Spigots" },
      { label: "Handrails", value: "Top-Mounted Slimline Stainless / Wood Cap / Minimalist Edge" },
      { label: "Load Capacity", value: "Tested up to 3.0 kN/m Line Load (Exceeds UAE Code)" }
    ],
    features: [
      "Completely frameless look with concealed heavy-duty structural base shoe",
      "SentryGlas interlayer ensures the glass remains upright and safe if broken",
      "Custom curved glass balustrades for spiral and architectural stairways",
      "Drainage channels preventing rainwater accumulation on terraces"
    ]
  },
  {
    id: "windows-systems",
    number: "16",
    name: "Aluminium Windows (نوافذ وشبابيك)",
    shortDesc: "Thermal break aluminium sliding, casement, tilt-and-turn, and panoramic fixed architectural windows (نوافذ).",
    fullDesc: "Precision-engineered thermal break aluminium window systems designed for extreme UAE climates. Features multi-chamber polyamide thermal barriers, high-performance double/triple solar control glazing, and airtight European multi-point locking mechanisms to block heat, dust, and external noise.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
    category: "Doors & Windows",
    specs: [
      { label: "Frame Type", value: "High-Performance Polyamide Thermal Break Aluminium" },
      { label: "Configurations", value: "Sliding, Casement, Tilt & Turn, Fixed Panoramic, Awning" },
      { label: "Solar Control", value: "Solar Heat Gain Coefficient (SHGC) < 0.25" },
      { label: "Acoustic Insulation", value: "Sound Attenuation up to 45 dB Reduction" }
    ],
    features: [
      "Multi-chamber thermal barrier cutting AC energy costs by up to 35%",
      "Concealed sash profiles for clean uninterrupted exterior glass lines",
      "High-security multi-point locking perimeter hardware",
      "Integrated magnetic fine-mesh insect screens and micro-ventilation"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "abu-dhabi-luxury-villa",
    title: "Musaffah & Abu Dhabi Executive Villa",
    category: "Villas & Architecture",
    categorySlug: "villas-architecture",
    location: "Al Bateen, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    additionalImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    ],
    year: "2025 - 2026",
    scope: "Turnkey architectural envelope including panoramic sliding walls, slim pivot entrance, and thermal break windows",
    description: "Complete villa glass and aluminium envelope featuring 4m tall slim sliding glass doors connecting luxury living spaces to private landscaped courtyards.",
    systemUsed: "Silver Shade Thermal-Break Slim Sliding System & Pivot Series 85"
  },
  {
    id: "modern-aluminium-kitchen-suite",
    title: "Luxury Villa Aluminium Kitchen & Pantry",
    category: "Kitchen Cabinets",
    categorySlug: "kitchen-cabinets",
    location: "Khalifa City, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Full aluminium carcass modular kitchen cabinets with smoked glass shutters and integrated 3000K LED lighting",
    description: "Modern bespoke kitchen fabrication with aircraft-grade aluminium frames, porcelain countertops, and heavy-duty Blum soft-close fittings.",
    systemUsed: "Silver Shade AeroKitchen Aluminium Series"
  },
  {
    id: "royal-vip-majlis-tent",
    title: "Royal VIP Arabic Tent (خيمة ملكي)",
    category: "Tents & Majlis",
    categorySlug: "tents-majlis",
    location: "Al Ain / Abu Dhabi",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Royal VIP Malaki tent with double glazed glass walls, royal Sadu fabric interior, and central AC ducting",
    description: "Grand VIP hospitality pavilion combining modern thermal glass facades with traditional Arabian heritage interior finishes and crystal chandeliers.",
    systemUsed: "Silver Shade Royal Malaki Structural Tent System"
  },
  {
    id: "kuwaiti-iron-boundary-gate",
    title: "Kuwaiti Style Sword Fencing & Gate (سيف حديد)",
    category: "Railings & Ironworks",
    categorySlug: "railings-ironworks",
    location: "Mohamed Bin Zayed City, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Kuwaiti-style spearhead wrought iron perimeter fencing and automated double swing villa entrance gate",
    description: "Hot-dip galvanized decorative steel fencing crafted with traditional Kuwaiti sword motifs and antique bronze hand-applied patina finish.",
    systemUsed: "Kuwaiti Classical Forged Steel Fencing"
  },
  {
    id: "car-parking-shades-cantilever",
    title: "Cantilever Tensile Car Parking Shades (مضلات سيارات)",
    category: "Shading & Roofing",
    categorySlug: "shading-roofing",
    location: "Musaffah Commercial Complex, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "12-Vehicle cantilever shade structure with German PVC fabric 900gsm and powder-coated steel posts",
    description: "Heavy-duty UV-blocking car shade canopy engineered to reduce internal vehicle temperatures by 15°C under harsh Gulf sun.",
    systemUsed: "Heavy Cantilever Shade Series 140"
  },
  {
    id: "bioclimatic-pergola-residence",
    title: "Motorized Bioclimatic Pergola & Pool Lounge",
    category: "Shading & Roofing",
    categorySlug: "shading-roofing",
    location: "Saadiyat Island, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Free-standing motorized bioclimatic aluminium pergola with rotating louvers and glass curtains",
    description: "Luxury outdoor shaded terrace with automated sensor-guided louvers and dimmable perimeter linear LED illumination.",
    systemUsed: "AeroLouvre Bioclimatic 135° System"
  },
  {
    id: "tabuk-style-majlis-annex",
    title: "Tabuk Style Heritage Majlis (مجلس تبوك)",
    category: "Tents & Majlis",
    categorySlug: "tents-majlis",
    location: "Al Shamkha, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "External guest salon with insulated thermal sandwich panels, panoramic double glazing, and Arabic heritage mouldings",
    description: "Turnkey outdoor Tabuk majlis annex providing an elegant venue for family gatherings with complete climate control and acoustics.",
    systemUsed: "Tabuk Thermal Majlis Modular System"
  },
  {
    id: "qarmid-villa-entrance-roof",
    title: "Terracotta Clay Qarmid Roof Canopy (قراميد)",
    category: "Shading & Roofing",
    categorySlug: "shading-roofing",
    location: "Al Bahia, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Natural Spanish clay tile Qarmid roof canopy over main entrance porch and garage shade",
    description: "Insulated terracotta tile roofing installed over high-strength steel truss framework with multi-layer waterproofing.",
    systemUsed: "Spanish Ceramic Qarmid 3-Tier System"
  },
  {
    id: "wood-grain-awning-windows-qarmid",
    title: "Wood-Grain Awning Windows & Clay Qarmid Roof (نوافذ خشبية)",
    category: "Windows & Doors",
    categorySlug: "windows-doors",
    location: "Al Bahia / Khalifa City, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Italian vacuum wood-grain powder-coated top-hung awning aluminium windows with European stainless friction stays and Spanish Qarmid roofing",
    description: "Custom wood-grain aluminium awning windows installed on Mediterranean villa facade with insulated terracotta clay tile roofing canopy.",
    systemUsed: "Silver Shade Thermal Wood-Sublimation Awning Series"
  },
  {
    id: "architectural-12-lite-black-window",
    title: "12-Lite Multi-Pane Architectural Grid Windows (شبابيك مقسمة)",
    category: "Windows & Doors",
    categorySlug: "windows-doors",
    location: "Al Raha Beach, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Heavy 3x4 matrix monolithic architectural grid window systems with operable sliding sashes and double glazed acoustic glass",
    description: "Expansive grid windows engineered for panoramic garden views, high acoustic isolation (42dB), and airtight desert dust protection.",
    systemUsed: "Silver Shade Matrix 12-Lite Architectural Grid Series"
  },
  {
    id: "luxury-villa-glass-staircase-railing",
    title: "Minimalist Villa Glass Staircase Balustrade (درابزين زجاجي)",
    category: "Railings & Ironworks",
    categorySlug: "railings-ironworks",
    location: "Al Yasmina / Khalifa City, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "15mm toughened safety glass with side-mounted 316 stainless spigots and slim matte black aluminium handrail",
    description: "Architectural glass balustrade engineered for open-concept duplex villa stairs with integrated warm LED step illumination.",
    systemUsed: "Silver Shade VistaClear Frameless Glass Series"
  },
  {
    id: "matte-black-picket-staircase-railing",
    title: "Matte Black Aluminium Vertical Picket Railing (درابزين ألمنيوم)",
    category: "Railings & Ironworks",
    categorySlug: "railings-ironworks",
    location: "Saadiyat Island, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Architectural 6063-T6 extruded aluminium vertical slat balustrades with continuous ergonomic handrail and heavy newel posts",
    description: "Precision-spaced child-safe vertical aluminium balustrades with scratch-resistant Qualicoat Class 2 matte black finish.",
    systemUsed: "Silver Shade Geometric Picket 25x25 Series"
  },
  {
    id: "industrial-labour-camp-tents",
    title: "Musaffah Industrial Labour Accommodation Tents",
    category: "Tents & Majlis",
    categorySlug: "tents-majlis",
    location: "Musaffah Industrial City, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
    year: "2025",
    scope: "Large-span clearspan aluminium PVC labour tents and dining facilities for 300+ personnel",
    description: "Heavy-duty industrial project tents certified to UAE Civil Defense fire-safety regulations with heavy AC package units.",
    systemUsed: "Industrial Heavy ClearSpan Tent Series"
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
