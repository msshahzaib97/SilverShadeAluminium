import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  ShieldAlert, 
  Scale, 
  BookOpen, 
  Award, 
  Sparkles, 
  Search, 
  Building2, 
  Compass, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

export const EditorialGuidelinesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standards' | 'verification' | 'corrections' | 'ethics'>('standards');

  const principles = [
    {
      icon: '📐',
      title: 'Architectural & Engineering Precision',
      arabicTitle: 'الدقة الهندسية والمعمارية',
      desc: 'All technical specifications—including aluminium alloy designations (6063-T6 virgin billet), glass U-values, acoustic STC ratings, and structural wind-load limits—are verified against international ASTM, BS EN, and UAE municipal standards.'
    },
    {
      icon: '🛡️',
      title: 'UAE Municipal & Estidama Alignment',
      arabicTitle: 'الالتزام بمعايير بلديات الإمارات واستدامة',
      desc: 'Content published on Silver Shade strictly reflects Abu Dhabi Department of Municipalities and Transport (DMT), Dubai Municipality (DM), and Estidama Pearl Building Rating System requirements for energy conservation and thermal efficiency.'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing & Cost Integrity',
      arabicTitle: 'الشفافية في التكاليف والأسعار',
      desc: 'Estimated price ranges per square meter or linear meter provided across our calculators and guides reflect real Musaffah factory fabrication costs, direct raw material tariffs, and certified installation rates with zero misleading promotional claims.'
    },
    {
      icon: '🔍',
      title: 'Peer-Reviewed Technical Authorship',
      arabicTitle: 'مراجعة فنية من كبار المهندسين',
      desc: 'Every technical article, architectural guide, and FAQ answer is authored and audited by qualified structural facade engineers or master craftsmen before publication.'
    }
  ];

  const reviewWorkflow = [
    {
      step: '01 / TECHNICAL DRAFTING',
      title: 'Expert Authoring',
      detail: 'Initial draft created by specialized facade engineers, quantity surveyors, or heritage majlis craftsmen.'
    },
    {
      step: '02 / ENGINEERING VERIFICATION',
      title: 'Standards & Code Audit',
      detail: 'Rigorous validation against ASTM C1036 (flat glass), ASTM E283 (air leakage), ASTM E331 (water penetration), and local seismic/wind codes.'
    },
    {
      step: '03 / FACTORY & FIELD BENCHMARKING',
      title: 'Shop-Floor Realism',
      detail: 'Fabrication tolerances checked against Musaffah factory tooling parameters and field installation history.'
    },
    {
      step: '04 / PERIODIC REVISION',
      title: 'Quarterly Code Updates',
      detail: 'Continuous updates to maintain sync with updated UAE building codes, new thermal-break profile innovations, and solar glass technologies.'
    }
  ];

  return (
    <section id="editorial-guidelines" className="py-24 sm:py-32 bg-white dark:bg-[#040705] border-t border-emerald-900/10 dark:border-emerald-500/10 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-emerald-600 dark:bg-emerald-400" />
            <span className="text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              EDITORIAL &amp; TECHNICAL PUBLISHING STANDARDS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
            Our Commitment to <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Technical Integrity</span> &amp; Accuracy
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            At Silver Shade Aluminium &amp; Glass Works LLC, we believe that architectural decisions require unambiguous, verifiable, and scientifically grounded information. These Editorial Guidelines govern every technical guide, specification sheet, cost calculator, and FAQ published on our digital platforms.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#f8faf9] dark:bg-[#0a0f0c] p-6 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-all shadow-sm"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {p.title}
              </h3>
              <div className="text-[11px] font-arabic text-emerald-600 dark:text-emerald-400 font-medium mb-3" dir="rtl">
                {p.arabicTitle}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Deep Dive Tabs */}
        <div className="bg-[#f8faf9] dark:bg-[#0a0f0c] border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-xl">
          
          <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-white/10 pb-4 mb-8">
            {[
              { id: 'standards', label: 'Technical Fact-Checking & Sources' },
              { id: 'verification', label: 'Peer-Review Workflow' },
              { id: 'corrections', label: 'Corrections & Transparency Policy' },
              { id: 'ethics', label: 'Commercial Independence & Ethics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {activeTab === 'standards' && (
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span>Primary Architectural Reference Sources &amp; Testing Codes</span>
                </h4>
                <p>
                  All performance figures quoted on this website (including acoustic decibel attenuation, structural moment of inertia for 10cm/10.5cm aluminium mullions, and thermal transmittance values) are derived directly from accredited laboratory test reports and standard bodies:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-xs uppercase">ASTM International:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">ASTM E283 (Air Infiltration), ASTM E330 (Structural Performance), ASTM E331 (Water Penetration).</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-xs uppercase">UAE Municipal Regulations:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">Abu Dhabi DMT &amp; Dubai Municipality Green Building Regulations (Al Sa'fat) and Estidama standards.</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-xs uppercase">Qualicoat &amp; Qualanod:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">European specifications for architectural powder coating and anodizing on aluminium extrusions.</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-xs uppercase">Spanish Clay Guild (Qarmeed):</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">EN 1304 standards for frost, thermal shock, and flexural strength resistance in terracotta tiles.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'verification' && (
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-500" />
                  <span>4-Stage Technical Review Workflow</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {reviewWorkflow.map((st, idx) => (
                    <div key={idx} className="p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                        {st.step}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                        {st.title}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        {st.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'corrections' && (
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-emerald-500" />
                  <span>Prompt Corrections &amp; Technical Clarifications</span>
                </h4>
                <p>
                  We strive for 100% technical and typographic accuracy. If an architectural guideline, material specification, or municipal reference requires updating due to code revisions or engineering advancements, we enact corrections within 24 hours of notification.
                </p>
                <p>
                  To suggest an editorial correction or request technical verification from our engineering board, please email our engineering office at: <span className="text-emerald-600 dark:text-emerald-400 font-bold">engineering@silvershadealuminium.com</span>.
                </p>
              </div>
            )}

            {activeTab === 'ethics' && (
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-500" />
                  <span>Editorial Independence &amp; Consumer Trust</span>
                </h4>
                <p>
                  Our technical comparisons (e.g., thermal-break vs. non-thermal systems, 10cm vs. 10.5cm door tracks, or authentic Spanish terracotta vs. imitation metal tiles) are designed to provide honest engineering trade-offs regarding durability, initial cost, thermal performance, and maintenance requirements.
                </p>
                <p>
                  We do not publish deceptive advertising, false guarantees, or inflated performance claims. All warranties (up to 15 years on structural profiles and hardware) are backed by legally binding contract terms.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
