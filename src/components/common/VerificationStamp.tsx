import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

interface VerificationStampProps {
  mentorName: string;
  verificationDate: string;
  hash: string;
  score?: number;
  rotation?: number;
  animated?: boolean;
}

export const VerificationStamp: React.FC<VerificationStampProps> = ({
  mentorName,
  verificationDate,
  hash,
  score = 95,
  rotation = -2,
  animated = true,
}) => {
  return (
    <motion.div 
      initial={animated ? { scale: 1.4, opacity: 0, rotate: rotation - 8 } : false}
      animate={animated ? { scale: 1, opacity: 1, rotate: rotation } : false}
      transition={{ type: 'spring', stiffness: 500, damping: 22, delay: 0.1 }}
      whileHover={{ scale: 1.05, rotate: rotation + 1 }}
      className="inline-block relative select-none cursor-pointer"
    >
      <div className="relative border-4 border-dashed border-[#3657F0] bg-[#FFD966] p-4 text-[#191A23] shadow-[5px_5px_0px_#191A23] max-w-xs transition-shadow hover:shadow-[7px_7px_0px_#191A23]">
        {/* Top header */}
        <div className="flex items-center justify-between border-b-2 border-[#191A23] pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <Award className="w-5 h-5 text-[#3657F0]" />
            <span className="font-editorial font-bold text-xs tracking-wider uppercase">SKILLBRIDGE SEAL</span>
          </div>
          <span className="font-mono text-[10px] font-extrabold bg-[#3657F0] text-white px-1.5 py-0.5">
            SCORE {score}/100
          </span>
        </div>

        {/* Center seal badge */}
        <div className="text-center py-1">
          <div className="inline-flex items-center justify-center gap-1 bg-[#191A23] text-[#FFD966] px-2 py-0.5 font-display font-extrabold text-sm uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-4 h-4 text-[#FF7138]" />
            <span>PRACTICAL VERIFIED</span>
          </div>
          <p className="text-[11px] font-sans font-medium text-[#191A23]/80 leading-tight">
            Code &amp; Architecture Assessed by
          </p>
          <p className="text-xs font-bold font-sans text-[#191A23]">
            {mentorName}
          </p>
        </div>

        {/* Footer info & hash */}
        <div className="border-t-2 border-[#191A23] pt-1.5 mt-2 flex flex-col gap-0.5 text-[9px] font-mono">
          <div className="flex justify-between">
            <span className="text-stone-700">DATE:</span>
            <span className="font-bold">{verificationDate}</span>
          </div>
          <div className="flex justify-between items-center text-[8px] bg-white/70 px-1 py-0.5 border border-[#191A23]/40">
            <span className="text-stone-600">HASH:</span>
            <span className="font-mono truncate max-w-[130px] font-bold text-[#3657F0]">{hash}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
