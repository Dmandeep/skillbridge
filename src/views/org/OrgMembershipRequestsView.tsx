import React from 'react';
import { useData } from '../../context/DataContext';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { 
  UserPlus, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  GraduationCap, 
  Building2, 
  Mail, 
  Hash,
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrgMembershipRequestsView: React.FC = () => {
  const { membershipRequests, reviewMembershipRequest } = useData();

  const handleReview = (id: string, decision: 'APPROVED' | 'REJECTED') => {
    reviewMembershipRequest(id, decision);
    if (decision === 'APPROVED') {
      try {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const pending = membershipRequests.filter(m => m.status === 'PENDING');
  const past = membershipRequests.filter(m => m.status !== 'PENDING');

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            INSTITUTIONAL ADMISSION CONTROL
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Student Organization Membership Requests
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl leading-relaxed">
            Students who register independently through Google authentication request institutional affiliation. Org administrators verify academic enrollment before granting official institutional standing.
          </p>
        </div>
      </ScrollReveal>

      {/* Pending Requests */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-2">
            <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white flex items-center gap-2">
              <span>Pending Affiliation Requests</span>
              <span className="bg-[#FF7138] text-white font-mono text-xs px-2 py-0.5">
                {pending.length}
              </span>
            </h2>
            <span className="font-mono text-xs text-stone-500">Awaiting Dean Action</span>
          </div>

          {pending.length === 0 ? (
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-8 text-center font-mono text-xs text-stone-500">
              No pending affiliation requests. All student submissions processed.
            </div>
          ) : (
            <StaggerContainer staggerDelay={0.08} className="space-y-4">
              {pending.map(req => (
                <StaggerItem key={req.id}>
                  <div
                    className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={req.studentAvatar}
                          alt={req.studentName}
                          className="w-14 h-14 object-cover border-2 border-[#191A23]"
                        />
                        <div>
                          <h3 className="font-display font-black text-xl text-[#191A23] dark:text-white">
                            {req.studentName}
                          </h3>
                          <span className="font-mono text-xs text-stone-500 block">
                            {req.studentEmail}
                          </span>
                        </div>
                      </div>

                      <span className="bg-[#FFD966] text-[#191A23] font-mono text-[10px] font-bold px-2 py-0.5 border border-[#191A23]">
                        AWAITING VERIFICATION
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-stone-300 dark:border-stone-700">
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase">Program</span>
                        <strong className="text-[#191A23] dark:text-white">{req.programEnrolled}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase">Student ID</span>
                        <strong className="text-[#3657F0] dark:text-[#FFD966]">{req.studentIdNumber}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase">Expected Graduation</span>
                        <strong className="text-[#191A23] dark:text-white">Class of {req.graduationYear}</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        onClick={() => handleReview(req.id, 'REJECTED')}
                        className="px-4 py-2 border-2 border-[#191A23] font-mono text-xs font-bold uppercase text-red-600 hover:bg-red-50 cursor-pointer transition-colors"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleReview(req.id, 'APPROVED')}
                        className="px-6 py-2 bg-emerald-500 text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                      >
                        Approve Enrollment
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </ScrollReveal>

      {/* Historical Processed Requests */}
      {past.length > 0 && (
        <ScrollReveal direction="up" delay={0.25}>
          <div className="space-y-3">
            <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white">
              Processed Affiliation Requests ({past.length})
            </h3>
            <div className="space-y-2 font-mono text-xs">
              {past.map(req => (
                <div
                  key={req.id}
                  className="bg-[#F8F3E9] dark:bg-[#1E202B] border border-[#191A23] dark:border-stone-700 p-3 flex flex-wrap items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <strong className="text-[#191A23] dark:text-white">{req.studentName}</strong>
                    <span className="text-stone-500">&bull; {req.programEnrolled} ({req.studentIdNumber})</span>
                  </div>

                  <span className={`px-2 py-0.5 text-[10px] font-bold ${req.status === 'APPROVED' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
};
