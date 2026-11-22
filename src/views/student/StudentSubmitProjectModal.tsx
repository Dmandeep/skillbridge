import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useAuthRole } from '../../context/AuthRoleContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle2, Terminal, Code2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StudentSubmitProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialChallengeId?: string;
}

export const StudentSubmitProjectModal: React.FC<StudentSubmitProjectModalProps> = ({ 
  isOpen, 
  onClose,
  initialChallengeId 
}) => {
  const { submitProject, challenges } = useData();
  const { currentUser } = useAuthRole();

  const [title, setTitle] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [challengeId, setChallengeId] = useState(initialChallengeId || '');
  const [skillTagsStr, setSkillTagsStr] = useState('Distributed Systems, Go, Concurrency');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<'form' | 'running_tests' | 'success'>('form');

  useEffect(() => {
    if (initialChallengeId) {
      setChallengeId(initialChallengeId);
      const ch = challenges.find(c => c.id === initialChallengeId);
      if (ch) {
        setTitle(ch.title);
        setDescription(ch.description);
        setSkillTagsStr(ch.skillsGained.join(', '));
      }
    }
  }, [initialChallengeId, challenges]);

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
          particleCount: 110,
          spread: 75,
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#F8F3E9] dark:bg-[#191A23] border-4 border-[#191A23] dark:border-[#FFD966] shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleResetAndClose}
              className="absolute top-4 right-4 p-1.5 border-2 border-[#191A23] bg-white dark:bg-[#282B3A] text-[#191A23] dark:text-white hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 'form' && (
              <div>
                <div className="border-b-2 border-[#191A23] pb-3 mb-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
                    PROJECT SUBMISSION
                  </span>
                  <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white mt-1">
                    Submit Project for Review
                  </h2>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-sans mt-1">
                    Automated tests will run on your code, and your teacher will review and provide feedback.
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
                        placeholder="https://github.com/org/repo"
                        value={repoUrl}
                        onChange={e => setRepoUrl(e.target.value)}
                        className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-mono focus:outline-hidden focus:border-[#3657F0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                        Live Demo / Web Link (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://my-app.vercel.app"
                        value={liveUrl}
                        onChange={e => setLiveUrl(e.target.value)}
                        className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-mono focus:outline-hidden focus:border-[#3657F0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                      Skill Tags (Comma-Separated)
                    </label>
                    <input
                      type="text"
                      placeholder="Distributed Systems, Go, Concurrency"
                      value={skillTagsStr}
                      onChange={e => setSkillTagsStr(e.target.value)}
                      className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-mono focus:outline-hidden focus:border-[#3657F0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-white mb-1">
                      Architecture &amp; Implementation Rationale
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Explain your approach, concurrency model, memory trade-offs, and test coverage strategy..."
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden focus:border-[#3657F0]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="px-4 py-2 border-2 border-[#191A23] font-mono text-xs font-bold uppercase hover:bg-stone-200 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <UploadCloud className="w-4 h-4 text-[#FFD966]" />
                      <span>{isSubmitting ? 'Testing Code...' : 'Test Code & Submit'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 'running_tests' && (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 border-4 border-[#3657F0] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                  Running Automated Tests...
                </h3>
                <p className="font-mono text-xs text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                  Running unit tests &bull; Checking code coverage &bull; Checking code quality
                </p>
              </div>
            )}

            {step === 'success' && (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                  Project Submitted Successfully!
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                  Your project passed automated tests with <strong>98.4% coverage</strong>. It has been routed to <strong>Dr. Elena Rostova</strong> for Tier 3 rubric evaluation and cryptographic stamp minting.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-2.5 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                  >
                    View in Submission Pipeline
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
