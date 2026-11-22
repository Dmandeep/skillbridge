/**
 * SKILLBRIDGE MOCK DATA REPOSITORY
 * 
 * SECURITY & ARCHITECTURAL NOTICE:
 * All records, identities, email addresses, cryptographic hashes, and student dossiers
 * contained in this file are STRICTLY SYNTHETIC DEMO DATA for client-side frontend prototype
 * evaluation.
 * 
 * Production deployment integrates with a secure Java Spring Boot microservice architecture
 * backed by MySQL, OAuth2 OpenID Connect authentication, and hardware-isolated gVisor sandboxes.
 * No real user secrets, credentials, or private keys are stored in this frontend bundle.
 */

import { 
  User, 
  SkillItem, 
  ProjectSubmission, 
  Challenge, 
  RecruiterAccessRequest, 
  OrgMembershipRequest, 
  AuditLogEntry 
} from '../types';

export const MOCK_USERS: Record<string, User> = {
  student: {
    id: 'usr_std_01',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@institution.edu',
    role: 'STUDENT',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    organizationId: 'org_mit_01',
    organizationName: 'Apex Institute of Technology',
    title: 'Distributed Systems & Full-Stack Apprentice',
    bio: 'Crafting resilient distributed backends and reactive web frontends. Passionate about verifiable engineering over resume buzzwords.',
    createdAt: '2026-01-15',
  },
  mentor: {
    id: 'usr_men_01',
    name: 'Dr. Elena Rostova',
    email: 'e.rostova@institution.edu',
    role: 'MENTOR',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    organizationId: 'org_mit_01',
    organizationName: 'Apex Institute of Technology',
    title: 'Associate Professor of Computer Engineering & Lead Evaluator',
    bio: 'Over 14 years in systems architecture and formal code verification. Mentoring practical engineers through reproducible builds.',
    createdAt: '2025-08-10',
  },
  org_admin: {
    id: 'usr_org_01',
    name: 'Marcus Vance',
    email: 'dean.vance@institution.edu',
    role: 'ORG_ADMIN',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    organizationId: 'org_mit_01',
    organizationName: 'Apex Institute of Technology',
    title: 'Dean of Computing & Career Engineering',
    bio: 'Bridging academic excellence with direct industry talent pipeline verification.',
    createdAt: '2025-06-01',
  },
  recruiter: {
    id: 'usr_rec_01',
    name: 'Sophia Chen',
    email: 'sophia.chen@strata-tech.io',
    role: 'RECRUITER',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    organizationName: 'Strata Cloud Solutions',
    title: 'Senior Technical Talent Partner',
    bio: 'Seeking practical engineering craft. I hire based on attested test suites and mentor-verified code architecture.',
    createdAt: '2025-11-20',
  }
};

export const MOCK_SKILLS: SkillItem[] = [
  {
    id: 'skl_01',
    name: 'Distributed Systems & Raft Consensus',
    category: 'Backend',
    proficiencyLevel: 'Advanced',
    verificationStatus: 'MENTOR_VERIFIED',
    evidenceCount: 3,
    verifiedByMentorName: 'Dr. Elena Rostova',
    verificationDate: '2026-10-18',
    score: 96,
    badgeHash: '0x7F8B2C4E91A334D',
  },
  {
    id: 'skl_02',
    name: 'React 19 & Concurrent Render Architecture',
    category: 'Frontend',
    proficiencyLevel: 'Advanced',
    verificationStatus: 'MENTOR_VERIFIED',
    evidenceCount: 4,
    verifiedByMentorName: 'Dr. Elena Rostova',
    verificationDate: '2026-11-04',
    score: 94,
    badgeHash: '0x992B104F5E6D8A2',
  },
  {
    id: 'skl_03',
    name: 'PostgreSQL Query Optimization & Indexing',
    category: 'Backend',
    proficiencyLevel: 'Intermediate',
    verificationStatus: 'EVIDENCE_SUBMITTED',
    evidenceCount: 2,
    score: 88,
  },
  {
    id: 'skl_04',
    name: 'Docker & Kubernetes Pod Orchestration',
    category: 'DevOps',
    proficiencyLevel: 'Intermediate',
    verificationStatus: 'EVIDENCE_SUBMITTED',
    evidenceCount: 1,
    score: 82,
  },
  {
    id: 'skl_05',
    name: 'Rust Memory Safety & Asynchronous I/O',
    category: 'System Design',
    proficiencyLevel: 'Beginner',
    verificationStatus: 'SELF_DECLARED',
    evidenceCount: 0,
  },
  {
    id: 'skl_06',
    name: 'GraphQL Federation & Schema Stitching',
    category: 'Architecture',
    proficiencyLevel: 'Intermediate',
    verificationStatus: 'SELF_DECLARED',
    evidenceCount: 0,
  }
];

