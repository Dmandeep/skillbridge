import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { StatusPill } from '../../components/common/StatusPill';
import { StudentSubmitProjectModal } from './StudentSubmitProjectModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  FolderGit2, 
  Plus, 
  ExternalLink, 
  Terminal, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  Clock,
  Sparkles 
} from 'lucide-react';

export const StudentProjectsView: React.FC = () => {
  const { submissions } = useData();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState<string | null>(submissions[0]?.id || null);

  const activeSub = submissions.find(s => s.id === selectedSub) || submissions[0];

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              PRACTICAL EVIDENCE REPOSITORY
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
              Submitted Engineering Projects
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
              Each repository undergoes static analysis, automated assertion benchmarking, and mentor review.
            </p>
          </div>

          <MagneticButton
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-5 py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#FFD966]" />
            <span>Submit New Project</span>
          </MagneticButton>
        </div>
      </ScrollReveal>

      {/* Projects List & Inspection Split View */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: List of submissions */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase text-stone-500">
              Select Repository ({submissions.length})
            </span>

            <StaggerContainer staggerDelay={0.06} className="space-y-3">
              {submissions.map(sub => {
                const isSelected = sub.id === activeSub?.id;
                return (
                  <StaggerItem key={sub.id}>
                    <div
                      onClick={() => setSelectedSub(sub.id)}
                      className={`p-4 border-2 border-[#191A23] dark:border-stone-600 cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#FFD966] text-[#191A23] shadow-[4px_4px_0px_#191A23] translate-x-1 font-bold' 
                          : 'bg-white dark:bg-[#212330] text-[#191A23] dark:text-white hover:bg-stone-50 dark:hover:bg-[#282B3A]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] uppercase font-bold text-stone-600 dark:text-stone-400">
                          {sub.submittedAt}
                        </span>
                        <StatusPill status={sub.status} />
                      </div>

                      <strong className="font-display font-black text-base block mb-1">
                        {sub.title}
                      </strong>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {sub.skillTags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[9px] font-mono px-1.5 py-0.2 bg-black/10 dark:bg-white/10 border border-black/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right 2 columns: Active Submission Detail View */}
          <div className="lg:col-span-2">
            {activeSub ? (
              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-[#191A23] dark:border-stone-700 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
                      EVIDENCE DOSSIER
                    </span>
                    <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white mt-0.5">
                      {activeSub.title}
                    </h2>
                    <span className="font-mono text-xs text-stone-500">
                      ID: {activeSub.id} &bull; Challenge: {activeSub.challengeTitle || 'Open-Ended Artifact'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <StatusPill status={activeSub.status} />
                    <a
                      href={activeSub.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-[#191A23] text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_#FFD966] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-stone-500 block mb-1">
                    System Architecture &amp; Rationale:
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-stone-800 dark:text-stone-200 bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border border-stone-300 dark:border-stone-700 leading-relaxed">
                    {activeSub.description}
                  </p>
                </div>

                {/* Automated Evaluation Section */}
                <div className="border-2 border-[#191A23] p-4 bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-700 pb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span className="font-bold text-white uppercase text-[11px]">
                        Automated Runner Telemetry (gVisor Isolated)
                      </span>
                    </div>
                    <span className="bg-emerald-500 text-black px-2 py-0.5 font-bold text-[10px]">
                      SUITE PASSED
                    </span>
                  </div>

                  {activeSub.automatedTestResults ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="bg-stone-800 p-2 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block">Assertions</span>
                        <strong className="text-emerald-400 text-sm">
                          {activeSub.automatedTestResults.passedAssertions} / {activeSub.automatedTestResults.totalAssertions}
                        </strong>
                      </div>
                      <div className="bg-stone-800 p-2 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block">Code Coverage</span>
                        <strong className="text-[#FFD966] text-sm">
                          {activeSub.automatedTestResults.coveragePercentage}%
                        </strong>
                      </div>
                      <div className="bg-stone-800 p-2 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block">AST Complexity</span>
                        <strong className="text-white text-sm">
                          {activeSub.automatedTestResults.cyclomaticComplexity} (Low)
                        </strong>
                      </div>
                      <div className="bg-stone-800 p-2 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block">Execution Time</span>
                        <strong className="text-white text-sm">
                          {activeSub.automatedTestResults.executionDurationMs}ms
                        </strong>
                      </div>
                    </div>
                  ) : (
                    <div className="text-stone-400 text-center py-2">
                      Automated test harness queued...
                    </div>
                  )}

                  <div className="text-[10px] text-stone-400 pt-1">
                    Runner container: gvisor-sandbox-8f92a &bull; Memory limit: 512MB &bull; Net isolate: TRUE
                  </div>
                </div>

                {/* Mentor Feedback Section if available */}
                {activeSub.mentorFeedback && (
                  <div className="border-2 border-[#FF7138] p-4 bg-[#FFF8F5] dark:bg-[#2A1E20] space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#FF7138]" />
                        <span className="font-mono text-xs font-bold text-[#FF7138] uppercase">
                          Faculty Mentor Evaluation
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-stone-500">
                        Reviewer: {activeSub.mentorFeedback.mentorName}
                      </span>
                    </div>

                    <p className="font-sans text-xs italic text-stone-700 dark:text-stone-300 leading-relaxed">
                      "{activeSub.mentorFeedback.comments}"
                    </p>

                    <div className="flex items-center gap-4 font-mono text-[11px] pt-1 border-t border-red-200 dark:border-stone-700">
                      <span>Rubric Score: <strong>{activeSub.mentorFeedback.overallScore}/5.0</strong></span>
                      <span className="text-emerald-600 font-bold">STATUS: {activeSub.status}</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-12 text-center font-mono text-xs text-stone-500">
                No repository selected.
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Submit Modal */}
      <StudentSubmitProjectModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
};
