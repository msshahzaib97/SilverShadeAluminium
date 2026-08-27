import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageCircle, Mail, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA } from '../data/content';
import { QuoteFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: 'Aluminium Doors',
    projectLocation: 'Dubai',
    propertyType: 'villa',
    projectDetails: '',
    preferredContact: 'whatsapp',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry - Silver Shade Aluminium*\n` +
      `• Name: ${formData.fullName || 'Client'}\n` +
      `• Phone/WA: ${formData.phone || 'Provided via form'}\n` +
      `• Email: ${formData.email || 'Provided via form'}\n` +
      `• Service: ${formData.serviceRequired}\n` +
      `• Property: ${formData.propertyType}\n` +
      `• Location: ${formData.projectLocation}\n` +
      `• Details: ${formData.projectDetails || 'Interested in consultation'}`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f8faf9] dark:bg-[#060a08] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
            <span className="text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
              GET IN TOUCH
            </span>
            <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
            Let&apos;s Discuss <span className="text-emerald-700 dark:text-emerald-400 font-normal">Your Project</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-normal leading-relaxed">
            Have a project in mind? Tell us what you&apos;re looking for and our engineering team will get back to you.
          </p>
        </div>

        {/* Dual Column Layout: Contact Info vs Interactive Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Company Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-none bg-white dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 space-y-6 shadow-sm">
              
              <div>
                <div className="text-xs font-bold tracking-[0.25em] text-emerald-800 dark:text-emerald-400 uppercase mb-1">
                  Company Headquarters
                </div>
                <h3 className="text-2xl font-light text-slate-900 dark:text-white tracking-tight">
                  {COMPANY_CONFIG.brandName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                  {COMPANY_CONFIG.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10 text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-emerald-50 dark:bg-white/5 border border-emerald-200 dark:border-white/10 flex items-center justify-center text-emerald-700 dark:text-slate-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-slate-900 dark:text-white font-medium">{COMPANY_CONFIG.location}</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400 block mt-0.5">{COMPANY_CONFIG.address}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-emerald-50 dark:bg-white/5 border border-emerald-200 dark:border-white/10 flex items-center justify-center text-emerald-700 dark:text-slate-300 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Phone</span>
                    <span className="text-slate-900 dark:text-white font-medium">{COMPANY_CONFIG.phone}</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">WhatsApp</span>
                    <span className="text-slate-900 dark:text-white font-medium">{COMPANY_CONFIG.whatsappDisplay}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-emerald-50 dark:bg-white/5 border border-emerald-200 dark:border-white/10 flex items-center justify-center text-emerald-700 dark:text-slate-300 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Email</span>
                    <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-slate-900 dark:text-white font-medium hover:text-emerald-600 transition-colors">
                      {COMPANY_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="w-9 h-9 rounded-none bg-emerald-50 dark:bg-white/5 border border-emerald-200 dark:border-white/10 flex items-center justify-center text-emerald-700 dark:text-slate-300 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Operating Hours</span>
                    <span className="text-slate-700 dark:text-slate-300 text-xs">{COMPANY_CONFIG.workingHours}</span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="p-4 rounded-none bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Instant WhatsApp Response</div>
                    <div className="text-[10px] text-slate-600 dark:text-slate-400">Share site photos or sketches directly</div>
                  </div>
                </div>
                <button
                  onClick={handleSendViaWhatsApp}
                  className="px-3.5 py-2 bg-emerald-600 text-white hover:bg-emerald-700 text-[11px] font-bold uppercase tracking-wider rounded-none transition-colors shrink-0 shadow-sm"
                >
                  Chat Now
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Quote & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-none bg-white dark:bg-[#121418] border border-emerald-900/10 dark:border-white/10 shadow-xl relative">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>Request a Free Architectural Quote</span>
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Fill in your project details below. Our estimators respond with custom technical scopes.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 text-center bg-emerald-50/50 dark:bg-white/[0.03] border border-emerald-200 dark:border-white/10 rounded-none space-y-4"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-white/10 text-emerald-700 dark:text-white flex items-center justify-center border border-emerald-300 dark:border-white/20">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-white" />
                    </div>
                    <h4 className="text-xl font-medium text-slate-900 dark:text-white">Thank You for Your Inquiry</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Our engineering and estimation team has received your project details. We will contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleSendViaWhatsApp}
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-none flex items-center gap-2 shadow-md shadow-emerald-600/20"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Details Directly via WhatsApp</span>
                      </button>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            serviceRequired: 'Aluminium Doors',
                            projectLocation: 'Dubai',
                            propertyType: 'villa',
                            projectDetails: '',
                            preferredContact: 'whatsapp',
                          });
                        }}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs uppercase tracking-wider rounded-none font-semibold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Mohammed Al Mansoori"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 XXX XXXX"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Service Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Service Required
                        </label>
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-black/80 border border-slate-200 dark:border-white/10 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.name} className="bg-white dark:bg-[#121418] text-slate-900 dark:text-white">
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Property Type & Project Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Property Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-black/80 border border-slate-200 dark:border-white/10 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                        >
                          <option value="villa" className="bg-white dark:bg-[#121418]">Luxury Villa / Mansion</option>
                          <option value="apartment" className="bg-white dark:bg-[#121418]">Penthouse / Apartment</option>
                          <option value="commercial" className="bg-white dark:bg-[#121418]">Commercial Office / Tower</option>
                          <option value="retail" className="bg-white dark:bg-[#121418]">Retail / Hospitality</option>
                          <option value="other" className="bg-white dark:bg-[#121418]">Other Bespoke Project</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Project Location in UAE
                        </label>
                        <input
                          type="text"
                          value={formData.projectLocation}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          placeholder="e.g. Palm Jumeirah, Dubai Hills, DIFC"
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Project Details / Dimensions / Special Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us about your space, approximate opening sizes, finish preferences (matt black, anodized champagne), or timeline..."
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-none text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button & WhatsApp Quick Trigger */}
                    <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        disabled={loading}
                        id="submit-quote-btn"
                        className="w-full sm:w-2/3 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20 disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Processing...</span>
                        ) : (
                          <>
                            <span>Request a Free Quote</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleSendViaWhatsApp}
                        id="form-direct-whatsapp-btn"
                        className="w-full sm:w-1/3 py-3.5 bg-emerald-50 dark:bg-emerald-600/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-600/30 text-xs font-bold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center pt-2">
                      Strict privacy. Your contact details are solely used for direct engineering consultations.
                    </p>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