export const MOCK_CHALLENGES: Challenge[] = [
  {
    id: 'ch_01',
    title: 'High-Throughput In-Memory Key-Value Store',
    category: 'Systems & Backend',
    difficulty: 'Hard',
    timeEstimate: '6-8 hours',
    skillsGained: ['Concurrency', 'LRU Cache Eviction', 'Thread Safety', 'TCP Protocol'],
    description: 'Implement a memory-bounded key-value store with atomic transactions, snapshot isolation, and LRU eviction under heavy synthetic contention.',
    requirements: [
      'Zero race conditions under 100 concurrent workers',
      'Memory footprint strictly capped at 256MB with O(1) eviction',
      'Pass 48 automated stress assertion test cases',
      'Provide bench telemetry with sub-millisecond p99 latency'
    ],
    automatedSuiteName: 'KV-Stress-Harness-v3.4',
    activeParticipants: 42,
    rewardBadge: 'Systems Master Verified',
  },
  {
    id: 'ch_02',
    title: 'Reactive Virtualized Data Table (100k Rows)',
    category: 'Frontend Engineering',
    difficulty: 'Intermediate',
    timeEstimate: '4-5 hours',
    skillsGained: ['React 19', 'DOM Virtualization', 'Web Workers', '60 FPS Scroll'],
    description: 'Build a zero-dependency high performance data grid capable of rendering 100,000 live updating financial records with zero frame drops.',
    requirements: [
      'Constant DOM element pool (<35 nodes at any scroll position)',
      'Web Worker based multi-column fuzzy search under 15ms',
      'Full keyboard accessible navigational cursor',
      'Lighthouse performance score 98+'
    ],
    automatedSuiteName: 'DOM-Perf-Bench-v2.1',
    activeParticipants: 89,
    rewardBadge: 'UI Performance Verified',
  },
  {
    id: 'ch_03',
    title: 'Zero-Knowledge Proof Identity Verifier',
    category: 'Cryptography & Security',
    difficulty: 'Extreme',
    timeEstimate: '10-12 hours',
    skillsGained: ['zk-SNARKs', 'Circom', 'ECDSA Signatures', 'Cryptographic Proofs'],
    description: 'Construct a privacy-preserving membership verification circuit that proves a candidate holds an accredited degree without revealing their identity.',
    requirements: [
      'Proof generation time under 1.8 seconds client-side',
      'Verification gas cost < 180,000 units',
      'Comprehensive fuzzing tests for edge collision resistance'
    ],
    automatedSuiteName: 'ZK-Circuit-Audit-v1.0',
    activeParticipants: 18,
    rewardBadge: 'Cryptographic Protocol Master',
  }
];

