import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Languages, Sparkles, ChevronUp, Check } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../context/LanguageContext';

export const FloatingLanguageWidget: React.FC = () => {
  const { currentLanguage, setLanguage, openLanguageModal, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const topLanguages = SUPPORTED_LANGUAGES.slice(0, 5);

  const handleSelect = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Quick Popup Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-64 bg-[#080d0a]/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-2xl shadow-black/90 p-3 overflow-hidden text-white"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <Languages className="w-3.5 h-3.5" />
                <span>Switch Language / تغيير اللغة</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                {currentLanguage.code.toUpperCase()}
              </span>
            </div>

            <div className="space-y-1">
              {topLanguages.map((lang) => {
                const isSelected = currentLanguage.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600/30 border border-emerald-500/50 text-white font-bold'
                        : 'bg-white/[0.02] hover:bg-white/10 text-slate-300 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{lang.flag}</span>
                      <span className="font-medium">{lang.nativeName}</span>
                    </div>
                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span className="text-[10px] text-slate-500 uppercase">{lang.code}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* View All Languages Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                openLanguageModal();
              }}
              className="mt-2 w-full py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-300 hover:text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>All 18+ Languages...</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0a100d]/90 hover:bg-[#0e1612] text-white border border-emerald-500/40 shadow-xl shadow-black/80 backdrop-blur-xl transition-all cursor-pointer group"
        title="Change Language / تغيير لغة الموقع"
      >
        <span className="text-lg leading-none">{currentLanguage.flag}</span>
        <span className="text-xs font-bold tracking-wide text-slate-200 group-hover:text-emerald-400 transition-colors">
          {currentLanguage.nativeName}
        </span>
        <Globe className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-45 transition-transform" />
      </motion.button>
    </div>
  );
};
