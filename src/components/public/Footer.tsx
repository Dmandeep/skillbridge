import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';

export const Footer: React.FC = () => {
  const { setActiveTab } = useAuthRole();

  return (
    <footer className="bg-[#191A23] text-white border-t-4 border-[#191A23] py-12 px-4 sm:px-6 lg:px-8 font-mono select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#3657F0] border-2 border-white flex items-center justify-center font-display font-black text-[#FFD966]">
              SB
            </div>
            <span className="font-display font-black text-xl tracking-tight text-white">
              SKILLBRIDGE
            </span>
          </div>
          <p className="font-sans text-xs text-stone-400 max-w-sm leading-relaxed">
            "Skills Demonstrated. Talent Verified. Opportunities Connected."
            The decentralized standard for practical code assertion and human mentor verification.
          </p>
          <div className="text-[10px] text-stone-500">
            Official Brand Palette: Electric Cobalt #3657F0 &bull; Tangerine Orange #FF7138 &bull; Butter Yellow #FFD966 &bull; Warm Ivory #F8F3E9 &bull; Ink Black #191A23
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <span className="font-bold text-[#FFD966] uppercase block">Platform</span>
          <div className="flex flex-col gap-1 text-stone-400">
            <button onClick={() => setActiveTab('how-it-works')} className="text-left hover:text-white">Verification Engine</button>
            <button onClick={() => setActiveTab('features')} className="text-left hover:text-white">Role Capabilities</button>
            <button onClick={() => setActiveTab('about')} className="text-left hover:text-white">SkillBridge Manifesto</button>
            <button onClick={() => setActiveTab('login')} className="text-left hover:text-white">Demonstration Sandbox</button>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <span className="font-bold text-[#FF7138] uppercase block">Governance</span>
          <div className="flex flex-col gap-1 text-stone-400 text-[11px]">
            <span>Phase 1 Frontend Prototype</span>
            <span>REST API Ready Architecture</span>
            <span>Student Data Sovereignty</span>
            <span>W3C Verifiable Credentials</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
        <span>&copy; 2026 SkillBridge Platform Foundation. All rights reserved.</span>
        <span className="text-stone-400">Crafted with Editorial &amp; Playful Maximalism</span>
      </div>
    </footer>
  );
};
