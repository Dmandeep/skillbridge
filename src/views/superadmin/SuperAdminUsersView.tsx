import React, { useState } from 'react';
import { MOCK_USERS } from '../../constants/mockData';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { Users, Search, ShieldCheck, UserCheck, MoreVertical, Sparkles } from 'lucide-react';

export const SuperAdminUsersView: React.FC = () => {
  const [users] = useState(Object.values(MOCK_USERS));
  const [search, setSearch] = useState('');

  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.role.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            GLOBAL DIRECTORY
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Network User Directory ({users.length})
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Manage roles, suspend accounts, and view verified statuses across all 6 platform participant categories.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border-2 border-[#191A23] dark:border-[#3B3E54] flex items-center gap-2">
          <Search className="w-4 h-4 text-stone-500" />
          <input
            type="text"
            placeholder="Filter by user name or role..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent text-xs font-sans focus:outline-hidden font-mono text-[#191A23] dark:text-white"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-[#191A23] text-white">
              <tr>
                <th className="p-3.5">USER NAME &amp; EMAIL</th>
                <th className="p-3.5">ASSIGNED ROLE</th>
                <th className="p-3.5">ORGANIZATION AFFILIATION</th>
                <th className="p-3.5">JOINED DATE</th>
                <th className="p-3.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
              {filtered.map(u => (
                <tr key={u.id} className="hover:bg-[#F8F3E9] dark:hover:bg-[#282B3A] transition-colors">
                  <td className="p-3.5 flex items-center gap-3">
                    <img src={u.avatar} alt={u.name} className="w-9 h-9 object-cover border border-[#191A23]" />
                    <div>
                      <strong className="text-sm font-sans block text-[#191A23] dark:text-white">{u.name}</strong>
                      <span className="text-[10px] text-stone-500">{u.email}</span>
                    </div>
                  </td>
                  <td className="p-3.5">
                    <span className="bg-[#191A23] text-[#FFD966] px-2 py-0.5 font-bold uppercase text-[10px] border border-[#191A23]">
                      {u.role}
                    </span>
                  </td>
                  <td className="p-3.5 text-stone-700 dark:text-stone-300">
                    {u.organizationName || 'Independent Participant'}
                  </td>
                  <td className="p-3.5 text-stone-500">{u.createdAt}</td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => alert(`Inspecting permissions for ${u.name}`)}
                      className="px-2 py-1 bg-[#F8F3E9] dark:bg-[#1E202B] border border-[#191A23] text-[10px] font-bold uppercase hover:bg-[#3657F0] hover:text-white cursor-pointer transition-colors"
                    >
                      Audit
                    </button>
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
