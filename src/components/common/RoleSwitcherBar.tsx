import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { UserRole } from '../../types';
import { 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Briefcase, 
  Globe2, 
  Sparkles
} from 'lucide-react';

export const RoleSwitcherBar: React.FC = () => {
  const { currentRole, switchRole } = useAuthRole();

  const roles: { role: UserRole; label: string; icon: React.ReactNode; color: string }[] = [
    { role: 'PUBLIC', label: 'Home Page', icon: <Globe2 className="w-3.5 h-3.5" />, color: 'bg-stone-200 text-[#191A23]' },
    { role: 'STUDENT', label: 'Student', icon: <GraduationCap className="w-3.5 h-3.5" />, color: 'bg-[#3657F0] text-white' },
    { role: 'MENTOR', label: 'Teacher / Mentor', icon: <BookOpenCheck className="w-3.5 h-3.5" />, color: 'bg-[#FF7138] text-white' },
    { role: 'ORG_ADMIN', label: 'College Admin', icon: <Building2 className="w-3.5 h-3.5" />, color: 'bg-[#FFD966] text-[#191A23]' },
    { role: 'RECRUITER', label: 'Recruiter / Company', icon: <Briefcase className="w-3.5 h-3.5" />, color: 'bg-emerald-600 text-white' },
  ];

  return (
    <div className="bg-[#191A23] text-white border-b-2 border-[#191A23] py-1.5 px-3 flex flex-wrap items-center justify-between gap-2 text-xs select-none sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 font-mono font-bold uppercase tracking-wider text-[#FFD966] bg-[#3657F0] px-2 py-0.5 border border-white/20 text-[11px]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIEW DEMO AS</span>
        </span>
        <span className="hidden sm:inline font-mono text-[11px] text-stone-300">
          Click any role to see their simplified, easy-to-use dashboard:
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {roles.map(r => {
          const isActive = currentRole === r.role;
          return (
            <button
              key={r.role}
              onClick={() => switchRole(r.role)}
              className={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold tracking-tight transition-all border cursor-pointer ${
                isActive 
                  ? `${r.color} border-white shadow-[2px_2px_0px_#FFD966] scale-105` 
                  : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {r.icon}
              <span>{r.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
