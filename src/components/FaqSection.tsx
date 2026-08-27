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
    <section id="faq" className="py-24 sm:py-32 bg-[#f8faf9] dark:bg-[#060a08] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
            <span className="text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
            Clear Answers to Your <span className="text-emerald-700 dark:text-emerald-400 font-normal">Inquiries</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-normal leading-relaxed max-w-xl mx-auto">
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
                className={`rounded-none border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen
                    ? 'bg-white dark:bg-white/[0.05] border-emerald-600/50 dark:border-emerald-500/50'
                    : 'bg-white/80 dark:bg-white/[0.02] border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  <div className={`w-8 h-8 rounded-full border border-emerald-900/15 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-600 text-white border-emerald-600 dark:bg-emerald-500 dark:border-emerald-500' : ''}`}>
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
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed border-t border-slate-100 dark:border-white/5 font-normal">
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
        <div className="mt-12 p-6 rounded-none bg-white dark:bg-white/[0.03] border border-emerald-900/15 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-none bg-emerald-50 dark:bg-white/5 text-emerald-700 dark:text-emerald-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Have a specific architectural drawing or BOQ?</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400">Our senior estimating engineers respond directly via WhatsApp or email.</div>
            </div>
          </div>
          <button
            onClick={handleWhatsAppHelp}
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};

