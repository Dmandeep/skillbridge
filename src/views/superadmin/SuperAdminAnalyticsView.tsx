import React from 'react';
import { PieChart, TrendingUp, ShieldCheck, Activity } from 'lucide-react';

export const SuperAdminAnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
          NETWORK TELEMETRY
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Platform-Wide Verification &amp; Supply Trends
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Macro telemetry measuring competency supply, recruiter search demand, and automated test execution volume.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#191A23] text-white p-6 border-2 border-[#191A23] shadow-[4px_4px_0px_#FFD966] space-y-2">
          <span className="font-mono text-xs text-[#FFD966] uppercase font-bold">MONTHLY TEST EXECUTIONS</span>
          <h3 className="font-display font-black text-4xl text-emerald-400">148,920</h3>
          <p className="font-sans text-xs text-stone-400">
            Isolated assertion test runs across all sandbox runner clusters.
          </p>
        </div>

        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-2">
          <span className="font-mono text-xs text-[#3657F0] uppercase font-bold">TOP REQUESTED COMPETENCY</span>
          <h3 className="font-display font-black text-3xl text-[#3657F0]">Distributed Systems</h3>
          <p className="font-sans text-xs text-stone-600 dark:text-stone-300">
            Accounting for 38% of total recruiter access requests this quarter.
          </p>
        </div>

        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-6 shadow-[4px_4px_0px_#191A23] space-y-2">
          <span className="font-mono text-xs text-[#FF7138] uppercase font-bold">PROOF TAMPER INTEGRITY</span>
          <h3 className="font-display font-black text-4xl text-emerald-600">100.0%</h3>
          <p className="font-sans text-xs text-stone-600 dark:text-stone-300">
            Zero SHA-256 hash stamp inconsistencies detected across 128 nodes.
          </p>
        </div>
      </div>
    </div>
  );
};