export const MOCK_SUBMISSIONS: ProjectSubmission[] = [
  {
    id: 'sub_01',
    title: 'ChronoKV: Distributed Log-Structured Storage Engine',
    studentId: 'usr_std_01',
    studentName: 'Aarav Sharma',
    studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    organizationName: 'Apex Institute of Technology',
    skillTags: ['Distributed Systems', 'Go / Concurrency', 'LSM-Tree', 'Write-Ahead Log'],
    repoUrl: 'https://github.com/aaravsharma/chronokv-storage',
    liveUrl: 'https://chronokv.dev.demo',
    submittedAt: '2026-10-14T14:32:00Z',
    status: 'MENTOR_VERIFIED',
    challengeId: 'ch_01',
    challengeTitle: 'High-Throughput In-Memory Key-Value Store',
    description: 'A production-grade distributed log-structured merge tree storage engine with crash consistency, WAL replay, and bloom filter accelerated point queries.',
    automatedTestResults: {
      testPassed: 48,
      testTotal: 48,
      codeCoveragePercent: 97.4,
      cyclomaticComplexity: 'Low',
      securityFlawsDetected: 0,
      executionTimeMs: 1420,
      automatedFeedback: [
        'All 48 edge-case concurrency tests passed with 0 data races.',
        'Bloom filter false positive rate measured at 0.8% under 500k keys.',
        'Crash recovery verified: restored uncommitted WAL entries in 34ms.'
      ]
    },
    mentorReview: {
      mentorId: 'usr_men_01',
      mentorName: 'Dr. Elena Rostova',
      mentorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      reviewedAt: '2026-10-18T09:15:00Z',
      codeQualityScore: 5,
      systemDesignScore: 5,
      problemSolvingScore: 5,
      decision: 'APPROVED_WITH_DISTINCTION',
      detailedComments: 'Exceptional architectural clarity. The compaction pipeline uses tiered merging with minimal write amplification. Code comments and invariant assertions reflect senior engineering rigor.',
      verificationHash: 'SHA256: 7f8b2c4e91a334d88e01b7a902df35c41189acbe7a01'
    }
  },
  {
    id: 'sub_02',
    title: 'PrismGrid: 60FPS Virtualized Financial Ledger',
    studentId: 'usr_std_01',
    studentName: 'Aarav Sharma',
    studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    organizationName: 'Apex Institute of Technology',
    skillTags: ['React 19', 'TypeScript', 'Web Workers', 'Performance'],
    repoUrl: 'https://github.com/aaravsharma/prism-grid',
    liveUrl: 'https://prismgrid.ui.demo',
    submittedAt: '2026-11-01T18:20:00Z',
    status: 'MENTOR_VERIFIED',
    challengeId: 'ch_02',
    challengeTitle: 'Reactive Virtualized Data Table (100k Rows)',
    description: 'Zero-dependency spreadsheet engine handling 100,000 volatile rows with Web Worker sorting, sub-millisecond filtering, and smooth 60fps scrolling.',
    automatedTestResults: {
      testPassed: 36,
      testTotal: 36,
      codeCoveragePercent: 94.1,
      cyclomaticComplexity: 'Low',
      securityFlawsDetected: 0,
      executionTimeMs: 890,
      automatedFeedback: [
        'Lighthouse performance: 99 / 100.',
        'Frame rate sustained at 59.8 FPS during continuous programmatic scroll.',
        'Worker thread serialization overhead benchmarked at 4.2ms.'
      ]
    },
    mentorReview: {
      mentorId: 'usr_men_01',
      mentorName: 'Dr. Elena Rostova',
      mentorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      reviewedAt: '2026-11-04T16:45:00Z',
      codeQualityScore: 5,
      systemDesignScore: 4,
      problemSolvingScore: 5,
      decision: 'VERIFIED',
      detailedComments: 'Impressive DOM recycling technique. The binary search index for row height calculation is cleanly implemented. Solid TypeScript generics.',
      verificationHash: 'SHA256: 992b104f5e6d8a247c3e1098df4b370a5621deca4409'
    }
  },
  {
    id: 'sub_03',
    title: 'KubeMesh: Lightweight Service Mesh Canary Controller',
    studentId: 'usr_std_01',
    studentName: 'Aarav Sharma',
    studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    organizationName: 'Apex Institute of Technology',
    skillTags: ['Kubernetes CRD', 'DevOps', 'Go', 'Prometheus Metrics'],
    repoUrl: 'https://github.com/aaravsharma/kubemesh-canary',
    submittedAt: '2026-11-19T11:00:00Z',
    status: 'EVIDENCE_SUBMITTED',
    description: 'Custom Kubernetes controller that watches Prometheus error rate metrics and executes automated canary rollouts or instant rollbacks.',
    automatedTestResults: {
      testPassed: 28,
      testTotal: 30,
      codeCoveragePercent: 88.5,
      cyclomaticComplexity: 'Moderate',
      securityFlawsDetected: 0,
      executionTimeMs: 2400,
      automatedFeedback: [
        'Automated reconciliation loop test passed.',
        'Simulated 500 error spike triggered canary rollback in 2.1 seconds.',
        'Minor warning: Controller leader election lease timeout could be tuned tighter.'
      ]
    }
  },
  {
    id: 'sub_04',
    title: 'SynapseDB: Vector Search Engine with HNSW Index',
    studentId: 'usr_std_02',
    studentName: 'Maya Lin',
    studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    organizationName: 'Apex Institute of Technology',
    skillTags: ['AI / ML', 'C++', 'HNSW', 'Vector Embeddings'],
    repoUrl: 'https://github.com/mayalin/synapse-vector-db',
    submittedAt: '2026-11-20T08:45:00Z',
    status: 'EVIDENCE_SUBMITTED',
    description: 'Hierarchical Navigable Small World graph vector indexing library with AVX2 SIMD Euclidean distance acceleration.',
    automatedTestResults: {
      testPassed: 40,
      testTotal: 40,
      codeCoveragePercent: 92.0,
      cyclomaticComplexity: 'Moderate',
      securityFlawsDetected: 0,
      executionTimeMs: 3100,
      automatedFeedback: [
        'Recall@10 tested at 98.4% on 1M 128-dimensional vectors.',
        'SIMD vectorized distance routine shows 3.8x speedup over scalar baseline.'
      ]
    }
  }
];

