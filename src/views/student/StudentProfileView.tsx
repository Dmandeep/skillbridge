import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
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
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 sm:p-8">
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

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 border-2 border-[#191A23] font-mono text-xs font-bold uppercase bg-[#F8F3E9] dark:bg-[#282B3A] text-[#191A23] dark:text-white shadow-[2px_2px_0px_#191A23] flex items-center gap-1.5 hover:bg-[#3657F0] hover:text-white transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Cancel Editing' : 'Edit Profile'}</span>
          </button>
        </div>

        {/* Bio / Overview */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase text-stone-500">
            Professional Overview &amp; Engineering Philosophy
          </h3>

          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-3">
              <textarea
                rows={3}
                value={bio}
                onChange={e => setBio(e.target.value)}
                className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-3 text-sm font-sans focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-[#3657F0] text-white font-mono text-xs font-bold uppercase border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23]"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <p className="font-sans text-sm text-[#191A23] dark:text-stone-300 leading-relaxed bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border border-[#191A23]/30">
              {bio}
            </p>
          )}

          {savedSuccess && (
            <span className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Profile successfully updated.
            </span>
          )}
        </div>
      </div>

      {/* Institutional Affiliation & Mentor Connection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[3px_3px_0px_#191A23] space-y-3">
          <div className="flex items-center gap-2 border-b-2 border-[#191A23] pb-2">
            <GraduationCap className="w-5 h-5 text-[#3657F0]" />
            <h3 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
              Institutional Accreditation
            </h3>
          </div>
          <div className="font-mono text-xs space-y-1.5 text-stone-700 dark:text-stone-300">
            <div className="flex justify-between">
              <span className="text-stone-500">Institution:</span>
              <strong className="text-[#191A23] dark:text-white">Apex Institute of Technology</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Enrolled Program:</span>
              <span>B.Tech in Computer Science</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Student ID:</span>
              <span>AIT-CS-2023-0491</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Membership Status:</span>
              <span className="bg-emerald-500 text-white px-2 py-0.2 font-bold text-[10px]">
                ACTIVE &amp; ATTESTED
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-6 shadow-[3px_3px_0px_#191A23] space-y-3">
          <div className="flex items-center gap-2 border-b-2 border-[#191A23] pb-2">
            <ShieldCheck className="w-5 h-5 text-[#FF7138]" />
            <h3 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
              Assigned Faculty Mentor
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150"
              alt="Mentor"
              className="w-12 h-12 object-cover border-2 border-[#191A23]"
            />
            <div>
              <strong className="font-display font-bold text-sm text-[#191A23] dark:text-white block">
                Dr. Elena Rostova
              </strong>
              <span className="font-mono text-xs text-stone-500 block">
                Associate Professor &amp; Lead Systems Evaluator
              </span>
              <span className="font-mono text-[10px] text-[#3657F0] dark:text-[#FFD966] font-bold">
                Apex Institute of Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
