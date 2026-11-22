import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { SkillBridgeLogo, SkillBridgeSymbol } from '../../components/brand/SkillBridgeLogo';
import { SplitText } from '../../animations/typography/SplitText';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { ShieldCheck, Flame, Cpu, ArrowRight, CheckCircle2, XCircle, Download, ExternalLink } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setActiveTab } = useAuthRole();

  return (
    <div className="space-y-12 select-none max-w-5xl mx-auto pb-16">
      {/* Manifesto Header */}
      <ScrollReveal direction="down">
        <div className="bg-[#191A23] text-white border-4 border-[#191A23] shadow-[8px_8px_0px_#FFD966] p-8 sm:p-12 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFD966] bg-[#3657F0] px-3 py-1 border border-white/20 inline-block">
            SKILLBRIDGE MANIFESTO
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
            <SplitText text="The Death of Resume Keyword Spam." type="words" />
          </h1>
          <p className="font-sans text-base sm:text-lg text-stone-300 max-w-2xl font-medium leading-relaxed">
            Generative AI has commoditized synthetic code generation and resume inflation. In a world where anyone can prompt ChatGPT to produce a portfolio or generate 500 tailored resumes, traditional hiring signals have collapsed.
          </p>
        </div>
      </ScrollReveal>

      {/* The Core Question: WHY NOT CHATGPT? */}
      <ScrollReveal direction="up">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-8 space-y-6">
          <div className="border-b-2 border-[#191A23] pb-3">
            <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">
              THE FOUNDATIONAL MOAT
            </span>
            <h2 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
              Why Not ChatGPT, Handshake, or LinkedIn?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-5 border-2 border-red-500/80 space-y-3">
              <div className="flex items-center gap-2 text-red-600 font-mono text-xs font-bold uppercase">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>The Broken Status Quo (Resumes &amp; Portfolios)</span>
              </div>
              <ul className="space-y-2 text-xs font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
                <li>&bull; <strong>Unverifiable Claims:</strong> Anyone can list "Distributed Systems" or "Kubernetes" on LinkedIn without executing a single thread or pod.</li>
                <li>&bull; <strong>Copied Repositories:</strong> Students clone existing repositories from GitHub or have LLMs write boilerplate. Recruiters spend &lt;30 seconds scanning.</li>
                <li>&bull; <strong>Arbitrary LeetCode Quizzes:</strong> Algorithmic puzzles test memorization, not how a candidate handles crash invariants, race conditions, or clean architecture.</li>
              </ul>
            </div>

            <div className="bg-[#EEF2FF] dark:bg-[#1E2545] p-5 border-2 border-[#3657F0] space-y-3">
              <div className="flex items-center gap-2 text-[#3657F0] dark:text-[#FFD966] font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>The SkillBridge Verification Mechanism</span>
              </div>
              <ul className="space-y-2 text-xs font-sans text-stone-700 dark:text-stone-300 leading-relaxed">
                <li>&bull; <strong>Multi-Stage Telemetry:</strong> Code is pulled into isolated sandbox runners, stressed under 100 concurrent workers, and checked for memory leaks.</li>
                <li>&bull; <strong>Faculty Human-in-the-Loop:</strong> Accredited professors evaluate design trade-offs against standardized rubrics.</li>
                <li>&bull; <strong>Tamper-Proof Passports:</strong> Verification results are minted with cryptographic SHA-256 hashes that cannot be spoofed or faked.</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 3. OFFICIAL SKILLBRIDGE BRAND IDENTITY & LOGO SPECIFICATION */}
      <ScrollReveal direction="up">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-8 space-y-6">
          <div className="border-b-2 border-[#191A23] dark:border-stone-700 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
                BRAND DESIGN SYSTEM &bull; PHASE 2
              </span>
              <h2 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
                Official SkillBridge Logo &amp; Identity Suite
              </h2>
            </div>
            <span className="font-mono text-xs font-bold bg-[#FFD966] text-[#191A23] px-3 py-1 border border-[#191A23]">
              8 DELIVERABLE FORMATS
            </span>
          </div>

          <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
            The SkillBridge symbol is an original geometric monogram fusing the letters <strong>S</strong> and <strong>B</strong>. Two distinct geometric structures representing candidates and industry opportunities connect through an interlocking 45-degree Tangerine Orange bridge truss.
          </p>

          {/* Logo Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Primary Horizontal Logo */}
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-5 space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5">
                1. PRIMARY HORIZONTAL
              </span>
              <div className="py-4 flex justify-center">
                <SkillBridgeLogo variant="horizontal" size="md" />
              </div>
              <p className="font-mono text-[10px] text-stone-500 text-center">
                Main navigation lockup with balanced wordmark &amp; live bridge dot.
              </p>
            </div>

            {/* 2. Stacked Logo */}
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-5 space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5">
                2. STACKED LOGO
              </span>
              <div className="py-3 flex justify-center">
                <SkillBridgeLogo variant="stacked" size="md" />
              </div>
              <p className="font-mono text-[10px] text-stone-500 text-center">
                Centered editorial variant for splash screens &amp; passport badges.
              </p>
            </div>

            {/* 3. Standalone SB Symbol */}
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-5 space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5">
                3. STANDALONE SYMBOL
              </span>
              <div className="py-4 flex justify-center">
                <SkillBridgeSymbol size={64} animated={false} />
              </div>
              <p className="font-mono text-[10px] text-stone-500 text-center">
                Iconic monogram with distinct negative space and keystone anchor.
              </p>
            </div>

            {/* 4. Light Background Logo */}
            <div className="bg-[#F8F3E9] border-2 border-[#191A23] p-5 space-y-3 text-[#191A23]">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#3657F0] text-white px-2 py-0.5">
                4. LIGHT BACKGROUND
              </span>
              <div className="py-4 flex justify-center">
                <SkillBridgeLogo variant="horizontal" size="md" themeMode="light" />
              </div>
              <p className="font-mono text-[10px] text-stone-600 text-center">
                Optimized for Warm Ivory (#F8F3E9) and high-contrast editorial prints.
              </p>
            </div>

            {/* 5. Dark Background Logo */}
            <div className="bg-[#191A23] border-2 border-[#FFD966] p-5 space-y-3 text-white">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#FFD966] text-[#191A23] px-2 py-0.5">
                5. DARK BACKGROUND
              </span>
              <div className="py-4 flex justify-center">
                <SkillBridgeLogo variant="horizontal" size="md" themeMode="dark" />
              </div>
              <p className="font-mono text-[10px] text-stone-400 text-center">
                Optimized for Ink Black (#191A23) with glowing Butter Yellow accents.
              </p>
            </div>

            {/* 6. Browser Favicon & Animated Logo */}
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-5 space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase bg-[#FF7138] text-white px-2 py-0.5">
                6 &amp; 7. FAVICON &amp; ANIMATED
              </span>
              <div className="py-4 flex justify-center items-center gap-4">
                <SkillBridgeSymbol size={48} animated={true} />
                <div className="font-mono text-xs">
                  <div className="font-bold text-[#3657F0]">Active In Browser Tab</div>
                  <div className="text-[10px] text-stone-500">Self-assembling SVG paths</div>
                </div>
              </div>
              <div className="pt-2 flex justify-center">
                <a
                  href="/brand/skillbridge-symbol.svg"
                  target="_blank"
                  className="px-3 py-1.5 bg-white dark:bg-[#282B3A] border border-[#191A23] font-mono text-[11px] font-bold flex items-center gap-1.5 hover:bg-[#3657F0] hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download SVG Assets</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="pt-4 flex justify-center">
        <button
          onClick={() => setActiveTab('how-it-works')}
          className="px-6 py-3 bg-[#3657F0] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
        >
          <span>Explore The Verification Pipeline</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
