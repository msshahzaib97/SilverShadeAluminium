import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Maximize2, 
  Image as ImageIcon,
  CheckCircle2,
  X,
  PhoneCall,
  ChevronRight
} from 'lucide-react';

import windowWoodImg from '../assets/images/window_wood_awning_1787905048945.jpg';
import windowSlidingImg from '../assets/images/window_black_sliding_1787905064205.jpg';
import windowPanoramicImg from '../assets/images/window_panoramic_grid_1787905085926.jpg';
import windowExhaustImg from '../assets/images/window_exhaust_vent_1787905111213.jpg';

import doorHingeImg from '../assets/images/door_hinge_system_1788067173744.jpg';
import doorFrenchImg from '../assets/images/door_french_double_1788067234048.jpg';
import doorSlidingImg from '../assets/images/door_sliding_system_1788067196025.jpg';
import doorSecuritImg from '../assets/images/door_glass_securit_1788067213476.jpg';

import curtainWallImg from '../assets/images/curtain_wall_facade_1788067488682.jpg';
import kitchenImg from '../assets/images/kitchen_glass_cabinets_1788067510108.jpg';

import railingGlassImg from '../assets/images/railing_glass_staircase_1787911028671.jpg';
import railingPicketImg from '../assets/images/railing_black_picket_1787911051401.jpg';
import railingFloatingImg from '../assets/images/railing_floating_wood_1787911068938.jpg';
import railingRampImg from '../assets/images/railing_exterior_ramp_1787911087105.jpg';

import majlisSunsetImg from '../assets/images/majlis_qarmeed_sunset_1788068765072.jpg';
import majlisVillaImg from '../assets/images/majlis_qarmeed_villa_1788068782318.jpg';
import majlisArchImg from '../assets/images/majlis_arch_windows_1788068799568.jpg';
import majlisGardenImg from '../assets/images/majlis_modern_garden_1788068918527.jpg';
import majlisStoneImg from '../assets/images/majlis_qarmeed_stone_1788068900043.jpg';

import tentNightImg from '../assets/images/tent_kuwaiti_night_1788114059718.jpg';
import tentGardenImg from '../assets/images/tent_kuwaiti_garden_1788114093298.jpg';
import tentTerraceImg from '../assets/images/tent_kuwaiti_terrace_1788114118445.jpg';
import tentEveningImg from '../assets/images/tent_kuwaiti_evening_1788114138136.jpg';

import { COMPANY_CONFIG } from '../data/content';

interface VisualItem {
  id: string;
  category: 'tents' | 'majlis' | 'windows' | 'doors' | 'curtain_wall' | 'kitchens' | 'railings';
  title: string;
  arabicTitle: string;
  image: string;
  tag: string;
  description: string;
  serviceKey: string;
}

