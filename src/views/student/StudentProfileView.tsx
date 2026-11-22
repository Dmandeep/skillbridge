import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  User, 
  GraduationCap, 
  Building2, 
  FolderGit2, 
  ShieldCheck, 
  Edit3, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const StudentProfileView: React.FC = () => {
  const { currentUser } = useAuthRole();
  const { skills, submissions } = useData();

  const [bio, setBio] = useState(currentUser?.bio || '');
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const verifiedSkills = skills.filter(s => s.verificationStatus === 'MENTOR_VERIFIED');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Header Profile Card */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6 border-b-2 border-[#191A23] dark:border-stone-700 pb-6 mb-6">
            <div className="flex flex-wrap items-center gap-6">
              <img
                src={currentUser?.avatar}
                alt={currentUser?.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover border-4 border-[#191A23] shadow-[4px_4px_0px_#191A23]"
              />
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold uppercase bg-[#FFD966] text-[#191A23] px-2 py-0.5 border border-[#191A23]">
                  VERIFIED STUDENT CANDIDATE
                </span>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white">
                  {currentUser?.name}
                </h1>
                <p className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>{currentUser?.organizationName}</span>
                </p>
                <p className="text-xs font-mono text-stone-500">
                  Email: {currentUser?.email}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="font-mono text-xs bg-emerald-500 text-white font-bold px-2.5 py-1">
                TIER 3 ATTESTED
              </span>
              <span className="text-[11px] font-mono text-stone-500">
                Enrolled: {currentUser?.createdAt}
              </span>
            </div>
          </div>

          {/* Bio section with edit simulation */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-stone-500 dark:text-stone-400">
                Professional Bio &amp; Technical Trajectory:
              </span>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs font-mono font-bold text-[#3657F0] dark:text-[#FFD966] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Cancel Edit' : 'Edit Bio'}</span>
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-3">
                <textarea
                  value={bio}
                  onChange={e => setBio(e.target.value)}
                  rows={3}
                  className="w-full p-3 bg-[#F8F3E9] dark:bg-[#191A23] border-2 border-[#191A23] font-sans text-xs sm:text-sm focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#3657F0] text-white font-mono text-xs font-bold uppercase border border-[#191A23] shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  Save Profile Bio
                </button>
              </form>
            ) : (
              <p className="font-sans text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-[#F8F3E9] dark:bg-[#282B3A] p-4 border border-stone-300 dark:border-stone-700">
                {bio}
              </p>
            )}

            {savedSuccess && (
              <span className="font-mono text-xs text-emerald-600 font-bold block">
                &check; Bio updated successfully!
              </span>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Verified Badges & Skills Grid */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 space-y-4">
          <div className="border-b-2 border-[#191A23] dark:border-stone-700 pb-3 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">
                CRYPTOGRAPHIC CREDENTIALS
              </span>
              <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
                Faculty-Attested Competency Badges ({verifiedSkills.length})
              </h2>
            </div>
            <span className="font-mono text-xs font-bold bg-[#FFD966] text-[#191A23] px-2.5 py-1 border border-[#191A23]">
              100% RUNTIME PROVEN
            </span>
          </div>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs">
            {verifiedSkills.map(skill => (
              <StaggerItem key={skill.id}>
                <div className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] dark:border-stone-600 p-4 space-y-2 shadow-[2px_2px_0px_#191A23] transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#3657F0] text-white px-2 py-0.5 text-[9px] font-bold">
                      {skill.category}
                    </span>
                    <span className="text-emerald-600 font-bold text-[11px]">
                      SCORE: {skill.score}/100
                    </span>
                  </div>

                  <strong className="text-sm font-sans font-black text-[#191A23] dark:text-white block">
                    {skill.name}
                  </strong>

                  <div className="border-t border-stone-300 dark:border-stone-700 pt-2 text-[10px] text-stone-500 space-y-1">
                    <div>Attesting Mentor: <span className="text-[#191A23] dark:text-stone-300 font-bold">{skill.verifiedByMentorName}</span></div>
                    <div className="text-[#3657F0] dark:text-[#FFD966] truncate">HASH: {skill.badgeHash}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </ScrollReveal>

      {/* Featured Production Submissions */}
      <ScrollReveal direction="up" delay={0.25}>
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8 space-y-4">
          <div className="border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
            <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
              REAL-WORLD CODE REPOSITORIES
            </span>
            <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
              Public Repository Artifacts ({submissions.length})
            </h2>
          </div>

          <div className="space-y-4">
            {submissions.map(sub => (
              <div
                key={sub.id}
                className="bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] dark:border-stone-600 p-5 space-y-3 transition-all hover:translate-x-1"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-[#3657F0]" />
                    <strong className="font-display font-black text-lg text-[#191A23] dark:text-white">
                      {sub.title}
                    </strong>
                  </div>
                  <span className="bg-emerald-500 text-white font-mono text-[10px] font-bold px-2 py-0.5">
                    {sub.status.replace('_', ' ')}
                  </span>
                </div>

                <p className="font-sans text-xs text-stone-700 dark:text-stone-300">
                  {sub.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-300 dark:border-stone-700 font-mono text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {sub.skillTags.map(tag => (
                      <span key={tag} className="bg-white dark:bg-[#282B3A] border border-[#191A23] px-2 py-0.5 text-[10px] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={sub.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#3657F0] dark:text-[#FFD966] font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>View Git Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
