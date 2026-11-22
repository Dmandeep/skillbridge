import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { StatCard } from '../../components/common/StatCard';
import { StatusPill } from '../../components/common/StatusPill';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { StudentSubmitProjectModal } from './StudentSubmitProjectModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  Award, 
  FolderGit2, 
  KeyRound, 
  ShieldCheck, 
  ArrowUpRight, 
  Terminal, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const StudentDashboardView: React.FC = () => {
  const { currentUser, setActiveTab } = useAuthRole();
  const { skills, submissions, recruiterRequests } = useData();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const verifiedSkills = skills.filter(s => s.verificationStatus === 'MENTOR_VERIFIED').length;
  const pendingEvidence = skills.filter(s => s.verificationStatus === 'EVIDENCE_SUBMITTED').length;
  const pendingRecruiterRequests = recruiterRequests.filter(r => r.status === 'PENDING').length;

  return (
    <div className="space-y-8 select-none">
      {/* Top Banner / Welcome with Editorial Maximalism */}
      <ScrollReveal direction="down">
        <div className="bg-[#FFD966] text-[#191A23] border-4 border-[#191A23] shadow-[6px_6px_0px_#191A23] p-6 sm:p-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-[#3657F0] text-white px-2.5 py-0.5 font-mono text-xs font-bold border border-[#191A23]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STUDENT DASHBOARD</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-[#191A23] leading-none">
              Welcome back, {currentUser?.name.split(' ')[0]}
            </h1>
            <p className="font-sans text-sm text-[#191A23]/80 leading-relaxed font-medium">
              Enrolled at <strong className="text-[#191A23] underline decoration-[#FF7138] decoration-2">{currentUser?.organizationName}</strong>. 
              Build projects, pass automated tests, and earn teacher feedback to prove your coding skills.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <MagneticButton
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-5 py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] text-xs font-bold tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-[#FFD966]" />
                <span>Submit New Project</span>
              </MagneticButton>
              <MagneticButton
                onClick={() => setActiveTab('passport')}
                className="px-5 py-2.5 bg-white text-[#191A23] border-2 border-[#191A23] text-xs font-bold tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#3657F0]" />
                <span>View Skills Passport</span>
              </MagneticButton>
            </div>
          </div>

          {/* Decorative Stamp watermark */}
          <div className="hidden lg:block absolute -right-2 -bottom-4 opacity-95 pointer-events-none">
            <VerificationStamp 
              mentorName="Dr. Elena Rostova" 
              verificationDate="2026-11-04" 
              hash="SHA256: 992b104f..." 
              score={96}
              rotation={3}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Metric Cards Row */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Mentor Verified Skills"
            value={verifiedSkills}
            subtext="Cryptographically stamped credentials"
            icon={<ShieldCheck className="w-5 h-5 text-[#3657F0]" />}
            color="cobalt"
            badge="TIER 3"
          />
          <StatCard
            label="Evidence In Review"
            value={pendingEvidence}
            subtext="Passed automated test suite"
            icon={<Award className="w-5 h-5 text-[#FF7138]" />}
            color="orange"
            badge="TIER 2"
          />
          <StatCard
            label="Recruiter Requests"
            value={pendingRecruiterRequests}
            subtext="Companies awaiting dossier permission"
            icon={<KeyRound className="w-5 h-5 text-emerald-600" />}
            color="yellow"
            badge={pendingRecruiterRequests > 0 ? "ACTION REQ" : "CLEAR"}
          />
          <StatCard
            label="Avg Test Coverage"
            value="95.8%"
            subtext="Across all repository commits"
            icon={<Terminal className="w-5 h-5 text-[#3657F0]" />}
            color="neutral"
            badge="AUTOMATED"
          />
        </div>
      </ScrollReveal>

      {/* Main Grid: Projects in Flight & Verification Passport Teaser */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Submissions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-2">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">AUDIT PIPELINE</span>
              <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white">Recent Project Submissions</h2>
            </div>
            <button 
              onClick={() => setActiveTab('projects')}
              className="text-xs font-mono font-bold uppercase text-[#3657F0] dark:text-[#FFD966] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {submissions.slice(0, 3).map((sub) => (
              <div 
                key={sub.id}
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[3px_3px_0px_#191A23] dark:shadow-[3px_3px_0px_#FFD966] transition-all hover:translate-x-1"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-base text-[#191A23] dark:text-white">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-mono mt-0.5">
                      Submitted on {new Date(sub.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <StatusPill status={sub.status} />
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 font-sans line-clamp-2 mb-3">
                  {sub.description}
                </p>

                {/* Automated test metrics pill bar */}
                {sub.automatedTestResults && (
                  <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-2.5 border border-[#191A23]/30 dark:border-stone-600 mb-3 flex flex-wrap items-center justify-between text-[11px] font-mono">
                    <span className="text-[#3657F0] font-bold">
                      ✓ {sub.automatedTestResults.testPassed}/{sub.automatedTestResults.testTotal} Tests Passing
                    </span>
                    <span>Coverage: <strong className="text-emerald-600">{sub.automatedTestResults.codeCoveragePercent}%</strong></span>
                    <span>Complexity: <strong>{sub.automatedTestResults.cyclomaticComplexity}</strong></span>
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-stone-200 dark:border-stone-700 pt-2 text-xs font-mono">
                  <div className="flex flex-wrap gap-1">
                    {sub.skillTags.map((tag, i) => (
                      <span key={i} className="bg-stone-200 dark:bg-stone-700 text-[#191A23] dark:text-stone-200 text-[10px] px-1.5 py-0.5 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveTab('assessment-results')}
                    className="text-[#3657F0] dark:text-[#FFD966] font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>View Telemetry</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Passport Snapshot & Active Recruiter Inquiries */}
        <div className="space-y-6">
          {/* Passport Teaser Card */}
          <TiltCard tiltAmount={6}>
            <div className="bg-[#3657F0] text-white border-2 border-[#191A23] p-5 shadow-[4px_4px_0px_#191A23]">
              <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFD966]">
                  OFFICIAL VERIFIABLE DOSSIER
                </span>
                <ShieldCheck className="w-4 h-4 text-[#FFD966]" />
              </div>

              <h3 className="font-display font-black text-xl mb-1">
                SkillBridge Passport #SB-9821
              </h3>
              <p className="text-xs text-white/80 font-sans mb-4">
                Cryptographically signed verification passport. Shareable with accredited recruiters with privacy-preserving access controls.
              </p>

              <div className="bg-white/10 p-3 border border-white/20 font-mono text-xs space-y-1 mb-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Attesting Mentor:</span>
                  <span className="font-bold text-[#FFD966]">Dr. E. Rostova</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Proofs:</span>
                  <span className="font-bold">4 Repositories</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Root Hash:</span>
                  <span className="font-bold truncate max-w-[120px]">0x7F8B2C4E91A...</span>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('passport')}
                className="w-full py-2 bg-[#FFD966] text-[#191A23] font-mono font-bold text-xs uppercase tracking-wider border border-[#191A23] shadow-[2px_2px_0px_#191A23] hover:bg-white transition-colors cursor-pointer"
              >
                Open Full Passport &amp; QR
              </button>
            </div>
          </TiltCard>

          {/* Recruiter Inquiries Alert */}
          <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 shadow-[3px_3px_0px_#191A23] dark:shadow-[3px_3px_0px_#FFD966]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">
                RECRUITER ACCESS INBOX
              </span>
              <span className="bg-[#FF7138] text-white text-[10px] font-mono font-bold px-1.5 py-0.5">
                {pendingRecruiterRequests} Pending
              </span>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mb-3">
              Recruiters cannot view private code execution logs or test evidence without your explicit approval.
            </p>

            <button
              onClick={() => setActiveTab('recruiter-permissions')}
              className="w-full py-2 bg-[#F8F3E9] dark:bg-[#282B3A] text-[#191A23] dark:text-white border-2 border-[#191A23] dark:border-stone-600 font-mono text-xs font-bold uppercase hover:bg-[#3657F0] hover:text-white transition-colors cursor-pointer"
            >
              Manage Access Permissions
            </button>
          </div>
        </div>
      </div>

      {/* Submission Modal */}
      <StudentSubmitProjectModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
};
