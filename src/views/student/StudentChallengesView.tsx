import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { StudentSubmitProjectModal } from './StudentSubmitProjectModal';
import { 
  Flame, 
  Clock, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  ShieldCheck 
} from 'lucide-react';

export const StudentChallengesView: React.FC = () => {
  const { challenges } = useData();
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <div className="bg-[#3657F0] text-white border-2 border-[#191A23] shadow-[4px_4px_0px_#191A23] p-6 relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD966] bg-[#191A23] px-2.5 py-0.5 border border-white/20">
            OFFICIAL PRACTICAL BENCHMARKS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
            Hands-On Skill Verification Challenges
          </h1>
          <p className="font-sans text-xs text-white/80 leading-relaxed font-medium">
            Solve standardized engineering specifications backed by automated test suites. Completing these challenges unlocks high-tier badges directly recognized by partner recruiters.
          </p>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(ch => {
          const difficultyColor = 
            ch.difficulty === 'Extreme' ? 'bg-red-600 text-white' :
            ch.difficulty === 'Hard' ? 'bg-[#FF7138] text-white' :
            'bg-[#FFD966] text-[#191A23]';

          return (
            <div
              key={ch.id}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-5 flex flex-col justify-between transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] font-bold uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5">
                    {ch.category}
                  </span>
                  <span className={`font-mono text-[10px] font-bold uppercase px-2 py-0.5 border border-[#191A23] ${difficultyColor}`}>
                    {ch.difficulty}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-2">
                  {ch.title}
                </h3>

                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {ch.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  <span className="font-mono text-[10px] font-bold uppercase text-stone-500 block">
                    Key Evaluation Assertions:
                  </span>
                  {ch.requirements.slice(0, 3).map((req, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs font-sans text-stone-700 dark:text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t-2 border-[#191A23]/20 dark:border-stone-700 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-600 dark:text-stone-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#3657F0]" />
                    {ch.timeEstimate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#FF7138]" />
                    {ch.activeParticipants} active candidates
                  </span>
                </div>

                <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2 border border-[#191A23]/30 text-xs font-mono flex items-center justify-between">
                  <span className="text-[10px] text-stone-500">Reward Badge:</span>
                  <span className="font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {ch.rewardBadge}
                  </span>
                </div>

                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="w-full py-2 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#191A23] hover:bg-[#FF7138] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Submit Challenge Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <StudentSubmitProjectModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
};
