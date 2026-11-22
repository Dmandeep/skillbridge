import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { SkillBridgeLogo, SkillBridgeSymbol } from '../../components/brand/SkillBridgeLogo';

// Animation & Motion Modules
import { SplitText } from '../../animations/typography/SplitText';
import { RotatingHeadline } from '../../animations/typography/RotatingHeadline';
import { MarqueeText } from '../../animations/typography/MarqueeText';
import { AnimatedCounter } from '../../animations/typography/AnimatedCounter';
import { KineticHeading } from '../../animations/typography/KineticHeading';
import { TextHighlightSweep } from '../../animations/typography/TextHighlightSweep';
import { TextScramble } from '../../animations/typography/TextScramble';
import { BlurToFocus } from '../../animations/typography/BlurToFocus';
import { OutlineToFill } from '../../animations/typography/OutlineToFill';

import { TiltCard } from '../../animations/interactions/TiltCard';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { ParallaxLayer } from '../../animations/scrolling/ParallaxLayer';
import { ScrollTextReveal } from '../../animations/scrolling/ScrollTextReveal';
import { ScrollStory } from '../../animations/scrolling/ScrollStory';

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
  Flame, 
  Layers,
  Award,
  Zap,
  Cpu,
  FileCode2,
  Check,
  AlertTriangle,
  Fingerprint,
  UserCheck,
  GitCommit,
  ExternalLink,
  Search,
  BadgeCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const LandingView: React.FC = () => {
  const { switchRole, setActiveTab } = useAuthRole();
  const [simStep, setSimStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activePersonaTab, setActivePersonaTab] = useState<'student' | 'mentor' | 'org' | 'recruiter' | 'admin'>('student');

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(2);
    setTimeout(() => {
      setSimStep(3);
      setIsSimulating(false);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.65 }
        });
      } catch (e) {
        console.error(e);
      }
    }, 1800);
  };

  const tickerItems = [
    "REPRODUCIBLE CODE EXECUTION",
    "GVISOR SANDBOX TEST HARNESS",
    "FACULTY RUBRIC ATTESTATION",
    "TAMPER-EVIDENT VERIFICATION PASSPORTS",
    "ZERO RESUME INFLATION",
    "STUDENT DATA SOVEREIGNTY",
    "DECENTRALIZED SKILL AUDITING",
    "CONSENT-GATED RECRUITER ACCESS"
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-28 select-none overflow-x-hidden">
      {/* 1. KINETIC TICKER STRIP */}
      <MarqueeText items={tickerItems} speed="normal" />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION — EDITORIAL & PLAYFUL MAXIMALISM                  */}
      {/* ========================================================================= */}
      <section className="relative pt-4 sm:pt-10 pb-12 overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 cols: Editorial Kinetic Typography & Proposition */}
            <div className="lg:col-span-7 space-y-7">
              {/* Category Pill Tag */}
              <ScrollReveal direction="down" delay={0.05}>
                <div className="inline-flex items-center gap-2.5 bg-[#FFD966] text-[#191A23] px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23]">
                  <Sparkles className="w-4 h-4 text-[#FF7138] animate-spin" />
                  <span>PRACTICAL SKILL VERIFICATION &bull; VERIFIED TALENT PLATFORM</span>
                </div>
              </ScrollReveal>

              {/* Massive Kinetic Editorial Heading */}
              <div className="space-y-3">
                <KineticHeading tag="h1" className="text-4xl sm:text-6xl lg:text-7xl leading-[1.03]">
                  <span>Skills</span> <span>Demonstrated.</span>
                </KineticHeading>

                <div className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.03]">
                  <RotatingHeadline 
                    words={[
                      "Talent Verified.",
                      "Code Audited.",
                      "Ability Attested.",
                      "Reputation Minted."
                    ]} 
                    interval={2800} 
                  />
                </div>

                <KineticHeading tag="h2" delay={0.2} className="text-4xl sm:text-6xl lg:text-7xl leading-[1.03] text-[#3657F0] dark:text-[#FFD966]">
                  <span>Opportunities</span> <span>Connected.</span>
                </KineticHeading>
              </div>

              {/* Sub-headline with text highlight sweep */}
              <BlurToFocus delay={0.35}>
                <p className="font-sans text-base sm:text-lg text-stone-700 dark:text-stone-300 max-w-xl font-medium leading-relaxed">
                  The era of inflated resumes and synthetic LeetCode trivia is finished. SkillBridge connects students, faculty mentors, accredited universities, and recruiters through <TextHighlightSweep color="yellow">reproducible code evidence</TextHighlightSweep> and <TextHighlightSweep color="orange" textClassName="text-white">cryptographic faculty attestation</TextHighlightSweep>.
                </p>
              </BlurToFocus>

              {/* Primary Call to Actions */}
              <ScrollReveal direction="up" delay={0.45}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <MagneticButton
                    onClick={() => setActiveTab('register')}
                    className="px-8 py-4 bg-[#FF7138] text-white border-3 border-[#191A23] text-sm font-black tracking-wider shadow-[5px_5px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-3"
                  >
                    <span>Get Practically Verified</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>

                  <MagneticButton
                    onClick={() => switchRole('RECRUITER')}
                    className="px-8 py-4 bg-white dark:bg-[#212330] text-[#191A23] dark:text-white border-3 border-[#191A23] dark:border-[#FFD966] text-sm font-black tracking-wider shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-3"
                  >
                    <Briefcase className="w-4 h-4 text-[#3657F0]" />
                    <span>Hire Verified Talent</span>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              {/* Real-world Trust Signals */}
              <ScrollReveal direction="up" delay={0.55}>
                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-stone-600 dark:text-stone-400">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <strong>100% Runtime Verified</strong>
                  </span>
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#3657F0]" />
                    <strong>Student Data Sovereignty</strong>
                  </span>
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#FF7138]" />
                    <strong>Accredited Faculty Stamped</strong>
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right 5 cols: 3D Interactive Tilt Card with Live Telemetry */}
            <div className="lg:col-span-5 relative">
              <TiltCard tiltAmount={10}>
                <div className="bg-[#3657F0] text-white p-7 sm:p-8 border-4 border-[#191A23] shadow-[10px_10px_0px_#191A23] relative overflow-hidden">
                  {/* Decorative background grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Window Bar Header */}
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-3 mb-5 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FF7138] border border-[#191A23]"></span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FFD966] border border-[#191A23]"></span>
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-[#191A23]"></span>
                    </div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#FFD966] bg-[#191A23] px-2.5 py-1 border border-[#FFD966]">
                      LIVE VERIFICATION RUNNER
                    </span>
                  </div>

                  {/* Terminal Execution Body */}
                  <div className="space-y-4 font-mono text-xs relative z-10">
                    <div className="bg-[#191A23] text-emerald-400 p-4 border-2 border-white/20 space-y-2 shadow-inner">
                      <div className="text-stone-400 text-[11px] border-b border-stone-800 pb-1.5 flex justify-between items-center">
                        <span className="text-stone-300 font-bold">&gt; REPO: chronokv-engine</span>
                        <span className="text-[#FFD966] font-mono text-[10px]">SHA: <TextScramble text="0x7F8B2C4E" /></span>
                      </div>
                      <div className="flex items-center justify-between text-stone-300">
                        <span>gVisor Sandbox Isolation</span>
                        <span className="text-emerald-400 font-bold">[ACTIVE]</span>
                      </div>
                      <div className="flex items-center justify-between text-stone-300">
                        <span>Assertion Suite Pass</span>
                        <span className="text-[#FFD966] font-bold">48 / 48 (100%)</span>
                      </div>
                      <div className="flex items-center justify-between text-stone-300">
                        <span>Memory Leak Analysis</span>
                        <span className="text-emerald-400 font-bold">0 LEAKS (VALGRIND OK)</span>
                      </div>
                      <div className="border-t border-stone-800 pt-1.5 flex items-center justify-between text-[#FF7138] font-bold">
                        <span>Attesting Mentor</span>
                        <span className="text-white">Dr. Elena Rostova</span>
                      </div>
                    </div>

                    <div className="bg-white/10 p-3.5 border border-white/20 text-stone-100 text-xs rounded-none">
                      <p className="font-sans italic leading-relaxed text-[11.5px]">
                        "Sub-millisecond thread safety under extreme concurrency contention. Tamper-evident cryptographic signature verified."
                      </p>
                    </div>
                  </div>

                  {/* Tangible Verification Stamp */}
                  <div className="absolute -bottom-5 -right-5 z-20">
                    <VerificationStamp
                      mentorName="Dr. Elena Rostova"
                      verificationDate="2026-11-22"
                      hash="0x7F8B2C4E91A334D"
                      score={98}
                      rotation={4}
                    />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: "THE BROKEN SIGNAL" — MCKINSEY/BAIN OSINT PROBLEM STATEMENT   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1E202B] border-4 border-[#191A23] dark:border-[#3B3E54] p-8 sm:p-14 shadow-[10px_10px_0px_#191A23] dark:shadow-[10px_10px_0px_#FFD966] space-y-12">
          {/* Header pill & title */}
          <div className="space-y-3 border-b-4 border-[#191A23] pb-6">
            <div className="inline-flex items-center gap-2 bg-[#FF7138] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>THE HIRING CRISIS OF 2026</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#191A23] dark:text-white tracking-tight">
              Degrees are static. Resumes are fabricated. Code doesn't lie.
            </h2>
          </div>

          {/* Scrubbed Scroll Narrative Text */}
          <div className="text-lg sm:text-2xl font-serif text-stone-800 dark:text-stone-200 space-y-6">
            <ScrollTextReveal
              text="Traditional hiring pipelines are collapsing under the weight of AI-generated resumes, memorized algorithm quizzes, and unverifiable degree credentials. Recruiters drown in thousands of applicants while skilled students struggle to be seen."
              highlightWords={["collapsing", "AI-generated", "unverifiable", "thousands"]}
              highlightClass="text-[#FF7138] font-bold"
            />
            <ScrollTextReveal
              text="SkillBridge re-establishes trust through rigorous runtime validation. We test student code in isolated sandboxes and pair it with verified faculty attestation, producing a cryptographically sealed Skill Passport that proves actual execution capability."
              highlightWords={["trust", "isolated", "sandboxes", "attestation", "Skill", "Passport"]}
              highlightClass="text-[#3657F0] dark:text-[#FFD966] font-bold"
            />
          </div>

          {/* Contrast Matrix: The Broken Way vs The SkillBridge Standard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* The Broken Way */}
            <div className="bg-[#FFF4F0] dark:bg-[#2A1E20] border-3 border-[#FF7138] p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#FF7138] font-mono font-bold text-xs uppercase tracking-wider">
                <span className="w-3 h-3 rounded-full bg-[#FF7138]" />
                <span>The Legacy Status Quo</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#191A23] dark:text-white">
                Unverifiable Claim Culture
              </h3>
              <ul className="space-y-3 font-sans text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7138] font-bold">&times;</span>
                  <span><strong>84% of resumes contain exaggerated skills</strong> or AI-prompted projects that the candidate cannot explain in depth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7138] font-bold">&times;</span>
                  <span><strong>LeetCode trivia filtration:</strong> Tests memorized algorithmic mnemonics rather than real-world software architecture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7138] font-bold">&times;</span>
                  <span><strong>University GPA disconnection:</strong> Excellent exam scores frequently fail to correlate with real-world production engineering.</span>
                </li>
              </ul>
            </div>

            {/* The SkillBridge Standard */}
            <div className="bg-[#EEF2FF] dark:bg-[#1A2238] border-3 border-[#3657F0] p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#3657F0] font-mono font-bold text-xs uppercase tracking-wider">
                <span className="w-3 h-3 rounded-full bg-[#3657F0]" />
                <span>The SkillBridge Standard</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#191A23] dark:text-white">
                Verifiable Runtime Proof
              </h3>
              <ul className="space-y-3 font-sans text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&check;</span>
                  <span><strong>Reproducible Git execution:</strong> Code is pulled directly from repos and run against benchmark stress suites in isolated gVisor containers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&check;</span>
                  <span><strong>Dual-factor verification:</strong> Automated telemetry + accredited mentor rubric scoring create an unforgeable passport.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&check;</span>
                  <span><strong>Consent-gated recruiter access:</strong> Candidates own their data sovereignty and grant explicit read permissions to recruiters.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PLATFORM TELEMETRY COUNTERS                                    */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">CANDIDATES VERIFIED</span>
            <AnimatedCounter value={18420} suffix="+" className="text-3xl sm:text-5xl text-[#3657F0] font-black" />
          </div>
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">TEST ASSERTIONS RUN</span>
            <AnimatedCounter value={148920} className="text-3xl sm:text-5xl text-[#FF7138] font-black" />
          </div>
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">ACCREDITED ORGS</span>
            <AnimatedCounter value={128} className="text-3xl sm:text-5xl text-[#191A23] dark:text-[#FFD966] font-black" />
          </div>
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] text-center">
            <span className="font-mono text-xs uppercase font-bold text-stone-500 block mb-1">PLACEMENT CONVERSION</span>
            <AnimatedCounter value={92.4} decimals={1} suffix="%" className="text-3xl sm:text-5xl text-emerald-600 font-black" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: PINNED SCROLL STORY — THE 3-STAGE PROOF ENGINE                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b-4 border-[#191A23] pb-4 mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            THE VERIFICATION LIFECYCLE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#191A23] dark:text-white mt-1">
            The Three-Stage Proof Engine
          </h2>
          <p className="font-sans text-sm text-stone-600 dark:text-stone-300 mt-1">
            How a raw code submission transforms into a cryptographically verified talent passport.
          </p>
        </div>

        {/* 3-Stage Visual Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stage 1 */}
          <div className="bg-white dark:bg-[#212330] border-4 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-stone-200 dark:border-stone-700 pb-3">
              <span className="w-8 h-8 rounded-full bg-[#FFD966] text-[#191A23] font-mono font-black flex items-center justify-center text-sm border-2 border-[#191A23]">
                01
              </span>
              <span className="font-mono text-[11px] font-bold uppercase text-[#FF7138]">BUILD &amp; SUBMIT</span>
            </div>
            <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
              Demonstrate Real Artifacts
            </h3>
            <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              No multiple-choice questions or artificial puzzle toys. Students submit production Git repositories: microservices, distributed caches, full-stack SPAs, or machine learning pipelines.
            </p>
            <div className="bg-stone-100 dark:bg-[#191A23] p-3 border border-stone-300 dark:border-stone-700 font-mono text-[11px] space-y-1">
              <div className="text-stone-500">&gt; git clone candidate_repo.git</div>
              <div className="text-stone-500">&gt; git checkout release-v1.4</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold">&gt; Commits signed by GPG key</div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="bg-white dark:bg-[#212330] border-4 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-stone-200 dark:border-stone-700 pb-3">
              <span className="w-8 h-8 rounded-full bg-[#3657F0] text-white font-mono font-black flex items-center justify-center text-sm border-2 border-[#191A23]">
                02
              </span>
              <span className="font-mono text-[11px] font-bold uppercase text-[#3657F0]">AUTOMATED HARNESS</span>
            </div>
            <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
              Isolated gVisor Sandbox
            </h3>
            <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              SkillBridge spins up an isolated sandbox test harness. It runs unit suites, executes boundary stress tests, calculates AST complexity, and measures memory profiles under load.
            </p>
            <div className="bg-stone-100 dark:bg-[#191A23] p-3 border border-stone-300 dark:border-stone-700 font-mono text-[11px] space-y-1">
              <div className="text-stone-500">&gt; runner: spin up sandbox container</div>
              <div className="text-stone-500">&gt; benchmark: 10,000 req/sec load</div>
              <div className="text-[#3657F0] font-bold">&gt; AST Plagiarism: 0% duplicate</div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="bg-white dark:bg-[#212330] border-4 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-stone-200 dark:border-stone-700 pb-3">
              <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-mono font-black flex items-center justify-center text-sm border-2 border-[#191A23]">
                03
              </span>
              <span className="font-mono text-[11px] font-bold uppercase text-emerald-600">FACULTY ATTESTATION</span>
            </div>
            <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
              Accredited Mentor Seal
            </h3>
            <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
              Accredited faculty review the candidate's architectural choices via split-screen rubric review. Mentors score the work and mint an unalterable cryptographic seal on the student's passport.
            </p>
            <div className="bg-stone-100 dark:bg-[#191A23] p-3 border border-stone-300 dark:border-stone-700 font-mono text-[11px] space-y-1">
              <div className="text-stone-500">&gt; Rubric: Architectural Elegance 5/5</div>
              <div className="text-stone-500">&gt; Seal: SHA256: 0x7F8B2C4E91A...</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold">&gt; Passport Minted to Ledger</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: INTERACTIVE 3-STAGE VERIFICATION SIMULATOR                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#212330] border-4 border-[#191A23] dark:border-[#3B3E54] shadow-[10px_10px_0px_#191A23] dark:shadow-[10px_10px_0px_#FFD966] p-6 sm:p-10 space-y-8">
          <div className="border-b-4 border-[#191A23] pb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
                TRY IT DIRECTLY IN THE BROWSER
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
                Interactive Verification Flow Simulator
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
                <span className="uppercase font-extrabold">STAGE 1: CLAIM &amp; REPO</span>
              </div>
              <p className="font-sans text-[11px] font-normal">Candidate commits code and submits repository to test pipeline.</p>
            </div>

            <div className={`p-4 border-2 border-[#191A23] transition-all ${simStep >= 2 ? 'bg-[#3657F0] text-white font-bold shadow-[3px_3px_0px_#191A23]' : 'bg-stone-100 text-stone-500'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-[#FFD966] text-[#191A23] flex items-center justify-center text-[10px]">2</span>
                <span className="uppercase font-extrabold">STAGE 2: AUTOMATED RUNNER</span>
              </div>
              <p className="font-sans text-[11px] font-normal">Isolated sandbox benchmarks test assertions and cyclomatic complexity.</p>
            </div>

            <div className={`p-4 border-2 border-[#191A23] transition-all ${simStep >= 3 ? 'bg-emerald-500 text-white font-bold shadow-[3px_3px_0px_#191A23]' : 'bg-stone-100 text-stone-500'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-[#191A23] text-white flex items-center justify-center text-[10px]">3</span>
                <span className="uppercase font-extrabold">STAGE 3: MENTOR ATTESTED</span>
              </div>
              <p className="font-sans text-[11px] font-normal">Faculty reviews rubric, issues cryptographic verification seal.</p>
            </div>
          </div>

          {/* Interactive Simulation Action Box */}
          <div className="bg-[#F8F3E9] dark:bg-[#191A23] border-3 border-[#191A23] p-8 text-center space-y-5">
            {simStep === 1 && (
              <div className="space-y-4 max-w-2xl mx-auto">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#191A23] dark:text-white">
                  Candidate Repository: "Distributed Raft Consensus Engine"
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Click the button below to trigger the isolated gVisor runner. It will execute 48 concurrency stress tests, calculate mutation coverage, and verify WAL crash consistency in real time.
                </p>
                <div className="pt-2">
                  <MagneticButton
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="px-8 py-3.5 bg-[#3657F0] text-white border-2 border-[#191A23] text-xs sm:text-sm font-bold tracking-wider shadow-[4px_4px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4 text-[#FFD966]" />
                    <span>{isSimulating ? 'Executing Sandbox Runner...' : '▶ Run Automated Verification Harness'}</span>
                  </MagneticButton>
                </div>
              </div>
            )}

            {simStep === 2 && (
              <div className="space-y-4 py-8">
                <div className="w-14 h-14 border-4 border-[#3657F0] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                  Executing Automated Assertion Harness...
                </h3>
                <p className="font-mono text-xs text-[#3657F0] max-w-md mx-auto">
                  Running 48 concurrent goroutines &bull; Measuring memory footprint &bull; Verifying WAL crash consistency
                </p>
                <div className="font-mono text-[11px] text-stone-500">
                  Container ID: <TextScramble text="gvisor-sandbox-8f92a10" speed={25} />
                </div>
              </div>
            )}

            {simStep === 3 && (
              <div className="space-y-6 py-4">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="text-left space-y-3 max-w-md">
                    <span className="bg-emerald-500 text-white font-mono text-[11px] font-bold px-2.5 py-1">
                      TIER 3 ATTESTED &amp; SEALED
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-[#191A23] dark:text-white">
                      Practical Competency Verified!
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      Automated suite passed with 98.4% assertion coverage. Dr. Elena Rostova scored the submission 5/5 on architecture and minted the verifiable passport badge.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setSimStep(1)}
                        className="text-xs font-mono font-bold text-[#3657F0] hover:underline flex items-center gap-1.5"
                      >
                        <span>&larr; Reset and Run Simulation Again</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-white dark:bg-[#212330] border-2 border-[#191A23] shadow-[4px_4px_0px_#191A23]">
                    <VerificationStamp
                      mentorName="Dr. Elena Rostova"
                      verificationDate="2026-11-22"
                      hash="SHA256: 7f8b2c4e..."
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
      {/* SECTION 6: THE 6 USER ROLES — INTERACTIVE PERSONA MATRIX                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b-4 border-[#191A23] pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              TAILORED ECOSYSTEM WORKSPACES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#191A23] dark:text-white mt-1">
              Explore by User Role
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
              Every participant category has a dedicated workflow, navigation architecture, and permission tier.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Student */}
          <TiltCard onClick={() => switchRole('STUDENT')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-7 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#3657F0] text-white flex items-center justify-center border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] mb-4 group-hover:rotate-6 transition-transform">
                  <GraduationCap className="w-6 h-6 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-2">
                  For Students &amp; Apprentices
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                  Build your Verification Passport. Submit code repositories, pass automated test benchmarks, and earn faculty endorsements that recruiters trust.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1 group-hover:underline">
                <span>Enter Student Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </TiltCard>

          {/* Mentor */}
          <TiltCard onClick={() => switchRole('MENTOR')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-7 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FF7138] text-white flex items-center justify-center border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] mb-4 group-hover:rotate-6 transition-transform">
                  <BookOpenCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-2">
                  For Teachers &amp; Mentors
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                  Evaluate real projects using split-screen rubric review. Inspect automated telemetry, provide feedback, and mint verification stamps.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#FF7138] flex items-center gap-1 group-hover:underline">
                <span>Enter Mentor Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </TiltCard>

          {/* Org Admin */}
          <TiltCard onClick={() => switchRole('ORG_ADMIN')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-7 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FFD966] text-[#191A23] flex items-center justify-center border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] mb-4 group-hover:rotate-6 transition-transform">
                  <Building2 className="w-6 h-6 text-[#3657F0]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-2">
                  For Universities &amp; Institutions
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                  Approve student affiliation requests, track cohort verification velocity, and showcase institutional placement readiness with verifiable metrics.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#191A23] dark:text-[#FFD966] flex items-center gap-1 group-hover:underline">
                <span>Enter Org Admin Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </TiltCard>

          {/* Recruiter */}
          <TiltCard onClick={() => switchRole('RECRUITER')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-7 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] mb-4 group-hover:rotate-6 transition-transform">
                  <Briefcase className="w-6 h-6 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-2">
                  For Technical Recruiters
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                  Discover pre-verified candidates filtered by test assertion coverage and mentor rubric scores. Request candidate consent to inspect raw Git commits.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:underline">
                <span>Enter Recruiter Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </TiltCard>

          {/* Super Admin */}
          <TiltCard onClick={() => switchRole('SUPER_ADMIN')}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-7 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#191A23] text-white flex items-center justify-center border-2 border-[#191A23] shadow-[3px_3px_0px_#FFD966] mb-4 group-hover:rotate-6 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-2">
                  For Super &amp; Additional Admins
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
                  Appoint additional administrators, accredit universities, inspect cryptographic audit trails, and govern runner sandbox policies.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#191A23] dark:text-[#FFD966] flex items-center gap-1 group-hover:underline">
                <span>Enter Protocol Command</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </TiltCard>

          {/* Thesis Manifesto */}
          <TiltCard onClick={() => setActiveTab('about')}>
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-7 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] group h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase bg-[#FF7138] text-white px-2 py-0.5 inline-block mb-3">
                  THE SKILLBRIDGE THESIS
                </span>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-2">
                  Why Resumes Fail in 2026
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Read our full whitepaper on why algorithmic quiz memorization and AI-prompted portfolios are dead, and why runtime code verification is the inevitable standard.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1 group-hover:underline pt-4">
                <span>Read Manifesto &amp; Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: HIGH-IMPACT EDITORIAL CALL TO ACTION                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3657F0] text-white border-4 border-[#191A23] shadow-[12px_12px_0px_#191A23] p-8 sm:p-16 relative overflow-hidden text-center space-y-8">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#FF7138] rounded-full opacity-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#FFD966] rounded-full opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block bg-[#FFD966] text-[#191A23] font-mono font-black text-xs uppercase px-4 py-1.5 border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23]">
              ZERO RESUME INFLATION &bull; VERIFIABLE PROOF
            </span>

            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.05]">
              Stop Hiring Guesswork. Start Verifying.
            </h2>

            <p className="font-sans text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed font-medium">
              Join thousands of engineers, mentors, and recruiters who have abandoned resume keyword bingo in favor of cryptographically attested practical code skills.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <MagneticButton
                onClick={() => setActiveTab('register')}
                className="px-8 py-4 bg-[#FF7138] text-white border-3 border-[#191A23] text-sm font-black tracking-wider shadow-[4px_4px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>Create Student Account</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={() => switchRole('RECRUITER')}
                className="px-8 py-4 bg-[#FFD966] text-[#191A23] border-3 border-[#191A23] text-sm font-black tracking-wider shadow-[4px_4px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-[#3657F0]" />
                <span>Recruiter Talent Access</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
