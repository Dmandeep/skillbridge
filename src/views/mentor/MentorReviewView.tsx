import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { StatusPill } from '../../components/common/StatusPill';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { 
  ClipboardCheck, 
  Terminal, 
  FolderGit2, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Star, 
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MentorReviewView: React.FC = () => {
  const { submissions, mentorDecideSubmission } = useData();
  const pendingSubmissions = submissions.filter(s => s.status === 'EVIDENCE_SUBMITTED');
  const [selectedId, setSelectedId] = useState<string>(pendingSubmissions[0]?.id || submissions[0]?.id || '');

  const activeSub = submissions.find(s => s.id === selectedId) || submissions[0];

  // Rubric state
  const [qualityScore, setQualityScore] = useState<number>(5);
  const [designScore, setDesignScore] = useState<number>(5);
  const [problemSolvingScore, setProblemSolvingScore] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>(
    'Exemplary concurrency control. The memory barriers and write-ahead log flush mechanisms exhibit senior engineering intuition. Cleanly decoupled architecture.'
  );
  const [isDeciding, setIsDeciding] = useState(false);

  const handleDecision = (decision: 'APPROVED_WITH_DISTINCTION' | 'VERIFIED' | 'NEEDS_REVISION' | 'REJECTED') => {
    if (!activeSub) return;
    setIsDeciding(true);

    setTimeout(() => {
      mentorDecideSubmission(activeSub.id, decision, feedback, {
        quality: qualityScore,
        design: designScore,
        problemSolving: problemSolvingScore,
      });

      setIsDeciding(false);

      if (decision === 'APPROVED_WITH_DISTINCTION' || decision === 'VERIFIED') {
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch (e) {
          console.error(e);
        }
      }
    }, 600);
  };

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            FACULTY VERIFICATION CONSOLE
          </span>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Student Submission Review Workspace
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
            Inspect automated telemetry evidence, evaluate against standardized rubrics, and issue immutable verification decisions.
          </p>
        </div>

        {/* Submission Selector */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase text-stone-500">Queue:</span>
          <select
            value={selectedId}
            onChange={e => setSelectedId(e.target.value)}
            className="bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] px-3 py-1.5 font-mono text-xs font-bold text-[#191A23] dark:text-white"
          >
            {submissions.map(s => (
              <option key={s.id} value={s.id}>
                {s.title} ({s.studentName} — {s.status})
              </option>
            ))}
          </select>
        </div>
      </div>
      </ScrollReveal>

      {activeSub ? (
        <ScrollReveal direction="up" delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Project & Automated Evidence Inspector */}
          <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] p-6 space-y-4">
            <div className="flex items-start justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase bg-[#3657F0] text-white px-2 py-0.5">
                  STUDENT: {activeSub.studentName}
                </span>
                <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white mt-1">
                  {activeSub.title}
                </h3>
              </div>
              <StatusPill status={activeSub.status} />
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <a
                href={activeSub.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] flex items-center gap-1.5 hover:bg-[#3657F0] hover:text-white transition-colors"
              >
                <FolderGit2 className="w-4 h-4 text-[#3657F0]" />
                <span>Open Candidate Git Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {activeSub.liveUrl && (
                <a
                  href={activeSub.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Live App</span>
                </a>
              )}
            </div>

            <div>
              <span className="font-mono text-xs font-bold uppercase text-stone-500 block mb-1">
                Student Architectural Rationale:
              </span>
              <p className="font-sans text-xs text-stone-700 dark:text-stone-300 leading-relaxed bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-stone-300 dark:border-stone-700">
                {activeSub.description}
              </p>
            </div>

            {/* Automated Telemetry Card */}
            {activeSub.automatedTestResults && (
              <div className="bg-[#191A23] text-stone-200 p-4 border-2 border-[#191A23] shadow-[3px_3px_0px_#FFD966] font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-700 pb-2 text-stone-400">
                  <span className="flex items-center gap-1.5 text-white font-bold">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>AUTOMATED HARNESS VERDICT</span>
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {activeSub.automatedTestResults.testPassed}/{activeSub.automatedTestResults.testTotal} PASS
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="bg-stone-800 p-2">
                    <span className="text-stone-400 block text-[9px]">COVERAGE</span>
                    <strong className="text-emerald-400 text-sm">
                      {activeSub.automatedTestResults.codeCoveragePercent}%
                    </strong>
                  </div>
                  <div className="bg-stone-800 p-2">
                    <span className="text-stone-400 block text-[9px]">AST COMPLEXITY</span>
                    <strong className="text-yellow-400 text-sm">
                      {activeSub.automatedTestResults.cyclomaticComplexity}
                    </strong>
                  </div>
                  <div className="bg-stone-800 p-2">
                    <span className="text-stone-400 block text-[9px]">EXEC TIME</span>
                    <strong className="text-stone-200 text-sm">
                      {activeSub.automatedTestResults.executionTimeMs}ms
                    </strong>
                  </div>
                </div>

                <div className="space-y-1 text-[10px] text-stone-400">
                  {activeSub.automatedTestResults.automatedFeedback.map((fb, idx) => (
                    <div key={idx} className="flex items-start gap-1">
                      <span className="text-emerald-400">&gt;</span>
                      <span>{fb}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Mentor Interactive Rubric & Decision Form */}
          <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] p-6 space-y-5">
            <div className="border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
              <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
                EVALUATION RUBRIC
              </span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Faculty Scoring &amp; Attestation
              </h3>
            </div>

            {/* Rubric Criteria 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-xs">
                <span className="font-bold text-[#191A23] dark:text-white">
                  1. Code Quality &amp; Maintainability (1-5)
                </span>
                <strong className="text-[#3657F0]">{qualityScore} / 5</strong>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setQualityScore(val)}
                    className={`flex-1 py-1.5 font-mono text-xs font-bold border-2 border-[#191A23] transition-all ${
                      qualityScore === val 
                        ? 'bg-[#3657F0] text-white shadow-[2px_2px_0px_#191A23]' 
                        : 'bg-[#F8F3E9] dark:bg-[#282B3A] text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Rubric Criteria 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-xs">
                <span className="font-bold text-[#191A23] dark:text-white">
                  2. System Design &amp; Architectural Decoupling (1-5)
                </span>
                <strong className="text-[#FF7138]">{designScore} / 5</strong>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setDesignScore(val)}
                    className={`flex-1 py-1.5 font-mono text-xs font-bold border-2 border-[#191A23] transition-all ${
                      designScore === val 
                        ? 'bg-[#FF7138] text-white shadow-[2px_2px_0px_#191A23]' 
                        : 'bg-[#F8F3E9] dark:bg-[#282B3A] text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Rubric Criteria 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-xs">
                <span className="font-bold text-[#191A23] dark:text-white">
                  3. Problem Solving &amp; Invariant Defense (1-5)
                </span>
                <strong className="text-emerald-600">{problemSolvingScore} / 5</strong>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setProblemSolvingScore(val)}
                    className={`flex-1 py-1.5 font-mono text-xs font-bold border-2 border-[#191A23] transition-all ${
                      problemSolvingScore === val 
                        ? 'bg-emerald-500 text-white shadow-[2px_2px_0px_#191A23]' 
                        : 'bg-[#F8F3E9] dark:bg-[#282B3A] text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Qualitative Feedback */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
                Faculty Evaluation Comments (Public to Recruiters):
              </label>
              <textarea
                rows={3}
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] dark:border-stone-600 p-2 text-xs font-sans focus:outline-hidden"
              />
            </div>

            {/* Verification Decision Buttons */}
            <div className="pt-2 border-t-2 border-[#191A23] dark:border-stone-700 space-y-2">
              <span className="font-mono text-[10px] font-bold uppercase text-stone-500 block">
                Select Verification Verdict:
              </span>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled={isDeciding}
                  onClick={() => handleDecision('APPROVED_WITH_DISTINCTION')}
                  className="py-2.5 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-[#FF7138]" />
                  <span>Verify + Distinction</span>
                </button>

                <button
                  type="button"
                  disabled={isDeciding}
                  onClick={() => handleDecision('VERIFIED')}
                  className="py-2.5 bg-emerald-500 text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verify Standard</span>
                </button>

                <button
                  type="button"
                  disabled={isDeciding}
                  onClick={() => handleDecision('NEEDS_REVISION')}
                  className="py-2.5 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>Request Revisions</span>
                </button>

                <button
                  type="button"
                  disabled={isDeciding}
                  onClick={() => handleDecision('REJECTED')}
                  className="py-2.5 bg-red-600 text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      ) : (
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-12 text-center font-mono text-sm">
          No submissions selected.
        </div>
      )}
    </div>
  );
};
