import React from 'react';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  Terminal, 
  KeyRound, 
  QrCode, 
  ScrollText, 
  Sliders 
} from 'lucide-react';

export const FeaturesView: React.FC = () => {
  return (
    <div className="space-y-12 select-none max-w-6xl mx-auto pb-12">
      <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-8">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
          PLATFORM CAPABILITIES
        </span>
        <h1 className="font-display font-black text-4xl text-[#191A23] dark:text-white mt-1">
          Complete Feature Specification Across All 6 Roles
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
          SkillBridge bridges EdTech and HRTech through rigorous evidence capture, privacy preservation, and role-partitioned workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Features */}
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-3">
          <div className="flex items-center gap-2 border-b-2 border-[#191A23] pb-2">
            <GraduationCap className="w-5 h-5 text-[#3657F0]" />
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Student &amp; Candidate Suite
            </h3>
          </div>
          <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
            <li>&bull; <strong>Independent Registration:</strong> Sign up with Google OAuth and submit university affiliation request.</li>
            <li>&bull; <strong>3-Tier Skill Inventory:</strong> Track competencies from Self-Declared &rarr; Evidence Submitted &rarr; Mentor Verified.</li>
            <li>&bull; <strong>Verification Passport:</strong> Export verifiable credential JSON and shareable QR code with root hash proof.</li>
            <li>&bull; <strong>Recruiter Permission Inbox:</strong> Total data sovereignty. Approve, deny, or revoke recruiter access to private code.</li>
          </ul>
        </div>

        {/* Mentor Features */}
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-3">
          <div className="flex items-center gap-2 border-b-2 border-[#191A23] pb-2">
            <BookOpenCheck className="w-5 h-5 text-[#FF7138]" />
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Faculty &amp; Mentor Console
            </h3>
          </div>
          <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
            <li>&bull; <strong>Split-Screen Review Desk:</strong> Inspect candidate git commits side-by-side with automated runner telemetry.</li>
            <li>&bull; <strong>Standardized Rubric Scoring:</strong> Grade Code Quality, System Design, and Problem Solving (1-5 scales).</li>
            <li>&bull; <strong>Cryptographic Decision Minting:</strong> Mint immutable verification stamps with SHA-256 signatures.</li>
            <li>&bull; <strong>Mentee Cohort Velocity:</strong> Longitudinal tracking of student progress from beginner to systems master.</li>
          </ul>
        </div>

        {/* Institution Features */}
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-3">
          <div className="flex items-center gap-2 border-b-2 border-[#191A23] pb-2">
            <Building2 className="w-5 h-5 text-[#FFD966]" />
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              University Administration Suite
            </h3>
          </div>
          <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
            <li>&bull; <strong>Membership Approval Workflow:</strong> Dean review and 1-click admission for registered students.</li>
            <li>&bull; <strong>Faculty Workload Distribution:</strong> Monitor mentor review queues and turnaround velocity.</li>
            <li>&bull; <strong>Curriculum Track Benchmarks:</strong> Standardize capstone assertion test suites for departments.</li>
            <li>&bull; <strong>Placement Analytics:</strong> Quantify candidate recruiter conversion and employer satisfaction index.</li>
          </ul>
        </div>

        {/* Recruiter Features */}
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-3">
          <div className="flex items-center gap-2 border-b-2 border-[#191A23] pb-2">
            <Briefcase className="w-5 h-5 text-emerald-600" />
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Technical Recruiter Radar
            </h3>
          </div>
          <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2 leading-relaxed">
            <li>&bull; <strong>Faceted Competency Search:</strong> Filter talent by test pass rates, institutions, and verified skills.</li>
            <li>&bull; <strong>Gated Dossier Access Request:</strong> Request candidate permission to inspect private code repositories.</li>
            <li>&bull; <strong>Zero Hallucination Proof:</strong> Directly inspect automated test logs, benchmark graphs, and faculty notes.</li>
            <li>&bull; <strong>Saved Talent Shortlists:</strong> Bookmark high-signal candidates and track active authorization windows.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
