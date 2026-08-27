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
    'Aluminium Doors',
    'Glass Doors',
    'Aluminium Windows',
    'Sliding Systems',
    'Glass Partitions',
    'Wardrobes',
    'Facades',
    'Pergolas',
    'Railings',
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer id="main-footer" className="bg-[#07080a] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#home" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm border border-white/40 bg-white/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-white tracking-widest">S</span>
                </div>
                <div>
                  <span className="text-sm font-bold tracking-[0.2em] text-white uppercase block">
                    SILVER SHADE
                  </span>
                  <span className="text-[9px] tracking-[0.3em] text-slate-400 uppercase font-medium">
                    ALUMINIUM
                  </span>
                </div>
              </a>

              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
                {COMPANY_CONFIG.tagline}. Specializing in bespoke minimal sliding systems, acoustic glass partitioning, high-performance windows, and luxury architectural envelope works.
              </p>

              <div className="pt-2 text-[11px] text-slate-400">
                <span>Location: {COMPANY_CONFIG.location}</span>
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
                      className="hover:text-white transition-colors cursor-pointer text-left"
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
                      className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1 group"
                    >
                      <span>{svc}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dubai Contact */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Dubai Contact
              </div>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_CONFIG.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{COMPANY_CONFIG.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-medium">{COMPANY_CONFIG.whatsappDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:underline text-slate-200">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              &copy; 2026 Silver Shade Aluminium. All Rights Reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
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
              className="relative w-full max-w-lg bg-[#111317] border border-white/20 rounded-sm p-6 sm:p-8 text-slate-300 shadow-2xl"
            >
              <button
                onClick={() => setActiveLegalModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-sm bg-white/5 border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>

              <div className="space-y-3 text-xs leading-relaxed text-slate-400 max-h-72 overflow-y-auto pr-2">
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

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveLegalModal(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-semibold rounded-sm"
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
