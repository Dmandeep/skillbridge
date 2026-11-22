import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface KineticHeadingProps {
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  className?: string;
  skewAngle?: number;
  stagger?: number;
  delay?: number;
  triggerOnScroll?: boolean;
}

export const KineticHeading: React.FC<KineticHeadingProps> = ({
  children,
  tag = 'h2',
  className = '',
  skewAngle = 4,
  stagger = 0.08,
  delay = 0,
  triggerOnScroll = true,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const TagName = tag as any;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll('.kinetic-item');
      const tl = gsap.timeline({
        delay,
        scrollTrigger: triggerOnScroll
          ? {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          : undefined,
      });

      tl.fromTo(
        items,
        {
          y: '110%',
          opacity: 0,
          skewY: skewAngle,
          rotateZ: 2,
        },
        {
          y: '0%',
          opacity: 1,
          skewY: 0,
          rotateZ: 0,
          duration: 0.9,
          stagger,
          ease: 'power3.out',
        }
      );
    }, el);

    return () => ctx.revert();
  }, [skewAngle, stagger, delay, triggerOnScroll]);

  return (
    <TagName
      ref={containerRef}
      className={`font-display font-black tracking-tight overflow-hidden ${className}`}
    >
      {React.Children.map(children, (child, idx) => (
        <span key={idx} className="inline-block overflow-hidden pb-1 align-bottom">
          <span className="kinetic-item inline-block will-change-transform">
            {child}
          </span>
        </span>
      ))}
    </TagName>
  );
};
