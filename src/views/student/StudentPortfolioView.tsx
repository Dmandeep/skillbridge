import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { StatusPill } from '../../components/common/StatusPill';
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
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
            EXTERNAL CANDIDATE SHOWCASE
          </span>
          <h1 className="font-display font-black text-2xl text-[#191A23] dark:text-white mt-0.5">
            Public Portfolio &amp; Privacy Controls
          </h1>
          <p className="text-xs text-stone-600 dark:text-stone-300 font-sans">
            Controls what external companies and recruiters can see before requesting full private access.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs font-bold">
          {/* Public / Private State Toggle */}
          <button
            onClick={() => setIsPublicPublished(!isPublicPublished)}
            className={`px-4 py-2 border-2 border-[#191A23] flex items-center gap-2 shadow-[2px_2px_0px_#191A23] transition-all ${
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
            className="px-4 py-2 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] flex items-center gap-1.5 shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Copy Portfolio URL'}</span>
          </button>
        </div>
      </div>

      {/* Live Preview Container */}
      <div className="bg-[#F8F3E9] dark:bg-[#191A23] border-4 border-[#191A23] dark:border-[#3B3E54] p-8 shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] space-y-8">
        <div className="border-b-2 border-[#191A23] pb-2 flex items-center justify-between">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500">
            PREVIEW: WHAT RECRUITERS SEE (LIMITED PUBLIC DOSSIER)
          </span>
          <span className="bg-[#3657F0] text-white font-mono text-[10px] font-bold px-2 py-0.5">
            VERIFIED APPLICANT
          </span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-wrap items-center gap-6">
          <img
            src={currentUser?.avatar}
            alt={currentUser?.name}
            className="w-24 h-24 object-cover border-3 border-[#191A23] shadow-[4px_4px_0px_#191A23]"
          />
          <div className="space-y-1">
            <h2 className="font-display font-black text-3xl text-[#191A23] dark:text-white">
              {currentUser?.name}
            </h2>
            <p className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966]">
              {currentUser?.title} • {currentUser?.organizationName}
            </p>
            <p className="font-sans text-xs text-stone-700 dark:text-stone-300 max-w-xl">
              {currentUser?.bio}
            </p>
          </div>
        </div>

        {/* Verified Skills Strip */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase text-stone-500">
            Attested Engineering Competencies ({verifiedSkills.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {verifiedSkills.map(skill => (
              <div 
                key={skill.id}
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] px-3 py-1.5 shadow-[2px_2px_0px_#191A23] flex items-center gap-2 font-mono text-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-bold text-[#191A23] dark:text-white">{skill.name}</span>
                <span className="text-[10px] bg-[#FFD966] text-[#191A23] px-1 font-bold">96%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects with Redacted Private Code Badge */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs font-bold uppercase text-stone-500">
            Verified Project Showcase
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {submissions.map(sub => (
              <div 
                key={sub.id}
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-5 shadow-[3px_3px_0px_#191A23] space-y-3"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                    {sub.title}
                  </h4>
                  <StatusPill status={sub.status} size="sm" />
                </div>

                <p className="font-sans text-xs text-stone-600 dark:text-stone-300 line-clamp-2">
                  {sub.description}
                </p>

                {/* Privacy Boundary Box */}
                <div className="bg-[#F8F3E9] dark:bg-[#282B3A] border border-[#191A23]/30 p-2.5 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400 text-[11px]">
                    <Lock className="w-3.5 h-3.5 text-[#FF7138]" />
                    <span>Raw Code &amp; Test Telemetry Gated</span>
                  </span>
                  <span className="text-[10px] bg-[#FF7138] text-white px-2 py-0.5 font-bold">
                    REQUEST ACCESS TO UNLOCK
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
