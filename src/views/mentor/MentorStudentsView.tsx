import React from 'react';
import { useData } from '../../context/DataContext';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  FolderGit2, 
  ExternalLink,
  Search,
  Sparkles 
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
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
              FACULTY ADVISEES
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
              Assigned Student Mentees ({students.length})
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
              Roster of students under your direct verification and evaluation purview.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Advisee Cards Grid */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map(std => (
          <StaggerItem key={std.id}>
            <TiltCard tiltAmount={6}>
              <div
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 space-y-4 h-full flex flex-col justify-between transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3 border-b-2 border-stone-200 dark:border-stone-700 pb-4 mb-3">
                    <img
                      src={std.avatar}
                      alt={std.name}
                      className="w-14 h-14 object-cover border-2 border-[#191A23]"
                    />
                    <div>
                      <strong className="text-base font-display font-black block text-[#191A23] dark:text-white">
                        {std.name}
                      </strong>
                      <span className="font-mono text-xs text-[#3657F0] dark:text-[#FFD966]">
                        {std.track}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Verified Skills:</span>
                      <strong className="text-emerald-500 font-bold">{std.verifiedCount} Tier 3</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Pending Submissions:</span>
                      <strong className="text-[#FF7138] font-bold">{std.pendingCount} in queue</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Avg Test Coverage:</span>
                      <strong className="text-[#191A23] dark:text-white font-bold">{std.avgCoverage}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between">
                  <span className="bg-[#FFD966] text-[#191A23] font-mono text-[10px] font-bold px-2 py-0.5 border border-[#191A23]">
                    {std.status}
                  </span>
                  <span className="font-mono text-xs text-[#3657F0] dark:text-[#FFD966] font-bold hover:underline cursor-pointer">
                    Inspect Portfolio &rarr;
                  </span>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};
