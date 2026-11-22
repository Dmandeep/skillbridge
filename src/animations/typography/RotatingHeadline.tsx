import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingHeadlineProps {
  words: string[];
  interval?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const RotatingHeadline: React.FC<RotatingHeadlineProps> = ({
  words,
  interval = 2800,
  className = '',
  prefix = '',
  suffix = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-flex items-center flex-wrap ${className}`}>
      {prefix && <span className="mr-2">{prefix}</span>}
      <span className="relative inline-block overflow-hidden py-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 35, opacity: 0, rotateX: -60 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -35, opacity: 0, rotateX: 60 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-[#3657F0] underline decoration-[#FF7138] decoration-wavy decoration-2"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      {suffix && <span className="ml-2">{suffix}</span>}
    </span>
  );
};
