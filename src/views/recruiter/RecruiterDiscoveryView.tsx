import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MOCK_CANDIDATES } from '../../constants/mockData';
import { RecruiterCandidateProfileModal } from './RecruiterCandidateProfileModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  Compass, 
  Search, 
  Filter, 
  ShieldCheck, 
  Bookmark, 
  KeyRound, 
  CheckCircle2, 
  Building2, 
  Terminal,
  ExternalLink 
} from 'lucide-react';

export const RecruiterDiscoveryView: React.FC = () => {
  const { savedCandidateIds, toggleSaveCandidate, recruiterRequests } = useData();
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [filterSkill, setFilterSkill] = useState<string>('All');
  const [minCoverage, setMinCoverage] = useState<number>(85);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const candidates = MOCK_CANDIDATES.filter(c => {
    const matchesSkill = filterSkill === 'All' || c.topSkills.some(s => s.toLowerCase().includes(filterSkill.toLowerCase()));
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.publicSummary.toLowerCase().includes(searchQuery.toLowerCase()) || c.institution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSkill && matchesSearch;
  });

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            VERIFIED CANDIDATE SEARCH ENGINE
          </span>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Faceted Technical Talent Discovery
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
            Zero resume keyword stuffing. Filter software engineering candidates by actual automated test coverage, faculty rubric score, and verified challenge completions.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter and Query Bar */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 space-y-3 font-mono text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[240px] flex items-center gap-2 bg-white dark:bg-[#212330] border-2 border-[#191A23] px-3 py-1.5">
            <Search className="w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search by candidate name, institution, or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs font-sans focus:outline-hidden"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-600 dark:text-stone-400">Skill Tag:</span>
            <select
              value={filterSkill}
              onChange={e => setFilterSkill(e.target.value)}
              className="bg-white dark:bg-[#212330] border border-[#191A23] px-3 py-1.5 font-bold"
            >
              <option value="All">All Verified Competencies</option>
              <option value="Distributed">Distributed Systems</option>
              <option value="React">React 19 / Frontend</option>
              <option value="C++">C++ / High Performance</option>
              <option value="Rust">Rust</option>
              <option value="Kubernetes">Kubernetes &amp; Cloud</option>
            </select>
          </div>
        </div>
      </div>

      {/* Candidate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map(candidate => {
          const isSaved = savedCandidateIds.includes(candidate.id);
          const req = recruiterRequests.find(r => r.studentId === candidate.id);
          const isUnlocked = req?.status === 'APPROVED';

          return (
            <div
              key={candidate.id}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-5 flex flex-col justify-between space-y-4 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={candidate.avatar}
                      alt={candidate.name}
                      className="w-12 h-12 object-cover border-2 border-[#191A23]"
                    />
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                        {candidate.name}
                      </h3>
                      <span className="font-mono text-xs text-[#3657F0] dark:text-[#FFD966] font-bold block truncate max-w-[170px]">
                        {candidate.institution}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleSaveCandidate(candidate.id)}
                    className={`p-1.5 border-2 border-[#191A23] ${isSaved ? 'bg-[#FFD966] text-[#191A23]' : 'bg-white text-stone-400'}`}
                    title={isSaved ? "Saved in pipeline" : "Bookmark candidate"}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mb-3">
                  {candidate.publicSummary}
                </p>

                {/* Evidence Metrics Pill Bar */}
                <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300 dark:border-stone-700 font-mono text-xs space-y-1 mb-3">
                  <div className="flex justify-between">
                    <span className="text-stone-500 text-[10px]">VERIFIED SKILLS:</span>
                    <strong className="text-emerald-600">{candidate.verifiedSkillsCount} Tier 3 Badges</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 text-[10px]">AVG TEST COVERAGE:</span>
                    <strong className="text-[#3657F0]">{candidate.avgTestCoverage}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 text-[10px]">MENTOR SCORE:</span>
                    <strong className="text-[#191A23] dark:text-white">{candidate.mentorAttestationScore}</strong>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {candidate.topSkills.map((sk, idx) => (
                    <span key={idx} className="bg-stone-200 dark:bg-stone-700 text-[#191A23] dark:text-stone-200 text-[10px] font-mono px-1.5 py-0.5">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-200 dark:border-stone-700">
                <button
                  onClick={() => setSelectedCandidateId(candidate.id)}
                  className={`w-full py-2.5 border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#191A23] flex items-center justify-center gap-1.5 transition-all ${
                    isUnlocked 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                      : 'bg-[#FFD966] text-[#191A23] hover:bg-[#FF7138] hover:text-white'
                  }`}
                >
                  {isUnlocked ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>View Full Verified Dossier</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      <span>Request Dossier Access</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      </ScrollReveal>

      <RecruiterCandidateProfileModal
        candidateId={selectedCandidateId || 'usr_std_01'}
        isOpen={selectedCandidateId !== null}
        onClose={() => setSelectedCandidateId(null)}
      />
    </div>
  );
};
