import React from 'react';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { 
  CheckCircle2, 
  Award, 
  ScrollText, 
  ShieldCheck 
} from 'lucide-react';

export const MentorDecisionsView: React.FC = () => {
  const { submissions } = useData();
  const decidedSubmissions = submissions.filter(s => s.mentorReview !== undefined);

  return (
    <div className="space-y-6 select-none">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600">
          IMMUTABLE VERIFICATION LEDGER
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Attested Stamped Decisions Log ({decidedSubmissions.length})
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Historical record of mentor verification seals minted to student passports.
        </p>
      </div>

      <div className="space-y-4">
        {decidedSubmissions.map(sub => {
          const rev = sub.mentorReview!;
          return (
            <div
              key={sub.id}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="bg-[#3657F0] text-white px-2 py-0.5 font-bold">
                    {rev.decision}
                  </span>
                  <span className="font-display font-bold text-base text-[#191A23] dark:text-white">
                    {sub.title}
                  </span>
                </div>
                <p className="text-stone-600 dark:text-stone-400 font-sans text-xs">
                  Student: <strong>{sub.studentName}</strong> • Evaluated on {new Date(rev.reviewedAt).toLocaleDateString()}
                </p>
                <p className="text-[11px] font-sans italic text-stone-700 dark:text-stone-300">
                  "{rev.detailedComments}"
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-stone-500 block">VERIFICATION HASH</span>
                <span className="font-bold text-[#3657F0] dark:text-[#FFD966] text-xs">
                  {rev.verificationHash}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
