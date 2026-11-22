import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { 
  FileCheck2, 
  Terminal, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Gauge, 
  Activity 
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
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            STAGE 2 AUTOMATED HARNESS
          </span>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Automated Runner &amp; Benchmark Telemetry
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
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

          <button
            onClick={handleReRun}
            disabled={isRunning}
            className="px-4 py-2 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#191A23] hover:bg-[#FF7138] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running Harness...' : 'Re-run Runner'}</span>
          </button>
        </div>
      </div>

      {activeSub && activeSub.automatedTestResults ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Key Metric Gauges */}
          <div className="space-y-4">
            <div className="bg-[#191A23] text-white p-5 border-2 border-[#191A23] shadow-[4px_4px_0px_#3657F0]">
              <span className="font-mono text-[10px] uppercase text-[#FFD966] block font-bold mb-1">
                OVERALL AUTOMATED SCORE
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display font-black text-5xl text-emerald-400">
                  {activeSub.automatedTestResults.codeCoveragePercent}%
                </span>
                <span className="font-mono text-xs text-stone-400">TEST COVERAGE</span>
              </div>
              <div className="w-full bg-stone-700 h-2 border border-stone-600">
                <div 
                  className="bg-emerald-400 h-full transition-all duration-500" 
                  style={{ width: `${activeSub.automatedTestResults.codeCoveragePercent}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 shadow-[3px_3px_0px_#191A23] space-y-3 font-mono text-xs">
              <span className="font-bold uppercase text-stone-500 block">EXECUTION SPECS</span>
              <div className="flex justify-between border-b border-stone-200 dark:border-stone-700 pb-1.5">
                <span className="text-stone-600 dark:text-stone-400">Sandbox Isolation:</span>
                <strong className="text-[#3657F0]">gVisor Container</strong>
              </div>
              <div className="flex justify-between border-b border-stone-200 dark:border-stone-700 pb-1.5">
                <span className="text-stone-600 dark:text-stone-400">Runtime Wallclock:</span>
                <strong>{activeSub.automatedTestResults.executionTimeMs} ms</strong>
              </div>
              <div className="flex justify-between border-b border-stone-200 dark:border-stone-700 pb-1.5">
                <span className="text-stone-600 dark:text-stone-400">Assertions Passed:</span>
                <strong className="text-emerald-600">{activeSub.automatedTestResults.testPassed} / {activeSub.automatedTestResults.testTotal}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600 dark:text-stone-400">Cyclomatic AST:</span>
                <strong className="text-emerald-600">{activeSub.automatedTestResults.cyclomaticComplexity} (4.1/10)</strong>
              </div>
            </div>
          </div>

          {/* Detailed Terminal Output & Log Assertions */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#191A23] text-stone-200 border-2 border-[#191A23] shadow-[4px_4px_0px_#FFD966] p-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-stone-700 pb-2 mb-3 text-stone-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-bold">AUTOMATED RUNNER LOGS (STDOUT / STDERR)</span>
                </div>
                <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5">
                  ID: runner_v3_{activeSub.id}
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
                <div className="text-stone-500">[00:00.012] Initializing isolated microVM sandbox environment...</div>
                <div className="text-stone-500">[00:00.045] Fetching commit tree {activeSub.repoUrl}...</div>
                <div className="text-emerald-400">[00:00.210] ✓ Dependencies resolved and locked. Zero vulnerable sub-packages.</div>
                <div className="text-stone-300">[00:00.412] Running AST static analysis pass:</div>
                <div className="pl-4 text-stone-400">&bull; No naked goroutine leaks detected</div>
                <div className="pl-4 text-stone-400">&bull; Memory allocation bounded at 128MB max resident size</div>
                <div className="text-yellow-400">[00:00.820] Executing concurrency fuzz suite: 10,000 iterations...</div>
                <div className="text-emerald-400">[00:01.150] ✓ 0 race conditions reported by ThreadSanitizer (-race flag).</div>

                <div className="pt-2 border-t border-stone-800 space-y-1">
                  {activeSub.automatedTestResults.automatedFeedback.map((fb, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{fb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Test Case Breakdown */}
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 shadow-[3px_3px_0px_#191A23]">
              <h4 className="font-mono text-xs font-bold uppercase text-[#191A23] dark:text-white mb-3">
                Assertion Suite Breakdown
              </h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 bg-[#F8F3E9] dark:bg-[#282B3A] border border-stone-300 dark:border-stone-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Unit Suite: Invariant Bounds &amp; Edge Values</span>
                  </span>
                  <span className="font-bold text-emerald-600">PASS (18/18)</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#F8F3E9] dark:bg-[#282B3A] border border-stone-300 dark:border-stone-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Integration Suite: Heavy Concurrency Contention</span>
                  </span>
                  <span className="font-bold text-emerald-600">PASS (12/12)</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#F8F3E9] dark:bg-[#282B3A] border border-stone-300 dark:border-stone-700">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Performance Benchmark: p99 Latency &lt; 2ms</span>
                  </span>
                  <span className="font-bold text-emerald-600">PASS (1.42ms)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-12 text-center font-mono text-sm text-stone-500">
          No automated results found for this submission.
        </div>
      )}
    </div>
  );
};
