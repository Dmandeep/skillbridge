import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.5,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const [inView, setInView] = useState(false);
  const springValue = useSpring(0, {
    stiffness: 70,
    damping: 18,
    duration: duration * 1000,
  });

  const display = useTransform(springValue, current => {
    return prefix + current.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  return (
    <motion.span
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className={`font-display font-black tracking-tight inline-block ${className}`}
    >
      {display}
    </motion.span>
  );
};
