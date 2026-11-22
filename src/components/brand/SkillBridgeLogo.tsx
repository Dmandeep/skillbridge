import React from 'react';
import { motion } from 'framer-motion';

export interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'symbol';
  themeMode?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  monochrome?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Precision Geometric "SB" Monogram (Concept 3 - The Verified Bridge):
 * - Left Architecture: Foundation Pillar & 'S' Geometry (Electric Cobalt / Ink Black)
 * - Right Architecture: Dual Horizon Chambers & 'B' Geometry (Butter Yellow / Cobalt)
 * - Central Dynamic Truss: 45° Angled Bridge Link (Tangerine Orange) with Diamond Keystone
 * - Engineered on a 100x100 Cartesian grid with mathematical optical weight
 */
export const SkillBridgeSymbol: React.FC<{
  size?: number;
  animated?: boolean;
  monochrome?: boolean;
  className?: string;
}> = ({ size = 44, animated = false, monochrome = false, className = '' }) => {
  const cobalt = monochrome ? 'currentColor' : '#3657F0';
  const orange = monochrome ? 'currentColor' : '#FF7138';
  const yellow = monochrome ? 'currentColor' : '#FFD966';
  const neutralDark = '#191A23';
  const neutralLight = '#F8F3E9';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 ${className}`}
    >
      {/* Structural Backdrop Shield with Subtle Brutalist Offset */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="20"
        fill={neutralDark}
        className="dark:fill-[#191A23]"
      />
      <rect
        x="9"
        y="9"
        width="82"
        height="82"
        rx="17"
        fill={monochrome ? '#212330' : cobalt}
      />

      {/* 1. Left 'S' Stem - Skills Foundation */}
      <motion.path
        d="M62 26 H36 C29.3726 26 24 31.3726 24 38 C24 44.6274 29.3726 50 36 50 H50 C56.6274 50 62 55.3726 62 62 C62 68.6274 56.6274 74 50 74 H24"
        stroke={neutralLight}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : false}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* 2. Central Tangerine Orange Dynamic Bridge Link (Connecting S & B) */}
      <motion.path
        d="M34 66 L66 34"
        stroke={orange}
        strokeWidth="8.5"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : false}
        animate={animated ? { pathLength: 1, opacity: 1 } : false}
        transition={{ delay: 0.35, duration: 0.85, ease: 'easeOut' }}
      />

      {/* 3. Right 'B' Dual Horizon Chambers (Opportunity & Growth) */}
      <motion.path
        d="M44 50 H62 C69.1797 50 75 55.8203 75 63 C75 70.1797 69.1797 76 62 76 H42"
        stroke={yellow}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : false}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.path
        d="M44 38 H58 C64.6274 38 70 32.6274 70 26 C70 19.3726 64.6274 14 58 14"
        stroke={yellow}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0" // balanced negative space
      />

      {/* 4. Central Verification Keystone Anchor */}
      <motion.circle
        cx="50"
        cy="50"
        r="4.5"
        fill={yellow}
        stroke={neutralDark}
        strokeWidth="2"
        initial={animated ? { scale: 0 } : false}
        animate={animated ? { scale: 1 } : false}
        transition={{ delay: 0.75, type: 'spring', stiffness: 500, damping: 18 }}
      />
    </svg>
  );
};

export const SkillBridgeLogo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  themeMode = 'auto',
  size = 'md',
  animated = false,
  monochrome = false,
  className = '',
  onClick,
}) => {
  const pixelSizes = {
    sm: { symbol: 32, text: 'text-xl', sub: 'text-[8px]', gap: 'gap-2.5' },
    md: { symbol: 44, text: 'text-2xl', sub: 'text-[9.5px]', gap: 'gap-3.5' },
    lg: { symbol: 56, text: 'text-3xl', sub: 'text-[11px]', gap: 'gap-4' },
    xl: { symbol: 76, text: 'text-5xl', sub: 'text-xs', gap: 'gap-5' },
  }[size];

  const textColor = 
    monochrome
      ? 'text-current'
      : themeMode === 'light' 
      ? 'text-[#191A23]' 
      : themeMode === 'dark' 
      ? 'text-[#F8F3E9]' 
      : 'text-[#191A23] dark:text-[#F8F3E9]';

  const subColor = 
    monochrome
      ? 'text-current opacity-70'
      : themeMode === 'light' 
      ? 'text-stone-600' 
      : themeMode === 'dark' 
      ? 'text-stone-400' 
      : 'text-stone-500 dark:text-stone-400';

  if (variant === 'symbol') {
    return (
      <div 
        onClick={onClick}
        className={`inline-flex items-center justify-center ${onClick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform' : ''} ${className}`}
      >
        <SkillBridgeSymbol size={pixelSizes.symbol} animated={animated} monochrome={monochrome} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div 
        onClick={onClick}
        className={`inline-flex flex-col items-center text-center ${pixelSizes.gap} ${onClick ? 'cursor-pointer group' : ''} ${className}`}
      >
        <div className="transform group-hover:-rotate-3 transition-transform duration-200">
          <SkillBridgeSymbol size={pixelSizes.symbol} animated={animated} monochrome={monochrome} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center tracking-tight">
            <span className={`font-display font-black tracking-tighter ${pixelSizes.text} ${textColor}`}>
              SKILL
            </span>
            <span className={`font-display font-black tracking-tighter ${monochrome ? 'text-current' : 'text-[#3657F0]'} ${pixelSizes.text}`}>
              BRIDGE
            </span>
            <span className={`w-2 h-2 rounded-full ${monochrome ? 'bg-current' : 'bg-[#FF7138]'} ml-1 mb-2 inline-block`}></span>
          </div>
          <span className={`font-mono font-bold tracking-widest uppercase ${pixelSizes.sub} ${subColor} -mt-1`}>
            Skills Demonstrated &bull; Talent Verified
          </span>
        </div>
      </div>
    );
  }

  // Default: Primary Horizontal Logo
  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center ${pixelSizes.gap} ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      <div className="transform group-hover:-rotate-2 transition-transform duration-200">
        <SkillBridgeSymbol size={pixelSizes.symbol} animated={animated} monochrome={monochrome} />
      </div>
      <div className="flex flex-col justify-center select-none">
        <div className="flex items-center tracking-tight leading-none">
          <span className={`font-display font-black tracking-tighter ${pixelSizes.text} ${textColor}`}>
            SKILL
          </span>
          <span className={`font-display font-black tracking-tighter ${monochrome ? 'text-current' : 'text-[#3657F0]'} ${pixelSizes.text}`}>
            BRIDGE
          </span>
          <span className={`w-2 h-2 rounded-full ${monochrome ? 'bg-current' : 'bg-[#FF7138]'} ml-1 mb-2 inline-block animate-pulse`}></span>
        </div>
        <span className={`font-mono font-bold tracking-widest uppercase ${pixelSizes.sub} ${subColor} -mt-0.5`}>
          Practical Verification Platform
        </span>
      </div>
    </div>
  );
};
