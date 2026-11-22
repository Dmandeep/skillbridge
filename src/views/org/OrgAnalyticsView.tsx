import React from 'react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { AnimatedCounter } from '../../animations/typography/AnimatedCounter';
import { PieChart, TrendingUp, Award, Building2, Sparkles } from 'lucide-react';

export const OrgAnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6 select-none">
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600">
            INSTITUTIONAL METRICS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Industry Placement &amp; Talent Verification Analytics
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Measure student employability, recruiter engagement rates, and faculty evaluation throughput.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StaggerItem>
          <TiltCard tiltAmount={6}>
            <div className="bg-[#191A23] text-white p-6 sm:p-8 border-2 border-[#191A23] shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <span className="font-mono text-xs text-[#FFD966] uppercase font-bold">RECRUITER UNLOCK CONVERSION</span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-emerald-400">
                <AnimatedCounter value={92.4} decimals={1} suffix="%" />
              </h3>
              <p className="font-sans text-xs text-stone-400 leading-relaxed">
                Of recruiter access requests to our students result in direct technical interview invitations.
              </p>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard tiltAmount={6}>
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-8 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <span className="font-mono text-xs text-[#3657F0] uppercase font-bold">AVG TIME TO FIRST OFFER</span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-[#3657F0] dark:text-[#FFD966]">
                <AnimatedCounter value={21} suffix=" Days" />
              </h3>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                From second Tier 3 verification stamp to verified employment offer.
              </p>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard tiltAmount={6}>
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 sm:p-8 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-3 h-full">
              <span className="font-mono text-xs text-[#FF7138] uppercase font-bold">EMPLOYER RETENTION RATE</span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-[#FF7138]">
                <AnimatedCounter value={98.1} decimals={1} suffix="%" />
              </h3>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Zero resume exaggeration false-positives reported by hiring partners.
              </p>
            </div>
          </TiltCard>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};
