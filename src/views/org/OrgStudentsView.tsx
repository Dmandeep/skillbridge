import React, { useState } from 'react';
import { GraduationCap, Search, Award, Download, Filter } from 'lucide-react';

export const OrgStudentsView: React.FC = () => {
  const [search, setSearch] = useState('');

  const students = [
    {
      id: 'usr_std_01',
      name: 'Aarav Sharma',
      email: 'aarav.sharma@institution.edu',
      idNum: 'AIT-CS-2023-0491',
      program: 'B.Tech CS (Systems)',
      year: 2027,
      verifiedSkills: 2,
      evidenceRepos: 4,
      status: 'Active'
    },
    {
      id: 'usr_std_02',
      name: 'Maya Lin',
      email: 'maya.lin@institution.edu',
      idNum: 'AIT-CS-2023-0182',
      program: 'B.Tech CS (AI & Systems)',
      year: 2027,
      verifiedSkills: 3,
      evidenceRepos: 3,
      status: 'Active'
    },
    {
      id: 'usr_std_03',
      name: 'Dev Patel',
      email: 'dev.patel27@student.apex.edu',
      idNum: 'AIT-CS-2023-0491',
      program: 'B.Tech CS',
      year: 2027,
      verifiedSkills: 1,
      evidenceRepos: 2,
      status: 'Pending Affiliation'
    }
  ];

  const filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.idNum.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 select-none">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
            ACADEMIC REGISTRY
          </span>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Enrolled Student Body ({students.length})
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
            Official roster of students affiliated with Apex Institute of Technology.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting Student Skill Registry as CSV...')}
          className="px-4 py-2 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#191A23] flex items-center gap-1.5"
        >
          <Download className="w-4 h-4" />
          <span>Export Registry</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border-2 border-[#191A23] flex items-center gap-2">
        <Search className="w-4 h-4 text-stone-500" />
        <input
          type="text"
          placeholder="Search by student name or ID..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-transparent text-sm font-sans focus:outline-hidden"
        />
      </div>

      {/* Students Table */}
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] overflow-x-auto">
        <table className="w-full text-left font-mono text-xs">
          <thead className="bg-[#191A23] text-white">
            <tr>
              <th className="p-3">STUDENT NAME</th>
              <th className="p-3">STUDENT ID</th>
              <th className="p-3">PROGRAM / YEAR</th>
              <th className="p-3 text-center">TIER 3 VERIFIED</th>
              <th className="p-3 text-center">EVIDENCE REPOS</th>
              <th className="p-3">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
            {filtered.map(s => (
              <tr key={s.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                <td className="p-3">
                  <strong className="text-sm font-sans block text-[#191A23] dark:text-white">{s.name}</strong>
                  <span className="text-[10px] text-stone-500">{s.email}</span>
                </td>
                <td className="p-3 font-bold text-[#3657F0] dark:text-[#FFD966]">{s.idNum}</td>
                <td className="p-3 text-stone-700 dark:text-stone-300">{s.program} ({s.year})</td>
                <td className="p-3 text-center">
                  <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 font-bold">
                    {s.verifiedSkills} Skills
                  </span>
                </td>
                <td className="p-3 text-center font-bold">{s.evidenceRepos}</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 font-bold uppercase text-[10px] border border-[#191A23] ${
                    s.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-[#FFD966] text-[#191A23]'
                  }`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
