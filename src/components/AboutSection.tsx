import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, X, Compass, Cpu, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const pillars = [
    {
      code: "01 / SURVEY",
      title: "Laser Precision Surveying",
      desc: "3D digital point-cloud site measurement eliminating alignment errors on bespoke openings."
    },
    {
      code: "02 / CLIMATE",
      title: "Thermal-Break Technology",
      desc: "Engineered poly-barrier profiles designed specifically for the extreme UAE summer climate."
    },
    {
      code: "03 / GLAZING",
      title: "Bespoke Architectural Glazing",
      desc: "Ultra-clear Low-Iron, acoustic laminated, solar-reflective, and smart switchable glass."
    },
    {
      code: "04 / TEAM",
      title: "Certified In-House Installation",
      desc: "Direct master installers trained in structural silicone sealing and heavy-weight hardware calibration."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Translucent background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Photo with Frosted Spec Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-none overflow-hidden border border-white/15 bg-white/5 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Silver Shade Aluminium Precision Architecture & Minimal Glass Door Systems"
                className="w-full h-[420px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              {/* Floating Frosted Glass Spec Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-xl bg-black/50 border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                      Engineering Philosophy
                    </div>
                    <div className="text-sm font-semibold text-white tracking-wide mt-1">
                      Sub-Millimeter Tolerances &amp; Seamless Profiles
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-white/10 text-white text-[10px] uppercase font-mono tracking-wider backdrop-blur-sm border border-white/10">
                    Dubai, UAE
                  </div>
                </div>
              </div>
            </div>

            {/* Geometric glass accent corner lines */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t border-l border-white/30 pointer-events-none"></div>
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-white/30 pointer-events-none"></div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-white/40"></div>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.4em] text-gray-400 uppercase">
                ABOUT SILVER SHADE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Where Aluminium Meets <br />
              <span className="text-white/40 font-normal">Modern Architecture</span>
            </h2>

            {/* Paragraph (Exact User Prompt Text) */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 font-light">
              Silver Shade Aluminium delivers premium aluminium and glass solutions for contemporary residential and commercial spaces across Dubai. From elegant glass doors and modern aluminium windows to custom wardrobes, partitions and architectural installations, we combine precision engineering, modern design and professional craftsmanship to create solutions that look exceptional and perform for years.
            </p>

            {/* Frosted Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  id={`about-pillar-${idx}`}
                  className="p-4 backdrop-blur-md bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all"
                >
                  <div className="font-mono text-[9px] text-gray-500 tracking-wider uppercase mb-1">
                    {item.code}
                  </div>
                  <div className="text-xs font-semibold tracking-wide text-white mb-1">
                    {item.title}
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                id="discover-story-btn"
                onClick={() => setIsStoryModalOpen(true)}
                className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-white hover:text-gray-300 transition-colors py-2 border-b border-white hover:border-gray-300 cursor-pointer group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="about-quote-cta"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 backdrop-blur-md bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all border border-white/20 cursor-pointer"
              >
                Consult With Engineers
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Discover Our Story Frosted Modal */}
      <AnimatePresence>
        {isStoryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a]/90 border border-white/20 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white bg-white/5 border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-[10px] font-mono tracking-[0.4em] text-gray-400 uppercase mb-2">
                Silver Shade Architectural Standards
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white mb-4">
                Engineered for Dubai's Architectural Vision
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                <p>
                  Founded to meet the exacting aesthetic and structural demands of Dubai&apos;s luxury real estate and commercial sectors, <strong>{COMPANY_CONFIG.brandName}</strong> unites modern European minimal profiling with robust Middle Eastern climate engineering.
                </p>
                <p>
                  Every villa opening, partition wall, or commercial glass facade is treated as a bespoke architectural installation. We collaborate directly with homeowners, architects, interior designers, and prime contractors to translate complex technical drawings into seamlessly operating reality.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-4 border-t border-white/10">
                  <div className="p-3.5 bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <Compass className="w-4 h-4 text-gray-300 mb-2" />
                    <div className="text-xs font-semibold text-white">Custom Engineering</div>
                    <div className="text-[10px] text-gray-400 mt-1 font-light">Full CAD shop drawings &amp; structural calculations</div>
                  </div>
                  <div className="p-3.5 bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <Cpu className="w-4 h-4 text-gray-300 mb-2" />
                    <div className="text-xs font-semibold text-white">CNC Precision</div>
                    <div className="text-[10px] text-gray-400 mt-1 font-light">High-tolerance mitering and acoustic sealing</div>
                  </div>
                  <div className="p-3.5 bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-gray-300 mb-2" />
                    <div className="text-xs font-semibold text-white">Turnkey Warranty</div>
                    <div className="text-[10px] text-gray-400 mt-1 font-light">Certified installation &amp; long-term durability</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setIsStoryModalOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-slate-200"
                >
                  Request Technical Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
