import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      title={`Switch to ${isDark ? 'Bright Warm Ivory' : 'Dark Ink Black'} theme`}
      aria-label="Toggle theme"
      className={`relative p-2.5 border-2 border-[#191A23] dark:border-[#FFD966] bg-white dark:bg-[#212330] text-[#191A23] dark:text-[#FFD966] shadow-[2px_2px_0px_#191A23] dark:shadow-[2px_2px_0px_#FFD966] cursor-pointer flex items-center justify-center overflow-hidden ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#FFD966]" />
        ) : (
          <Moon className="w-4 h-4 text-[#3657F0]" />
        )}
      </motion.div>
    </motion.button>
  );
};
