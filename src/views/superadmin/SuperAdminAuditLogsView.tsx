import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { ScrollText, Search, ShieldCheck, Filter, Hash, Database, RefreshCw, Radio } from 'lucide-react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';

export const SuperAdminAuditLogsView: React.FC = () => {
  const { auditLogs } = useData();
  const [filterType, setFilterType] = useState('ALL');
  const [search, setSearch] = useState('');

  const filteredLogs = auditLogs.filter(log => {
    const matchesType = filterType === 'ALL' || log.entityType === filterType;
    const matchesSearch =
      log.actorName.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.details.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Header Banner */}
      <ScrollReveal direction="down" duration={0.6}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              TAMPER-EVIDENT PROTOCOL LEDGER
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-500 text-white border border-[#191A23]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE BLOCK STREAM
            </span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Cryptographic Platform Audit Trail
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
            Every critical state transition—mentor verification attestation, recruiter access consent, organizational admission, and administrator appointment—is permanently committed to an immutable append-only ledger.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter and Search Bar */}
      <ScrollReveal direction="up" duration={0.5} delay={0.1}>
        <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 bg-white dark:bg-[#212330] border-2 border-[#191A23] px-3 py-2 flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search by actor name, action, or block..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-transparent text-xs font-sans focus:outline-hidden text-[#191A23] dark:text-white placeholder:text-stone-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-600 dark:text-stone-400">Entity Scope:</span>
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] px-3 py-2 font-bold text-[#191A23] dark:text-white cursor-pointer"
            >
              <option value="ALL">All Event Types</option>
              <option value="VERIFICATION">Verification Attestations</option>
              <option value="PERMISSION">Recruiter Permissions</option>
              <option value="ORGANIZATION">Institutional Admittance</option>
              <option value="ROLE_APPOINTMENT">Role Delegations</option>
            </select>
          </div>
        </div>
      </ScrollReveal>

      {/* Audit Log Table */}
      <ScrollReveal direction="up" duration={0.6} delay={0.15}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-[#191A23] text-white">
              <tr>
                <th className="p-3 border-r border-stone-800">BLOCK #</th>
                <th className="p-3 border-r border-stone-800">TIMESTAMP</th>
                <th className="p-3 border-r border-stone-800">ACTOR &amp; ROLE</th>
                <th className="p-3 border-r border-stone-800">ACTION EVENT</th>
                <th className="p-3 border-r border-stone-800">AUDIT DETAILS</th>
                <th className="p-3">IP HASH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-stone-50 dark:hover:bg-[#1E202B] transition-colors group">
                  <td className="p-3 font-bold text-[#3657F0] dark:text-[#FFD966] whitespace-nowrap">
                    <span className="bg-[#F8F3E9] dark:bg-[#1E202B] px-1.5 py-0.5 border border-[#191A23] inline-block">
                      #{log.immutableBlockIndex}
                    </span>
                  </td>
                  <td className="p-3 text-stone-500 text-[11px] whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <strong className="text-[#191A23] dark:text-white block font-sans">{log.actorName}</strong>
                    <span className="text-[10px] bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 px-1 py-0.2 font-mono">
                      {log.actorRole}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 border border-emerald-300 dark:border-emerald-800 inline-block">
                      {log.action}
                    </span>
                  </td>
                  <td className="p-3 font-sans text-xs text-stone-700 dark:text-stone-300 max-w-sm">
                    {log.details}
                  </td>
                  <td className="p-3 text-stone-500 text-[10px] font-mono group-hover:text-[#3657F0] transition-colors">
                    {log.ipHash}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>
    </div>
  );
};
