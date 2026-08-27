import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: 'Villa Slim Sliding Doors', text: 'Hello, I would like to get a quote for slim sliding doors for my villa in Dubai.' },
    { label: 'Glass Partitions for Office', text: 'Hi Silver Shade, I need acoustic glass partitions for an office space in Dubai.' },
    { label: 'Motorized Aluminium Pergola', text: 'Hello, I am interested in a bioclimatic motorized aluminium pergola.' },
    { label: 'General Project Consultation', text: 'Hello Silver Shade Aluminium, I have architectural drawings to share for an estimate.' },
  ];

  const handleStartChat = (customText?: string) => {
    const text = encodeURIComponent(customText || "Hello Silver Shade Aluminium, I would like to inquire about your aluminium and glass solutions in Dubai.");
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-40">
      
      {/* Quick Chat Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-16 right-0 w-80 sm:w-88 bg-white dark:bg-[#121418] border border-emerald-900/20 dark:border-white/20 rounded-none shadow-2xl overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-emerald-50 dark:bg-[#181b22] p-4 border-b border-emerald-900/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-none bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white tracking-wide">
                    Silver Shade Aluminium
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Engineering Team Online (Dubai)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-none text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-3 bg-white dark:bg-[#0f1115]">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Welcome to Silver Shade Aluminium. How can our architectural engineers assist you today?
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 dark:text-emerald-400">
                  Quick Inquiries
                </div>
                {quickPrompts.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStartChat(q.text)}
                    className="w-full text-left p-2 rounded-none bg-slate-50 dark:bg-white/5 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-white/5 text-[11px] text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="truncate">{q.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-white shrink-0 ml-1" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleStartChat()}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-none transition-colors flex items-center justify-center gap-2 mt-3 cursor-pointer shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Open Direct Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button with Tooltip */}
      <div className="relative group">
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-none bg-white dark:bg-[#121418] border border-emerald-900/20 dark:border-white/20 text-slate-900 dark:text-white text-xs font-semibold tracking-wider whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Chat With Us
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-white dark:bg-[#121418] border-t border-r border-emerald-900/20 dark:border-white/20 transform rotate-45"></div>
          </div>
        )}

        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-2 border-emerald-400/40 relative cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7" />
              {/* Pulse Indicator */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white dark:border-[#0c0d0e] animate-ping"></span>
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white dark:border-[#0c0d0e]"></span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};

