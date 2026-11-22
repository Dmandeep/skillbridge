import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthRoleProvider, useAuthRole } from './context/AuthRoleContext';
import { DataProvider } from './context/DataContext';

// Motion & Utility Components
import { ScrollProgressBar } from './animations/scrolling/ScrollProgressBar';
import { PageTransition } from './animations/transitions/PageTransition';
import { SmoothScroll } from './animations/scrolling/SmoothScroll';

// Common Components
import { RoleSwitcherBar } from './components/common/RoleSwitcherBar';
import { Navbar } from './components/common/Navbar';
import { Sidebar } from './components/common/Sidebar';
import { Footer } from './components/public/Footer';

// Public Views
import { LandingView } from './views/public/LandingView';
import { AboutView } from './views/public/AboutView';
import { HowItWorksView } from './views/public/HowItWorksView';
import { FeaturesView } from './views/public/FeaturesView';
import { LoginView } from './views/public/LoginView';
import { RegisterView } from './views/public/RegisterView';

// Student Views
import { StudentDashboardView } from './views/student/StudentDashboardView';
import { StudentProfileView } from './views/student/StudentProfileView';
import { StudentSkillsView } from './views/student/StudentSkillsView';
import { StudentProjectsView } from './views/student/StudentProjectsView';
import { StudentAssessmentResultsView } from './views/student/StudentAssessmentResultsView';
import { StudentMentorFeedbackView } from './views/student/StudentMentorFeedbackView';
import { StudentPassportView } from './views/student/StudentPassportView';
import { StudentPortfolioView } from './views/student/StudentPortfolioView';
import { StudentRecruiterPermissionsView } from './views/student/StudentRecruiterPermissionsView';

// Mentor Views
import { MentorDashboardView } from './views/mentor/MentorDashboardView';
import { MentorStudentsView } from './views/mentor/MentorStudentsView';
import { MentorReviewView } from './views/mentor/MentorReviewView';
import { MentorAssessmentsView } from './views/mentor/MentorAssessmentsView';
import { MentorDecisionsView } from './views/mentor/MentorDecisionsView';
import { MentorProgressView } from './views/mentor/MentorProgressView';

// Org Admin Views
import { OrgDashboardView } from './views/org/OrgDashboardView';
import { OrgStudentsView } from './views/org/OrgStudentsView';
import { OrgMentorsView } from './views/org/OrgMentorsView';
import { OrgMembershipRequestsView } from './views/org/OrgMembershipRequestsView';
import { OrgProgramsView } from './views/org/OrgProgramsView';
import { OrgAnalyticsView } from './views/org/OrgAnalyticsView';

// Recruiter Views
import { RecruiterDashboardView } from './views/recruiter/RecruiterDashboardView';
import { RecruiterDiscoveryView } from './views/recruiter/RecruiterDiscoveryView';
import { RecruiterCandidateSearch } from './views/recruiter/RecruiterCandidateSearch';
import { RecruiterAccessRequestsView } from './views/recruiter/RecruiterAccessRequestsView';
import { RecruiterSavedCandidatesView } from './views/recruiter/RecruiterSavedCandidatesView';

const MainAppContent: React.FC = () => {
  const { currentRole, activeTab } = useAuthRole();

  const renderContent = () => {
    // 1. PUBLIC ROUTING
    if (currentRole === 'PUBLIC') {
      switch (activeTab) {
        case 'about': return <AboutView />;
        case 'how-it-works': return <HowItWorksView />;
        case 'features': return <FeaturesView />;
        case 'login': return <LoginView />;
        case 'register': return <RegisterView />;
        case 'landing':
        default:
          return <LandingView />;
      }
    }

    // 2. STUDENT ROUTING
    if (currentRole === 'STUDENT') {
      switch (activeTab) {
        case 'profile': return <StudentProfileView />;
        case 'skills': return <StudentSkillsView />;
        case 'projects': return <StudentProjectsView />;
        case 'assessment-results': return <StudentAssessmentResultsView />;
        case 'mentor-feedback': return <StudentMentorFeedbackView />;
        case 'passport': return <StudentPassportView />;
        case 'portfolio': return <StudentPortfolioView />;
        case 'recruiter-permissions': return <StudentRecruiterPermissionsView />;
        case 'dashboard':
        default:
          return <StudentDashboardView />;
      }
    }

    // 3. MENTOR ROUTING
    if (currentRole === 'MENTOR') {
      switch (activeTab) {
        case 'assigned-students': return <MentorStudentsView />;
        case 'submission-review': return <MentorReviewView />;
        case 'assessment-reports': return <MentorAssessmentsView />;
        case 'verification-decisions': return <MentorDecisionsView />;
        case 'student-progress': return <MentorProgressView />;
        case 'dashboard':
        default:
          return <MentorDashboardView />;
      }
    }

    // 4. ORG ADMIN ROUTING
    if (currentRole === 'ORG_ADMIN') {
      switch (activeTab) {
        case 'student-management': return <OrgStudentsView />;
        case 'mentor-management': return <OrgMentorsView />;
        case 'membership-requests': return <OrgMembershipRequestsView />;
        case 'programs': return <OrgProgramsView />;
        case 'analytics': return <OrgAnalyticsView />;
        case 'dashboard':
        default:
          return <OrgDashboardView />;
      }
    }

    // 5. RECRUITER ROUTING
    if (currentRole === 'RECRUITER') {
      switch (activeTab) {
        case 'talent-discovery': return <RecruiterDiscoveryView />;
        case 'candidate-search': return <RecruiterCandidateSearch />;
        case 'access-requests': return <RecruiterAccessRequestsView />;
        case 'saved-candidates': return <RecruiterSavedCandidatesView />;
        case 'dashboard':
        default:
          return <RecruiterDashboardView />;
      }
    }

    return <LandingView />;
  };

  const isPublic = currentRole === 'PUBLIC';
  const pageRouteKey = `${currentRole}_${activeTab}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] dark:bg-[#191A23] text-[#191A23] dark:text-[#F8F3E9] transition-colors duration-200 selection:bg-[#FFD966] selection:text-[#191A23]">
      {/* 1. Global Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* 2. Global Role Explorer Ribbon */}
      <RoleSwitcherBar />

      {/* 3. Global Navbar */}
      <Navbar />

      {/* 4. Main Content Area */}
      {isPublic ? (
        <main className="flex-1">
          <PageTransition pageKey={pageRouteKey}>
            {renderContent()}
          </PageTransition>
          <Footer />
        </main>
      ) : (
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Internal Role Sidebar */}
          <Sidebar />

          {/* Active Internal View Area */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl overflow-x-hidden">
            <PageTransition pageKey={pageRouteKey}>
              {renderContent()}
            </PageTransition>
          </main>
        </div>
      )}
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AuthRoleProvider>
        <DataProvider>
          <SmoothScroll>
            <MainAppContent />
          </SmoothScroll>
        </DataProvider>
      </AuthRoleProvider>
    </ThemeProvider>
  );
}

export default App;
