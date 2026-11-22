import React from 'react';
import { AnimatedCounter } from '../../animations/typography/AnimatedCounter';

export interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: React.ReactNode;
  badge?: string;
  color?: 'cobalt' | 'orange' | 'yellow' | 'neutral';
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  icon,
  badge,
  color = 'neutral',
}) => {
  const getAccentBorder = () => {
    switch (color) {
      case 'cobalt': return 'border-t-8 border-t-[#3657F0]';
      case 'orange': return 'border-t-8 border-t-[#FF7138]';
      case 'yellow': return 'border-t-8 border-t-[#FFD966]';
      default: return 'border-t-8 border-t-[#191A23] dark:border-t-stone-500';
    }
  };

  // Check if value is a pure number or a number with suffix (e.g. 18420, "1,420", "94.2%", "480+")
  const renderValue = () => {
    if (typeof value === 'number') {
      return <AnimatedCounter value={value} />;
    }
    const cleanStr = value.replace(/,/g, '');
    const percentMatch = cleanStr.match(/^([\d.]+)%$/);
    if (percentMatch) {
      return <AnimatedCounter value={parseFloat(percentMatch[1])} suffix="%" decimals={percentMatch[1].includes('.') ? 1 : 0} />;
    }
    const plusMatch = cleanStr.match(/^(\d+)\+$/);
    if (plusMatch) {
      return <AnimatedCounter value={parseInt(plusMatch[1], 10)} suffix="+" />;
    }
    const numMatch = cleanStr.match(/^(\d+)$/);
    if (numMatch) {
      return <AnimatedCounter value={parseInt(numMatch[1], 10)} />;
    }
    return value;
  };

  return (
    <div className={`bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-5 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#191A23] dark:hover:shadow-[6px_6px_0px_#FFD966] ${getAccentBorder()} group`}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          {label}
        </span>
        {icon && (
          <div className="p-2 border border-[#191A23] dark:border-stone-500 bg-[#F8F3E9] dark:bg-[#282B3A] text-[#191A23] dark:text-[#F8F3E9] transition-transform duration-200 group-hover:scale-110">
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-display font-black text-3xl sm:text-4xl tracking-tight text-[#191A23] dark:text-[#F8F3E9]">
          {renderValue()}
        </span>
        {badge && (
          <span className="font-mono text-[10px] font-bold uppercase bg-[#FFD966] text-[#191A23] px-1.5 py-0.5 border border-[#191A23]">
            {badge}
          </span>
        )}
      </div>

      {subtext && (
        <p className="mt-2 text-xs font-sans text-stone-600 dark:text-stone-400">
          {subtext}
        </p>
      )}
    </div>
  );
};
