import React from 'react';
import { useData } from '../../context/DataContext';
import { 
  UserPlus, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  GraduationCap, 
  Building2, 
  Mail, 
  Hash 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const OrgMembershipRequestsView: React.FC = () => {
  const { membershipRequests, reviewMembershipRequest } = useData();

  const handleReview = (id: string, decision: 'APPROVED' | 'REJECTED') => {
    reviewMembershipRequest(id, decision);
    if (decision === 'APPROVED') {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
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
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
          INSTITUTIONAL ADMISSION CONTROL
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Student Organization Membership Requests
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
          Students who register independently through Google authentication request institutional affiliation. Org administrators verify academic enrollment before granting official institutional standing.
        </p>
      </div>

      {/* Pending Requests */}
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
            No pending student affiliation requests. All applications processed!
          </div>
        ) : (
          <div className="space-y-4">
            {pending.map(req => (
              <div
                key={req.id}
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
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
                      <p className="font-mono text-xs text-stone-500 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5" />
                        {req.studentEmail}
                      </p>
                    </div>
                  </div>

                  <span className="bg-[#FFD966] text-[#191A23] font-mono text-xs font-bold px-2.5 py-1 border border-[#191A23]">
                    REQUESTED {new Date(req.requestedAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-stone-300 dark:border-stone-700">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block">Enrolled Degree</span>
                    <strong className="text-[#191A23] dark:text-white">{req.programEnrolled}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block">Student ID Number</span>
                    <strong className="text-[#3657F0] dark:text-[#FFD966]">{req.studentIdNumber}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block">Graduation Class</span>
                    <strong className="text-[#191A23] dark:text-white">{req.graduationYear}</strong>
                  </div>
                </div>

                <div className="flex justify-end gap-3 font-mono text-xs font-bold pt-2 border-t border-stone-200 dark:border-stone-700">
                  <button
                    onClick={() => handleReview(req.id, 'REJECTED')}
                    className="px-4 py-2 border-2 border-[#191A23] bg-stone-200 text-stone-800 hover:bg-red-500 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Reject Affiliation</span>
                  </button>

                  <button
                    onClick={() => handleReview(req.id, 'APPROVED')}
                    className="px-6 py-2 border-2 border-[#191A23] bg-emerald-500 text-white shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve &amp; Admit Student</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Historical Logs */}
      <div className="space-y-4 pt-6">
        <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white border-b-2 border-[#191A23] dark:border-stone-700 pb-2">
          Processed Applications History
        </h2>

        <div className="space-y-2 font-mono text-xs">
          {past.map(req => (
            <div
              key={req.id}
              className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-3 flex items-center justify-between"
            >
              <div>
                <strong className="font-sans text-sm text-[#191A23] dark:text-white">{req.studentName}</strong>
                <span className="text-stone-500 text-[11px] block">{req.studentEmail} • {req.programEnrolled}</span>
              </div>
              <span className={`px-2 py-0.5 font-bold uppercase text-[10px] border border-[#191A23] ${
                req.status === 'APPROVED' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
              }`}>
                {req.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
