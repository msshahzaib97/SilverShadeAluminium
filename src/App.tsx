import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WindowsSection } from './components/WindowsSection';
import { DoorsSection } from './components/DoorsSection';
import { MajlisTabukSection } from './components/MajlisTabukSection';
import { KuwaitiTentSection } from './components/KuwaitiTentSection';
import { KitchenCabinetSection } from './components/KitchenCabinetSection';
import { RailingsSection } from './components/RailingsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { PremiumFeatureSection } from './components/PremiumFeatureSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TeamSection } from './components/TeamSection';
import { WorkspaceGallerySection } from './components/WorkspaceGallerySection';
import { TrustedSourceAndMediaSection } from './components/TrustedSourceAndMediaSection';
import { EditorialGuidelinesSection } from './components/EditorialGuidelinesSection';
import { ProcessSection } from './components/ProcessSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialSection } from './components/TestimonialSection';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { HtmlSitemap } from './components/HtmlSitemap';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingLanguageWidget } from './components/FloatingLanguageWidget';
import { LanguageSwitcherModal } from './components/LanguageSwitcherModal';
import { QuoteModal } from './components/QuoteModal';
import { LegalAndComplianceModal, LegalModalTab } from './components/LegalAndComplianceModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalModalTab>('privacy');

  const handleOpenQuoteModal = (service?: string) => {
    setSelectedQuoteService(service);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const handleOpenLegalModal = (tab: LegalModalTab = 'privacy') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleCloseLegalModal = () => {
    setLegalModalOpen(false);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      // Only open modal if explicit action triggered via legal hash
      if (hash === '#privacy-policy-modal' || hash === '#privacy-modal') {
        handleOpenLegalModal('privacy');
      } else if (hash === '#terms-of-service-modal' || hash === '#terms-modal') {
        handleOpenLegalModal('terms');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleExploreServices = () => {
    const servicesEl = document.querySelector('#services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-[#f8faf9] dark:bg-[#060a08] text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white overflow-x-hidden transition-colors duration-300 font-sans">
          {/* Sticky Luxury Navigation Header with Theme & Language Toggle */}
          <Navbar 
            onOpenQuoteModal={handleOpenQuoteModal} 
            onOpenLegalModal={handleOpenLegalModal}
          />

          {/* Main Sections */}
          <main>
            {/* Full-Screen Cinematic Hero */}
            <Hero
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onExploreServices={handleExploreServices}
            />

            {/* Trust & Introduction Strip */}
            <TrustStrip />

            {/* Split-Screen About Section (Who We Are, Our Story & Parent Company) */}
            <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

            {/* Trusted Source Statement & Featured Websites Linked */}
            <TrustedSourceAndMediaSection />

            {/* Architectural Services Grid */}
            <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Architectural Windows Systems Showcase */}
            <WindowsSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Architectural Doors Systems Showcase */}
            <DoorsSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Tabuk Majlis & Qarmeed Clay Tile Roofs Showcase */}
            <MajlisTabukSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Kuwaiti Style Winter Steel & Glass Tents Showcase */}
            <KuwaitiTentSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Aluminium Kitchen Cabinets Showcase */}
            <KitchenCabinetSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Architectural Railings & Glass Balustrades */}
            <RailingsSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Featured Projects Portfolio */}
            <FeaturedProjects onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Built for Dubai - Feature Section */}
            <PremiumFeatureSection />

            {/* Why Silver Shade Aluminium */}
            <WhyChooseUsSection />

            {/* Authors & Engineering Leadership Team Section */}
            <TeamSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Team Photos in Workspace & Factory Operations Gallery */}
            <WorkspaceGallerySection />

            {/* Editorial Guidelines & Technical Publishing Standards Section */}
            <EditorialGuidelinesSection />

            {/* From Concept to Completion - 4-Step Process */}
            <ProcessSection />

            {/* Transforming Spaces With Precision - Draggable Before/After Slider */}
            <BeforeAfterSection />

            {/* Client Experiences & Reviews */}
            <TestimonialSection />

            {/* Dramatic Cinematic CTA Section */}
            <CtaSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

            {/* FAQ Accordion Section */}
            <FaqSection />

            {/* Contact & Consultation Section (Contact Us Page Section) */}
            <ContactSection />

            {/* Complete HTML Sitemap Directory for SEO & Direct Page Navigation */}
            <HtmlSitemap 
              onOpenQuoteModal={handleOpenQuoteModal} 
              onOpenLegalModal={handleOpenLegalModal}
            />
          </main>

          {/* Luxury Footer with all 7 Page Links */}
          <Footer 
            onOpenQuoteModal={handleOpenQuoteModal} 
            onOpenLegalModal={handleOpenLegalModal}
          />

          {/* Floating Bottom-Right WhatsApp Button with Quick Chat */}
          <FloatingWhatsApp />

          {/* Floating Bottom-Left Language Switcher Widget */}
          <FloatingLanguageWidget />

          {/* Comprehensive 18+ Language Switcher Modal */}
          <LanguageSwitcherModal />

          {/* Interactive Project Estimation & Quote Request Modal */}
          <QuoteModal
            isOpen={quoteModalOpen}
            onClose={handleCloseQuoteModal}
            initialService={selectedQuoteService}
          />

          {/* Full-Featured Legal, Policy, Team & Sitemap Modal */}
          <LegalAndComplianceModal
            isOpen={legalModalOpen}
            initialTab={legalModalTab}
            onClose={handleCloseLegalModal}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

