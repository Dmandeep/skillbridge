import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { StatCard } from '../../components/common/StatCard';
import { StatusPill } from '../../components/common/StatusPill';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  ClipboardCheck, 
  Users, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';

export const MentorDashboardView: React.FC = () => {
  const { currentUser, setActiveTab } = useAuthRole();
  const { submissions } = useData();

  const pendingSubmissions = submissions.filter(s => s.status === 'EVIDENCE_SUBMITTED');
  const verifiedSubmissions = submissions.filter(s => s.status === 'MENTOR_VERIFIED');

  return (
    <div className="space-y-6 select-none">
      {/* Mentor Welcome Banner */}
      <ScrollReveal direction="down">
        <div className="bg-[#FF7138] text-white border-4 border-[#191A23] shadow-[6px_6px_0px_#191A23] p-6 sm:p-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#191A23] bg-[#FFD966] px-2.5 py-0.5 border border-[#191A23]">
              FACULTY VERIFICATION DESK
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Welcome, {currentUser?.name}
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
              {currentUser?.title} at <strong>{currentUser?.organizationName}</strong>. 
              You hold final attestation authority over student practical competence submissions.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <MagneticButton
                onClick={() => setActiveTab('submission-review')}
                className="px-5 py-2.5 bg-[#191A23] text-[#FFD966] border-2 border-white text-xs font-bold tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <ClipboardCheck className="w-4 h-4 text-[#FF7138]" />
                <span>Review Pending Submissions ({pendingSubmissions.length})</span>
              </MagneticButton>
              <MagneticButton
                onClick={() => setActiveTab('assigned-students')}
                className="px-5 py-2.5 bg-white text-[#191A23] border-2 border-[#191A23] text-xs font-bold tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#3657F0]" />
                <span>Mentee Cohort</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Metric Cards */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Pending Queue"
            value={pendingSubmissions.length}
            subtext="Awaiting rubric evaluation"
            icon={<Clock className="w-5 h-5 text-[#FF7138]" />}
            color="orange"
            badge="ACTION REQ"
          />
          <StatCard
            label="Attested Verifications"
            value={verifiedSubmissions.length}
            subtext="Signed & cryptographic seals issued"
            icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            color="yellow"
            badge="SEALED"
          />
          <StatCard
            label="Assigned Students"
            value="18"
            subtext="Across Systems & Architecture tracks"
            icon={<Users className="w-5 h-5 text-[#3657F0]" />}
            color="cobalt"
          />
          <StatCard
            label="Turnaround Velocity"
            value="18.4 hrs"
            subtext="Average evaluation cycle time"
            icon={<ShieldCheck className="w-5 h-5 text-purple-600" />}
            color="neutral"
          />
        </div>
      </ScrollReveal>

      {/* Actionable Submissions Queue */}
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 space-y-4">
        <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">ACTIONABLE QUEUE</span>
            <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Submissions Requiring Faculty Review
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('submission-review')}
            className="text-xs font-mono font-bold uppercase text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>Open Interactive Review Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {pendingSubmissions.map(sub => (
            <div
              key={sub.id}
              className="bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] dark:border-stone-600 p-4 flex flex-wrap items-center justify-between gap-4 transition-all hover:translate-x-1"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base text-[#191A23] dark:text-white">
                    {sub.title}
                  </span>
                  <StatusPill status={sub.status} size="sm" />
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-stone-600 dark:text-stone-400">
                  <span>Student: <strong className="text-[#191A23] dark:text-white">{sub.studentName}</strong></span>
                  <span>•</span>
                  <span>Automated Pass: <strong className="text-emerald-600">{sub.automatedTestResults?.codeCoveragePercent}%</strong></span>
                  <span>•</span>
                  <span>{new Date(sub.submittedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('submission-review')}
                className="px-4 py-2 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ClipboardCheck className="w-4 h-4" />
                <span>Evaluate &amp; Score</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
