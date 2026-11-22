import React from 'react';
import { PieChart, TrendingUp, Award, Building2 } from 'lucide-react';

export const OrgAnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6 select-none">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600">
          INSTITUTIONAL METRICS
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Industry Placement &amp; Talent Verification Analytics
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Measure student employability, recruiter engagement rates, and faculty evaluation throughput.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#191A23] text-white p-6 border-2 border-[#191A23] shadow-[4px_4px_0px_#FFD966] space-y-2">
          <span className="font-mono text-xs text-[#FFD966] uppercase font-bold">RECRUITER UNLOCK CONVERSION</span>
          <h3 className="font-display font-black text-4xl text-emerald-400">92.4%</h3>
          <p className="font-sans text-xs text-stone-400">
            Of recruiter access requests to our students result in direct technical interview invitations.
          </p>
        </div>

        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-2">
          <span className="font-mono text-xs text-[#3657F0] uppercase font-bold">AVG TIME TO FIRST OFFER</span>
          <h3 className="font-display font-black text-4xl text-[#3657F0]">21 Days</h3>
          <p className="font-sans text-xs text-stone-600 dark:text-stone-300">
            From second Tier 3 verification stamp to verified employment offer.
          </p>
        </div>

        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-2">
          <span className="font-mono text-xs text-[#FF7138] uppercase font-bold">EMPLOYER RETENTION RATE</span>
          <h3 className="font-display font-black text-4xl text-[#FF7138]">98.1%</h3>
          <p className="font-sans text-xs text-stone-600 dark:text-stone-300">
            Zero resume exaggeration false-positives reported by hiring partners.
          </p>
        </div>
      </div>
    </div>
  );
};