const VISUAL_CATALOGUE: VisualItem[] = [
  // Kuwaiti Winter Tents (خيام شتوية شكل كويتي)
  {
    id: 'tent-night-luxury',
    category: 'tents',
    title: 'Kuwaiti Winter Tent with Steel Sword & Sliding Glass',
    arabicTitle: 'خيمة شتاء سيف حديد شكل كويتي مع زجاج سلايدنج',
    image: tentNightImg,
    tag: 'Trending Winter 2026',
    description: 'Heavy steel sword structure, traditional scalloped valance fringe, and warm 3000K ambient LED lights.',
    serviceKey: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
  },
  {
    id: 'tent-garden-lawn',
    category: 'tents',
    title: 'Villa Garden Kuwaiti Tent with Solar Glass',
    arabicTitle: 'خيمة حديقة شتوية مودرن شكل كويتي مع زجاج عاكس',
    image: tentGardenImg,
    tag: 'Private Villa Garden',
    description: 'Tensile waterproof fabric roof with solar control reflective sliding glass panels.',
    serviceKey: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
  },
  {
    id: 'tent-rooftop-calligraphy',
    category: 'tents',
    title: 'Rooftop Kuwaiti Tent with Arabic Calligraphy Trim',
    arabicTitle: 'خيمة شتوية للسطح والروف بزخرفة خط عربي وهيكل حديد',
    image: tentTerraceImg,
    tag: 'Rooftop Majlis',
    description: 'High wind-load engineered steel base with traditional Arabic calligraphy valance border.',
    serviceKey: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
  },
  {
    id: 'tent-evening-canopy',
    category: 'tents',
    title: 'Royal Winter Tent with Extended Porch Canopy',
    arabicTitle: 'خيمة شتوية ملكية مع مدخل مظلة قماشية وستائر جانبية',
    image: tentEveningImg,
    tag: 'VIP Hospitality',
    description: 'Full glass sliding facade with projecting fabric entrance canopy and glowing ambient sconces.',
    serviceKey: 'Kuwaiti Winter Glass Tent (خيمة شتاء سيف حديد كويتي)'
  },
  // Majlis Tabuk & Qarmeed
  {
    id: 'majlis-sunset',
    category: 'majlis',
    title: 'Villa Majlis with Spanish Qarmeed Roof',
    arabicTitle: 'مجلس فيلا فاخر مع سقف قرميد إسباني وأبواب سلايدنج',
    image: majlisSunsetImg,
    tag: 'Popular for UAE Villas',
    description: 'Authentic Spanish terracotta clay tile pitched roof with insulated blockwork and floor-to-ceiling glass.',
    serviceKey: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
  },
  {
    id: 'majlis-arch',
    category: 'majlis',
    title: 'Arched Glass Windows Majlis Annex',
    arabicTitle: 'ملحق مجلس زجاجي بنوافذ أقواس مقوسة وإضاءة سقفية',
    image: majlisArchImg,
    tag: 'Architectural Heritage',
    description: 'Custom arched aluminium glass window facades with warm ambient interior and roof downlights.',
    serviceKey: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
  },
  {
    id: 'majlis-modern-garden',
    category: 'majlis',
    title: 'Ultra-Slim Glass Garden Majlis & Lounge',
    arabicTitle: 'مجلس زجاجي مودرن للحديقة مع قطاع نحيف سلايدنج بانوراما',
    image: majlisGardenImg,
    tag: 'Minimalist Luxury',
    description: 'Contemporary slim black aluminium floor-to-ceiling sliding glass doors with travertine patio.',
    serviceKey: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
  },
  {
    id: 'majlis-stone',
    category: 'majlis',
    title: 'Travertine Stone Clad Majlis with Qarmeed',
    arabicTitle: 'مجلس حجر طبيعي مع قرميد إسباني أحمر وشبابيك ألمنيوم',
    image: majlisStoneImg,
    tag: 'Natural Stone Luxury',
    description: 'Natural travertine stone cladding with Spanish red clay tile roof and bronze reflective glass.',
    serviceKey: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
  },
  {
    id: 'majlis-villa-day',
    category: 'majlis',
    title: 'Tabuk Majlis with 10cm Aluminium Windows',
    arabicTitle: 'مجلس طابوق عصري مع قرميد إسباني وألمنيوم 10 سم زجاج دبل',
    image: majlisVillaImg,
    tag: 'Turnkey Construction',
    description: 'High-density insulated blockwork with double glazed acoustic Low-E windows and French double entrance.',
    serviceKey: 'Tabuk Majlis & Glass Annexes (مجلس تبوك)'
  },
  // Windows
  {
    id: 'win-sliding',
    category: 'windows',
    title: 'Modern Black Sliding Window',
    arabicTitle: 'نافذة ألمنيوم سحاب أسود حديث',
    image: windowSlidingImg,
    tag: 'Popular for Villas',
    description: 'Smooth multi-track sliding with double acoustic insulated glass for bedrooms & living rooms.',
    serviceKey: '10cm Aluminium with Double Glass'
  },
  {
    id: 'win-wood',
    category: 'windows',
    title: 'Wood-Grain Awning Window',
    arabicTitle: 'نافذة قلاب مظهر خشبي أنيق',
    image: windowWoodImg,
    tag: 'Classic Warm Aesthetic',
    description: 'Natural oak woodgrain finish with top-hinged rain-proof opening mechanism.',
    serviceKey: '10.37 Aluminium with Double Glass'
  },
  {
    id: 'win-panoramic',
    category: 'windows',
    title: 'Panoramic Grid View Window',
    arabicTitle: 'نافذة بانورامية كبيرة مع قواطع هندسية',
    image: windowPanoramicImg,
    tag: 'Architectural Feature',
    description: 'Floor-to-ceiling fixed glass panels with sleek modern dividers for majlis & gardens.',
    serviceKey: '10.5cm Aluminium with Double Glass'
  },
  {
    id: 'win-exhaust',
    category: 'windows',
    title: 'Exhaust Vent Kitchen/Bath Window',
    arabicTitle: 'نافذة تهوية مع شفاط للمطابخ والحمامات',
    image: windowExhaustImg,
    tag: 'Moisture & Ventilation',
    description: 'Integrated exhaust louvers with privacy frosted glass and pest insect mesh screen.',
    serviceKey: '10cm Aluminium with Single Glass'
  },

  // Doors
  {
    id: 'door-sliding',
    category: 'doors',
    title: 'Sliding Patio Glass Door',
    arabicTitle: 'باب ألمنيوم سحاب زجاج للبلكونات والحدائق',
    image: doorSlidingImg,
    tag: 'Indoor-Outdoor Living',
    description: 'Effortless sliding glass panels with flush floor track for seamless villa patio access.',
    serviceKey: 'Double Leaf Sliding Glass Patio Door'
  },
  {
    id: 'door-french',
    category: 'doors',
    title: 'Double French Glass Door',
    arabicTitle: 'باب ألمنيوم فرنسي دبل ضلفتين',
    image: doorFrenchImg,
    tag: 'Luxury Entrance',
    description: 'Classic double-opening swing doors with German multi-point secure locking system.',
    serviceKey: 'Double Hinge Aluminium French Glass Door'
  },
  {
    id: 'door-hinge',
    category: 'doors',
    title: 'Single Hinge Aluminium Door',
    arabicTitle: 'باب ألمنيوم مفصلات مفرد للمداخل والغرف',
    image: doorHingeImg,
    tag: 'Durable & Sealed',
    description: 'Heavy-duty single swing door with acoustic perimeter rubber seals and designer handle.',
    serviceKey: 'Single Hinge Aluminium & Glass Door'
  },
  {
    id: 'door-securit',
    category: 'doors',
    title: 'Frameless Glass Door (Securit)',
    arabicTitle: 'باب زجاج سيكوريت بدون إطار 12 ملم',
    image: doorSecuritImg,
    tag: 'Minimal Office & Villa',
    description: '12mm crystal tempered safety glass with hydraulic stainless steel floor spring hinge.',
    serviceKey: 'Frameless Tempered Glass Single Door (Securit)'
  },

  // Curtain Wall Facades
  {
    id: 'facade-10x5',
    category: 'curtain_wall',
    title: 'Curtain Wall Facade 10/5 System',
    arabicTitle: 'كيرتن وول واجهات زجاجية 10/5 سم (100×50 ملم)',
    image: curtainWallImg,
    tag: 'Double-Height Atriums',
    description: 'Heavy structural mullions engineered for double-height villa facades, showrooms & towers.',
    serviceKey: 'Curtain Wall 10/5 (10x5 cm / 100x50 mm)'
  },
  {
    id: 'facade-8x5',
    category: 'curtain_wall',
    title: 'Curtain Wall Facade 8/5 System',
    arabicTitle: 'كيرتن وول واجهات 8/5 سم (80×50 ملم)',
    image: curtainWallImg,
    tag: 'Villa Elevations',
    description: 'Medium 80mm architectural grid for panoramic villa stairwells, entrances & light wells.',
    serviceKey: 'Curtain Wall 8/5 (8x5 cm / 80x50 mm)'
  },

  // Kitchens
  {
    id: 'kitchen-single',
    category: 'kitchens',
    title: 'Kitchens - Single Piece Glass Doors',
    arabicTitle: 'خزائن مطابخ - قطعة واحدة زجاج صافي',
    image: kitchenImg,
    tag: 'Seamless Minimal Look',
    description: 'Full seamless tempered glass door fronts (Smoked/Fluted/Clear) with Blum soft-close.',
    serviceKey: 'Kitchen Cabinets - Single Piece Glass Doors'
  },
  {
    id: 'kitchen-double',
    category: 'kitchens',
    title: 'Kitchens - Double Piece Glass Doors',
    arabicTitle: 'خزائن مطابخ - قطعتين زجاج / دبل جلاس',
    image: kitchenImg,
    tag: 'Architectural Frame',
    description: 'Dual glass panel shutters with internal dividers for tall display pantries and larders.',
    serviceKey: 'Kitchen Cabinets - Double Piece Glass Doors'
  },

  // Railings
  {
    id: 'railing-glass',
    category: 'railings',
    title: 'Frameless Glass Balustrade',
    arabicTitle: 'درابزين زجاج سيكوريت للسلالم والشرفات',
    image: railingGlassImg,
    tag: 'Ultra-Clear View',
    description: '12mm-17.52mm laminated glass secured in concealed aluminium shoe base channel.',
    serviceKey: '12mm Toughened Frameless Glass'
  },
  {
    id: 'railing-picket',
    category: 'railings',
    title: 'Black Aluminium Picket Railing',
    arabicTitle: 'درابزين ألمنيوم أسود عصري',
    image: railingPicketImg,
    tag: 'Modern Architectural',
    description: 'Matte black powder-coated aluminium vertical balusters for indoor stairs & balconies.',
    serviceKey: 'Architectural Metal Railings'
  },
  {
    id: 'railing-floating',
    category: 'railings',
    title: 'Floating Stairs Glass Railing',
    arabicTitle: 'درابزين زجاجي للسلالم العائمة والفاخرة',
    image: railingFloatingImg,
    tag: 'Luxury Modern Villas',
    description: 'Side-mounted stainless steel standoff point fixings for cantilevered floating stair treads.',
    serviceKey: 'SentryGlas Structural Laminated Glass'
  },
  {
    id: 'railing-ramp',
    category: 'railings',
    title: 'Outdoor Ramp & Terrace Balustrade',
    arabicTitle: 'درابزين خارجي للمنحدرات والتراسات',
    image: railingRampImg,
    tag: 'Weather-Resistant',
    description: 'Marine-grade weather-proof posts with tempered glass for villa entrances and pool decks.',
    serviceKey: '12mm Toughened Frameless Glass'
  },
];

