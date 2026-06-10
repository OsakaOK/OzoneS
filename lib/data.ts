export const personalInfo = {
  name: "Osaka Khamphavong",
  title: "Computer Science Graduate",
  tagline:
    "I build full-stack applications and data-driven tools — from REST APIs to machine learning pipelines.",
  location: "Waterloo, ON",
  email: "osakakpv@gmail.com",
  github: "https://github.com/OsakaOK",
  linkedin: "https://www.linkedin.com/in/osakakpv/",
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
    items: ["React.js", "Flask", "Spring Boot"],
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
  // TODO: confirm exact repo URLs on https://github.com/OsakaOK
  link: string;
}

export const projects: Project[] = [
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
  {
    name: "Snip - URL Shortener",
    description:
      "A REST API that generates, redirects, and manages shortened URLs.",
    bullets: [
      "Built a REST API in Flask that generates, redirects, and manages shortened URLs, backed by a PostgreSQL store with indexed slug lookup for fast retrieval.",
      "Containerized the service with Docker and deployed to Google Cloud Run, configuring environment variables and HTTPS endpoints for production access.",
      "Implemented input validation, custom-slug support, and click counting, returning structured JSON responses with appropriate HTTP status codes.",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "Docker", "Google Cloud"],
    link: "https://github.com/OsakaOK/Snip",
  },
  {
    name: "Sumly - Expense Tracker",
    description:
      "A full-stack expense tracker with secure, per-user data isolation.",
    bullets: [
      "Developed a full-stack expense tracker with a Spring Boot REST API, PostgreSQL data layer, and React front-end for adding, categorizing, and visualizing transactions.",
      "Implemented JWT-based authentication and per-user data isolation, securing endpoints so users can only access their own records.",
      "Designed a normalized schema across users, accounts, and transactions, supporting category filtering and monthly aggregation queries.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "React.js"],
    link: "https://github.com/OsakaOK/Sumly",
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
