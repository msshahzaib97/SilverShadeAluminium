import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  showArabic?: boolean;
  className?: string;
  isLight?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  showArabic = false,
  className = '',
  isLight = false
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7 min-w-7',
    md: 'w-9 h-9 min-w-9 sm:w-10 sm:h-10 sm:min-w-10',
    lg: 'w-12 h-12 min-w-12',
    xl: 'w-16 h-16 min-w-16'
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-lg sm:text-xl font-extrabold tracking-tight',
    lg: 'text-2xl sm:text-3xl font-extrabold tracking-tight',
    xl: 'text-3xl sm:text-4xl font-extrabold tracking-tight'
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.3em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.32em]',
    lg: 'text-xs tracking-[0.35em]',
    xl: 'text-sm tracking-[0.38em]'
  };

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Precision Emblem / Architectural Monogram Icon */}
      <div 
        className={`${iconDimensions[size]} relative rounded-xl bg-gradient-to-br from-[#0c1813] via-[#08100d] to-[#040806] border border-emerald-500/40 p-1.5 flex items-center justify-center shadow-lg shadow-emerald-950/40 group-hover:border-emerald-400 group-hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden shrink-0`}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        
        {/* Crisp Vector Architectural 'S' Monogram */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transform group-hover:scale-105 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="brandEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="brandSilverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="40%" stopColor="#f8fafc" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="brandGoldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Architectural structural framing outline */}
          <rect x="5" y="5" width="90" height="90" rx="18" stroke="#10b981" strokeWidth="3" strokeOpacity="0.3" fill="none" />
          
          {/* Main Silver Extrusion 'S' Ribbon */}
          <path 
            d="M75 30 C75 18 64 14 50 14 C36 14 26 22 26 34 C26 48 40 52 56 56 C72 60 78 66 78 76 C78 88 66 94 50 94 C34 94 24 86 24 74" 
            stroke="url(#brandSilverGrad)" 
            strokeWidth="11" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Overlapping Emerald Reflective Glass Facet Stripe */}
          <path 
            d="M70 30 C70 21 62 18 50 18 C38 18 31 24 31 34 C31 45 44 49 60 54 C74 58 82 65 82 76 C82 85 71 90 50 90 C37 90 29 83 29 74" 
            stroke="url(#brandEmeraldGrad)" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* Center Facet Diamond */}
          <polygon points="50,44 57,50 50,56 43,50" fill="url(#brandGoldAccent)" stroke="#ffffff" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Brand Text Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span 
            className={`${titleSizes[size]} text-white group-hover:text-emerald-400 transition-colors leading-none`}
          >
            SILVER SHADE
          </span>
        </div>

        {showSubtitle && (
          <span 
            className={`${subtitleSizes[size]} font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors uppercase leading-none mt-1`}
          >
            Aluminium &amp; Glass
          </span>
        )}

        {showArabic && (
          <span className="text-[10px] text-slate-400 font-arabic font-medium leading-none mt-1" dir="rtl">
            سيلفر شيد للألمنيوم والزجاج والخيام
          </span>
        )}
      </div>
    </div>
  );
};
