import React from 'react';
import { useData } from '../../context/DataContext';
import { 
  FileSpreadsheet, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  Search 
} from 'lucide-react';

export const MentorAssessmentsView: React.FC = () => {
  const { submissions } = useData();

  return (
    <div className="space-y-6 select-none">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
          AUTOMATED RUNNER LOG AUDIT
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Automated Assessment Reports &amp; Stress Runs
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Review automated sanity checks, unit suites, performance benchmarks, and code anomalies across all mentee submissions.
        </p>
      </div>

      <div className="space-y-4">
        {submissions.map(sub => (
          <div
            key={sub.id}
            className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[3px_3px_0px_#191A23] space-y-3 font-mono text-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-700 pb-2">
              <span className="font-bold text-sm text-[#191A23] dark:text-white">
                {sub.title} ({sub.studentName})
              </span>
              <span className="bg-[#191A23] text-[#FFD966] px-2 py-0.5 text-[10px]">
                HARNESS: RUNNER-v3.4
              </span>
            </div>

            {sub.automatedTestResults ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-2 border border-stone-300">
                  <span className="text-[10px] text-stone-500 block">TESTS</span>
                  <strong className="text-emerald-600 text-sm">{sub.automatedTestResults.testPassed}/{sub.automatedTestResults.testTotal} Passed</strong>
                </div>
                <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-2 border border-stone-300">
                  <span className="text-[10px] text-stone-500 block">COVERAGE</span>
                  <strong className="text-[#3657F0] text-sm">{sub.automatedTestResults.codeCoveragePercent}%</strong>
                </div>
                <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-2 border border-stone-300">
                  <span className="text-[10px] text-stone-500 block">COMPLEXITY</span>
                  <strong className="text-sm">{sub.automatedTestResults.cyclomaticComplexity}</strong>
                </div>
                <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-2 border border-stone-300">
                  <span className="text-[10px] text-stone-500 block">EXEC LATENCY</span>
                  <strong className="text-sm">{sub.automatedTestResults.executionTimeMs}ms</strong>
                </div>
              </div>
            ) : (
              <p className="text-stone-500">No telemetry recorded.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
