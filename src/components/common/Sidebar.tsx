import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';
import { useData } from '../../context/DataContext';
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

  // 1. Student Navigation (Simple & Friendly)
  const studentNav: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'profile', label: 'My Profile', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'My Skills', icon: <Award className="w-4 h-4" /> },
    { id: 'projects', label: 'My Projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'assessment-results', label: 'Test Results', icon: <FileCheck2 className="w-4 h-4" /> },
    { id: 'mentor-feedback', label: 'Teacher Feedback', icon: <MessageSquareCheck className="w-4 h-4" /> },
    { id: 'passport', label: 'Skills Passport', icon: <QrCode className="w-4 h-4 text-[#FF7138]" /> },
    { id: 'portfolio', label: 'My Portfolio', icon: <Eye className="w-4 h-4" /> },
    { 
      id: 'recruiter-permissions', 
      label: 'Recruiter Requests', 
      icon: <KeyRound className="w-4 h-4" />,
      badge: pendingRecruiterRequests > 0 ? pendingRecruiterRequests : undefined
    },
  ];

  // 2. Teacher Navigation (Simple & Friendly)
  const mentorNav: NavItem[] = [
    { id: 'dashboard', label: 'Teacher Hub', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'assigned-students', label: 'My Students', icon: <Users className="w-4 h-4" /> },
    { 
      id: 'submission-review', 
      label: 'Projects to Review', 
      icon: <ClipboardCheck className="w-4 h-4 text-[#3657F0]" />,
      badge: pendingSubmissionsForMentor > 0 ? pendingSubmissionsForMentor : undefined
    },
    { id: 'assessment-reports', label: 'Test Reports', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: 'verification-decisions', label: 'Graded Projects', icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" /> },
    { id: 'student-progress', label: 'Student Progress', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  // 3. College Admin Navigation (Simple & Friendly)
  const orgAdminNav: NavItem[] = [
    { id: 'dashboard', label: 'College Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'student-management', label: 'Students', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'mentor-management', label: 'Faculty & Teachers', icon: <Users className="w-4 h-4" /> },
    { 
      id: 'membership-requests', 
      label: 'Join Requests', 
      icon: <UserPlus className="w-4 h-4 text-[#FF7138]" />,
      badge: pendingMembershipRequests > 0 ? pendingMembershipRequests : undefined
    },
    { id: 'programs', label: 'Programs & Courses', icon: <Building className="w-4 h-4" /> },
    { id: 'analytics', label: 'College Analytics', icon: <PieChart className="w-4 h-4" /> },
  ];

  // 4. Recruiter Navigation (Simple & Friendly)
  const recruiterNav: NavItem[] = [
    { id: 'dashboard', label: 'Recruiter Hub', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'talent-discovery', label: 'Find Candidates', icon: <Compass className="w-4 h-4 text-emerald-600" /> },
    { id: 'candidate-search', label: 'Search Candidates', icon: <Search className="w-4 h-4" /> },
    { id: 'saved-candidates', label: 'Saved Candidates', icon: <Bookmark className="w-4 h-4 text-[#FFD966]" /> },
    { 
      id: 'access-requests', 
      label: 'Access Requests', 
      icon: <KeyRound className="w-4 h-4" />,
      badge: pendingRecruiterRequests > 0 ? pendingRecruiterRequests : undefined
    },
  ];

  const getNavItems = () => {
    switch (currentRole) {
      case 'STUDENT': return studentNav;
      case 'MENTOR': return mentorNav;
      case 'ORG_ADMIN': return orgAdminNav;
      case 'RECRUITER': return recruiterNav;
      default: return [];
    }
  };

  const navItems = getNavItems();

  const getRoleBadgeLabel = () => {
    switch (currentRole) {
      case 'STUDENT': return 'Student Workspace';
      case 'MENTOR': return 'Teacher Workspace';
      case 'ORG_ADMIN': return 'College Admin Workspace';
      case 'RECRUITER': return 'Recruiter Workspace';
      default: return 'Workspace';
    }
  };

  return (
    <aside className="w-64 shrink-0 bg-[#F2ECE0] dark:bg-[#1E202B] border-r-2 border-[#191A23] dark:border-[#3B3E54] flex flex-col justify-between min-h-[calc(100vh-100px)] select-none">
      <div className="p-4 space-y-4">
        {/* Role Identity Label */}
        <div className="bg-[#191A23] text-white p-3 border-2 border-[#191A23] shadow-[3px_3px_0px_#FFD966]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD966] block font-bold">
            ACTIVE PORTAL
          </span>
          <span className="font-display font-black text-sm tracking-tight text-white block">
            {getRoleBadgeLabel()}
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
                className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-150 border-2 relative cursor-pointer ${
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
                    <span className="bg-[#FF7138] text-white text-[10px] font-bold px-1.5 py-0.2 border border-[#191A23]">
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

      {/* Helpful footer in sidebar */}
      <div className="p-4 border-t-2 border-[#191A23] dark:border-stone-700 text-xs font-mono text-stone-600 dark:text-stone-400">
        <p className="text-[11px]">SkillBridge &bull; Simple &amp; Verified</p>
      </div>
    </aside>
  );
};
