import React from 'react';
import { useData } from '../../context/DataContext';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  FolderGit2, 
  ExternalLink,
  Search
} from 'lucide-react';

export const MentorStudentsView: React.FC = () => {
  const students = [
    {
      id: 'usr_std_01',
      name: 'Aarav Sharma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      track: 'Distributed Systems & Go',
      verifiedCount: 2,
      pendingCount: 1,
      avgCoverage: '95.8%',
      status: 'On Track'
    },
    {
      id: 'usr_std_02',
      name: 'Maya Lin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      track: 'Vector Databases & C++',
      verifiedCount: 3,
      pendingCount: 0,
      avgCoverage: '93.2%',
      status: 'Excelling'
    },
    {
      id: 'usr_std_03',
      name: 'Dev Patel',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
      track: 'React 19 & Web Architecture',
      verifiedCount: 1,
      pendingCount: 2,
      avgCoverage: '89.4%',
      status: 'In Review'
    }
  ];

  return (
    <div className="space-y-6 select-none">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            FACULTY ADVISEES
          </span>
          <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
            Assigned Student Mentees ({students.length})
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
            Roster of students under your direct verification and evaluation purview.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map(std => (
          <div
            key={std.id}
            className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-3 border-b-2 border-[#191A23] dark:border-stone-700 pb-3 mb-3">
                <img
                  src={std.avatar}
                  alt={std.name}
                  className="w-12 h-12 object-cover border-2 border-[#191A23]"
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                    {std.name}
                  </h3>
                  <span className="font-mono text-xs text-[#3657F0] dark:text-[#FFD966] font-bold">
                    {std.track}
                  </span>
                </div>
              </div>

              <div className="font-mono text-xs space-y-2 text-stone-700 dark:text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-500">Verified Competencies:</span>
                  <strong className="text-emerald-600">{std.verifiedCount} Skills</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Submissions In Queue:</span>
                  <strong className="text-[#FF7138]">{std.pendingCount}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Avg Test Harness:</span>
                  <strong>{std.avgCoverage}</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert(`Opening student dossier for ${std.name}`)}
              className="w-full py-2 bg-[#F8F3E9] dark:bg-[#282B3A] text-[#191A23] dark:text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase hover:bg-[#3657F0] hover:text-white transition-colors"
            >
              View Advisee Dossier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
