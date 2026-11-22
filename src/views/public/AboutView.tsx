import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { SkillBridgeLogo, SkillBridgeSymbol } from '../../components/brand/SkillBridgeLogo';
import { SplitText } from '../../animations/typography/SplitText';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { ShieldCheck, ArrowRight, CheckCircle2, XCircle, Download } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setActiveTab } = useAuthRole();

  return (
    <div className="space-y-12 select-none max-w-5xl mx-auto pb-16 px-4">
      {/* Manifesto Header */}
      <ScrollReveal direction="down">
        <div className="bg-[#191A23] text-white border-4 border-[#191A23] shadow-[8px_8px_0px_#FFD966] p-6 sm:p-12 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFD966] bg-[#3657F0] px-3 py-1 border border-white/20 inline-block">
            ABOUT SKILLBRIDGE
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            <SplitText text="Skills Demonstrated. Talent Verified." type="words" />
          </h1>
          <p className="font-sans text-sm sm:text-base text-stone-300 max-w-2xl font-medium leading-relaxed">
            In an era where anyone can generate resumes with AI or memorize quiz questions, traditional hiring is broken. SkillBridge provides a simple, trustworthy platform where students prove their ability through working code and teacher feedback.
          </p>
        </div>
      </ScrollReveal>

      {/* The Core Question: Why SkillBridge? */}
      <ScrollReveal direction="up">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-6 sm:p-8 space-y-6">
          <div className="border-b-2 border-[#191A23] pb-3">
            <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">
              OUR MISSION
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#191A23] dark:text-white mt-1">
              Why We Built SkillBridge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-5 border-2 border-red-500/80 space-y-3">
              <div className="flex items-center gap-2 text-red-600 font-mono text-xs font-bold uppercase">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>The Traditional Problem</span>
              </div>
              <ul className="space-y-2 text-xs font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
                <li>&bull; <strong>Unchecked Resumes:</strong> Anyone can list skills on paper, making it difficult for companies to know who can really write good code.</li>
                <li>&bull; <strong>Copied Projects:</strong> Unverified portfolios often contain template code rather than practical problem solving.</li>
                <li>&bull; <strong>Trick Interview Questions:</strong> Algorithmic puzzles test memorization rather than building actual products.</li>
              </ul>
            </div>

            <div className="bg-[#EEF2FF] dark:bg-[#1E2545] p-5 border-2 border-[#3657F0] space-y-3">
              <div className="flex items-center gap-2 text-[#3657F0] dark:text-[#FFD966] font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>The SkillBridge Solution</span>
              </div>
              <ul className="space-y-2 text-xs font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
                <li>&bull; <strong>Working Code Tests:</strong> Automated test suites verify that student projects actually compile, execute, and pass test cases.</li>
                <li>&bull; <strong>Teacher Mentorship:</strong> Real teachers review code architecture and write helpful feedback for improvement.</li>
                <li>&bull; <strong>Verified Skills Profile:</strong> A clear, trustworthy passport of skills that recruiters can review with confidence.</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Brand Identity & Logo Specification */}
      <ScrollReveal direction="up">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-6 sm:p-8 space-y-6">
          <div className="border-b-2 border-[#191A23] dark:border-stone-700 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
                VISUAL IDENTITY
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#191A23] dark:text-white mt-1">
                Official SkillBridge Brand System
              </h2>
            </div>
            <span className="font-mono text-xs font-bold bg-[#FFD966] text-[#191A23] px-3 py-1 border border-[#191A23]">
              OFFICIAL LOGOS
            </span>
          </div>

          <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
            The SkillBridge symbol connects the letters <strong>S</strong> and <strong>B</strong>. Two distinct geometric structures representing talent and opportunity connect through an orange bridge truss.
          </p>

          {/* Logo Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Horizontal Logo */}
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-5 space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5">
                HORIZONTAL LOGO
              </span>
              <div className="py-4 flex justify-center">
                <SkillBridgeLogo variant="horizontal" size="md" />
              </div>
              <p className="font-mono text-[10px] text-stone-500 text-center">
                Main navigation logo with balanced wordmark.
              </p>
            </div>

            {/* Stacked Logo */}
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-5 space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5">
                STACKED LOGO
              </span>
              <div className="py-3 flex justify-center">
                <SkillBridgeLogo variant="stacked" size="md" />
              </div>
              <p className="font-mono text-[10px] text-stone-500 text-center">
                Centered variant for badges and profile screens.
              </p>
            </div>

            {/* Standalone Symbol */}
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-5 space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5">
                STANDALONE SYMBOL
              </span>
              <div className="py-4 flex justify-center">
                <SkillBridgeSymbol size={60} animated={false} />
              </div>
              <p className="font-mono text-[10px] text-stone-500 text-center">
                Iconic monogram representing the bridge between students and companies.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="pt-2 flex justify-center">
        <button
          onClick={() => setActiveTab('how-it-works')}
          className="px-6 py-3 bg-[#3657F0] hover:bg-[#2c47c7] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] flex items-center gap-2 cursor-pointer transition-all"
        >
          <span>See How It Works</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
