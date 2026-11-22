import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MOCK_CANDIDATES } from '../../constants/mockData';
import { RecruiterCandidateProfileModal } from './RecruiterCandidateProfileModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { Search, Filter, ShieldCheck, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export const RecruiterCandidateSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);

  const results = MOCK_CANDIDATES.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) || 
    c.topSkills.some(s => s.toLowerCase().includes(query.toLowerCase())) ||
    c.institution.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 space-y-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              INSTANT KEYWORD &amp; REPO SEARCH
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
              Faceted Candidate Search
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-3">
            <Search className="w-5 h-5 text-stone-500" />
            <input
              type="text"
              placeholder="Type competencies (e.g. 'Raft', 'React 19', 'C++', 'Go', 'Apex')..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-sans focus:outline-hidden text-[#191A23] dark:text-white"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <StaggerContainer staggerDelay={0.06} className="space-y-3">
          {results.map(c => (
            <StaggerItem key={c.id}>
              <div
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-[3px_3px_0px_#191A23] transition-all hover:translate-x-1"
              >
                <div className="flex items-center gap-4">
                  <img src={c.avatar} alt={c.name} className="w-12 h-12 object-cover border-2 border-[#191A23]" />
                  <div>
                    <strong className="font-display font-black text-base text-[#191A23] dark:text-white block">
                      {c.name}
                    </strong>
                    <span className="font-mono text-xs text-stone-500">{c.institution} &bull; {c.roleTagline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="font-mono text-xs text-right hidden sm:block">
                    <span className="text-emerald-500 font-bold block">{c.verifiedSkillsCount} Tier 3 Verified</span>
                    <span className="text-stone-500 text-[10px]">{c.avgTestCoverage} Test Cov</span>
                  </div>

                  <button
                    onClick={() => setSelectedCandidateId(c.id)}
                    className="px-4 py-2 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </ScrollReveal>

      <RecruiterCandidateProfileModal
        candidateId={selectedCandidateId || 'usr_std_01'}
        isOpen={selectedCandidateId !== null}
        onClose={() => setSelectedCandidateId(null)}
      />
    </div>
  );
};
