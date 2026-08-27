import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestQuote }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#0c100e] border border-emerald-900/20 dark:border-white/20 backdrop-blur-2xl rounded-none shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 dark:bg-black/70 hover:bg-white dark:hover:bg-black text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/15 backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Hero Project Image */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0c100e] via-white/40 dark:via-[#0c100e]/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600/90 text-white text-[10px] font-mono tracking-widest uppercase mb-2 border border-emerald-500/30">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>{project.location}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Meta Tags Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-200 dark:border-white/10 text-xs">
              <div>
                <span className="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">CATEGORY</span>
                <span className="font-semibold text-slate-900 dark:text-white mt-1 block">{project.category}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">LOCATION</span>
                <span className="font-semibold text-slate-900 dark:text-white mt-1 block">{project.location}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">COMPLETION</span>
                <span className="font-semibold text-slate-900 dark:text-white mt-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">SYSTEM PROFILE</span>
                <span className="font-semibold text-slate-900 dark:text-white mt-1 flex items-center gap-1 truncate">
                  <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {project.systemUsed}
                </span>
              </div>
            </div>

            {/* Narrative & Scope */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
                  ARCHITECTURAL DESCRIPTION
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
              <div className="md:col-span-5 p-4 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>SCOPE OF WORKS</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed font-normal">
                  {project.scope}
                </p>
              </div>
            </div>

            {/* Additional Project Gallery Photos if available */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
                  INSTALLATION GALLERY
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.additionalImages.map((imgUrl, i) => (
                    <div key={i} className="relative h-40 overflow-hidden border border-slate-200 dark:border-white/10">
                      <img
                        src={imgUrl}
                        alt={`${project.title} detail ${i + 1}`}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 filter brightness-90 hover:brightness-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-gray-400 font-normal">
                Want a similar installation for your villa or commercial development?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 text-xs text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white uppercase tracking-wider font-mono cursor-pointer"
                >
                  Close
                </button>
                <button
                  id={`quote-for-${project.id}`}
                  onClick={() => {
                    onClose();
                    onRequestQuote(project.category);
                  }}
                  className="w-1/2 sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
                >
                  <span>Inquire Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

