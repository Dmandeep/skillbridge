import React from 'react';
import { Building, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const OrgProgramsView: React.FC = () => {
  const tracks = [
    {
      title: 'Distributed Systems & Infrastructure Engineering',
      duration: '4 Semesters',
      benchmarks: ['Raft Consensus KV Store', 'Service Mesh Controller', 'gRPC Microservices'],
      studentsCount: 240,
      completionRate: '91%'
    },
    {
      title: 'High-Performance Frontend & UI Engineering',
      duration: '3 Semesters',
      benchmarks: ['DOM Virtualization 100k Rows', 'React 19 Concurrent Scheduler', 'WebAssembly Parser'],
      studentsCount: 310,
      completionRate: '88%'
    },
    {
      title: 'Vector Databases & Applied Machine Learning Systems',
      duration: '4 Semesters',
      benchmarks: ['HNSW AVX2 Indexer', 'Transformer Model Quantization', 'Streaming Feature Store'],
      studentsCount: 180,
      completionRate: '94%'
    }
  ];

  return (
    <div className="space-y-6 select-none">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
          CURRICULUM BENCHMARKS
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Academic Engineering Programs &amp; Capstone Tracks
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Standardized skill progression curricula with pre-configured automated runner test harnesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((t, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] space-y-4"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase bg-[#FFD966] text-[#191A23] px-2 py-0.5 border border-[#191A23]">
                {t.duration}
              </span>
              <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mt-2">
                {t.title}
              </h3>
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              <span className="text-[10px] text-stone-500 uppercase block font-bold">Key Capstone Assertions:</span>
              {t.benchmarks.map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-700 flex justify-between font-mono text-xs">
              <span>{t.studentsCount} Candidates</span>
              <strong className="text-emerald-600">{t.completionRate} Pass Rate</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
