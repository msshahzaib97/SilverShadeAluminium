import React from 'react';
import { Star, Quote, Building2, MapPin, ShieldCheck, CheckCircle2, Award, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA, SOCIAL_PROOF_METRICS } from '../data/content';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white dark:bg-[#080d0a] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
            <span className="text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              SOCIAL PROOF &amp; CLIENT TESTIMONIALS
            </span>
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
            Trusted by Homeowners Across <span className="text-emerald-700 dark:text-emerald-400 font-medium">Abu Dhabi &amp; Dubai</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-normal leading-relaxed">
            Real feedback from villa owners, architects, and luxury property developers with verified installations.
          </p>
        </div>

        {/* Social Proof Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 mb-1">
              <Star className="w-5 h-5 fill-emerald-600 dark:fill-emerald-400 text-emerald-600 dark:text-emerald-400" />
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">{SOCIAL_PROOF_METRICS.googleRating}</span>
              <span className="text-xs text-slate-500 font-mono">/ 5.0</span>
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Google Reviews Rating</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">{SOCIAL_PROOF_METRICS.reviewsCount} Verified UAE Reviews</div>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">
              {SOCIAL_PROOF_METRICS.villasCompleted}
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Luxury Villas Completed</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Abu Dhabi, Dubai &amp; Al Ain</div>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">
              {SOCIAL_PROOF_METRICS.onTimeDeliveryRate}
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">On-Time Handover Rate</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Guaranteed Contract Milestones</div>
          </div>

          <div className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">
              {SOCIAL_PROOF_METRICS.warrantyYears}
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Structural Warranty</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Direct Manufacturer Guarantee</div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              id={`testimonial-card-${idx}`}
              className="p-8 rounded-none bg-slate-50/80 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark Watermark */}
              <div className="absolute top-6 right-6 text-emerald-600/10 dark:text-emerald-400/10 group-hover:text-emerald-600/20 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5-Star Rating & Verified Project Stamp */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-600 dark:fill-emerald-400 text-emerald-600 dark:text-emerald-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 border border-emerald-300/40 dark:border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Project</span>
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-relaxed italic mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
                  {t.clientName}
                </div>
                <div className="text-xs text-slate-500 dark:text-gray-400 mt-0.5 flex items-center gap-1">
                  <span>{t.role}</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5 text-emerald-700 dark:text-emerald-400 font-medium">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </span>
                </div>
                <div className="mt-2 text-[11px] font-medium text-slate-500 dark:text-gray-500 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.projectType}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verified Community Badges */}
        <div className="p-5 bg-emerald-50/50 dark:bg-white/[0.02] border border-emerald-900/10 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Active Villa Installations in Top UAE Communities:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
            {SOCIAL_PROOF_METRICS.topClientCommunities.map((comm, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 font-medium">
                {comm}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


