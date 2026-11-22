import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { RecruiterCandidateProfileModal } from './RecruiterCandidateProfileModal';
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
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
          AUTHORIZATION STATUS AUDIT
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Dossier Access Permissions Tracker ({recruiterRequests.length})
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Monitor status of sent candidate permission requests. Approved requests grant complete access to private code, test harnesses, and faculty evaluations.
        </p>
      </div>

      <div className="space-y-4">
        {recruiterRequests.map(req => {
          const isApproved = req.status === 'APPROVED';
          const isPending = req.status === 'PENDING';

          return (
            <div
              key={req.id}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] p-5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                    {req.studentName}
                  </span>
                  <span className={`px-2 py-0.5 font-bold uppercase text-[10px] border border-[#191A23] ${
                    isApproved ? 'bg-emerald-500 text-white' : isPending ? 'bg-[#FFD966] text-[#191A23]' : 'bg-red-500 text-white'
                  }`}>
                    {req.status}
                  </span>
                </div>
                <p className="text-stone-600 dark:text-stone-400 font-sans text-xs">
                  Target Role: <strong className="text-[#191A23] dark:text-white">{req.targetRoleTitle}</strong> • Requested on {new Date(req.requestedAt).toLocaleDateString()}
                </p>
                {req.expiresAt && (
                  <span className="text-emerald-600 text-[11px] block">
                    Access Valid Until: {new Date(req.expiresAt).toLocaleDateString()}
                  </span>
                )}
              </div>

              <div>
                {isApproved ? (
                  <button
                    onClick={() => setSelectedCandidateId(req.studentId)}
                    className="px-5 py-2 bg-[#3657F0] text-white border-2 border-[#191A23] font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5"
                  >
                    <span>Open Verified Dossier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="text-stone-500 text-[11px]">
                    Awaiting Candidate Response
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <RecruiterCandidateProfileModal
        candidateId={selectedCandidateId || 'usr_std_01'}
        isOpen={selectedCandidateId !== null}
        onClose={() => setSelectedCandidateId(null)}
      />
    </div>
  );
};
