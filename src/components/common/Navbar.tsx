import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { SkillBridgeLogo } from '../brand/SkillBridgeLogo';
import { ThemeToggle } from '../../animations/interactions/ThemeToggle';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  LogOut, 
  Menu, 
  X,
  PlayCircle
} from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const { currentRole, currentUser, activeTab, setActiveTab, logout } = useAuthRole();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isPublic = currentRole === 'PUBLIC';

  return (
    <header className="sticky top-[37px] z-40 bg-[#F8F3E9] dark:bg-[#191A23] border-b-2 border-[#191A23] dark:border-[#3B3E54] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <div 
          onClick={() => isPublic ? setActiveTab('landing') : setActiveTab('dashboard')}
          className="cursor-pointer select-none"
        >
          <SkillBridgeLogo 
            variant="horizontal" 
            size="md" 
            animated={true}
          />
        </div>

        {/* Public Navigation Links */}
        {isPublic && (
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs font-bold uppercase tracking-wider">
            <button 
              onClick={() => setActiveTab('landing')}
              className={`pb-1 border-b-2 transition-all ${activeTab === 'landing' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('how-it-works')}
              className={`pb-1 border-b-2 transition-all ${activeTab === 'how-it-works' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              Verification Pipeline
            </button>
            <button 
              onClick={() => setActiveTab('features')}
              className={`pb-1 border-b-2 transition-all ${activeTab === 'features' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              Platform Capabilities
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`pb-1 border-b-2 transition-all ${activeTab === 'about' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              Manifesto
            </button>
          </nav>
        )}

        {/* Action Controls & Profile */}
        <div className="flex items-center gap-3">
          {/* Replay Brand Intro Button */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay Brand Intro"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 border border-[#191A23] dark:border-stone-600 bg-white dark:bg-[#282B3A] text-[#191A23] dark:text-stone-300 text-[10px] font-mono font-bold uppercase hover:bg-[#FFD966] hover:text-[#191A23] transition-colors"
            >
              <PlayCircle className="w-3.5 h-3.5 text-[#3657F0]" />
              <span>Replay Intro</span>
            </button>
          )}

          {/* Animated Theme Toggle */}
          <ThemeToggle />

          {isPublic ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('login')}
                className="hidden sm:inline-flex px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-[#F8F3E9] border-2 border-transparent hover:border-[#191A23] dark:hover:border-stone-500 transition-all"
              >
                Sign In
              </button>
              <MagneticButton
                onClick={() => setActiveTab('register')}
                className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-[#FF7138] text-white border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Get Verified
              </MagneticButton>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Active Role Badge */}
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 dark:text-stone-400">
                  Active Persona
                </span>
                <span className="text-xs font-mono font-extrabold text-[#3657F0] dark:text-[#FFD966]">
                  {currentUser?.name} ({currentRole})
                </span>
              </div>

              {currentUser && (
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  className="w-10 h-10 rounded-none border-2 border-[#191A23] object-cover shadow-[2px_2px_0px_#191A23]"
                />
              )}

              {/* Logout / Exit button */}
              <button
                onClick={logout}
                title="Exit to Public View"
                className="p-2 border-2 border-[#191A23] bg-[#FFD966] text-[#191A23] shadow-[2px_2px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-mono font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Exit</span>
              </button>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border-2 border-[#191A23] bg-white dark:bg-[#282B3A] text-[#191A23] dark:text-[#F8F3E9]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#191A23] bg-[#F8F3E9] dark:bg-[#191A23] p-4 flex flex-col gap-3 font-mono text-sm font-bold">
          {isPublic ? (
            <>
              <button onClick={() => { setActiveTab('landing'); setMobileMenuOpen(false); }} className="text-left py-1">Overview</button>
              <button onClick={() => { setActiveTab('how-it-works'); setMobileMenuOpen(false); }} className="text-left py-1">Verification Pipeline</button>
              <button onClick={() => { setActiveTab('features'); setMobileMenuOpen(false); }} className="text-left py-1">Capabilities</button>
              <button onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }} className="text-left py-1">Manifesto</button>
              <div className="pt-2 border-t border-[#191A23]/20 flex gap-2">
                <button onClick={() => { setActiveTab('login'); setMobileMenuOpen(false); }} className="flex-1 py-2 text-center border-2 border-[#191A23]">Sign In</button>
                <button onClick={() => { setActiveTab('register'); setMobileMenuOpen(false); }} className="flex-1 py-2 text-center bg-[#FF7138] text-white border-2 border-[#191A23]">Get Verified</button>
              </div>
            </>
          ) : (
            <div>
              <p className="text-xs text-stone-500 mb-2">Signed in as {currentUser?.name} ({currentRole})</p>
              <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="w-full py-2 bg-[#FFD966] text-[#191A23] border-2 border-[#191A23]">
                Exit Role View
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
