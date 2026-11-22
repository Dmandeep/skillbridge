import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { SkillBridgeLogo } from '../brand/SkillBridgeLogo';
import { ThemeToggle } from '../../animations/interactions/ThemeToggle';
import { MagneticButton } from '../../animations/interactions/MagneticButton';
import { 
  LogOut, 
  Menu, 
  X
} from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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
            animated={false}
          />
        </div>

        {/* Public Navigation Links */}
        {isPublic && (
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs font-bold uppercase tracking-wider">
            <button 
              onClick={() => setActiveTab('landing')}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${activeTab === 'landing' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('how-it-works')}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${activeTab === 'how-it-works' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              How It Works
            </button>
            <button 
              onClick={() => setActiveTab('features')}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${activeTab === 'features' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              Features
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${activeTab === 'about' ? 'border-[#3657F0] text-[#3657F0] dark:text-[#FFD966]' : 'border-transparent text-stone-700 dark:text-stone-300 hover:text-[#3657F0]'}`}
            >
              About
            </button>
          </nav>
        )}

        {/* Action Controls & Profile */}
        <div className="flex items-center gap-3">
          {/* Animated Theme Toggle */}
          <ThemeToggle />

          {isPublic ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('login')}
                className="hidden sm:inline-flex px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#191A23] dark:text-[#F8F3E9] border-2 border-transparent hover:border-[#191A23] dark:hover:border-stone-500 transition-all cursor-pointer"
              >
                Sign In
              </button>
              <MagneticButton
                onClick={() => setActiveTab('register')}
                className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-[#FF7138] text-white border-2 border-[#191A23] shadow-[3px_3px_0px_#191A23] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                Sign Up Free
              </MagneticButton>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Active Role Badge */}
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 dark:text-stone-400">
                  Signed in as
                </span>
                <span className="text-xs font-display font-black text-[#191A23] dark:text-white">
                  {currentUser?.name || 'User'}
                </span>
              </div>

              {/* Avatar */}
              {currentUser?.avatar && (
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name}
                  className="w-9 h-9 rounded-full border-2 border-[#191A23] dark:border-white object-cover"
                />
              )}

              {/* Sign Out Action */}
              <button
                onClick={logout}
                title="Sign out of current view"
                className="p-2 border-2 border-[#191A23] dark:border-[#3B3E54] bg-white dark:bg-[#282B3A] text-stone-700 dark:text-stone-300 hover:bg-[#FF7138] hover:text-white transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Mobile hamburger menu toggle */}
          {isPublic && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-2 border-[#191A23] dark:border-[#3B3E54] bg-white dark:bg-[#282B3A] text-[#191A23] dark:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isPublic && mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#191A23] dark:border-[#3B3E54] bg-[#F8F3E9] dark:bg-[#191A23] p-4 space-y-3 font-mono text-sm font-bold">
          <button 
            onClick={() => { setActiveTab('landing'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-1.5 hover:text-[#3657F0]"
          >
            Home
          </button>
          <button 
            onClick={() => { setActiveTab('how-it-works'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-1.5 hover:text-[#3657F0]"
          >
            How It Works
          </button>
          <button 
            onClick={() => { setActiveTab('features'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-1.5 hover:text-[#3657F0]"
          >
            Features
          </button>
          <button 
            onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-1.5 hover:text-[#3657F0]"
          >
            About
          </button>
          <div className="pt-2 border-t border-stone-300 dark:border-stone-700 flex flex-col gap-2">
            <button
              onClick={() => { setActiveTab('login'); setMobileMenuOpen(false); }}
              className="w-full py-2 text-center border-2 border-[#191A23] text-xs font-bold uppercase"
            >
              Sign In
            </button>
            <button
              onClick={() => { setActiveTab('register'); setMobileMenuOpen(false); }}
              className="w-full py-2 text-center bg-[#FF7138] text-white border-2 border-[#191A23] text-xs font-bold uppercase"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
