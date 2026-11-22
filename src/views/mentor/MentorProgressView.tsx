import React from 'react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { TrendingUp, Award, BarChart3, Users, Sparkles } from 'lucide-react';

export const MentorProgressView: React.FC = () => {
  return (
    <div className="space-y-6 select-none">
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            LONGITUDINAL ADVANCEMENT
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Mentee Cohort Velocity &amp; Skill Progression
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Track progression from Tier 1 self-declarations to Tier 3 attested engineering competencies.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StaggerItem>
          <TiltCard tiltAmount={6}>
            <div className="bg-[#EEF2FF] dark:bg-[#1E2545] border-2 border-[#3657F0] p-6 shadow-[5px_5px_0px_#191A23] space-y-3 h-full">
              <span className="font-mono text-xs font-bold uppercase text-[#3657F0] block">Tier 1 &rarr; Tier 2 Velocity</span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-[#3657F0]">74.2%</h3>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Of claimed competencies have submitted verifiable code test suites within 30 days.
              </p>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard tiltAmount={6}>
            <div className="bg-[#FFFBEB] dark:bg-[#332A15] border-2 border-[#FFD966] p-6 shadow-[5px_5px_0px_#191A23] space-y-3 h-full">
              <span className="font-mono text-xs font-bold uppercase text-[#191A23] dark:text-[#FFD966] block">Tier 2 &rarr; Tier 3 Attestation</span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-[#FF7138]">88.5%</h3>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Pass rate upon faculty rubric review without requiring code revisions.
              </p>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard tiltAmount={6}>
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-600 p-6 shadow-[5px_5px_0px_#191A23] space-y-3 h-full">
              <span className="font-mono text-xs font-bold uppercase text-emerald-600 block">Recruiter Inbound Velocity</span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-emerald-600">3.8x</h3>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Higher interview conversion for students holding 2+ Mentor-Verified stamps.
              </p>
            </div>
          </TiltCard>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};
