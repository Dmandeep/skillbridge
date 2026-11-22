import React, { useState } from 'react';
import { Sliders, Save, CheckCircle2, ShieldCheck, Cpu, Terminal, Clock, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';

export const SuperAdminSettingsView: React.FC = () => {
  const [minCoverage, setMinCoverage] = useState(85);
  const [maxComplexity, setMaxComplexity] = useState(10);
  const [sandboxTimeout, setSandboxTimeout] = useState(30);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 select-none max-w-4xl mx-auto">
      {/* Header Banner */}
      <ScrollReveal direction="down" duration={0.6}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              ENGINE GOVERNANCE &amp; HARNESS TUNING
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold bg-[#FF7138]/20 text-[#FF7138] border border-[#FF7138]">
              KERNEL LEVEL
            </span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Automated Runner &amp; Protocol Parameters
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
            Configure baseline thresholds for automated test execution, AST cyclomatic complexity limits, and isolated gVisor sandbox container timeouts.
          </p>
        </div>
      </ScrollReveal>

      {/* Settings Form */}
      <ScrollReveal direction="up" duration={0.6} delay={0.1}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966]">
          <form onSubmit={handleSave} className="space-y-6 font-mono text-xs">
            <div className="space-y-2 bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border-2 border-[#191A23] dark:border-stone-700">
              <div className="flex items-center justify-between">
                <label className="font-bold uppercase text-[#191A23] dark:text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#3657F0]" />
                  <span>Minimum Required Code Coverage for Tier 2 Advance (%):</span>
                </label>
                <span className="text-sm font-black text-[#3657F0]">{minCoverage}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={minCoverage}
                onChange={e => setMinCoverage(Number(e.target.value))}
                className="w-full accent-[#3657F0] cursor-pointer"
              />
              <span className="text-[10px] text-stone-500 block">
                Submissions below this threshold are flagged for missing assertion test coverage before advancing to mentor review.
              </span>
            </div>

            <div className="space-y-2 bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border-2 border-[#191A23] dark:border-stone-700">
              <div className="flex items-center justify-between">
                <label className="font-bold uppercase text-[#191A23] dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#FF7138]" />
                  <span>Maximum Cyclomatic Complexity Threshold:</span>
                </label>
                <span className="text-sm font-black text-[#FF7138]">{maxComplexity}</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                value={maxComplexity}
                onChange={e => setMaxComplexity(Number(e.target.value))}
                className="w-full accent-[#FF7138] cursor-pointer"
              />
              <span className="text-[10px] text-stone-500 block">
                Functions exceeding this threshold trigger automated complexity warnings during static code analysis.
              </span>
            </div>

            <div className="space-y-2 bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border-2 border-[#191A23] dark:border-stone-700">
              <div className="flex items-center justify-between">
                <label className="font-bold uppercase text-[#191A23] dark:text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFD966]" />
                  <span>Sandbox Runner Execution Timeout (Seconds):</span>
                </label>
                <span className="text-sm font-black text-[#191A23] dark:text-[#FFD966]">{sandboxTimeout}s</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                value={sandboxTimeout}
                onChange={e => setSandboxTimeout(Number(e.target.value))}
                className="w-full accent-[#FFD966] cursor-pointer"
              />
              <span className="text-[10px] text-stone-500 block">
                Terminates candidate evaluation containers after timeout to prevent infinite loops and resource exhaustion attacks.
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#191A23] dark:border-stone-700">
              {saved ? (
                <span className="font-bold text-emerald-600 flex items-center gap-1.5 animate-pulse">
                  <CheckCircle2 className="w-4 h-4" /> Parameters saved &amp; synchronized across runner nodes.
                </span>
              ) : <span />}

              <MagneticButton
                type="submit"
                strength={0.15}
                className="px-6 py-2.5 bg-[#3657F0] hover:bg-[#2c47c7] text-white font-bold uppercase border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] flex items-center gap-2 cursor-pointer transition-transform active:translate-x-0.5 active:translate-y-0.5"
              >
                <Save className="w-4 h-4 text-[#FFD966]" />
                <span>Save Parameters</span>
              </MagneticButton>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
};
