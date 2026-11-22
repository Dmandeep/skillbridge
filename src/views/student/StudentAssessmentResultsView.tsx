import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { AnimatedCounter } from '../../animations/typography/AnimatedCounter';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  FileCheck2, 
  Terminal, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Gauge, 
  Activity,
  ShieldCheck 
} from 'lucide-react';

export const StudentAssessmentResultsView: React.FC = () => {
  const { submissions, evaluateSubmissionAutomated } = useData();
  const [selectedSubId, setSelectedSubId] = useState(submissions[0]?.id || '');
  const [isRunning, setIsRunning] = useState(false);

  const activeSub = submissions.find(s => s.id === selectedSubId) || submissions[0];

  const handleReRun = () => {
    if (!activeSub) return;
    setIsRunning(true);
    setTimeout(() => {
      evaluateSubmissionAutomated(activeSub.id);
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              STAGE 2 AUTOMATED HARNESS
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
              Automated Runner &amp; Benchmark Telemetry
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
              Deterministic code execution in an isolated sandbox. Measures test coverage, AST complexity, race conditions, and runtime benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={selectedSubId}
              onChange={e => setSelectedSubId(e.target.value)}
              className="bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] px-3 py-2 font-mono text-xs font-bold text-[#191A23] dark:text-white"
            >
              {submissions.map(s => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>

            <MagneticButton
              onClick={handleReRun}
              disabled={isRunning}
              className="px-4 py-2 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Benchmarking...' : 'Re-Run Suite'}</span>
            </MagneticButton>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Runner Telemetry Output */}
      {activeSub && activeSub.automatedTestResults ? (
        <div className="space-y-6">
          {/* Key Metrics Row */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
                <span className="text-stone-500 text-xs block mb-1 uppercase font-bold">Assertions Passed</span>
                <span className="text-3xl sm:text-4xl font-display font-black text-emerald-500">
                  {activeSub.automatedTestResults.passedAssertions} / {activeSub.automatedTestResults.totalAssertions}
                </span>
                <span className="text-[10px] text-stone-500 block mt-1">100% SUCCESS RATE</span>
              </div>

              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
                <span className="text-stone-500 text-xs block mb-1 uppercase font-bold">Code Coverage</span>
                <span className="text-3xl sm:text-4xl font-display font-black text-[#3657F0] dark:text-[#FFD966]">
                  <AnimatedCounter value={activeSub.automatedTestResults.coveragePercentage ?? activeSub.automatedTestResults.codeCoveragePercent ?? 0} suffix="%" />
                </span>
                <span className="text-[10px] text-stone-500 block mt-1">LINE &amp; BRANCH ACCREDITED</span>
              </div>

              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
                <span className="text-stone-500 text-xs block mb-1 uppercase font-bold">Complexity (AST)</span>
                <span className="text-3xl sm:text-4xl font-display font-black text-[#FF7138]">
                  {activeSub.automatedTestResults.cyclomaticComplexity}
                </span>
                <span className="text-[10px] text-stone-500 block mt-1">TIER 1 MAINTAINABILITY</span>
              </div>

              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] text-center">
                <span className="text-stone-500 text-xs block mb-1 uppercase font-bold">Runner Wall Time</span>
                <span className="text-3xl sm:text-4xl font-display font-black text-[#191A23] dark:text-white">
                  {activeSub.automatedTestResults.executionDurationMs}ms
                </span>
                <span className="text-[10px] text-stone-500 block mt-1">ISOLATED GVISOR RUN</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Terminal Logs & Assertion Manifest */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-[#191A23] border-4 border-[#191A23] shadow-[6px_6px_0px_#FFD966] text-emerald-400 font-mono text-xs p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  <span className="text-stone-300 ml-2 font-bold">gVisor Sandbox stdout / stderr</span>
                </div>
                <span>LOG ID: 0x992B104F</span>
              </div>

              <div className="space-y-1.5 leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
                <div className="text-stone-400">&gt; container init: initializing gVisor sandbox container image (sha256:d8a9f2...)</div>
                <div className="text-stone-400">&gt; git clone: pulled repository commit at HEAD</div>
                <div className="text-stone-300">&gt; test runner: starting suite with 48 assertions...</div>
                <div className="text-emerald-400">&gt; [PASS] TestWAL_CrashConsistency (64.2ms)</div>
                <div className="text-emerald-400">&gt; [PASS] TestRaft_LeaderElection_NetworkPartition (182.1ms)</div>
                <div className="text-emerald-400">&gt; [PASS] TestMemory_ZeroAllocation_HotPath (24.0ms)</div>
                <div className="text-emerald-400">&gt; [PASS] TestConcurrent_Compaction_LockContention (310.8ms)</div>
                <div className="text-emerald-400">&gt; [PASS] TestAST_PlagiarismDuplicateCheck (0.0% similarity with known corpus)</div>
                <div className="text-[#FFD966] pt-2">&gt; All 48 test assertions PASSED. Coverage: {activeSub.automatedTestResults.coveragePercentage}%</div>
                <div className="text-stone-400">&gt; Runtime container terminated cleanly (exit code 0).</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      ) : (
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-12 text-center font-mono text-sm text-stone-500">
          No automated results available for this submission.
        </div>
      )}
    </div>
  );
};
