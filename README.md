# 🌉 SkillBridge — Practical Skill Verification & Verified Talent Platform

> **"Skills Demonstrated. Talent Verified. Opportunities Connected."**

[![Vite](https://img.shields.io/badge/Vite-8.3.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-4.3.5-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.1-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![Lenis](https://img.shields.io/badge/Lenis-1.3.27-000000)](https://lenis.darkroom.engineering/)
[![Motion](https://img.shields.io/badge/Motion-14.14.0-FF0055)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 1. Project Overview

**SkillBridge** is an enterprise-grade EdTech + HRTech platform designed to replace resume keyword inflation with **cryptographically attested, reproducible code execution proof**.

Rather than relying on self-reported LinkedIn claims or synthetic algorithmic puzzles, SkillBridge connects **students, faculty mentors, accredited universities, and technical recruiters** through an end-to-end verification lifecycle:
1. **Students** submit production Git repositories (distributed systems, full-stack SPAs, kernel components).
2. **Automated Test Runners** execute assertions, cyclomatic complexity benchmarks, and memory leak analysis in isolated gVisor containers.
3. **Accredited Faculty Mentors** conduct split-screen rubric reviews and issue immutable cryptographic seals.
4. **Technical Recruiters** discover pre-verified candidates filtered by actual assertion coverage and request consent-gated access to detailed engineering dossiers.

---

## 2. Problem Statement

* **84% of Technical Resumes Contain Exaggerations:** Generative AI tools allow applicants to produce tailored buzzword-heavy resumes and clone public GitHub repositories, creating severe hiring noise.
* **LeetCode Algorithmic Disconnect:** Memorizing dynamic programming mnemonics does not prove an applicant can architect crash-tolerant distributed databases, manage thread contention, or structure clean codebases.
* **University GPA Inconsistency:** Academic grades fail to convey practical production engineering readiness to hiring managers.
* **Recruiter Overload:** Recruiters receive thousands of low-signal applications per job posting, paralyzing talent acquisition teams.

---

## 3. Proposed Solution

SkillBridge restores trust in technical recruitment through **Dual-Factor Runtime Verification**:

```
+-----------------------------------------------------------------------------------+
|                            THE SKILLBRIDGE PIPELINE                               |
+-----------------------------------------------------------------------------------+
| 1. Candidate Commits Code -> Repositories, Git tags, GPG-signed commits           |
|                                     |                                             |
|                                     v                                             |
| 2. Automated Test Runner  -> Sandboxed unit tests, mutation analysis, complexity  |
|                                     |                                             |
|                                     v                                             |
| 3. Faculty Rubric Review  -> Accredited mentor attestation & cryptographic seal   |
|                                     |                                             |
|                                     v                                             |
| 4. Skill Passport Minted  -> Student data sovereignty, consent-gated recruiter access|
+-----------------------------------------------------------------------------------+
```

---

## 4. Main Features

* **Cinematic Brand Introduction Experience:** 4-scene choreographic sequence illustrating the convergence of skills and opportunities into the geometric SB monogram, featuring full keyboard accessibility (`Esc` skip), prefers-reduced-motion detection, and zero-flash theme persistence.
* **Lenis + GSAP Scroll Storytelling:** Smooth momentum scroll physics coupled with GSAP ScrollTrigger, kinetic headings, text scramble decryption, and highlight sweep markers.
* **Interactive Verification Pipeline Simulator:** Live browser-based terminal executing simulated 48/48 test assertions with real-time runner logs and confetti celebration.
* **Physical-Style Cryptographic Skill Passport:** Tangible brutalist verification dossier with QR code, SHA-256 root proof hash, faculty stamp, and W3C Verifiable Credential export.
* **Split-Screen Faculty Review Console:** Dual-column mentor workspace comparing candidate repository code against automated test assertion outputs and interactive rubric scoring sliders.
* **Faceted Recruiter Radar:** Talent discovery filtered by verified test coverage percentages, university accreditation, and direct dossier unlock requests.
* **Institutional Governance Hub:** University admin portal for student affiliation approvals, cohort attestation velocity tracking, and evaluator management.
* **Root Security Telemetry:** Super Admin audit stream tracking immutable block entries and node runner status.

---

## 5. User Roles & Experiences

SkillBridge includes 6 dedicated role experiences, accessible instantly through the global top explorer bar:

| Role | Target Persona | Primary Responsibilities & Workflows |
| :--- | :--- | :--- |
| **Student / Apprentice** | Aarav Sharma | Submit repositories, track Tier 1-3 skill advancement, manage consent-gated recruiter permissions, export Skill Passport. |
| **Teacher / Mentor** | Dr. Elena Rostova | Inspect pending submissions, evaluate automated assertion telemetry, score architectural rubrics, mint verification stamps. |
| **Organization Admin** | Marcus Vance (Dean) | Manage university accreditation, approve/reject student affiliation requests, monitor cohort completion velocity. |
| **Technical Recruiter** | Sophia Chen | Search candidates by verified coverage thresholds, inspect high-signal dossiers, request student unlock keys. |
| **Super Admin** | Devon Kester | Platform protocol governance, node runner health monitoring, university accreditation, tamper-evident audit logs. |
| **Additional Admin** | Kavita Menon | Delegated platform operations, compliance audits, and role assignment. |

---

## 6. Technology Stack

### Frontend Architecture
* **Framework:** React 19.3.1
* **Build Tool:** Vite 8.3.8
* **Styling:** Tailwind CSS v4.3.5 (with native `@custom-variant dark` support)
* **Motion & Animation:**
  * **GSAP 3.15.1** + **@gsap/react 2.1.2** (ScrollTrigger, scrubbed pinning, kinetic typography)
  * **Lenis 1.3.27** (Smooth momentum scroll physics)
  * **Motion / Framer Motion 14.14.0** (Spring interactions, modal physics, layout animations)
* **Typography:** Space Grotesk (Editorial Display), DM Sans (Body), IBM Plex Mono (Technical Telemetry)
* **Icons:** Lucide React 1.77.0
* **Visual Effects:** Canvas Confetti 1.9.4

---

## 7. Official Brand System

SkillBridge adheres strictly to its official five-color brand palette across both light and dark themes:

| Color Name | Hex Code | Role in Interface |
| :--- | :--- | :--- |
| **Electric Cobalt** | `#3657F0` | Primary brand accent, action links, verified badges, active tabs |
| **Tangerine Orange** | `#FF7138` | Secondary highlight, primary CTA buttons, mentor accents, alerts |
| **Butter Yellow** | `#FFD966` | Keystone anchors, telemetry highlights, Tier-1 status tags |
| **Warm Ivory** | `#F8F3E9` | Light theme canvas, elevated card backgrounds |
| **Ink Black** | `#191A23` | Dark theme canvas, brutalist border strokes, deep contrast text |

---

## 8. Project Structure

```
skilbridge/
├── .env.example                 # Environment configuration template
├── .gitignore                   # Version control exclusions
├── index.html                   # HTML entry point with zero-flash theme script
├── package.json                 # Project dependencies & scripts
├── README.md                    # Platform documentation
├── tsconfig.json                # TypeScript project configuration
├── vercel.json                  # Vercel SPA routing & cache configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── public/
│   └── brand/                   # SVG brand assets & favicons
└── src/
    ├── animations/
    │   ├── interactions/        # MagneticButton, TiltCard, ThemeToggle
    │   ├── intro/               # AnimatedIntro (4-scene cinematic reveal)
    │   ├── motion-config/       # Spring physics & transition variants
    │   ├── scrolling/           # SmoothScroll (Lenis), ScrollStory (GSAP), ScrollReveal
    │   ├── transitions/         # PageTransition
    │   └── typography/          # KineticHeading, TextHighlightSweep, TextScramble, SplitText
    ├── components/
    │   ├── brand/               # SkillBridgeLogo & SkillBridgeSymbol
    │   ├── common/              # Navbar, Sidebar, StatCard, StatusPill, VerificationStamp
    │   └── public/              # Footer
    ├── context/                 # AuthRoleContext, ThemeContext, DataContext
    ├── constants/               # mockData.ts (Simulated demo profiles & records)
    ├── types/                   # TypeScript interfaces (User, SkillItem, Submission, etc.)
    └── views/
        ├── public/              # LandingView, AboutView, HowItWorksView, LoginView, RegisterView
        ├── student/             # StudentDashboardView, StudentPassportView, StudentSkillsView, etc.
        ├── mentor/              # MentorDashboardView, MentorReviewView, MentorStudentsView, etc.
        ├── org/                 # OrgDashboardView, OrgStudentsView, OrgMembershipRequestsView, etc.
        ├── recruiter/           # RecruiterDashboardView, RecruiterDiscoveryView, etc.
        └── superadmin/          # SuperAdminDashboardView, SuperAdminAuditLogsView, etc.
```

---

## 9. Installation Instructions

### Prerequisites
* **Node.js:** v18.0.0 or higher (v20+ recommended)
* **npm:** v9.0.0 or higher

### Setup Steps
```bash
# 1. Clone the repository
git clone https://github.com/Dmandeep/skillbridge.git
cd skillbridge

# 2. Install dependencies
npm install

# 3. Create local environment configuration
cp .env.example .env
```

---

## 10. Development Commands

```bash
# Start local development server with Hot Module Replacement (HMR)
npm run dev

# Run local server with host exposure (accessible on local network)
npm run dev -- --host --port 5173

# Run static code analysis / linting
npm run lint

# Preview production build locally
npm run preview
```

---

## 11. Production Build Instructions

```bash
# Execute type-checking and production compilation
npm run build

# Output will be generated in the /dist folder:
# dist/
# ├── index.html
# └── assets/
#     ├── index-[hash].css
#     └── index-[hash].js
```

---

## 12. Environment Configuration

All client-side environment variables must be prefixed with `VITE_`. See `.env.example`:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_APP_NAME` | Platform title | `SkillBridge` |
| `VITE_APP_TAGLINE` | Official brand tagline | `"Skills Demonstrated. Talent Verified. Opportunities Connected."` |
| `VITE_ENABLE_CINEMATIC_INTRO` | Controls intro sequence | `true` |
| `VITE_DEFAULT_THEME` | Default color scheme | `auto` |

---

## 13. Vercel Deployment Instructions

SkillBridge is configured for direct zero-configuration deployment on **Vercel**:

1. Log into your [Vercel Dashboard](https://vercel.com/).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Import the GitHub repository: `https://github.com/Dmandeep/skillbridge`.
4. Vercel automatically detects the Vite preset:
   * **Framework Preset:** `Vite`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
5. Click **"Deploy"**.
6. The included `vercel.json` ensures all SPA routes (`/`, `/about`, `/login`, etc.) are cleanly rewritten to `index.html`.

---

## 14. Current Limitations

* **Frontend Prototype Scope:** The current implementation is a rich interactive client-side application. Authentication is simulated through mock profiles, and data mutations persist in client memory (`DataContext`).
* **Mock Execution Telemetry:** Automated test assertions and gVisor runner logs are pre-computed simulations.
* **Ephemeral State:** Refreshing the application resets in-memory submissions to the default demo state.

---

## 15. Future Java Spring Boot + MySQL Integration Roadmap

The next phase of SkillBridge transitions the platform to a distributed production architecture:

```
+-------------------------------------------------------------------------------+
|                    FUTURE BACKEND ARCHITECTURE (PHASE 4)                      |
+-------------------------------------------------------------------------------+
| [React 19 Frontend]  <--- REST & WebSocket API --->  [Spring Boot Gateway]   |
|                                                              |                |
|              +-----------------------------------------------+                |
|              |                               |                                |
|              v                               v                                v
|      [Auth & User Service]         [Verification Service]          [Runner Sandbox]
|      - Spring Security             - Mentorship Rubrics            - gVisor Engine
|      - OAuth2 / OIDC               - Cryptographic Ledger          - Docker Daemon
|      - JWT Token Rotation          - Passport Minting              - AST Audit Engine
|              |                               |                                |
|              v                               v                                |
|      [MySQL 8.4 RDBMS]             [MySQL + Redis Cache]                      |
|      - ACID Transactions           - High-throughput telemetry                |
+-------------------------------------------------------------------------------+
```

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
