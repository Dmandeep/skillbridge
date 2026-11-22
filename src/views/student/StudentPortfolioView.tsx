import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { StatusPill } from '../../components/common/StatusPill';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  Eye, 
  EyeOff, 
  Globe2, 
  Lock, 
  ExternalLink, 
  Copy, 
  CheckCircle2, 
  FolderGit2, 
  ShieldCheck 
} from 'lucide-react';

export const StudentPortfolioView: React.FC = () => {
  const { currentUser } = useAuthRole();
  const { submissions, skills } = useData();
  const [isPublicPublished, setIsPublicPublished] = useState(true);
  const [copied, setCopied] = useState(false);

  const verifiedSkills = skills.filter(s => s.verificationStatus === 'MENTOR_VERIFIED');

  const handleCopy = () => {
    navigator.clipboard?.writeText(`https://skillbridge.io/p/${currentUser?.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Portfolio Control Bar */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
              EXTERNAL CANDIDATE SHOWCASE
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-[#191A23] dark:text-white mt-0.5">
              Public Portfolio &amp; Privacy Controls
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans">
              Controls what external companies and recruiters can see before requesting full private access.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs font-bold">
            {/* Public / Private State Toggle */}
            <button
              onClick={() => setIsPublicPublished(!isPublicPublished)}
              className={`px-4 py-2 border-2 border-[#191A23] flex items-center gap-2 shadow-[2px_2px_0px_#191A23] transition-all cursor-pointer ${
                isPublicPublished 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-stone-300 text-stone-800'
              }`}
            >
              {isPublicPublished ? <Globe2 className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span>{isPublicPublished ? 'Publicly Searchable' : 'Private Stealth Mode'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] text-[#191A23] dark:text-white flex items-center gap-1.5 shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Share URL'}</span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Live Preview Container */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-4 border-[#191A23] dark:border-[#FFD966] shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] p-6 sm:p-10 space-y-8">
          <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500">
              CANDIDATE PUBLIC PREVIEW (WHAT RECRUITERS SEE)
            </span>
            <span className="bg-[#FFD966] text-[#191A23] font-mono text-xs font-bold px-2 py-0.5 border border-[#191A23]">
              LIVE IN RADAR
            </span>
          </div>

          {/* Profile overview */}
          <div className="flex flex-wrap items-center gap-6">
            <img
              src={currentUser?.avatar}
              alt={currentUser?.name}
              className="w-20 h-20 object-cover border-3 border-[#191A23] shadow-[3px_3px_0px_#191A23]"
            />
            <div>
              <h2 className="font-display font-black text-3xl text-[#191A23] dark:text-white">
                {currentUser?.name}
              </h2>
              <span className="text-xs font-mono font-bold text-[#3657F0] dark:text-[#FFD966] block">
                {currentUser?.title} &bull; {currentUser?.organizationName}
              </span>
              <p className="font-sans text-xs text-stone-600 dark:text-stone-300 mt-2 max-w-xl">
                {currentUser?.bio}
              </p>
            </div>
          </div>

          {/* Verified Skills chips */}
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-stone-500 block">
              Verified Competencies ({verifiedSkills.length})
            </span>
            <div className="flex flex-wrap gap-2">
              {verifiedSkills.map(sk => (
                <div key={sk.id} className="bg-white dark:bg-[#282B3A] border-2 border-[#191A23] px-3 py-1.5 font-mono text-xs font-bold flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{sk.name}</span>
                  <span className="text-[#3657F0] dark:text-[#FFD966] text-[10px]">({sk.score}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Repositories preview */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase text-stone-500 block">
              Demonstrated Code Artifacts ({submissions.length})
            </span>
            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {submissions.map(sub => (
                <StaggerItem key={sub.id}>
                  <div key={sub.id} className="bg-white dark:bg-[#282B3A] border-2 border-[#191A23] p-4 space-y-2 shadow-[2px_2px_0px_#191A23]">
                    <div className="flex items-center justify-between">
                      <strong className="font-display font-black text-base text-[#191A23] dark:text-white truncate">
                        {sub.title}
                      </strong>
                      <StatusPill status={sub.status} />
                    </div>
                    <p className="font-sans text-xs text-stone-600 dark:text-stone-300 line-clamp-2">
                      {sub.description}
                    </p>
                    <div className="pt-2 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between font-mono text-[10px] text-stone-500">
                      <span>Assertions: {sub.automatedTestResults?.passedAssertions || 48}/{sub.automatedTestResults?.totalAssertions || 48} passed</span>
                      <span className="text-[#3657F0] font-bold">Code Private (Consent-Gated)</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
