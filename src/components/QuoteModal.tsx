import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Image as ImageIcon,
  SlidersHorizontal,
  Phone,
  MapPin
} from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA } from '../data/content';

// Import visual images for instant picture selection
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

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

interface PhotoOption {
  id: string;
  category: string;
  name: string;
  arabic: string;
  image: string;
  serviceKey: string;
}

const PHOTO_OPTIONS: PhotoOption[] = [
  // Windows
  { id: 'w1', category: 'windows', name: 'Black Minimalist Sliding Window', arabic: 'نافذة ألمنيوم سحاب أسود', image: windowSlidingImg, serviceKey: '10cm Aluminium with Double Glass' },
  { id: 'w2', category: 'windows', name: 'Wood-Grain Awning Window', arabic: 'نافذة قلاب مظهر خشبي', image: windowWoodImg, serviceKey: '10.37 Aluminium with Double Glass' },
  { id: 'w3', category: 'windows', name: 'Panoramic Fixed Grid Window', arabic: 'نافذة بانورامية كبيرة بقواطع', image: windowPanoramicImg, serviceKey: '10.5cm Aluminium with Double Glass' },
  { id: 'w4', category: 'windows', name: 'Kitchen & Bath Exhaust Window', arabic: 'نافذة شفاط للمطابخ والحمام', image: windowExhaustImg, serviceKey: '10cm Aluminium with Single Glass' },

  // Doors
  { id: 'd1', category: 'doors', name: 'Sliding Patio Glass Door', arabic: 'باب ألمنيوم سحاب زجاج', image: doorSlidingImg, serviceKey: 'Double Leaf Sliding Glass Patio Door' },
  { id: 'd2', category: 'doors', name: 'Double French Glass Door', arabic: 'باب ألمنيوم فرنسي دبل', image: doorFrenchImg, serviceKey: 'Double Hinge Aluminium French Glass Door' },
  { id: 'd3', category: 'doors', name: 'Single Hinge Aluminium Door', arabic: 'باب ألمنيوم مفصلات مفرد', image: doorHingeImg, serviceKey: 'Single Hinge Aluminium & Glass Door' },
  { id: 'd4', category: 'doors', name: 'Frameless Glass Securit Door', arabic: 'باب زجاج سيكوريت 12 ملم', image: doorSecuritImg, serviceKey: 'Frameless Tempered Glass Single Door (Securit)' },

  // Curtain Wall Facades
  { id: 'c1', category: 'facades', name: 'Curtain Wall 10/5 System', arabic: 'كيرتن وول 10/5 سم (100×50 ملم)', image: curtainWallImg, serviceKey: 'Curtain Wall 10/5 (10x5 cm / 100x50 mm)' },
  { id: 'c2', category: 'facades', name: 'Curtain Wall 8/5 System', arabic: 'كيرتن وول 8/5 سم (80×50 ملم)', image: curtainWallImg, serviceKey: 'Curtain Wall 8/5 (8x5 cm / 80x50 mm)' },

  // Kitchens
  { id: 'k1', category: 'kitchens', name: 'Kitchens - Single Piece Glass', arabic: 'مطابخ ألمنيوم - قطعة واحدة زجاج', image: kitchenImg, serviceKey: 'Kitchen Cabinets - Single Piece Glass Doors' },
  { id: 'k2', category: 'kitchens', name: 'Kitchens - Double Piece Glass', arabic: 'مطابخ ألمنيوم - قطعتين زجاج / دبل', image: kitchenImg, serviceKey: 'Kitchen Cabinets - Double Piece Glass Doors' },

  // Railings
  { id: 'r1', category: 'railings', name: 'Frameless Glass Balustrade', arabic: 'درابزين زجاج سيكوريت للسلالم', image: railingGlassImg, serviceKey: '12mm Toughened Frameless Glass' },
  { id: 'r2', category: 'railings', name: 'Black Aluminium Railing', arabic: 'درابزين ألمنيوم أسود عصري', image: railingPicketImg, serviceKey: 'Architectural Metal Railings' },
];

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [modalMode, setModalMode] = useState<'visual' | 'detailed'>('visual');
  const [activeTab, setActiveTab] = useState<string>('windows');
  const [selectedPhotoId, setSelectedPhotoId] = useState<string>('w1');
  
  const [selectedService, setSelectedService] = useState<string>(initialService || 'Luxury Villas & Facades');
  const [propertyType, setPropertyType] = useState<string>('Luxury Villa');
  const [projectLocation, setProjectLocation] = useState<string>('Dubai');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dimensions, setDimensions] = useState<string>('');
  const [glassType, setGlassType] = useState<string>('10cm Aluminium with Double Glass');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
      // Auto-detect matching category
      if (initialService.toLowerCase().includes('door')) {
        setActiveTab('doors');
        setSelectedPhotoId('d1');
      } else if (initialService.toLowerCase().includes('curtain') || initialService.toLowerCase().includes('facade')) {
        setActiveTab('facades');
        setSelectedPhotoId('c1');
      } else if (initialService.toLowerCase().includes('kitchen')) {
        setActiveTab('kitchens');
        setSelectedPhotoId('k1');
      } else if (initialService.toLowerCase().includes('railing') || initialService.toLowerCase().includes('glass')) {
        setActiveTab('railings');
        setSelectedPhotoId('r1');
      } else {
        setActiveTab('windows');
        setSelectedPhotoId('w1');
      }
    }
  }, [initialService]);

  if (!isOpen) return null;

  const currentPhoto = PHOTO_OPTIONS.find(p => p.id === selectedPhotoId) || PHOTO_OPTIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted('form');
  };

  const handleWhatsAppSend = () => {
    const chosenName = modalMode === 'visual' ? currentPhoto.name : glassType;
    const text = encodeURIComponent(
      `*Silver Shade Easy Quote Request*\n\n` +
      `• *Selected Design:* ${chosenName}\n` +
      `• *Category:* ${activeTab.toUpperCase()}\n` +
      `• *Location / City:* ${projectLocation}\n` +
      `• *Client Name:* ${fullName || 'Valued Customer'}\n` +
      `• *Phone / WA:* ${phone || 'Sent via WhatsApp'}\n` +
      (email ? `• *Email:* ${email}\n` : '') +
      (notes ? `• *Notes:* ${notes}\n` : '') +
      `\nPlease provide estimated price and arrange a free site sample inspection. Thank you!`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl bg-white dark:bg-[#0e1210] border border-emerald-900/20 dark:border-white/20 shadow-2xl overflow-hidden my-4 sm:my-8"
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/20 transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with Visual Mode Toggle */}
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-[#141a16] border-b border-emerald-900/10 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider font-mono">
              <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Easy Free Estimation • عرض سعر فوري</span>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-200 dark:bg-black/50 p-0.5 border border-slate-300 dark:border-white/10">
              <button
                type="button"
                onClick={() => setModalMode('visual')}
                className={`px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                  modalMode === 'visual'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>Choose by Picture (اختر بالصور)</span>
              </button>

              <button
                type="button"
                onClick={() => setModalMode('detailed')}
                className={`px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                  modalMode === 'detailed'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>Technical Form</span>
              </button>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white tracking-tight">
            {modalMode === 'visual' ? (
              <>Tap The Picture You Like &amp; <span className="text-emerald-700 dark:text-emerald-400 font-normal">Get Instant Price</span></>
            ) : (
              <>Detailed Architectural <span className="text-emerald-700 dark:text-emerald-400 font-normal">Project Specification</span></>
            )}
          </h2>
          <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
            {modalMode === 'visual'
              ? 'لا تحتاج إلى معرفة المواصفات الفنية المعقدة — اختر الصورة وأدخل رقم هاتفك لنرسل لك السعر والكتالوج فوراً.'
              : 'Specify custom profile depths, glazing units, and dimensions for engineering review.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-14 h-14 mx-auto bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">Request Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName || 'Valued Client'}</strong>. Our engineer in <strong>{projectLocation}</strong> will contact you with free 3D samples and pricing.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp for Fast Response</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ) : modalMode === 'visual' ? (
              
              /* EASY VISUAL MODE (3-STEP INTUITIVE FLOW) */
              <div className="space-y-5">
                
                {/* Step 1: Category Selector Pills */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Step 1: Choose Category (القسم)
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400">
                      Click to switch photos
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { id: 'windows', label: 'Windows', ar: 'نوافذ', icon: '🪟' },
                      { id: 'doors', label: 'Doors', ar: 'أبواب', icon: '🚪' },
                      { id: 'facades', label: 'Facades', ar: 'واجهات', icon: '🏢' },
                      { id: 'kitchens', label: 'Kitchens', ar: 'مطابخ', icon: '🍳' },
                      { id: 'railings', label: 'Railings', ar: 'درابزين', icon: '🪜' },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(cat.id);
                          const firstInCat = PHOTO_OPTIONS.find(p => p.category === cat.id);
                          if (firstInCat) setSelectedPhotoId(firstInCat.id);
                        }}
                        className={`py-2 px-1 text-center border transition-all cursor-pointer ${
                          activeTab === cat.id
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                            : 'bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-emerald-500/40'
                        }`}
                      >
                        <div className="text-sm">{cat.icon}</div>
                        <div className="text-[10px] font-bold mt-0.5 leading-tight">{cat.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Picture Grid for the active category */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Step 2: Tap Your Favorite Design (اضغط على الصورة المفضلة)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {PHOTO_OPTIONS.filter(p => p.category === activeTab).map((photo) => {
                      const isSelected = selectedPhotoId === photo.id;
                      return (
                        <div
                          key={photo.id}
                          onClick={() => setSelectedPhotoId(photo.id)}
                          className={`relative group bg-white dark:bg-white/[0.04] border-2 cursor-pointer transition-all overflow-hidden p-2 ${
                            isSelected
                              ? 'border-emerald-600 dark:border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                              : 'border-slate-200 dark:border-white/10 hover:border-emerald-500/40'
                          }`}
                        >
                          <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-black mb-2">
                            <img
                              src={photo.image}
                              alt={photo.name}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            
                            {/* Checkmark indicator */}
                            <div className="absolute bottom-1.5 right-1.5">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                                isSelected ? 'bg-emerald-600 text-white' : 'bg-white/80 text-slate-500'
                              }`}>
                                <Check className="w-3 h-3" />
                              </div>
                            </div>
                          </div>

                          <div className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                            {photo.name}
                          </div>
                          <div className="text-[10px] text-emerald-800 dark:text-emerald-400 font-arabic mt-0.5">
                            {photo.arabic}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Simple Contact Details */}
                <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Step 3: Where should we send the estimate? (معلومات التواصل)
                    </span>
                  </div>

                  {/* City selector pills */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400">City:</span>
                    {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Other'].map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setProjectLocation(city)}
                        className={`px-2.5 py-0.5 text-[11px] font-semibold transition-colors cursor-pointer ${
                          projectLocation === city
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-emerald-50'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                        Your Name (الاسم)
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ahmed / Sarah"
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-white/20 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
                        Phone / WhatsApp (رقم الهاتف) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 XXX XXXX"
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-white/20 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Instant Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Selected Picture to WhatsApp (إرسال فوري)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted('visual')}
                    className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Request Callback</span>
                  </button>
                </div>

                <div className="text-[10px] text-center text-slate-500 dark:text-gray-400">
                  ⚡ Guaranteed 15-minute response on WhatsApp • Free sample presentation on-site.
                </div>

              </div>

            ) : (

              /* ADVANCED TECHNICAL FORM MODE */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Select System / Solution Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-black/70 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600"
                  >
                    {SERVICES_DATA.map((svc) => (
                      <option key={svc.id} value={svc.name} className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                        {svc.number} — {svc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Profile Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Profile Depth &amp; Glass System Specification
                  </label>
                  <select
                    value={glassType}
                    onChange={(e) => setGlassType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-black/70 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600"
                  >
                    <optgroup label="Aluminium Profile Systems (قطاعات ألمنيوم)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                      <option value="10cm Aluminium with Single Glass">10cm Aluminium with Single Glass (ألمنيوم 10 سم زجاج مفرد)</option>
                      <option value="10cm Aluminium with Double Glass">10cm Aluminium with Double Glass (ألمنيوم 10 سم زجاج دبل)</option>
                      <option value="10.37 Aluminium with Single Glass">10.37 Aluminium with Single Glass (ألمنيوم 10.37 سم زجاج مفرد)</option>
                      <option value="10.37 Aluminium with Double Glass">10.37 Aluminium with Double Glass (ألمنيوم 10.37 سم زجاج دبل)</option>
                      <option value="10.5cm Aluminium with Single Glass">10.5cm Aluminium with Single Glass (ألمنيوم 10.5 سم زجاج مفرد)</option>
                      <option value="10.5cm Aluminium with Double Glass">10.5cm Aluminium with Double Glass (ألمنيوم 10.5 سم زجاج دبل)</option>
                    </optgroup>

                    <optgroup label="Curtain Wall Systems (كيرتن وول واجهات)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                      <option value="Curtain Wall 10/5 (10x5 cm / 100x50 mm)">Curtain Wall 10/5 (10x5 cm / 100x50 mm)</option>
                      <option value="Curtain Wall 8/5 (8x5 cm / 80x50 mm)">Curtain Wall 8/5 (8x5 cm / 80x50 mm)</option>
                    </optgroup>

                    <optgroup label="Kitchen Cabinets (مطابخ ألمنيوم وزجاج)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                      <option value="Kitchen Cabinets - Single Piece Glass Doors">Kitchen Cabinets - Single Piece Glass Doors</option>
                      <option value="Kitchen Cabinets - Double Piece Glass Doors">Kitchen Cabinets - Double Piece Glass Doors</option>
                    </optgroup>
                  </select>
                </div>

                {/* Property Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Property Type
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-black/70 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Luxury Villa">Luxury Villa / Mansion</option>
                      <option value="Penthouse / Apartment">Penthouse / Apartment</option>
                      <option value="Commercial Showroom">Commercial Showroom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Location in UAE
                    </label>
                    <input
                      type="text"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="e.g. Dubai Hills, Abu Dhabi"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Name"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Phone / WA <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 XXX XXXX"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Special Dimensions / Notes
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. 5 windows, 2 sliding doors, bronze finish..."
                    className="w-full px-3 py-1.5 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="submit"
                    className="w-full sm:w-2/3 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
                  >
                    <span>Submit for Engineering Review</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-1/3 py-3 bg-emerald-50 dark:bg-emerald-600/20 hover:bg-emerald-100 dark:hover:bg-emerald-600/30 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 text-xs font-bold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};


