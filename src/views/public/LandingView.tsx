import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { SkillBridgeLogo } from '../../components/brand/SkillBridgeLogo';

// Animation & Motion Modules
import { RotatingHeadline } from '../../animations/typography/RotatingHeadline';
import { MarqueeText } from '../../animations/typography/MarqueeText';
import { AnimatedCounter } from '../../animations/typography/AnimatedCounter';
import { KineticHeading } from '../../animations/typography/KineticHeading';
import { TextHighlightSweep } from '../../animations/typography/TextHighlightSweep';
import { BlurToFocus } from '../../animations/typography/BlurToFocus';

import { TiltCard } from '../../animations/interactions/TiltCard';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { ParallaxLayer } from '../../animations/scrolling/ParallaxLayer';

import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Briefcase, 
  Lock, 
  Check, 
  AlertTriangle,
  BadgeCheck,
  FolderGit2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const LandingView: React.FC = () => {
  const { switchRole, setActiveTab } = useAuthRole();
  const [simStep, setSimStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(2);
    setTimeout(() => {
      setSimStep(3);
      setIsSimulating(false);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.65 }
        });
      } catch (e) {
        console.error(e);
      }
    }, 1600);
  };

  const tickerItems = [
    "REAL CODE PROJECTS",
    "AUTOMATED TEST CHECKS",
    "TEACHER REVIEWS & FEEDBACK",
    "VERIFIED SKILLS CERTIFICATES",
    "NO RESUME GUESSWORK",
    "STUDENT DATA PRIVACY",
    "CONNECT DIRECTLY WITH RECRUITERS",
    "PROVEN PRACTICAL TALENT"
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 select-none overflow-x-hidden">
      {/* 1. TICKER STRIP */}
      <MarqueeText items={tickerItems} speed="normal" />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION — SIMPLE, DIRECT, HIGH-IMPACT                     */}
      {/* ========================================================================= */}
      <section className="relative pt-4 sm:pt-8 pb-8 overflow-hidden">
        {/* Parallax Floating Geometric Decorators */}
        <div className="absolute -top-10 -left-10 opacity-20 dark:opacity-10 pointer-events-none hidden lg:block">
          <ParallaxLayer speed={-30}>
            <div className="w-64 h-64 border-8 border-[#3657F0] rounded-full" />
          </ParallaxLayer>
        </div>
        <div className="absolute top-1/2 -right-20 opacity-20 dark:opacity-10 pointer-events-none hidden lg:block">
          <ParallaxLayer speed={40}>
            <div className="w-80 h-80 bg-[#FFD966] rotate-12" />
          </ParallaxLayer>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 cols: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Pill Tag */}
              <ScrollReveal direction="down" delay={0.05}>
                <div className="inline-flex items-center gap-2 bg-[#FFD966] text-[#191A23] px-3.5 py-1.5 font-mono text-xs font-black uppercase tracking-wider border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23]">
                  <Sparkles className="w-4 h-4 text-[#FF7138]" />
                  <span>SKILL VERIFICATION &bull; TALENT PLATFORM</span>
                </div>
              </ScrollReveal>

              {/* Editorial Heading */}
              <div className="space-y-2">
                <KineticHeading tag="h1" className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
                  <span>Skills</span> <span>Demonstrated.</span>
                </KineticHeading>

                <div className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
                  <RotatingHeadline 
                    words={[
                      "Talent Verified.",
                      "Projects Tested.",
                      "Feedback Given.",
                      "Results Proven."
                    ]} 
                    interval={2800} 
                  />
                </div>

                <KineticHeading tag="h2" delay={0.2} className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-[#3657F0] dark:text-[#FFD966]">
                  <span>Opportunities</span> <span>Connected.</span>
                </KineticHeading>
              </div>

              {/* Sub-headline in simple, everyday language */}
              <BlurToFocus delay={0.3}>
                <p className="font-sans text-base sm:text-lg text-stone-700 dark:text-stone-300 max-w-xl font-medium leading-relaxed">
                  SkillBridge connects <TextHighlightSweep color="yellow">students</TextHighlightSweep>, <TextHighlightSweep color="orange" textClassName="text-white">teachers</TextHighlightSweep>, colleges, and recruiters. Students prove their skills by building real projects, passing automated tests, and receiving teacher reviews — making hiring easy and trustworthy.
                </p>
              </BlurToFocus>

              {/* Primary Call to Actions */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-wrap gap-4 pt-1">
                  <MagneticButton
                    onClick={() => switchRole('STUDENT')}
                    className="px-7 py-3.5 bg-[#FF7138] hover:bg-[#e85f26] text-white border-3 border-[#191A23] text-sm font-bold tracking-wider shadow-[4px_4px_0px_#191A23] transition-all flex items-center gap-2.5 cursor-pointer"
                  >
                    <span>Explore as Student</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>

                  <MagneticButton
                    onClick={() => switchRole('RECRUITER')}
                    className="px-7 py-3.5 bg-white dark:bg-[#212330] text-[#191A23] dark:text-white border-3 border-[#191A23] dark:border-[#FFD966] text-sm font-bold tracking-wider shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] transition-all flex items-center gap-2.5 cursor-pointer"
                  >
                    <Briefcase className="w-4 h-4 text-[#3657F0]" />
                    <span>Find Proven Candidates</span>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              {/* Key Trust Highlights */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-mono text-stone-600 dark:text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <strong>Tested Code Projects</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpenCheck className="w-4 h-4 text-[#FF7138]" />
                    <strong>Teacher Reviews</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-[#3657F0]" />
                    <strong>Student Privacy First</strong>
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right 5 cols: Live Verification Card Preview */}
            <div className="lg:col-span-5 relative">
              <TiltCard tiltAmount={8}>
                <div className="bg-[#3657F0] text-white p-6 sm:p-7 border-4 border-[#191A23] shadow-[8px_8px_0px_#191A23] relative overflow-hidden">
                  {/* Decorative background grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Window Bar Header */}
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-3 mb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF7138] border border-[#191A23]"></span>
                      <span className="w-3 h-3 rounded-full bg-[#FFD966] border border-[#191A23]"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-400 border border-[#191A23]"></span>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFD966] bg-[#191A23] px-2 py-0.5 border border-[#FFD966]">
                      SAMPLE VERIFIED PROJECT
                    </span>
                  </div>

                  {/* Execution Preview Body */}
                  <div className="space-y-3 font-mono text-xs relative z-10">
                    <div className="bg-[#191A23] text-emerald-400 p-4 border-2 border-white/20 space-y-2">
                      <div className="text-stone-400 text-[11px] border-b border-stone-800 pb-1 flex justify-between items-center">
                        <span className="text-stone-200 font-bold">Project: Distributed Cache Engine</span>
                        <span className="text-emerald-400 font-bold">PASSED</span>
                      </div>
                      <div className="flex items-center justify-between text-stone-300">
                        <span>Automated Test Checks:</span>
                        <span className="text-[#FFD966] font-bold">48 / 48 Passed (100%)</span>
                      </div>
                      <div className="flex items-center justify-between text-stone-300">
                        <span>Code Coverage:</span>
                        <span className="text-emerald-400 font-bold">96.4%</span>
                      </div>
                      <div className="flex items-center justify-between text-stone-300">
                        <span>Teacher Review:</span>
                        <span className="text-white font-bold">Dr. Elena Rostova</span>
                      </div>
                    </div>

                    <div className="bg-white/10 p-3 border border-white/20 text-stone-100 text-xs">
                      <p className="font-sans italic leading-relaxed text-[12px]">
                        "Clean code architecture, solid test cases, and excellent concurrency safety. Approved with distinction!"
                      </p>
                    </div>
                  </div>

                  {/* Verification Stamp */}
                  <div className="absolute -bottom-4 -right-4 z-20">
                    <VerificationStamp
                      mentorName="Dr. Elena Rostova"
                      verificationDate="2026-11-22"
                      hash="VERIFIED-PASSED"
                      score={98}
                      rotation={3}
                    />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY SKILLBRIDGE — SIMPLE COMPARISON                             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1E202B] border-4 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-12 shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] space-y-8">
          <div className="space-y-2 border-b-4 border-[#191A23] pb-4">
            <div className="inline-flex items-center gap-1.5 bg-[#FF7138] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>THE PROBLEM WITH TRADITIONAL HIRING</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#191A23] dark:text-white tracking-tight">
              Resumes don't prove practical ability. Real projects do.
            </h2>
            <p className="font-sans text-sm text-stone-600 dark:text-stone-300">
              Most hiring relies on buzzwords and quiz memorization. SkillBridge verifies what students can actually build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old Way */}
            <div className="bg-[#FFF4F0] dark:bg-[#2A1E20] border-3 border-[#FF7138] p-5 space-y-3">
              <span className="font-mono font-bold text-xs uppercase text-[#FF7138] block">
                Traditional Hiring (The Hard Way)
              </span>
              <h3 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                Unverified Resumes &amp; Guesswork
              </h3>
              <ul className="space-y-2.5 font-sans text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7138] font-bold text-sm">&times;</span>
                  <span><strong>Exaggerated resumes:</strong> Hard to tell who actually wrote the code versus copy-pasting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7138] font-bold text-sm">&times;</span>
                  <span><strong>Puzzle quiz interviews:</strong> Memorized trick questions don't reflect actual daily job work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7138] font-bold text-sm">&times;</span>
                  <span><strong>Unseen student talent:</strong> Great students from lesser-known colleges get filtered out unfairly.</span>
                </li>
              </ul>
            </div>

            {/* The SkillBridge Way */}
            <div className="bg-[#EEF2FF] dark:bg-[#1A2238] border-3 border-[#3657F0] p-5 space-y-3">
              <span className="font-mono font-bold text-xs uppercase text-[#3657F0] block">
                The SkillBridge Solution
              </span>
              <h3 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                Verified Projects &amp; Real Proof
              </h3>
              <ul className="space-y-2.5 font-sans text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold text-sm">&check;</span>
                  <span><strong>Real GitHub code:</strong> Students submit functional projects that demonstrate their practical skills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold text-sm">&check;</span>
                  <span><strong>Automated test checks:</strong> Code is checked automatically for test pass rates and quality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold text-sm">&check;</span>
                  <span><strong>Teacher endorsement:</strong> Faculty mentors give genuine reviews, creating a verified profile.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: KEY PLATFORM NUMBERS                                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">STUDENTS ENROLLED</span>
            <AnimatedCounter value={18420} suffix="+" className="text-3xl sm:text-4xl text-[#3657F0] font-black" />
          </div>
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">TESTS COMPLETED</span>
            <AnimatedCounter value={148920} className="text-3xl sm:text-4xl text-[#FF7138] font-black" />
          </div>
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">PARTNER COLLEGES</span>
            <AnimatedCounter value={128} className="text-3xl sm:text-4xl text-[#191A23] dark:text-[#FFD966] font-black" />
          </div>
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">PLACEMENT SUCCESS</span>
            <AnimatedCounter value={92.4} decimals={1} suffix="%" className="text-3xl sm:text-4xl text-emerald-600 font-black" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW IT WORKS IN 3 SIMPLE STEPS                                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b-4 border-[#191A23] pb-4 mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            EASY 3-STEP PROCESS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            How SkillBridge Works
          </h2>
          <p className="font-sans text-sm text-stone-600 dark:text-stone-300 mt-1">
            Simple and transparent: build projects, pass automated tests, get teacher feedback, and get hired.
          </p>
        </div>

        {/* 3-Stage Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3">
            <div className="flex items-center justify-between border-b-2 border-stone-200 dark:border-stone-700 pb-2">
              <span className="w-8 h-8 rounded-full bg-[#FFD966] text-[#191A23] font-mono font-black flex items-center justify-center text-sm border-2 border-[#191A23]">
                01
              </span>
              <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">STEP 1: SUBMIT</span>
            </div>
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Build &amp; Submit Project
            </h3>
            <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              Students build practical applications and submit their project repository link (GitHub/GitLab) along with a short description.
            </p>
            <div className="bg-stone-100 dark:bg-[#191A23] p-2.5 border border-stone-300 dark:border-stone-700 font-mono text-[11px] text-stone-600 dark:text-stone-400">
              &gt; Student connects GitHub repository
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3">
            <div className="flex items-center justify-between border-b-2 border-stone-200 dark:border-stone-700 pb-2">
              <span className="w-8 h-8 rounded-full bg-[#3657F0] text-white font-mono font-black flex items-center justify-center text-sm border-2 border-[#191A23]">
                02
              </span>
              <span className="font-mono text-xs font-bold uppercase text-[#3657F0]">STEP 2: TEST</span>
            </div>
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Automated Code Checks
            </h3>
            <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              Automated tests run against the project to verify functionality, test coverage, code quality, and security best practices.
            </p>
            <div className="bg-stone-100 dark:bg-[#191A23] p-2.5 border border-stone-300 dark:border-stone-700 font-mono text-[11px] text-emerald-600 font-bold">
              &gt; Tests Passed: 100% Assertion Rate
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3">
            <div className="flex items-center justify-between border-b-2 border-stone-200 dark:border-stone-700 pb-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-mono font-black flex items-center justify-center text-sm border-2 border-[#191A23]">
                03
              </span>
              <span className="font-mono text-xs font-bold uppercase text-emerald-600">STEP 3: VERIFY</span>
            </div>
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Teacher Feedback &amp; Badge
            </h3>
            <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              A faculty mentor reviews the project, provides constructive feedback, and awards a verified skills stamp for recruiters to see.
            </p>
            <div className="bg-stone-100 dark:bg-[#191A23] p-2.5 border border-stone-300 dark:border-stone-700 font-mono text-[11px] text-[#3657F0] font-bold">
              &gt; Verified Badge awarded to student
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: INTERACTIVE DEMO SIMULATOR                                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#212330] border-4 border-[#191A23] dark:border-[#3B3E54] shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] p-6 sm:p-10 space-y-6">
          <div className="border-b-4 border-[#191A23] pb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
                TRY IT NOW IN 10 SECONDS
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
                Quick Project Verification Demo
              </h2>
            </div>
            <span className="font-mono text-xs font-bold bg-[#FFD966] text-[#191A23] px-3.5 py-1.5 border-2 border-[#191A23]">
              STAGE {simStep} OF 3
            </span>
          </div>

          {/* Stepper Progress */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className={`p-4 border-2 border-[#191A23] transition-all ${simStep >= 1 ? 'bg-[#FFD966] text-[#191A23] font-bold shadow-[3px_3px_0px_#191A23]' : 'bg-stone-100 text-stone-500'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-[#191A23] text-white flex items-center justify-center text-[10px]">1</span>
                <span className="uppercase font-bold">1: Submit Project</span>
              </div>
              <p className="font-sans text-[11px] font-normal">Student provides project repository and details.</p>
            </div>

            <div className={`p-4 border-2 border-[#191A23] transition-all ${simStep >= 2 ? 'bg-[#3657F0] text-white font-bold shadow-[3px_3px_0px_#191A23]' : 'bg-stone-100 text-stone-500'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-[#FFD966] text-[#191A23] flex items-center justify-center text-[10px]">2</span>
                <span className="uppercase font-bold">2: Automated Test</span>
              </div>
              <p className="font-sans text-[11px] font-normal">Checks code tests, coverage, and quality.</p>
            </div>

            <div className={`p-4 border-2 border-[#191A23] transition-all ${simStep >= 3 ? 'bg-emerald-500 text-white font-bold shadow-[3px_3px_0px_#191A23]' : 'bg-stone-100 text-stone-500'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-[#191A23] text-white flex items-center justify-center text-[10px]">3</span>
                <span className="uppercase font-bold">3: Teacher Verified</span>
              </div>
              <p className="font-sans text-[11px] font-normal">Teacher gives feedback and verified stamp.</p>
            </div>
          </div>

          {/* Interactive Simulation Action Box */}
          <div className="bg-[#F8F3E9] dark:bg-[#191A23] border-3 border-[#191A23] p-6 sm:p-8 text-center space-y-4">
            {simStep === 1 && (
              <div className="space-y-4 max-w-xl mx-auto">
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#191A23] dark:text-white">
                  Student Project: "Full-Stack Task Manager &amp; API"
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Click the button below to test the code. The system will check all unit tests and verify the code works properly.
                </p>
                <div className="pt-2">
                  <MagneticButton
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="px-7 py-3 bg-[#3657F0] hover:bg-[#2c47c7] text-white border-2 border-[#191A23] text-xs sm:text-sm font-bold tracking-wider shadow-[3px_3px_0px_#191A23] inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Terminal className="w-4 h-4 text-[#FFD966]" />
                    <span>{isSimulating ? 'Running Tests...' : '▶ Run Code Tests'}</span>
                  </MagneticButton>
                </div>
              </div>
            )}

            {simStep === 2 && (
              <div className="space-y-3 py-6">
                <div className="w-12 h-12 border-4 border-[#3657F0] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  Checking Code and Running Tests...
                </h3>
                <p className="font-mono text-xs text-[#3657F0] max-w-md mx-auto">
                  Running 24 automated unit tests &bull; Checking code quality &bull; Checking test coverage
                </p>
              </div>
            )}

            {simStep === 3 && (
              <div className="space-y-4 py-2">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <div className="text-left space-y-2 max-w-md">
                    <span className="bg-emerald-500 text-white font-mono text-[11px] font-bold px-2 py-0.5">
                      TEST PASSED &amp; TEACHER VERIFIED
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-[#191A23] dark:text-white">
                      Skill Successfully Verified!
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      All 24 test assertions passed with 98% coverage. Teacher Dr. Elena Rostova reviewed the project, gave top marks, and awarded the verified stamp.
                    </p>
                    <div className="pt-1">
                      <button
                        onClick={() => setSimStep(1)}
                        className="text-xs font-mono font-bold text-[#3657F0] hover:underline cursor-pointer"
                      >
                        &larr; Try simulation again
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-[#212330] border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23]">
                    <VerificationStamp
                      mentorName="Dr. Elena Rostova"
                      verificationDate="2026-11-22"
                      hash="VERIFIED-OK"
                      score={98}
                      rotation={-2}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: USER ROLES (STUDENT, TEACHER, COLLEGE, RECRUITER)              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b-4 border-[#191A23] pb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            WHO USES SKILLBRIDGE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Choose Your Role
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Each role has a simple, dedicated space designed specifically for what you need to do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Student */}
          <TiltCard onClick={() => switchRole('STUDENT')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] group h-full flex flex-col justify-between cursor-pointer hover:border-[#3657F0] transition-colors">
              <div>
                <div className="w-11 h-11 bg-[#3657F0] text-white flex items-center justify-center border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23] mb-3 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white mb-1.5">
                  For Students
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                  Submit real coding projects, pass automated tests, get teacher reviews, and build a verified profile companies trust.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1 group-hover:underline">
                <span>Enter Student Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </TiltCard>

          {/* 2. Teacher */}
          <TiltCard onClick={() => switchRole('MENTOR')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] group h-full flex flex-col justify-between cursor-pointer hover:border-[#FF7138] transition-colors">
              <div>
                <div className="w-11 h-11 bg-[#FF7138] text-white flex items-center justify-center border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23] mb-3 group-hover:scale-105 transition-transform">
                  <BookOpenCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white mb-1.5">
                  For Teachers
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                  Review student code submissions, inspect automated test scores, write helpful feedback, and award verified badges.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#FF7138] flex items-center gap-1 group-hover:underline">
                <span>Enter Teacher Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </TiltCard>

          {/* 3. College Admin */}
          <TiltCard onClick={() => switchRole('ORG_ADMIN')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] group h-full flex flex-col justify-between cursor-pointer hover:border-[#FFD966] transition-colors">
              <div>
                <div className="w-11 h-11 bg-[#FFD966] text-[#191A23] flex items-center justify-center border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23] mb-3 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6 text-[#3657F0]" />
                </div>
                <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white mb-1.5">
                  For Colleges
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                  Manage student cohorts, oversee faculty evaluators, and track student skill development and placement success.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#191A23] dark:text-[#FFD966] flex items-center gap-1 group-hover:underline">
                <span>Enter College Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </TiltCard>

          {/* 4. Recruiter */}
          <TiltCard onClick={() => switchRole('RECRUITER')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] group h-full flex flex-col justify-between cursor-pointer hover:border-emerald-500 transition-colors">
              <div>
                <div className="w-11 h-11 bg-emerald-600 text-white flex items-center justify-center border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23] mb-3 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white mb-1.5">
                  For Recruiters
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                  Search pre-verified candidates with proven code skills and teacher endorsements. No more resume guessing.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:underline">
                <span>Enter Recruiter Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: FINAL CALL TO ACTION                                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3657F0] text-white border-4 border-[#191A23] shadow-[8px_8px_0px_#191A23] p-8 sm:p-14 relative overflow-hidden text-center space-y-6">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block bg-[#FFD966] text-[#191A23] font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-[#191A23]">
              SIMPLE, CLEAR &amp; VERIFIED
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Ready to verify real coding talent?
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed">
              Join students, teachers, colleges, and hiring managers who focus on what people can actually build.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveTab('register')}
                className="px-7 py-3 bg-[#FF7138] hover:bg-[#e85f26] text-white border-2 border-[#191A23] text-xs font-mono font-bold uppercase shadow-[3px_3px_0px_#191A23] cursor-pointer"
              >
                Sign Up as Student
              </button>
              <button
                onClick={() => switchRole('RECRUITER')}
                className="px-7 py-3 bg-white text-[#191A23] border-2 border-[#191A23] text-xs font-mono font-bold uppercase shadow-[3px_3px_0px_#191A23] cursor-pointer"
              >
                Hire Verified Talent
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
