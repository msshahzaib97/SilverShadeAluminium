import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Search, Check, X, Sparkles, ArrowRight, Languages } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES, LanguageOption } from '../context/LanguageContext';

export const LanguageSwitcherModal: React.FC = () => {
  const { currentLanguage, setLanguage, isLanguageModalOpen, closeLanguageModal, t } = useLanguage();
  const [search, setSearch] = useState('');

  const filteredLanguages = useMemo(() => {
    if (!search.trim()) return SUPPORTED_LANGUAGES;
    const q = search.toLowerCase();
    return SUPPORTED_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        (lang.region && lang.region.toLowerCase().includes(q)) ||
        lang.code.toLowerCase().includes(q)
    );
  }, [search]);

  // Featured top GCC/UAE languages for fast 1-click access
  const primaryLanguages = SUPPORTED_LANGUAGES.slice(0, 6);

  const handleSelect = (code: string) => {
    setLanguage(code);
    closeLanguageModal();
  };

  if (!isLanguageModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLanguageModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#0a100d] border border-emerald-500/30 rounded-2xl shadow-2xl shadow-emerald-950/60 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-gradient-to-r from-emerald-950/40 via-transparent to-transparent flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                <Globe className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t('lang_modal_title', 'Select Your Preferred Language')}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    18+ Languages
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {t('lang_modal_subtitle', 'Browse all engineering services, Kuwaiti tents, and cost estimates in your native language.')}
                </p>
              </div>
            </div>

            <button
              onClick={closeLanguageModal}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close language selector"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-4 sm:px-6 bg-white/[0.02] border-b border-white/5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={t('lang_search_placeholder', 'Search language / ابحث عن لغة...')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 focus:border-emerald-400 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none transition-colors"
                autoFocus
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-white/10 px-1.5 py-0.5 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Quick Popular Chips */}
          {!search && (
            <div className="px-6 py-3 bg-emerald-950/20 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Popular:
              </span>
              <div className="flex items-center gap-2">
                {primaryLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
                      currentLanguage.code === lang.code
                        ? 'bg-emerald-600 text-white font-bold shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Languages Grid */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredLanguages.map((lang) => {
                const isSelected = currentLanguage.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                      isSelected
                        ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-md shadow-emerald-950/40'
                        : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/5 hover:border-emerald-500/40 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl shrink-0 drop-shadow-sm">{lang.flag}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">
                            {lang.nativeName}
                          </span>
                          <span className="text-xs text-slate-400 font-normal">
                            ({lang.name})
                          </span>
                          {lang.dir === 'rtl' && (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">
                              RTL
                            </span>
                          )}
                        </div>
                        {lang.region && (
                          <span className="text-[11px] text-slate-400 block line-clamp-1 mt-0.5">
                            {lang.region}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 pl-2">
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border border-white/10 group-hover:border-emerald-400/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {filteredLanguages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-400 text-sm">No languages found matching &quot;{search}&quot;</p>
                <button
                  onClick={() => setSearch('')}
                  className="mt-3 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="p-4 sm:px-6 bg-[#060b08] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-emerald-400" />
              <span>Full real-time translation powered by Google Neural AI Engine</span>
            </div>
            <button
              onClick={closeLanguageModal}
              className="w-full sm:w-auto px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors"
            >
              Done / Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