export const MOCK_RECRUITER_REQUESTS: RecruiterAccessRequest[] = [
  {
    id: 'req_01',
    recruiterId: 'usr_rec_01',
    recruiterName: 'Sophia Chen',
    recruiterCompany: 'Strata Cloud Solutions',
    recruiterAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    studentId: 'usr_std_01',
    studentName: 'Aarav Sharma',
    targetRoleTitle: 'Core Infrastructure Engineer (L4)',
    requestedAt: '2026-11-21T10:15:00Z',
    status: 'PENDING',
    message: 'We were blown away by your verified Raft consensus submission and 97% code coverage on ChronoKV. We would love to unlock your full verifiable dossier and discuss our distributed database infrastructure team.'
  },
  {
    id: 'req_02',
    recruiterId: 'usr_rec_02',
    recruiterName: 'Taro Takahashi',
    recruiterCompany: 'Nexus Robotics',
    recruiterAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    studentId: 'usr_std_01',
    studentName: 'Aarav Sharma',
    targetRoleTitle: 'Embedded Systems & Real-time UI Engineer',
    requestedAt: '2026-11-15T16:20:00Z',
    status: 'APPROVED',
    message: 'Reviewing your PrismGrid virtualized data table architecture. Impressive frame budget management.',
    expiresAt: '2026-12-15T16:20:00Z'
  }
];

export const MOCK_ORG_MEMBERSHIP_REQUESTS: OrgMembershipRequest[] = [
  {
    id: 'org_req_01',
    studentId: 'usr_std_03',
    studentName: 'Dev Patel',
    studentEmail: 'dev.patel27@student.apex.edu',
    studentAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    programEnrolled: 'B.Tech in Computer Science & Engineering',
    graduationYear: 2027,
    studentIdNumber: 'AIT-CS-2023-0491',
    requestedAt: '2026-11-21T09:30:00Z',
    status: 'PENDING',
    organizationId: 'org_mit_01'
  },
  {
    id: 'org_req_02',
    studentId: 'usr_std_04',
    studentName: 'Zainab Qureshi',
    studentEmail: 'zainab.q@student.apex.edu',
    studentAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    programEnrolled: 'M.S. in Software Systems Architecture',
    graduationYear: 2026,
    studentIdNumber: 'AIT-MS-2024-0102',
    requestedAt: '2026-11-20T15:10:00Z',
    status: 'PENDING',
    organizationId: 'org_mit_01'
  }
];

