import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { UserPlus, ShieldCheck, CheckCircle2, UserCheck, Key, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SuperAdminAppointmentsView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Institutional Accreditation & Audit Authority');
  const [appointedList, setAppointedList] = useState([
    {
      id: 'adm_01',
      name: 'Kavita Menon',
      email: 'kavita.ops@skillbridge.io',
      role: 'ADDITIONAL_ADMIN',
      scope: 'Institutional Operations & Org Accreditations',
      appointedAt: '2025-09-12'
    },
    {
      id: 'adm_02',
      name: 'Siddharth Roy',
      email: 'siddharth.runner@skillbridge.io',
      role: 'ADDITIONAL_ADMIN',
      scope: 'Automated Harness Sandbox & Security Operations',
      appointedAt: '2026-02-18'
    }
  ]);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleAppoint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newAdmin = {
      id: `adm_${Date.now()}`,
      name,
      email,
      role: 'ADDITIONAL_ADMIN',
      scope,
      appointedAt: new Date().toISOString().split('T')[0]
    };

    setAppointedList(prev => [newAdmin, ...prev]);
    setName('');
    setEmail('');
    setSuccessMsg(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => setSuccessMsg(false), 3000);
  };

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
          GOVERNANCE DELEGATION
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Appoint Additional Platform Administrators
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
          Super Administrators have exclusive prerogative to appoint and delegate administrative authority. Additional Admins execute scoped institutional audits, runner configuration, and dispute resolution.
        </p>
      </div>

      {/* Appointment Form */}
      <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966]">
        <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white mb-4 flex items-center gap-2">
          <UserPlus className="w-5 h-5 text-[#3657F0]" />
          <span>New Administrator Appointment Form</span>
        </h3>

        <form onSubmit={handleAppoint} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
                Candidate Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Jordan Bell"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] p-2 text-sm font-sans focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
                Official Institutional Email *
              </label>
              <input
                type="email"
                required
                placeholder="jordan.bell@skillbridge.io"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] p-2 text-sm font-sans focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#191A23] dark:text-white mb-1">
              Delegated Administrative Authority Scope *
            </label>
            <select
              value={scope}
              onChange={e => setScope(e.target.value)}
              className="w-full bg-white dark:bg-[#212330] border-2 border-[#191A23] p-2 text-sm font-sans focus:outline-hidden font-mono"
            >
              <option value="Institutional Accreditation & Audit Authority">
                Institutional Accreditation &amp; Audit Authority
              </option>
              <option value="Automated Harness Sandbox & Security Operations">
                Automated Harness Sandbox &amp; Security Operations
              </option>
              <option value="Dispute Resolution & Faculty Oversight">
                Dispute Resolution &amp; Faculty Oversight
              </option>
              <option value="Full Secondary Administrative Delegation">
                Full Secondary Administrative Delegation
              </option>
            </select>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {successMsg ? (
              <span className="font-mono text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Additional Administrator successfully appointed and minted to ledger!
              </span>
            ) : <span></span>}

            <button
              type="submit"
              className="px-6 py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-[#FFD966]" />
              <span>Sign &amp; Appoint Administrator</span>
            </button>
          </div>
        </form>
      </div>

      {/* Existing Appointed Admins List */}
      <div className="space-y-4">
        <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white border-b-2 border-[#191A23] dark:border-stone-700 pb-2">
          Active Appointed Additional Administrators ({appointedList.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointedList.map(adm => (
            <div
              key={adm.id}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                    {adm.name}
                  </h4>
                  <span className="font-mono text-xs text-stone-500">{adm.email}</span>
                </div>
                <span className="bg-purple-700 text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-[#191A23]">
                  ADDITIONAL ADMIN
                </span>
              </div>

              <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300 font-mono text-xs space-y-1">
                <span className="text-[10px] text-stone-500 uppercase block font-bold">DELEGATED SCOPE:</span>
                <p className="font-sans text-xs text-[#191A23] dark:text-stone-300 font-medium">
                  {adm.scope}
                </p>
              </div>

              <div className="flex items-center justify-between font-mono text-[11px] text-stone-500 pt-2 border-t border-stone-200 dark:border-stone-700">
                <span>Appointed: {adm.appointedAt}</span>
                <span className="text-emerald-600 font-bold">Active Standing</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
