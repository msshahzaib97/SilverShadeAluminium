import React from 'react';
import { MessageSquare, Ruler, Factory, Hammer } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      code: '01 / DISCOVERY',
      title: 'Consultation',
      desc: 'Tell us about your project and requirements.',
      detail: 'Initial architectural review, aesthetic direction, and preliminary technical budget estimation.',
      icon: MessageSquare,
    },
    {
      num: '02',
      code: '02 / CAD DESIGN',
      title: 'Measurement & Design',
      desc: 'We evaluate the space and develop the right solution.',
      detail: 'High-precision site laser scanning, 2D/3D shop drawings, and structural load analysis.',
      icon: Ruler,
    },
    {
      num: '03',
      code: '03 / CNC MILLING',
      title: 'Fabrication',
      desc: 'Your aluminium and glass system is professionally fabricated.',
      detail: 'CNC profile machining, thermal barrier assembly, and custom glazing in our UAE facility.',
      icon: Factory,
    },
    {
      num: '04',
      code: '04 / HANDOVER',
      title: 'Installation',
      desc: 'Our team installs and finishes the project with precision.',
      detail: 'Certified site installation, weatherproofing, hardware calibration, and final quality sign-off.',
      icon: Hammer,
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-white dark:bg-[#080d0a] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              SEAMLESS EXECUTION
            </span>
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
            From Concept to <span className="text-emerald-700 dark:text-emerald-400 font-normal">Completion</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-normal leading-relaxed max-w-xl mx-auto">
            A disciplined four-stage engineering process guaranteeing uncompromising architectural standards.
          </p>
        </div>

        {/* Desktop Horizontal Process Layout */}
        <div className="hidden lg:block relative">
          {/* Continuous Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent -translate-y-12 z-0"></div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  id={`process-step-${idx}`}
                  className="group flex flex-col items-center text-center p-6 backdrop-blur-xl bg-slate-50/80 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:bg-emerald-50/40 dark:hover:bg-white/[0.06] transition-all shadow-sm hover:shadow-lg"
                >
                  {/* Step Icon / Circle */}
                  <div className="w-14 h-14 bg-emerald-100/80 dark:bg-white/5 border border-emerald-300/40 dark:border-white/15 group-hover:border-emerald-500 flex items-center justify-center text-emerald-800 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-md mb-5 relative">
                    <Icon className="w-5 h-5" />
                    <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-emerald-600 dark:bg-white text-white dark:text-black text-[9px] font-bold font-mono">
                      {step.num}
                    </span>
                  </div>

                  <div className="text-[9px] font-mono text-emerald-800 dark:text-emerald-400/80 uppercase tracking-widest mb-1.5 font-bold">
                    {step.code}
                  </div>

                  <h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-700 dark:text-gray-300 font-medium mb-2">
                    {step.desc}
                  </p>

                  <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-6 ml-4 sm:ml-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} id={`mobile-process-step-${idx}`} className="relative">
                {/* Timeline Dot with Number */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 bg-white dark:bg-[#060a08] border-2 border-emerald-600 flex items-center justify-center text-emerald-700 dark:text-white text-[11px] font-mono font-bold">
                  {step.num}
                </div>

                <div className="p-5 backdrop-blur-xl bg-slate-50 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                    <h3 className="text-base font-medium text-slate-900 dark:text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-gray-300 font-medium mb-1">
                    {step.desc}
                  </p>

                  <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

