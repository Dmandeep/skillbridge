import React from 'react';

interface MarqueeTextProps {
  items: string[];
  separator?: string;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({
  items,
  separator = '✦',
  speed = 'normal',
  className = '',
}) => {
  const speedClass = 
    speed === 'slow' ? '[animation-duration:36s]' :
    speed === 'fast' ? '[animation-duration:14s]' :
    '[animation-duration:22s]';

  const fullItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap border-y-2 border-[#191A23] bg-[#FFD966] text-[#191A23] py-2.5 font-mono text-xs font-black uppercase tracking-wider select-none ${className}`}>
      <div className={`inline-flex items-center gap-6 animate-marquee ${speedClass}`}>
        {fullItems.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-6">
            <span className="hover:text-[#3657F0] transition-colors">{item}</span>
            <span className="text-[#FF7138]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
