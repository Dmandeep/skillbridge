import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { StatCard } from '../../components/common/StatCard';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  Building2, 
  GraduationCap, 
  Users, 
  UserPlus, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3,
  Sparkles
} from 'lucide-react';

export const OrgDashboardView: React.FC = () => {
  const { currentUser, setActiveTab } = useAuthRole();
  const { membershipRequests } = useData();

  const pendingRequests = membershipRequests.filter(m => m.status === 'PENDING');

  return (
    <div className="space-y-6 select-none">
      {/* Institution Banner */}
      <ScrollReveal direction="down">
        <div className="bg-[#FFD966] text-[#191A23] border-4 border-[#191A23] shadow-[6px_6px_0px_#191A23] p-6 sm:p-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-[#3657F0] text-white px-2.5 py-0.5 font-mono text-xs font-bold border border-[#191A23]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLEGE ADMIN DASHBOARD</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-[#191A23] leading-none">
              {currentUser?.organizationName}
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#191A23]/80 leading-relaxed font-medium">
              Managed by Dean <strong>{currentUser?.name}</strong>. Track student skill development, oversee faculty, and connect with hiring companies.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <MagneticButton
                onClick={() => setActiveTab('membership-requests')}
                className="px-5 py-2.5 bg-[#FF7138] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4 text-white" />
                <span>Review Join Requests ({pendingRequests.length})</span>
              </MagneticButton>
              <MagneticButton
                onClick={() => setActiveTab('student-management')}
                className="px-5 py-2.5 bg-white text-[#191A23] border-2 border-[#191A23] font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-[#3657F0]" />
                <span>Student Directory</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Metric Cards */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Enrolled Students"
            value="1,420"
            subtext="Active in computer engineering tracks"
            icon={<GraduationCap className="w-5 h-5 text-[#3657F0]" />}
            color="cobalt"
          />
          <StatCard
            label="Pending Affiliations"
            value={pendingRequests.length}
            subtext="Student join requests awaiting approval"
            icon={<UserPlus className="w-5 h-5 text-[#FF7138]" />}
            color="orange"
            badge={pendingRequests.length > 0 ? "ACTION REQ" : "CLEAR"}
          />
          <StatCard
            label="Faculty Evaluators"
            value="24"
            subtext="Accredited lead mentor reviewers"
            icon={<Users className="w-5 h-5 text-emerald-600" />}
            color="yellow"
          />
          <StatCard
            label="Attestation Velocity"
            value="94.2%"
            subtext="Curriculum practical completion"
            icon={<ShieldCheck className="w-5 h-5 text-[#3657F0]" />}
            color="neutral"
          />
        </div>
      </ScrollReveal>

      {/* Pending Membership Requests Alert Table */}
      <ScrollReveal direction="up" delay={0.25}>
        <div className="bg-white dark:bg-[#212330] border-3 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-3">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#FF7138]">ACTION REQUIRED</span>
              <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                Student Registration Affiliation Requests
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('membership-requests')}
              className="text-xs font-mono font-bold uppercase text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Manage All Requests</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {pendingRequests.map(req => (
              <div
                key={req.id}
                className="bg-[#F8F3E9] dark:bg-[#282B3A] border-2 border-[#191A23] dark:border-stone-600 p-4 flex flex-wrap items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={req.studentAvatar}
                    alt={req.studentName}
                    className="w-10 h-10 object-cover border border-[#191A23]"
                  />
                  <div>
                    <strong className="text-sm text-[#191A23] dark:text-white block font-sans">
                      {req.studentName}
                    </strong>
                    <span className="text-stone-500">
                      ID: {req.studentIdNumber} &bull; {req.programEnrolled} (Class of {req.graduationYear})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-[#FFD966] text-[#191A23] px-2 py-0.5 font-bold text-[10px] border border-[#191A23]">
                    AWAITING DEAN APPROVAL
                  </span>
                  <button
                    onClick={() => setActiveTab('membership-requests')}
                    className="px-3 py-1 bg-[#3657F0] text-white border border-[#191A23] font-bold text-[11px] uppercase hover:bg-black cursor-pointer"
                  >
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
