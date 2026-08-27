import React from 'react';
import { Layers, Shield, Sparkles, Wind } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const materials = [
    { code: '01 / THERMAL', name: 'Thermal-Break Profiles', icon: Layers, note: 'Superior heat barrier for UAE climate' },
    { code: '02 / ACOUSTIC', name: 'Acoustic & Solar Glazing', icon: Wind, note: 'Low-E double & triple glazed glass' },
    { code: '03 / FINISH', name: 'Marine-Grade Powder', icon: Shield, note: 'Qualicoat Class 2 certified finishes' },
    { code: '04 / ACCURACY', name: 'Sub-Millimeter Tolerances', icon: Sparkles, note: 'In-house CNC engineered joinery' },
  ];

  return (
    <section id="trust-strip" className="relative py-14 sm:py-16 bg-white dark:bg-[#080d0a] border-y border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Main Statement */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></div>
              <span className="text-[10px] tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase font-bold">
                Engineering Standard
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900 dark:text-white mb-3">
              Modern Architecture. <span className="text-emerald-700 dark:text-emerald-400/90 font-medium">Precision Craftsmanship.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
              From concept and measurement to fabrication and installation, Silver Shade Aluminium delivers refined solutions designed around your space.
            </p>
          </div>

          {/* Technical Material Frosted Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 flex-1">
            {materials.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  id={`material-badge-${idx}`}
                  className="p-4.5 rounded-none backdrop-blur-md bg-emerald-50/50 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-emerald-50/80 dark:hover:bg-white/[0.06] transition-all flex flex-col justify-between shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] text-emerald-800 dark:text-emerald-400/80 tracking-wider uppercase font-semibold">
                      {m.code}
                    </span>
                    <Icon className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white tracking-wide">{m.name}</div>
                    <div className="text-[10px] text-slate-500 dark:text-gray-400 mt-1 line-clamp-1 font-normal">{m.note}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