export const MOCK_CANDIDATES = [
  {
    id: 'usr_std_01',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    institution: 'Apex Institute of Technology',
    roleTagline: 'Distributed Systems & Systems Architecture',
    verifiedSkillsCount: 2,
    evidenceSubmittedCount: 2,
    topSkills: ['Distributed Systems', 'React 19', 'PostgreSQL', 'Kubernetes'],
    verifiedBadges: ['Systems Master Verified', 'UI Performance Verified'],
    avgTestCoverage: '95.8%',
    mentorAttestationScore: '4.9 / 5.0',
    accessStatus: 'REQUEST_ACCESS', // or PENDING or APPROVED
    publicSummary: 'Specializes in low-latency distributed key-value engines and concurrent frontends. ChronoKV passed 48 concurrency stress suites with zero data races.'
  },
  {
    id: 'usr_std_02',
    name: 'Maya Lin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    institution: 'Apex Institute of Technology',
    roleTagline: 'Vector Search & High Performance C++',
    verifiedSkillsCount: 3,
    evidenceSubmittedCount: 1,
    topSkills: ['C++', 'HNSW Vector Search', 'SIMD AVX2', 'PyTorch'],
    verifiedBadges: ['Vector Search Pioneer', 'Algorithm Specialist'],
    avgTestCoverage: '93.2%',
    mentorAttestationScore: '4.8 / 5.0',
    accessStatus: 'APPROVED',
    publicSummary: 'Engineered SynapseDB with AVX2 SIMD acceleration yielding 3.8x speedup over standard scalar distance routines.'
  },
  {
    id: 'usr_std_05',
    name: 'Liam O’Connor',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    institution: 'Dublin City Polytech',
    roleTagline: 'Cloud Native & Rust Microservices',
    verifiedSkillsCount: 1,
    evidenceSubmittedCount: 3,
    topSkills: ['Rust', 'gRPC', 'Docker', 'AWS'],
    verifiedBadges: ['Microservices Architect'],
    avgTestCoverage: '91.0%',
    mentorAttestationScore: '4.7 / 5.0',
    accessStatus: 'NONE',
    publicSummary: 'Built high-throughput gRPC proxy in Rust processing 120k requests/sec with predictable sub-2ms jitter.'
  }
];

export const MOCK_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'log_01',
    actorName: 'Dr. Elena Rostova',
    actorRole: 'MENTOR',
    action: 'VERIFIED_SUBMISSION_WITH_DISTINCTION',
    entityType: 'VERIFICATION',
    details: 'Project "ChronoKV" (Student: Aarav Sharma) verified with perfect rubric score (5/5). Cryptographic badge 0x7F8B2C4E91A334D minted.',
    timestamp: '2026-10-18T09:15:22Z',
    ipHash: '84.17.42.***',
    immutableBlockIndex: 10428
  },
  {
    id: 'log_02',
    actorName: 'Aarav Sharma',
    actorRole: 'STUDENT',
    action: 'APPROVED_RECRUITER_ACCESS',
    entityType: 'PERMISSION',
    details: 'Granted 30-day verified dossier access to Sophia Chen (Strata Cloud Solutions). Access expires 2026-12-15.',
    timestamp: '2026-11-15T16:21:05Z',
    ipHash: '103.22.14.***',
    immutableBlockIndex: 10435
  },
  {
    id: 'log_03',
    actorName: 'Marcus Vance',
    actorRole: 'ORG_ADMIN',
    action: 'APPROVED_MEMBERSHIP_REQUEST',
    entityType: 'ORGANIZATION',
    details: 'Admitted student Dev Patel into Apex Institute of Technology Computer Science cohort 2027.',
    timestamp: '2026-11-20T11:02:18Z',
    ipHash: '192.168.1.***',
    immutableBlockIndex: 10460
  },
  {
    id: 'log_04',
    actorName: 'Marcus Vance',
    actorRole: 'ORG_ADMIN',
    action: 'UPDATED_COURSE_CURRICULUM',
    entityType: 'ORGANIZATION',
    details: 'Added Full-Stack React & Next.js Performance to required engineering curriculum track.',
    timestamp: '2026-09-12T14:00:00Z',
    ipHash: '12.89.201.***',
    immutableBlockIndex: 9812
  }
];
