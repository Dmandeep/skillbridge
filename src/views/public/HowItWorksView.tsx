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
  KeyRound, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Lock,
  Layers
} from 'lucide-react';

export const HowItWorksView: React.FC = () => {
  const { setActiveTab } = useAuthRole();

  return (
    <div className="space-y-12 select-none max-w-5xl mx-auto pb-16">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-8 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#3657F0] text-white px-3 py-1 font-mono text-xs font-bold uppercase border border-[#191A23]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
            <span>THE PROTOCOL SPECIFICATION</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#191A23] dark:text-white mt-1">
            How SkillBridge Practical Verification Works
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            SkillBridge does not present an arbitrary AI talent score as objective proof of ability. Instead, it guides candidates through an auditable, multi-stage evidentiary chain.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Steps Visual Breakdown */}
      <div className="space-y-8">
        {/* Tier 1 */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-3 border-[#191A23] p-6 sm:p-8 shadow-[5px_5px_0px_#191A23] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <span className="font-mono text-xs font-bold text-stone-500 uppercase block">PHASE 1</span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Self-Declaration &amp; Repository Submission
              </h3>
              <span className="bg-[#191A23] text-stone-300 font-mono text-[10px] px-2 py-0.5 inline-block">
                TIER 1 (ZERO WEIGHT)
              </span>
            </div>

            <div className="md:col-span-8 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-3 leading-relaxed">
              <p>
                Students register independently through Google authentication and request affiliation with their accredited university. Candidates claim technical competencies and link public or private Git repositories (GitHub/GitLab) implementing challenging engineering specifications.
              </p>
              <div className="bg-white dark:bg-[#282B3A] p-3 border border-stone-300 dark:border-stone-700 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                Input: Git commit hash, challenge ID, claimed skill tags, architectural rationale.
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tier 2 */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-[#EEF2FF] dark:bg-[#182040] border-3 border-[#3657F0] p-6 sm:p-8 shadow-[5px_5px_0px_#3657F0] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <span className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] uppercase block">PHASE 2</span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Automated Sandbox Assertion Runner
              </h3>
              <span className="bg-[#3657F0] text-white font-mono text-[10px] px-2 py-0.5 inline-block">
                TIER 2 (REPRODUCIBLE CODE EVIDENCE)
              </span>
            </div>

            <div className="md:col-span-8 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-3 leading-relaxed">
              <p>
                An isolated container runner pulls the repository and executes automated test suites. It validates assertions, cyclomatic complexity, code coverage thresholds, and security anti-patterns without human intervention.
              </p>
              <div className="bg-white dark:bg-[#1E2545] p-3 border border-[#3657F0]/40 font-mono text-[11px] text-[#3657F0] dark:text-[#FFD966]">
                Output: Test assertion ratio, coverage report (e.g. 96%), AST structure, execution logs.
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tier 3 */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="bg-[#FFFBEB] dark:bg-[#2E2818] border-3 border-[#FF7138] p-6 sm:p-8 shadow-[5px_5px_0px_#FF7138] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF7138] uppercase block">PHASE 3</span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Faculty Review &amp; Cryptographic Stamp
              </h3>
              <span className="bg-[#FF7138] text-white font-mono text-[10px] px-2 py-0.5 inline-block">
                TIER 3 (ATTESTED &amp; SEALED)
              </span>
            </div>

            <div className="md:col-span-8 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-3 leading-relaxed">
              <p>
                Accredited university faculty review the submission using structured rubrics (Code Quality, System Design, Problem Solving). The mentor signs the evaluation with a cryptographic verification hash, stamping the student's passport.
              </p>
              <div className="bg-white dark:bg-[#382E1E] p-3 border border-[#FF7138]/40 font-mono text-[11px] text-[#FF7138] dark:text-[#FFD966]">
                Result: Immutable SHA-256 stamp, rubric scorecard (1-5), permanent passport badge.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Recruiter Access Protocol Callout */}
      <ScrollReveal direction="up" delay={0.4}>
        <div className="bg-[#191A23] text-white border-4 border-[#191A23] shadow-[8px_8px_0px_#FFD966] p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#FFD966] font-mono text-xs font-bold uppercase">
            <Lock className="w-4 h-4 text-[#FF7138]" />
            <span>HOW RECRUITERS DISCOVER TALENT WITH ZERO RESUME INFLATION</span>
          </div>
          <h3 className="font-display font-black text-2xl text-white">
            Reverse Talent Discovery via Verifiable Evidence
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            Recruiters cannot browse private student code without consent. Instead, recruiters search by verified skills, minimum test coverage, and rubric ratings. Recruiters send a formal access request, and only upon student authorization is the full engineering dossier unlocked.
          </p>
          <div className="pt-2">
            <MagneticButton
              onClick={() => setActiveTab('register')}
              className="px-6 py-3 bg-[#FF7138] text-white border-2 border-white font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#FFD966] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get Started as a Candidate</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
