import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BEFORE_AFTER_ITEMS } from '../data/content';
import { SplitSquareVertical, ArrowLeftRight, MapPin } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-[#0a0a0a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-white/40"></div>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.4em] text-gray-400 uppercase">
                SPATIAL UPGRADES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Transforming Spaces <span className="text-white/40 font-normal">With Precision</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md font-light leading-relaxed">
            Drag the interactive divider to witness the dramatic architectural elevation achieved through modern aluminium and glass systems.
          </p>
        </div>

        {/* Transformation Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {BEFORE_AFTER_ITEMS.map((item, idx) => {
            const isSelected = activeItemIndex === idx;
            return (
              <button
                key={item.id}
                id={`before-after-tab-${idx}`}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setSliderPosition(50);
                }}
                className={`p-4 rounded-none text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-xl'
                    : 'backdrop-blur-md bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <div className="text-[9px] font-mono tracking-widest uppercase opacity-70 mb-1">
                  0{idx + 1} / EXAMPLE
                </div>
                <div className="text-xs sm:text-sm font-medium tracking-wide truncate">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="rounded-none backdrop-blur-xl bg-white/[0.03] border border-white/15 p-4 sm:p-6 shadow-2xl">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[500px] md:h-[580px] w-full overflow-hidden select-none cursor-ew-resize bg-black"
          >
            {/* After Image (Full background) */}
            <img
              src={activeItem.afterImage}
              alt={`${activeItem.title} - After Installation`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest">
              {activeItem.afterLabel}
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeItem.beforeImage}
                alt={`${activeItem.title} - Before Installation`}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[30%] brightness-75 pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none',
                }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-gray-300 text-[10px] font-mono uppercase tracking-widest">
                {activeItem.beforeLabel}
              </div>
            </div>

            {/* Vertical Divider Line & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[1.5px] bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-black shadow-2xl flex items-center justify-center border border-black/20 hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Underneath Comparison Info */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-base sm:text-lg font-light text-white tracking-tight">
                  {activeItem.subtitle}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 border border-white/10">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  {activeItem.location}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl font-light leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 shrink-0 font-mono text-[11px]">
              <SplitSquareVertical className="w-3.5 h-3.5 text-gray-400" />
              <span>DRAG SLIDER TO COMPARE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
