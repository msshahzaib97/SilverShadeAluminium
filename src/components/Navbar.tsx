import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Windows', href: '#windows-showcase' },
    { name: 'Majlis', href: '#majlis-showcase' },
    { name: 'Railings', href: '#railings-showcase' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
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
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 border border-emerald-400/30 bg-emerald-950/40 backdrop-blur-md flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all shadow-sm">
              <span className="text-xs font-bold tracking-widest text-emerald-300">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                SILVER SHADE
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-emerald-400 uppercase -mt-1 font-semibold">
                Aluminium &amp; Glass
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-semibold uppercase tracking-widest text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-emerald-400 transition-colors cursor-pointer py-1 relative hover:opacity-100"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right CTAs: Quote Button, WhatsApp */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Free Quote CTA */}
            <button
              id="header-quote-cta"
              onClick={() => onOpenQuoteModal()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer backdrop-blur-sm shadow-md shadow-emerald-600/20"
            >
              Get a Free Quote
            </button>

            {/* WhatsApp Quick Icon */}
            <button
              id="header-whatsapp-btn"
              onClick={handleWhatsAppClick}
              title="Chat on WhatsApp"
              className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center cursor-pointer shadow-md shadow-emerald-700/30 border border-emerald-400/40 transition-all hover:scale-105 active:scale-95 text-white"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions (Menu Toggle & WhatsApp) */}
          <div className="flex sm:hidden items-center gap-2.5">
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
            className="fixed inset-0 top-[64px] z-40 bg-white/95 dark:bg-[#060a08]/95 backdrop-blur-2xl border-t border-emerald-900/10 dark:border-white/10 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-4 pt-4">
              <div className="text-[10px] tracking-[0.4em] text-emerald-700 dark:text-emerald-400 uppercase pb-2 border-b border-emerald-900/10 dark:border-white/10 font-bold">
                Navigation
              </div>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    id={`mobile-nav-${link.name.toLowerCase()}`}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-base font-medium tracking-wider text-slate-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-2 border-b border-emerald-900/5 dark:border-white/5 transition-colors flex items-center justify-between uppercase"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-600/60 dark:text-gray-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 pb-6 border-t border-emerald-900/10 dark:border-white/10">
              <button
                id="mobile-quote-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 bg-emerald-600 text-white dark:bg-white dark:text-black text-center text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="mobile-whatsapp-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full py-3 bg-emerald-50 dark:bg-emerald-600/30 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-center text-xs uppercase tracking-widest font-semibold backdrop-blur-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </button>

              <div className="text-center pt-2 text-[11px] text-slate-500 dark:text-gray-400">
                {COMPANY_CONFIG.location} • {COMPANY_CONFIG.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

