import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Building2, 
  History, 
  Award, 
  Layers, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { COMPANY_CONFIG, PARENT_COMPANY_DETAILS, OUR_STORY_DATA, WHO_WE_ARE_DATA } from '../data/content';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'who-we-are' | 'our-story' | 'parent-company'>('who-we-are');
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
    <section id="about" className="py-24 sm:py-32 bg-[#f8faf9] dark:bg-[#060a08] relative overflow-hidden transition-colors duration-300">
      {/* Translucent emerald ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-emerald-600 dark:bg-emerald-400"></div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              ABOUT SILVER SHADE ALUMINIUM &amp; GLASS UAE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Precision Engineering for <br />
            <span className="text-emerald-700 dark:text-emerald-400 font-medium">UAE Luxury Architecture</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed font-normal">
            Based with comprehensive 12,000 sq ft fabrication facilities in Musaffah, Abu Dhabi and executing luxury projects across Dubai, Sharjah, and the UAE, Silver Shade Aluminium is an ISO 9001:2015 certified contractor for architectural aluminium and glass systems.
          </p>
        </div>

        {/* Section Navigation Tabs: Who We Are | Our Story | Parent Company */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-emerald-900/10 dark:border-white/10 pb-4">
          <button
            id="tab-who-we-are"
            onClick={() => setActiveTab('who-we-are')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'who-we-are'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                : 'bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </button>

          <button
            id="tab-our-story"
            onClick={() => setActiveTab('our-story')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'our-story'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                : 'bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Our Story &amp; Journey</span>
          </button>

          <button
            id="tab-parent-company"
            onClick={() => setActiveTab('parent-company')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'parent-company'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                : 'bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Parent Company &amp; Group</span>
          </button>
        </div>

        {/* Tab 1: Who We Are */}
        {activeTab === 'who-we-are' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Architectural Photo with Frosted Spec Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden border border-emerald-900/15 dark:border-emerald-500/20 bg-white dark:bg-white/5 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                  alt="Silver Shade Aluminium Precision Architecture & Minimal Glass Door Systems"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Floating Frosted Glass Spec Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 backdrop-blur-xl bg-white/90 dark:bg-black/70 border border-emerald-900/15 dark:border-white/15 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-emerald-800 dark:text-emerald-400 uppercase font-semibold">
                        {WHO_WE_ARE_DATA.tagline}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide mt-1">
                        Virgin 6063-T6 Alloys &amp; Estidama Certified
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] uppercase font-mono tracking-wider backdrop-blur-sm border border-emerald-300/40 dark:border-emerald-500/30 font-semibold">
                      Musaffah, UAE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & 4 Pillars */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight mb-4">
                Master Craftsmen &amp; <span className="text-emerald-700 dark:text-emerald-400 font-medium">Structural Facade Engineers</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                {COMPANY_CONFIG.brandName} is a licensed facade and glazing fabricator uniting European minimal profiling with robust Middle Eastern climate engineering. We engineer turnkey Tabuk Majlis pavilions with Spanish terracotta tile roofs, heavy sliding doors, Curtain Wall 10/5 systems, frameless glass railings, and luxury Kuwaiti winter tents across the UAE.
              </p>

              {/* Core Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {WHO_WE_ARE_DATA.corePrinciples.map((item, idx) => (
                  <div
                    key={idx}
                    id={`who-we-are-principle-${idx}`}
                    className="p-4 backdrop-blur-md bg-white/90 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-emerald-50/50 dark:hover:bg-white/[0.06] transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 mb-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <div className="text-xs font-semibold tracking-wide text-slate-900 dark:text-white">
                        {item.title}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-normal font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="who-we-are-consult-cta"
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-emerald-700/20 cursor-pointer"
                >
                  Request Technical Consultation
                </button>
                <button
                  onClick={() => setActiveTab('our-story')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  <span>Explore Our 15-Year Timeline</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Our Story & Journey Section */}
        {activeTab === 'our-story' && (
          <div className="space-y-10">
            <div className="p-6 sm:p-8 bg-white dark:bg-white/[0.03] border border-emerald-900/15 dark:border-white/10 shadow-sm">
              <div className="max-w-3xl space-y-3 mb-8">
                <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                  {OUR_STORY_DATA.arabicTitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                  {OUR_STORY_DATA.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-normal">
                  {OUR_STORY_DATA.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                {OUR_STORY_DATA.narrative.map((para, i) => (
                  <p key={i} className="p-4 bg-slate-50 dark:bg-black/30 border border-slate-200/80 dark:border-white/5">
                    {para}
                  </p>
                ))}
              </div>

              {/* Milestone Timeline */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <History className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Key Milestones in Our Craftsmanship Legacy</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {OUR_STORY_DATA.milestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-emerald-50/50 dark:bg-white/[0.02] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="inline-block px-2.5 py-0.5 bg-emerald-700 text-white font-mono text-[10px] font-bold tracking-wider mb-2">
                        {m.year}
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                        {m.title}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Parent Company Described Section */}
        {activeTab === 'parent-company' && (
          <div className="p-6 sm:p-8 bg-white dark:bg-white/[0.03] border border-emerald-900/15 dark:border-white/10 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>Sovereign Holding Group</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                  {PARENT_COMPANY_DETAILS.name}
                </h3>
                <div className="text-xs font-arabic text-slate-500 dark:text-gray-400 mt-0.5">
                  {PARENT_COMPANY_DETAILS.arabicName}
                </div>
              </div>

              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-xs">
                <div className="text-slate-600 dark:text-slate-400 font-mono text-[10px] uppercase">Commercial License</div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">{PARENT_COMPANY_DETAILS.registrationNumber}</div>
                <div className="text-[10px] text-emerald-800 dark:text-emerald-400">Abu Dhabi Chamber &amp; ADDED Registered</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
              {PARENT_COMPANY_DETAILS.overview}
            </p>

            {/* 4 Sovereign Operating Divisions */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                Specialized Operating Divisions &amp; Plants
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PARENT_COMPANY_DETAILS.divisions.map((div, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/5 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                      <span>{div.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed pl-4">
                      {div.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Governance Note */}
            <div className="p-4 bg-emerald-950/40 dark:bg-emerald-950/20 border border-emerald-800/30 text-[11px] text-slate-300 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{PARENT_COMPANY_DETAILS.governance}</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};


