import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
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
    <div className="min-h-screen bg-[#0c0d0e] text-[#f2f2f3] selection:bg-slate-300 selection:text-black overflow-x-hidden">
      {/* Sticky Luxury Navigation Header */}
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

        {/* Featured Projects Portfolio */}
        <FeaturedProjects onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Built for Dubai - Dark Feature Section */}
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

      {/* Dark Luxury Footer */}
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
  );
}
