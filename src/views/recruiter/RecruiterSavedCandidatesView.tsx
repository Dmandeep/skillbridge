import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MOCK_CANDIDATES } from '../../constants/mockData';
import { RecruiterCandidateProfileModal } from './RecruiterCandidateProfileModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { Bookmark, ShieldCheck, KeyRound, ExternalLink, ArrowRight } from 'lucide-react';

export const RecruiterSavedCandidatesView: React.FC = () => {
  const { savedCandidateIds, toggleSaveCandidate } = useData();
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);

  const saved = MOCK_CANDIDATES.filter(c => savedCandidateIds.includes(c.id));

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            TALENT BOOKMARKS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Saved Engineering Pipeline ({saved.length})
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Your bookmarked candidates with verified benchmarks for fast review and access requesting.
          </p>
        </div>
      </ScrollReveal>

      {saved.length === 0 ? (
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-12 text-center font-mono text-xs text-stone-500">
          No candidates saved yet. Browse the Verified Talent Engine to bookmark top engineers.
        </div>
      ) : (
        <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {saved.map(c => (
            <StaggerItem key={c.id}>
              <TiltCard tiltAmount={5}>
                <div
                  className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] space-y-3 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img src={c.avatar} alt={c.name} className="w-12 h-12 object-cover border-2 border-[#191A23]" />
                        <div>
                          <strong className="font-display font-black text-base text-[#191A23] dark:text-white block">
                            {c.name}
                          </strong>
                          <span className="font-mono text-xs text-stone-500">{c.institution}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSaveCandidate(c.id)}
                        className="p-1.5 border border-[#191A23] bg-[#FFD966] text-[#191A23] cursor-pointer hover:scale-105 transition-transform"
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    <div className="flex justify-between font-mono text-xs bg-[#F8F3E9] dark:bg-[#1E202B] p-2 border border-stone-300 dark:border-stone-700">
                      <span>Verified Skills: <strong>{c.verifiedSkillsCount}</strong></span>
                      <span>Avg Coverage: <strong className="text-emerald-500">{c.avgTestCoverage}</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCandidateId(c.id)}
                    className="w-full py-2 bg-[#3657F0] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>Inspect Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}

      <RecruiterCandidateProfileModal
        candidateId={selectedCandidateId || 'usr_std_01'}
        isOpen={selectedCandidateId !== null}
        onClose={() => setSelectedCandidateId(null)}
      />
    </div>
  );
};
