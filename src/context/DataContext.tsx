import React, { createContext, useContext, useState } from 'react';
import { 
  ProjectSubmission, 
  SkillItem, 
  RecruiterAccessRequest, 
  OrgMembershipRequest, 
  AuditLogEntry, 
  Challenge,
  VerificationStatus
} from '../types';
import { 
  MOCK_SUBMISSIONS, 
  MOCK_SKILLS, 
  MOCK_RECRUITER_REQUESTS, 
  MOCK_ORG_MEMBERSHIP_REQUESTS, 
  MOCK_AUDIT_LOGS,
  MOCK_CHALLENGES 
} from '../constants/mockData';

interface DataContextType {
  submissions: ProjectSubmission[];
  skills: SkillItem[];
  challenges: Challenge[];
  recruiterRequests: RecruiterAccessRequest[];
  membershipRequests: OrgMembershipRequest[];
  auditLogs: AuditLogEntry[];
  savedCandidateIds: string[];
  
  // Actions
  submitProject: (newSub: Omit<ProjectSubmission, 'id' | 'submittedAt' | 'status'>) => void;
  evaluateSubmissionAutomated: (submissionId: string) => void;
  mentorDecideSubmission: (
    submissionId: string, 
    decision: 'APPROVED_WITH_DISTINCTION' | 'VERIFIED' | 'NEEDS_REVISION' | 'REJECTED',
    feedback: string,
    scores: { quality: number; design: number; problemSolving: number }
  ) => void;
  
  // Recruiter actions
  requestCandidateAccess: (studentId: string, roleTitle: string, note: string) => void;
  updateRecruiterRequestStatus: (requestId: string, status: 'APPROVED' | 'REJECTED' | 'REVOKED') => void;
  toggleSaveCandidate: (candidateId: string) => void;
  
  // Org Admin actions
  reviewMembershipRequest: (requestId: string, decision: 'APPROVED' | 'REJECTED') => void;
  
  // Student registration request
  requestOrgMembership: (data: {
    studentName: string;
    studentEmail: string;
    programEnrolled: string;
    graduationYear: number;
    studentIdNumber: string;
  }) => void;

  // Add skill
  addSelfDeclaredSkill: (skillName: string, category: SkillItem['category']) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [submissions, setSubmissions] = useState<ProjectSubmission[]>(MOCK_SUBMISSIONS);
  const [skills, setSkills] = useState<SkillItem[]>(MOCK_SKILLS);
  const [challenges] = useState<Challenge[]>(MOCK_CHALLENGES);
  const [recruiterRequests, setRecruiterRequests] = useState<RecruiterAccessRequest[]>(MOCK_RECRUITER_REQUESTS);
  const [membershipRequests, setMembershipRequests] = useState<OrgMembershipRequest[]>(MOCK_ORG_MEMBERSHIP_REQUESTS);
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(MOCK_AUDIT_LOGS);
  const [savedCandidateIds, setSavedCandidateIds] = useState<string[]>(['usr_std_01']);

  const addAuditLog = (
    actorName: string, 
    actorRole: AuditLogEntry['actorRole'], 
    action: string, 
    entityType: AuditLogEntry['entityType'], 
    details: string
  ) => {
    const newEntry: AuditLogEntry = {
      id: `log_${Date.now()}`,
      actorName,
      actorRole,
      action,
      entityType,
      details,
      timestamp: new Date().toISOString(),
      ipHash: '127.0.0.1 (local)',
      immutableBlockIndex: 10460 + auditLogs.length + 1
    };
    setAuditLogs(prev => [newEntry, ...prev]);
  };

