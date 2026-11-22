import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { UserRole } from '../../types';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  LogIn, 
  Sparkles, 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  Briefcase, 
  ShieldAlert, 
  UserCheck,
  ArrowRight,
  Shield,
  Info
} from 'lucide-react';

export const LoginView: React.FC = () => {
  const { switchRole } = useAuthRole();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickRoles: { role: UserRole; name: string; title: string; color: string; icon: React.ReactNode }[] = [
    { role: 'STUDENT', name: 'Aarav Sharma', title: 'Student Apprentice', color: 'border-l-8 border-l-[#3657F0]', icon: <GraduationCap className="w-5 h-5 text-[#3657F0]" /> },
    { role: 'MENTOR', name: 'Dr. Elena Rostova', title: 'Lead Faculty Evaluator', color: 'border-l-8 border-l-[#FF7138]', icon: <BookOpenCheck className="w-5 h-5 text-[#FF7138]" /> },
    { role: 'ORG_ADMIN', name: 'Marcus Vance', title: 'Dean of Computing', color: 'border-l-8 border-l-[#FFD966]', icon: <Building2 className="w-5 h-5 text-[#191A23]" /> },
    { role: 'RECRUITER', name: 'Sophia Chen', title: 'Senior Talent Partner', color: 'border-l-8 border-l-emerald-600', icon: <Briefcase className="w-5 h-5 text-emerald-600" /> },
    { role: 'SUPER_ADMIN', name: 'Devon Kester', title: 'Root Protocol Architect', color: 'border-l-8 border-l-[#191A23]', icon: <ShieldAlert className="w-5 h-5 text-purple-600" /> },
    { role: 'ADDITIONAL_ADMIN', name: 'Kavita Menon', title: 'Operations Admin', color: 'border-l-8 border-l-purple-700', icon: <UserCheck className="w-5 h-5 text-purple-700" /> },
  ];

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      switchRole('STUDENT');
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 select-none pb-14">
      {/* Top Banner */}
      <ScrollReveal direction="down">
        <div className="bg-[#FFD966] text-[#191A23] border-4 border-[#191A23] shadow-[6px_6px_0px_#191A23] p-6 sm:p-8 text-center space-y-3">
          <span className="font-mono text-xs font-black uppercase tracking-wider bg-[#3657F0] text-white px-3 py-1 border border-[#191A23] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
            <span>INTERACTIVE DEMO ENVIRONMENT</span>
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight">
            Sign In to SkillBridge
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#191A23]/80 max-w-lg mx-auto font-medium leading-relaxed">
            Choose a pre-configured persona below to immediately enter their purpose-built workspace, inspection rubrics, and permission tiers.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-[#191A23]/70 text-[#191A23] dark:text-[#FFD966] px-3 py-1 text-[11px] font-mono border border-[#191A23]/30">
            <Info className="w-3.5 h-3.5 text-[#3657F0]" />
            <span>Frontend Prototype Mode: Authentication is client-side simulated with mock profiles.</span>
          </div>
        </div>
      </ScrollReveal>

      {/* 1-Click Persona Grid with Staggered Entrance */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-2">
            <span className="font-mono text-xs font-bold uppercase text-stone-600 dark:text-stone-300">
              One-Click Instant Persona Sign-In:
            </span>
            <span className="font-mono text-[10px] text-stone-500">6 ROLES AVAILABLE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickRoles.map(q => (
              <TiltCard key={q.role} tiltAmount={6} onClick={() => switchRole(q.role)}>
                <div
                  className={`bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-4 text-left transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#191A23] cursor-pointer h-full flex flex-col justify-between ${q.color}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      {q.icon}
                      <span className="font-mono text-[9px] font-black uppercase bg-[#191A23] text-[#FFD966] px-2 py-0.5 border border-[#191A23]">
                        {q.role.replace('_', ' ')}
                      </span>
                    </div>
                    <strong className="font-display font-black text-lg text-[#191A23] dark:text-white block">
                      {q.name}
                    </strong>
                    <span className="font-sans text-xs text-stone-600 dark:text-stone-400 block mt-0.5">
                      {q.title}
                    </span>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between font-mono text-[11px] text-[#3657F0] dark:text-[#FFD966] font-bold">
                    <span>Launch Workspace</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Manual Fallback Form */}
      <ScrollReveal direction="up" delay={0.25}>
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-6 sm:p-8 space-y-5">
          <div className="border-b-2 border-stone-200 dark:border-stone-700 pb-3">
            <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white">
              Or Sign In with Email (Demo Form)
            </h2>
            <p className="font-sans text-xs text-stone-500">
              Submit any email to enter the student experience in simulation mode.
            </p>
          </div>

          <form onSubmit={handleManualLogin} className="space-y-4">
            <div>
              <label className="block font-mono text-xs font-bold uppercase mb-1.5 text-stone-700 dark:text-stone-300">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="candidate@university.edu"
                className="w-full p-3 bg-[#F8F3E9] dark:bg-[#191A23] border-2 border-[#191A23] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3657F0]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs font-bold uppercase mb-1.5 text-stone-700 dark:text-stone-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full p-3 bg-[#F8F3E9] dark:bg-[#191A23] border-2 border-[#191A23] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#3657F0]"
              />
            </div>

            <div className="pt-2">
              <MagneticButton
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-[#FFD966]" />
                <span>{isLoading ? 'Simulating Authentication...' : 'Enter Student Workspace'}</span>
              </MagneticButton>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
};
