import React from 'react';
import { useData } from '../../context/DataContext';
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
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
          STUDENT DATA SOVEREIGNTY PROTOCOL
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Recruiter Access Permissions &amp; Requests
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1 max-w-2xl">
          SkillBridge protects student privacy. Verified code repositories, automated runner execution logs, and detailed mentor evaluations remain locked until you grant explicit permission. You can revoke access at any time.
        </p>
      </div>

      {/* Pending Requests Section */}
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
          <div className="space-y-4">
            {pendingRequests.map(req => (
              <div
                key={req.id}
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
                      <h3 className="font-display font-bold text-lg text-[#191A23] dark:text-white">
                        {req.recruiterName}
                      </h3>
                      <p className="font-mono text-xs font-bold text-[#3657F0] dark:text-[#FFD966] flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {req.recruiterCompany}
                      </p>
                    </div>
                  </div>

                  <div className="text-right font-mono text-xs">
                    <span className="bg-[#FFD966] text-[#191A23] font-bold px-2 py-0.5 border border-[#191A23] inline-block">
                      ROLE: {req.targetRoleTitle}
                    </span>
                    <span className="text-stone-500 block text-[10px] mt-1">
                      Requested {new Date(req.requestedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="bg-[#F8F3E9] dark:bg-[#1E202B] p-3 border border-[#191A23]/30 text-xs font-sans text-stone-700 dark:text-stone-300">
                  <span className="font-mono text-[10px] font-bold text-stone-500 uppercase block mb-1">
                    Recruiter Message &amp; Purpose:
                  </span>
                  "{req.message}"
                </div>

                {/* Approve / Deny Action Buttons */}
                <div className="flex justify-end gap-3 font-mono text-xs font-bold pt-2 border-t border-stone-200 dark:border-stone-700">
                  <button
                    onClick={() => updateRecruiterRequestStatus(req.id, 'REJECTED')}
                    className="px-4 py-2 border-2 border-[#191A23] bg-stone-200 text-stone-800 hover:bg-red-500 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Decline Access</span>
                  </button>

                  <button
                    onClick={() => updateRecruiterRequestStatus(req.id, 'APPROVED')}
                    className="px-6 py-2 border-2 border-[#191A23] bg-emerald-500 text-white shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve 30-Day Access</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Access History & Revocation Controls */}
      <div className="space-y-4 pt-6">
        <h2 className="font-display font-black text-xl text-[#191A23] dark:text-white border-b-2 border-[#191A23] dark:border-stone-700 pb-2">
          Active &amp; Past Access Authorizations
        </h2>

        <div className="space-y-3">
          {resolvedRequests.map(req => {
            const isApproved = req.status === 'APPROVED';
            return (
              <div
                key={req.id}
                className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={req.recruiterAvatar}
                    alt={req.recruiterName}
                    className="w-9 h-9 object-cover border border-[#191A23]"
                  />
                  <div>
                    <strong className="text-sm text-[#191A23] dark:text-white block font-sans">
                      {req.recruiterName} ({req.recruiterCompany})
                    </strong>
                    <span className="text-stone-500 text-[11px]">
                      Target: {req.targetRoleTitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {isApproved ? (
                    <div className="text-right">
                      <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 border border-[#191A23]">
                        ACTIVE UNTIL {new Date(req.expiresAt || '').toLocaleDateString()}
                      </span>
                    </div>
                  ) : (
                    <span className="bg-stone-300 dark:bg-stone-700 text-stone-800 dark:text-stone-300 text-[10px] font-bold px-2 py-0.5">
                      {req.status}
                    </span>
                  )}

                  {isApproved && (
                    <button
                      onClick={() => updateRecruiterRequestStatus(req.id, 'REVOKED')}
                      className="px-3 py-1 bg-red-600 text-white border border-[#191A23] font-bold text-[10px] uppercase hover:bg-black transition-colors"
                    >
                      Revoke Access Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
