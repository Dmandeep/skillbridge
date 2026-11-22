import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Download, Plus } from 'lucide-react';

export const SuperAdminOrgsView: React.FC = () => {
  const orgs = [
    {
      id: 'org_01',
      name: 'Apex Institute of Technology',
      domain: 'apex.edu',
      studentsCount: 1420,
      mentorsCount: 24,
      status: 'ACCREDITED',
      joinedAt: '2025-06-01'
    },
    {
      id: 'org_02',
      name: 'Dublin City Polytech',
      domain: 'dcp.ie',
      studentsCount: 890,
      mentorsCount: 16,
      status: 'ACCREDITED',
      joinedAt: '2025-08-15'
    },
    {
      id: 'org_03',
      name: 'Pacific Institute of Advanced Computing',
      domain: 'piac.edu.sg',
      studentsCount: 650,
      mentorsCount: 12,
      status: 'PENDING_AUDIT',
      joinedAt: '2026-10-04'
    }
  ];

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            INSTITUTIONAL TRUST DIRECTORY
          </span>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Accredited Universities &amp; Colleges ({orgs.length})
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
            Educational institutions approved to verify and mint student engineering credentials.
          </p>
        </div>

        <button
          onClick={() => alert('Onboarding new university portal...')}
          className="px-4 py-2 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#191A23] flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Accredit Institution</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orgs.map(o => (
          <div
            key={o.id}
            className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] space-y-3"
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] bg-stone-200 dark:bg-stone-700 px-1.5 py-0.5 font-bold">
                {o.domain}
              </span>
              <span className={`font-mono text-[10px] font-bold px-2 py-0.5 border border-[#191A23] ${
                o.status === 'ACCREDITED' ? 'bg-emerald-500 text-white' : 'bg-[#FFD966] text-[#191A23]'
              }`}>
                {o.status}
              </span>
            </div>

            <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              {o.name}
            </h3>

            <div className="font-mono text-xs space-y-1 text-stone-600 dark:text-stone-400 bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300">
              <div className="flex justify-between">
                <span>Enrolled Students:</span>
                <strong className="text-[#191A23] dark:text-white">{o.studentsCount}</strong>
              </div>
              <div className="flex justify-between">
                <span>Accredited Mentors:</span>
                <strong className="text-[#3657F0]">{o.mentorsCount}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
