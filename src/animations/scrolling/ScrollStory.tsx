import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollStoryProps {
  children: (activeStep: number, progress: number) => React.ReactNode;
  stepCount: number;
  pinDistance?: string | number; // e.g. "200%" or 1800
  className?: string;
  onStepChange?: (step: number) => void;
}

/**
 * ScrollStory: Pinned scroll section driving sequential narrative steps.
 * Perfect for the 3-Stage Proof Engine (LEARN -> DEMONSTRATE -> VERIFY)
 * and verification pipeline storytelling.
 */
export const ScrollStory: React.FC<ScrollStoryProps> = ({
  children,
  stepCount,
  pinDistance = '250%',
  className = '',
  onStepChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const pinTarget = pinTargetRef.current;
    if (!container || !pinTarget) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: `+=${typeof pinDistance === 'number' ? pinDistance : pinDistance}`,
        pin: pinTarget,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const currentProgress = self.progress;
          setProgress(currentProgress);
          // Calculate step with guard rails
          const step = Math.min(
            stepCount - 1,
            Math.max(0, Math.floor(currentProgress * stepCount))
          );
          setActiveStep(step);
          onStepChange?.(step);
        },
      });
    }, container);

    return () => ctx.revert();
  }, [stepCount, pinDistance, onStepChange]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div ref={pinTargetRef} className="w-full min-h-screen flex flex-col justify-center">
        {children(activeStep, progress)}
      </div>
    </div>
  );
};
