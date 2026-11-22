import React, { useState } from 'react';
import { Sliders, Save, CheckCircle2, ShieldCheck } from 'lucide-react';

export const SuperAdminSettingsView: React.FC = () => {
  const [minCoverage, setMinCoverage] = useState(85);
  const [maxComplexity, setMaxComplexity] = useState(10);
  const [sandboxTimeout, setSandboxTimeout] = useState(30);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 select-none max-w-4xl mx-auto">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
          ENGINE GOVERNANCE
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Automated Runner &amp; Protocol Parameters
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Configure baseline thresholds for automated test execution, AST cyclomatic complexity limits, and sandbox isolation timeouts.
        </p>
      </div>

      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[4px_4px_0px_#191A23]">
        <form onSubmit={handleSave} className="space-y-4 font-mono text-xs">
          <div>
            <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
              Minimum Required Code Coverage for Tier 2 Advance (%):
            </label>
            <input
              type="number"
              min="50"
              max="100"
              value={minCoverage}
              onChange={e => setMinCoverage(Number(e.target.value))}
              className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2"
            />
            <span className="text-[10px] text-stone-500">Submissions below this threshold are flagged for missing unit tests.</span>
          </div>

          <div>
            <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
              Maximum Cyclomatic Complexity Threshold:
            </label>
            <input
              type="number"
              min="5"
              max="25"
              value={maxComplexity}
              onChange={e => setMaxComplexity(Number(e.target.value))}
              className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2"
            />
            <span className="text-[10px] text-stone-500">Functions exceeding this threshold trigger high complexity warnings.</span>
          </div>

          <div>
            <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
              Sandbox Runner Execution Timeout (Seconds):
            </label>
            <input
              type="number"
              min="10"
              max="120"
              value={sandboxTimeout}
              onChange={e => setSandboxTimeout(Number(e.target.value))}
              className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2"
            />
            <span className="text-[10px] text-stone-500">Prevents infinite loops or CPU exhaustion attacks in test suites.</span>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-stone-200 dark:border-stone-700">
            {saved ? (
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Parameters saved successfully.
              </span>
            ) : <span></span>}

            <button
              type="submit"
              className="px-6 py-2 bg-[#3657F0] text-white font-bold uppercase border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23]"
            >
              Save Parameters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
