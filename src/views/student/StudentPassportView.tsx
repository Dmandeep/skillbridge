import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { VerificationStamp } from '../../components/common/VerificationStamp';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { TiltCard } from '../../animations/interactions/TiltCard';
import { 
  QrCode, 
  Download, 
  Share2, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  ExternalLink,
  Award,
  Lock
} from 'lucide-react';

export const StudentPassportView: React.FC = () => {
  const { currentUser } = useAuthRole();
  const { skills, submissions } = useData();
  const [copied, setCopied] = useState(false);

  const verifiedSkills = skills.filter(s => s.verificationStatus === 'MENTOR_VERIFIED');
  const passportId = 'SB-2026-AIT-9921';
  const rootProofHash = '0x7F8B2C4E91A334D88E01B7A902DF35C41189ACBE7A01';

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(`https://skillbridge.io/verify/passport/${passportId}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Top action header */}
      <ScrollReveal direction="down">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966]">
        <div>
          <span className="font-mono text-xs font-bold uppercase text-[#3657F0] dark:text-[#FFD966]">
            VERIFIED SKILLS PROFILE
          </span>
          <h1 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
            My Verified Skills Passport
          </h1>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold">
          <button
            onClick={handleCopyLink}
            className="px-3.5 py-2 bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] text-[#191A23] dark:text-white flex items-center gap-1.5 shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Copy Share Link'}</span>
          </button>
          <button
            onClick={() => alert('Downloading verified skills summary...')}
            className="px-4 py-2 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23] flex items-center gap-1.5 shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Summary</span>
          </button>
        </div>
      </div>
      </ScrollReveal>

      {/* Physical-style Editorial Passport Card */}
      <ScrollReveal direction="up" delay={0.15}>
      <div className="bg-[#F8F3E9] dark:bg-[#191A23] border-4 border-[#191A23] dark:border-[#FFD966] shadow-[8px_8px_0px_#191A23] dark:shadow-[8px_8px_0px_#FFD966] p-6 sm:p-10 relative overflow-hidden">
        {/* Passport header badge */}
        <div className="flex flex-wrap items-center justify-between border-b-4 border-[#191A23] dark:border-stone-600 pb-6 mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#3657F0] border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-[#FFD966]" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7138] block">
                GLOBAL TALENT VERIFICATION PROTOCOL
              </span>
              <h2 className="font-display font-black text-3xl tracking-tight text-[#191A23] dark:text-white">
                VERIFICATION PASSPORT
              </h2>
            </div>
          </div>

          <div className="text-right font-mono">
            <span className="text-[10px] text-stone-500 uppercase block font-bold">PASSPORT ID NUMBER</span>
            <span className="text-sm font-extrabold bg-[#191A23] text-[#FFD966] px-2.5 py-1 inline-block border border-[#191A23]">
              {passportId}
            </span>
          </div>
        </div>

        {/* Identity & QR Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Avatar & Photo */}
          <div className="space-y-2">
            <div className="relative border-3 border-[#191A23] bg-white p-1 shadow-[4px_4px_0px_#191A23]">
              <img
                src={currentUser?.avatar}
                alt={currentUser?.name}
                className="w-full h-44 object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-emerald-500 text-white font-mono text-[9px] font-bold px-1 py-0.5 border border-[#191A23]">
                AUTHENTICATED
              </span>
            </div>
            <div className="text-center font-mono text-[10px] text-stone-500">
              Biometric &amp; Institutional Match
            </div>
          </div>

          {/* Student Dossier Information */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="border-b-2 border-stone-300 dark:border-stone-700 pb-1">
              <span className="text-[10px] text-stone-500 uppercase block">Candidate Name</span>
              <span className="font-display font-black text-xl text-[#191A23] dark:text-white">
                {currentUser?.name}
              </span>
            </div>

            <div className="border-b-2 border-stone-300 dark:border-stone-700 pb-1">
              <span className="text-[10px] text-stone-500 uppercase block">Accredited Institution</span>
              <span className="font-bold text-sm text-[#3657F0] dark:text-[#FFD966]">
                {currentUser?.organizationName}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 border-b-2 border-stone-300 dark:border-stone-700 pb-1">
              <div>
                <span className="text-[10px] text-stone-500 uppercase block">Specialization</span>
                <span className="font-bold text-stone-800 dark:text-stone-200">Distributed Systems</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 uppercase block">Cohort Class</span>
                <span className="font-bold text-stone-800 dark:text-stone-200">2027 (Undergraduate)</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-stone-500 uppercase block">Root Attestation Hash</span>
              <span className="font-mono text-[10px] font-bold text-stone-600 dark:text-stone-400 break-all">
                {rootProofHash}
              </span>
            </div>
          </div>

          {/* QR Code Container */}
          <div className="flex flex-col items-center justify-center p-4 bg-white border-2 border-[#191A23] shadow-[4px_4px_0px_#191A23]">
            <div className="w-32 h-32 bg-stone-100 border-2 border-[#191A23] flex items-center justify-center p-2 mb-2 relative">
              {/* Stylized QR Matrix */}
              <div className="grid grid-cols-5 gap-1.5 w-full h-full p-1 bg-stone-900">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`${(i % 2 === 0 || i % 5 === 0) ? 'bg-[#FFD966]' : 'bg-transparent'} rounded-xs`}
                  ></div>
                ))}
              </div>
            </div>
            <span className="font-mono text-[10px] font-extrabold uppercase text-[#191A23]">
              SCAN TO VALIDATE
            </span>
            <span className="font-mono text-[8px] text-stone-500 text-center">
              Zero-Knowledge Merkle Tree Proof
            </span>
          </div>
        </div>

        {/* Verified Competencies Matrix */}
        <div className="border-t-4 border-[#191A23] dark:border-stone-600 pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-display font-black text-lg uppercase text-[#191A23] dark:text-white">
              Verified Technical Competency Attestations
            </span>
            <span className="font-mono text-xs font-bold bg-[#FFD966] text-[#191A23] px-2 py-0.5 border border-[#191A23]">
              {verifiedSkills.length} Attested Skills
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verifiedSkills.map(s => (
              <div
                key={s.id}
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 shadow-[3px_3px_0px_#191A23] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase bg-[#3657F0] text-white px-1.5 py-0.5">
                    {s.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    VERIFIED (96%)
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-[#191A23] dark:text-white">
                  {s.name}
                </h4>

                <div className="flex items-center justify-between text-[11px] font-mono text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-200 dark:border-stone-700">
                  <span>Evaluator: {s.verifiedByMentorName}</span>
                  <span className="text-[#3657F0] dark:text-[#FFD966] font-bold">{s.badgeHash}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Physical Stamp Overlay */}
        <div className="mt-8 pt-6 border-t-2 border-dashed border-[#191A23]/40 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-stone-600 dark:text-stone-400 space-y-1 max-w-md">
            <div className="flex items-center gap-1.5 font-bold text-[#191A23] dark:text-white">
              <Lock className="w-3.5 h-3.5 text-[#3657F0]" />
              <span>PRIVACY PRESERVATION NOTICE</span>
            </div>
            <p className="text-[11px]">
              This passport public key verifies competency without exposing source repository code or private intellectual property unless explicitly granted to an authorized recruiter.
            </p>
          </div>

          <VerificationStamp
            mentorName="Dr. Elena Rostova"
            verificationDate="2026-11-04"
            hash="0x7F8B2C4E91A334D"
            score={97}
            rotation={2}
          />
        </div>
      </div>
      </ScrollReveal>
    </div>
  );
};
