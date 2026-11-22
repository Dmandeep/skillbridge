import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { 
  FileCode, 
  Terminal, 
  ShieldCheck, 
  KeyRound, 
  CheckCircle2, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

export const HowItWorksView: React.FC = () => {
  const { setActiveTab } = useAuthRole();

  return (
    <div className="space-y-12 select-none max-w-5xl mx-auto pb-12">
      <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-8 space-y-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
          THE PROTOCOL SPECIFICATION
        </span>
        <h1 className="font-display font-black text-4xl text-[#191A23] dark:text-white">
          How SkillBridge Practical Verification Works
        </h1>
        <p className="font-sans text-sm text-stone-600 dark:text-stone-300 max-w-2xl">
          SkillBridge does not present an arbitrary AI talent score as objective proof of ability. Instead, it guides candidates through an auditable, multi-stage evidentiary chain.
        </p>
      </div>

      {/* 3 Steps Visual Breakdown */}
      <div className="space-y-8">
        {/* Tier 1 */}
        <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-3 border-[#191A23] p-6 shadow-[5px_5px_0px_#191A23] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-stone-500 uppercase block">PHASE 1</span>
            <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
              Self-Declaration &amp; Repository Submission
            </h3>
            <span className="bg-[#191A23] text-stone-300 font-mono text-[10px] px-2 py-0.5 mt-2 inline-block">
              TIER 1 (ZERO WEIGHT)
            </span>
          </div>

          <div className="md:col-span-9 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
            <p>
              Students register independently through Google authentication and request affiliation with their accredited university. Candidates claim technical competencies and link public or private Git repositories (GitHub/GitLab) implementing challenging engineering specifications.
            </p>
            <div className="bg-white dark:bg-[#282B3A] p-3 border border-stone-300 font-mono text-[11px] text-stone-600 dark:text-stone-400">
              Input: Git commit hash, challenge ID, claimed skill tags, architectural rationale.
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="bg-[#EEF2FF] dark:bg-[#182040] border-3 border-[#3657F0] p-6 shadow-[5px_5px_0px_#191A23] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] uppercase block">PHASE 2</span>
            <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
              Automated Sandbox Assertion Runner
            </h3>
            <span className="bg-[#3657F0] text-white font-mono text-[10px] px-2 py-0.5 mt-2 inline-block">
              TIER 2 (EVIDENCE PROVEN)
            </span>
          </div>

          <div className="md:col-span-9 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
            <p>
              Submissions spin up an isolated gVisor container sandbox. Automated suites execute static AST analysis for cyclomatic complexity and security flaws, followed by stress test harnesses with heavy concurrency contention.
            </p>
            <div className="bg-[#191A23] text-emerald-400 p-3 border border-stone-700 font-mono text-[11px]">
              Output: Code coverage %, p99 execution latency, ThreadSanitizer data-race log, deterministic pass/fail assertion report.
            </div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="bg-[#FFFBEB] dark:bg-[#282215] border-3 border-[#FF7138] p-6 shadow-[5px_5px_0px_#191A23] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-[#FF7138] uppercase block">PHASE 3</span>
            <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
              Human-in-the-Loop Faculty Attestation
            </h3>
            <span className="bg-[#FF7138] text-white font-mono text-[10px] px-2 py-0.5 mt-2 inline-block">
              TIER 3 (MENTOR VERIFIED)
            </span>
          </div>

          <div className="md:col-span-9 font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
            <p>
              Automated tests prove the code runs; accredited faculty verify the engineering craft. Assigned professors evaluate code quality, system design trade-offs, and invariant defense on a standardized rubric. The verified decision mints an immutable cryptographic stamp to the student's passport.
            </p>
            <div className="bg-white dark:bg-[#212330] p-3 border border-[#191A23] flex items-center justify-between font-mono text-xs">
              <span>Cryptographic Output: SHA-256 Merkle root hash + Attesting Mentor Signature</span>
              <span className="font-bold text-[#3657F0]">0x7F8B2C4E91A...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('register')}
          className="px-8 py-3.5 bg-[#FF7138] text-white font-mono text-xs font-black uppercase tracking-wider border-2 border-[#191A23] shadow-[4px_4px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-flex items-center gap-2"
        >
          <span>Start Practical Verification</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
