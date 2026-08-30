import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, CheckCircle2, Calculator, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA, ALUMINIUM_SYSTEM_OPTIONS } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedService, setSelectedService] = useState<string>(initialService || 'Luxury Villas & Facades');
  const [propertyType, setPropertyType] = useState<string>('Luxury Villa');
  const [projectLocation, setProjectLocation] = useState<string>('Abu Dhabi / Dubai');
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
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted('form');
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*Silver Shade Architectural Quote Request*\n\n` +
      `• Service: ${selectedService}\n` +
      `• Property: ${propertyType}\n` +
      `• Location: ${projectLocation}\n` +
      `• System & Profile: ${glassType}\n` +
      `• Approx Dimensions: ${dimensions || 'To be measured on site'}\n` +
      `• Client Name: ${fullName || 'Client'}\n` +
      `• Contact: ${phone || email || 'Requested WhatsApp Contact'}\n` +
      `• Notes: ${notes || 'Looking for technical consultation'}`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl bg-white dark:bg-[#111317] border border-emerald-900/20 dark:border-white/20 rounded-none shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-none bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-emerald-50/70 dark:bg-gradient-to-b dark:from-[#181b22] dark:to-[#111317] border-b border-emerald-900/10 dark:border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>Direct Dubai Architectural Estimation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
            Request a Free Project Quotation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Specify your requirements below for custom shop drawings and cost breakdown.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-white/10 text-emerald-700 dark:text-white flex items-center justify-center border border-emerald-300 dark:border-white/20">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-white" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">Quotation Request Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our senior estimating engineer will review your requirements for <strong>{selectedService}</strong> in <strong>{projectLocation}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-none flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp for Instant Fast-Track</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs font-bold uppercase tracking-wider rounded-none"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Select System / Solution Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-black/70 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                  >
                    {SERVICES_DATA.map((svc) => (
                      <option key={svc.id} value={svc.name} className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                        {svc.number} — {svc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Property Type
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-black/70 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Luxury Villa" className="bg-white dark:bg-[#121418]">Luxury Villa / Mansion</option>
                      <option value="Penthouse / Apartment" className="bg-white dark:bg-[#121418]">Penthouse / Apartment</option>
                      <option value="Commercial Office" className="bg-white dark:bg-[#121418]">Commercial Office</option>
                      <option value="Retail Showroom" className="bg-white dark:bg-[#121418]">Retail Showroom</option>
                      <option value="Outdoor Terrace" className="bg-white dark:bg-[#121418]">Outdoor Terrace / Pool Deck</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Area in Dubai / UAE
                    </label>
                    <input
                      type="text"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="e.g. Palm Jumeirah, Dubai Hills, Downtown"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Glass Type & Approx Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Aluminium Profile / Glazing System
                    </label>
                    <select
                      value={glassType}
                      onChange={(e) => setGlassType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-black/70 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    >
                      <optgroup label="Architectural Door Systems (أبواب ألمنيوم وزجاج)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                        <option value="Single Hinge Aluminium & Glass Door" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Single Hinge Aluminium &amp; Glass Door (باب ألمنيوم مفصلات مفرد)
                        </option>
                        <option value="Double Hinge Aluminium French Glass Door" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Double Hinge Aluminium French Glass Door (باب ألمنيوم مفصلات دبل / فرنسي)
                        </option>
                        <option value="Single Leaf Sliding Aluminium Glass Door" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Single Leaf Sliding Aluminium Glass Door (باب ألمنيوم سحاب مفرد)
                        </option>
                        <option value="Double Leaf Sliding Glass Patio Door" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Double Leaf Sliding Glass Patio Door (باب ألمنيوم سحاب دبل ضلفتين)
                        </option>
                        <option value="Frameless Tempered Glass Single Door (Securit)" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Frameless Glass Single Door (باب زجاج سيكوريت مفرد 12 ملم)
                        </option>
                        <option value="Frameless Tempered Glass Double Door (Securit)" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Frameless Glass Double Door (باب زجاج سيكوريت دبل ضلفتين)
                        </option>
                      </optgroup>

                      <optgroup label="Aluminium Profile Systems (قطاعات ألمنيوم)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                        <option value="10cm Aluminium with Single Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          10cm Aluminium with Single Glass (ألمنيوم 10 سم زجاج مفرد)
                        </option>
                        <option value="10cm Aluminium with Double Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          10cm Aluminium with Double Glass (ألمنيوم 10 سم زجاج دبل)
                        </option>
                        <option value="10.37 Aluminium with Single Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          10.37 Aluminium with Single Glass (ألمنيوم 10.37 سم زجاج مفرد)
                        </option>
                        <option value="10.37 Aluminium with Double Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          10.37 Aluminium with Double Glass (ألمنيوم 10.37 سم زجاج دبل)
                        </option>
                        <option value="10.5cm Aluminium with Single Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          10.5cm Aluminium with Single Glass (ألمنيوم 10.5 سم زجاج مفرد)
                        </option>
                        <option value="10.5cm Aluminium with Double Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          10.5cm Aluminium with Double Glass (ألمنيوم 10.5 سم زجاج دبل)
                        </option>
                      </optgroup>

                      <optgroup label="Curtain Wall Systems (كيرتن وول واجهات)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                        <option value="Curtain Wall 10/5 (10x5 cm / 100x50 mm)" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Curtain Wall 10/5 (10x5 cm / 100x50 mm) (كيرتن وول واجهات 10/5 سم)
                        </option>
                        <option value="Curtain Wall 8/5 (8x5 cm / 80x50 mm)" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Curtain Wall 8/5 (8x5 cm / 80x50 mm) (كيرتن وول واجهات 8/5 سم)
                        </option>
                      </optgroup>

                      <optgroup label="Kitchen Cabinet Glass Options (خزائن مطابخ ألمنيوم وزجاج)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                        <option value="Kitchen Cabinets - Single Piece Glass Doors" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Kitchen Cabinets - Single Piece Glass (خزائن مطابخ قطعة واحدة زجاج)
                        </option>
                        <option value="Kitchen Cabinets - Double Piece Glass Doors" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Kitchen Cabinets - Double Piece Glass (خزائن مطابخ قطعتين زجاج / دبل)
                        </option>
                      </optgroup>

                      <optgroup label="Architectural Glass & Balustrades (زجاج معماري وسيكوريت)" className="bg-slate-100 dark:bg-[#181c22] font-semibold text-emerald-800 dark:text-emerald-400">
                        <option value="12mm Toughened Frameless Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          12mm Toughened Frameless Glass (زجاج سيكوريت 12 ملم)
                        </option>
                        <option value="SentryGlas Structural Laminated Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          SentryGlas Structural Laminated Glass (زجاج مصفح عالي الأمان)
                        </option>
                        <option value="Smart Switchable Privacy PDLC Glass" className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                          Smart Switchable Privacy PDLC Glass (زجاج ذكي)
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Approx Dimensions / Scope
                    </label>
                    <input
                      type="text"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      placeholder="e.g. 4m x 3m Opening / 3 Doors / Full Villa"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Contact Info (Name, Phone, Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600 placeholder:text-slate-400 dark:placeholder:text-slate-600"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Special Architectural Notes / Finish Preference
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Bronze anodized finish, flush floor track required, ready for site survey..."
                    className="w-full px-3.5 py-2 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 rounded-none text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-600 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    id="quote-modal-submit-btn"
                    className="w-full sm:w-2/3 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
                  >
                    <span>Submit for Engineering Review</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    id="quote-modal-whatsapp-btn"
                    className="w-full sm:w-1/3 py-3.5 bg-emerald-50 dark:bg-emerald-600/20 hover:bg-emerald-100 dark:hover:bg-emerald-600/30 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 text-xs font-bold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp Direct</span>
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

