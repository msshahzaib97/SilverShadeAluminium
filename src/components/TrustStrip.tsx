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
    <section id="trust-strip" className="relative py-16 bg-[#0a0a0a] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Main Statement */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-medium">
                Engineering Standard
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-3">
              Modern Architecture. <span className="text-white/40 font-normal">Precision Craftsmanship.</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
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
                  className="p-4 rounded-none backdrop-blur-md bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] text-gray-500 tracking-wider uppercase">
                      {m.code}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white tracking-wide">{m.name}</div>
                    <div className="text-[10px] text-gray-400 mt-1 line-clamp-1 font-light">{m.note}</div>
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
