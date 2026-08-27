import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface FeaturedProjectsProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Luxury Villas',
    'Aluminium Doors',
    'Glass Doors',
    'Sliding Systems',
    'Glass Partitions',
    'Aluminium Windows',
    'Wardrobes',
    'Facades',
    'Pergolas',
    'Railings',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (activeCategory === 'Railings') return p.category.toLowerCase().includes('railing');
        if (activeCategory === 'Pergolas') return p.category.toLowerCase().includes('pergola');
        if (activeCategory === 'Facades') return p.category.toLowerCase().includes('facade');
        if (activeCategory === 'Wardrobes') return p.category.toLowerCase().includes('wardrobe');
        if (activeCategory === 'Sliding Systems') return p.category.toLowerCase().includes('sliding');
        return p.category.toLowerCase().includes(activeCategory.toLowerCase());
      });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#0a0a0a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-white/40"></div>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.4em] text-gray-400 uppercase">
                PORTFOLIO ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Projects That Define <span className="text-white/40 font-normal">Modern Spaces</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md font-light leading-relaxed">
            Explore selected aluminium and glass installations crafted for contemporary residential and commercial environments across Dubai.
          </p>
        </div>

        {/* Filter Categories Pill Bar (Horizontally scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] uppercase font-mono tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-lg'
                    : 'backdrop-blur-md bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Editorial Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-none backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/15 text-gray-200 text-[10px] uppercase font-mono tracking-widest">
                    {project.category}
                  </div>

                  {/* Location Pin */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-gray-300 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-light text-white tracking-tight group-hover:text-slate-200 transition-colors mb-2 flex items-center justify-between">
                      <span>{project.title}</span>
                      <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-gray-300 group-hover:border-white group-hover:text-white group-hover:bg-white/10 transition-all shrink-0 ml-2">
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500">
                    <span className="font-mono text-[10px] text-gray-400 uppercase">{project.scope.split(',')[0]}</span>
                    <span className="text-gray-300 font-medium group-hover:underline">View Project Details →</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-500 text-sm font-light">
            No projects in this category currently displayed. Contact our team to view our full Dubai portfolio archive.
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={(projectName) => onOpenQuoteModal(projectName)}
      />
    </section>
  );
};