interface VisualProjectSelectorProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const VisualProjectSelector: React.FC<VisualProjectSelectorProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tents' | 'majlis' | 'windows' | 'doors' | 'curtain_wall' | 'kitchens' | 'railings'>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>(['tent-night-luxury']);
  const [clientCity, setClientCity] = useState<string>('Dubai');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All Pictures (الكل)', icon: '🌟' },
    { id: 'tents', label: 'Kuwaiti Tents (خيام شتوية)', icon: '⛺' },
    { id: 'majlis', label: 'Majlis & Qarmeed (مجلس وقرميد)', icon: '🏛️' },
    { id: 'windows', label: 'Windows (نوافذ)', icon: '🪟' },
    { id: 'doors', label: 'Doors (أبواب)', icon: '🚪' },
    { id: 'curtain_wall', label: 'Curtain Wall (واجهات)', icon: '🏢' },
    { id: 'kitchens', label: 'Kitchens (مطابخ)', icon: '🍳' },
    { id: 'railings', label: 'Railings (درابزين)', icon: '🪜' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? VISUAL_CATALOGUE 
    : VISUAL_CATALOGUE.filter(item => item.category === activeCategory);

  const toggleSelection = (id: string) => {
    if (selectedItems.includes(id)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter(item => item !== id));
      }
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const selectedObjects = VISUAL_CATALOGUE.filter(item => selectedItems.includes(item.id));

  const handleWhatsAppSend = () => {
    const itemsList = selectedObjects
      .map((item, idx) => `${idx + 1}. ${item.title} (${item.arabicTitle})`)
      .join('\n');

    const message = 
      `*Easy Picture Quote Request - Silver Shade Aluminium*\n\n` +
      `Hello! I selected the following designs from your picture catalogue:\n\n` +
      `${itemsList}\n\n` +
      `• *City / Location:* ${clientCity}\n` +
      `• *Client Name:* ${clientName || 'Valued Customer'}\n` +
      `• *Phone / WA:* ${clientPhone || 'Requested directly on WhatsApp'}\n\n` +
      `Please provide estimated pricing and available options for these photos. Thank you!`;

    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="easy-quote" className="py-20 sm:py-28 bg-white dark:bg-[#080d0a] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Friendly Header for Customers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold uppercase tracking-wider font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>EASY PHOTO-BASED ESTIMATION • اختر بالصور بكل سهولة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white tracking-tight">
            Not Sure About Technical Specs? <br />
            <span className="text-emerald-700 dark:text-emerald-400 font-normal">Just Tap The Pictures You Like!</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            لا داعي لمعرفة التفاصيل الهندسية المعقدة — اختر الصور التي تناسب ذوقك ومشروعك بنقرة واحدة واحصل على عرض سعر فوري عبر الواتساب مع زيارة مجانية للموقع.
          </p>
        </div>

        {/* Step 1: Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2.5 text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                  : 'bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-emerald-500/50'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Step 2: Visual Picture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => {
            const isSelected = selectedItems.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleSelection(item.id)}
                className={`relative group bg-white dark:bg-white/[0.03] border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'border-emerald-600 dark:border-emerald-500 shadow-lg shadow-emerald-600/15 ring-2 ring-emerald-500/20 scale-[1.01]'
                    : 'border-slate-200 dark:border-white/10 hover:border-emerald-500/40 hover:shadow-md'
                }`}
              >
                {/* Photo Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                  {/* Badge & Zoom */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono font-medium">
                    {item.tag}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomImg({ src: item.image, title: item.title });
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 bg-black/70 hover:bg-emerald-600 text-white transition-colors cursor-pointer"
                    title="Zoom Picture"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Selected Checkmark overlay */}
                  <div className="absolute bottom-2.5 right-2.5">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-white/70 text-slate-400 dark:bg-black/60 dark:text-gray-400'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs font-arabic font-medium text-emerald-800 dark:text-emerald-300 mb-2">
                      {item.arabicTitle}
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400">
                      {isSelected ? '✓ Selected (تم الاختيار)' : 'Tap photo to select'}
                    </span>
                    <span className={`text-xs font-bold ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {isSelected ? 'Selected' : '+ Add'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step 3: Fast 1-Click Action Bar for Selected Pictures */}
        <div className="bg-slate-50 dark:bg-white/[0.03] border-2 border-emerald-600/50 dark:border-emerald-500/40 p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Selected Summary */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>You Selected ({selectedObjects.length}) Design(s) • التصاميم المختارة</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedObjects.map((obj) => (
                  <span
                    key={obj.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-black/50 border border-emerald-900/15 dark:border-white/15 text-xs text-slate-900 dark:text-white font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{obj.title}</span>
                  </span>
                ))}
              </div>

              {/* City Selector Pills */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                  Select Project Location (المدينة):
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Other UAE'].map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setClientCity(city)}
                      className={`px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                        clientCity === city
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-emerald-50'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Inputs & WhatsApp Instant Button */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Name (الاسم)
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Mohammed / Sarah"
                    className="w-full px-3 py-2 bg-white dark:bg-black/60 border border-slate-300 dark:border-white/20 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Phone / WA (رقم الهاتف)
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+971 50 XXX XXXX"
                    className="w-full px-3 py-2 bg-white dark:bg-black/60 border border-slate-300 dark:border-white/20 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-600/25"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Photos to WhatsApp (إرسال فوري)</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(selectedObjects[0]?.serviceKey || 'Luxury Villas & Facades')}
                  className="w-full sm:w-auto px-5 py-3.5 bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Detailed Form</span>
                  <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
                </button>
              </div>

              <div className="text-center sm:text-left text-[11px] text-slate-500 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Free site inspection &amp; 3D sample presentation across Dubai &amp; Abu Dhabi.</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setZoomImg(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setZoomImg(null)}
              className="absolute -top-10 right-0 text-white hover:text-emerald-400 transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={zoomImg.src}
              alt={zoomImg.title}
              className="w-full h-auto max-h-[85vh] object-contain border border-white/20"
            />
            <div className="mt-3 text-center text-xs text-white/90 font-mono">
              {zoomImg.title} • Silver Shade Architectural Catalogue
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
