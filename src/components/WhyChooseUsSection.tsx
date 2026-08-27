import React from 'react';
import { Compass, Palette, Sliders, ShieldCheck, UserCheck, MapPin } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      id: 'reason-1',
      code: '01 / CRAFTSMANSHIP',
      title: 'Precision Craftsmanship',
      desc: 'Every detail is measured, fabricated and installed with care.',
      icon: Compass,
      detail: 'Laser metrology & CNC alignment ensure zero rattling and tight weather seals.',
    },
    {
      id: 'reason-2',
      code: '02 / ARCHITECTURE',
      title: 'Modern Design',
      desc: 'Clean, minimal and contemporary solutions for modern architecture.',
      icon: Palette,
      detail: 'Ultra-slim framing that maximizes panoramic daylight and glass exposure.',
    },
    {
      id: 'reason-3',
      code: '03 / TAILORED',
      title: 'Custom Solutions',
      desc: 'Every project is tailored to the client\'s space and requirements.',
      icon: Sliders,
      detail: 'From custom RAL colors to bespoke structural facade geometries.',
    },
    {
      id: 'reason-4',
      code: '04 / LONGEVITY',
      title: 'Quality & Durability',
      desc: 'Materials and finishing selected for long-term performance.',
      icon: ShieldCheck,
      detail: 'Marine-grade powder coating resistant to desert UV radiation and humidity.',
    },
    {
      id: 'reason-5',
      code: '05 / DEDICATION',
      title: 'Professional Service',
      desc: 'Clear communication from consultation to final installation.',
      icon: UserCheck,
      detail: 'Dedicated project managers keeping your timeline and site coordination clear.',
    },
    {
      id: 'reason-6',
      code: '06 / LOCAL',
      title: 'Dubai Based',
      desc: 'Serving residential and commercial clients across Dubai and UAE.',
      icon: MapPin,
      detail: 'Rapid site response, local fabrication facilities, and prompt maintenance support.',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-white dark:bg-[#080d0a] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              THE SILVER SHADE ADVANTAGE
            </span>
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
            Why <span className="text-emerald-700 dark:text-emerald-400 font-normal">Silver Shade Aluminium?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-normal leading-relaxed">
            Delivering the highest standards of architectural metalwork and glazing across residential villas, commercial towers, and interior fit-outs.
          </p>
        </div>

        {/* Six Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`why-card-${idx}`}
                className="group relative p-8 rounded-none backdrop-blur-xl bg-slate-50/70 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-emerald-50/40 dark:hover:bg-white/[0.06] transition-all duration-400 flex flex-col justify-between shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 bg-emerald-100/80 dark:bg-white/5 border border-emerald-300/40 dark:border-white/10 flex items-center justify-center text-emerald-800 dark:text-emerald-400 group-hover:text-white group-hover:bg-emerald-600 dark:group-hover:bg-emerald-600 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400/80 tracking-wider uppercase">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-medium mb-3">
                    {item.desc}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>

                {/* Subtle bottom line indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-gray-500">
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">STANDARD</span>
                  <span className="text-emerald-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase font-semibold">
                    Guaranteed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