  const submitProject = (newSub: Omit<ProjectSubmission, 'id' | 'submittedAt' | 'status'>) => {
    const id = `sub_${Date.now()}`;
    const submission: ProjectSubmission = {
      ...newSub,
      id,
      submittedAt: new Date().toISOString(),
      status: 'EVIDENCE_SUBMITTED',
      automatedTestResults: {
        testPassed: 24,
        testTotal: 25,
        codeCoveragePercent: 91.2,
        cyclomaticComplexity: 'Low',
        securityFlawsDetected: 0,
        executionTimeMs: 1150,
        automatedFeedback: [
          'Static AST analysis completed with 0 high-severity security advisories.',
          'Unit & integration runner finished in 1150ms with 24/25 assertions passing.',
          'Evidence bundle hashed and dispatched to assigned mentor queue.'
        ]
      }
    };

    setSubmissions(prev => [submission, ...prev]);
    
    // Update matching skills if any
    setSkills(prev => prev.map(s => {
      if (newSub.skillTags.some(t => t.toLowerCase().includes(s.name.toLowerCase()))) {
        return {
          ...s,
          verificationStatus: 'EVIDENCE_SUBMITTED',
          evidenceCount: s.evidenceCount + 1
        };
      }
      return s;
    }));

    addAuditLog(
      newSub.studentName,
      'STUDENT',
      'PROJECT_EVIDENCE_SUBMITTED',
      'VERIFICATION',
      `Submitted project "${newSub.title}" with automated runner score 91.2% coverage.`
    );
  };

  const evaluateSubmissionAutomated = (submissionId: string) => {
    setSubmissions(prev => prev.map(sub => {
      if (sub.id === submissionId) {
        return {
          ...sub,
          automatedTestResults: {
            testPassed: 48,
            testTotal: 48,
            codeCoveragePercent: 98.2,
            cyclomaticComplexity: 'Low',
            securityFlawsDetected: 0,
            executionTimeMs: 980,
            automatedFeedback: [
              'Re-run complete: 100% assertions green.',
              'Fuzzing test passed 10,000 synthetic inputs without unhandled exceptions.'
            ]
          }
        };
      }
      return sub;
    }));
  };

  const mentorDecideSubmission = (
    submissionId: string, 
    decision: 'APPROVED_WITH_DISTINCTION' | 'VERIFIED' | 'NEEDS_REVISION' | 'REJECTED',
    feedback: string,
    scores: { quality: number; design: number; problemSolving: number }
  ) => {
    const hash = `SHA256: ${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}`;
    const newStatus: VerificationStatus = 
      decision === 'APPROVED_WITH_DISTINCTION' || decision === 'VERIFIED'
        ? 'MENTOR_VERIFIED'
        : decision === 'NEEDS_REVISION'
        ? 'REVISION_REQUESTED'
        : 'REJECTED';

    let targetStudentName = '';
    let targetProjectTitle = '';

    setSubmissions(prev => prev.map(sub => {
      if (sub.id === submissionId) {
        targetStudentName = sub.studentName;
        targetProjectTitle = sub.title;
        return {
          ...sub,
          status: newStatus,
          mentorReview: {
            mentorId: 'usr_men_01',
            mentorName: 'Dr. Elena Rostova',
            mentorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
            reviewedAt: new Date().toISOString(),
            codeQualityScore: scores.quality,
            systemDesignScore: scores.design,
            problemSolvingScore: scores.problemSolving,
            decision,
            detailedComments: feedback,
            verificationHash: hash
          }
        };
      }
      return sub;
    }));

    if (newStatus === 'MENTOR_VERIFIED') {
      // Elevate student skills
      setSkills(prev => prev.map(s => {
        return {
          ...s,
          verificationStatus: 'MENTOR_VERIFIED',
          verifiedByMentorName: 'Dr. Elena Rostova',
          verificationDate: new Date().toISOString().split('T')[0],
          badgeHash: hash.replace('SHA256: ', '0x')
        };
      }));
    }

    addAuditLog(
      'Dr. Elena Rostova',
      'MENTOR',
      `MENTOR_VERIFICATION_${decision}`,
      'VERIFICATION',
      `Evaluated submission "${targetProjectTitle}" for ${targetStudentName}. Result: ${decision}. Stamp: ${hash}.`
    );
  };

