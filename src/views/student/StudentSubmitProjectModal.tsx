import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useAuthRole } from '../../context/AuthRoleContext';
import { X, UploadCloud, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StudentSubmitProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentSubmitProjectModal: React.FC<StudentSubmitProjectModalProps> = ({ isOpen, onClose }) => {
  const { submitProject, challenges } = useData();
  const { currentUser } = useAuthRole();

  const [title, setTitle] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [challengeId, setChallengeId] = useState('');
  const [skillTagsStr, setSkillTagsStr] = useState('Distributed Systems, Go, Concurrency');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<'form' | 'running_tests' | 'success'>('form');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !repoUrl) return;

    setIsSubmitting(true);
    setStep('running_tests');

    // Simulate Automated AST & Test Suite execution
    setTimeout(() => {
      const selectedChallenge = challenges.find(c => c.id === challengeId);
      const tags = skillTagsStr.split(',').map(s => s.trim()).filter(Boolean);

      submitProject({
        title,
        studentId: currentUser?.id || 'usr_std_01',
        studentName: currentUser?.name || 'Aarav Sharma',
        studentAvatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        organizationName: currentUser?.organizationName || 'Apex Institute of Technology',
        skillTags: tags,
        repoUrl,
        liveUrl: liveUrl || undefined,
        challengeId: challengeId || undefined,
        challengeTitle: selectedChallenge?.title || undefined,
        description,
      });

      setStep('success');
      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 2000);
  };

  const handleResetAndClose = () => {
    setStep('form');
    setTitle('');
    setRepoUrl('');
    setLiveUrl('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
      <div className="bg-[#F8F3E9] dark:bg-[#191A23] border-4 border-[#191A23] dark:border-[#FFD966] shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-1.5 border-2 border-[#191A23] bg-white dark:bg-[#282B3A] text-[#191A23] dark:text-white hover:bg-red-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
          <div>
            <div className="border-b-2 border-[#191A23] pb-3 mb-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
                EVIDENCE SUBMISSION PORTAL
              </span>
              <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white mt-1">
                Submit Practical Project for Verification
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-sans mt-1">
                Submissions trigger automated static analysis and dynamic assertion suites before being routed to your assigned mentor.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., RaftKV: Resilient Consensus Storage Engine"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden focus:border-[#3657F0]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                    Repository URL (Git) *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/..."
                    value={repoUrl}
                    onChange={e => setRepoUrl(e.target.value)}
                    className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden focus:border-[#3657F0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                    Live Demo Link (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://myproject.demo"
                    value={liveUrl}
                    onChange={e => setLiveUrl(e.target.value)}
                    className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden focus:border-[#3657F0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                  Link to Official Challenge (Optional)
                </label>
                <select
                  value={challengeId}
                  onChange={e => setChallengeId(e.target.value)}
                  className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden focus:border-[#3657F0]"
                >
                  <option value="">Independent Capstone / Free Project</option>
                  {challenges.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.difficulty})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                  Claimed Skill Tags (comma-separated) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Distributed Systems, Go, Concurrency"
                  value={skillTagsStr}
                  onChange={e => setSkillTagsStr(e.target.value)}
                  className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-mono focus:outline-hidden focus:border-[#3657F0]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                  Architecture & Implementation Overview *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your design choices, concurrency primitives, error handling invariants, and testing strategy..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden focus:border-[#3657F0]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 border-2 border-[#191A23] font-mono text-xs font-bold uppercase bg-stone-200 text-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 border-2 border-[#191A23] font-mono text-xs font-bold uppercase bg-[#3657F0] text-white shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>Initiate Verification Pipeline</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'running_tests' && (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 border-4 border-[#3657F0] border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="space-y-1">
              <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                Executing Automated Assertion Harness...
              </h3>
              <p className="font-mono text-xs text-[#3657F0] dark:text-[#FFD966]">
                Spinning up isolated sandbox runner • AST security audit • 25 unit assertion checks
              </p>
            </div>
            <div className="bg-[#191A23] text-left p-4 font-mono text-xs text-emerald-400 max-w-md mx-auto border-2 border-[#191A23] shadow-[3px_3px_0px_#FFD966]">
              <div className="flex items-center gap-2 border-b border-stone-700 pb-1 mb-2 text-stone-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>RUNNER TELEMETRY LOG</span>
              </div>
              <div>&gt; Cloning target repository... [OK]</div>
              <div>&gt; Static complexity check: Cyclomatic Complexity = 4 (LOW)</div>
              <div>&gt; Executing concurrency fuzz suite... PASS (24/25)</div>
              <div>&gt; Hashing commit tree for immutable ledger...</div>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#FFD966] border-2 border-[#191A23] shadow-[4px_4px_0px_#191A23] flex items-center justify-center mx-auto text-[#191A23]">
              <CheckCircle2 className="w-8 h-8 text-[#3657F0]" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600">
                STAGE 2 COMPLETED: EVIDENCE SUBMITTED
              </span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Automated Harness Passed!
              </h3>
              <p className="text-xs font-sans text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                Your submission scored <strong>91.2% test coverage</strong>. It has been stamped and placed in Dr. Elena Rostova's mentor verification queue.
              </p>
            </div>

            <div className="pt-4 flex justify-center gap-3 font-mono text-xs font-bold">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23]"
              >
                View in Submission Queue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
