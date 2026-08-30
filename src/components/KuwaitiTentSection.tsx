import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Maximize2, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  Flame, 
  Sun, 
  Wind, 
  Eye,
  SlidersHorizontal,
  Compass,
  Tent,
  Moon,
  Layers,
  ThermometerSnowflake,
  MessageCircle
} from 'lucide-react';

import tentNightImg from '../assets/images/tent_kuwaiti_night_1788114059718.jpg';
import tentGardenImg from '../assets/images/tent_kuwaiti_garden_1788114093298.jpg';
import tentTerraceImg from '../assets/images/tent_kuwaiti_terrace_1788114118445.jpg';
import tentEveningImg from '../assets/images/tent_kuwaiti_evening_1788114138136.jpg';
import { COMPANY_CONFIG } from '../data/content';

interface KuwaitiTentSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const KuwaitiTentSection: React.FC<KuwaitiTentSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'villa_garden' | 'rooftop' | 'night_luxury'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string>('');

  const tentItems = [
    {
      id: 'tent-kuwaiti-night-villa',
      title: 'Luxury Kuwaiti Winter Tent with Steel Sword Arches & Sliding Glass',
      arabicTitle: 'خيمة شتاء سيف حديد شكل كويتي مع زجاج سلايدنج بانوراما وإضاءة دافئة',
      category: 'night_luxury',
      image: tentNightImg,
      badge: 'Kuwaiti Royal Winter Design (شكل كويتي ملكي)',
      tagline: 'Heavy Steel Frame • Traditional Scalloped Border • 360° Panoramic Glass',
      description: 'Custom-built freestanding winter majlis tent engineered with a heavy-duty structural steel frame ("Saif Hadid" sword profile), 4-sided pitched thermal canvas roof with authentic Kuwaiti crescent & star decorative fringe trim, and 10cm black aluminium sliding glass doors with warm 3000K LED ambient illumination.',
      specs: [
        { label: 'Steel Framework', value: 'Heavy Galvanized Box Steel (حديد سيف كويتي مقوى ومقاوم للرياح)' },
        { label: 'Fabric Roof', value: 'Multi-layer Insulated German PVC Tensile Canvas (عازل للحرارة والمطر)' },
        { label: 'Glass Facades', value: '10cm Heavy Aluminium Profile with 10mm Toughened Clear Glass' },
        { label: 'Lighting Ambience', value: 'Concealed 3000K Warm Gold LED Strip & Architectural Wall Sconces' }
      ],
      features: [
        'Authentic Kuwaiti heritage valance trim (كركوشة وزخرفة كويتية فاخرة) with laser-cut geometric patterns',
        'Floor-to-ceiling ultra-smooth sliding glass doors offering uninterrupted 360-degree garden and pool views',
        'Weatherproof insulated ceiling keeping the interior cozy and warm during cool UAE winter evenings'
      ],
      quoteService: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
    },
    {
      id: 'tent-kuwaiti-garden-day',
      title: 'Villa Lawn Garden Kuwaiti Tent with Solar Reflective Glass',
      arabicTitle: 'خيمة حديقة شتوية مودرن شكل كويتي مع زجاج عاكس للشمس',
      category: 'villa_garden',
      image: tentGardenImg,
      badge: 'Garden & Courtyard Majlis',
      tagline: 'Reflective Bronze/Grey Glass • Waterproof PVC Top • Stepping Stone Integration',
      description: 'Permanent outdoor garden pavilion featuring a reinforced Kuwaiti steel pitched framework, high-grade waterproof cream canvas, and solar-control reflective glass sliding panels that provide privacy during the day and crystal clarity at night.',
      specs: [
        { label: 'Roof Material', value: 'Heavy Duty 850 GSM Waterproof PVC Membrane (مقاوم لأشعة الشمس بنسبة 100%)' },
        { label: 'Glass Type', value: 'Double / Single Glazed Bronze Solar Reflective Tempered Glass' },
        { label: 'Foundation Platform', value: 'Integrated Raised Concrete/Tiled Podium with Ramp Access' },
        { label: 'Ventilation & AC', value: 'Concealed Split AC provision & concealed ducting channels' }
      ],
      features: [
        'High privacy reflective glass preventing outside visibility during daylight hours',
        'Heavy-duty stainless steel sliding rollers and multi-point security deadbolts',
        'Seamless integration with natural grass, concrete stepping pavers, and outdoor furniture sets'
      ],
      quoteService: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
    },
    {
      id: 'tent-kuwaiti-rooftop-calligraphy',
      title: 'Rooftop Kuwaiti Winter Tent with Arabic Calligraphy Valance',
      arabicTitle: 'خيمة شتوية للسطح والروف بزخرفة خط عربي وهيكل حديد سيف كويتي',
      category: 'rooftop',
      image: tentTerraceImg,
      badge: 'Rooftop & Penthouse Pavilion',
      tagline: 'Islamic Calligraphy Fringe • High Wind Load Resistance • Pristine White Marble Finish',
      description: 'Engineered specifically for villa rooftop terraces and penthouses. Designed to withstand high altitude wind loads with an anchored structural steel base, artistic Arabic calligraphy valance border, and sleek black aluminium glass sliding panels.',
      specs: [
        { label: 'Wind Load Rating', value: 'Engineered for rooftop gusts up to 140 km/h with anchor brackets' },
        { label: 'Decorative Trim', value: 'Custom Arabic Calligraphy (خط عربي أصيل) Embroidered Valance' },
        { label: 'Aluminium Track', value: 'Heavy Duty 10.37cm Triple-Track Sliding System for maximum opening' },
        { label: 'Flooring', value: 'Direct anchor to marble terrace with waterproof silicone sealing perimeter' }
      ],
      features: [
        'Turns empty rooftop spaces into an ultra-luxury winter majlis for family gatherings and barbecues',
        'Complete perimeter weather-stripping (EPDM gaskets) preventing any dust or rainwater ingress',
        'Full sliding panels can open up to 66% width for breezy open-air ventilation'
      ],
      quoteService: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
    },
    {
      id: 'tent-kuwaiti-evening-porch',
      title: 'Majlis Winter Tent with Extended Entrance Canopy & Drapes',
      arabicTitle: 'خيمة شتوية ملكية مع مدخل مظلة قماشية وستائر جانبية وزجاج كامل',
      category: 'night_luxury',
      image: tentEveningImg,
      badge: 'VIP Hospitality & Camp Lounge',
      tagline: 'Extended Fabric Canopy • Ambient Glow • Elegant Interior Gypsum & Sconces',
      description: 'Grand winter hospitality tent with an extended entrance fabric porch canopy, white decorative drapery columns, recessed warm perimeter illumination, and expansive sliding glass enclosures for farm estates, desert retreats, and private luxury villas.',
      specs: [
        { label: 'Entrance Porch', value: 'Projecting 1.5m - 2.5m cantilevered canvas shade canopy with support posts' },
        { label: 'Internal Lining', value: 'Luxury Sadu or modern neutral insulated acoustic fabric lining options' },
        { label: 'Door System', value: 'Central Double Sliding French Glass Doors with stainless steel handles' },
        { label: 'Lighting Circuit', value: 'Multi-zone dimmable warm LED strips, floor up-lights, and chandelier point' }
      ],
      features: [
        'Sheltered front porch prevents rain splashes and provides a welcoming outdoor seating transition',
        'Super-rigid steel truss structure allows unobstructed large interior clear spans with zero center pillars',
        'Certified fire-retardant fabric meeting UAE Civil Defense safety specifications'
      ],
      quoteService: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? tentItems 
    : tentItems.filter(item => item.category === activeFilter);

  const openWhatsAppForTent = (tentTitle: string, arabicTitle: string) => {
    const text = `Hello Silver Shade Aluminium, I am interested in building a "${tentTitle} (${arabicTitle})". Please share quotation details and schedule a free site survey.`;
    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kuwaiti-tent-showcase" className="relative py-24 bg-gradient-to-b from-[#0a0f0d] via-[#0d1411] to-[#0a0f0d] text-white overflow-hidden border-t border-b border-emerald-900/30">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Tent className="w-4 h-4 text-amber-400" />
            <span>خيمة شتاء سيف حديد شكل كويتي • Kuwaiti Style Luxury Glass Tents</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Royal Kuwaiti Steel &amp; Glass <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400">
              Winter Majlis Tents (خيام شتوية ملكية)
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Bespoke outdoor winter tents engineered with heavy-duty <span className="text-amber-300 font-medium">Kuwaiti Sword Steel frames (سيف حديد كويتي)</span>, weatherproof insulated tensile roofs with traditional decorative valance trims, and panoramic <span className="text-emerald-400 font-medium">10cm aluminium sliding glass doors</span> for gardens, rooftops, and desert retreats across the UAE.
          </p>

          {/* Quick Technical Highlights Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-amber-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Heavy Steel
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">هيكل حديد سيف كويتي مقوى</div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-emerald-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5">
                <Layers className="w-4 h-4" /> 10cm Glass
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">أبواب سلايدنج زجاجية بالكامل</div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-amber-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5">
                <ThermometerSnowflake className="w-4 h-4" /> Insulated Roof
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">سقف قماش PVC عازل للحرارة</div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3 text-center">
              <div className="text-emerald-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5">
                <Moon className="w-4 h-4" /> Warm 3000K
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">إضاءة ليد مخفية وأباليك دافئة</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            All Kuwaiti Tents (جميع الخيام)
          </button>
          <button
            onClick={() => setActiveFilter('night_luxury')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeFilter === 'night_luxury'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            🌙 Night Luxury &amp; Ambient Lights (خيام ليلية مضيئة)
          </button>
          <button
            onClick={() => setActiveFilter('villa_garden')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeFilter === 'villa_garden'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            🌿 Villa Garden &amp; Lawn (خيام الحدائق والأحواش)
          </button>
          <button
            onClick={() => setActiveFilter('rooftop')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeFilter === 'rooftop'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            🏢 Rooftop &amp; Calligraphy (خيام الأسطح والخط العربي)
          </button>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Zoom & Tags */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer" onClick={() => {
                setSelectedPhoto(item.image);
                setSelectedProjectTitle(item.title);
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-semibold tracking-wide">
                    {item.badge}
                  </span>
                  <div className="p-2 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-white border border-white/10">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-amber-200/90 font-medium mb-1 drop-shadow">
                    {item.tagline}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-300 font-medium mt-1 font-arabic" dir="rtl">
                    {item.arabicTitle}
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {/* Technical Specifications Grid */}
                  <div className="mb-6 bg-slate-950/60 rounded-xl p-4 border border-slate-800/80">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5" /> Technical Structural Specs
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {item.specs.map((spec, i) => (
                        <div key={i} className="border-l-2 border-amber-500/40 pl-2.5 py-0.5">
                          <span className="text-slate-400 block text-[10px] font-medium uppercase tracking-wider">{spec.label}</span>
                          <span className="text-slate-200 font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions & WhatsApp Contact */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => openWhatsAppForTent(item.title, item.arabicTitle)}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-emerald-950/50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Quote (طلب عرض سعر)</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(item.quoteService)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-semibold text-xs sm:text-sm transition-all duration-200"
                  >
                    <span>Custom Calculation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Structural Breakdown Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Kuwaiti Steel &amp; Glass Engineering Standard</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Need a Custom Size Kuwaiti Tent for your Villa or Farm?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                We manufacture and install custom spans (4x4m, 5x6m, 6x8m, 7x10m up to 12x20m clear-span) with certified heavy steel sword framing, anti-corrosion primer, German Mehler/Ferrari PVC fabric roof, and heavy aluminium sliding glass tracks across all Emirates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={`tel:${COMPANY_CONFIG.phones[0].number}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Engineer ({COMPANY_CONFIG.phone})</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal('Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-xs sm:text-sm transition-all"
              >
                <span>Request Free Site Measurement</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full text-sm font-semibold transition-all"
              >
                ✕ Close (إغلاق)
              </button>
              <img
                src={selectedPhoto}
                alt={selectedProjectTitle}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/20"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-base sm:text-lg">{selectedProjectTitle}</p>
                <p className="text-amber-400 text-xs mt-1">Silver Shade Aluminium &amp; Glass Works LLC • Musaffah, Abu Dhabi</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
