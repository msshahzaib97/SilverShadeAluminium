import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  Maximize2, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Home, 
  CheckCircle2, 
  Flame, 
  Sun, 
  Wind, 
  Compass, 
  Check, 
  Image as ImageIcon,
  MessageCircle,
  Eye,
  SlidersHorizontal
} from 'lucide-react';

import majlisSunsetImg from '../assets/images/majlis_qarmeed_sunset_1788068765072.jpg';
import majlisVillaImg from '../assets/images/majlis_qarmeed_villa_1788068782318.jpg';
import majlisArchImg from '../assets/images/majlis_arch_windows_1788068799568.jpg';
import majlisGlassAnnexImg from '../assets/images/majlis_glass_annex_1788068818432.jpg';
import majlisStoneImg from '../assets/images/majlis_qarmeed_stone_1788068900043.jpg';
import majlisGardenImg from '../assets/images/majlis_modern_garden_1788068918527.jpg';
import majlisGabledImg from '../assets/images/majlis_qarmeed_gabled_1788068935704.jpg';
import { COMPANY_CONFIG } from '../data/content';

interface MajlisTabukSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const MajlisTabukSection: React.FC<MajlisTabukSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'qarmeed' | 'arched' | 'glass_annex' | 'stone'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string>('');

  const majlisItems = [
    {
      id: 'majlis-qarmeed-villa-sunset',
      title: 'Luxury Villa Majlis with Spanish Qarmeed Roof & Sliding Glass',
      arabicTitle: 'مجلس فيلا فاخر مع سقف قرميد إسباني وأبواب سلايدنج زجاج',
      category: 'qarmeed',
      image: majlisSunsetImg,
      badge: 'Bespoke Private Villa Majlis',
      tagline: 'Terracotta Red Clay Tiles • Warm Sconce Lighting • Panoramic Double Glazing',
      description: 'Turnkey freestanding outdoor garden majlis featuring natural terracotta Spanish clay tile pitched roof, reinforced insulated blockwork (Tabuk), and slim aluminium multi-slide glass patio doors opening towards manicured gardens.',
      specs: [
        { label: 'Roof System', value: 'Spanish Terracotta Clay Qarmeed (قرميد إسباني مع عازل حراري)' },
        { label: 'Glass Doors', value: '10.5cm Aluminium Profile with 24mm Double Acoustic Low-E Glass' },
        { label: 'Thermal Shield', value: 'Multi-layer Rockwool insulation + Bituminous Waterproofing' },
        { label: 'Lighting System', value: 'Integrated warm exterior wall sconces & recessed soffit downlights' }
      ],
      features: [
        'Superior heat reflection keeping indoor salon cool during extreme UAE summer months',
        'Heavy-duty floor-to-ceiling aluminium sliding tracks with smooth nylon tandem rollers',
        'Custom architectural facade with crisp white stucco finish and stone base course'
      ],
      quoteService: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
    },
    {
      id: 'majlis-traditional-qarmeed-daytime',
      title: 'Contemporary Tabuk Majlis with Spanish Ceramic Tiles',
      arabicTitle: 'مجلس طابوق عصري مع قرميد إسباني وألمنيوم 10 سم زجاج دبل',
      category: 'qarmeed',
      image: majlisVillaImg,
      badge: 'Classic Emirati Heritage',
      tagline: 'Precision 10cm Profile • Multi-Pane Windows • Heavy Double French Entrance',
      description: 'Spacious Arab hospitality majlis constructed with high-density thermal blockwork, authentic Spanish ceramic roof, double glazed reflective bronze/clear windows, and grand double leaf hinged French glass entrance.',
      specs: [
        { label: 'Wall Structure', value: 'Insulated High-Density Blockwork (Tabuk) with Gypsum Interior' },
        { label: 'Roof Structure', value: 'Heavy Galvanized Steel Truss with Spanish Clay Qarmeed' },
        { label: 'Aluminium Windows', value: '10cm / 10.37cm Heavy Architectural Extrusion Series' },
        { label: 'Entrance Door', value: 'Double Hinge French Glass Door with German Multi-Point Lock' }
      ],
      features: [
        'Acoustic double glazing isolating outside noise up to 42dB for peaceful hospitality',
        'Complete integration with central AC ducting, gypsum moulding, and chandelier points',
        'Maintenance-free UV resistant ceramic roof glaze guaranteed colorfast'
      ],
      quoteService: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
    },
    {
      id: 'majlis-arched-windows-night',
      title: 'Custom Arched Glass Majlis Annex with Ceiling Spotlights',
      arabicTitle: 'ملحق مجلس زجاجي بنوافذ أقواس ألمنيوم وإضاءة سقفية مخفية',
      category: 'arched',
      image: majlisArchImg,
      badge: 'Architectural Arches & Ambient Lights',
      tagline: '5 Arched Facade Windows • Concealed Parapet Downlights • Golden Warm Interior',
      description: 'Exclusive architectural garden annex showcasing five handcrafted arched aluminium frame glass windows, continuous roof perimeter spotlighting, and tempered safety glass offering illuminated evening views.',
      specs: [
        { label: 'Window Geometry', value: 'Precision Radius Arched Aluminium Frames (نوافذ أقواس مقوسة)' },
        { label: 'Glass Specs', value: '10mm Toughened Clear / Tinted Reflective Glass with Argon Spacers' },
        { label: 'Ceiling Lighting', value: 'Concealed 3000K warm LED spotlighting integrated in roof parapet' },
        { label: 'Finish Option', value: 'Electrostatic White / Bronze / Anthracite Grey Powder Coating' }
      ],
      features: [
        'Handcrafted bespoke bending and rolling for true architectural arch curves',
        'EPDM weather seals ensuring complete watertightness and desert dust insulation',
        'Stunning ambient night-time presence that elevates villa courtyard luxury'
      ],
      quoteService: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
    },
    {
      id: 'majlis-modern-garden-glass-annex',
      title: 'Ultra-Slim Minimalist Glass Garden Majlis & Lounge',
      arabicTitle: 'مجلس زجاجي مودرن للحديقة مع قطاع نحيف سلايدنج بانوراما',
      category: 'glass_annex',
      image: majlisGardenImg,
      badge: 'Modernist Glass Pavilion',
      tagline: 'Minimal 20mm Sightlines • Recessed Floor Tracks • Contemporary Flat Roof',
      description: 'Sleek luxury outdoor lounge enclosure with floor-to-ceiling panoramic sliding glass walls, ultra-slim black aluminium profiles, and illuminated travertine patio for year-round entertaining.',
      specs: [
        { label: 'Profile Type', value: 'Ultra-Slim Minimalist Black Aluminium (Minimal Sightline 20mm)' },
        { label: 'Glass System', value: '28mm Double Glazed Solar Control Low-E (U-value < 1.2 W/m²K)' },
        { label: 'Floor Threshold', value: 'Zero-Trip Concealed Sub-Floor Drainage Track' },
        { label: 'Roof Extension', value: 'Modern cantilevered flat roof with recessed spotlight clusters' }
      ],
      features: [
        '100% uninterrupted panoramic views of private pool and landscaping',
        'Whisper-quiet German tandem sliding rollers supporting up to 400kg per glass sash',
        'Motorized sunshade and internal smart privacy blind integration'
      ],
      quoteService: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
    },
    {
      id: 'majlis-stone-cladding-qarmeed',
      title: 'Travertine Stone Clad Majlis with Spanish Qarmeed Roof',
      arabicTitle: 'مجلس حجر طبيعي مع قرميد إسباني أحمر وشبابيك ألمنيوم عاكس',
      category: 'stone',
      image: majlisStoneImg,
      badge: 'Natural Stone & Ceramic Tile',
      tagline: 'Natural Travertine Cladding • Bronze Reflective Glass • Spanish Terracotta Roof',
      description: 'Prestige villa annex combining authentic natural stone horizontal cladding, Mediterranean red clay tile pitched roof, bronze solar reflective double glass, and illuminated perimeter bollards.',
      specs: [
        { label: 'Facade Cladding', value: 'Natural Travertine / Riyadh Stone Cladding with Grooves' },
        { label: 'Roof Tile', value: 'Spanish Red Clay Qarmeed (قراميد فخارية أصلية)' },
        { label: 'Window Glass', value: 'Bronze Solar Reflective Double Glazed Acoustic Glass' },
        { label: 'Structural Base', value: 'Reinforced concrete foundation with damp-proof bitumen barrier' }
      ],
      features: [
        'High daytime privacy with solar-reflective bronze mirror glass coating',
        'Natural stone insulation keeping interior naturally temperate',
        'Integrated outdoor paved terrace with modern bollard pathway lighting'
      ],
      quoteService: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
    },
    {
      id: 'majlis-gabled-entrance-villa',
      title: 'Warm Peach Villa Majlis with Gabled Qarmeed Entrance',
      arabicTitle: 'مجلس فيلا مع مدخل قرميد جملوني وأبواب سحاب برونزية',
      category: 'qarmeed',
      image: majlisGabledImg,
      badge: 'Architectural Gable Design',
      tagline: 'Pitched Gabled Entrance • Dark Bronze Frames • Manicured Lawn Setting',
      description: 'Elegant Mediterranean villa guest salon featuring a pitched gabled entrance porch covered in Spanish clay tile, dark bronze sliding glass doors, horizontal groove facade detailing, and lush lawn landscaping.',
      specs: [
        { label: 'Porch Canopy', value: 'Pitched Gabled Qarmeed Entrance Canopy (سقف قرميد جملوني)' },
        { label: 'Profile Color', value: 'Dark Bronze Architectural Qualicoat Anodized / Powder Coated' },
        { label: 'Door System', value: 'Double Leaf Sliding Glass Patio Door with Concealed Soft-Dampeners' },
        { label: 'Wall Grooves', value: 'Precision CNC decorative horizontal facade reveals' }
      ],
      features: [
        'Grand gabled entrance arch welcoming family and distinguished guests',
        'Thermal break aluminium profiles eliminating heat conductivity',
        'Engineered rainwater runoff channels and concealed gutters'
      ],
      quoteService: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
    },
    {
      id: 'majlis-panoramic-glass-annex-patio',
      title: 'Contemporary Luxury Glass Annex with Travertine Patio',
      arabicTitle: 'ملحق زجاجي فخم مع أرضية ترافيرتين وإضاءة معمارية',
      category: 'glass_annex',
      image: majlisGlassAnnexImg,
      badge: 'Floor-to-Ceiling Living',
      tagline: 'Full Height Glass Walls • 3000K Warm Ambiance • Bespoke Aluminium Framing',
      description: 'Contemporary indoor-outdoor garden majlis extension with four expansive sliding glass panels, recessed perimeter lighting, and travertine terrace for modern luxury residences.',
      specs: [
        { label: 'Glazing Height', value: 'Custom floor-to-ceiling up to 3.5m single glass height' },
        { label: 'Safety Rating', value: 'Double Tempered Safety Glass (10mm + 12mm Argon DGU)' },
        { label: 'Aluminium Alloy', value: 'Aircraft Grade 6063-T6 Extrusion with Thermal Break' },
        { label: 'Locking System', value: 'Multi-point perimeter hook bolt security locking' }
      ],
      features: [
        'Turns outdoor courtyard into a luxury climate-controlled extension of the home',
        'Solar Low-E coating reflects 78% of infrared heat while allowing bright natural light',
        'Completely custom manufactured in Musaffah, Abu Dhabi workshop'
      ],
      quoteService: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? majlisItems 
    : majlisItems.filter(item => item.category === activeFilter);

  const handleWhatsAppInquiry = (item: typeof majlisItems[0]) => {
    const message = encodeURIComponent(
      `Hello Silver Shade Aluminium, I am interested in building a "${item.title}" (${item.arabicTitle}). Please provide estimation and technical details.`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section 
      id="majlis-showcase" 
      className="py-24 bg-gradient-to-b from-[#060a08] via-[#09110d] to-[#060a08] text-white relative overflow-hidden border-t border-emerald-500/20"
    >
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Home className="w-3.5 h-3.5" />
            <span>مجلس طابوق وقرميد وزجاج | Tabuk &amp; Qarmeed Majlis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Tabuk &amp; Qarmeed Majlis Annexes
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mt-2 font-arabic">
              مجلس طابوق وقرميد وملاحق زجاجية فاخرة
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Bespoke outdoor hospitality salons, Spanish terracotta clay tile (قرميد) pitched roofs, 
            arched aluminium glass windows, and ultra-slim floor-to-ceiling glass annexes engineered for UAE villas.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Projects (الكل)', icon: Layers },
              { id: 'qarmeed', label: 'Qarmeed & Clay Roof (قراميد)', icon: Flame },
              { id: 'arched', label: 'Arched Glass Windows (أقواس)', icon: Compass },
              { id: 'glass_annex', label: 'Glass Annex (ملاحق زجاجية)', icon: Sparkles },
              { id: 'stone', label: 'Stone Cladding (حجر وطابوق)', icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/50 scale-105'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Majlis Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-950/40 transition-all flex flex-col justify-between"
            >
              {/* Photo Banner with Badges & Click to Zoom */}
              <div>
                <div 
                  className="relative h-64 sm:h-72 overflow-hidden cursor-pointer bg-slate-950"
                  onClick={() => {
                    setSelectedPhoto(item.image);
                    setSelectedProjectTitle(item.title);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </div>

                  {/* Zoom Icon Tooltip */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Tagline */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] text-amber-300 font-medium tracking-wide bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm border border-amber-500/30 inline-block">
                      {item.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-emerald-300 font-arabic mb-3">
                    {item.arabicTitle}
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Specifications Pill List */}
                  <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80 mb-4 space-y-2">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-start justify-between text-xs gap-2">
                        <span className="text-slate-400 font-medium whitespace-nowrap">{spec.label}:</span>
                        <span className="text-slate-200 font-semibold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Highlights */}
                  <ul className="space-y-1.5 mb-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-800/60 grid grid-cols-2 gap-3 mt-4">
                {/* Quote Trigger */}
                <button
                  onClick={() => onOpenQuoteModal(item.quoteService)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-950/30 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>

                {/* Direct WhatsApp Pre-filled */}
                <button
                  onClick={() => handleWhatsAppInquiry(item)}
                  className="w-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-slate-950 border border-[#25D366]/40 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Highlights & Quality Standards Banner */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/60 border border-emerald-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Spanish Qarmeed Tiles</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Authentic natural clay terracotta tiles with high heat deflection and thermal insulation up to 10°C cooler.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">10cm / 10.5cm Profiles</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Heavy 6063-T6 architectural aluminium extrusion with single or 24mm acoustic double glazed Low-E units.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Custom Arches &amp; Glass</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Precision curved architectural window arches, French double doors, and frameless minimal sliding systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">10-Year Warranty</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered and fabricated locally in Musaffah, Abu Dhabi with certified UAE building code compliance.
                </p>
              </div>
            </div>

          </div>

          {/* Quick CTA inside Banner */}
          <div className="mt-10 pt-8 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">
                Planning a new Tabuk Majlis, Qarmeed roof, or outdoor glass salon?
              </p>
              <p className="text-xs text-emerald-400">
                Our site engineers offer free on-site measurements and CAD shop drawing proposals across Abu Dhabi, Dubai &amp; Al Ain.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal('Tabuk Majlis & Glass Annexes (مجلس تبوك)')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/50 cursor-pointer flex items-center gap-2"
              >
                <span>Request Majlis Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-4 py-3 rounded-xl text-xs transition-all border border-slate-700 flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Engineer</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto}
                alt="Selected Majlis Project"
                referrerPolicy="no-referrer"
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="p-4 bg-slate-900 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">{selectedProjectTitle}</h4>
                  <p className="text-xs text-emerald-400">Silver Shade Aluminium &amp; Glass Fabrication — Musaffah, Abu Dhabi</p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-semibold"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
