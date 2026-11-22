import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  FileCode, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Lock,
  Briefcase
} from 'lucide-react';

export const HowItWorksView: React.FC = () => {
  const { switchRole } = useAuthRole();

  return (
    <div className="space-y-12 select-none max-w-5xl mx-auto pb-16 px-4">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-6 sm:p-8 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#3657F0] text-white px-3 py-1 font-mono text-xs font-bold uppercase border border-[#191A23]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
            <span>HOW IT WORKS</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#191A23] dark:text-white mt-1">
            How SkillBridge Verification Works
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            SkillBridge uses a simple, transparent process to prove what students can build: real projects, automated test checks, and teacher reviews.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Steps Visual Breakdown */}
      <div className="space-y-6">
        {/* Step 1 */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-3 border-[#191A23] p-6 sm:p-8 shadow-[5px_5px_0px_#191A23] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <span className="font-mono text-xs font-bold text-stone-500 uppercase block">STEP 1</span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Submit Your Project
              </h3>
              <span className="bg-[#191A23] text-[#FFD966] font-mono text-[10px] font-bold px-2.5 py-0.5 inline-block">
                STUDENT ACTION
              </span>
            </div>

            <div className="md:col-span-8 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-3 leading-relaxed">
              <p>
                Students sign in, select a skill challenge or work on their own project, and submit their GitHub repository link. No multiple-choice tests — just real, working code that solves a problem.
              </p>
              <div className="bg-white dark:bg-[#282B3A] p-3 border border-stone-300 dark:border-stone-700 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                &gt; Student connects: github.com/student/my-project
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 2 */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-[#EEF2FF] dark:bg-[#182040] border-3 border-[#3657F0] p-6 sm:p-8 shadow-[5px_5px_0px_#3657F0] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <span className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] uppercase block">STEP 2</span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Automated Code Testing
              </h3>
              <span className="bg-[#3657F0] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 inline-block">
                SYSTEM AUTOMATION
              </span>
            </div>

            <div className="md:col-span-8 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-3 leading-relaxed">
              <p>
                The platform runs automated unit tests to verify that the code compiles, passes assertion tests, meets test coverage targets, and adheres to clean coding standards.
              </p>
              <div className="bg-white dark:bg-[#212330] p-3 border border-[#3657F0] font-mono text-[11px] text-[#3657F0] dark:text-[#FFD966] font-bold">
                &gt; Test Results: 48/48 Assertions Passed &bull; 96.4% Coverage
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 3 */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-8 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase block">STEP 3</span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Teacher Review &amp; Badge
              </h3>
              <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2.5 py-0.5 inline-block">
                FACULTY ENDORSEMENT
              </span>
            </div>

            <div className="md:col-span-8 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-3 leading-relaxed">
              <p>
                A designated teacher reviews the student's architecture, evaluates code quality, and writes personal feedback. Once approved, a verified skills badge is added to the student's passport.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 border border-emerald-500 font-mono text-[11px] text-emerald-800 dark:text-emerald-300 font-bold">
                &gt; Teacher Dr. Elena Rostova: "Approved with Distinction — 5.0/5.0"
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 4 */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="bg-[#FFF8E7] dark:bg-[#282215] border-3 border-[#FF7138] p-6 sm:p-8 shadow-[5px_5px_0px_#FF7138] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF7138] uppercase block">STEP 4</span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Opportunities Connected
              </h3>
              <span className="bg-[#FF7138] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 inline-block">
                RECRUITER DISCOVERY
              </span>
            </div>

            <div className="md:col-span-8 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-3 leading-relaxed">
              <p>
                Recruiters search for verified candidates who have completed specific project types and tests. Recruiters send an access request, and students can choose to share their full profile and code.
              </p>
              <div className="bg-white dark:bg-[#1E202B] p-3 border border-[#FF7138] font-mono text-[11px] text-[#FF7138] font-bold">
                &gt; Strata Tech invited student to Senior Frontend Interview
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Try Student View CTA */}
      <div className="text-center pt-4">
        <MagneticButton
          onClick={() => switchRole('STUDENT')}
          className="px-8 py-3.5 bg-[#3657F0] hover:bg-[#2c47c7] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] cursor-pointer"
        >
          <span>See How Students Use It &rarr;</span>
        </MagneticButton>
      </div>
    </div>
  );
};
