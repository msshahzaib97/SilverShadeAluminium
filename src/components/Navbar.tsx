import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle, Globe } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { LanguageDropdown } from './LanguageDropdown';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, openLanguageModal, currentLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_home', 'Home'), href: '#home' },
    { name: t('nav_about', 'About'), href: '#about' },
    { name: t('nav_services', 'Services'), href: '#services' },
    { name: t('nav_windows', 'Windows'), href: '#windows-showcase' },
    { name: t('nav_majlis', 'Majlis'), href: '#majlis-showcase' },
    { name: t('nav_tents', 'Tents (خيام)'), href: '#kuwaiti-tent-showcase' },
    { name: t('nav_railings', 'Railings'), href: '#railings-showcase' },
    { name: t('nav_projects', 'Projects'), href: '#projects' },
    { name: t('nav_why_us', 'Why Us'), href: '#why-us' },
    { name: t('nav_faq', 'FAQ'), href: '#faq' },
    { name: t('nav_contact', 'Contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Silver Shade Aluminium, I would like to inquire about aluminium and glass solutions for my property."
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? 'bg-[#060a08]/90 border-b border-emerald-500/15 py-3.5 shadow-lg shadow-emerald-950/20'
            : 'bg-black/50 border-b border-white/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center group focus:outline-none"
            aria-label="Silver Shade Aluminium & Glass - Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-widest text-slate-300">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                id={`nav-link-${idx}`}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1 relative hover:opacity-100 whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right CTAs: Language Dropdown, Quote Button, WhatsApp */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Language Switcher Dropdown */}
            <LanguageDropdown />

            {/* Free Quote CTA */}
            <button
              id="header-quote-cta"
              onClick={() => onOpenQuoteModal()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/40 px-4 sm:px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer backdrop-blur-sm shadow-md shadow-emerald-600/20 whitespace-nowrap"
            >
              {t('btn_free_quote', 'Get a Free Quote')}
            </button>

            {/* WhatsApp Quick Icon */}
            <button
              id="header-whatsapp-btn"
              onClick={handleWhatsAppClick}
              title="Chat on WhatsApp"
              className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center cursor-pointer shadow-md shadow-emerald-700/30 border border-emerald-400/40 transition-all hover:scale-105 active:scale-95 text-white shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions (Language Switcher, WhatsApp & Menu Toggle) */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageDropdown isMobile />
            
            <button
              id="mobile-whatsapp-btn"
              onClick={handleWhatsAppClick}
              className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[64px] z-40 bg-[#060a08]/98 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col justify-between overflow-y-auto lg:hidden text-white"
          >
            <div className="space-y-4 pt-2">
              {/* Language Switcher in Mobile Drawer */}
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/25 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{currentLanguage.flag}</span>
                  <div>
                    <span className="text-xs font-bold text-white block">{currentLanguage.nativeName}</span>
                    <span className="text-[10px] text-emerald-400">({currentLanguage.name})</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLanguageModal();
                  }}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <Globe className="w-3 h-3" />
                  <span>Change</span>
                </button>
              </div>

              <div className="text-[10px] tracking-[0.4em] text-emerald-400 uppercase pb-2 border-b border-white/10 font-bold">
                Navigation
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <button
                    key={idx}
                    id={`mobile-nav-${idx}`}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-sm font-medium tracking-wider text-slate-200 hover:text-emerald-400 py-2 border-b border-white/5 transition-colors flex items-center justify-between uppercase"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 pb-6 border-t border-white/10">
              <button
                id="mobile-quote-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-center text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md rounded-xl"
              >
                <span>{t('btn_free_quote', 'Get a Free Quote')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="mobile-whatsapp-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full py-3 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 text-center text-xs uppercase tracking-widest font-semibold backdrop-blur-md flex items-center justify-center gap-2 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t('btn_chat_whatsapp', 'Chat on WhatsApp')}</span>
              </button>

              <div className="text-center pt-2 text-[11px] text-slate-400">
                {COMPANY_CONFIG.location} • {COMPANY_CONFIG.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

