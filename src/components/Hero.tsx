import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Sparkles, Wrench, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreServices }) => {
  const trustItems = [
    { num: '01', tag: 'BESPOKE', label: 'Custom Design', detail: 'Tailored architectural engineering' },
    { num: '02', tag: 'QUALITY', label: 'Premium Finishes', detail: 'Marine-grade anodized profiles' },
    { num: '03', tag: 'TEAM', label: 'Certified Installers', detail: 'In-house UAE master craftsmen' },
    { num: '04', tag: 'LOCATION', label: 'Dubai Based', detail: 'UAE residential & commercial' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden bg-slate-900 dark:bg-[#060a08]"
    >
      {/* Background Architectural Image with Adaptive Frosted Glass Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Dubai Luxury Villa with Modern Architectural Aluminium and Glass Doors"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] dark:brightness-[0.4] contrast-[1.08]"
          fetchPriority="high"
        />
        {/* Layered Translucent Gradients for Light & Dark readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a08] via-black/60 to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        {/* Emerald ambient glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center py-12 sm:py-16">
        <div className="max-w-3xl">
          
          {/* Eyebrow Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="h-px w-8 sm:w-12 bg-emerald-400"></div>
            <span className="text-[10px] sm:text-xs tracking-[0.4em] text-emerald-400 uppercase font-semibold">
              Dubai • Architectural Aluminium &amp; Glass
            </span>
          </motion.div>

          {/* Main Headline with Modern White & Emerald Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-light leading-[1.0] sm:leading-[0.96] mb-6 sm:mb-8 tracking-tight text-white"
          >
            Premium Aluminium <br />
            <span className="text-emerald-400 font-normal">
              &amp; Glass Solutions
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-emerald-50 font-light max-w-xl mb-4 leading-relaxed tracking-wide"
          >
            Designed with precision. Crafted for performance. Built to elevate modern Dubai spaces.
          </motion.p>

          {/* Additional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal"
          >
            Custom aluminium doors, panoramic sliding systems, minimal acoustic glass partitions, facades, and bespoke architectural metalworks for luxury villas and commercial towers.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              id="hero-quote-btn"
              onClick={onOpenQuoteModal}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 sm:px-10 py-4 text-[12px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-emerald-950/40 border border-emerald-400/40"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="hero-services-btn"
              onClick={onExploreServices}
              className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/25 text-white px-8 sm:px-10 py-4 text-[12px] font-bold uppercase tracking-widest transition-all flex items-center justify-center cursor-pointer"
            >
              <span>Explore Our Services</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Frosted Glass Trust Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 py-4 sm:py-6">
            {trustItems.map((item, idx) => (
              <div
                key={idx}
                id={`trust-indicator-${idx}`}
                className="px-4 py-2 sm:px-6 flex flex-col justify-center"
              >
                <div className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase mb-1 font-semibold">
                  {item.num} / {item.tag}
                </div>
                <div className="text-sm font-semibold text-white tracking-wide">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-300 hidden sm:block mt-0.5 truncate font-light">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

