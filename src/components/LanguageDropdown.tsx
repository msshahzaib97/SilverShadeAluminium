import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Check, MoreHorizontal } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../context/LanguageContext';

interface LanguageDropdownProps {
  isMobile?: boolean;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ isMobile = false }) => {
  const { currentLanguage, setLanguage, openLanguageModal, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const quickLanguages = SUPPORTED_LANGUAGES.slice(0, 6);

  const handleSelect = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 rounded-lg border transition-all cursor-pointer ${
          isMobile
            ? 'px-2.5 py-1.5 bg-white/5 border-white/15 text-white text-xs'
            : 'px-3 py-1.5 bg-emerald-950/40 hover:bg-emerald-900/50 border-emerald-500/30 hover:border-emerald-500/60 text-slate-200 hover:text-white text-xs font-semibold shadow-sm backdrop-blur-md'
        }`}
        title="Change Website Language / تغيير لغة الموقع"
      >
        <span className="text-base leading-none">{currentLanguage.flag}</span>
        <span className="font-semibold tracking-wide">{currentLanguage.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-emerald-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 bg-[#080d0a] border border-emerald-500/30 rounded-xl shadow-2xl shadow-black/80 py-2 z-50 overflow-hidden"
          >
            <div className="px-3 py-1.5 border-b border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
              <span>Select Language</span>
              <span className="text-emerald-400 font-bold">{currentLanguage.code.toUpperCase()}</span>
            </div>

            <div className="py-1 max-h-60 overflow-y-auto no-scrollbar">
              {quickLanguages.map((lang) => {
                const isSelected = currentLanguage.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600/20 text-emerald-300 font-bold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.flag}</span>
                      <div className="text-left">
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="text-[10px] text-slate-400 ml-1.5">({lang.name})</span>
                      </div>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>

            {/* All Languages Link Trigger */}
            <div className="pt-1 mt-1 border-t border-white/5 px-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openLanguageModal();
                }}
                className="w-full py-1.5 px-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 hover:text-emerald-300 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Globe className="w-3 h-3" />
                <span>More Languages (18+)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
