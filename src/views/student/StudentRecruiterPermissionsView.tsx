import React from 'react';
import { useData } from '../../context/DataContext';
import { ScrollReveal } from '../../animations/scrolling/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../../animations/scrolling/StaggerContainer';
import { 
  KeyRound, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  Clock, 
  Building2, 
  UserCheck, 
  AlertCircle 
} from 'lucide-react';

export const StudentRecruiterPermissionsView: React.FC = () => {
  const { recruiterRequests, updateRecruiterRequestStatus } = useData();

  const pendingRequests = recruiterRequests.filter(r => r.status === 'PENDING');
  const resolvedRequests = recruiterRequests.filter(r => r.status !== 'PENDING');

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[5px_5px_0px_#191A23] dark:shadow-[5px_5px_0px_#FFD966] p-6 sm:p-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
            STUDENT DATA SOVEREIGNTY PROTOCOL
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#191A23] dark:text-white mt-1">
            Recruiter Access Permissions &amp; Requests
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl leading-relaxed">
            SkillBridge protects student privacy. Verified code repositories, automated runner execution logs, and detailed mentor evaluations remain locked until you grant explicit permission. You can revoke access at any time.
          </p>
        </div>
      </ScrollReveal>

      {/* Pending Requests Section */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#191A23] dark:border-stone-700 pb-2">
            <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white flex items-center gap-2">
              <span>Pending Authorization Requests</span>
              <span className="bg-[#FF7138] text-white font-mono text-xs px-2 py-0.5">
                {pendingRequests.length}
              </span>
            </h2>
            <span className="font-mono text-xs text-stone-500">Requires Student Action</span>
          </div>

          {pendingRequests.length === 0 ? (
            <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] p-8 text-center font-mono text-xs text-stone-500">
              No pending access requests. Your private dossier is secure.
            </div>
          ) : (
            <StaggerContainer staggerDelay={0.08} className="space-y-4">
              {pendingRequests.map(req => (
                <StaggerItem key={req.id}>
                  <div
                    className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6 space-y-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={req.recruiterAvatar}
                          alt={req.recruiterName}
                          className="w-12 h-12 object-cover border-2 border-[#191A23]"
                        />
                        <div>
                          <strong className="text-base font-sans block text-[#191A23] dark:text-white">
                            {req.recruiterName}
                          </strong>
                          <span className="text-xs font-mono font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{req.recruiterCompany}</span>
                          </span>
                        </div>
                      </div>

                      <div className="text-right font-mono text-xs text-stone-500">
                        <div>Role Target: <strong className="text-[#191A23] dark:text-white">{req.targetRoleTitle}</strong></div>
                        <div className="text-[10px]">{req.requestedAt}</div>
                      </div>
                    </div>

                    <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-4 border border-stone-300 dark:border-stone-700 font-sans text-xs text-stone-700 dark:text-stone-300 leading-relaxed italic">
                      "{req.message}"
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        onClick={() => updateRecruiterRequestStatus(req.id, 'REJECTED')}
                        className="px-4 py-2 border-2 border-[#191A23] font-mono text-xs font-bold uppercase text-red-600 hover:bg-red-50 cursor-pointer transition-colors"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() => updateRecruiterRequestStatus(req.id, 'APPROVED')}
                        className="px-5 py-2 bg-[#3657F0] text-white border-2 border-[#191A23] font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                      >
                        Authorize Full Dossier Access
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </ScrollReveal>

      {/* Resolved / Authorized Access History */}
      {resolvedRequests.length > 0 && (
        <ScrollReveal direction="up" delay={0.25}>
          <div className="space-y-3">
            <h3 className="font-display font-black text-lg text-[#191A23] dark:text-white">
              Authorized Dossier Access Logs
            </h3>
            <div className="space-y-2 font-mono text-xs">
              {resolvedRequests.map(req => (
                <div
                  key={req.id}
                  className="bg-[#F8F3E9] dark:bg-[#1E202B] border border-[#191A23] dark:border-stone-700 p-3 flex flex-wrap items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-[#3657F0]" />
                    <strong className="text-[#191A23] dark:text-white">{req.recruiterName} ({req.recruiterCompany})</strong>
                    <span className="text-stone-500">&bull; {req.targetRoleTitle}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 text-[10px] font-bold ${req.status === 'APPROVED' ? 'bg-emerald-500 text-white' : 'bg-stone-300 text-stone-700'}`}>
                      {req.status}
                    </span>
                    {req.status === 'APPROVED' && (
                      <button
                        onClick={() => updateRecruiterRequestStatus(req.id, 'REVOKED')}
                        className="text-[10px] text-red-600 font-bold hover:underline cursor-pointer ml-2"
                      >
                        Revoke Access
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
};
