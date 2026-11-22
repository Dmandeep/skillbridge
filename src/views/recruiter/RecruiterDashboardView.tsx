import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { StatCard } from '../../components/common/StatCard';
import { RecruiterCandidateProfileModal } from './RecruiterCandidateProfileModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  Compass, 
  Search, 
  KeyRound, 
  Bookmark, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2 
} from 'lucide-react';

export const RecruiterDashboardView: React.FC = () => {
  const { currentUser, setActiveTab } = useAuthRole();
  const { recruiterRequests, savedCandidateIds } = useData();
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);

  const pendingRequests = recruiterRequests.filter(r => r.status === 'PENDING');
  const approvedRequests = recruiterRequests.filter(r => r.status === 'APPROVED');

  return (
    <div className="space-y-6 select-none">
      {/* Recruiter Banner */}
      <ScrollReveal direction="down">
        <div className="bg-emerald-600 text-white border-4 border-[#191A23] shadow-[6px_6px_0px_#191A23] p-6 sm:p-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#FFD966] text-[#191A23] px-2.5 py-0.5 border border-[#191A23]">
              RECRUITER DASHBOARD
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              Verified Candidate Search
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
              Logged in as <strong>{currentUser?.name}</strong> ({currentUser?.organizationName}). 
              Find and connect with candidates whose coding skills have been verified through real project tests and teacher reviews.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <MagneticButton
                onClick={() => setActiveTab('talent-discovery')}
                className="px-5 py-2.5 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] text-xs font-bold tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#3657F0]" />
                <span>Search Candidates</span>
              </MagneticButton>
              <MagneticButton
                onClick={() => setActiveTab('access-requests')}
                className="px-5 py-2.5 bg-white text-[#191A23] border-2 border-[#191A23] text-xs font-bold tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-[#FF7138]" />
                <span>Access Requests ({approvedRequests.length} Approved)</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Metric Cards */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Active Dossier Unlocks"
            value={approvedRequests.length}
            subtext="Full code & test logs authorized"
            icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            color="yellow"
            badge="AUTHORIZED"
          />
          <StatCard
            label="Pending Access Requests"
            value={pendingRequests.length}
            subtext="Awaiting student consent"
            icon={<KeyRound className="w-5 h-5 text-[#FF7138]" />}
            color="orange"
          />
          <StatCard
            label="Saved Candidate Pipeline"
            value={savedCandidateIds.length}
            subtext="Shortlisted high-signal talent"
            icon={<Bookmark className="w-5 h-5 text-[#3657F0]" />}
            color="cobalt"
          />
          <StatCard
            label="Verified Talent Pool"
            value="480+"
            subtext="Passed accredited assertion harnesses"
            icon={<ShieldCheck className="w-5 h-5 text-stone-700" />}
            color="neutral"
          />
        </div>
      </ScrollReveal>

      {/* Quick Discovery Teaser */}
      <ScrollReveal direction="up" delay={0.25}>
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">HIGH-SIGNAL CANDIDATE</span>
              <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                Featured Verified Applicant: Aarav Sharma
              </h2>
            </div>
            <MagneticButton
              onClick={() => setSelectedCandidateId('usr_std_01')}
              className="px-4 py-2 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              Inspect Candidate Dossier
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-stone-300 dark:border-stone-700">
              <span className="text-[10px] text-stone-500 uppercase block">Accreditation</span>
              <strong className="text-sm text-[#191A23] dark:text-white">Apex Institute of Technology</strong>
            </div>
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-stone-300 dark:border-stone-700">
              <span className="text-[10px] text-stone-500 uppercase block">Verified Competency</span>
              <strong className="text-sm text-emerald-600">Distributed Systems (96%)</strong>
            </div>
            <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-stone-300 dark:border-stone-700">
              <span className="text-[10px] text-stone-500 uppercase block">Automated Test Harness</span>
              <strong className="text-sm text-[#3657F0]">48/48 Assertions Passed</strong>
            </div>
          </div>
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
