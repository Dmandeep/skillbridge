import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface TextHighlightSweepProps {
  children: React.ReactNode;
  color?: 'yellow' | 'orange' | 'cobalt' | 'custom';
  customColor?: string;
  className?: string;
  textClassName?: string;
  delay?: number;
}

export const TextHighlightSweep: React.FC<TextHighlightSweepProps> = ({
  children,
  color = 'yellow',
  customColor,
  className = '',
  textClassName = 'text-[#191A23]',
  delay = 0.2,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const sweepRef = useRef<HTMLSpanElement>(null);

  const bgColorMap = {
    yellow: '#FFD966',
    orange: '#FF7138',
    cobalt: '#3657F0',
    custom: customColor || '#FFD966',
  };

  const bg = bgColorMap[color];

  useEffect(() => {
    const el = containerRef.current;
    const sweep = sweepRef.current;
    if (!el || !sweep) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      sweep.style.transform = 'scaleX(1)';
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sweep,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.65,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block px-1.5 py-0.5 font-bold isolate ${className}`}
    >
      <span
        ref={sweepRef}
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-sm origin-left will-change-transform shadow-[2px_2px_0px_#191A23]"
        style={{ backgroundColor: bg }}
      />
      <span className={`relative z-10 ${textClassName}`}>{children}</span>
    </span>
  );
};
