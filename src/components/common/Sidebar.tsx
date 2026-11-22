import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  User, 
  Award, 
  FolderGit2, 
  Flame, 
  FileCheck2, 
  MessageSquareCheck, 
  QrCode, 
  Eye, 
  KeyRound,
  Users, 
  ClipboardCheck, 
  FileSpreadsheet, 
  CheckCircle2, 
  TrendingUp,
  Building, 
  UserPlus, 
  GraduationCap, 
  PieChart, 
  Compass, 
  Search, 
  Bookmark, 
  ShieldCheck, 
  Sliders, 
  ScrollText, 
  Building2,
  ChevronRight
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

export const Sidebar: React.FC = () => {
  const { currentRole, activeTab, setActiveTab } = useAuthRole();
  const { recruiterRequests, membershipRequests, submissions } = useData();

  if (currentRole === 'PUBLIC') return null;

  // Pending counts
  const pendingRecruiterRequests = recruiterRequests.filter(r => r.status === 'PENDING').length;
  const pendingMembershipRequests = membershipRequests.filter(m => m.status === 'PENDING').length;
  const pendingSubmissionsForMentor = submissions.filter(s => s.status === 'EVIDENCE_SUBMITTED').length;

  // Role Navigation Menus
  const studentNav: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'profile', label: 'My Profile', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skill Inventory', icon: <Award className="w-4 h-4" /> },
    { id: 'projects', label: 'My Projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'challenges', label: 'Skill Challenges', icon: <Flame className="w-4 h-4" /> },
    { id: 'assessment-results', label: 'Automated Runner', icon: <FileCheck2 className="w-4 h-4" /> },
    { id: 'mentor-feedback', label: 'Mentor Reviews', icon: <MessageSquareCheck className="w-4 h-4" /> },
    { id: 'passport', label: 'Verification Passport', icon: <QrCode className="w-4 h-4 text-[#FF7138]" /> },
    { id: 'portfolio', label: 'Public Portfolio', icon: <Eye className="w-4 h-4" /> },
    { 
      id: 'recruiter-permissions', 
      label: 'Recruiter Requests', 
      icon: <KeyRound className="w-4 h-4" />,
      badge: pendingRecruiterRequests > 0 ? pendingRecruiterRequests : undefined
    },
  ];

  const mentorNav: NavItem[] = [
    { id: 'dashboard', label: 'Mentor Hub', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'assigned-students', label: 'Assigned Mentees', icon: <Users className="w-4 h-4" /> },
    { 
      id: 'submission-review', 
      label: 'Review Queue', 
      icon: <ClipboardCheck className="w-4 h-4 text-[#3657F0]" />,
      badge: pendingSubmissionsForMentor > 0 ? pendingSubmissionsForMentor : undefined
    },
    { id: 'assessment-reports', label: 'Automated Reports', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: 'verification-decisions', label: 'Attested Stamped Logs', icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" /> },
    { id: 'student-progress', label: 'Cohort Velocity', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const orgAdminNav: NavItem[] = [
    { id: 'dashboard', label: 'Institution Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'student-management', label: 'Student Directory', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'mentor-management', label: 'Faculty & Mentors', icon: <Users className="w-4 h-4" /> },
    { 
      id: 'membership-requests', 
      label: 'Affiliation Requests', 
      icon: <UserPlus className="w-4 h-4 text-[#FF7138]" />,
      badge: pendingMembershipRequests > 0 ? pendingMembershipRequests : undefined
    },
    { id: 'programs', label: 'Curriculum & Tracks', icon: <Building className="w-4 h-4" /> },
    { id: 'analytics', label: 'Institution Analytics', icon: <PieChart className="w-4 h-4" /> },
  ];

  const recruiterNav: NavItem[] = [
    { id: 'dashboard', label: 'Recruiter Hub', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'talent-discovery', label: 'Candidate Radar', icon: <Compass className="w-4 h-4 text-emerald-600" /> },
    { id: 'candidate-search', label: 'Deep Talent Search', icon: <Search className="w-4 h-4" /> },
    { id: 'saved-candidates', label: 'Shortlisted Pipeline', icon: <Bookmark className="w-4 h-4 text-[#FFD966]" /> },
    { 
      id: 'access-requests', 
      label: 'Dossier Access Logs', 
      icon: <KeyRound className="w-4 h-4" />,
      badge: pendingRecruiterRequests > 0 ? pendingRecruiterRequests : undefined
    },
  ];

  const superAdminNav: NavItem[] = [
    { id: 'dashboard', label: 'Network Command', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'user-management', label: 'Identity Registry', icon: <Users className="w-4 h-4" /> },
    { id: 'role-management', label: 'RBAC Policy Matrix', icon: <ShieldCheck className="w-4 h-4 text-[#3657F0]" /> },
    { id: 'org-management', label: 'Accredited Unis', icon: <Building2 className="w-4 h-4 text-[#FF7138]" /> },
    { id: 'admin-appointments', label: 'Appoint Administrators', icon: <UserPlus className="w-4 h-4" /> },
    { id: 'platform-analytics', label: 'Global Telemetry', icon: <PieChart className="w-4 h-4" /> },
    { id: 'audit-logs', label: 'Immutable Audit Trail', icon: <ScrollText className="w-4 h-4 text-[#FFD966]" /> },
    { id: 'system-settings', label: 'Sandbox Config', icon: <Sliders className="w-4 h-4" /> },
  ];

  const getNavItems = () => {
    switch (currentRole) {
      case 'STUDENT': return studentNav;
      case 'MENTOR': return mentorNav;
      case 'ORG_ADMIN': return orgAdminNav;
      case 'RECRUITER': return recruiterNav;
      case 'SUPER_ADMIN':
      case 'ADDITIONAL_ADMIN':
        return superAdminNav;
      default: return [];
    }
  };

  const navItems = getNavItems();

  return (
    <aside className="w-64 shrink-0 bg-[#F2ECE0] dark:bg-[#1E202B] border-r-2 border-[#191A23] dark:border-[#3B3E54] flex flex-col justify-between min-h-[calc(100vh-100px)] select-none">
      <div className="p-4 space-y-4">
        {/* Role Identity Label */}
        <div className="bg-[#191A23] text-white p-3 border-2 border-[#191A23] shadow-[3px_3px_0px_#FFD966] transition-transform hover:scale-[1.02]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD966] block font-bold">
            WORKSPACE VIEW
          </span>
          <span className="font-display font-black text-sm uppercase tracking-tight text-white block">
            {currentRole.replace('_', ' ')}
          </span>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-150 border-2 relative cursor-pointer ${
                  isActive 
                    ? 'bg-[#3657F0] text-white border-[#191A23] shadow-[3px_3px_0px_#191A23] translate-x-1' 
                    : 'bg-white/60 dark:bg-[#282B3A]/60 text-stone-700 dark:text-stone-300 border-transparent hover:border-[#191A23] hover:bg-white dark:hover:bg-[#282B3A] hover:translate-x-0.5'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className={`transition-transform duration-150 ${isActive ? 'text-[#FFD966] scale-110' : 'text-stone-500'}`}>
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {item.badge !== undefined && (
                    <span className="bg-[#FF7138] text-white text-[10px] font-bold px-1.5 py-0.2 border border-[#191A23] animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#FFD966]" />}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Verification Protocol Tag */}
      <div className="p-4 border-t-2 border-[#191A23]/20 dark:border-white/10">
        <div className="bg-white dark:bg-[#282B3A] p-2.5 border-2 border-[#191A23] dark:border-[#3B3E54] shadow-[2px_2px_0px_#191A23]">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-stone-600 dark:text-stone-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>PROOF ENGINE ONLINE</span>
          </div>
          <div className="text-[9px] font-mono text-stone-500 dark:text-stone-400 mt-1">
            Build: Phase 1 Interactive Sandbox
          </div>
        </div>
      </div>
    </aside>
  );
};
