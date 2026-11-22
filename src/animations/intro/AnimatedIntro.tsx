import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillBridgeSymbol } from '../../components/brand/SkillBridgeLogo';
import { X, Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';

export interface AnimatedIntroProps {
  onComplete: () => void;
  forceShow?: boolean;
}

/**
 * CINEMATIC 4-SCENE BRAND INTRODUCTION EXPERIENCE
 *
 * Guaranteed Playback Protocol:
 * - Plays on every full document load / refresh
 * - Preserves SPA internal navigation (does not re-trigger on role/tab switches)
 * - Immediate Skip Intro via click or 'Esc' key
 * - Fully accessible with prefers-reduced-motion fallback
 *
 * Sequence:
 * Scene 1 (0ms - 800ms):   Opening Atmosphere, Cartesian Blueprint Grid & Pulse Nodes
 * Scene 2 (800ms - 2000ms): Dual Vector Beams Converge -> Geometric Monogram Assembly
 * Scene 3 (2000ms - 3300ms): Kinetic Brand Typography & Staggered Tagline Reveal
 * Scene 4 (3300ms - 4000ms): Dynamic Dual-Layer Curtain Wipe into Workspace
 */
export const AnimatedIntro: React.FC<AnimatedIntroProps> = ({ onComplete }) => {
  const [scene, setScene] = useState<number>(1);
  const [skipped, setSkipped] = useState<boolean>(false);
  const isCompletedRef = useRef<boolean>(false);

  useEffect(() => {
    // Respect OS-level reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Precise timed choreography (total ~3.8s)
    const t1 = setTimeout(() => setScene(2), 750);
    const t2 = setTimeout(() => setScene(3), 1950);
    const t3 = setTimeout(() => setScene(4), 3250);
    const t4 = setTimeout(() => {
      if (!isCompletedRef.current) {
        isCompletedRef.current = true;
        onComplete();
      }
    }, 3900);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (isCompletedRef.current) return;
    isCompletedRef.current = true;
    setSkipped(true);
    onComplete();
  };

  if (skipped) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#191A23] text-[#F8F3E9] flex flex-col items-center justify-center select-none font-sans"
      role="dialog"
      aria-label="SkillBridge Brand Introduction"
    >
      {/* ========================================================================= */}
      {/* SCENE 1: ARCHITECTURAL ATMOSPHERE & DECENTRALIZED PROOF GRID             */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="intro-blueprint-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#3657F0" strokeWidth="0.8" strokeOpacity="0.45" />
              <circle cx="0" cy="0" r="1.5" fill="#FFD966" fillOpacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#intro-blueprint-grid)" />
        </svg>
      </div>

      {/* Atmospheric Radial Depth Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#3657F0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-[#FF7138]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Network Telemetry Tags */}
      <div className="absolute top-8 left-8 hidden sm:flex flex-col gap-1.5 font-mono text-[10px] text-stone-400 opacity-75">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>PROTOCOL: SKILLBRIDGE-V2</span>
        </div>
        <div>EXECUTION: GVISOR-CONTAINER-ISOLATED</div>
        <div>CONSENSUS: CRYPTOGRAPHIC-ATTESTATION</div>
      </div>

      {/* Skip Intro Button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={handleSkip}
          className="px-4 py-2 bg-stone-900/90 hover:bg-[#FF7138] text-white border-2 border-stone-700 hover:border-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[3px_3px_0px_#FFD966] cursor-pointer"
          title="Skip intro animation (Esc)"
        >
          <span>Skip Intro</span>
          <span className="text-[10px] opacity-70 bg-stone-800 px-1 py-0.2 rounded border border-stone-600">Esc</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Converging Vector Lines (Scenes 1 & 2) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full max-w-4xl max-h-[500px]" viewBox="0 0 800 500" fill="none">
          {/* Left Ray: Candidate Code Submission (Electric Cobalt) */}
          <motion.path
            d="M 60 250 H 330 V 180 H 380"
            stroke="#3657F0"
            strokeWidth="3.5"
            strokeDasharray="8 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Right Ray: Recruiter & Industry Opportunity (Tangerine Orange) */}
          <motion.path
            d="M 740 250 H 470 V 320 H 420"
            stroke="#FF7138"
            strokeWidth="3.5"
            strokeDasharray="8 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Central 45° Keystone Bridge Synthesis */}
          {scene >= 2 && (
            <motion.path
              d="M 350 310 L 450 190"
              stroke="#FFD966"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            />
          )}
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SCENE 2 & 3: MONOGRAM & WORDMARK CENTERPIECE                             */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl">
        {/* Monogram Assembly */}
        <AnimatePresence>
          {scene >= 2 && (
            <motion.div
              initial={{ scale: 0.4, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              className="mb-5 relative"
            >
              <div className="relative p-2">
                <SkillBridgeSymbol size={108} animated={true} />
                {/* Radial Glow Flash */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: [0, 0.6, 0], scale: [0.7, 1.4, 1.8] }}
                  transition={{ duration: 1.6, ease: 'easeOut' }}
                  className="absolute inset-0 bg-[#3657F0] rounded-3xl -z-10 blur-xl pointer-events-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wordmark Reveal */}
        {scene >= 3 && (
          <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 25, opacity: 0 }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center tracking-tighter"
          >
            <span className="font-display font-black text-4xl sm:text-6xl text-[#F8F3E9] tracking-tight">
              SKILL
            </span>
            <span className="font-display font-black text-4xl sm:text-6xl text-[#3657F0] tracking-tight">
              BRIDGE
            </span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 500 }}
              className="w-3.5 h-3.5 rounded-full bg-[#FF7138] ml-2 mb-4 inline-block"
            />
          </motion.div>
        )}

        {/* 3-Part Cadence Tagline */}
        {scene >= 3 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.14, delayChildren: 0.15 },
              },
            }}
            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              className="bg-[#191A23] border border-[#FFD966]/40 px-2.5 py-1 text-[#FFD966] shadow-[2px_2px_0px_#191A23]"
            >
              1. Skills Demonstrated
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              className="bg-[#191A23] border border-[#FF7138]/40 px-2.5 py-1 text-[#FF7138] shadow-[2px_2px_0px_#191A23]"
            >
              2. Talent Verified
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              className="bg-[#191A23] border border-[#3657F0]/40 px-2.5 py-1 text-[#3657F0] shadow-[2px_2px_0px_#191A23]"
            >
              3. Opportunities Connected
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* SCENE 4: CREATIVE DUAL-LAYER BRAND WIPE TRANSITION                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {scene === 4 && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[10000] bg-[#3657F0] pointer-events-none flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[#FF7138] transform translate-y-8 opacity-50" />
            <div className="relative font-display font-black text-2xl text-white tracking-widest uppercase">
              SKILLBRIDGE VERIFIED
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
