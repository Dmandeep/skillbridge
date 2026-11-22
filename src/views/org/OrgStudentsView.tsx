import React, { useState } from 'react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
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
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              ACADEMIC REGISTRY
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
              Enrolled Student Body ({students.length})
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
              Official roster of students affiliated with Apex Institute of Technology.
            </p>
          </div>

          <button
            onClick={() => alert('Exporting full institutional CSV roster...')}
            className="px-4 py-2 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export Roster CSV</span>
          </button>
        </div>
      </ScrollReveal>

      {/* Search Bar */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] dark:border-[#3B3E54] p-3 flex items-center gap-2">
          <Search className="w-4 h-4 text-stone-500" />
          <input
            type="text"
            placeholder="Search by student name or roll number (e.g. AIT-CS)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent font-mono text-xs focus:outline-hidden text-[#191A23] dark:text-white"
          />
        </div>
      </ScrollReveal>

      {/* Roster Table */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#191A23] text-white uppercase text-[11px] border-b-2 border-[#191A23]">
                <th className="p-3.5">Student</th>
                <th className="p-3.5">Student ID</th>
                <th className="p-3.5">Degree Program</th>
                <th className="p-3.5 text-center">Verified Skills</th>
                <th className="p-3.5 text-center">Repositories</th>
                <th className="p-3.5 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr
                  key={s.id}
                  className="border-b border-stone-200 dark:border-stone-700 hover:bg-[#F8F3E9] dark:hover:bg-[#282B3A] transition-colors"
                >
                  <td className="p-3.5 font-bold font-sans text-sm text-[#191A23] dark:text-white">
                    {s.name}
                    <span className="block font-mono text-[10px] text-stone-500 font-normal">{s.email}</span>
                  </td>
                  <td className="p-3.5 text-stone-600 dark:text-stone-300">{s.idNum}</td>
                  <td className="p-3.5 text-stone-600 dark:text-stone-300">{s.program} (Class of {s.year})</td>
                  <td className="p-3.5 text-center font-bold text-emerald-500">{s.verifiedSkills} Tier 3</td>
                  <td className="p-3.5 text-center font-bold text-[#3657F0] dark:text-[#FFD966]">{s.evidenceRepos}</td>
                  <td className="p-3.5 text-right">
                    <span className={`px-2 py-0.5 text-[10px] font-bold ${s.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-[#FFD966] text-[#191A23]'}`}>
                      {s.status}
                    </span>
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
