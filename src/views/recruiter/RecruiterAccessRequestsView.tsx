import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { RecruiterCandidateProfileModal } from './RecruiterCandidateProfileModal';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { 
  KeyRound, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  XCircle, 
  ArrowUpRight 
} from 'lucide-react';

export const RecruiterAccessRequestsView: React.FC = () => {
  const { recruiterRequests } = useData();
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            AUTHORIZATION STATUS AUDIT
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Dossier Access Permissions Tracker ({recruiterRequests.length})
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Monitor status of sent candidate permission requests. Approved requests grant complete access to private code, test harnesses, and faculty evaluations.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <StaggerContainer staggerDelay={0.07} className="space-y-4">
          {recruiterRequests.map(req => {
            const isApproved = req.status === 'APPROVED';
            const isPending = req.status === 'PENDING';

            return (
              <StaggerItem key={req.id}>
                <div
                  className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-black text-lg text-[#191A23] dark:text-white">
                        {req.studentName}
                      </span>
                      <span className={`px-2 py-0.5 font-bold uppercase text-[10px] border border-[#191A23] ${
                        isApproved ? 'bg-emerald-500 text-white' : isPending ? 'bg-[#FFD966] text-[#191A23]' : 'bg-red-500 text-white'
                      }`}>
                        {req.status}
                      </span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 font-sans text-xs">
                      Target Role: <strong className="text-[#191A23] dark:text-white">{req.targetRoleTitle}</strong> &bull; Requested on {req.requestedAt}
                    </p>
                    {req.expiresAt && (
                      <span className="text-emerald-600 dark:text-emerald-400 text-[11px] block font-bold">
                        Access Valid Until: {req.expiresAt}
                      </span>
                    )}
                  </div>

                  {isApproved ? (
                    <button
                      onClick={() => setSelectedCandidateId(req.studentId)}
                      className="px-4 py-2 bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1 border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                    >
                      <span>Unlock Dossier</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-stone-500 font-mono text-xs italic">
                      Awaiting Candidate Consent
                    </span>
                  )}
                </div>
              </StaggerItem>
            );
          })}
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
