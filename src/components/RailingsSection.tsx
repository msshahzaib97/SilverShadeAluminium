import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  Sparkles,
  ArrowRight,
  PhoneCall,
  SlidersHorizontal,
  Lock,
  Sparkle,
  Compass,
  Building2
} from 'lucide-react';
import glassStaircaseImg from '../assets/images/railing_glass_staircase_1787911028671.jpg';
import blackPicketImg from '../assets/images/railing_black_picket_1787911051401.jpg';
import floatingWoodImg from '../assets/images/railing_floating_wood_1787911068938.jpg';
import exteriorRampImg from '../assets/images/railing_exterior_ramp_1787911087105.jpg';
import { COMPANY_CONFIG } from '../data/content';

interface RailingsSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const RailingsSection: React.FC<RailingsSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const railingShowcaseItems = [
    {
      id: 'glass-balustrades',
      title: 'Frameless & Slim Glass Balustrades',
      arabicTitle: 'درابزين زجاجي مودرن للدرج والفلل',
      tagline: '12mm / 17.52mm Tempered Laminated Safety Glass with Concealed Spigots',
      image: glassStaircaseImg,
      badge: 'Luxury Villa Stairs',
      overview: 'Engineered for luxury duplexes, modern villas, and architectural staircases. Provides uninterrupted optical transparency, modern clean lines, and uncompromising impact safety compliant with UAE building codes.',
      keySpecs: [
        { label: 'Glass Specification', value: '12mm / 15mm Toughened OR 8+1.52PVB+8 Laminated Glass' },
        { label: 'Fixing Method', value: 'Side-Mounted Stainless Spigots / Concealed Base Aluminum U-Channel' },
        { label: 'Top Handrail', value: 'Ultra-Slim 25x25mm Slotted Aluminium / Frameless Polished Edge' },
        { label: 'Load Capacity', value: 'Tested for 1.5 kN/m to 3.0 kN/m Residential & Commercial Load' },
        { label: 'Edge Finish', value: 'CNC Diamond Polished & Arissed Smooth Safe Edges' },
        { label: 'Applications', value: 'Villa Staircases, Mezzanine Landings, Void Voids, Balconies' },
      ],
      highlights: [
        'Maximizes interior natural lighting and enhances open-concept architectural volume',
        'Zero wobbling with high-tensile 316 marine-grade stainless anchor bolts into concrete steps',
        'Option for integrated LED warm ambient channel lighting underneath the handrail profile',
        'Custom glass radius bending available for curved and helical stair geometries',
      ],
    },
    {
      id: 'black-picket-railings',
      title: 'Modern Matte Black Aluminium Picket Railings',
      arabicTitle: 'درابزين ألمنيوم عمودي أسود مطفي',
      tagline: 'Precision Vertical Slats with Ergonomic Heavy Newel Posts & Seamless Joinery',
      image: blackPicketImg,
      badge: 'Contemporary Interior & Stairs',
      overview: 'Architectural vertical picket balustrade system engineered with heavy-duty extruded 6063-T6 aluminium alloy. Features continuous ergonomic grip handrails, concealed screwless welded brackets, and electro-static matte black finish.',
      keySpecs: [
        { label: 'Picket Dimensions', value: '20x20mm / 25x25mm Precision Vertical Aluminium Tubes' },
        { label: 'Picket Spacing', value: '95mm Clear Gap (Compliant with 100mm Child-Safety Code)' },
        { label: 'Post Dimensions', value: '60x60mm / 80x80mm Heavy Master Newel Posts with Base Plates' },
        { label: 'Coating', value: 'Qualicoat Class 2 Architectural Powder Coating (RAL 9005)' },
        { label: 'Handrail Profile', value: 'Ergonomic Rounded Edge Comfort Grip (50x30mm / 60x40mm)' },
        { label: 'Maintenance', value: '100% Rust-Proof, No Paint Peeling, Scratch-Resistant' },
      ],
      highlights: [
        'Clean geometric vertical lines create striking focal contrast against marble/wood stairs',
        'Lightweight yet rigid engineering reduces structural load on suspended floors',
        'Modular pre-assembled panels ensure rapid, dust-minimized on-site installation',
        'Custom finishes: Jet Black, Graphite Grey, Dark Bronze, or Champagne Gold',
      ],
    },
    {
      id: 'floating-wood-glass',
      title: 'Floating Open-Riser Staircase Glass Systems',
      arabicTitle: 'درابزين زجاجي للسلالم المعلقة المفتوحة',
      tagline: 'Custom Spigot & Post Mountings for Cantilevered Wooden Tread Steps',
      image: floatingWoodImg,
      badge: 'Architectural Masterpiece',
      overview: 'Designed specifically for luxury cantilevered floating treads and double-height living room staircase atriums. Secures glass structural panels directly into steel central stringers or timber tread end-caps without obstructing views.',
      keySpecs: [
        { label: 'Mounting Style', value: 'Tread-End Point Fixings / Offset Clamp Brackets' },
        { label: 'Glass Clarity', value: 'Ultra-Clear Low-Iron (Optiwhite) Extra Clear Glass' },
        { label: 'Interlayer', value: 'DuPont SentryGlas (SGP) High-Performance Structural Interlayer' },
        { label: 'Hardware Finish', value: 'Matte Black Anodized / Brushed Satin Marine Stainless 316' },
        { label: 'Stair Compatibility', value: 'Cantilevered Steel Box, Floating Oak/Teak Treads, Open Spine' },
        { label: 'Height Range', value: '900mm (Steps) to 1100mm (Landings & Voids)' },
      ],
      highlights: [
        'Creates an ethereal floating effect making interior spaces feel larger and brighter',
        'Engineered to absorb dynamic pedestrian vibrations without loosening over time',
        'Low-iron Optiwhite glass eliminates greenish edge tint for crystal-clear visual clarity',
        'Precision 3D laser-measured templates for millimeter-exact stair riser alignment',
      ],
    },
    {
      id: 'exterior-safety-ramps',
      title: 'Exterior Accessible Ramp & Terrace Railings',
      arabicTitle: 'درابزين منحدرات وسلالم خارجية مقاوم للعوامل الجوية',
      tagline: 'Heavy-Duty Marine-Grade Weatherproof Safety Balustrades & Grab Rails',
      image: exteriorRampImg,
      badge: 'Outdoor & Safety Compliant',
      overview: 'Heavy-duty exterior aluminium handrails and balustrade systems for villa entry ramps, garden staircases, accessibility walkways, and elevated outdoor terraces. Withstands extreme UAE heat, UV radiation, humidity, and coastal sea-air.',
      keySpecs: [
        { label: 'Alloy Grade', value: '6063-T6 Marine-Grade Corrosion-Resistant Extruded Alloy' },
        { label: 'Ramp Grab Rails', value: 'Continuous Dual-Height Handrail (750mm & 900mm) Options' },
        { label: 'Finish Warranty', value: '15-Year UV & Weather Resistant Electrostatic Polyester Coating' },
        { label: 'Floor Anchoring', value: 'M12 Heavy-Duty Chemical Anchors into Concrete / Tile Foundation' },
        { label: 'Colors', value: 'Pure White (RAL 9010), Matte Black, Cream, or Anodized Silver' },
        { label: 'Standards', value: 'Universal Accessibility & Municipality Safety Compliant' },
      ],
      highlights: [
        'Continuous smooth-turn end returns prevent snagging of clothes or mobility aids',
        'Non-fading UV-stabilized powder coat maintains original brilliance without chalking',
        'Welded solid joint junctions provide rock-solid stability for wheelchair ramps',
        'Custom fabricated for straight ramps, switchbacks, and outdoor patio stairs',
      ],
    },
  ];

  const currentItem = railingShowcaseItems[activeTab];

  const handleWhatsAppInquiry = (railingTitle: string) => {
    const text = encodeURIComponent(
      `Hello Silver Shade Aluminium, I would like to get a quote and site measurement survey for "${railingTitle}" for my project in Abu Dhabi/Dubai.`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="railings-showcase" className="py-24 sm:py-32 bg-white dark:bg-[#070b09] relative border-t border-emerald-900/10 dark:border-emerald-500/15 overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-emerald-900/10 dark:border-emerald-500/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></div>
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold tracking-widest uppercase">
                RAILINGS &amp; BALUSTRADES • درابزين وسلالم ألمنيوم وزجاج
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
              Architectural <span className="text-emerald-700 dark:text-emerald-400 font-normal">Railings &amp; Glass Balustrades</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-lg font-normal leading-relaxed">
            Custom-built interior staircase glass balustrades, matte black vertical picket rails, cantilevered floating stairs, and outdoor accessibility ramp safety handrails fabricated in Musaffah, Abu Dhabi.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {railingShowcaseItems.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                id={`railing-tab-${item.id}`}
                onClick={() => setActiveTab(index)}
                className={`p-4 sm:p-5 text-left border transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-emerald-50/70 dark:bg-white/[0.08] border-emerald-600 dark:border-emerald-400 shadow-lg shadow-emerald-950/5 dark:shadow-emerald-900/20'
                    : 'bg-slate-50/80 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600 dark:bg-emerald-400"></div>
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-[9px] px-2 py-0.5 bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 uppercase font-mono tracking-wider">
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

        {/* Selected Railing Feature Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="backdrop-blur-xl bg-slate-50/50 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Image with Magnify Badge */}
              <div className="lg:col-span-6">
                <div className="relative group overflow-hidden border border-emerald-900/10 dark:border-white/15 shadow-md">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                    onClick={() => setActiveImageModal(currentItem.image)}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

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
                      In-House Engineering &amp; Installation
                    </div>
                    <div className="text-lg font-medium tracking-tight mt-0.5">
                      {currentItem.title}
                    </div>
                  </div>
                </div>

                {/* Sub-gallery thumbnail strip */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {railingShowcaseItems.map((thumb, idx) => (
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
                  <div className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-4 sm:p-5 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-gray-400 mb-3 font-semibold flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>FABRICATION &amp; LOAD SPECIFICATIONS</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentItem.keySpecs.map((spec, i) => (
                        <div key={i} className="border-b border-slate-100 dark:border-white/5 pb-2">
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
                    id="btn-railing-quote"
                    onClick={() => onOpenQuoteModal(currentItem.title)}
                    className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-700/20"
                  >
                    <span>Request Railing Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id="btn-railing-whatsapp"
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

        {/* 4 Feature Pillars for Railings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          <div className="p-6 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                UAE Safety Code Compliant
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Strict 100mm maximum sphere clearance, tested point loads up to 1.5 kN, and tempered-laminated glass failure containment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              BS 6180 / IBC Compliant
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                Marine Grade 6063-T6 Alloy
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Extruded high-tensile aluminium profiles and SS316 fixings resist coastal humidity, salt spray, and extreme Gulf heat.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              100% Anti-Corrosion Warranty
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                Laser Site Templating
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                3D digital laser scans capture stair riser variations and landing angles down to 0.5mm precision for seamless glass installation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              Millimeter Perfect Fit
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                Rigid Mechanical Anchors
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Heavy chemical epoxy resin bolts and reinforced sub-surface base channels eliminate railing deflection or vibration.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
              Zero Deflection Guarantee
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
              alt="Railing Full Resolution View" 
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
