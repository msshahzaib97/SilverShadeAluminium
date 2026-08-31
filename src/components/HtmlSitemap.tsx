import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  Search, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Tent, 
  Layers, 
  Home, 
  Maximize2, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  Phone,
  FileText
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface HtmlSitemapProps {
  onOpenQuoteModal: (service?: string) => void;
  onOpenLegalModal?: (tab: 'privacy' | 'terms' | 'about' | 'contact' | 'team' | 'editorial' | 'sitemap') => void;
}

interface SitemapGroup {
  id: string;
  title: string;
  arabicTitle: string;
  icon: string;
  badge?: string;
  links: {
    label: string;
    arabicLabel: string;
    href: string;
    desc?: string;
    isModalTrigger?: boolean;
    serviceName?: string;
    legalTab?: 'privacy' | 'terms' | 'about' | 'contact' | 'team' | 'editorial' | 'sitemap';
  }[];
}

export const HtmlSitemap: React.FC<HtmlSitemapProps> = ({ onOpenQuoteModal, onOpenLegalModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const sitemapGroups: SitemapGroup[] = [
    {
      id: 'main-navigation',
      title: 'Main Navigation & Core Tools',
      arabicTitle: 'الرئيسية وأدوات الموقع',
      icon: '🧭',
      badge: 'Core Pages',
      links: [
        { label: 'Home Page & Hero Showcase', arabicLabel: 'الصفحة الرئيسية والواجهة', href: '#hero', desc: 'Overview of Silver Shade architectural engineering' },
        { label: 'All 16+ Architectural Services Directory', arabicLabel: 'دليل جميع خدمات الألمنيوم والزجاج', href: '#services', desc: 'Complete directory of bespoke manufacturing services' },
        { label: 'Visual Photo Gallery Selector', arabicLabel: 'معرض الصور واختيار التصاميم', href: '#visual-catalogue', desc: 'Select real project photos to request an accurate quotation' },
        { label: 'Live Price & Cost Estimator', arabicLabel: 'حاسبة التكلفة والأسعار الفورية', href: '#cost-estimator', desc: 'Calculate instant AED estimates for windows, doors & majlis' },
        { label: 'Completed Projects Portfolio', arabicLabel: 'معرض المشاريع المنفذة', href: '#projects', desc: 'Luxury villas, penthouses, and commercial installations in UAE' },
        { label: 'Why Silver Shade & Factory Standards', arabicLabel: 'لماذا سيلفر شيد ومعايير المصنع', href: '#why-us', desc: '6063-T6 virgin alloys, CNC precision, and ISO standards' },
        { label: 'Frequently Asked Questions (FAQs)', arabicLabel: 'الأسئلة الشائعة والإجابات الفنية', href: '#faq', desc: 'Warranty, thermal specs, Dubai & Abu Dhabi approvals' },
        { label: 'Contact Us & Free Site Measurement', arabicLabel: 'اتصل بنا وحجز معاينة مجانية', href: '#contact', desc: 'Direct engineers contact, WhatsApp, and location maps', legalTab: 'contact' },
      ]
    },
    {
      id: 'corporate-legal-standards',
      title: 'Corporate, Authors, Legal & Editorial',
      arabicTitle: 'المؤسسة، فريق المهندسين، السياسات والمعايير',
      icon: '⚖️',
      badge: 'Official UAE Info',
      links: [
        { label: 'Privacy Policy & Data Protection (UAE PDPL)', arabicLabel: 'سياسة الخصوصية وحماية البيانات الشخصية', href: '#privacy-policy', desc: 'Compliant with UAE Federal Decree-Law No. 45 of 2021', legalTab: 'privacy' },
        { label: 'Terms of Service & Contracting Conditions', arabicLabel: 'الشروط والأحكام وعقود المقاولات المعمارية', href: '#terms-of-service', desc: 'AED payment milestones, CAD approvals, and 15-year warranties', legalTab: 'terms' },
        { label: 'About Us & Musaffah Factory Facilities', arabicLabel: 'من نحن ومصنع الألمنيوم في مصفح أبوظبي', href: '#about', desc: '15+ years UAE legacy, German CNC machinery, and ISO certifications', legalTab: 'about' },
        { label: 'Contact Us & Free Survey Booking', arabicLabel: 'اتصل بنا وفروع أبوظبي ودبي', href: '#contact', desc: 'Direct engineers, GPS coordinates, office timings & 24hr visits', legalTab: 'contact' },
        { label: 'Authors & Engineering Leadership Team', arabicLabel: 'فريق المهندسين، خبراء الواجهات والمعلمين', href: '#team', desc: 'Chief facade engineer, master majlis craftsman, QA inspectors', legalTab: 'team' },
        { label: 'Team Photos in Workspace (Factory Operations)', arabicLabel: 'صور فريق العمل في المصنع وورشة مصفح', href: '#workspace-gallery', desc: '12,000 sq ft Musaffah plant, CNC cutting, double-glazing crane, and steel forge' },
        { label: 'Trusted Source & Building Codes Compliance', arabicLabel: 'الجهة الموثوقة ومطابقة أكواد البناء واستدامة', href: '#trusted-source-and-media', desc: 'DMT, Estidama Pearl rating, Dubai Al Sa\'fat, ASTM E330, and Qualicoat' },
        { label: 'Parent Company & Group Operations', arabicLabel: 'الشركة الأم والمجموعة القابضة والترخيص التجاري', href: '#about', desc: 'Silver Shade Group & Architectural Contracting LLC (CN-1184920)' },
        { label: 'Editorial Guidelines & Technical Standards', arabicLabel: 'المعايير التحريرية ومطابقة كود البناء والاستدامة', href: '#editorial-guidelines', desc: 'ASTM test verification, peer-review process, and price transparency', legalTab: 'editorial' },
        { label: 'HTML Sitemap Directory (Index Tree)', arabicLabel: 'خريطة الموقع التفاعلية الشاملة', href: '#html-sitemap', desc: 'Direct indexed links to all products, systems, and legal pages', legalTab: 'sitemap' },
      ]
    },
    {
      id: 'kuwaiti-tents-majlis',
      title: 'Kuwaiti Winter Tents & Tabuk Majlis',
      arabicTitle: 'خيام شتوية كويتية ومجالس طابوق وقرميد',
      icon: '⛺',
      badge: 'Trending Winter',
      links: [
        { label: 'Kuwaiti Steel & Glass Winter Tents (خيمة شتاء كويتي)', arabicLabel: 'خيمة شتاء سيف حديد شكل كويتي', href: '#kuwaiti-tent-showcase', desc: 'Heavy steel sword arches, PVC roof, panoramic glass walls' },
        { label: 'Villa Garden & Lawn Kuwaiti Tents', arabicLabel: 'خيام الحدائق والمزارع شكل كويتي', href: '#kuwaiti-tent-showcase', desc: 'Tensile waterproof fabric roof with solar control reflective glass' },
        { label: 'Rooftop Kuwaiti Winter Majlis (Arabic Calligraphy)', arabicLabel: 'خيام الأسطح والروف بزخرفة خط عربي', href: '#kuwaiti-tent-showcase', desc: 'Engineered for rooftop wind loads with luxury valance fringe' },
        { label: 'VIP Winter Hospitality Lounge with Porch Canopy', arabicLabel: 'خيمة ملكية مع مدخل مظلة قماشية وستائر', href: '#kuwaiti-tent-showcase', desc: 'Extended entrance canopy, internal lighting and split AC setup' },
        { label: 'Tabuk Majlis Construction (مجلس طابوق)', arabicLabel: 'بناء مجالس طابوق خارجي معزول للفلل', href: '#majlis-showcase', desc: 'Thermal insulated AAC blockwork majlis with arched glass' },
        { label: 'Authentic Spanish Terracotta Qarmeed Roofs', arabicLabel: 'أسقف قرميد اسباني فخار عازل للحرارة', href: '#majlis-showcase', desc: 'Spanish clay tile roofs reducing heat up to 8-10°C in summer' },
      ]
    },
    {
      id: 'windows-engineering',
      title: 'Architectural Aluminium Windows',
      arabicTitle: 'نوافذ وشبابيك الألمنيوم المعمارية',
      icon: '🪟',
      badge: 'Thermal & Soundproof',
      links: [
        { label: '10cm Heavy Profile Sliding Windows', arabicLabel: 'نوافذ سحب مجرى ألمنيوم 10 سم', href: '#windows-showcase', desc: 'Double/Single track sliding windows with heavy dust gaskets' },
        { label: '10.37cm Triple-Track Sliding Window System', arabicLabel: 'نظام نوافذ ألمنيوم 10.37 سم 3 سكك', href: '#windows-showcase', desc: 'Heavy-duty interlocking mullions for large villa window spans' },
        { label: '10.5cm Premium Multi-Track Acoustic Windows', arabicLabel: 'قطاع ألمنيوم 10.5 سم عازل للصوت والحرارة', href: '#windows-showcase', desc: 'Acoustic glass with multi-chamber EPDM weather-stripping' },
        { label: 'Thermal-Break Hinged & Tilt-and-Turn Windows', arabicLabel: 'نوافذ ألمنيوم مفصلية قلاب ثيرمال بريك', href: '#windows-showcase', desc: 'Polyamide thermal-break barriers eliminating heat conduction' },
        { label: 'Wood-Grain Finish Aluminium Awning Windows', arabicLabel: 'نوافذ قلاب بألوان خشبية معمارية', href: '#windows-showcase', desc: 'Weatherproof wood powder coating with stainless friction stays' },
        { label: 'Panoramic Grid Fixed & Transom Glass Windows', arabicLabel: 'واجهات زجاج ثابت ونوافذ بنورامية شبكية', href: '#windows-showcase', desc: 'Low-E coated double glazing with custom architectural grid lines' },
      ]
    },
    {
      id: 'doors-facades',
      title: 'Doors & Curtain Wall Facades',
      arabicTitle: 'أبواب الألمنيوم والواجهات الزجاجية',
      icon: '🚪',
      badge: 'Heavy-Duty & Facades',
      links: [
        { label: 'Heavy Villa Sliding Glass Patio Doors', arabicLabel: 'أبواب سحب سلايدنج زجاجية للفلل', href: '#doors-showcase', desc: 'Tandem stainless steel rollers carrying panels up to 300kg each' },
        { label: 'Modern French Hinged Glass Double Doors', arabicLabel: 'أبواب زجاجية مفصلية مزدوجة مع مقابض استيل', href: '#doors-showcase', desc: 'Perimeter multi-point locking deadbolts and 10mm tempered glass' },
        { label: 'Folding Bi-Fold Accordion Glass Doors', arabicLabel: 'أبواب فولدينغ سحاب قابلة للطي بالكامل', href: '#doors-showcase', desc: 'Full width opening connecting indoor living to garden patios' },
        { label: 'Luxury Pivot Glass Villa Entrance Doors', arabicLabel: 'أبواب محورية زجاجية فخمة لمداخل الفلل', href: '#doors-showcase', desc: 'Heavy-duty hydraulic floor springs for dramatic entryway scale' },
        { label: 'Curtain Wall 10/5 Commercial Facades', arabicLabel: 'واجهات كرتن وول قطاع 10/5 سم للأبراج والفلل', href: '#curtain-wall-showcase', desc: '100mm x 50mm heavy mullions for double-height architectural glass' },
        { label: 'Curtain Wall 8/5 Slimline Facades', arabicLabel: 'واجهات كرتن وول قطاع 8/5 سم بتصميم أنيق', href: '#curtain-wall-showcase', desc: 'Slim vertical sightlines maximizing natural daylight penetration' },
      ]
    },
    {
      id: 'kitchens-railings-shades',
      title: 'Kitchens, Railings & Shades',
      arabicTitle: 'مطابخ ألمنيوم، درابزين ومظلات',
      icon: '🍳',
      badge: 'Interior & Exterior',
      links: [
        { label: 'Aluminium Kitchen Cabinets (Single Glass Shutter)', arabicLabel: 'مطابخ ألمنيوم مع زجاج مفرد ملون وسيكوريت', href: '#kitchen-showcase', desc: '100% moisture-proof, termite-proof, with soft-close hinges' },
        { label: 'Aluminium Kitchen Cabinets (Double Glass Profile)', arabicLabel: 'مطابخ ألمنيوم زجاج دبل مع إضاءة ليد داخلية', href: '#kitchen-showcase', desc: 'Acoustic buffered door closing with fluted or tinted glass options' },
        { label: 'Frameless Glass Balustrades & Railings', arabicLabel: 'درابزين زجاج سيكوريت بدون إطار للدرج والبلكونات', href: '#railings-showcase', desc: '12mm to 17.52mm laminated glass with base shoe channel or spigots' },
        { label: 'Modern Black Picket Aluminium Railings', arabicLabel: 'درابزين ألمنيوم أسود مودرن للدرج والأسوار', href: '#railings-showcase', desc: 'Rust-free powder coated vertical pickets for contemporary villas' },
        { label: 'Car Parking Tensile & Cantilever Shades', arabicLabel: 'مظلات مواقف سيارات قماش وبي في سي وكابولي', href: '#services', desc: 'UV-blocking shade structures for residential and commercial lots' },
        { label: 'Industrial Labour & Event Tents', arabicLabel: 'خيام عمال ومشاريع ومستودعات في مصفح', href: '#services', desc: 'Galvanized steel clear-span modular temporary structures' },
      ]
    },
    {
      id: 'uae-locations',
      title: 'UAE Regional Service Coverage',
      arabicTitle: 'مناطق الخدمة والمعاينة في الإمارات',
      icon: '📍',
      badge: 'Fast Dispatch',
      links: [
        { label: 'Abu Dhabi (Musaffah Industrial & Head Office)', arabicLabel: 'أبوظبي - مصفح الصناعية والمركز الرئيسي', href: '#contact', desc: 'Factory location with full CNC fabrication & immediate visits' },
        { label: 'Abu Dhabi City, Al Bateen & Al Reem Island', arabicLabel: 'مدينة أبوظبي، البطين، جزيرة الريم', href: '#contact', desc: 'Residential & commercial architectural glazing services' },
        { label: 'Khalifa City, MBZ City, Shakhbout & Al Shamkha', arabicLabel: 'مدينة خليفة، مدينة محمد بن زايد، الشامخة', href: '#contact', desc: 'Villa majlis, Kuwaiti tents, and window retrofit projects' },
        { label: 'Saadiyat Island & Yas Island Luxury Villas', arabicLabel: 'جزيرة السعديات وجزيرة ياس للفلل الفاخرة', href: '#contact', desc: 'High-end minimalist slim-profile sliding doors & curtain walls' },
        { label: 'Dubai (Dubai Hills, Palm Jumeirah, Emirates Hills)', arabicLabel: 'دبي - دبي هيلز، نخلة جميرا، تلال الإمارات', href: '#contact', desc: 'Luxury residential renovations and turnkey glass solutions' },
        { label: 'Al Ain, Sharjah, Ajman, RAK & Northern Emirates', arabicLabel: 'العين، الشارقة، عجمان، رأس الخيمة وباقي الإمارات', href: '#contact', desc: 'UAE-wide engineering teams and fast on-site installations' },
      ]
    }
  ];

  const filteredGroups = sitemapGroups.map(group => {
    if (!searchQuery.trim()) return group;
    const query = searchQuery.toLowerCase();
    const matchingLinks = group.links.filter(link => 
      link.label.toLowerCase().includes(query) ||
      link.arabicLabel.toLowerCase().includes(query) ||
      (link.desc && link.desc.toLowerCase().includes(query))
    );
    return {
      ...group,
      links: matchingLinks
    };
  }).filter(group => group.links.length > 0);

  const scrollToAnchor = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <section id="html-sitemap" className="relative py-16 bg-[#070b09] text-white border-t border-emerald-950/60 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Network className="w-3.5 h-3.5" />
              <span>Full Website Directory &amp; HTML Sitemap • خريطة الموقع الكاملة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              Explore All <span className="font-semibold text-emerald-400">Architectural Services</span> &amp; Pages
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1 max-w-2xl">
              Quickly navigate our comprehensive directory of Kuwaiti winter tents, Tabuk Majlis, aluminium windows (10cm &amp; 10.5cm), sliding doors, curtain walls, kitchen cabinets, and UAE service hubs.
            </p>
          </div>

          {/* Search Box & Expand Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search sitemap / ابحث في الموقع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 focus:border-emerald-400 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all"
            >
              <span>{isExpanded ? 'Collapse All' : 'Expand All'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Sitemap Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-emerald-500/30 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{group.icon}</span>
                        <div>
                          <h3 className="text-sm font-semibold text-white tracking-tight">
                            {group.title}
                          </h3>
                          <span className="text-[11px] text-emerald-400 font-arabic block" dir="rtl">
                            {group.arabicTitle}
                          </span>
                        </div>
                      </div>
                      {group.badge && (
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {group.badge}
                        </span>
                      )}
                    </div>

                    {/* Links List */}
                    <ul className="space-y-2.5">
                      {group.links.map((link, lIdx) => (
                        <li key={lIdx} className="group/link">
                          <a
                            href={link.href}
                            onClick={(e) => {
                              if (link.isModalTrigger) {
                                e.preventDefault();
                                onOpenQuoteModal(link.serviceName);
                              } else if (link.legalTab && onOpenLegalModal) {
                                e.preventDefault();
                                onOpenLegalModal(link.legalTab);
                              } else if (link.href.startsWith('#')) {
                                e.preventDefault();
                                scrollToAnchor(link.href);
                              }
                            }}
                            className="block text-slate-300 hover:text-white transition-colors"
                          >
                            <div className="flex items-start justify-between gap-1.5">
                              <div className="flex items-center gap-1.5 text-xs font-medium group-hover/link:text-emerald-400 transition-colors">
                                <span className="text-emerald-500/60 group-hover/link:text-emerald-400">›</span>
                                <span>{link.label}</span>
                              </div>
                              <ExternalLink className="w-3 h-3 text-slate-600 group-hover/link:text-emerald-400 shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity mt-0.5" />
                            </div>
                            
                            {/* Bilingual Subtitle & Description */}
                            <div className="pl-3 mt-0.5">
                              <span className="text-[10px] text-slate-400 font-arabic block" dir="rtl">
                                {link.arabicLabel}
                              </span>
                              {link.desc && (
                                <span className="text-[10px] text-slate-400 leading-tight block line-clamp-1 mt-0.5">
                                  {link.desc}
                                </span>
                              )}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Action Footer per category */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{group.links.length} Section links</span>
                    <button
                      onClick={() => onOpenQuoteModal(group.title)}
                      className="text-emerald-400 hover:text-emerald-300 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      <span>Inquire Category</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Empty State */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-12 bg-white/[0.02] border border-white/5 rounded-xl">
            <p className="text-slate-400 text-sm">No sections or services matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Bottom Quick Help Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Need engineering drawings or a custom aluminium/glass project not listed above?</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONFIG.phones[0].number}`}
              className="text-slate-300 hover:text-emerald-400 font-medium inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_CONFIG.phone}</span>
            </a>
            <span>•</span>
            <button
              onClick={() => onOpenQuoteModal()}
              className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline"
            >
              Book Free Site Visit (حجز معاينة مجانية)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
