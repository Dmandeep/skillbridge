import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface OutlineToFillProps {
  text: string;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  triggerMode?: 'scroll' | 'hover';
}

export const OutlineToFill: React.FC<OutlineToFillProps> = ({
  text,
  className = '',
  strokeColor = '#191A23',
  fillColor = '#3657F0',
  triggerMode = 'scroll',
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el || triggerMode !== 'scroll') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          color: 'transparent',
          WebkitTextStroke: `2px ${strokeColor}`,
        },
        {
          color: fillColor,
          WebkitTextStroke: `0px transparent`,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [strokeColor, fillColor, triggerMode]);

  return (
    <span
      ref={textRef}
      className={`font-display font-black tracking-tighter inline-block select-none transition-colors duration-300 ${
        triggerMode === 'hover' ? 'hover:text-[#3657F0]' : ''
      } ${className}`}
      style={
        triggerMode === 'hover'
          ? {
              WebkitTextStroke: `2px ${strokeColor}`,
              color: 'transparent',
            }
          : undefined
      }
    >
      {text}
    </span>
  );
};
