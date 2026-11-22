import React from 'react';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { 
  MessageSquareCheck, 
  Award, 
  CheckCircle2, 
  UserCheck, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

export const StudentMentorFeedbackView: React.FC = () => {
  const { submissions } = useData();
  const reviewedSubmissions = submissions.filter(s => s.mentorReview !== undefined);

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
          STAGE 3 HUMAN-IN-THE-LOOP ATTESTATION
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Faculty &amp; Mentor Verification Evaluations
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
          Automated tests prove the code runs. Accredited faculty mentors verify the architectural integrity, trade-off reasoning, and engineering maturity.
        </p>
      </div>

      {/* List of reviewed submissions */}
      <div className="space-y-6">
        {reviewedSubmissions.map(sub => {
          const review = sub.mentorReview!;
          return (
            <div
              key={sub.id}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Project & Rubric */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase bg-[#3657F0] text-white px-2 py-0.5">
                        {review.decision.replace('_', ' ')}
                      </span>
                      <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white mt-1">
                        {sub.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src={review.mentorAvatar}
                        alt={review.mentorName}
                        className="w-10 h-10 rounded-full border-2 border-[#191A23]"
                      />
                      <div>
                        <span className="font-display font-bold text-sm text-[#191A23] dark:text-white block">
                          {review.mentorName}
                        </span>
                        <span className="font-mono text-[10px] text-stone-500">
                          Lead Faculty Evaluator
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rubric Score Cards */}
                  <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                    <div className="bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] p-3 text-center">
                      <span className="text-[10px] text-stone-500 block uppercase">Code Quality</span>
                      <strong className="text-xl text-[#3657F0]">{review.codeQualityScore} / 5.0</strong>
                    </div>
                    <div className="bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] p-3 text-center">
                      <span className="text-[10px] text-stone-500 block uppercase">System Design</span>
                      <strong className="text-xl text-[#FF7138]">{review.systemDesignScore} / 5.0</strong>
                    </div>
                    <div className="bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] p-3 text-center">
                      <span className="text-[10px] text-stone-500 block uppercase">Problem Solving</span>
                      <strong className="text-xl text-emerald-600">{review.problemSolvingScore} / 5.0</strong>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border border-[#191A23] space-y-1">
                    <span className="font-mono text-xs font-bold uppercase text-stone-500 block">
                      Mentor Evaluation Notes:
                    </span>
                    <p className="font-sans text-sm text-[#191A23] dark:text-stone-200 leading-relaxed italic">
                      "{review.detailedComments}"
                    </p>
                  </div>
                </div>

                {/* Right: Cryptographic Seal */}
                <div className="flex flex-col items-center justify-center p-4 bg-[#F2ECE0] dark:bg-[#1E202B] border-2 border-[#191A23]">
                  <VerificationStamp
                    mentorName={review.mentorName}
                    verificationDate={new Date(review.reviewedAt).toLocaleDateString()}
                    hash={review.verificationHash}
                    score={Math.round(((review.codeQualityScore + review.systemDesignScore + review.problemSolvingScore) / 15) * 100)}
                    rotation={-1}
                  />
                  <span className="font-mono text-[10px] text-stone-500 mt-4 text-center">
                    Immutable Ledger Seal #SB-{sub.id.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
