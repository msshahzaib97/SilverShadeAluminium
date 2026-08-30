import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WindowsSection } from './components/WindowsSection';
import { DoorsSection } from './components/DoorsSection';
import { MajlisTabukSection } from './components/MajlisTabukSection';
import { KitchenCabinetSection } from './components/KitchenCabinetSection';
import { RailingsSection } from './components/RailingsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { PremiumFeatureSection } from './components/PremiumFeatureSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialSection } from './components/TestimonialSection';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (service?: string) => {
    setSelectedQuoteService(service);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const handleExploreServices = () => {
    const servicesEl = document.querySelector('#services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8faf9] dark:bg-[#060a08] text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white overflow-x-hidden transition-colors duration-300 font-sans">
        {/* Sticky Luxury Navigation Header with Theme Toggle */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Main Sections */}
        <main>
          {/* Full-Screen Cinematic Hero */}
          <Hero
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onExploreServices={handleExploreServices}
          />

          {/* Trust & Introduction Strip */}
          <TrustStrip />

          {/* Split-Screen About Section */}
          <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

          {/* Architectural Services Grid */}
          <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Architectural Windows Systems Showcase (Wood-Grain Awning, Sliding Transoms, Grid Panoramic, Exhaust Windows) */}
          <WindowsSection onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Architectural Doors Systems Showcase (Hinge Doors Single/Double, Sliding Doors Single/Double, Frameless Glass Doors) */}
          <DoorsSection onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Tabuk Majlis & Qarmeed Clay Tile Roofs Showcase (مجلس طابوق وقرميد وزجاج فاخر) */}
          <MajlisTabukSection onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Aluminium Kitchen Cabinets Showcase (Single Piece & Double Piece Glass Shutter Options) */}
          <KitchenCabinetSection onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Architectural Railings & Glass Balustrades (Frameless Glass, Black Picket, Floating Stairs, Outdoor Ramps) */}
          <RailingsSection onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Featured Projects Portfolio */}
          <FeaturedProjects onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Built for Dubai - Feature Section */}
          <PremiumFeatureSection />

          {/* Why Silver Shade Aluminium - 6 Cards */}
          <WhyChooseUsSection />

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

          {/* Contact & Consultation Section */}
          <ContactSection />
        </main>

        {/* Luxury Footer */}
        <Footer onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Floating Bottom-Right WhatsApp Button with Quick Chat */}
        <FloatingWhatsApp />

        {/* Interactive Project Estimation & Quote Request Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialService={selectedQuoteService}
        />
      </div>
    </ThemeProvider>
  );
}

