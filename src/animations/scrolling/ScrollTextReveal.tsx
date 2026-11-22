import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollTextRevealProps {
  text: string;
  className?: string;
  mode?: 'scrub' | 'trigger';
  highlightWords?: string[];
  highlightClass?: string;
}

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text,
  className = '',
  mode = 'scrub',
  highlightWords = [],
  highlightClass = 'text-[#3657F0] dark:text-[#FFD966] font-black',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const spans = el.querySelectorAll('.scroll-word');

    const ctx = gsap.context(() => {
      if (mode === 'scrub') {
        gsap.fromTo(
          spans,
          { opacity: 0.15, y: 4 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 45%',
              scrub: 0.5,
            },
          }
        );
      } else {
        gsap.fromTo(
          spans,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [mode, text]);

  return (
    <p ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={index}
            className={`scroll-word inline-block mr-[0.28em] transition-colors duration-150 ${
              isHighlight ? highlightClass : ''
            }`}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
};
