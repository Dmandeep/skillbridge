import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Download, Plus, Award, Users, BookOpen } from 'lucide-react';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { AnimatedCounter } from '../../animations/typography/AnimatedCounter';

export const SuperAdminOrgsView: React.FC = () => {
  const orgs = [
    {
      id: 'org_01',
      name: 'Apex Institute of Technology',
      domain: 'apex.edu',
      studentsCount: 1420,
      mentorsCount: 24,
      status: 'ACCREDITED',
      joinedAt: '2025-06-01',
      region: 'North America / Tier 1'
    },
    {
      id: 'org_02',
      name: 'Dublin City Polytech',
      domain: 'dcp.ie',
      studentsCount: 890,
      mentorsCount: 16,
      status: 'ACCREDITED',
      joinedAt: '2025-08-15',
      region: 'European Union / ECTS'
    },
    {
      id: 'org_03',
      name: 'Pacific Institute of Advanced Computing',
      domain: 'piac.edu.sg',
      studentsCount: 650,
      mentorsCount: 12,
      status: 'PENDING_AUDIT',
      joinedAt: '2026-10-04',
      region: 'Asia-Pacific / ABET'
    }
  ];

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Header Banner */}
      <ScrollReveal direction="down" duration={0.6}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3657F0] dark:text-[#FFD966]">
                INSTITUTIONAL TRUST DIRECTORY
              </span>
              <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-500">
                ACTIVE CONSORTIUM
              </span>
            </div>
            <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
              Accredited Universities &amp; Colleges ({orgs.length})
            </h1>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
              Educational institutions approved to verify and mint student engineering credentials onto the immutable ledger.
            </p>
          </div>

          <MagneticButton
            onClick={() => alert('Opening institutional accreditation workflow...')}
            strength={0.2}
            className="px-5 py-2.5 bg-[#FF7138] hover:bg-[#e85f26] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] flex items-center gap-2 cursor-pointer transition-transform active:translate-x-0.5 active:translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Accredit Institution</span>
          </MagneticButton>
        </div>
      </ScrollReveal>

      {/* Grid of Accredited Institutions */}
      <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orgs.map(o => (
          <StaggerItem key={o.id}>
            <TiltCard tiltAmount={6} className="h-full">
              <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-5 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] space-y-4 h-full flex flex-col justify-between hover:border-[#3657F0] transition-colors">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] bg-stone-200 dark:bg-stone-700 text-[#191A23] dark:text-white px-2 py-0.5 font-bold border border-stone-400 dark:border-stone-600">
                      {o.domain}
                    </span>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 border border-[#191A23] ${
                      o.status === 'ACCREDITED' ? 'bg-emerald-500 text-white shadow-[2px_2px_0px_#191A23]' : 'bg-[#FFD966] text-[#191A23]'
                    }`}>
                      {o.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white leading-tight">
                      {o.name}
                    </h3>
                    <span className="text-[10px] font-mono text-stone-500 block mt-0.5">
                      {o.region}
                    </span>
                  </div>

                  <div className="font-mono text-xs space-y-2 text-stone-600 dark:text-stone-400 bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border-2 border-[#191A23] dark:border-stone-700 shadow-[2px_2px_0px_#191A23]">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-stone-500" />
                        <span>Enrolled Students:</span>
                      </span>
                      <strong className="text-[#191A23] dark:text-white text-sm">
                        <AnimatedCounter value={o.studentsCount} duration={1.2} />
                      </strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#3657F0]" />
                        <span>Accredited Mentors:</span>
                      </span>
                      <strong className="text-[#3657F0] text-sm font-bold">
                        <AnimatedCounter value={o.mentorsCount} duration={1.2} />
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between font-mono text-[11px] text-stone-500">
                  <span>Joined: {o.joinedAt}</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
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
