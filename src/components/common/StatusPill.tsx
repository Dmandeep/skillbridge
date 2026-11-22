import React from 'react';
import { VerificationStatus } from '../../types';
import { ShieldCheck, Clock, FileCode, AlertCircle, XCircle } from 'lucide-react';

interface StatusPillProps {
  status: VerificationStatus;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusPill: React.FC<StatusPillProps> = ({ status, size = 'md' }) => {
  const getStyle = () => {
    switch (status) {
      case 'MENTOR_VERIFIED':
        return {
          bg: 'bg-[#FFD966] text-[#191A23] border-[#191A23]',
          icon: <ShieldCheck className="w-4 h-4 text-[#3657F0]" />,
          label: 'MENTOR VERIFIED'
        };
      case 'EVIDENCE_SUBMITTED':
        return {
          bg: 'bg-[#3657F0] text-white border-[#191A23]',
          icon: <FileCode className="w-4 h-4 text-[#FFD966]" />,
          label: 'EVIDENCE SUBMITTED'
        };
      case 'SELF_DECLARED':
        return {
          bg: 'bg-[#F2ECE0] dark:bg-[#282B3A] text-[#191A23] dark:text-[#F8F3E9] border-[#191A23] dark:border-[#3B3E54]',
          icon: <Clock className="w-4 h-4 text-[#FF7138]" />,
          label: 'SELF-DECLARED'
        };
      case 'REVISION_REQUESTED':
        return {
          bg: 'bg-[#FF7138] text-white border-[#191A23]',
          icon: <AlertCircle className="w-4 h-4 text-white" />,
          label: 'REVISION REQUESTED'
        };
      case 'REJECTED':
        return {
          bg: 'bg-red-500 text-white border-[#191A23]',
          icon: <XCircle className="w-4 h-4 text-white" />,
          label: 'NOT VERIFIED'
        };
    }
  };

  const config = getStyle();
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : size === 'lg' ? 'text-sm px-3.5 py-1.5' : 'text-xs px-2.5 py-1';

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider border-2 shadow-[2px_2px_0px_#191A23] ${config.bg} ${sizeClasses}`}>
      {config.icon}
      <span>{config.label}</span>
    </span>
  );
};
