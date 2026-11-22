import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { StatusPill } from '../../components/common/StatusPill';
import { motion, AnimatePresence } from 'framer-motion';
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
  Sparkles,
  ExternalLink 
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#F8F3E9] dark:bg-[#191A23] border-4 border-[#191A23] dark:border-[#FFD966] shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 border-2 border-[#191A23] bg-white dark:bg-[#282B3A] text-[#191A23] dark:text-white hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
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
                  Apex Institute of Technology &bull; Class of 2027
                </p>
              </div>
            </div>

            {/* If Locked: Request Access Form */}
            {!isUnlocked && (
              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-5 space-y-4">
                <div className="flex items-center gap-2 text-[#FF7138] font-mono text-xs font-bold uppercase">
                  <KeyRound className="w-4 h-4" />
                  <span>Request Student Authorization to Unlock Private Code &amp; Test Logs</span>
                </div>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  To protect student privacy and intellectual property, raw source repositories, runner logs, and faculty evaluations require explicit candidate consent.
                </p>

                {requestSent ? (
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500 p-4 font-mono text-xs text-emerald-700 dark:text-emerald-300">
                    &check; Access request sent directly to student's permission inbox! You will be notified upon authorization.
                  </div>
                ) : (
                  <form onSubmit={handleSendRequest} className="space-y-3 font-mono text-xs">
                    <div>
                      <label className="block font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Opportunity Role Title
                      </label>
                      <input
                        type="text"
                        required
                        value={roleTitle}
                        onChange={e => setRoleTitle(e.target.value)}
                        className="w-full p-2 bg-[#F8F3E9] dark:bg-[#1E202B] border border-[#191A23] font-sans text-xs focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-bold uppercase text-stone-700 dark:text-stone-300 mb-1">
                        Recruiter Message
                      </label>
                      <textarea
                        rows={2}
                        value={note}
                        onChange={e => setNote(e.target.value)}
                        className="w-full p-2 bg-[#F8F3E9] dark:bg-[#1E202B] border border-[#191A23] font-sans text-xs focus:outline-hidden"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isRequesting}
                      className="px-6 py-2.5 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      {isRequesting ? 'Dispatching Request...' : 'Dispatch Authorization Request'}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* If Unlocked: Full Dossier view */}
            {isUnlocked && (
              <div className="space-y-6">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500 p-4 font-mono text-xs flex items-center justify-between">
                  <span>Student Consent Granted &bull; Direct Recruiter Access Active</span>
                  <span className="font-bold text-emerald-600">PASSPORT VERIFIED</span>
                </div>

                {/* Submissions with full code & test data */}
                <div className="space-y-4">
                  <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                    Verified Code Artifacts &amp; Test Telemetry
                  </h3>

                  {submissions.map(sub => (
                    <div
                      key={sub.id}
                      className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-700 pb-2">
                        <strong className="font-display font-black text-lg text-[#191A23] dark:text-white">
                          {sub.title}
                        </strong>
                        <a
                          href={sub.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#3657F0] font-mono text-xs font-bold flex items-center gap-1 hover:underline"
                        >
                          <span>Open Repository</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <p className="font-sans text-xs text-stone-700 dark:text-stone-300">
                        {sub.description}
                      </p>

                      {sub.automatedTestResults && (
                        <div className="grid grid-cols-4 gap-2 text-center font-mono text-xs bg-stone-900 text-stone-100 p-3">
                          <div>
                            <span className="text-[10px] text-stone-400 block">Assertions</span>
                            <span className="text-emerald-400 font-bold">{sub.automatedTestResults.passedAssertions}/{sub.automatedTestResults.totalAssertions}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-stone-400 block">Coverage</span>
                            <span className="text-[#FFD966] font-bold">{sub.automatedTestResults.coveragePercentage}%</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-stone-400 block">Complexity</span>
                            <span className="text-white font-bold">{sub.automatedTestResults.cyclomaticComplexity}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-stone-400 block">Execution</span>
                            <span className="text-white font-bold">{sub.automatedTestResults.executionDurationMs}ms</span>
                          </div>
                        </div>
                      )}

                      {sub.mentorReview && (
                        <div className="bg-[#FFFBEB] dark:bg-[#282215] border border-[#191A23] p-3 text-xs font-mono space-y-1">
                          <div className="flex justify-between font-bold text-[#191A23] dark:text-white">
                            <span>Evaluator: {sub.mentorReview.mentorName}</span>
                            <span className="text-[#3657F0]">{sub.mentorReview.decision}</span>
                          </div>
                          <p className="font-sans italic text-stone-700 dark:text-stone-300">
                            "{sub.mentorReview.writtenFeedback}"
                          </p>
                          <span className="text-[10px] text-stone-500 block pt-1">
                            Attestation Hash: 0x{sub.id}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
