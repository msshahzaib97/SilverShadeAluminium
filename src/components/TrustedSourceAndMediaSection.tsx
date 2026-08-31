import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Award, 
  FileCheck, 
  BookOpen, 
  Building2, 
  Globe, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TRUSTED_SOURCE_STATEMENT, FEATURED_WEBSITES_DATA } from '../data/content';

export const TrustedSourceAndMediaSection: React.FC = () => {
  return (
    <section id="trusted-source-and-media" className="py-20 sm:py-28 bg-white dark:bg-[#060a08] border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
            <span className="text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              TECHNICAL AUTHORITY &amp; REFERENCES
            </span>
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
            Trusted Source for <span className="text-emerald-700 dark:text-emerald-400 font-medium">UAE Building Compliance</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-normal leading-relaxed">
            Engineering calculations, profile cross-sections, and thermal barrier specifications verified in accordance with UAE municipal standards and international building codes.
          </p>
        </div>

        {/* Part 1: Official Trusted Source Statement Panel */}
        <div className="p-8 sm:p-10 bg-slate-50 dark:bg-white/[0.02] border border-emerald-900/15 dark:border-white/10 shadow-sm mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono uppercase tracking-wider font-bold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{TRUSTED_SOURCE_STATEMENT.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white tracking-tight">
                {TRUSTED_SOURCE_STATEMENT.title}
              </h3>
              <div className="text-xs font-arabic text-slate-500 dark:text-gray-400 mt-1">
                {TRUSTED_SOURCE_STATEMENT.arabicTitle}
              </div>
            </div>

            <div className="p-3 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300">
              <div className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold">Engineering Validation</div>
              <div className="font-semibold text-slate-900 dark:text-white">Estidama PQP / UAE SOE</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed mb-8">
            {TRUSTED_SOURCE_STATEMENT.statement}
          </p>

          {/* 4 Compliance Standards Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {TRUSTED_SOURCE_STATEMENT.compliancePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-black/30 border border-slate-200/80 dark:border-white/5 space-y-2 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {item.standard}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Engineering Seal Signature */}
          <div className="p-4 bg-emerald-950/40 dark:bg-emerald-950/20 border border-emerald-800/30 text-xs text-slate-300 flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-medium">{TRUSTED_SOURCE_STATEMENT.engineerSeal}</span>
          </div>
        </div>

        {/* Part 2: Featured Websites & External Reference Portals */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Authoritative Resource Directory
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Industry &amp; Regulatory Websites Linked
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Direct Outbound Links</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_WEBSITES_DATA.map((site, idx) => (
              <a
                key={idx}
                id={`featured-website-link-${idx}`}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[9px] font-mono uppercase tracking-wider font-semibold">
                      {site.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {site.name}
                  </h4>
                  <div className="text-[10px] font-arabic text-slate-500 dark:text-gray-400 mt-0.5">
                    {site.arabicName}
                  </div>

                  <p className="text-[11px] text-slate-600 dark:text-gray-400 leading-relaxed mt-2.5">
                    {site.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 mt-3 flex items-center justify-between text-[10px] font-mono text-emerald-700 dark:text-emerald-400">
                  <span>Visit Authority Portal</span>
                  <span className="underline opacity-80 group-hover:opacity-100">{site.url.replace('https://', '')}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
