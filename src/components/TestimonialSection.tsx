import React from 'react';
import { Star, Quote, Building2, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#090a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-slate-400 uppercase">
              CLIENT EXPERIENCES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            What Our <span className="silver-shimmer">Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Direct feedback from homeowners, architects, and luxury property developers across Dubai.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              id={`testimonial-card-${idx}`}
              className="p-8 rounded-sm bg-[#121418] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark Watermark */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-slate-200">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-slate-200 text-slate-200" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-bold text-white tracking-wide">
                  {t.clientName}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>{t.role}</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </span>
                </div>
                <div className="mt-2 text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  <span>{t.projectType}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
