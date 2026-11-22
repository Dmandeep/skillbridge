import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { StatusPill } from '../../components/common/StatusPill';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  Terminal, 
  FolderGit2, 
  KeyRound, 
  CheckCircle2, 
  Building2, 
  Award,
  Sparkles 
} from 'lucide-react';

interface CandidateProfileModalProps {
  candidateId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterCandidateProfileModal: React.FC<CandidateProfileModalProps> = ({
  candidateId,
  isOpen,
  onClose
}) => {
  const { recruiterRequests, requestCandidateAccess, submissions, skills } = useData();
  const [roleTitle, setRoleTitle] = useState('Core Infrastructure Engineer (L4)');
  const [note, setNote] = useState('We were impressed by your verified Raft consensus engine and want to explore our distributed systems team.');
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  if (!isOpen) return null;

  // Check if recruiter has active approved request for this candidate
  const existingReq = recruiterRequests.find(r => r.studentId === candidateId);
  const isUnlocked = existingReq?.status === 'APPROVED';
  const isPending = existingReq?.status === 'PENDING';

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRequesting(true);
    setTimeout(() => {
      requestCandidateAccess(candidateId, roleTitle, note);
      setIsRequesting(false);
      setRequestSent(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
      <div className="bg-[#F8F3E9] dark:bg-[#191A23] border-4 border-[#191A23] dark:border-[#FFD966] shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 border-2 border-[#191A23] bg-white dark:bg-[#282B3A] text-[#191A23] dark:text-white hover:bg-red-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center gap-4 border-b-2 border-[#191A23] pb-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
            alt="Candidate"
            className="w-16 h-16 object-cover border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23]"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Aarav Sharma
              </h2>
              {isUnlocked ? (
                <span className="bg-emerald-500 text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-[#191A23] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  ACCESS UNLOCKED
                </span>
              ) : (
                <span className="bg-[#FF7138] text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-[#191A23] flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  GATED PRIVATE DOSSIER
                </span>
              )}
            </div>
            <p className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1.5 mt-0.5">
              <Building2 className="w-3.5 h-3.5" />
              Apex Institute of Technology • Class of 2027
            </p>
          </div>
        </div>

        {/* State A: Redacted Gated View vs State B: Unlocked Full Dossier */}
        {!isUnlocked ? (
          <div className="space-y-6">
            <div className="bg-[#FFFBEB] dark:bg-[#282215] border-2 border-[#191A23] p-4 text-xs font-sans text-stone-800 dark:text-stone-200">
              <div className="flex items-center gap-2 font-mono font-bold text-[#FF7138] mb-1">
                <Lock className="w-4 h-4" />
                <span>STUDENT DATA PRIVACY BOUNDARY ACTIVE</span>
              </div>
              <p>
                Per SkillBridge governance standards, candidates retain data sovereignty. You can view public summaries and high-level verification attestations. To inspect git repositories, code test logs, and raw mentor rubrics, request permission from the candidate below.
              </p>
            </div>

            {/* Public Verified Badges (Always Visible) */}
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-stone-500 block">
                Publicly Attested Competency Badges
              </span>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-3">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm text-[#191A23] dark:text-white">Distributed Systems</strong>
                    <span className="bg-emerald-500 text-white text-[10px] px-1 font-bold">TIER 3</span>
                  </div>
                  <span className="text-[10px] text-stone-500">Attested by Dr. Elena Rostova</span>
                </div>
                <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-3">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm text-[#191A23] dark:text-white">React 19 Concurrency</strong>
                    <span className="bg-emerald-500 text-white text-[10px] px-1 font-bold">TIER 3</span>
                  </div>
                  <span className="text-[10px] text-stone-500">Attested by Dr. Elena Rostova</span>
                </div>
              </div>
            </div>

            {/* Request Permission Form */}
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-5 shadow-[4px_4px_0px_#191A23]">
              {isPending || requestSent ? (
                <div className="py-4 text-center space-y-2">
                  <div className="w-10 h-10 bg-[#FFD966] border-2 border-[#191A23] rounded-full flex items-center justify-center mx-auto text-[#191A23]">
                    <KeyRound className="w-5 h-5 text-[#3657F0]" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                    Access Request Pending Candidate Approval
                  </h4>
                  <p className="text-xs font-sans text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                    Your request has been dispatched to Aarav Sharma's permission inbox. Once approved, the full verifiable code dossier will unlock automatically.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendRequest} className="space-y-4">
                  <div className="border-b border-stone-200 dark:border-stone-700 pb-2">
                    <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white">
                      Request Full Dossier Access
                    </h3>
                    <p className="font-mono text-xs text-stone-500">
                      Unlocks complete git commits, automated runner telemetry, and faculty rubric scores for 30 days.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
                      Target Role / Opportunity *
                    </label>
                    <input
                      type="text"
                      required
                      value={roleTitle}
                      onChange={e => setRoleTitle(e.target.value)}
                      className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2 text-xs font-sans focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
                      Personalized Message to Candidate *
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={note}
                      onChange={e => setNote(e.target.value)}
                      className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2 text-xs font-sans focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isRequesting}
                    className="w-full py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <KeyRound className="w-4 h-4 text-[#FFD966]" />
                    <span>{isRequesting ? 'Dispatching Request...' : 'Send Access Request to Student'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          /* STATE B: FULL UNLOCKED VERIFIED DOSSIER */
          <div className="space-y-6">
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-600 p-4 font-mono text-xs flex items-center justify-between text-emerald-800 dark:text-emerald-200">
              <span className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>30-Day Authorized Dossier Access Granted by Candidate</span>
              </span>
              <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 font-bold">
                AUTHORIZED
              </span>
            </div>

            {/* Repositories with full code test evidence */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase text-stone-500 block">
                Unlocked Repositories &amp; Automated Runner Logs
              </span>

              {submissions.map(sub => (
                <div
                  key={sub.id}
                  className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-4 shadow-[3px_3px_0px_#191A23] space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                        {sub.title}
                      </h4>
                      <a
                        href={sub.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-[#3657F0] hover:underline flex items-center gap-1 mt-0.5"
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>{sub.repoUrl}</span>
                      </a>
                    </div>
                    <StatusPill status={sub.status} size="sm" />
                  </div>

                  {sub.automatedTestResults && (
                    <div className="bg-[#191A23] text-emerald-400 p-3 font-mono text-xs space-y-1">
                      <div className="flex justify-between border-b border-stone-700 pb-1 text-stone-400 text-[10px]">
                        <span>AUTOMATED SUITE TELEMETRY</span>
                        <span>{sub.automatedTestResults.testPassed}/{sub.automatedTestResults.testTotal} Passed</span>
                      </div>
                      <p className="text-[11px] text-stone-200">
                        Code Coverage: <strong className="text-emerald-400">{sub.automatedTestResults.codeCoveragePercent}%</strong> • Execution: {sub.automatedTestResults.executionTimeMs}ms
                      </p>
                    </div>
                  )}

                  {sub.mentorReview && (
                    <div className="bg-[#FFFBEB] dark:bg-[#282215] border border-[#191A23] p-3 text-xs font-mono space-y-1">
                      <div className="flex justify-between font-bold text-[#191A23] dark:text-white">
                        <span>Evaluator: {sub.mentorReview.mentorName}</span>
                        <span className="text-[#3657F0]">{sub.mentorReview.decision}</span>
                      </div>
                      <p className="font-sans italic text-stone-700 dark:text-stone-300">
                        "{sub.mentorReview.detailedComments}"
                      </p>
                      <span className="text-[10px] text-stone-500 block pt-1">
                        Attestation Hash: {sub.mentorReview.verificationHash}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
