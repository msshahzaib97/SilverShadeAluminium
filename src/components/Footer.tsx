import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  X, 
  Globe, 
  ShieldCheck, 
  Building2, 
  Lock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Share2
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenQuoteModal: (service?: string) => void;
  onOpenLegalModal?: (tab: 'privacy' | 'terms' | 'about' | 'contact' | 'team' | 'editorial' | 'sitemap') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onOpenLegalModal }) => {
  const { currentLanguage, setLanguage, openLanguageModal } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Authors & Team', href: '#team', legalTab: 'team' as const },
    { name: 'Editorial Guidelines', href: '#editorial-guidelines', legalTab: 'editorial' as const },
    { name: 'Tents (خيام)', href: '#kuwaiti-tent-showcase' },
    { name: 'Majlis', href: '#majlis-showcase' },
    { name: 'Windows', href: '#windows-showcase' },
    { name: 'Doors', href: '#doors-showcase' },
    { name: 'Projects', href: '#projects' },
    { name: 'HTML Sitemap', href: '#html-sitemap' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceList = [
    'Kuwaiti Winter Tents (خيمة شتاء سيف حديد كويتي)',
    'Tabuk & Qarmeed Majlis (مجلس طابوق)',
    '10cm & 10.5cm Aluminium Windows',
    'Sliding & French Hinge Doors',
    'Curtain Wall 10/5 & 8/5 Facades',
    'Aluminium Kitchen Cabinets',
    'Frameless Glass Balustrades & Railings',
    'Car Parking Shades & Pergolas',
  ];

  const corporateLinks = [
    { name: 'Privacy Policy (UAE PDPL)', tab: 'privacy' as const, href: '#privacy-policy' },
    { name: 'Terms of Service & Contracts', tab: 'terms' as const, href: '#terms-of-service' },
    { name: 'Editorial Standards & Fact-Checking', tab: 'editorial' as const, href: '#editorial-guidelines' },
    { name: 'Engineering Leadership & Authors', tab: 'team' as const, href: '#team' },
    { name: 'Factory & Company Background', tab: 'about' as const, href: '#about' },
    { name: 'Contact & Free Site Survey', tab: 'contact' as const, href: '#contact' },
    { name: 'Interactive HTML Sitemap', tab: 'sitemap' as const, href: '#html-sitemap' },
  ];

  const socialIcons = [
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/971523352536', hoverClass: 'hover:bg-emerald-500 hover:text-white' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/silvershadealuminium', hoverClass: 'hover:bg-pink-600 hover:text-white' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/silvershadealuminium', hoverClass: 'hover:bg-blue-600 hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/silver-shade-aluminium', hoverClass: 'hover:bg-blue-700 hover:text-white' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@silvershadealuminium', hoverClass: 'hover:bg-red-600 hover:text-white' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLegalClick = (tab: 'privacy' | 'terms' | 'about' | 'contact' | 'team' | 'editorial' | 'sitemap', href: string) => {
    if (onOpenLegalModal) {
      onOpenLegalModal(tab);
    } else {
      scrollTo(href);
    }
  };

  return (
    <>
      <footer id="main-footer" className="bg-[#050806] dark:bg-[#030504] text-slate-400 text-xs border-t border-emerald-900/30 dark:border-emerald-500/20 pt-16 pb-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-14 border-b border-emerald-950/80 dark:border-white/10">
            
            {/* Brand, Parent Company & Short Website Description Column */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#home" aria-label="Silver Shade Aluminium - Back to Top">
                <BrandLogo size="md" showArabic />
              </a>

              {/* Short Website Description */}
              <p className="text-xs text-slate-300 dark:text-slate-400 max-w-sm leading-relaxed font-normal">
                {COMPANY_CONFIG.tagline}. Silver Shade Aluminium is an ISO 9001:2015 certified architectural fabrication contractor specializing in custom acoustic glazing, heavy-duty aluminium profiles, insulated thermal-break windows, French doors, Kuwaiti winter steel tents, and luxury Majlis structures across Abu Dhabi, Dubai, and the UAE.
              </p>

              {/* Parent Company Specification */}
              <div className="p-3 bg-emerald-950/30 border border-emerald-800/30 rounded-lg space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Parent Company &amp; Group</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Operated under <strong className="text-white">{COMPANY_CONFIG.parentCompany}</strong> (Abu Dhabi Commercial Registry CN-1184920).
                </p>
              </div>

              {/* Social Media Links in Footer */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  Connect With Us on Social Media
                </div>
                <div className="flex items-center gap-2">
                  {socialIcons.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow Silver Shade Aluminium on ${social.name}`}
                        className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-200 ${social.hoverClass}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Navigation Menu Links */}
            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Navigation
              </div>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        if (link.legalTab && onOpenLegalModal) {
                          onOpenLegalModal(link.legalTab);
                        } else {
                          scrollTo(link.href);
                        }
                      }}
                      className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Services Menu Links */}
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
                      className="hover:text-emerald-400 transition-colors cursor-pointer text-left flex items-center gap-1 group"
                    >
                      <span>{svc}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Physical Address, Compliance & Direct Contact */}
            <div className="lg:col-span-3 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Compliance &amp; Policy
                </div>
                <ul className="space-y-1.5">
                  {corporateLinks.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleLegalClick(item.tab, item.href)}
                        className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer text-left text-[11px] block"
                      >
                        ▸ {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Physical Address Block */}
              <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-relaxed">
                    <strong className="text-white block">Physical Factory &amp; Office:</strong>
                    <span>{COMPANY_CONFIG.physicalAddress.street}</span>
                    <br />
                    <span>{COMPANY_CONFIG.physicalAddress.city}, {COMPANY_CONFIG.physicalAddress.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href="tel:+971523352536" className="hover:underline text-slate-200">+971 52 335 2536</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href="https://wa.me/971523352536" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-medium">
                    WhatsApp: +971 52 335 2536
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:underline text-slate-200">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* DMCA Badge, Intellectual Property & Trust Bar */}
          <div className="py-5 border-b border-emerald-950/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              {/* DMCA Protected Badge */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-700/50 text-slate-200 hover:border-emerald-500 transition-colors shadow-sm"
                title="DMCA Protected - All Digital Architectural Models, Photographs & Technical Articles Protected"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-[10px] text-black">
                  🛡️
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-[10px] text-white tracking-wider uppercase leading-none">DMCA PROTECTED</span>
                  <span className="text-[9px] text-emerald-400 leading-tight">Digital Millennium Copyright Act</span>
                </div>
              </div>

              {/* IP & ISO Badge */}
              <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px] border-l border-white/10 pl-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 9001:2015 &amp; UAE Civil Defense Compliant Specs</span>
              </div>
            </div>

            <div className="text-center md:text-right text-[11px] text-slate-400">
              <span>All CAD Shop Drawings, Architectural Photography &amp; Engineering Copy are Protected by UAE Copyright Law No. 38 of 2021.</span>
            </div>
          </div>

          {/* UAE Regional Coverage & Local SEO Keywords */}
          <div className="py-5 border-b border-emerald-950/80 dark:border-white/10 text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 leading-relaxed">
              <span className="font-semibold text-emerald-400 uppercase tracking-wider">Service Areas &amp; Fast Site Visits:</span>
              <span className="text-slate-300">Musaffah Industrial</span> • 
              <span className="text-slate-300">Abu Dhabi City</span> • 
              <span className="text-slate-300">Khalifa City</span> • 
              <span className="text-slate-300">Mohammed Bin Zayed City (MBZ)</span> • 
              <span className="text-slate-300">Saadiyat &amp; Yas Island</span> • 
              <span className="text-slate-300">Al Ain</span> • 
              <span className="text-slate-300">Dubai (Palm Jumeirah, Dubai Hills, Emirates Hills)</span> • 
              <span className="text-slate-300">Sharjah</span> • 
              <span className="text-slate-300">Ajman &amp; Northern Emirates</span>
            </div>
          </div>

          {/* Multi-Language Quick Selector in Footer */}
          <div className="py-5 border-b border-emerald-950/80 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-white">Language / اللغة / زبان:</span>
              <span className="text-slate-400">Select your preferred language to translate the whole website</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  currentLanguage.code === 'en'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all font-arabic ${
                  currentLanguage.code === 'ar'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                🇦🇪 العربية
              </button>
              <button
                onClick={() => setLanguage('ur')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all font-arabic ${
                  currentLanguage.code === 'ur'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                🇵🇰 اردو
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  currentLanguage.code === 'hi'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                🇮🇳 हिन्दी
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  currentLanguage.code === 'ru'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                🇷🇺 Русский
              </button>
              <button
                onClick={openLanguageModal}
                className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 text-xs font-semibold transition-all flex items-center gap-1"
              >
                <span>More (18+)...</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar: Copyright Notice, Current Year, Parent Company & Footer Menu Links */}
          <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="text-center lg:text-left">
              <span>Copyright &copy; {currentYear} {COMPANY_CONFIG.brandName} &amp; Glass Works LLC (A Subsidiary of {COMPANY_CONFIG.parentCompany}). All Rights Reserved.</span>
              <span className="block text-[10px] text-slate-500 mt-0.5">Musaffah Industrial Area, Abu Dhabi, United Arab Emirates.</span>
            </div>

            {/* Footer Menu Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-5 gap-y-2">
              <button
                onClick={() => handleLegalClick('privacy', '#privacy-policy')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLegalClick('terms', '#terms-of-service')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLegalClick('about', '#about')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => handleLegalClick('contact', '#contact')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={() => handleLegalClick('team', '#team')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Authors &amp; Team
              </button>
              <button
                onClick={() => handleLegalClick('editorial', '#editorial-guidelines')}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Editorial Guidelines
              </button>
              <a
                href="#html-sitemap"
                className="hover:text-emerald-400 text-emerald-400 font-semibold transition-colors"
              >
                HTML Sitemap
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

