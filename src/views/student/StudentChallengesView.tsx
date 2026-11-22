import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { StudentSubmitProjectModal } from './StudentSubmitProjectModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  Flame, 
  Clock, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  ShieldCheck,
  Sparkles 
} from 'lucide-react';

export const StudentChallengesView: React.FC = () => {
  const { challenges } = useData();
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-[#3657F0] text-white border-2 border-[#191A23] shadow-[5px_5px_0px_#191A23] p-6 sm:p-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD966] bg-[#191A23] px-2.5 py-0.5 border border-white/20">
              OFFICIAL PRACTICAL BENCHMARKS
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
              Hands-On Skill Verification Challenges
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
              Solve standardized engineering specifications backed by automated test suites. Completing these challenges unlocks high-tier badges directly recognized by partner recruiters.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Challenges Grid */}
      <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(ch => {
          const difficultyColor = 
            ch.difficulty === 'Extreme' ? 'bg-red-600 text-white' :
            ch.difficulty === 'Hard' ? 'bg-[#FF7138] text-white' :
            'bg-[#FFD966] text-[#191A23]';

          return (
            <StaggerItem key={ch.id}>
              <TiltCard tiltAmount={5}>
                <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-5 flex flex-col justify-between transition-all hover:-translate-y-1 h-full">
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

                    <div className="space-y-2 mb-4 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#3657F0]" />
                        <span>Est: {ch.timeEstimate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#FF7138]" />
                        <span>{ch.activeParticipants} developers verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Runner: {ch.automatedSuiteName}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {ch.skillsGained.map(sk => (
                        <span key={sk} className="text-[10px] font-mono px-1.5 py-0.2 bg-[#F8F3E9] dark:bg-[#282B3A] border border-stone-300 dark:border-stone-700">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedChallengeId(ch.id);
                      setIsSubmitModalOpen(true);
                    }}
                    className="w-full py-2.5 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Submit Proof Artifact</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Submission Modal */}
      <StudentSubmitProjectModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        initialChallengeId={selectedChallengeId || undefined}
      />
    </div>
  );
};
