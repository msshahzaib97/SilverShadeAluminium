import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  Layers, 
  Maximize2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Wrench,
  Flame,
  Droplets,
  X
} from 'lucide-react';
import kitchenImg from '../assets/images/kitchen_glass_cabinets_1788067510108.jpg';
import { COMPANY_CONFIG } from '../data/content';

interface KitchenCabinetSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const KitchenCabinetSection: React.FC<KitchenCabinetSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedGlassOption, setSelectedGlassOption] = useState<'single' | 'double'>('single');
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const glassOptionsData = {
    single: {
      id: 'single-piece-glass',
      badge: 'Minimalist Seamless Style',
      title: 'Single Piece Glass Cabinet Doors',
      arabicTitle: 'خزائن مطابخ ألمنيوم - قطعة واحدة زجاج (Single Piece Glass)',
      subtitle: 'Full unbroken tempered glass shutter fitted seamlessly into ultra-slim aluminium profile frame.',
      features: [
        'Full continuous single-sheet tempered safety glass (6mm/8mm)',
        'Uninterrupted reflective surface for maximum elegance and easy cleaning',
        'Integrated ultra-thin aluminium perimeter edge protection',
        'German Blum soft-close dampened hinges with 110° opening angle',
        'Concealed vertical micro-handle or push-to-open latch system'
      ],
      idealFor: 'Modern minimalist villas, contemporary display pantries, and luxury open-plan show kitchens.',
      quoteValue: 'Kitchen Cabinets - Single Piece Glass Doors'
    },
    double: {
      id: 'double-piece-glass',
      badge: 'Architectural Dual-Panel Design',
      title: 'Double Piece Glass Cabinet Doors',
      arabicTitle: 'خزائن مطابخ ألمنيوم - قطعتين زجاج / دبل جلاس (Double Piece Glass)',
      subtitle: 'Two-piece segmented glass panels or double-glazed insulated shutter with internal architectural division.',
      features: [
        'Dual section glass inserts with structural aluminium mid-rail divider',
        'Optional double-glazed acoustic/dust-seal glass construction',
        'Allows contrasting textures (e.g. Fluted glass upper + Smoked glass lower)',
        'Reinforced structure for extra tall overhead cabinets and floor-to-ceiling larders',
        'Heavy-duty tandem soft-close drawer and lift-up Bi-fold mechanisms'
      ],
      idealFor: 'Luxury classic-modern kitchens, tall pantry larders, wine display cabinets, and heavy-use family prep kitchens.',
      quoteValue: 'Kitchen Cabinets - Double Piece Glass Doors'
    }
  };

  const glassTypes = [
    { name: 'Smoked Dark Grey Glass', desc: 'Sleek ambient reflection with integrated LED glow' },
    { name: 'Fluted Reeded Glass', desc: 'Textured ribbed privacy with elegant vintage rhythm' },
    { name: 'Crystal Ultra-Clear Glass', desc: 'High-transparency display for curated kitchenware' },
    { name: 'Frosted Matte Glass', desc: 'Soft diffused light concealing cabinet contents' },
  ];

  return (
    <section id="kitchens" className="py-24 sm:py-32 bg-[#f8faf9] dark:bg-[#070b09] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-emerald-900/10 dark:border-emerald-500/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase font-mono">
                BESPOKE ALUMINIUM CABINETRY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
              Aluminium Kitchens &amp; <span className="text-emerald-700 dark:text-emerald-400 font-normal">Glass Options</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-xl font-normal mt-2">
              100% moisture-proof, termite-proof aluminium carcass kitchens with Single Piece Glass &amp; Double Piece Glass shutter configurations for Dubai &amp; Abu Dhabi villas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('Aluminium Kitchen Cabinets & Glass')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-emerald-600/20"
            >
              Request Kitchen Consultation
            </button>
          </div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Photorealistic Image & Glass Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative group overflow-hidden border border-emerald-900/15 dark:border-white/10 bg-black h-[360px] sm:h-[420px]">
              <img
                src={kitchenImg}
                alt="Luxury Aluminium Kitchen Cabinets with Glass Doors"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                Luxury Glass Cabinetry • مطابخ ألمنيوم
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white block">Smoked Glass &amp; Warm 3000K LED</span>
                  <span className="text-[10px] text-white/80 font-arabic">خيارات قطعة واحدة أو قطعتين زجاج</span>
                </div>
                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-none text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Zoom Image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono">Zoom</span>
                </button>
              </div>
            </div>

            {/* Glass Finishes Strip */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
              {glassTypes.map((gt, idx) => (
                <div key={idx} className="p-2.5 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{gt.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-gray-400 mt-0.5">{gt.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Single Piece vs Double Piece Glass Selector & Specs */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white dark:bg-white/[0.03] border border-emerald-900/15 dark:border-white/10 flex flex-col justify-between">
            <div>
              
              {/* Option Switcher Tabs */}
              <div className="flex items-center gap-3 mb-6 p-1.5 bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10">
                <button
                  onClick={() => setSelectedGlassOption('single')}
                  className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                    selectedGlassOption === 'single'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  1. Single Piece Glass Option (قطعة واحدة زجاج)
                </button>

                <button
                  onClick={() => setSelectedGlassOption('double')}
                  className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                    selectedGlassOption === 'double'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  2. Double Piece Glass Option (قطعتين زجاج / دبل)
                </button>
              </div>

              {/* Dynamic Content based on Selection */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGlassOption}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold">
                      {glassOptionsData[selectedGlassOption].badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400">
                      Option {selectedGlassOption === 'single' ? '01' : '02'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-slate-900 dark:text-white tracking-tight mb-1">
                    {glassOptionsData[selectedGlassOption].title}
                  </h3>
                  <div className="text-sm font-arabic font-medium text-emerald-800 dark:text-emerald-300/90 mb-3">
                    {glassOptionsData[selectedGlassOption].arabicTitle}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                    {glassOptionsData[selectedGlassOption].subtitle}
                  </p>

                  {/* Bullet Specifications */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>FABRICATION SPECIFICATIONS</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {glassOptionsData[selectedGlassOption].features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal Application Callout */}
                  <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-slate-700 dark:text-gray-300 mb-6">
                    <strong className="text-emerald-800 dark:text-emerald-300">Recommended For: </strong>
                    <span>{glassOptionsData[selectedGlassOption].idealFor}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Bottom Action CTA */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Fire Retardant</span>
                </span>
                <span className="flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-cyan-500" />
                  <span>100% Waterproof</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>10-Yr Carcass Guarantee</span>
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello, I am interested in kitchen cabinets with ${glassOptionsData[selectedGlassOption].title} for my villa.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer"
                >
                  WhatsApp Plans
                </a>
                <button
                  onClick={() => onOpenQuoteModal(glassOptionsData[selectedGlassOption].quoteValue)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer shadow-md shadow-emerald-600/20"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-emerald-400 transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={kitchenImg}
              alt="High Resolution Kitchen Cabinets"
              className="w-full h-auto max-h-[85vh] object-contain border border-white/20"
            />
            <div className="mt-3 text-center text-xs text-white/80 font-mono">
              Aluminium Carcass Kitchen with Smoked Glass Shutters &amp; Integrated Lighting
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
