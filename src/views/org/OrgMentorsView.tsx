import React from 'react';
import { Users, ShieldCheck, Clock, Award } from 'lucide-react';

export const OrgMentorsView: React.FC = () => {
  const mentors = [
    {
      id: 'usr_men_01',
      name: 'Dr. Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      role: 'Associate Professor & Systems Lead',
      assignedMentees: 18,
      verifiedSubmissions: 42,
      avgTurnaround: '18.4 hrs',
      rating: '4.95 / 5.0'
    },
    {
      id: 'usr_men_02',
      name: 'Prof. David Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      role: 'Lead Evaluator, AI & ML',
      assignedMentees: 22,
      verifiedSubmissions: 38,
      avgTurnaround: '21.0 hrs',
      rating: '4.88 / 5.0'
    }
  ];

  return (
    <div className="space-y-6 select-none">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
          ACADEMIC FACULTY DIRECTORY
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Faculty Mentors &amp; Lead Evaluators ({mentors.length})
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          Accredited faculty authorized to execute human-in-the-loop rubric reviews and issue cryptographic seals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentors.map(m => (
          <div
            key={m.id}
            className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[4px_4px_0px_#191A23] space-y-4"
          >
            <div className="flex items-center gap-4 border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
              <img
                src={m.avatar}
                alt={m.name}
                className="w-14 h-14 object-cover border-2 border-[#191A23]"
              />
              <div>
                <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                  {m.name}
                </h3>
                <span className="font-mono text-xs text-[#3657F0] dark:text-[#FFD966] font-bold">
                  {m.role}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300">
                <span className="text-stone-500 text-[10px] block">ASSIGNED MENTEES</span>
                <strong className="text-base text-[#191A23] dark:text-white">{m.assignedMentees} Students</strong>
              </div>
              <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300">
                <span className="text-stone-500 text-[10px] block">VERIFICATIONS MINTED</span>
                <strong className="text-base text-emerald-600">{m.verifiedSubmissions}</strong>
              </div>
              <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300">
                <span className="text-stone-500 text-[10px] block">TURNAROUND VELOCITY</span>
                <strong className="text-base text-[#FF7138]">{m.avgTurnaround}</strong>
              </div>
              <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-2.5 border border-stone-300">
                <span className="text-stone-500 text-[10px] block">EVALUATOR RATING</span>
                <strong className="text-base text-[#3657F0]">{m.rating}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
