import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ShieldCheck, 
  Wind, 
  Sun, 
  VolumeX, 
  Layers, 
  Maximize2, 
  Sparkles,
  ArrowRight,
  ChevronRight,
  PhoneCall,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import woodAwningImg from '../assets/images/window_wood_awning_1787905048945.jpg';
import blackSlidingImg from '../assets/images/window_black_sliding_1787905064205.jpg';
import panoramicGridImg from '../assets/images/window_panoramic_grid_1787905085926.jpg';
import exhaustVentImg from '../assets/images/window_exhaust_vent_1787905111213.jpg';
import curtainWallImg from '../assets/images/curtain_wall_facade_1788067488682.jpg';
import { COMPANY_CONFIG } from '../data/content';

interface WindowsSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const WindowsSection: React.FC<WindowsSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const windowShowcaseItems = [
    {
      id: 'wood-awning',
      title: 'Wood-Grain Awning Windows',
      arabicTitle: 'نوافذ ألمنيوم خشبية قلاب',
      tagline: 'Top-Hung European Friction Stays with Italian Sublimation Wood Finish',
      image: woodAwningImg,
      badge: 'Villa & Majlis Choice',
      overview: 'Engineered for luxury villas, desert retreats, and outdoor majlis buildings. Combines the timeless warmth and grain texture of natural walnut/teak wood with the 100% weather-proof, rust-free durability of structural aluminium alloy.',
      keySpecs: [
        { label: 'Profile Type', value: 'Thermal Break Extruded 6063-T6 Aluminium' },
        { label: 'Surface Finish', value: 'Italian Vacuum Heat-Transfer Wood Grain (Anti-Fade)' },
        { label: 'Hardware', value: 'Heavy-Duty Stainless Steel Friction Stays & Multi-Lock Handle' },
        { label: 'Opening Angle', value: 'Outward Top-Hung 0° to 60° Adjustable Ventilation' },
        { label: 'Weather Gasket', value: 'Triple EPDM Rubber Continuous Acoustic Seals' },
        { label: 'Ideal For', value: 'Villa Exterior Facades, Qarmid Roof Annexes, Bathrooms & Majlis' },
      ],
      highlights: [
        'Zero warping, rotting, or termite damage unlike real timber in Gulf climate',
        'Weather-tight rain deflection when partially open during light rain',
        'Available in Dark Walnut, Golden Teak, Antique Mahogany & Natural Oak grains',
        'Pairs seamlessly with Spanish ceramic Qarmid clay tile roofing canopies',
      ],
    },
    {
      id: 'black-sliding-transom',
      title: 'Black Aluminium Sliding Windows with Transom',
      arabicTitle: 'شبابيك ألمنيوم سحاب مع ثابت علوي',
      tagline: 'Smooth Heavy-Duty Rollers with Integrated Upper Fixed Solar Glazing',
      image: blackSlidingImg,
      badge: 'Contemporary Residential',
      overview: 'Modern matte black powder-coated sliding window systems with dual horizontal sashes and upper fixed transoms. Engineered with multi-tier weep-hole drainage channels and stainless steel bottom ball-bearing rollers for silent fingertip sliding.',
      keySpecs: [
        { label: 'Finish', value: 'Qualicoat Class 2 Electrostatic Matte Black (RAL 9005)' },
        { label: 'Sash Configuration', value: '2-Track / 3-Track Sliding with Upper Fixed Glass' },
        { label: 'Roller Capacity', value: 'Stainless Steel Double Tandem Rollers (Up to 120kg/sash)' },
        { label: 'Locking', value: 'Concealed Flush Crescent Lock / Keyed Multipoint Fastener' },
        { label: 'Fly Screen', value: 'Integrated Magnetic Fine Stainless Insect Mesh Track' },
        { label: 'Glass Option', value: '6mm+12A+6mm Double Glazed Reflective Solar Control' },
      ],
      highlights: [
        'Upper fixed transom maximizes natural ceiling daylight without compromising security',
        'Multi-chamber thermal barrier blocks heat transfer from scorching exterior walls',
        'Heavy-duty interlock profiles resist extreme desert wind pressures',
        'Concealed water drainage slots prevent rainwater overflow into interiors',
      ],
    },
    {
      id: 'panoramic-grid-facade',
      title: 'Architectural Grid Multi-Lite Windows',
      arabicTitle: 'واجهات وشبابيك مقسمة 12 خانة',
      tagline: 'Monolithic Multi-Pane Configurations for Expansive Room Views',
      image: panoramicGridImg,
      badge: 'Wide-Span Architectural',
      overview: 'Large-scale 3x4 grid architectural windows engineered for grand living rooms, master bedrooms, and courtyard-facing halls. Merges sweeping panoramic perimeter fixed lites with central operable sliding vents for optimal cross-ventilation.',
      keySpecs: [
        { label: 'Grid Matrix', value: 'Custom 6-Lite, 8-Lite, 12-Lite Multi-Mullion Layouts' },
        { label: 'Mullion Strength', value: 'High Moment of Inertia Heavy Extruded Reinforcement' },
        { label: 'Glazing', value: 'Low-E Acoustic Laminated / Argon-Filled Insulated Glass' },
        { label: 'Sightlines', value: 'Slim 45mm Internal Architectural Divider Mullions' },
        { label: 'Sound Rating', value: 'Acoustic Sound Insulation up to 42 dB Reduction' },
        { label: 'Applications', value: 'Master Bed Panorama, Double Height Halls, Garden Views' },
      ],
      highlights: [
        'Creates an elegant geometric focal point inside master living spaces',
        'Allows independent operation of central vent sashes while perimeter remains sealed',
        'Tested for high air-tightness and desert dust infiltration prevention',
        'Custom color matching in Matte Anthracite, Jet Black, or Warm Champagne',
      ],
    },
    {
      id: 'exhaust-vent-window',
      title: 'Kitchen & Bathroom Exhaust Fan Windows',
      arabicTitle: 'شبابيك حمامات ومطابخ مع فتحة مروحة شفط',
      tagline: 'Precision Circular Glass Cut-Out with Watertight Gasket Sealing',
      image: exhaustVentImg,
      badge: 'Sanitary & Ventilation',
      overview: 'Specialized aluminium window systems engineered specifically for master bathrooms, en-suites, and kitchen pantries. Includes a factory water-jet cut circular opening in the upper fixed glass pane for direct exhaust fan mounting alongside an operable lower sliding/awning sash.',
      keySpecs: [
        { label: 'Hole Diameter', value: 'Custom 150mm, 200mm, 250mm, 300mm Precision Cut-Out' },
        { label: 'Glass Specification', value: 'Tempered Frosted / Smoked / Tinted Privacy Glass' },
        { label: 'Seal Mechanism', value: 'Anti-Vibration Weather-Proof Neoprene Ring Gasket' },
        { label: 'Privacy Level', value: '100% Visual Privacy with High Daylight Transmission' },
        { label: 'Operation', value: 'Lower Sliding Sash with Integrated Bug Mesh Screen' },
        { label: 'Locations', value: 'Villa Bathrooms, Kitchenettes, Laundry Rooms, Pantries' },
      ],
      highlights: [
        'Clean professional exhaust fan integration without awkward wall coring or glass breakage',
        'CNC edge-polished circular aperture prevents glass thermal stress cracking',
        'Frosted acid-etched or bronze-tinted glass options for maximum privacy',
        'Moisture-resistant stainless steel fasteners prevent rust in high-humidity zones',
      ],
    },
  ];

  const currentItem = windowShowcaseItems[activeTab];

  const handleWhatsAppInquiry = (windowTitle: string) => {
    const text = encodeURIComponent(
      `Hello Silver Shade Aluminium, I am interested in getting a quote and site survey for "${windowTitle}" for my property in Abu Dhabi/Dubai.`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="windows-showcase" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080d0a] relative border-t border-emerald-900/10 dark:border-emerald-500/15 overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-emerald-900/10 dark:border-emerald-500/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></div>
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold tracking-widest uppercase">
                ALUMINIUM WINDOWS • نوافذ وشبابيك ألمنيوم
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
              Architectural <span className="text-emerald-700 dark:text-emerald-400 font-normal">Window Systems</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-lg font-normal leading-relaxed">
            Custom engineered thermal-break sliding, top-hung awning, wood-grain finish, multi-lite grid facades, and bathroom exhaust windows manufactured in Musaffah, Abu Dhabi.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {windowShowcaseItems.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                id={`window-tab-${item.id}`}
                onClick={() => setActiveTab(index)}
                className={`p-4 sm:p-5 text-left border transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-white/[0.08] border-emerald-600 dark:border-emerald-400 shadow-lg shadow-emerald-950/5 dark:shadow-emerald-900/20'
                    : 'bg-white/60 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600 dark:bg-emerald-400"></div>
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-[9px] px-2 py-0.5 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 uppercase font-mono tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h4 className={`text-sm sm:text-base font-medium tracking-tight ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                  {item.title}
                </h4>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-300 font-normal mt-1 font-arabic">
                  {item.arabicTitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Window Feature Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="backdrop-blur-xl bg-white dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Image with Magnify Badge */}
              <div className="lg:col-span-6">
                <div className="relative group overflow-hidden border border-emerald-900/10 dark:border-white/15 shadow-md">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                    onClick={() => setActiveImageModal(currentItem.image)}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-900/90 text-emerald-100 text-xs font-mono uppercase tracking-wider backdrop-blur-md border border-emerald-500/40">
                    {currentItem.badge}
                  </div>

                  {/* Click to Zoom Trigger */}
                  <button
                    onClick={() => setActiveImageModal(currentItem.image)}
                    className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/20"
                    title="View Full Resolution"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Bottom Image Overlay Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
                      Musaffah In-House Fabrication
                    </div>
                    <div className="text-lg font-medium tracking-tight mt-0.5">
                      {currentItem.title}
                    </div>
                  </div>
                </div>

                {/* Sub-gallery thumbnail strip */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {windowShowcaseItems.map((thumb, idx) => (
                    <button
                      key={thumb.id}
                      onClick={() => setActiveTab(idx)}
                      className={`relative h-16 sm:h-20 overflow-hidden border transition-all cursor-pointer ${
                        activeTab === idx 
                          ? 'border-emerald-600 ring-2 ring-emerald-500/50' 
                          : 'border-slate-200 dark:border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={thumb.image} 
                        alt={thumb.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Deep Architectural Specs & Options */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentItem.tagline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight mb-1">
                    {currentItem.title}
                  </h3>
                  <div className="text-base text-emerald-800 dark:text-emerald-400 font-normal font-arabic mb-4">
                    {currentItem.arabicTitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-normal leading-relaxed mb-6">
                    {currentItem.overview}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2.5 mb-8">
                    {currentItem.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Grid */}
                  <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-4 sm:p-5 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-gray-400 mb-3 font-semibold flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>ENGINEERING SPECIFICATIONS</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentItem.keySpecs.map((spec, i) => (
                        <div key={i} className="border-b border-slate-200 dark:border-white/5 pb-2">
                          <div className="text-[10px] uppercase font-mono text-slate-500 dark:text-gray-400">
                            {spec.label}
                          </div>
                          <div className="text-xs font-medium text-slate-900 dark:text-white mt-0.5">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    id="btn-window-quote"
                    onClick={() => onOpenQuoteModal(currentItem.title)}
                    className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-700/20"
                  >
                    <span>Request Window Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id="btn-window-whatsapp"
                    onClick={() => handleWhatsAppInquiry(currentItem.title)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-50 dark:bg-white/5 hover:bg-emerald-100 dark:hover:bg-white/10 text-emerald-800 dark:text-emerald-300 border border-emerald-700/30 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Architectural Aluminium Systems & Curtain Wall Profiles Overview */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Structural Profiles &amp; Glazing Standards</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                Architectural Aluminium &amp; <span className="text-emerald-700 dark:text-emerald-400 font-normal">Curtain Wall Systems</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mt-1">
                Precision extruded 6063-T6 alloy systems engineered for villas, high-rise elevations, and expansive glass envelopes in the UAE.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Luxury Villas & Facades')}
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-md shadow-emerald-700/20"
            >
              <span>Get Profile Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Aluminium Profile Systems Grid (10cm, 10.37cm, 10.5cm) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* 10cm Aluminium Profile */}
            <div className="p-6 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    Profile 100mm (10cm)
                  </span>
                  <span className="text-[10px] bg-slate-100 dark:bg-white/10 px-2 py-0.5 text-slate-700 dark:text-slate-300 font-semibold">
                    Standard &amp; Heavy-Duty
                  </span>
                </div>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  10cm Aluminium System
                </h4>
                <div className="text-xs text-emerald-800 dark:text-emerald-300/90 font-arabic font-medium mb-3">
                  قطاع ألمنيوم 10 سم (زجاج مفرد ودبل)
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Single Glass:</strong> 6mm / 8mm / 10mm Toughened safety glazing for interior &amp; standard partitions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Double Glass:</strong> 6mm+12A+6mm Insulated Acoustic Low-E glass with hermetic thermal barrier.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Smooth sliding tracks with stainless steel tandem rollers and flush crescent locks.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onOpenQuoteModal('10cm Aluminium with Double Glass')}
                className="w-full py-2 bg-slate-50 hover:bg-emerald-50 dark:bg-white/5 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Inquire 10cm Profile
              </button>
            </div>

            {/* 10.37cm Aluminium Profile */}
            <div className="p-6 bg-white dark:bg-white/[0.03] border-2 border-emerald-600/60 dark:border-emerald-500/50 relative overflow-hidden flex flex-col justify-between hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors shadow-sm">
              <div className="absolute top-0 right-0 px-2.5 py-0.5 bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider font-mono">
                Requested Profile
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    Profile 103.7mm (10.37cm)
                  </span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 font-semibold">
                    Structural Precision
                  </span>
                </div>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  10.37 Aluminium System
                </h4>
                <div className="text-xs text-emerald-800 dark:text-emerald-300/90 font-arabic font-medium mb-3">
                  قطاع ألمنيوم 10.37 سم (زجاج مفرد ودبل)
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Single Glass:</strong> 8mm / 10mm Tempered safety glass with reinforced structural gaskets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Double Glass:</strong> 20mm–24mm DGU thermal acoustic insulating glass with argon gas filling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Optimized 10.37cm frame depth for superior deflection resistance in expansive villa spans.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onOpenQuoteModal('10.37 Aluminium with Double Glass')}
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider transition-colors text-center cursor-pointer shadow-sm"
              >
                Inquire 10.37 Profile
              </button>
            </div>

            {/* 10.5cm Aluminium Profile */}
            <div className="p-6 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    Profile 105mm (10.5cm)
                  </span>
                  <span className="text-[10px] bg-slate-100 dark:bg-white/10 px-2 py-0.5 text-slate-700 dark:text-slate-300 font-semibold">
                    Heavy Architectural
                  </span>
                </div>
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                  10.5cm Aluminium System
                </h4>
                <div className="text-xs text-emerald-800 dark:text-emerald-300/90 font-arabic font-medium mb-3">
                  قطاع ألمنيوم 10.5 سم (زجاج مفرد ودبل)
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Single Glass:</strong> Deep pocket glazing with heavy rubber beading for wind resistance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Double Glass:</strong> 24mm high-performance DGU insulated glass for maximum cooling efficiency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Extra wall thickness (2.0mm–2.2mm) designed for large-span villa sliding &amp; hinged apertures.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onOpenQuoteModal('10.5cm Aluminium with Double Glass')}
                className="w-full py-2 bg-slate-50 hover:bg-emerald-50 dark:bg-white/5 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Inquire 10.5cm Profile
              </button>
            </div>

          </div>

          {/* Curtain Wall Facade Showcase (10/5 & 8/5 Systems) with Image */}
          <div className="p-6 sm:p-8 bg-slate-50/90 dark:bg-white/[0.02] border border-emerald-900/15 dark:border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-5 relative group overflow-hidden border border-emerald-900/10 dark:border-white/10">
                <img
                  src={curtainWallImg}
                  alt="Curtain Wall Facade System 10/5 and 8/5"
                  className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  Curtain Wall Facades • كيرتن وول
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] text-white/90 font-medium">10/5 &amp; 8/5 Structural Mullion Grid</span>
                  <button
                    onClick={() => setActiveImageModal(curtainWallImg)}
                    className="p-1.5 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-none text-xs flex items-center gap-1 transition-colors cursor-pointer"
                    title="Zoom Image"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono">Zoom</span>
                  </button>
                </div>
              </div>

              {/* Information & 10/5 vs 8/5 Breakdown Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider font-mono mb-2">
                    Structural Glass Envelopes
                  </div>
                  <h4 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white tracking-tight mb-2">
                    Curtain Wall Facade Systems (10/5 &amp; 8/5)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                    Engineered stick and semi-unitized architectural curtain wall systems for double-height villa facades, commercial entrance atriums, and floor-to-ceiling panoramic glass walls.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    
                    {/* Option 10/5 */}
                    <div className="p-4 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          Curtain Wall 10/5
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400">
                          100x50 mm
                        </span>
                      </div>
                      <div className="text-xs font-arabic font-medium text-slate-800 dark:text-slate-200 mb-2">
                        كيرتن وول 10/5 سم (100×50 ملم)
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-gray-400 leading-snug">
                        Heavy-duty 100mm mullion depth for high wind loads, double-height villa atriums, and commercial towers.
                      </p>
                      <button
                        onClick={() => onOpenQuoteModal('Curtain Wall 10/5 (10x5 cm / 100x50 mm)')}
                        className="mt-3 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Select 10/5 Option</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Option 8/5 */}
                    <div className="p-4 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          Curtain Wall 8/5
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400">
                          80x50 mm
                        </span>
                      </div>
                      <div className="text-xs font-arabic font-medium text-slate-800 dark:text-slate-200 mb-2">
                        كيرتن وول 8/5 سم (80×50 ملم)
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-gray-400 leading-snug">
                        Medium 80mm structural grid ideal for residential villa elevations, stairwell glazing, and modern storefronts.
                      </p>
                      <button
                        onClick={() => onOpenQuoteModal('Curtain Wall 8/5 (8x5 cm / 80x50 mm)')}
                        className="mt-3 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Select 8/5 Option</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Compliant with UAE Municipality &amp; Civil Defence thermal standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello, I am inquiring about Curtain Wall 10/5 and 8/5 systems for my project.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>WhatsApp BOQ</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 4 Feature Value Pillars for Silver Shade Windows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          <div className="p-6 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                Solar &amp; Heat Defense
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Double and triple glazing with Low-E coatings reflects 80%+ infrared solar heat, keeping villa interiors cool during summer.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              SHGC &lt; 0.25 Thermal Rating
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <VolumeX className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                Acoustic Sound Insulation
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Multi-chamber airtight gaskets and laminated acoustic PVB interlayer glass reduce highway and urban noise up to 45dB.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              Up to 45 dB Noise Cut
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                Dust &amp; Sandstorm Proof
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Precision EPDM perimeter seals prevent fine desert dust penetration, keeping floors and drapery clean all year round.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              100% Hermetic Gasket Seal
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                Multi-Point Security
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                European certified multi-point perimeter sash locking mechanisms and anti-lift blocks for uncompromising home security.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              European Grade Hardware
            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Zoom Modal */}
      {activeImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          onClick={() => setActiveImageModal(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden">
            <img 
              src={activeImageModal} 
              alt="Window Full Resolution View" 
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-3 right-3 px-4 py-2 bg-emerald-700 text-white text-xs font-mono uppercase tracking-widest"
            >
              Close [✕]
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
