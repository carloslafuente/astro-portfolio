import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Carlos La Fuente — Software Engineer",
  author: "Carlos La Fuente",
  description:
    "Software Engineer and Backend Developer based in Santa Cruz de la Sierra, Bolivia. I specialize in building scalable, reliable web applications and backend services.",
  lang: "en",
  siteLogo: "/carlos.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/carlos-la-fuente-sanguino/" },
    { text: "Github", href: "https://github.com/carloslafuente" },
  ],
  socialImage: "/",
  canonicalURL: "https://carloslafuente.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Carlos La Fuente",
    specialty: "Software Engineer & Backend Developer",
    summary:
      "Software Engineer based in Santa Cruz de la Sierra, Bolivia. I love writing code and specialize in building backend services and full‑stack web applications.",
    email: "carlos.lafuente.dev@gmail.com",
  },
  experience: [
    {
      company: "FX Replay",
      position: "Backend Developer",
      startDate: "Mar 2025",
      endDate: "Present",
      summary: [
        "Designing and implementing backend services to support a trading replay platform, focusing on performance, scalability, and reliability.",
      ],
    },
    {
      company: "BancoSol",
      position: "Software Architect",
      startDate: "Jun 2024",
      endDate: "Mar 2025",
      summary: [
        "Led software architecture initiatives to modernize banking systems, collaborating with cross-functional teams to design scalable and secure solutions.",
      ],
    },
    {
      company: "escala",
      position: "Full Stack Developer",
      startDate: "Feb 2022",
      endDate: "Jun 2024",
      summary: [
        "Developed and maintained full‑stack features for marketing and CRM products, working across frontend and backend to deliver reliable, user-focused solutions.",
      ],
    },
    {
      company: "BairesDev",
      position: "Associate Software Engineer",
      startDate: "Nov 2021",
      endDate: "Feb 2022",
      summary: [
        "Contributed to international client projects as a software engineer, collaborating in distributed teams and following best practices in code quality and delivery.",
      ],
    },
    {
      company: "Banco Fassil S.A.",
      position: "Technology Development Analyst",
      startDate: "Nov 2020",
      endDate: "Nov 2021",
      summary: [
        "Led a development team to build new features for the bank account opening process, focusing on reliability and user experience.",
      ],
    },
    {
      company: "GearSolutions SRL",
      position: "Full Stack Developer",
      startDate: "Sep 2019",
      endDate: "Sep 2020",
      summary: [
        "Worked as a frontend web developer on multiple client projects, integrating backend services and ensuring high‑quality UI implementations.",
      ],
    },
    {
      company: "Marriott Hotels",
      position: "Information Technology Intern",
      startDate: "Feb 2019",
      endDate: "Jun 2019",
      summary: [
        "Provided technical support, assisted with server administration, and developed internal web applications to solve operational problems.",
      ],
    },
  ],
  projects: [
    {
      name: "FleetFlow App",
      summary: "A fleet management app that allows you to track your fleet of vehicles.",
      linkPreview: "https://fleetflow.app",
      linkSource: "https://github.com/carloslafuente/fleetflow-app",
      image: "/fleetflow.png",
    },
  ],
  about: {
    description: `
I build the systems behind the scenes that users never notice — until something goes wrong. With 5+ years in backend and full-stack development, I've designed and shipped solutions for banks, CRMs, and SaaS products that handle real money, real data, and real users at scale.

My experience spans software architecture, API design, cloud infrastructure (AWS & Azure), and hands-on development in Node.js, NestJS, and .NET Core. At Banco Solidario, I led architecture decisions across security, compliance (PCI DSS, GDPR), and system integrations. At FX Replay, I'm focused on performance and reliability for a trading data platform.
I'm at my best when I'm owning a complex technical problem — from whiteboard to deployment.

🛠 Node.js · NestJS · .NET Core · TypeScript · AWS · PostgreSQL · MongoDB · Docker · Microservices · DDD  
    `,
    image: "/carlos.jpg",
  },
};

// #5755ff
