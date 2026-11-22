export type UserRole = 
  | 'PUBLIC'
  | 'STUDENT'
  | 'MENTOR'
  | 'ORG_ADMIN'
  | 'RECRUITER'
  | 'SUPER_ADMIN'
  | 'ADDITIONAL_ADMIN';

export type VerificationStatus = 
  | 'SELF_DECLARED'
  | 'EVIDENCE_SUBMITTED'
  | 'MENTOR_VERIFIED'
  | 'REVISION_REQUESTED'
  | 'REJECTED';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  organizationId?: string;
  organizationName?: string;
  title?: string;
  bio?: string;
  createdAt: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'AI / ML' | 'Architecture' | 'System Design';
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  verificationStatus: VerificationStatus;
  evidenceCount: number;
  verifiedByMentorName?: string;
  verificationDate?: string;
  score?: number; // 0-100 rubric performance
  badgeHash?: string; // Cryptographic verification identifier
}

export interface ProjectSubmission {
  id: string;
  title: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  organizationName: string;
  skillTags: string[];
  repoUrl: string;
  liveUrl?: string;
  submittedAt: string;
  status: VerificationStatus;
  challengeId?: string;
  challengeTitle?: string;
  description: string;
  
  // Automated Evaluation Evidence
  automatedTestResults?: {
    testPassed: number;
    testTotal: number;
    codeCoveragePercent: number;
    cyclomaticComplexity: 'Low' | 'Moderate' | 'High';
    securityFlawsDetected: number;
    executionTimeMs: number;
    automatedFeedback: string[];
    // Compatibility aliases
    passedAssertions?: number;
    totalAssertions?: number;
    coveragePercentage?: number;
    executionDurationMs?: number;
  };

  // Mentor Review & Verification
  mentorReview?: {
    mentorId: string;
    mentorName: string;
    mentorAvatar: string;
    mentorTitle?: string;
    reviewedAt: string;
    codeQualityScore: number; // 1-5
    systemDesignScore: number; // 1-5
    problemSolvingScore: number; // 1-5
    decision: 'APPROVED_WITH_DISTINCTION' | 'VERIFIED' | 'NEEDS_REVISION' | 'REJECTED';
    detailedComments: string;
    verificationHash: string;
    // Compatibility aliases
    writtenFeedback?: string;
    rubricScores?: {
      codeQuality?: number;
      systemDesign?: number;
      problemSolving?: number;
      quality?: number;
      design?: number;
    };
    overallScore?: number;
    comments?: string;
  };

  // Compatibility alias
  mentorFeedback?: {
    mentorId?: string;
    mentorName?: string;
    mentorAvatar?: string;
    mentorTitle?: string;
    reviewedAt?: string;
    codeQualityScore?: number;
    systemDesignScore?: number;
    problemSolvingScore?: number;
    decision?: string;
    detailedComments?: string;
    verificationHash?: string;
    writtenFeedback?: string;
    comments?: string;
    overallScore?: number;
    rubricScores?: {
      codeQuality?: number;
      systemDesign?: number;
      problemSolving?: number;
      quality?: number;
      design?: number;
    };
  };
}

export interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Hard' | 'Extreme';
  timeEstimate: string;
  skillsGained: string[];
  description: string;
  requirements: string[];
  automatedSuiteName: string;
  activeParticipants: number;
  rewardBadge: string;
}

export interface RecruiterAccessRequest {
  id: string;
  recruiterId: string;
  recruiterName: string;
  recruiterCompany: string;
  recruiterAvatar: string;
  studentId: string;
  studentName: string;
  targetRoleTitle: string;
  requestedAt: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'REVOKED';
  message: string;
  expiresAt?: string;
}

export interface OrgMembershipRequest {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  studentAvatar: string;
  programEnrolled: string;
  graduationYear: number;
  studentIdNumber: string;
  requestedAt: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  organizationId: string;
}

export interface AuditLogEntry {
  id: string;
  actorName: string;
  actorRole: UserRole;
  action: string;
  entityType: 'VERIFICATION' | 'PERMISSION' | 'ORGANIZATION' | 'ROLE_APPOINTMENT' | 'SECURITY';
  details: string;
  timestamp: string;
  ipHash: string;
  immutableBlockIndex: number;
}
