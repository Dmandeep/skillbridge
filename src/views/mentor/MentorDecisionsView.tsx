import React from 'react';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
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
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600">
            IMMUTABLE VERIFICATION LEDGER
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Attested Stamped Decisions Log ({decidedSubmissions.length})
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Historical record of mentor verification seals minted to student passports.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.07} className="space-y-4">
        {decidedSubmissions.map(sub => {
          const rev = sub.mentorReview!;
          return (
            <StaggerItem key={sub.id}>
              <div
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 sm:p-6 shadow-[4px_4px_0px_#191A23] flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#3657F0] text-white px-2 py-0.5 font-bold text-[10px]">
                      {rev.decision.replace('_', ' ')}
                    </span>
                    <span className="font-display font-bold text-base text-[#191A23] dark:text-white">
                      {sub.title}
                    </span>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 font-sans text-xs">
                    Student: <strong>{sub.studentName}</strong> &bull; Evaluated on {rev.reviewedAt}
                  </p>
                  <p className="text-xs font-sans italic text-stone-700 dark:text-stone-300 leading-relaxed">
                    "{rev.writtenFeedback}"
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-500 block uppercase">Verification Stamp Seal</span>
                  <span className="font-bold text-[#3657F0] dark:text-[#FFD966] text-xs">
                    SHA256: 0x{sub.id.slice(0, 12)}...
                  </span>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
};
