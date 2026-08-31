import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Cpu, 
  Layers, 
  MapPin, 
  UserCheck, 
  Camera, 
  Sparkles,
  ArrowRight,
  Maximize2,
  X
} from 'lucide-react';
import { WORKSPACE_PHOTOS_DATA } from '../data/content';

export const WorkspaceGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof WORKSPACE_PHOTOS_DATA[0] | null>(null);

  return (
    <section id="workspace-gallery" className="py-20 sm:py-28 bg-[#f4f7f5] dark:bg-[#070b09] border-t border-emerald-900/10 dark:border-emerald-500/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400"></span>
              <span className="text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
                FACTORY &amp; SITE OPERATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Our Team in the <span className="text-emerald-700 dark:text-emerald-400 font-medium">Musaffah Workspace</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mt-3 font-normal leading-relaxed">
              Step inside our 12,000 sq ft industrial facility in Musaffah Sector M-14 and see our licensed facade engineers, master welders, CNC operators, and site technicians executing sub-millimeter architectural joinery.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white dark:bg-white/5 border border-emerald-900/15 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono">12,000 SQ FT</span> Plant • Musaffah M-14
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSPACE_PHOTOS_DATA.map((item, idx) => (
            <div
              key={item.id}
              id={`workspace-photo-card-${idx}`}
              onClick={() => setSelectedPhoto(item)}
              className="group relative bg-white dark:bg-white/[0.03] border border-emerald-900/10 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Photo Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-mono text-[9px] uppercase tracking-wider font-semibold backdrop-blur-sm">
                  {item.category}
                </div>

                {/* Maximize Icon */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-none bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Lead Engineer / Craftsman on bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 font-medium text-[11px]">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.lead}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-300 font-mono">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Photo Description Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-arabic text-slate-500 dark:text-gray-400 mt-0.5">
                    {item.arabicTitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mt-2 line-clamp-2 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
                  <span>View Facility Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Full Image & Technical Story */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#0c120e] border border-emerald-900/20 dark:border-emerald-500/30 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-black border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative h-80 sm:h-96 w-full bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-2.5 py-1 bg-emerald-700 text-white font-mono text-[9px] uppercase tracking-wider font-bold">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light tracking-tight mt-2">
                    {selectedPhoto.title}
                  </h3>
                  <div className="text-xs font-arabic text-emerald-300 mt-0.5">
                    {selectedPhoto.arabicTitle}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-gray-300 pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span><strong>Supervised by:</strong> {selectedPhoto.lead}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span><strong>Facility Location:</strong> {selectedPhoto.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-normal">
                  {selectedPhoto.desc}
                </p>

                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/20 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  <strong>Craftsmanship Protocol:</strong> All fabrication steps undergo digital caliper verification, angle miter checking, and dual-layer silicone adhesion audits prior to protective foam wrapping and delivery to client villa sites.
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-widest"
                  >
                    Close Workspace Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
