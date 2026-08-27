import React from 'react';
import { Sparkles, Shield, Ruler, Wrench } from 'lucide-react';

export const PremiumFeatureSection: React.FC = () => {
  const features = [
    {
      id: 'feature-1',
      code: '01 / AESTHETICS',
      title: 'Modern Aesthetics',
      desc: 'Minimal profiles and refined finishes designed for contemporary architecture.',
      icon: Sparkles,
      tag: 'Architectural Design',
    },
    {
      id: 'feature-2',
      code: '02 / DURABILITY',
      title: 'Premium Materials',
      desc: 'High-quality aluminium and glass selected for durability and long-term performance.',
      icon: Shield,
      tag: 'Quality Standard',
    },
    {
      id: 'feature-3',
      code: '03 / CUSTOM',
      title: 'Made to Measure',
      desc: 'Every solution is designed around your space, dimensions and requirements.',
      icon: Ruler,
      tag: 'Bespoke Fit',
    },
    {
      id: 'feature-4',
      code: '04 / HANDOVER',
      title: 'Professional Installation',
      desc: 'Experienced installation with attention to alignment, finishing and functionality.',
      icon: Wrench,
      tag: 'Certified Handover',
    },
  ];

  return (
    <section id="premium-features" className="py-24 sm:py-32 bg-[#f8faf9] dark:bg-[#060a08] relative overflow-hidden border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      {/* Subtle background glow and geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-emerald-600 dark:bg-emerald-400"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              EXCELLENCE BY DESIGN
            </span>
            <span className="h-[1px] w-8 bg-emerald-600 dark:bg-emerald-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
            Built for Dubai. <span className="text-emerald-700 dark:text-emerald-400 font-normal">Designed for You.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-normal max-w-xl mx-auto leading-relaxed">
            Engineered to endure the unique climatic demands of the UAE while delivering clean, luxury European minimalist profiles.
          </p>

          <div className="mt-8 mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        </div>

        {/* Four Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`feature-block-${idx}`}
                className="group relative p-8 rounded-none backdrop-blur-xl bg-white dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-emerald-50/40 dark:hover:bg-white/[0.06] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-emerald-100/80 dark:bg-white/5 border border-emerald-300/40 dark:border-white/10 flex items-center justify-center text-emerald-800 dark:text-emerald-400 group-hover:text-white group-hover:bg-emerald-600 dark:group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-mono text-[9px] uppercase tracking-widest text-emerald-800 dark:text-emerald-400/80 mb-2 font-bold">
                    {item.code}
                  </div>

                  <h3 className="text-xl font-medium text-slate-900 dark:text-white tracking-tight mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom metadata */}
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-gray-500">
                  <span className="uppercase tracking-wider font-semibold text-emerald-800 dark:text-emerald-400/80">{item.tag}</span>
                  <span className="text-emerald-600 dark:text-gray-300 font-medium uppercase">Verified</span>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

