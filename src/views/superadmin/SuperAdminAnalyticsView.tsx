import React from 'react';
import { PieChart, TrendingUp, ShieldCheck, Activity, Cpu, Server, Lock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { AnimatedCounter } from '../../animations/typography/AnimatedCounter';

export const SuperAdminAnalyticsView: React.FC = () => {
  const telemetryBreakdown = [
    { name: 'Distributed Systems & Consensus', percentage: 94, runs: '42,190 runs', growth: '+28%' },
    { name: 'Rust & Memory-Safe Systems', percentage: 88, runs: '36,540 runs', growth: '+34%' },
    { name: 'Full-Stack React & Next.js Performance', percentage: 82, runs: '31,200 runs', growth: '+15%' },
    { name: 'Cloud Infrastructure & Kubernetes', percentage: 76, runs: '24,190 runs', growth: '+22%' },
    { name: 'Applied Machine Learning & Vector Search', percentage: 69, runs: '14,800 runs', growth: '+41%' },
  ];

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Header Banner */}
      <ScrollReveal direction="down" duration={0.6}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              NETWORK TELEMETRY &amp; HARNESS HEALTH
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-500 text-white border border-[#191A23]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              LIVE TELEMETRY
            </span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Platform-Wide Verification &amp; Supply Trends
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
            Macro telemetry measuring verified competency supply, recruiter search demand, automated test execution volume, and ledger tamper integrity.
          </p>
        </div>
      </ScrollReveal>

      {/* Primary KPI Grid */}
      <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StaggerItem>
          <TiltCard tiltAmount={5} className="h-full">
            <div className="bg-[#191A23] text-white p-6 border-2 border-[#191A23] shadow-[4px_4px_0px_#FFD966] space-y-2 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#FFD966]">
                  <span className="font-mono text-xs uppercase font-bold">MONTHLY TEST EXECUTIONS</span>
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="font-display font-black text-4xl text-emerald-400 mt-2">
                  <AnimatedCounter value={148920} duration={1.5} />
                </div>
                <p className="font-sans text-xs text-stone-400 mt-2">
                  Isolated assertion test runs across all sandbox runner clusters with zero leaks.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
                <span>Pass Rate: 87.4%</span>
                <span className="text-[#FFD966]">+19% MoM</span>
              </div>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard tiltAmount={5} className="h-full">
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] space-y-2 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#3657F0]">
                  <span className="font-mono text-xs uppercase font-bold">TOP REQUESTED COMPETENCY</span>
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="font-display font-black text-2xl text-[#3657F0] mt-2">
                  Distributed Systems
                </h3>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mt-2">
                  Accounting for 38% of total recruiter access requests and verified talent discovery queries this quarter.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-200 dark:border-stone-700 font-mono text-[11px] text-stone-500 flex items-center justify-between">
                <span>Verified Candidates: 412</span>
                <span className="text-[#3657F0] font-bold">High Demand</span>
              </div>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard tiltAmount={5} className="h-full">
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] space-y-2 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#FF7138]">
                  <span className="font-mono text-xs uppercase font-bold">PROOF TAMPER INTEGRITY</span>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-display font-black text-4xl text-emerald-600 dark:text-emerald-400 mt-2">
                  <AnimatedCounter value={100} duration={1.2} suffix="%" />
                </div>
                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mt-2">
                  Zero SHA-256 hash stamp inconsistencies detected across 128 distributed validator nodes.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-200 dark:border-stone-700 font-mono text-[11px] text-stone-500 flex items-center justify-between">
                <span>Ledger Blocks: 8,429</span>
                <span className="text-emerald-600 font-bold">Cryptographically Sound</span>
              </div>
            </div>
          </TiltCard>
        </StaggerItem>
      </StaggerContainer>

      {/* Competency Supply vs Demand Graph Breakdown */}
      <ScrollReveal direction="up" duration={0.6} delay={0.2}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
                ASSESSMENT HARNESS ACTIVITY
              </span>
              <h3 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Skill Domain Evaluation Volume &amp; Fulfillment
              </h3>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="flex items-center gap-1.5 text-stone-600 dark:text-stone-300">
                <span className="w-3 h-3 bg-[#3657F0] inline-block border border-[#191A23]" />
                Completed Tests
              </span>
              <span className="flex items-center gap-1.5 text-stone-600 dark:text-stone-300">
                <span className="w-3 h-3 bg-[#FF7138] inline-block border border-[#191A23]" />
                Demand Velocity
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {telemetryBreakdown.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[#191A23] dark:text-white flex items-center gap-2">
                    <span className="w-5 h-5 bg-[#F8F3E9] dark:bg-[#1E202B] border border-[#191A23] inline-flex items-center justify-center text-[10px] font-bold">
                      0{idx + 1}
                    </span>
                    {item.name}
                  </span>
                  <div className="flex items-center gap-4 text-stone-500">
                    <span>{item.runs}</span>
                    <span className="text-emerald-600 font-bold">{item.growth}</span>
                    <span className="font-bold text-[#191A23] dark:text-white w-10 text-right">{item.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] h-3 border border-[#191A23] overflow-hidden">
                  <div
                    className="bg-[#3657F0] h-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
