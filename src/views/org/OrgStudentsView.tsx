import React, { useState } from 'react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { 
  GraduationCap, 
  Search, 
  Download, 
  BookOpenCheck, 
  CheckCircle2
} from 'lucide-react';

export const OrgStudentsView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [assignmentNotice, setAssignmentNotice] = useState<string | null>(null);

  const initialStudents = [
    {
      id: 'usr_std_01',
      name: 'Aarav Sharma',
      email: 'aarav.sharma@institution.edu',
      idNum: 'AIT-CS-2023-0491',
      program: 'B.Tech CS (Systems)',
      year: 2027,
      verifiedSkills: 2,
      evidenceRepos: 4,
      status: 'Active',
      assignedTeacher: 'Dr. Elena Rostova'
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
      status: 'Active',
      assignedTeacher: 'Prof. David Vance'
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
      status: 'Pending Affiliation',
      assignedTeacher: 'Dr. Elena Rostova'
    }
  ];

  const [studentList, setStudentList] = useState(initialStudents);

  const facultyOptions = [
    'Dr. Elena Rostova',
    'Prof. David Vance',
    'Unassigned'
  ];

  const handleAssignTeacher = (studentId: string, studentName: string, teacherName: string) => {
    setStudentList(prev =>
      prev.map(s => (s.id === studentId ? { ...s, assignedTeacher: teacherName } : s))
    );
    setAssignmentNotice(`Assigned ${studentName} to ${teacherName}. Project submissions will now route to their review desk.`);
    setTimeout(() => setAssignmentNotice(null), 4000);
  };

  const filtered = studentList.filter(
    s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.idNum.toLowerCase().includes(search.toLowerCase()) ||
      s.assignedTeacher.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 select-none">
      {/* Header Banner */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
              COLLEGE STUDENT DIRECTORY
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
              Enrolled Students ({studentList.length})
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
              Manage student enrollments and assign dedicated faculty teachers to mentor and review student code.
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

      {/* Assignment Success Notification */}
      {assignmentNotice && (
        <div className="bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 p-3.5 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-200 flex items-center gap-2 shadow-[2px_2px_0px_#191A23]">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{assignmentNotice}</span>
        </div>
      )}

      {/* Search Bar */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] dark:border-[#3B3E54] p-3 flex items-center gap-2">
          <Search className="w-4 h-4 text-stone-500" />
          <input
            type="text"
            placeholder="Search by student name, roll number, or assigned teacher..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent font-mono text-xs focus:outline-hidden text-[#191A23] dark:text-white"
          />
        </div>
      </ScrollReveal>

      {/* Roster Table with Assigned Teacher Dropdown */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#191A23] text-white uppercase text-[11px] border-b-2 border-[#191A23]">
                <th className="p-3.5">Student</th>
                <th className="p-3.5">Student ID</th>
                <th className="p-3.5">Degree Program</th>
                <th className="p-3.5">Assigned Teacher</th>
                <th className="p-3.5 text-center">Verified Skills</th>
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
                  <td className="p-3.5 text-stone-600 dark:text-stone-300">{s.program}</td>
                  <td className="p-3.5">
                    <div className="flex items-center gap-1.5">
                      <BookOpenCheck className="w-3.5 h-3.5 text-[#3657F0]" />
                      <select
                        value={s.assignedTeacher}
                        onChange={e => handleAssignTeacher(s.id, s.name, e.target.value)}
                        className="bg-[#F8F3E9] dark:bg-[#1E202B] border border-[#191A23] dark:border-stone-600 px-2 py-1 text-xs font-mono font-bold text-[#191A23] dark:text-white cursor-pointer focus:outline-hidden"
                      >
                        {facultyOptions.map(t => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-500">{s.verifiedSkills} Skills</td>
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
