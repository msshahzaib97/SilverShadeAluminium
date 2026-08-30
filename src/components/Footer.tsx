import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Phone, Mail, MessageCircle, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface FooterProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceList = [
    'Tabuk & Qarmeed Majlis (مجلس طابوق)',
    '10cm & 10.5cm Aluminium Windows',
    'Sliding & French Hinge Doors',
    'Curtain Wall 10/5 & 8/5 Facades',
    'Aluminium Kitchen Cabinets',
    'Frameless Glass Balustrades & Railings',
    'Car Parking Shades & Pergolas',
    'Labour & Royal Luxury Tents',
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer id="main-footer" className="bg-[#050806] dark:bg-[#030504] text-slate-400 text-xs border-t border-emerald-900/30 dark:border-emerald-500/20 pt-16 pb-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-emerald-950/80 dark:border-white/10">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#home" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-emerald-500/40 bg-emerald-950/40 flex items-center justify-center">
                  <span className="text-xs font-bold text-emerald-400 tracking-widest">S</span>
                </div>
                <div>
                  <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase block">
                    SILVER SHADE
                  </span>
                  <span className="text-[9px] tracking-[0.3em] text-emerald-400 uppercase font-medium">
                    ALUMINIUM • ABU DHABI &amp; DUBAI
                  </span>
                </div>
              </a>

              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
                {COMPANY_CONFIG.tagline}. Specializing in bespoke minimal sliding systems, acoustic glass partitioning, high-performance windows, and luxury architectural envelope works across Abu Dhabi, Dubai, and the UAE.
              </p>

              <div className="pt-2 text-[11px] text-emerald-400/80">
                <span>Headquarters: {COMPANY_CONFIG.location}</span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Navigation
              </div>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Services */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Services
              </div>
              <ul className="space-y-2">
                {serviceList.map((svc) => (
                  <li key={svc}>
                    <button
                      onClick={() => {
                        scrollTo('#services');
                        onOpenQuoteModal(svc);
                      }}
                      className="hover:text-emerald-400 transition-colors cursor-pointer text-left flex items-center gap-1 group"
                    >
                      <span>{svc}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Contact Details
              </div>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_CONFIG.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="tel:+971523352536" className="hover:underline text-slate-200">+971 52 335 2536</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="tel:+971566076460" className="hover:underline text-slate-200">+971 56 607 6460</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="https://wa.me/971523352536" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-medium">
                    +971 52 335 2536 / +971 56 607 6460
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:underline text-slate-200">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* UAE Regional Coverage & Local SEO Keywords */}
          <div className="py-6 border-b border-emerald-950/80 dark:border-white/10 text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 leading-relaxed">
              <span className="font-semibold text-emerald-400 uppercase tracking-wider">Service Areas &amp; Fast Site Visits:</span>
              <span className="text-slate-300">Musaffah Industrial</span> • 
              <span className="text-slate-300">Abu Dhabi City</span> • 
              <span className="text-slate-300">Khalifa City</span> • 
              <span className="text-slate-300">Mohammed Bin Zayed City (MBZ)</span> • 
              <span className="text-slate-300">Saadiyat &amp; Yas Island</span> • 
              <span className="text-slate-300">Al Ain</span> • 
              <span className="text-slate-300">Dubai (Palm Jumeirah, Dubai Hills, Emirates Hills)</span> • 
              <span className="text-slate-300">Sharjah</span> • 
              <span className="text-slate-300">Ajman &amp; Northern Emirates</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              &copy; 2026 Silver Shade Aluminium &amp; Glass Works LLC. All Rights Reserved. Musaffah, Abu Dhabi, UAE.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Information Modal */}
      <AnimatePresence>
        {activeLegalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white dark:bg-[#111317] border border-emerald-900/20 dark:border-white/20 rounded-none p-6 sm:p-8 text-slate-700 dark:text-slate-300 shadow-2xl"
            >
              <button
                onClick={() => setActiveLegalModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-none bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>

              <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 max-h-72 overflow-y-auto pr-2">
                {activeLegalModal === 'privacy' ? (
                  <>
                    <p>
                      At Silver Shade Aluminium (silvershadealuminium.com), we respect the privacy of our clients and site visitors across Dubai and the UAE.
                    </p>
                    <p>
                      Personal information provided through quotation forms or WhatsApp communications (including names, contact numbers, architectural drawings, and location details) is utilized strictly for preparing engineering quotations and fulfilling contracted works.
                    </p>
                    <p>
                      We do not sell, distribute, or share client information with external third parties without explicit authorization.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      All technical specifications, CAD shop drawings, and engineering quotations provided by Silver Shade Aluminium are subject to site verification and final structural approval.
                    </p>
                    <p>
                      Fabrication tolerances adhere to UAE architectural building codes and international aluminium extrusion standards. All works are backed by standard material and installation warranties as outlined in our project contracts.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveLegalModal(null)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase font-semibold rounded-none"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

