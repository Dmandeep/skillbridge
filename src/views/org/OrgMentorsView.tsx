import React from 'react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { Users, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';

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
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            ACADEMIC FACULTY DIRECTORY
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Faculty Mentors &amp; Lead Evaluators ({mentors.length})
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
            Accredited faculty authorized to execute human-in-the-loop rubric reviews and issue cryptographic seals.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentors.map(m => (
          <StaggerItem key={m.id}>
            <TiltCard tiltAmount={5}>
              <div
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] space-y-4 h-full"
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
                  <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-3 border border-stone-300 dark:border-stone-700">
                    <span className="text-[10px] text-stone-500 block uppercase">Mentees</span>
                    <strong className="text-[#191A23] dark:text-white text-base">{m.assignedMentees} Assigned</strong>
                  </div>
                  <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-3 border border-stone-300 dark:border-stone-700">
                    <span className="text-[10px] text-stone-500 block uppercase">Seals Minted</span>
                    <strong className="text-emerald-500 text-base">{m.verifiedSubmissions} Stamped</strong>
                  </div>
                  <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-3 border border-stone-300 dark:border-stone-700">
                    <span className="text-[10px] text-stone-500 block uppercase">Turnaround</span>
                    <strong className="text-[#3657F0] text-sm">{m.avgTurnaround}</strong>
                  </div>
                  <div className="bg-[#F8F3E9] dark:bg-[#282B3A] p-3 border border-stone-300 dark:border-stone-700">
                    <span className="text-[10px] text-stone-500 block uppercase">Faculty Rating</span>
                    <strong className="text-[#FF7138] text-sm">{m.rating}</strong>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};
