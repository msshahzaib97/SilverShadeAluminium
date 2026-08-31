import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Scale, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  Network, 
  Printer, 
  Download, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Clock,
  Globe
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

export type LegalModalTab = 'privacy' | 'terms' | 'about' | 'contact' | 'team' | 'editorial' | 'sitemap';

interface LegalAndComplianceModalProps {
  isOpen: boolean;
  initialTab?: LegalModalTab;
  onClose: () => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const LegalAndComplianceModal: React.FC<LegalAndComplianceModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<LegalModalTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs: { id: LegalModalTab; label: string; arabicLabel: string; icon: any }[] = [
    { id: 'privacy', label: 'Privacy Policy', arabicLabel: 'سياسة الخصوصية', icon: Lock },
    { id: 'terms', label: 'Terms of Service', arabicLabel: 'الشروط والأحكام', icon: Scale },
    { id: 'about', label: 'About Us', arabicLabel: 'من نحن والمصنع', icon: Building2 },
    { id: 'contact', label: 'Contact Us', arabicLabel: 'اتصل بنا وفروعنا', icon: Phone },
    { id: 'team', label: 'Authors & Team', arabicLabel: 'فريق المهندسين', icon: Users },
    { id: 'editorial', label: 'Editorial Guidelines', arabicLabel: 'المعايير التحريرية', icon: BookOpen },
    { id: 'sitemap', label: 'HTML Sitemap', arabicLabel: 'خريطة الموقع', icon: Network },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl h-[92vh] max-h-[850px] bg-white dark:bg-[#0a0f0c] border border-emerald-900/20 dark:border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="px-6 py-4 bg-[#f8faf9] dark:bg-[#060a08] border-b border-slate-200 dark:border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-emerald-600/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Silver Shade Compliance &amp; Information Center
                </h2>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                  Official UAE Legal, Engineering, Team &amp; Directory Documentation (2026)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-white/10 transition-colors"
                title="Print this page"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Sidebar + Content Body Layout */}
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            
            {/* Horizontal Tabs on Mobile / Left Sidebar Tabs on Desktop */}
            <div className="w-full md:w-64 bg-[#f1f5f3] dark:bg-[#070b09] border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10 p-2 md:p-4 shrink-0 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-1.5">
              <div className="hidden md:block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 px-2">
                Document Index
              </div>

              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold transition-all text-left whitespace-nowrap md:whitespace-normal cursor-pointer ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                    <div className="flex-1">
                      <div className="leading-tight">{tab.label}</div>
                      <div className={`text-[10px] font-arabic font-normal ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                        {tab.arabicLabel}
                      </div>
                    </div>
                  </button>
                );
              })}

              <div className="hidden md:block mt-auto pt-4 border-t border-slate-200 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-400 px-2 space-y-1">
                <div>License: CN-1184920</div>
                <div>Abu Dhabi &amp; Dubai, UAE</div>
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                  Estidama &amp; ISO 9001
                </div>
              </div>
            </div>

            {/* Content Scroll View */}
            <div className="flex-1 p-5 sm:p-8 overflow-y-auto text-slate-700 dark:text-slate-300 space-y-6">
              
              {/* TAB 1: PRIVACY POLICY */}
              {activeTab === 'privacy' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      LEGAL NOTICE • LAST UPDATED JANUARY 2026
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Privacy Policy &amp; Data Protection Notice
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Compliant with UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL) and GDPR standards.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        1. Data Controller Information
                      </h4>
                      <p>
                        This website (<span className="font-mono text-emerald-600 dark:text-emerald-400">silvershadealuminium.com</span>) is operated by <strong>Silver Shade Aluminium &amp; Glass Works LLC</strong>, located in Musaffah Industrial Area, Abu Dhabi, United Arab Emirates. We are committed to safeguarding the privacy of villa owners, architects, contractors, and site visitors who interact with our services.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        2. Information We Collect
                      </h4>
                      <p>
                        When you request a quotation, schedule a laser site survey, or submit architectural drawings through our quote modal or direct WhatsApp chat, we may collect:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                        <li><strong>Contact Identifiers:</strong> Name, phone/WhatsApp number, email address.</li>
                        <li><strong>Project Specifications:</strong> Villa or property location (Abu Dhabi, Dubai, Al Ain, etc.), architectural CAD files, PDF blueprints, photos of existing window/door openings.</li>
                        <li><strong>Technical Preference Data:</strong> Selected profile series (10cm sliding, thermal-break, Majlis dimensions, Kuwaiti tent specifications).</li>
                        <li><strong>Automated Telemetry:</strong> Anonymized analytical cookies to measure site performance and page load speeds across desktop and mobile devices.</li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        3. How We Use Your Data &amp; Blueprint Confidentiality
                      </h4>
                      <p>
                        Your information is used exclusively to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                        <li>Formulate itemized Bill of Quantities (BOQ) and price quotations in AED.</li>
                        <li>Dispatch our surveying engineers for on-site laser measurements.</li>
                        <li>Prepare CAD shop drawings for Abu Dhabi &amp; Dubai Municipality approvals.</li>
                        <li>Coordinate delivery logistics and in-house certified installation teams.</li>
                      </ul>
                      <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-semibold text-xs">
                        🔒 Strict Non-Disclosure: Client architectural floor plans, villa drawings, and personal identities are treated with strict confidentiality and never sold, leased, or distributed to third-party marketing entities.
                      </div>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        4. Data Retention &amp; Your Legal Rights
                      </h4>
                      <p>
                        In compliance with UAE Federal Decree-Law No. 45 of 2021, you have the right to request access to, rectification of, or permanent deletion of your contact records and CAD blueprints from our engineering database at any time.
                      </p>
                      <p>
                        To exercise your data privacy rights, please contact our Data Protection Officer at: <a href="mailto:Silvershadesales@gmail.com" className="text-emerald-600 dark:text-emerald-400 font-bold underline">Silvershadesales@gmail.com</a> or via phone at <a href="tel:+971523352536" className="text-emerald-600 dark:text-emerald-400 font-bold underline">+971 52 335 2536</a>.
                      </p>
                    </section>
                  </div>
                </div>
              )}

              {/* TAB 2: TERMS OF SERVICE */}
              {activeTab === 'terms' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      LEGAL CONTRACTING TERMS • UPDATED 2026
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Terms of Service &amp; Architectural Contracting Conditions
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Governing all fabrication, supply, delivery, and installation contracts executed by Silver Shade Aluminium in the UAE.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <Scale className="w-4 h-4 text-emerald-500" />
                        1. Quotation Validity &amp; Site Verification
                      </h4>
                      <p>
                        Preliminary quotations and website cost estimates are provided as engineering budgetary indications based on client-provided dimensions. All formal contract values are finalized only after a formal on-site laser survey conducted by Silver Shade surveying engineers. Official formal quotations are valid for 30 calendar days from the date of issue.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <Scale className="w-4 h-4 text-emerald-500" />
                        2. Engineering Approvals &amp; Shop Drawings
                      </h4>
                      <p>
                        Prior to custom CNC aluminium extrusion cutting and glass tempering at our Musaffah factory, detailed 2D/3D CAD shop drawings detailing section profiles, glass thickness, hardware mechanisms, and water drainage weep-holes will be submitted for client or consultant sign-off.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <Scale className="w-4 h-4 text-emerald-500" />
                        3. Standard Payment Milestones (AED)
                      </h4>
                      <p>
                        Unless explicitly stated otherwise in a formal corporate sub-contract, standard villa project milestones follow:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                        <li><strong>50% Advance Deposit:</strong> Upon contract signing and shop drawing approval to allocate raw aluminium billet and glass stock.</li>
                        <li><strong>40% On Factory Completion:</strong> Upon readiness of manufactured frames and double-glazed units prior to site delivery.</li>
                        <li><strong>10% Final Handover:</strong> Following completion of installation, silicone water-proofing, hardware calibration, and client acceptance.</li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs flex items-center gap-2">
                        <Scale className="w-4 h-4 text-emerald-500" />
                        4. Warranty Coverage &amp; Exclusions
                      </h4>
                      <p>
                        Silver Shade warrants its architectural 6063-T6 aluminium frames and powder coating against peeling, cracking, or severe color fading for a period of up to 15 years. Double glazed sealed units are guaranteed against internal condensation and seal failure for 10 years. Mechanical hardware (rollers, locks, multi-point cremones) carries a 5-year replacement warranty.
                      </p>
                      <p className="text-slate-500 text-xs italic">
                        Warranty excludes damages arising from post-handover civil modifications by other contractors, intentional glass impact breakage, or chemical wash acid damage.
                      </p>
                    </section>
                  </div>
                </div>
              )}

              {/* TAB 3: ABOUT US */}
              {activeTab === 'about' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      COMPANY BACKGROUND &amp; CAPABILITIES
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      About Silver Shade Aluminium &amp; Glass Works LLC
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Bespoke architectural aluminium fabrication, high-performance glass systems, Tabuk majlis, and Kuwaiti winter tents in the UAE.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                    <p>
                      Founded with a dedicated 12,000 sq ft production and assembly facility in <strong>Musaffah Industrial Area, Abu Dhabi</strong>, Silver Shade Aluminium &amp; Glass Works LLC has grown into one of the UAE's premier specialist architectural envelope contractors.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                      <div className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">15+</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mt-1">Years UAE Experience</div>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1,200+</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mt-1">Completed UAE Projects</div>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mt-1">In-House Master Teams</div>
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs pt-2">
                      Our Factory Machinery &amp; Engineering Edge
                    </h4>
                    <p>
                      Our Musaffah plant is equipped with precision Italian and German CNC double-head mitre saws, automated corner crimping presses, hydraulic punch machines, and high-vacuum glass suction crane lifters capable of maneuvering 500kg jumbo glass panels without structural deflection.
                    </p>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/20 space-y-2">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300 text-xs uppercase tracking-wider">
                        Core Competencies &amp; Services:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <div>✓ 10cm, 10.37cm &amp; 10.5cm Sliding Doors &amp; Windows</div>
                        <div>✓ Turnkey Tabuk Majlis &amp; Spanish Qarmeed Roofs</div>
                        <div>✓ Authentic Kuwaiti Steel &amp; Glass Winter Tents</div>
                        <div>✓ Minimalist Glass Balustrades &amp; Stair Railings</div>
                        <div>✓ Luxury Glass &amp; Aluminium Kitchen Cabinetry</div>
                        <div>✓ Curtain Wall 10/5 Facades &amp; Commercial Storefronts</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: CONTACT US */}
              {activeTab === 'contact' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      GET IN TOUCH • FAST SITE MEASUREMENT
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Contact Silver Shade Aluminium &amp; Glass
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Speak directly with our chief estimators or book a free on-site survey anywhere in Abu Dhabi, Dubai, or the UAE.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="p-4 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                        <MapPin className="w-4 h-4" />
                        <span>Head Office &amp; Factory:</span>
                      </div>
                      <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong>Silver Shade Aluminium &amp; Glass Works LLC</strong><br />
                        Musaffah Industrial Area (M-34 / M-14),<br />
                        Abu Dhabi, United Arab Emirates.<br />
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">GPS Coordinates: 24.3417° N, 54.5126° E</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Musaffah+Abu+Dhabi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="p-4 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                        <Phone className="w-4 h-4" />
                        <span>Direct Hotlines &amp; WhatsApp:</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <div>
                          Primary Hotline: <a href="tel:+971523352536" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">+971 52 335 2536</a>
                        </div>
                        <div>
                          Factory Office: <a href="tel:+971566076460" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">+971 56 607 6460</a>
                        </div>
                        <div>
                          Direct WhatsApp: <a href="https://wa.me/971523352536" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">+971 52 335 2536</a>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Working Hours: Sat – Thu (8:00 AM – 7:00 PM)</span>
                      </div>
                    </div>

                  </div>

                  <div className="p-4 bg-emerald-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="font-bold text-sm">Need a Site Visit in the Next 24 Hours?</div>
                      <div className="text-xs text-emerald-100">Our mobile surveying engineers carry digital laser levels and physical profile samples.</div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenQuoteModal('Immediate Site Measurement');
                      }}
                      className="px-5 py-2.5 bg-white text-emerald-900 font-bold text-xs uppercase tracking-wider hover:bg-emerald-50 shrink-0 cursor-pointer shadow"
                    >
                      Book Free Survey
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 5: AUTHORS & TEAM */}
              {activeTab === 'team' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      ENGINEERING &amp; CRAFTSMANSHIP LEADERSHIP
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Authors, Engineers &amp; Master Fabricators
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      The certified structural facade engineers, quantity surveyors, and master heritage craftsmen directing Silver Shade Aluminium.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        name: 'Eng. Tariq Al-Mansoor',
                        role: 'Chief Facade & Structural Engineer',
                        desc: 'B.Sc. Civil Engineering, Estidama PQP certified with 18+ years of high-wind facade modeling and curtain wall engineering across Abu Dhabi and Dubai.',
                        spec: 'Curtain Wall 10/5, High Wind-Load Engineering, Acoustic Decibel Calculations'
                      },
                      {
                        name: 'Master Craftsman Khalid Mahmoud',
                        role: 'Head of Majlis & Qarmeed Craftsmanship',
                        desc: '22+ years building traditional and modern insulated Tabuk blockwork majlis with authentic Spanish terracotta clay tile roof structures.',
                        spec: 'Tabuk Majlis Construction, Spanish Terracotta Qarmeed Tile Roofs'
                      },
                      {
                        name: 'Eng. Sameer Al-Khatib',
                        role: 'Senior Aluminium CNC & Fabrication Manager',
                        desc: 'M.Sc. Advanced Manufacturing, specializing in German & Italian CNC profile cutting, 10cm/10.5cm sliding systems, and electrostatic powder coating.',
                        spec: 'CNC Extrusion Machining, Thermal-Break Assembly'
                      },
                      {
                        name: 'Eng. Rashid Zafar',
                        role: 'Principal Architectural Estimator',
                        desc: '16+ years of precision BOQ formulation, RICS quantity surveying, and rapid CAD shop drawing submissions for UAE municipality permits.',
                        spec: 'Project Quantity Surveying, BOQ Modeling, Price Optimization'
                      }
                    ].map((m, idx) => (
                      <div key={idx} className="p-4 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between gap-3">
                        <div className="space-y-1">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {m.name}
                          </h4>
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                            {m.role}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                            {m.desc}
                          </p>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            <strong>Specialization:</strong> {m.spec}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: EDITORIAL GUIDELINES */}
              {activeTab === 'editorial' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      TECHNICAL ACCURACY &amp; FACT-CHECKING
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Editorial &amp; Technical Publishing Guidelines
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Our methodology for publishing architectural guides, ASTM test references, U-value benchmarks, and transparent cost calculators.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                    <p>
                      Every technical article, product showcase, and cost estimation tool published on <strong>silvershadealuminium.com</strong> is governed by rigorous engineering fact-checking standards:
                    </p>

                    <div className="space-y-3">
                      <div className="p-3.5 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                          1. ASTM &amp; UAE Municipal Code Compliance
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Air infiltration (ASTM E283), water tightness (ASTM E331), and structural wind loads (ASTM E330) are verified against current Abu Dhabi DMT and Dubai Green Building (Al Sa'fat) mandates.
                        </p>
                      </div>

                      <div className="p-3.5 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                          2. Factory-Grounded Cost Transparency
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          All price estimates per square meter (m²) in AED reflect authentic Musaffah factory fabrication costs, direct raw material tariffs, and certified installation rates with zero misleading promotional claims.
                        </p>
                      </div>

                      <div className="p-3.5 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                          3. Corrections &amp; Inquiries Policy
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          If you identify any technical specification that requires clarification or update, our engineering board will review and update within 24 business hours. Email: <span className="font-bold text-emerald-600 dark:text-emerald-400">engineering@silvershadealuminium.com</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: HTML SITEMAP */}
              {activeTab === 'sitemap' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                      COMPLETE WEBSITE DIRECTORY &amp; STRUCTURE
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      HTML Sitemap Directory
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Quick navigation links to all architectural products, systems, majlis types, Kuwaiti tents, windows, doors, and legal pages.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    
                    <div className="p-4 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-xs">
                        Core Navigation &amp; Sections:
                      </div>
                      <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                        <li><a href="#hero" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Home Page &amp; Hero Showcase</a></li>
                        <li><a href="#about" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ About Us &amp; Factory Overview</a></li>
                        <li><a href="#services" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ All 16+ Architectural Services</a></li>
                        <li><a href="#team" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Authors &amp; Engineering Team</a></li>
                        <li><a href="#editorial-guidelines" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Editorial Guidelines &amp; Standards</a></li>
                        <li><a href="#projects" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Completed Projects Portfolio</a></li>
                        <li><a href="#why-us" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Why Choose Silver Shade UAE</a></li>
                        <li><a href="#faq" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Frequently Asked Questions (FAQ)</a></li>
                        <li><a href="#contact" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Contact Us &amp; Free Survey Booking</a></li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#f8faf9] dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-xs">
                        Architectural Systems:
                      </div>
                      <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                        <li><a href="#kuwaiti-tent-showcase" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Kuwaiti Style Winter Tents (خيام شتوية)</a></li>
                        <li><a href="#majlis-showcase" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Tabuk Majlis &amp; Spanish Qarmeed Roofs</a></li>
                        <li><a href="#windows-showcase" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ 10cm, 10.37cm &amp; 10.5cm Windows</a></li>
                        <li><a href="#doors-showcase" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Sliding Doors &amp; French Hinged Doors</a></li>
                        <li><a href="#kitchen-showcase" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Aluminium &amp; Glass Kitchen Cabinets</a></li>
                        <li><a href="#railings-showcase" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Frameless Glass Balustrades &amp; Railings</a></li>
                        <li><a href="#cost-estimator" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Live Price &amp; Cost Estimator (AED)</a></li>
                        <li><a href="#html-sitemap" onClick={onClose} className="hover:text-emerald-500 hover:underline">▸ Comprehensive Interactive Sitemap</a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="px-6 py-3.5 bg-[#f8faf9] dark:bg-[#060a08] border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Silver Shade Aluminium &amp; Glass Works LLC • Musaffah, Abu Dhabi, UAE
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow"
              >
                Request Free Quote
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
