import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA, COMPANY_CONFIG } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppHelp = () => {
    const msg = encodeURIComponent("Hello Silver Shade Aluminium, I have a question regarding your glass and aluminium systems.");
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0c0d0e] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-slate-400 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Clear Answers to Your <span className="silver-shimmer">Inquiries</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our custom engineering, thermal specifications, and Dubai installation process.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                id={`faq-item-${index}`}
                className={`rounded-sm border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121418] border-white/30'
                    : 'bg-[#121418]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-500 font-normal">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Question Support Box */}
        <div className="mt-12 p-6 rounded-sm bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-sm bg-white/5 text-slate-300">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Have a specific architectural drawing or BOQ?</div>
              <div className="text-[11px] text-slate-400">Our senior estimating engineers respond directly via WhatsApp or email.</div>
            </div>
          </div>
          <button
            onClick={handleWhatsAppHelp}
            className="w-full sm:w-auto px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
