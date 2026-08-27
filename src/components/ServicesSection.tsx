import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Capabilities (16)' },
    { id: 'Doors & Windows', label: 'Doors & Windows (أبواب ونوافذ)' },
    { id: 'Villas & Interiors', label: 'Villas & Interiors (فلل ومطابخ)' },
    { id: 'Shading & Roofing', label: 'Shades, Pergolas & Qarmid (مظلات وقراميد)' },
    { id: 'Tents & Majlis', label: 'Tents & Majlis (خيام ومجالس)' },
    { id: 'Railings & Ironworks', label: 'Railings & Iron (درابزين وسيف حديد)' },
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
        (activeCategory === 'Doors & Windows' && (s.category === 'Doors & Windows' || s.category === 'Windows & Glazing')) ||
        (activeCategory === 'Villas & Interiors' && (s.category === 'Villas & Interiors' || s.category === 'Villas & Architecture')) ||
        (activeCategory === 'Shading & Roofing' && (s.category === 'Shading & Roofing' || s.category === 'Outdoor & Shading')) ||
        (activeCategory === 'Tents & Majlis' && (s.category === 'Tents & Majlis' || s.category === 'Tents & Structures')) ||
        (activeCategory === 'Railings & Ironworks' && (s.category === 'Railings & Ironworks' || s.category === 'Railings & Balustrades'))
      );

  return (
    <section id="services" className="py-24 sm:py-32 bg-white dark:bg-[#080d0a] relative border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-emerald-900/10 dark:border-emerald-500/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
                ARCHITECTURAL CAPABILITIES &amp; FABRICATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
              Aluminium, Glass &amp; <span className="text-emerald-700 dark:text-emerald-400 font-normal">Steel Solutions</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-md font-normal leading-relaxed">
            Engineered systems for luxury villas, modern kitchens, car parking shades, royal tents, Arabic majlis, Kuwaiti ironwork, and glass architecture in Abu Dhabi &amp; Dubai.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200 dark:border-white/10 text-xs text-slate-400 shrink-0">
            <Filter className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="uppercase tracking-wider font-mono text-[10px] font-bold">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider whitespace-nowrap rounded-none transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white border-emerald-700 dark:bg-emerald-600 dark:border-emerald-500 shadow-md shadow-emerald-700/20'
                  : 'bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-none backdrop-blur-xl bg-slate-50/80 dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/40 hover:bg-emerald-50/50 dark:hover:bg-white/[0.06] transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl col-span-1"
            >
              {/* Image Container with Zoom Animation */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
                
                {/* Service Number Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold tracking-wider">
                  {service.number}
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-900/80 backdrop-blur-md text-emerald-200 text-[10px] uppercase font-mono tracking-wider border border-emerald-500/40">
                  {service.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative bg-white dark:bg-transparent">
                <div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mb-3 flex items-center justify-between">
                    <span>{service.name}</span>
                    <div className="w-8 h-8 rounded-full border border-emerald-900/20 dark:border-white/20 flex items-center justify-center text-slate-600 dark:text-gray-300 group-hover:border-emerald-600 group-hover:text-white group-hover:bg-emerald-600 dark:group-hover:border-emerald-400 dark:group-hover:bg-emerald-500 transition-all shrink-0 ml-2">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 line-clamp-3 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Quick Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-gray-400">
                  <span className="tracking-widest uppercase font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">VIEW DETAILS &amp; SPECS</span>
                  <span className="text-slate-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-medium">Bespoke Fabrication →</span>
                </div>
              </div>

              {/* Bottom active hover metallic line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Bar */}
        <div className="mt-16 p-8 backdrop-blur-xl bg-emerald-50/70 dark:bg-white/[0.03] border border-emerald-900/15 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
              Need a Custom Aluminium, Glass, Tent, or Steel Fabrication?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-normal">
              Our engineering team in Musaffah, Abu Dhabi provides rapid site inspection, 3D shop drawings, and tailored BOQ estimates across the UAE.
            </p>
          </div>
          <button
            id="services-custom-quote-btn"
            onClick={() => onOpenQuoteModal("Luxury Villas & Facades")}
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Request Site Survey / Quote
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceName) => onOpenQuoteModal(serviceName)}
      />
    </section>
  );
};

