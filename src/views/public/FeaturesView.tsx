import React from 'react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Briefcase, 
  Terminal, 
  Sparkles 
} from 'lucide-react';

export const FeaturesView: React.FC = () => {
  return (
    <div className="space-y-12 select-none max-w-6xl mx-auto pb-16 px-4">
      {/* Header Banner */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 bg-[#3657F0] text-white px-3 py-1 font-mono text-xs font-bold uppercase border border-[#191A23] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
            <span>PLATFORM FEATURES</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#191A23] dark:text-white mt-1">
            Features Built for Every Role
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-2 max-w-2xl leading-relaxed">
            SkillBridge provides simple, practical tools designed specifically for students, teachers, colleges, and hiring teams.
          </p>
        </div>
      </ScrollReveal>

      {/* 4 Role Features + Testing Engine */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Student Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-[#3657F0] text-white border border-[#191A23]">
                  <GraduationCap className="w-5 h-5 text-[#FFD966]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#3657F0] dark:text-[#FFD966] font-bold uppercase">FOR LEARNERS</span>
                  <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                    Student Experience
                  </h3>
                </div>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Project Submissions:</strong> Connect GitHub project repositories and practice challenges.</li>
                <li>&bull; <strong>Instant Test Feedback:</strong> See your automated test results, test pass rates, and code checks right away.</li>
                <li>&bull; <strong>Skills Passport:</strong> Receive a clear, verified profile showcasing your completed skills and teacher endorsements.</li>
                <li>&bull; <strong>Privacy Controls:</strong> You choose which recruiters are allowed to view your full project code.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* 2. Teacher Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-[#FF7138] text-white border border-[#191A23]">
                  <BookOpenCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#FF7138] font-bold uppercase">FOR EDUCATORS</span>
                  <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                    Teacher &amp; Mentor Hub
                  </h3>
                </div>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Review Queue:</strong> See student projects waiting for evaluation in one convenient place.</li>
                <li>&bull; <strong>Code &amp; Test Inspection:</strong> Review student code alongside the automated test results.</li>
                <li>&bull; <strong>Simple Rubric Grading:</strong> Score code quality, system design, and problem solving from 1 to 5.</li>
                <li>&bull; <strong>Personal Feedback:</strong> Write constructive guidance to help students improve and succeed.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* 3. College Admin Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-[#FFD966] text-[#191A23] border border-[#191A23]">
                  <Building2 className="w-5 h-5 text-[#3657F0]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-stone-600 dark:text-stone-300 font-bold uppercase">FOR INSTITUTIONS</span>
                  <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                    College Administration
                  </h3>
                </div>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Student Enrollment:</strong> Approve student join requests with one click.</li>
                <li>&bull; <strong>Faculty Management:</strong> Keep an active roster of participating teachers and departments.</li>
                <li>&bull; <strong>Course Alignment:</strong> Link practical coding projects to your college syllabus and curriculum.</li>
                <li>&bull; <strong>Placement Reports:</strong> See real statistics on student completion rates and employer connections.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* 4. Recruiter Features */}
        <StaggerItem>
          <TiltCard tiltAmount={5}>
            <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <div className="flex items-center gap-2.5 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
                <div className="p-2 bg-emerald-600 text-white border border-[#191A23]">
                  <Briefcase className="w-5 h-5 text-[#FFD966]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">FOR HIRING</span>
                  <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                    Recruiter Talent Search
                  </h3>
                </div>
              </div>
              <ul className="font-sans text-xs text-stone-700 dark:text-stone-300 space-y-2.5 leading-relaxed pt-1">
                <li>&bull; <strong>Skill-Based Search:</strong> Filter candidates by verified test scores, skills, and teacher ratings.</li>
                <li>&bull; <strong>Access Requests:</strong> Request candidate permission to inspect their code and projects directly.</li>
                <li>&bull; <strong>Saved Candidates:</strong> Bookmark standout candidates to your hiring shortlist.</li>
                <li>&bull; <strong>Direct Contact:</strong> Reach out directly to proven candidates without resume screening delays.</li>
              </ul>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* 5. Automated Testing Engine (Spans across) */}
        <StaggerItem className="md:col-span-2">
          <TiltCard tiltAmount={3}>
            <div className="bg-[#EEF2FF] dark:bg-[#1A2238] border-3 border-[#3657F0] p-6 shadow-[5px_5px_0px_#3657F0] space-y-3">
              <div className="flex items-center gap-2.5 border-b-2 border-[#3657F0] pb-3">
                <div className="p-2 bg-[#3657F0] text-white border border-[#191A23]">
                  <Terminal className="w-5 h-5 text-[#FFD966]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#3657F0] dark:text-[#FFD966] font-bold uppercase">UNDER THE HOOD</span>
                  <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                    Automated Code Verification Engine
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs text-stone-700 dark:text-stone-300 pt-1">
                <div className="bg-white dark:bg-[#212330] p-3 border border-stone-300 dark:border-stone-700">
                  <strong className="block text-[#191A23] dark:text-white font-bold mb-1">Automated Unit Tests</strong>
                  <span>Runs all test suites to confirm that student functions produce correct outputs.</span>
                </div>
                <div className="bg-white dark:bg-[#212330] p-3 border border-stone-300 dark:border-stone-700">
                  <strong className="block text-[#191A23] dark:text-white font-bold mb-1">Code Quality Checks</strong>
                  <span>Analyzes clean formatting, readability, and maintainable software architecture.</span>
                </div>
                <div className="bg-white dark:bg-[#212330] p-3 border border-stone-300 dark:border-stone-700">
                  <strong className="block text-[#191A23] dark:text-white font-bold mb-1">Verified Badges</strong>
                  <span>Ensures badges can only be earned when tests pass and teachers approve.</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};
