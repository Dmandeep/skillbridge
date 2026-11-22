# 🌉 SkillBridge — Practical Skill Verification & Verified Talent Platform

> **"Skills Demonstrated. Talent Verified. Opportunities Connected."**

[![Vite](https://img.shields.io/badge/Vite-8.3.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-4.3.5-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-14.14.0-FF0055)](https://motion.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.1-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 1. Project Overview

**SkillBridge** is a modern, user-friendly EdTech + HRTech platform designed to connect **students, teachers, colleges, and recruiters** through real, practical skills rather than resume guesswork.

In a world where resumes are often exaggerated and interview quizzes test memorization instead of real building ability, SkillBridge creates a transparent, trustworthy verification workflow:
1. **Students** build real coding projects and submit their GitHub repositories.
2. **Automated Tests** check test pass rates, code coverage, and quality standards.
3. **Teachers** review student code, provide constructive feedback, and award verified badges.
4. **Recruiters** discover pre-verified candidates with proven code skills and connect directly.

---

## 2. Core User Roles & Workflows

SkillBridge provides 4 streamlined, dedicated workspaces easily accessible from the top **View Demo As** bar:

```
+-----------------------------------------------------------------------------------+
|                            THE 4 CORE USER ROLES                                  |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ 🎓 Student ]         [ 👨‍🏫 Teacher ]       [ 🏛️ College Admin ]  [ 💼 Recruiter ]   |
|  - Submit Projects     - Review Projects     - Student Directory   - Search Talent|
|  - Test Results        - Score Rubrics       - Manage Faculty      - Request Access|
|  - Teacher Feedback    - Write Feedback      - Assign Teachers     - Save Candidates|
|  - Skills Passport     - Track Students      - College Analytics   - Direct Hire   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 🎓 1. Student Portal
* **Project Submissions:** Connect GitHub repositories and submit practical projects.
* **Automated Test Results:** View test suite outcomes, test pass percentages, and code checks.
* **Teacher Reviews:** Read personalized feedback, rubric scores, and guidance from their assigned teacher.
* **Skills Passport:** An endorsed, shareable profile showing proven competencies.
* **Recruiter Permissions:** Full student privacy control — students choose which recruiters can view their project code.

### 👨‍🏫 2. Teacher & Mentor Portal
* **Review Queue:** Review pending project submissions from assigned students.
* **Automated Test Inspection:** Inspect test results alongside the student's repository.
* **Standardized Rubric Grading:** Score Code Quality, System Architecture, and Problem Solving (1–5 scale).
* **Personalized Feedback:** Write actionable feedback to help students grow and improve.
* **My Students:** Track advisee progress across projects.

### 🏛️ 3. College Administration Portal
* **Student Directory:** View all enrolled students and their verification status.
* **Faculty Management:** Maintain the roster of verified teachers and evaluators.
* **Teacher Assignment:** Directly assign or change which faculty teacher mentors each student.
* **Join Requests:** Approve incoming student enrollment and affiliation requests.
* **College Analytics:** Track student project completion rates and employer connections.

### 💼 4. Recruiter Portal
* **Candidate Search:** Discover candidates filtered by verified skills and test scores.
* **Candidate Access Requests:** Request student permission to view their full project code.
* **Saved Candidates:** Save and bookmark high-potential engineering talent to a hiring shortlist.
* **Direct Outreach:** Contact proven candidates with confidence.

---

## 3. How College Admins Assign Students to Teachers

SkillBridge makes faculty mentorship organized and accountable through a simple administrative delegation system:

```
[ 1. Student Enrolls ]
       │
       ▼
[ 2. College Admin Assigns Teacher ] ──► (In Student Directory dropdown)
       │
       ▼
[ 3. Student Submits Project ]
       │
       ▼
[ 4. Automated Tests Run ]
       │
       ▼
[ 5. Project Routes to Assigned Teacher's Review Queue ]
       │
       ▼
[ 6. Teacher Reviews, Scores Rubric & Endorses Badge ]
```

1. **Student Enrollment:** When a student joins, the college admin reviews their degree program and track (e.g., Systems vs. Web Architecture).
2. **Teacher Assignment in Directory:** In the **College Admin &rarr; Student Directory**, the college admin assigns an accredited faculty teacher (e.g., *Dr. Elena Rostova* or *Prof. David Vance*) to that student using the interactive teacher dropdown.
3. **Automated Submission Routing:** Whenever that student submits a project, the submission automatically routes to their assigned teacher's **Projects to Review** desk.
4. **Evaluation & Endorsement:** The teacher grades the project, writes feedback, and awards the verified skill badge.

---

## 4. The 3-Step Verification Process

SkillBridge follows a simple, evidence-based verification lifecycle:

| Step | Action | Outcome |
| :--- | :--- | :--- |
| **Step 1: Submit** | Student connects GitHub project link | Functional code artifact submitted |
| **Step 2: Test** | System runs automated test checks | Test pass rate, coverage, and quality benchmarks recorded |
| **Step 3: Review** | Teacher reviews code and grades rubric | Personal feedback provided and verified badge endorsed |
| **Step 4: Connect** | Recruiter discovers verified profile | Opportunity connected without resume guesswork |

---

## 5. Technology Stack

### Frontend Framework & Libraries
* **Framework:** React 19.3.1
* **Build Tool:** Vite 8.3.8
* **Language:** TypeScript 7.0.2
* **Styling:** Tailwind CSS v4.3.5 (with native dark/light theme switching)
* **Animation & Motion:**
  * **Motion / Framer Motion 14.14.0** (Spring physics, modal dialogs, interactive cards)
  * **GSAP 3.15.1** + **@gsap/react 2.1.2** (Scroll reveals and smooth motion)
  * **Lenis 1.3.27** (Smooth scroll physics)
* **Icons:** Lucide React 1.77.0
* **Celebration Effects:** Canvas Confetti 1.9.4

---

## 6. Official Brand Color Palette

SkillBridge uses a consistent, high-contrast 5-color palette:

| Color Name | Hex Code | Purpose in UI |
| :--- | :--- | :--- |
| **Electric Cobalt** | `#3657F0` | Primary brand color, student links, active tabs, verified tags |
| **Tangerine Orange** | `#FF7138` | Primary CTA buttons, teacher portal accents, notifications |
| **Butter Yellow** | `#FFD966` | College admin highlights, hero badges, selection accents |
| **Warm Ivory** | `#F8F3E9` | Light theme background, card containers |
| **Ink Black** | `#191A23` | Dark theme background, brutalist borders, deep contrast text |

---

## 7. Project Structure

```
skillbridge/
├── index.html                   # Entry HTML document with zero-flash theme persistence
├── package.json                 # Project scripts and dependencies
├── README.md                    # Platform documentation
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel SPA routing rewrites
├── vite.config.ts               # Vite configuration with Tailwind CSS v4 plugin
├── public/
│   └── brand/                   # SVG brand assets and icons
└── src/
    ├── animations/
    │   ├── interactions/        # MagneticButton, TiltCard, ThemeToggle
    │   ├── scrolling/           # ScrollReveal, StaggerContainer, SmoothScroll
    │   ├── transitions/         # PageTransition
    │   └── typography/          # AnimatedCounter, KineticHeading, RotatingHeadline, SplitText
    ├── components/
    │   ├── brand/               # SkillBridgeLogo and SkillBridgeSymbol
    │   ├── common/              # Navbar, Sidebar, StatCard, StatusPill, VerificationStamp
    │   └── public/              # Footer
    ├── context/
    │   ├── AuthRoleContext.tsx   # Client-side 4-role authentication state
    │   ├── DataContext.tsx       # In-memory reactive project and student data
    │   └── ThemeContext.tsx      # Dark and light mode provider
    ├── constants/
    │   └── mockData.ts          # Simulated student, teacher, college, and recruiter records
    ├── types/
    │   └── index.ts             # TypeScript interfaces for users, projects, and permissions
    └── views/
        ├── public/              # LandingView, AboutView, HowItWorksView, LoginView, RegisterView
        ├── student/             # StudentDashboard, StudentProjects, StudentPassport, etc.
        ├── mentor/              # MentorDashboard, MentorReview, MentorStudents, etc.
        ├── org/                 # OrgDashboard, OrgStudents, OrgMentors, OrgPrograms, etc.
        └── recruiter/           # RecruiterDashboard, RecruiterDiscovery, RecruiterSearch, etc.
```

---

## 8. Getting Started

### Prerequisites
* **Node.js:** v18.0.0 or higher (v20+ recommended)
* **npm:** v9.0.0 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Dmandeep/skillbridge.git
cd skillbridge

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The application will be running locally at **`http://localhost:5173/`**.

---

## 9. Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Vite development server with hot module replacement |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and builds production bundle |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs linter check (`oxlint`) |

---

## 10. Deployment

The project is pre-configured for one-click deployment on **Vercel** or any modern static hosting service:
* **Framework Preset:** `Vite`
* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* **Install Command:** `npm install`
* The included `vercel.json` ensures all SPA routes route cleanly to `index.html`.

---

## 11. GitHub Repository

* **Repository:** [https://github.com/Dmandeep/skillbridge](https://github.com/Dmandeep/skillbridge)
* **Branch:** `main`

---

## License

This project is open-source under the [MIT License](LICENSE).
