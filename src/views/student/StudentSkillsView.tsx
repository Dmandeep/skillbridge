import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { StatusPill } from '../../components/common/StatusPill';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  Award, 
  Plus, 
  ShieldCheck, 
  FileCode, 
  Clock, 
  Filter, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { SkillItem } from '../../types';

export const StudentSkillsView: React.FC = () => {
  const { skills, addSelfDeclaredSkill } = useData();
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillItem['category']>('Backend');

  const filteredSkills = skills.filter(skill => {
    const matchesCat = filterCategory === 'All' || skill.category === filterCategory;
    const matchesStatus = filterStatus === 'All' || skill.verificationStatus === filterStatus;
    return matchesCat && matchesStatus;
  });

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    addSelfDeclaredSkill(newSkillName.trim(), newSkillCategory);
    setNewSkillName('');
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-6 select-none">
      {/* Header with 3-tier explanation */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#191A23] dark:border-stone-700 pb-4 mb-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              COMPETENCY ARCHITECTURE
            </span>
            <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
              Practical Skill Verification Matrix
            </h1>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
              Skills at SkillBridge are not arbitrary self-reported bullet points. They progress through a rigorous 3-tier verification pipeline from claim to reproducible proof.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Self-Declared Skill</span>
          </button>
        </div>

        {/* 3-Tier Legend Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-3 border border-[#191A23] dark:border-stone-600">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-stone-500" />
              <span className="font-mono text-xs font-bold text-stone-800 dark:text-stone-200">
                TIER 1: SELF-DECLARED
              </span>
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-400 font-sans">
              Claimed by candidate. Zero weight in recruiter discovery algorithms.
            </p>
          </div>

          <div className="bg-[#EEF2FF] dark:bg-[#1E2545] p-3 border border-[#3657F0]">
            <div className="flex items-center gap-2 mb-1">
              <FileCode className="w-4 h-4 text-[#3657F0]" />
              <span className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966]">
                TIER 2: EVIDENCE SUBMITTED
              </span>
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-300 font-sans">
              Code repository committed & passed automated assertion test suites.
            </p>
          </div>

          <div className="bg-[#FFFBEB] dark:bg-[#332A15] p-3 border border-[#FF7138]">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-[#FF7138]" />
              <span className="font-mono text-xs font-bold text-[#191A23] dark:text-[#FFD966]">
                TIER 3: MENTOR VERIFIED
              </span>
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-300 font-sans">
              Faculty code review, rubric assessment, and cryptographic verification seal.
            </p>
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* Filter and search controls */}
      <ScrollReveal direction="up" delay={0.1}>
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F2ECE0] dark:bg-[#1E202B] p-3 border-2 border-[#191A23] dark:border-[#3B3E54]">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="font-bold uppercase text-stone-600 dark:text-stone-400 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter Category:
          </span>
          {['All', 'Backend', 'Frontend', 'DevOps', 'System Design', 'Architecture'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-2.5 py-1 font-bold border ${
                filterCategory === cat 
                  ? 'bg-[#3657F0] text-white border-[#191A23]' 
                  : 'bg-white dark:bg-[#282B3A] text-stone-700 dark:text-stone-300 border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="font-bold uppercase text-stone-600 dark:text-stone-400">Status:</span>
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="bg-white dark:bg-[#282B3A] border border-[#191A23] dark:border-stone-600 px-2 py-1 font-mono text-xs font-bold text-[#191A23] dark:text-white"
          >
            <option value="All">All Verification Levels</option>
            <option value="MENTOR_VERIFIED">Tier 3: Mentor Verified</option>
            <option value="EVIDENCE_SUBMITTED">Tier 2: Evidence Submitted</option>
            <option value="SELF_DECLARED">Tier 1: Self-Declared</option>
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map(skill => (
          <div
            key={skill.id}
            className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[3px_3px_0px_#191A23] dark:shadow-[3px_3px_0px_#FFD966] flex flex-col justify-between transition-all hover:-translate-y-1"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="bg-[#191A23] text-[#FFD966] text-[10px] font-mono font-bold px-2 py-0.5 border border-[#191A23]">
                  {skill.category}
                </span>
                <StatusPill status={skill.verificationStatus} size="sm" />
              </div>

              <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white mt-1">
                {skill.name}
              </h3>
              <p className="font-mono text-xs text-stone-500 mt-0.5">
                Proficiency Level: <strong className="text-[#3657F0] dark:text-[#FFD966]">{skill.proficiencyLevel}</strong>
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-700">
              {skill.verificationStatus === 'MENTOR_VERIFIED' && (
                <div className="bg-[#FFD966]/20 border border-[#191A23] p-2 text-xs font-mono space-y-1">
                  <div className="flex justify-between text-[#191A23] dark:text-white font-bold">
                    <span>Verified By:</span>
                    <span>{skill.verifiedByMentorName}</span>
                  </div>
                  <div className="flex justify-between text-stone-600 dark:text-stone-300 text-[10px]">
                    <span>Score:</span>
                    <span className="font-bold text-[#3657F0]">{skill.score}/100</span>
                  </div>
                  <div className="flex justify-between text-stone-600 dark:text-stone-300 text-[9px]">
                    <span>Hash Stamp:</span>
                    <span className="font-bold text-[#3657F0]">{skill.badgeHash}</span>
                  </div>
                </div>
              )}

              {skill.verificationStatus === 'EVIDENCE_SUBMITTED' && (
                <div className="bg-[#3657F0]/10 border border-[#3657F0] p-2 text-xs font-mono space-y-1 text-stone-700 dark:text-stone-300">
                  <div className="flex justify-between">
                    <span>Evidence Repos:</span>
                    <strong className="text-[#3657F0]">{skill.evidenceCount} repository commit</strong>
                  </div>
                  <p className="text-[10px] text-stone-500">
                    Awaiting mentor review queue slot.
                  </p>
                </div>
              )}

              {skill.verificationStatus === 'SELF_DECLARED' && (
                <div className="bg-[#F8F3E9] dark:bg-[#282B3A] border border-dashed border-[#191A23]/40 p-2 text-xs font-mono text-stone-600 dark:text-stone-400">
                  <p className="text-[10px] mb-1">
                    No verified code artifacts linked yet.
                  </p>
                  <button 
                    onClick={() => alert(`Submit a challenge or repository demonstrating ${skill.name} to advance to Tier 2!`)}
                    className="w-full py-1 bg-white dark:bg-[#212330] border border-[#191A23] text-[10px] font-bold text-[#3657F0] hover:bg-[#3657F0] hover:text-white transition-colors"
                  >
                    + Link Code Proof
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </ScrollReveal>

      {/* Add Skill Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-[#F8F3E9] dark:bg-[#191A23] border-4 border-[#191A23] dark:border-[#FFD966] shadow-[8px_8px_0px_#191A23] max-w-md w-full p-6">
            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-1">
              Add Self-Declared Competency
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mb-4">
              Self-declared skills will be initialized at Tier 1. You can subsequently submit project evidence or take verified challenges to advance them.
            </p>

            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
                  Skill / Competency Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apache Kafka Stream Processing"
                  value={newSkillName}
                  onChange={e => setNewSkillName(e.target.value)}
                  className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
                  Category
                </label>
                <select
                  value={newSkillCategory}
                  onChange={e => setNewSkillCategory(e.target.value as SkillItem['category'])}
                  className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-stone-600 p-2 text-sm font-sans focus:outline-hidden"
                >
                  <option value="Backend">Backend</option>
                  <option value="Frontend">Frontend</option>
                  <option value="DevOps">DevOps</option>
                  <option value="AI / ML">AI / ML</option>
                  <option value="System Design">System Design</option>
                  <option value="Architecture">Architecture</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-3 font-mono text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border-2 border-[#191A23] bg-stone-200 text-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#3657F0] text-white border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23]"
                >
                  Register Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
