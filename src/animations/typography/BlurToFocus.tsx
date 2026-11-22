import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface BlurToFocusProps {
  children: React.ReactNode;
  initialBlur?: number; // in px
  duration?: number;
  delay?: number;
  className?: string;
}

export const BlurToFocus: React.FC<BlurToFocusProps> = ({
  children,
  initialBlur = 12,
  duration = 0.9,
  delay = 0,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          filter: `blur(${initialBlur}px)`,
          opacity: 0.2,
          y: 10,
        },
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [initialBlur, duration, delay]);

  return (
    <div ref={containerRef} className={`will-change-[filter,opacity] ${className}`}>
      {children}
    </div>
  );
};
