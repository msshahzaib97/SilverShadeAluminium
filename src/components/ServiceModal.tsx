import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestQuote }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0c100e] border border-emerald-900/20 dark:border-white/20 backdrop-blur-2xl rounded-none shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-black/70 hover:bg-white dark:hover:bg-black text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/15 backdrop-blur-md transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image with Gradient */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0c100e] via-white/50 dark:via-[#0c100e]/50 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block px-3 py-1 bg-emerald-600/90 text-white text-[10px] font-mono tracking-widest uppercase mb-2 border border-emerald-500/30">
                {service.number} • {service.category}
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                {service.name}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400 mb-2">
                ARCHITECTURAL OVERVIEW
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-normal">
                {service.fullDesc}
              </p>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>TECHNICAL SPECIFICATIONS</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex flex-col"
                  >
                    <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400">{spec.label}</span>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white mt-1">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Features */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>STANDARD INCLUSIONS &amp; PERFORMANCE</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300 font-normal">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-gray-400 font-normal">
                Custom fabrication &amp; Dubai site installation included.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 text-xs text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white uppercase tracking-wider font-mono cursor-pointer"
                >
                  Close
                </button>
                <button
                  id={`request-quote-${service.id}`}
                  onClick={() => {
                    onClose();
                    onRequestQuote(service.name);
                  }}
                  className="w-1/2 sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

