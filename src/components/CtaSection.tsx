import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface CtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuoteModal }) => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Silver Shade Aluminium, I would like to discuss my architectural aluminium & glass project in Dubai."
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="cta-banner" className="relative py-28 sm:py-36 overflow-hidden bg-black">
      {/* High-Resolution Cinematic Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=90"
          alt="Dubai Modern Luxury Villa Glass Architecture"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
          loading="lazy"
        />
        {/* Deep Gradient Overlays for readability and luxury tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-200">
            START YOUR ARCHITECTURAL UPGRADE
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Ready to Transform <span className="silver-shimmer">Your Space?</span>
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          From elegant aluminium doors to complete glass and aluminium architectural solutions, we&apos;re ready to bring your vision to life.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-quote-btn"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-slate-200 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-sm transition-all flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            id="cta-whatsapp-btn"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] rounded-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Location Guarantee */}
        <div className="mt-10 text-xs text-slate-400">
          Serving Palm Jumeirah, Emirates Hills, Dubai Hills, Downtown, DIFC &amp; All UAE Emirates
        </div>
      </div>
    </section>
  );
};
