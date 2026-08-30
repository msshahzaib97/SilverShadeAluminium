import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  DoorOpen, 
  Layers, 
  Maximize2, 
  Sparkles,
  ArrowRight,
  PhoneCall,
  SlidersHorizontal,
  ShieldCheck,
  Lock,
  Compass,
  CheckCircle2
} from 'lucide-react';
import hingeDoorImg from '../assets/images/door_hinge_system_1788067173744.jpg';
import frenchDoubleImg from '../assets/images/door_french_double_1788067234048.jpg';
import slidingDoorImg from '../assets/images/door_sliding_system_1788067196025.jpg';
import glassDoorImg from '../assets/images/door_glass_securit_1788067213476.jpg';
import { COMPANY_CONFIG } from '../data/content';

interface DoorsSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const DoorsSection: React.FC<DoorsSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const [doorConfig, setDoorConfig] = useState<'single' | 'double'>('double');
  const [glazingConfig, setGlazingConfig] = useState<'single' | 'double'>('double');

  const doorShowcaseItems = [
    {
      id: 'hinge-doors',
      title: 'Hinged Aluminium & Glass Doors',
      arabicTitle: 'أبواب ألمنيوم مفصلات (مفرد ودبل)',
      tagline: 'Precision 10cm / 10.5cm Heavy-Duty Profile with German Multi-Point Lock',
      image: doorConfig === 'double' ? frenchDoubleImg : hingeDoorImg,
      altImage: frenchDoubleImg,
      badge: 'Villa Entrances & French Doors',
      overview: 'Bespoke aluminium hinged single and double doors engineered for superior thermal insulation, sound dampening, and security in UAE residences and offices. Designed with reinforced 6063-T6 alloy frames and premium European hardware.',
      configurations: {
        single: {
          name: 'Single Hinge Door (باب مفرد)',
          standardWidth: '900mm – 1100mm',
          standardHeight: '2100mm – 2800mm',
          idealFor: 'Master bedrooms, balconies, kitchen service exits, private offices, and secondary entrances.'
        },
        double: {
          name: 'Double French Hinge Door (باب دبل ضلفتين)',
          standardWidth: '1600mm – 2400mm',
          standardHeight: '2200mm – 3200mm',
          idealFor: 'Grand villa patios, Arabic majlis entrances, poolside verandas, and formal living room exits.'
        }
      },
      keySpecs: [
        { label: 'Profile Depth', value: '100mm (10cm) or 105mm (10.5cm) Reinforced System' },
        { label: 'Glass Options', value: glazingConfig === 'double' ? 'Double Glazed 6mm+12A+6mm Acoustic Low-E (24mm DGU)' : 'Single 8mm / 10mm Toughened Safety Glass' },
        { label: 'Hinge Hardware', value: 'Heavy-Duty 3D Adjustable European Ball-Bearing Hinges (160kg capacity)' },
        { label: 'Locking Mechanism', value: 'Multi-Point Perimeter Security Lock with German Euro Cylinder / Smart Keyless' },
        { label: 'Weather Sealing', value: 'Continuous EPDM Dual Gaskets with Acoustic Drop-Down Bottom Seal' },
        { label: 'Surface Finish', value: 'Qualicoat Class 2 Architectural Powder Coat (Matt Black, Anthracite, Bronze, Gold)' },
      ],
      highlights: [
        'Available in Single Leaf and Double Leaf French Door configurations with master-slave locking',
        'Engineered for 100% dust isolation and thermal barrier against desert summer heat',
        'Optional integrated magnetic internal blinds or frosted decorative privacy patterns',
        'Flush barrier-free threshold option for smooth wheelchair and pushchair accessibility'
      ],
      quoteService: 'Double Hinge Aluminium French Glass Door'
    },
    {
      id: 'sliding-doors',
      title: 'Sliding Aluminium Glass Doors',
      arabicTitle: 'أبواب ألمنيوم سحاب وسلايدنج (مفرد ودبل)',
      tagline: 'Ultra-Slim Minimal Sightlines with Heavy-Duty Whisper-Quiet Rollers',
      image: slidingDoorImg,
      badge: 'Panoramic Terraces & Patios',
      overview: 'Modern sliding aluminium glass door systems offering seamless transitions between indoor living areas and outdoor terraces. Engineered with minimal interlock sightlines (20mm–45mm), heavy stainless steel tandem rollers, and flush zero-trip floor tracks.',
      configurations: {
        single: {
          name: 'Single Leaf Sliding / Pocket Door (سحاب مفرد)',
          standardWidth: '1000mm – 1800mm per sash',
          standardHeight: 'Up to 3200mm floor-to-ceiling',
          idealFor: 'Space-saving interior room dividers, kitchen transitions, and compact balcony access.'
        },
        double: {
          name: 'Double Leaf / 2-Track & 3-Track Sliding (سحاب دبل)',
          standardWidth: '2000mm – 4500mm overall opening',
          standardHeight: 'Up to 3500mm architectural height',
          idealFor: 'Expansive villa garden patios, swimming pool decks, penthouse terraces, and majlis views.'
        }
      },
      keySpecs: [
        { label: 'System Profiles', value: '10cm / 10.5cm Deep Two-Track & Three-Track Sliding Systems' },
        { label: 'Glass Specification', value: glazingConfig === 'double' ? 'Double Glazed Acoustic Low-E Thermal Unit (6+12A+6)' : 'Single 10mm / 12mm Monolithic Toughened Glass' },
        { label: 'Roller Capacity', value: 'Twin Stainless Steel Ball-Bearing Tandem Rollers (up to 300kg per leaf)' },
        { label: 'Threshold Track', value: 'Concealed Zero-Threshold Sub-Floor Drain Track with Brush Seals' },
        { label: 'Interlock Width', value: 'Ultra-Slim 25mm – 45mm Minimal Vertical Meeting Stile' },
        { label: 'Security & Latching', value: 'Concealed Flush Crescent / Multipoint Hook Locks with Anti-Lift Blocks' },
      ],
      highlights: [
        'Effortless finger-touch gliding even on oversized 3-meter architectural glass panels',
        'Concealed soft-close hydraulic dampers prevent slamming and protect fingers',
        'High air, dust, and water tightness tested for severe UAE sandstorms and monsoon rains',
        'Available in 2-panel, 3-panel, 4-panel meeting, and concealed pocket wall cavity options'
      ],
      quoteService: 'Double Leaf Sliding Glass Patio Door'
    },
    {
      id: 'glass-doors',
      title: 'Frameless Tempered Glass Doors (Securit)',
      arabicTitle: 'أبواب زجاج سيكوريت بدون إطار (مفرد ودبل مع ماكينة أرضية)',
      tagline: '10mm / 12mm Toughened Glass with Heavy-Duty Hydraulic Floor Springs',
      image: glassDoorImg,
      badge: 'Executive Offices & Villa Enclosures',
      overview: 'Architectural frameless tempered glass single and double doors (زجاج سيكوريت) designed for corporate executive suites, commercial showroom entrances, and modern luxury villa partitions. Features heavy-duty German hydraulic floor springs and 316 marine-grade stainless hardware.',
      configurations: {
        single: {
          name: 'Single Frameless Glass Door (باب زجاج مفرد)',
          standardWidth: '800mm – 1100mm',
          standardHeight: '2100mm – 2800mm',
          idealFor: 'Office cabins, master bathroom entries, walk-in closets, and modern retail shops.'
        },
        double: {
          name: 'Double Leaf Frameless Glass Entrance (باب زجاج دبل ضلفتين)',
          standardWidth: '1600mm – 2400mm',
          standardHeight: '2200mm – 3000mm',
          idealFor: 'Corporate reception lobbies, villa majlis double doors, showroom entrances, and luxury retail.'
        }
      },
      keySpecs: [
        { label: 'Glass Specification', value: '10mm / 12mm Clear Optiwhite Toughened Safety Glass (EN 12150)' },
        { label: 'Floor Machine', value: 'Heavy-Duty Hydraulic Floor Spring (ماكينة أرضية) with 90° Hold-Open & Dual Speed' },
        { label: 'Patch Fittings', value: 'Grade 316 Stainless Steel / Matte Black / Brushed Brass Top & Bottom Patches' },
        { label: 'Handle Styles', value: 'Architectural Tubular Pull Handles (600mm, 900mm, 1200mm, or H-Type)' },
        { label: 'Lock Mechanism', value: 'Corner Floor Deadbolt Lock with Euro Profile Key Cylinder' },
        { label: 'Glass Finishes', value: 'Ultra-Clear Low Iron, Sandblasted Frosted, Smoked Grey, Reeded Fluted' },
      ],
      highlights: [
        'Single and Double Action opening (inward & outward swing) with smooth automatic self-closing',
        'Certified high-impact safety toughened glass resistant to thermal stress and high traffic',
        'Custom corporate laser logo etching, decorative sandblast frosting, or smart PDLC switchable film',
        'Silent closing speed control and adjustable latching action for whisper-quiet environments'
      ],
      quoteService: 'Frameless Tempered Glass Double Door (Securit)'
    }
  ];

  const currentItem = doorShowcaseItems[activeTab];

  const handleWhatsAppInquiry = (doorTitle: string, config: string, glass: string) => {
    const text = encodeURIComponent(
      `Hello Silver Shade Aluminium & Glass,\n\nI am interested in getting a quotation and site measurement for:\n` +
      `• System: ${doorTitle}\n` +
      `• Door Configuration: ${config.toUpperCase()} DOOR\n` +
      `• Glazing Type: ${glass.toUpperCase()} GLASS\n` +
      `• Location: Abu Dhabi / Dubai, UAE\n\nPlease share catalog details and estimate.`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="doors-showcase" className="py-24 sm:py-32 bg-[#060a08] relative border-t border-emerald-500/15 overflow-hidden">
      
      {/* Ambient background accents */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-emerald-500/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-emerald-400"></div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-emerald-400 uppercase">
                ENGINEERED DOOR SYSTEMS &amp; ENTRANCES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Hinge, Sliding &amp; <span className="text-emerald-400 font-normal">Glass Doors</span>
            </h2>
            <div className="text-xs sm:text-sm text-emerald-300/80 font-arabic font-medium mt-1">
              أبواب ألمنيوم وزجاج فاخرة (مفصلات، سحاب وسلايدنج، وزجاج سيكوريت مفرد ودبل)
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Single &amp; Double Door Fabrication</span>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Glass & Aluminium Doors')}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-700/20"
            >
              <span>Get Door Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* System Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {doorShowcaseItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 sm:p-5 text-left border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                activeTab === idx
                  ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-lg shadow-emerald-950/40'
                  : 'bg-white/[0.03] border-white/10 text-gray-400 hover:border-emerald-500/40 hover:text-gray-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border ${
                    activeTab === idx 
                      ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300' 
                      : 'bg-white/5 border-white/10 text-gray-400'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] text-emerald-400/80 font-mono">
                    Single / Double
                  </span>
                </div>
                <h3 className={`text-base sm:text-lg font-medium ${activeTab === idx ? 'text-white' : 'text-gray-300'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-300/80 font-arabic mt-1">
                  {item.arabicTitle}
                </p>
              </div>

              {activeTab === idx && (
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <DoorOpen className="w-3.5 h-3.5" />
                  <span>Viewing Specifications</span>
                </div>
              )}

              {/* Top active indicator line */}
              {activeTab === idx && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400"></div>
              )}
            </button>
          ))}
        </div>

        {/* Configuration Toggle Bar (Single vs Double Door & Single vs Double Glass) */}
        <div className="mb-8 p-4 bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold uppercase tracking-wider text-[11px] text-white">Interactive Configuration:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-end">
            {/* Door Leaf Switcher */}
            <div className="flex items-center bg-black/60 p-1 border border-white/15">
              <span className="text-[10px] uppercase font-mono px-2 text-gray-400">Door Format:</span>
              <button
                onClick={() => setDoorConfig('single')}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  doorConfig === 'single'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Single Door (مفرد)
              </button>
              <button
                onClick={() => setDoorConfig('double')}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  doorConfig === 'double'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Double Door (دبل ضلفتين)
              </button>
            </div>

            {/* Glazing Type Switcher */}
            <div className="flex items-center bg-black/60 p-1 border border-white/15">
              <span className="text-[10px] uppercase font-mono px-2 text-gray-400">Glass Spec:</span>
              <button
                onClick={() => setGlazingConfig('single')}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  glazingConfig === 'single'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Single Glass
              </button>
              <button
                onClick={() => setGlazingConfig('double')}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  glazingConfig === 'double'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Double Glazed
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentItem.id}-${doorConfig}-${glazingConfig}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            
            {/* Left: High Resolution Visual Preview with Zoom */}
            <div className="lg:col-span-6 space-y-4">
              <div 
                className="relative h-[380px] sm:h-[450px] w-full border border-white/15 bg-black/50 overflow-hidden group cursor-pointer"
                onClick={() => setActiveImageModal(currentItem.image)}
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                    {currentItem.badge}
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-950/80 backdrop-blur-md border border-emerald-400/40 text-white text-[11px] font-mono uppercase">
                    {doorConfig === 'double' ? 'Double Door Setup' : 'Single Door Setup'}
                  </span>
                </div>

                {/* Click to Zoom Overlay Indicator */}
                <div className="absolute top-4 right-4 p-2 bg-black/75 border border-white/20 text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md border border-white/10">
                  <div className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider mb-1">
                    {doorConfig === 'double' ? currentItem.configurations.double.name : currentItem.configurations.single.name}
                  </div>
                  <div className="text-xs text-gray-300 line-clamp-2">
                    {doorConfig === 'double' ? currentItem.configurations.double.idealFor : currentItem.configurations.single.idealFor}
                  </div>
                </div>
              </div>

              {/* Quick Config Comparison Box */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-white/[0.02] border border-white/10 text-xs">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-mono block">Width Aperture:</span>
                  <span className="text-white font-medium">
                    {doorConfig === 'double' ? currentItem.configurations.double.standardWidth : currentItem.configurations.single.standardWidth}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-mono block">Max Height:</span>
                  <span className="text-emerald-400 font-medium">
                    {doorConfig === 'double' ? currentItem.configurations.double.standardHeight : currentItem.configurations.single.standardHeight}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Engineering Details */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentItem.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mt-2">
                  {currentItem.overview}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Fabrication &amp; Hardware Specifications
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">EN &amp; UAE Approved</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentItem.keySpecs.map((spec, i) => (
                    <div key={i} className="p-2.5 bg-black/40 border border-white/5">
                      <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider mb-0.5">
                        {spec.label}
                      </div>
                      <div className="text-xs text-white font-medium">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Key System Advantages:
                </div>
                {currentItem.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: WhatsApp & Quote Modal */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(currentItem.quoteService)}
                  className="w-full sm:w-1/2 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest transition-all text-center cursor-pointer shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Request Custom BOQ</span>
                </button>

                <button
                  onClick={() => handleWhatsAppInquiry(currentItem.title, doorConfig, glazingConfig)}
                  className="w-full sm:w-1/2 py-3.5 bg-white/5 hover:bg-emerald-950/40 text-emerald-400 border border-white/15 hover:border-emerald-500/50 text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp Specs</span>
                </button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* 3 Quick Cards: Hinge vs Sliding vs Glass Door Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
          
          <div className="p-6 bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-bold mb-2">01. HINGED DOORS</div>
              <h4 className="text-lg text-white font-medium mb-1">Single &amp; Double Hinge</h4>
              <p className="text-xs text-emerald-300/80 font-arabic mb-3">أبواب ألمنيوم مفصلات مفرد ودبل</p>
              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>10cm &amp; 10.5cm reinforced profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Single &amp; Double acoustic Low-E glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Multi-point lock &amp; 3D heavy hinges</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Single Hinge Aluminium & Glass Door')}
              className="w-full py-2 bg-white/5 hover:bg-emerald-950/40 text-emerald-400 border border-white/10 hover:border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider text-center cursor-pointer transition-colors"
            >
              Inquire Hinge Doors
            </button>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-bold mb-2">02. SLIDING DOORS</div>
              <h4 className="text-lg text-white font-medium mb-1">Single &amp; Double Sliding</h4>
              <p className="text-xs text-emerald-300/80 font-arabic mb-3">أبواب ألمنيوم سحاب وسلايدنج</p>
              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Ultra-slim 20mm-45mm minimal interlocks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Single &amp; Double sliding panel options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Stainless tandem rollers &amp; flush tracks</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Double Leaf Sliding Glass Patio Door')}
              className="w-full py-2 bg-white/5 hover:bg-emerald-950/40 text-emerald-400 border border-white/10 hover:border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider text-center cursor-pointer transition-colors"
            >
              Inquire Sliding Doors
            </button>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-bold mb-2">03. FRAMELESS GLASS</div>
              <h4 className="text-lg text-white font-medium mb-1">Single &amp; Double Securit</h4>
              <p className="text-xs text-emerald-300/80 font-arabic mb-3">أبواب زجاج سيكوريت مع ماكينة أرضية</p>
              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>10mm &amp; 12mm tempered safety glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>German hydraulic floor spring machine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>SS316 / Matt black architectural pull handles</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Frameless Tempered Glass Double Door (Securit)')}
              className="w-full py-2 bg-white/5 hover:bg-emerald-950/40 text-emerald-400 border border-white/10 hover:border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider text-center cursor-pointer transition-colors"
            >
              Inquire Glass Doors
            </button>
          </div>

        </div>

      </div>

      {/* Full-Screen Image Lightbox Modal */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveImageModal(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
              <img
                src={activeImageModal}
                alt="Enlarged Door View"
                className="max-h-[80vh] w-auto object-contain border border-white/20 shadow-2xl"
              />
              <button
                onClick={() => setActiveImageModal(null)}
                className="mt-4 px-6 py-2 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
