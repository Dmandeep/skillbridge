import React from 'react';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
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
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            STAGE 3 HUMAN-IN-THE-LOOP ATTESTATION
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Faculty &amp; Mentor Verification Evaluations
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl leading-relaxed">
            Automated tests prove the code runs. Accredited faculty mentors verify the architectural integrity, trade-off reasoning, and engineering maturity.
          </p>
        </div>
      </ScrollReveal>

      {/* List of reviewed submissions */}
      <StaggerContainer staggerDelay={0.08} className="space-y-6">
        {reviewedSubmissions.map(sub => {
          const review = sub.mentorReview!;
          return (
            <StaggerItem key={sub.id}>
              <div
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
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
                          <strong className="text-xs font-sans block text-[#191A23] dark:text-white">
                            {review.mentorName}
                          </strong>
                          <span className="text-[10px] font-mono text-stone-500">
                            {review.mentorTitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rubric Score Breakdown */}
                    <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                      <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300 dark:border-stone-700 text-center">
                        <span className="text-[10px] text-stone-500 block uppercase">Code Quality</span>
                        <strong className="text-[#3657F0] text-base">
                          {review.rubricScores?.quality ?? review.codeQualityScore ?? 5.0} / 5.0
                        </strong>
                      </div>
                      <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300 dark:border-stone-700 text-center">
                        <span className="text-[10px] text-stone-500 block uppercase">Architecture</span>
                        <strong className="text-[#FF7138] text-base">
                          {review.rubricScores?.design ?? review.systemDesignScore ?? 4.8} / 5.0
                        </strong>
                      </div>
                      <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300 dark:border-stone-700 text-center">
                        <span className="text-[10px] text-stone-500 block uppercase">Problem Solving</span>
                        <strong className="text-emerald-500 text-base">
                          {review.rubricScores?.problemSolving ?? review.problemSolvingScore ?? 5.0} / 5.0
                        </strong>
                      </div>
                    </div>

                    {/* Faculty Written Critique */}
                    <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border border-stone-300 dark:border-stone-700 font-sans text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed italic">
                      "{review.writtenFeedback || review.detailedComments}"
                    </div>
                  </div>

                  {/* Right: Tangible Verification Stamp Display */}
                  <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#191A23]/30 dark:border-stone-700">
                    <VerificationStamp
                      mentorName={review.mentorName}
                      verificationDate={review.reviewedAt}
                      hash={sub.id}
                      score={96}
                      rotation={-3}
                    />
                    <span className="font-mono text-[10px] text-stone-500 mt-3 text-center">
                      SEALED: {review.reviewedAt}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
};
