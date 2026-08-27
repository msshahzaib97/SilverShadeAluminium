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
    <section id="premium-features" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/10">
      {/* Subtle background glow and geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading with frosted glass style */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-white/40"></span>
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.4em] text-gray-400 uppercase">
              EXCELLENCE BY DESIGN
            </span>
            <span className="h-[1px] w-8 bg-white/40"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
            Built for Dubai. <span className="text-white/40 font-normal">Designed for You.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Engineered to endure the unique climatic demands of the UAE while delivering clean, luxury European minimalist profiles.
          </p>

          <div className="mt-8 mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>

        {/* Four Frosted Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`feature-block-${idx}`}
                className="group relative p-8 rounded-none backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/30 transition-all mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-mono text-[9px] uppercase tracking-widest text-gray-500 mb-2">
                    {item.code}
                  </div>

                  <h3 className="text-xl font-light text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom metadata */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="uppercase tracking-wider">{item.tag}</span>
                  <span className="group-hover:text-gray-300 transition-colors uppercase">Verified</span>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
