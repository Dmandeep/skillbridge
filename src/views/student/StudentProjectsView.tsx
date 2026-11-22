import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { StatusPill } from '../../components/common/StatusPill';
import { StudentSubmitProjectModal } from './StudentSubmitProjectModal';
import { 
  FolderGit2, 
  Plus, 
  ExternalLink, 
  Terminal, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export const StudentProjectsView: React.FC = () => {
  const { submissions } = useData();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState<string | null>(submissions[0]?.id || null);

  const activeSub = submissions.find(s => s.id === selectedSub) || submissions[0];

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            PRACTICAL EVIDENCE REPOSITORY
          </span>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Submitted Engineering Projects
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
            Each repository undergoes static analysis, automated assertion benchmarking, and mentor review.
          </p>
        </div>

        <button
          onClick={() => setIsSubmitModalOpen(true)}
          className="px-5 py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-[#FFD966]" />
          <span>Submit New Project</span>
        </button>
      </div>

      {/* Projects List & Inspection Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: List of submissions */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold uppercase text-stone-500">
            Select Repository ({submissions.length})
          </span>

          {submissions.map(sub => {
            const isSelected = sub.id === activeSub?.id;
            return (
              <div
                key={sub.id}
                onClick={() => setSelectedSub(sub.id)}
                className={`p-4 border-2 border-[#191A23] cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-[#FFD966] text-[#191A23] shadow-[4px_4px_0px_#191A23] translate-x-1 font-bold' 
                    : 'bg-white dark:bg-[#212330] text-[#191A23] dark:text-white hover:bg-stone-50'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-display font-bold text-sm truncate">
                    {sub.title}
                  </span>
                  <StatusPill status={sub.status} size="sm" />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-stone-600 dark:text-stone-400">
                  <span>{new Date(sub.submittedAt).toLocaleDateString()}</span>
                  {sub.automatedTestResults && (
                    <span className="font-bold text-[#3657F0]">
                      {sub.automatedTestResults.codeCoveragePercent}% cov
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: Deep Evidence & Mentor Review Inspector */}
        {activeSub && (
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 space-y-5">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 border-b-2 border-[#191A23] dark:border-stone-700 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#191A23] text-[#FFD966] text-[10px] font-mono font-bold px-2 py-0.5">
                      EVIDENCE # {activeSub.id.toUpperCase()}
                    </span>
                    <StatusPill status={activeSub.status} />
                  </div>
                  <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                    {activeSub.title}
                  </h2>
                </div>

                <div className="flex gap-2 font-mono text-xs font-bold">
                  <a
                    href={activeSub.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] dark:border-stone-600 text-[#191A23] dark:text-white flex items-center gap-1.5 hover:bg-[#3657F0] hover:text-white transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>View Git Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {activeSub.liveUrl && (
                    <a
                      href={activeSub.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] flex items-center gap-1.5 hover:bg-[#FF7138] hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Deploy</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase text-stone-500 mb-1">
                  Architecture & Implementation Notes
                </h4>
                <p className="font-sans text-sm text-[#191A23] dark:text-stone-300 leading-relaxed bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-[#191A23]/30">
                  {activeSub.description}
                </p>
              </div>

              {/* Automated Evaluation Harness Breakdown */}
              {activeSub.automatedTestResults && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1.5">
                      <Terminal className="w-4 h-4" />
                      <span>Automated Test Suite Telemetry</span>
                    </h4>
                    <span className="font-mono text-[10px] text-stone-500">
                      Execution time: {activeSub.automatedTestResults.executionTimeMs}ms
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-xs">
                    <div className="bg-[#EEF2FF] dark:bg-[#1E2545] p-2 border border-[#3657F0]">
                      <span className="text-[10px] text-stone-500 block">TEST PASS RATE</span>
                      <strong className="text-base text-[#3657F0]">
                        {activeSub.automatedTestResults.testPassed}/{activeSub.automatedTestResults.testTotal}
                      </strong>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/40 p-2 border border-emerald-600">
                      <span className="text-[10px] text-stone-500 block">CODE COVERAGE</span>
                      <strong className="text-base text-emerald-600">
                        {activeSub.automatedTestResults.codeCoveragePercent}%
                      </strong>
                    </div>
                    <div className="bg-[#FFFBEB] dark:bg-[#332A15] p-2 border border-[#FFD966]">
                      <span className="text-[10px] text-stone-500 block">COMPLEXITY</span>
                      <strong className="text-base text-[#191A23] dark:text-[#FFD966]">
                        {activeSub.automatedTestResults.cyclomaticComplexity}
                      </strong>
                    </div>
                    <div className="bg-stone-100 dark:bg-stone-800 p-2 border border-stone-400">
                      <span className="text-[10px] text-stone-500 block">SECURITY FLAWS</span>
                      <strong className="text-base text-emerald-600">
                        {activeSub.automatedTestResults.securityFlawsDetected}
                      </strong>
                    </div>
                  </div>

                  <div className="bg-[#191A23] text-emerald-400 font-mono text-xs p-3 space-y-1 border border-stone-700">
                    {activeSub.automatedTestResults.automatedFeedback.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-stone-500">&gt;</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mentor Attestation Box */}
              {activeSub.mentorReview ? (
                <div className="bg-[#FFFBEB] dark:bg-[#282215] border-2 border-[#191A23] dark:border-[#FFD966] p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#191A23]/30 pb-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={activeSub.mentorReview.mentorAvatar}
                        alt={activeSub.mentorReview.mentorName}
                        className="w-8 h-8 rounded-full border border-[#191A23]"
                      />
                      <div>
                        <span className="font-display font-bold text-sm text-[#191A23] dark:text-white block">
                          {activeSub.mentorReview.mentorName}
                        </span>
                        <span className="font-mono text-[10px] text-stone-600 dark:text-stone-400">
                          Reviewed on {new Date(activeSub.mentorReview.reviewedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <span className="bg-[#3657F0] text-white font-mono text-xs font-bold px-2 py-0.5">
                      {activeSub.mentorReview.decision}
                    </span>
                  </div>

                  <p className="font-sans text-xs italic text-stone-800 dark:text-stone-200">
                    "{activeSub.mentorReview.detailedComments}"
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#191A23]/20 font-mono text-xs">
                    <div className="flex gap-4">
                      <span>Code Quality: <strong>{activeSub.mentorReview.codeQualityScore}/5</strong></span>
                      <span>System Design: <strong>{activeSub.mentorReview.systemDesignScore}/5</strong></span>
                      <span>Problem Solving: <strong>{activeSub.mentorReview.problemSolvingScore}/5</strong></span>
                    </div>
                    <span className="text-[10px] font-bold text-[#3657F0] dark:text-[#FFD966]">
                      {activeSub.mentorReview.verificationHash}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-dashed border-[#191A23]/40 p-4 text-center font-mono text-xs text-stone-600 dark:text-stone-400">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-[#FF7138]" />
                  <span>Evidence currently assigned to mentor queue for qualitative evaluation.</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <StudentSubmitProjectModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
};
