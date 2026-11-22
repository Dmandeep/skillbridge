import React from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';

export const SuperAdminRolesView: React.FC = () => {
  const permissions = [
    { capability: 'Submit Project & Challenge Evidence', student: true, mentor: false, org: false, recruiter: false, super: true },
    { capability: 'Trigger Automated Code Sandbox Runner', student: true, mentor: true, org: false, recruiter: false, super: true },
    { capability: 'Mint Mentor Verification Stamp & Rubric', student: false, mentor: true, org: false, recruiter: false, super: true },
    { capability: 'Admit / Approve Student Organization Membership', student: false, mentor: false, org: true, recruiter: false, super: true },
    { capability: 'Request Gated Student Code Dossier Access', student: false, mentor: false, org: false, recruiter: true, super: true },
    { capability: 'Approve / Revoke Recruiter Access Permissions', student: true, mentor: false, org: false, recruiter: false, super: true },
    { capability: 'Appoint Additional Administrators', student: false, mentor: false, org: false, recruiter: false, super: true },
    { capability: 'Configure Global Platform Assertion Thresholds', student: false, mentor: false, org: false, recruiter: false, super: true },
  ];

  return (
    <div className="space-y-6 select-none max-w-5xl mx-auto">
      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] dark:shadow-[4px_4px_0px_#FFD966] p-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF7138]">
          ACCESS CONTROL MATRIX
        </span>
        <h1 className="font-display font-black text-3xl text-[#191A23] dark:text-white mt-1">
          Role-Based Access Control (RBAC) Specification
        </h1>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-sans mt-1">
          SkillBridge strictly partitions capabilities across the 6 participant archetypes to maintain tamper-evident verification boundaries.
        </p>
      </div>

      <div className="bg-white dark:bg-[#212330] border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[4px_4px_0px_#191A23] overflow-x-auto">
        <table className="w-full text-left font-mono text-xs">
          <thead className="bg-[#191A23] text-white">
            <tr>
              <th className="p-3">CAPABILITY / WORKFLOW</th>
              <th className="p-3 text-center">STUDENT</th>
              <th className="p-3 text-center">MENTOR</th>
              <th className="p-3 text-center">ORG ADMIN</th>
              <th className="p-3 text-center">RECRUITER</th>
              <th className="p-3 text-center">SUPER ADMIN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
            {permissions.map((p, i) => (
              <tr key={i} className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                <td className="p-3 font-bold text-[#191A23] dark:text-white font-sans">{p.capability}</td>
                <td className="p-3 text-center">{p.student ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}</td>
                <td className="p-3 text-center">{p.mentor ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}</td>
                <td className="p-3 text-center">{p.org ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}</td>
                <td className="p-3 text-center">{p.recruiter ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}</td>
                <td className="p-3 text-center">{p.super ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-stone-300 mx-auto" />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
