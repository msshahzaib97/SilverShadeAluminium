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
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Architectural Image with Frosted Glass Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Dubai Luxury Villa with Modern Architectural Aluminium and Glass Doors"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.6] contrast-[1.05]"
          fetchPriority="high"
        />
        {/* Layered Translucent Frosted Glass Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center py-12 sm:py-16">
        <div className="max-w-3xl">
          
          {/* Eyebrow Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6 sm:mb-8"
          >
            <div className="h-px w-10 sm:w-14 bg-white/40"></div>
            <span className="text-[10px] sm:text-xs tracking-[0.45em] text-white/70 uppercase font-medium">
              Dubai • Aluminium &amp; Glass Solutions
            </span>
          </motion.div>

          {/* Main Headline with Frosted Glass Contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-light leading-[1.0] sm:leading-[0.96] mb-6 sm:mb-8 tracking-tighter text-white"
          >
            Premium Aluminium <br />
            <span className="text-white/45 font-normal">
              &amp; Glass Solutions
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-gray-300 font-light max-w-xl mb-4 leading-relaxed tracking-wide"
          >
            Designed with precision. Crafted for performance. Built to elevate modern Dubai spaces.
          </motion.p>

          {/* Additional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal"
          >
            Custom aluminium doors, panoramic sliding systems, minimal glass partitions, facades and bespoke architectural works for residential and commercial properties.
          </motion.p>

          {/* Frosted CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              id="hero-quote-btn"
              onClick={onOpenQuoteModal}
              className="bg-white text-black px-8 sm:px-10 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xl"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="hero-services-btn"
              onClick={onExploreServices}
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 sm:px-10 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
            >
              <span>Explore Our Services</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Frosted Glass Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 py-4 sm:py-6">
            {trustItems.map((item, idx) => (
              <div
                key={idx}
                id={`trust-indicator-${idx}`}
                className="px-4 py-2 sm:px-6 flex flex-col justify-center"
              >
                <div className="font-mono text-[10px] text-gray-500 tracking-wider uppercase mb-1">
                  {item.num} / {item.tag}
                </div>
                <div className="text-sm font-semibold text-white tracking-wide">
                  {item.label}
                </div>
                <div className="text-[11px] text-gray-400 hidden sm:block mt-0.5 truncate font-light">
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
