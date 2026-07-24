export const personalInfo = {
  name: "Osaka",
  tagline:
    "I build full-stack applications and data-driven tools — from REST APIs to machine learning pipelines.",
  location: "Waterloo, ON",
  email: "osakakpv@gmail.com",
  github: "https://github.com/OsakaOK",
  linkedin: "https://www.linkedin.com/in/osakakpv/",
  instagram: "https://www.instagram.com/sushi_isthe_best",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from Wilfrid Laurier University with a passion for building full-stack applications and exploring data-driven solutions. From REST APIs in Flask and Spring Boot to machine learning pipelines with Scikit-learn, I enjoy turning ideas into working software with clean, maintainable code.",
    "Outside of pure development, I've supported students as a programming lab assistant, kept a busy kitchen running smoothly under pressure, and diagnosed network issues as an IT support intern — experiences that taught me to stay calm, communicate clearly, and solve problems methodically in any environment.",
  ],
};

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "C/C++"],
  },
  {
    category: "Frameworks",
    items: ["React.js", "Next.js", "Flask", "Spring Boot"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Docker",
      "Google Cloud",
      "PostgreSQL",
      "MongoDB",
      "PuTTY",
      "VS Code",
    ],
  },
  {
    category: "Data & ML",
    items: ["Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
  },
];

export interface Project {
  name: string;
  description: string;
  bullets: string[];
  tags: string[];
  /** Source repository URL. */
  link: string;
  /** Live deployment URL, when the project is hosted. */
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "Flag a Day",
    description:
      "A Wordle-style daily flag-guessing game — everyone gets the same flag each day, three guesses, and a community-driven layer of hints and fun facts.",
    bullets: [
      "Built a full-stack web app with Next.js (App Router, React) and TypeScript, using Drizzle ORM over Postgres — an embedded PGlite database for zero-setup local dev that swaps to Supabase Postgres in production.",
      "Served one deterministic daily puzzle to every player from a fixed shuffle of ~250 countries indexed by day, with anonymous cookie-based identity and gated, community-driven hints, fun facts, up/down voting, and flag-based auto-moderation.",
      "Set up a GitHub Actions CI pipeline (tests plus production build on every pull request) with continuous deployment to Vercel on each merge to main.",
    ],
    tags: ["Next.js", "React.js", "TypeScript", "Drizzle ORM", "PostgreSQL"],
    link: "https://github.com/OsakaOK/F-aDay",
    demo: "https://f-a-day.vercel.app",
  },
  {
    name: "FamFunds - Shared Expense Tracker",
    description:
      "A shared expense tracker built on Spaces — switch between a private Personal Space and shared Family Spaces.",
    bullets: [
      "Built a cross-platform mobile app with React Native (Expo) and TypeScript, backed by Supabase (PostgreSQL) for auth, data, and storage.",
      "Modeled finances around intrinsic Spaces — a permanent private Personal Space auto-provisioned at signup plus shareable Family Spaces joined by a rotatable invite code, with admin/member permissions enforced through Postgres Row-Level Security.",
      "Implemented per-month budgets with auto-carry from the prior month, a DB-enforced category list, and denormalized logger names so a departing member's expenses persist in the shared ledger.",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    link: "https://github.com/OsakaOK/FamFunds",
  },
  {
    name: "PL Predict",
    description:
      "A prediction system for visualizing team performance trends.",
    bullets: [
      "Engineered a prediction system using Python for data processing, Scikit-learn for machine-learning pipelines, and a React front-end to visualize predictions and team performance trends.",
      "Validated model behavior by comparing predicted vs. actual outcomes and analyzing error distributions throughout training.",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "React.js"],
    link: "https://github.com/OsakaOK/PL-Predict",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Instructor Assistant",
    company: "Wilfrid Laurier University",
    location: "Waterloo, ON",
    period: "Sep. 2022 – Dec. 2022",
    bullets: [
      "Supported over 100 students in introductory programming labs, by debugging code, identifying logic errors, and syntax issues.",
      "Reviewed code submissions and provided structured feedback on logic, efficiency, reviewing error messages, and testing edge cases.",
    ],
  },
  {
    role: "Grill Cook",
    company: "Dairy Queen",
    location: "Waterloo, ON",
    period: "June 2023 – Oct. 2024",
    bullets: [
      "Operated in a high-volume, fast-paced environment, consistently fulfilling 100+ orders per shift while maintaining quality and food safety standards.",
      "Coordinated with team members to optimize order flow and reduce wait times during peak hours.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "Just Fix it",
    location: "Kitchener, ON",
    period: "Sep. 2019 – Jan. 2020",
    bullets: [
      "Diagnosed and resolved network connectivity and switch configuration issues by accessing devices through PuTTY and reviewing configuration logs.",
      "Documented network changes, device configurations, and troubleshooting steps, improving traceability and future incident resolution.",
      "Assisted with basic infrastructure support involving routers, switches, and end-user systems in a small office environment.",
    ],
  },
];

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
}

export const education: EducationItem[] = [
  {
    school: "Wilfrid Laurier University",
    degree: "Bachelor of Arts in Computer Science",
    location: "Waterloo, ON",
  },
];