  const requestCandidateAccess = (studentId: string, roleTitle: string, note: string) => {
    const newReq: RecruiterAccessRequest = {
      id: `req_${Date.now()}`,
      recruiterId: 'usr_rec_01',
      recruiterName: 'Sophia Chen',
      recruiterCompany: 'Strata Cloud Solutions',
      recruiterAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      studentId,
      studentName: 'Aarav Sharma',
      targetRoleTitle: roleTitle || 'Software Engineer',
      requestedAt: new Date().toISOString(),
      status: 'PENDING',
      message: note || 'Requesting verified audit dossier and repository execution proofs.'
    };

    setRecruiterRequests(prev => [newReq, ...prev]);

    addAuditLog(
      'Sophia Chen',
      'RECRUITER',
      'ACCESS_REQUEST_SUBMITTED',
      'PERMISSION',
      `Requested full verified dossier access for candidate ID ${studentId} for role "${newReq.targetRoleTitle}".`
    );
  };

  const updateRecruiterRequestStatus = (requestId: string, status: 'APPROVED' | 'REJECTED' | 'REVOKED') => {
    setRecruiterRequests(prev => prev.map(r => {
      if (r.id === requestId) {
        return {
          ...r,
          status,
          expiresAt: status === 'APPROVED' ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : undefined
        };
      }
      return r;
    }));

    addAuditLog(
      'Aarav Sharma',
      'STUDENT',
      `RECRUITER_ACCESS_${status}`,
      'PERMISSION',
      `Student transitioned recruiter access request ${requestId} to status ${status}.`
    );
  };

  const toggleSaveCandidate = (candidateId: string) => {
    setSavedCandidateIds(prev => 
      prev.includes(candidateId) ? prev.filter(id => id !== candidateId) : [...prev, candidateId]
    );
  };

  const reviewMembershipRequest = (requestId: string, decision: 'APPROVED' | 'REJECTED') => {
    let studentName = '';
    setMembershipRequests(prev => prev.map(m => {
      if (m.id === requestId) {
        studentName = m.studentName;
        return { ...m, status: decision };
      }
      return m;
    }));

    addAuditLog(
      'Marcus Vance',
      'ORG_ADMIN',
      `ORG_MEMBERSHIP_${decision}`,
      'ORGANIZATION',
      `Institution membership request for ${studentName} was ${decision.toLowerCase()} by Dean Vance.`
    );
  };

  const requestOrgMembership = (data: {
    studentName: string;
    studentEmail: string;
    programEnrolled: string;
    graduationYear: number;
    studentIdNumber: string;
  }) => {
    const newReq: OrgMembershipRequest = {
      id: `org_req_${Date.now()}`,
      studentId: `usr_std_${Date.now()}`,
      studentName: data.studentName,
      studentEmail: data.studentEmail,
      studentAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      programEnrolled: data.programEnrolled,
      graduationYear: data.graduationYear,
      studentIdNumber: data.studentIdNumber,
      requestedAt: new Date().toISOString(),
      status: 'PENDING',
      organizationId: 'org_mit_01'
    };

    setMembershipRequests(prev => [newReq, ...prev]);

    addAuditLog(
      data.studentName,
      'STUDENT',
      'ORG_AFFILIATION_REQUESTED',
      'ORGANIZATION',
      `Independent student registered via Google and requested membership at Apex Institute of Technology.`
    );
  };

  const addSelfDeclaredSkill = (skillName: string, category: SkillItem['category']) => {
    const newSkill: SkillItem = {
      id: `skl_${Date.now()}`,
      name: skillName,
      category,
      proficiencyLevel: 'Intermediate',
      verificationStatus: 'SELF_DECLARED',
      evidenceCount: 0
    };
    setSkills(prev => [...prev, newSkill]);
  };

  return (
    <DataContext.Provider 
      value={{
        submissions,
        skills,
        challenges,
        recruiterRequests,
        membershipRequests,
        auditLogs,
        savedCandidateIds,
        submitProject,
        evaluateSubmissionAutomated,
        mentorDecideSubmission,
        requestCandidateAccess,
        updateRecruiterRequestStatus,
        toggleSaveCandidate,
        reviewMembershipRequest,
        requestOrgMembership,
        addSelfDeclaredSkill
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
