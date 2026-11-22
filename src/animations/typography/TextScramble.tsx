import React, { useRef, useState, useEffect } from 'react';

export interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number; // ms per frame
  triggerOnHover?: boolean;
  triggerInView?: boolean;
  chars?: string;
}

const DEFAULT_CHARS = '!<>-_\\/[]{}—=+*^?#________0123456789ABCDEF';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  speed = 35,
  triggerOnHover = false,
  triggerInView = true,
  chars = DEFAULT_CHARS,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isScramblingRef = useRef(false);

  const scramble = () => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const original = text;
    const length = original.length;
    let iteration = 0;
    const maxIterations = length * 2.5;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return original
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 2.5) {
              return original[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });

      iteration += 1;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(original);
        isScramblingRef.current = false;
      }
    }, speed);
  };

  useEffect(() => {
    if (!triggerInView) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, triggerInView]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={triggerOnHover ? scramble : undefined}
      className={`font-mono select-none ${className}`}
    >
      {displayText}
    </span>
  );
};
