import React from 'react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
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
  Sliders,
  Sparkles 
} from 'lucide-react';

export const FeaturesView: React.FC = () => {
  return (
    <div className="space-y-12 select-none max-w-6xl mx-auto pb-16">
      {/* Header Banner */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-8">
          <div className="inline-flex items-center gap-2 bg-[#3657F0] text-white px-3 py-1 font-mono text-xs font-bold uppercase border border-[#191A23] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
            <span>PLATFORM CAPABILITIES</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#191A23] dark:text-white mt-1">
            Complete Feature Specification Across All 6 Roles
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-2 max-w-2xl leading-relaxed">
            SkillBridge bridges EdTech and HRTech through rigorous evidence capture, privacy preservation, and role-partitioned workflows.
          </p>
        </div>
      </ScrollReveal>

      {/* 6 Role Feature Grid with Stagger & Tilt */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-[#3657F0] text-white border border-[#191A23]">
                  <GraduationCap className="w-5 h-5 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  Student &amp; Candidate Suite
                </h3>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Independent Registration:</strong> Sign up with Google OAuth and submit university affiliation request.</li>
                <li>&bull; <strong>3-Tier Skill Inventory:</strong> Track competencies from Self-Declared &rarr; Evidence Submitted &rarr; Mentor Verified.</li>
                <li>&bull; <strong>Verification Passport:</strong> Export verifiable credential JSON and shareable QR code with root hash proof.</li>
                <li>&bull; <strong>Recruiter Permission Inbox:</strong> Total data sovereignty. Approve, deny, or revoke recruiter access to private code.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* Mentor Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-[#FF7138] text-white border border-[#191A23]">
                  <BookOpenCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  Faculty &amp; Mentor Console
                </h3>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Split-Screen Review Desk:</strong> Inspect candidate git commits side-by-side with automated runner telemetry.</li>
                <li>&bull; <strong>Standardized Rubric Scoring:</strong> Grade Code Quality, System Design, and Problem Solving (1-5 scales).</li>
                <li>&bull; <strong>Cryptographic Decision Minting:</strong> Mint immutable verification stamps with SHA-256 signatures.</li>
                <li>&bull; <strong>Mentee Cohort Velocity:</strong> Longitudinal tracking of student progress from beginner to systems master.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* Org Admin Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-[#FFD966] text-[#191A23] border border-[#191A23]">
                  <Building2 className="w-5 h-5 text-[#3657F0]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  Institution &amp; University Portal
                </h3>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Affiliation Request Gate:</strong> Dean review and one-click enrollment of independent student signups.</li>
                <li>&bull; <strong>Faculty Evaluator Roster:</strong> Manage accredited mentor accounts and department assignments.</li>
                <li>&bull; <strong>Curriculum Alignment:</strong> Build institution-specific practical challenges linked to accredited courses.</li>
                <li>&bull; <strong>Cohort Outcome Analytics:</strong> Institutional placement conversion and competency velocity reporting.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* Recruiter Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-emerald-600 text-white border border-[#191A23]">
                  <Briefcase className="w-5 h-5 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  Recruiter &amp; Talent Pipeline
                </h3>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Zero-Keyword Search:</strong> Discover candidates filtered by verified test coverage percentages.</li>
                <li>&bull; <strong>Consent-Gated Unlocks:</strong> Request candidate permission to inspect raw source code and test logs.</li>
                <li>&bull; <strong>Candidate Shortlisting:</strong> Save high-signal engineering profiles to dedicated recruiter pipelines.</li>
                <li>&bull; <strong>Reverse Hiring Direct Connect:</strong> Reach out directly with guaranteed verified competency profiles.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* Super Admin Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-[#191A23] text-white border border-[#191A23]">
                  <ShieldCheck className="w-5 h-5 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  Super &amp; Protocol Administration
                </h3>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Administrator Appointments:</strong> Elevate operational admins with granular role-based privileges.</li>
                <li>&bull; <strong>University Accreditation:</strong> Validate and onboard new academic institutional partners.</li>
                <li>&bull; <strong>Tamper-Evident Audit Ledger:</strong> Real-time streaming log of verification and security events.</li>
                <li>&bull; <strong>gVisor Sandbox Governance:</strong> Global policy configuration for container execution limits and timeouts.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* Core Verification Engine */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-[#EEF2FF] dark:bg-[#1A2238] border-3 border-[#3657F0] p-6 shadow-[5px_5px_0px_#3657F0] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#3657F0] pb-3">
                <div className="p-2 bg-[#3657F0] text-white border border-[#191A23]">
                  <Terminal className="w-5 h-5 text-[#FFD966]" />
                </div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  Automated Sandbox Harness
                </h3>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>gVisor Container Isolation:</strong> Secure sandboxed evaluation preventing arbitrary shell escapes.</li>
                <li>&bull; <strong>Cyclomatic Complexity Benchmarks:</strong> Static AST analysis scoring code maintainability and depth.</li>
                <li>&bull; <strong>Memory Leak Profiling:</strong> Valgrind and leak sanitizers benchmark dynamic memory footprint.</li>
                <li>&bull; <strong>Anti-Plagiarism AST Fingerprint:</strong> Detects cloned repositories and AI prompt boilerplate.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};
