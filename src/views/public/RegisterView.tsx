import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const RegisterView: React.FC = () => {
  const { switchRole, setActiveTab } = useAuthRole();
  const { requestOrgMembership } = useData();

  const [studentName, setStudentName] = useState('Dev Patel');
  const [studentEmail, setStudentEmail] = useState('dev.patel27@student.apex.edu');
  const [programEnrolled, setProgramEnrolled] = useState('B.Tech in Computer Science & Engineering');
  const [graduationYear, setGraduationYear] = useState(2027);
  const [studentIdNumber, setStudentIdNumber] = useState('AIT-CS-2023-0491');
  const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGoogleSignIn = () => {
    setIsGoogleSignedIn(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    requestOrgMembership({
      studentName,
      studentEmail,
      programEnrolled,
      graduationYear,
      studentIdNumber,
    });

    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 select-none pb-12">
      <ScrollReveal direction="down">
        <div className="bg-[#FF7138] text-white border-4 border-[#191A23] shadow-[6px_6px_0px_#191A23] p-6 sm:p-8 text-center space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#FFD966] text-[#191A23] px-2.5 py-0.5 border border-[#191A23]">
            INDEPENDENT STUDENT REGISTRATION
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
            Begin Your Practical Skill Journey
          </h1>
          <p className="font-sans text-xs text-white/90 max-w-lg mx-auto font-medium">
            Sign up independently with Google and request membership in your university organization to unlock faculty mentorship.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        {!isSubmitted ? (
          <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[6px_6px_0px_#191A23] dark:shadow-[6px_6px_0px_#FFD966] p-6 sm:p-8 space-y-6">
          {/* Step 1: Google OAuth Simulation */}
          <div className="border-b-2 border-stone-200 dark:border-stone-700 pb-5 space-y-3">
            <span className="font-mono text-xs font-bold uppercase text-stone-500 block">
              STEP 1: INDEPENDENT IDENTITY AUTHENTICATION
            </span>

            {isGoogleSignedIn ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-600 p-3 font-mono text-xs text-emerald-800 dark:text-emerald-200 flex items-center justify-between">
                <span className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Google Account Linked: {studentEmail}</span>
                </span>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 font-bold">
                  VERIFIED AUTH
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full py-3 bg-white dark:bg-[#282B3A] border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-3 text-[#191A23] dark:text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google Sign-In</span>
              </button>
            )}
          </div>

          {/* Step 2: Request Organization Membership Form */}
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <span className="font-mono text-xs font-bold uppercase text-stone-500 block">
              STEP 2: REQUEST ORGANIZATION MEMBERSHIP AFFILIATION
            </span>

            <div>
              <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
                Target Educational Institution *
              </label>
              <select
                className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2 font-mono text-xs font-bold"
              >
                <option value="org_01">Apex Institute of Technology</option>
                <option value="org_02">Dublin City Polytech</option>
                <option value="org_03">Pacific Institute of Advanced Computing</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={e => setStudentName(e.target.value)}
                  className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2 text-xs font-sans"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
                  Student ID Number *
                </label>
                <input
                  type="text"
                  required
                  value={studentIdNumber}
                  onChange={e => setStudentIdNumber(e.target.value)}
                  className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2 text-xs font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
                  Degree Program *
                </label>
                <input
                  type="text"
                  required
                  value={programEnrolled}
                  onChange={e => setProgramEnrolled(e.target.value)}
                  className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2 text-xs font-sans"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-[#191A23] dark:text-white mb-1">
                  Graduation Year *
                </label>
                <input
                  type="number"
                  required
                  value={graduationYear}
                  onChange={e => setGraduationYear(Number(e.target.value))}
                  className="w-full bg-[#F8F3E9] dark:bg-[#1E202B] border-2 border-[#191A23] p-2 text-xs font-mono"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-[#3657F0] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4 text-[#FFD966]" />
                <span>Submit Membership Request to Institution Admin</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Confirmation State */
        <div className="bg-white dark:bg-[#212330] border-4 border-[#191A23] dark:border-[#FFD966] p-8 text-center space-y-4 shadow-[6px_6px_0px_#191A23]">
          <div className="w-16 h-16 bg-[#FFD966] border-2 border-[#191A23] flex items-center justify-center mx-auto text-[#191A23]">
            <CheckCircle2 className="w-8 h-8 text-[#3657F0]" />
          </div>
          <h2 className="font-display font-black text-2xl text-[#191A23] dark:text-white">
            Membership Request Submitted!
          </h2>
          <p className="font-sans text-xs text-stone-600 dark:text-stone-300 max-w-md mx-auto">
            Your application has been routed to <strong>Dean Marcus Vance</strong> at Apex Institute of Technology. You can test Dean Vance's perspective by switching to the <strong>Org Admin</strong> role in the top explorer bar.
          </p>
          <div className="pt-2 flex justify-center gap-3 font-mono text-xs font-bold">
            <button
              onClick={() => switchRole('ORG_ADMIN', 'membership-requests')}
              className="px-5 py-2.5 bg-[#FF7138] text-white border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23]"
            >
              Switch to Org Admin View to Approve &rarr;
            </button>
            <button
              onClick={() => switchRole('STUDENT')}
              className="px-5 py-2.5 bg-[#3657F0] text-white border-2 border-[#191A23] shadow-[2px_2px_0px_#191A23]"
            >
              Enter Student Workspace
            </button>
          </div>
        </div>
      )}
      </ScrollReveal>
    </div>
  );
};
