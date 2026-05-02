import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import InstagramIcon from "public/assets/icons/social/instagram.svg";
import GithubIcon from "public/assets/icons/social/github.svg";
import XIcon from "public/assets/icons/social/x.svg";
import LinkedInIcon from "public/assets/icons/social/linkedin.svg";

export const DATA = {
  name: "Sai Krishna",
  initials: "DV",
  url: "https://10xsai.com",
  location: "Andhra Pradesh, India",
  locationLink: "https://g.co/kgs/fAyX7iU",
  description:
    "AI Engineer with 4+ years building production systems — from LLM-powered chatbots and RAG pipelines to autonomous AI agents with tool-calling, workflow orchestration (Temporal), and attack surface management. I build things that work at scale and ship.",
  summaryPart1:
    "I'm **Sai Krishna** — an AI Engineer and builder from Andhra Pradesh, India 🇮🇳.\n\nI've spent 4+ years turning hard problems into working systems — RAG pipelines that actually retrieve the right thing, AI agents with reliable tool-calling, data pipelines that move terabytes without breaking. I gravitate toward the engineering layer that makes AI useful in production, not just in demos.\n\nWhen I'm not deep in a codebase, I'm usually thinking about distributed systems, orchestration, or the next thing I want to build.",
  summaryPart2: `
## What I've built

At **Guidizy** (UK), I led the AI feature set — a LangChain-based chatbot with RAG over customer PDFs, shipped to production. Designed multi-tenant access control, optimized cache strategies, managed a sub-team of 4.

At **LTI Mindtree**, I built ETL pipelines on AWS (S3 + MWAA + ECS) processing multi-terabyte datasets and internal tooling used by thousands of engineers.

Currently building **[Deep Surface](https://deepsurface.ai)** — an AI-native Attack Surface Management platform with LLM agents that call real security tools, Temporal-orchestrated workflows, and JanusGraph for relationship-aware asset modeling.

## What I'm looking for

AI Engineer or Applied ML Engineer roles where LLMs are core product infrastructure, not a feature bolt-on. Interested in agent reliability, RAG quality, and LLM orchestration at scale.

  `,
  avatarUrl: "/me.JPG",
  skills: {
    domains: [
      "AI & Agents",
      "Languages",
      "Backend",
      "Frontend",
      "Data & Orchestration",
      "Databases",
      "DevOps & Cloud",
    ],
    technologies: [
      [
        {
          src: "/assets/icons/ai/langchain.png",
          alt: "langchain logo",
          tooltip: "LangChain",
        },
        {
          src: "/assets/icons/ai/openai.svg",
          alt: "openai logo",
          tooltip: "OpenAI API",
        },
        {
          src: "/assets/icons/ai/anthropic.svg",
          alt: "anthropic logo",
          tooltip: "Anthropic API",
        },
        {
          src: "/assets/icons/ai/llama.png",
          alt: "llama logo",
          tooltip: "Llama",
        },
        {
          src: "/assets/icons/ai/chroma.png",
          alt: "chroma logo",
          tooltip: "Chroma",
        },
      ], // AI & Agents
      [
        {
          src: "/assets/icons/languages/python.png",
          alt: "python logo",
          tooltip: "Python",
        },
        {
          src: "/assets/icons/languages/typescript.png",
          alt: "typescript logo",
          tooltip: "TypeScript",
        },
        {
          src: "/assets/icons/languages/javascript.png",
          alt: "javascript logo",
          tooltip: "JavaScript",
        },
        {
          src: "/assets/icons/languages/java.png",
          alt: "java logo",
          tooltip: "Java",
        },
      ], // Languages
      [
        {
          src: "/assets/icons/backend/fastapi.png",
          alt: "fastapi logo",
          tooltip: "FastAPI",
        },
        {
          src: "/assets/icons/backend/django.png",
          alt: "django logo",
          tooltip: "Django",
        },
        {
          src: "/assets/icons/backend/nodejs.png",
          alt: "nodejs logo",
          tooltip: "Node.js",
        },
        {
          src: "/assets/icons/backend/graphql.png",
          alt: "graphql logo",
          tooltip: "GraphQL",
        },
      ], // Backend
      [
        {
          src: "/assets/icons/frontend/react.png",
          alt: "react logo",
          tooltip: "React",
        },
        {
          src: "/assets/icons/frontend/nextjs.png",
          alt: "nextjs logo",
          tooltip: "Next.js",
        },
        {
          src: "/assets/icons/frontend/tailwindcss.png",
          alt: "tailwindcss logo",
          tooltip: "Tailwind CSS",
        },
        {
          src: "/assets/icons/frontend/redux.png",
          alt: "redux logo",
          tooltip: "Redux",
        },
      ], // Frontend
      [
        {
          src: "/assets/icons/ai/airflow.png",
          alt: "airflow logo",
          tooltip: "Apache Airflow",
        },
        {
          src: "/assets/icons/orchestration/temporal.svg",
          alt: "temporal logo",
          tooltip: "Temporal",
        },
        {
          src: "/assets/icons/orchestration/prefect.svg",
          alt: "prefect logo",
          tooltip: "Prefect",
        },
      ], // Data & Orchestration
      [
        {
          src: "/assets/icons/databases/postgres.png",
          alt: "postgres logo",
          tooltip: "PostgreSQL",
        },
        {
          src: "/assets/icons/databases/redis.png",
          alt: "redis logo",
          tooltip: "Redis",
        },
        {
          src: "/assets/icons/databases/mongodb.png",
          alt: "mongodb logo",
          tooltip: "MongoDB",
        },
        {
          src: "/assets/icons/databases/supabase.svg",
          alt: "supabase logo",
          tooltip: "Supabase",
        },
      ], // Databases
      [
        {
          src: "/assets/icons/cloud/aws.png",
          alt: "aws logo",
          tooltip: "AWS",
        },
        {
          src: "/assets/icons/cloud/docker.png",
          alt: "docker logo",
          tooltip: "Docker",
        },
        {
          src: "/assets/icons/cloud/kubernetes.png",
          alt: "kubernetes logo",
          tooltip: "Kubernetes",
        },
        {
          src: "/assets/icons/cloud/cloudflare.svg",
          alt: "cloudflare logo",
          tooltip: "Cloudflare Workers",
        },
        {
          src: "/assets/icons/cloud/nginx.png",
          alt: "nginx logo",
          tooltip: "Nginx",
        },
      ], // DevOps & Cloud
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "10xsai.official@gmail.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/10xsai/",
        navbar: true,
        icon: LinkedInIcon,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/10xsai.official/",
        navbar: true,
        icon: InstagramIcon,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/10xsai",
        navbar: true,
        icon: GithubIcon,
      },
      X: {
        name: "X",
        url: "https://x.com/10xsai",
        navbar: true,
        icon: XIcon,
      },
    },
  },

  work: [
    {
      company: "Deep Surface",
      href: "https://deepsurface.ai",
      badges: ["Founder", "AI Engineering", "Startup"],
      location: "Remote",
      title: "Founder & AI Engineer",
      logoUrl: "",
      start: "Jun 2025",
      end: "Present",
      description:
        "Building an AI-native Attack Surface Management platform targeting security teams.\n- Conversational AI layer with tool-calling agents (OpenAI + Anthropic APIs) so analysts can query their attack surface in natural language\n- Automated asset discovery via network scanning and OSINT; vulnerability management with CVE correlation\n- Scan workflows orchestrated with Temporal for durability, retries, and auditability\n- Graph-based asset modeling with JanusGraph (domains → IPs → ports → services → CVEs) \n> **Stack**: Python, FastAPI, Temporal, JanusGraph, Supabase, React, Cloudflare Workers",
    },
    {
      company: "Guidizy",
      href: "https://guidizy.com/",
      badges: ["Full Time", "Remote", "United Kingdom", "AI Engineering"],
      location: "Remote",
      title: "Full Stack Engineer & AI Consultant",
      logoUrl: "/guidizy_logo.png",
      start: "Sep 2023",
      end: "Dec 2024",
      description:
        "Led AI engineering for a UK-based conversational AI platform.\n- Architected an LLM-powered chatbot with multi-document RAG (LangChain + FastAPI) enabling real-time interrogation of customer PDFs\n- Designed multi-tenant Role-Based Access Control system across the platform\n- Cut API response times 40% via Redis caching strategies\n- Managed a 4-person engineering sub-team\n> **Stack:** Python, FastAPI, React, LangChain, Chroma, Redis, PostgreSQL",
    },
    {
      company: "LTI Mindtree",
      href: "https://www.ltimindtree.com/",
      badges: ["Full Time", "OnSite", "Hyderabad"],
      location: "Hyderabad, India",
      title: "Full Stack Engineer",
      logoUrl: "/LTIM_logo.png",
      start: "Jun 2021",
      end: "Mar 2023",
      description:
        "Full-stack engineering at a global IT services firm across multiple client projects.\n- Built internal Resource Management System serving 2,000+ engineers across delivery units\n- Engineered ETL pipelines on AWS (S3, MWAA, ECS) orchestrated with Apache Airflow for multi-terabyte datasets\n- Introduced SonarQube quality gates, reducing production bug rate ~30%\n> **Stack:** Django, React, Apache Airflow, AWS",
    },
    {
      company: "CardTap",
      href: "https://cardtap.net/",
      badges: ["Part Time", "Remote", "United States"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/cardtap_logo.png",
      start: "Mar 2021",
      end: "Oct 2022",
      description:
        "Built the full-stack portal for CardTap's IoT lab-access hardware, deployed at Oregon State University.\n- Designed secure multi-role authentication system for 500+ users\n- Built REST APIs for real-time communication with IoT access control devices\n- Set up CI/CD pipeline (GitHub Actions + AWS) cutting deployment time from hours to minutes\n> **Stack:** Django, AWS, Docker, GitHub Actions",
    },
  ],
  education: [
    {
      school: "National Institute of Technology, Raipur",
      href: "https://nitrr.ac.in/",
      degree: "Bachelor of Technology",
      logoUrl: "/nitrr.gif",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Deep Surface — AI-Powered Attack Surface Management",
      href: "https://deepsurface.ai",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "AI-native security platform: automated asset discovery, vulnerability tracking, and conversational threat analysis. Security analysts query their attack surface via natural language agents that call real scanning tools. Temporal-orchestrated workflows ensure scan jobs are durable and auditable. JanusGraph models asset relationships (domains, IPs, ports, services, CVEs).",
      technologies: [
        "Python",
        "FastAPI",
        "Temporal",
        "JanusGraph",
        "OpenAI API",
        "Anthropic Claude API",
        "LangChain",
        "Supabase",
        "React",
        "Cloudflare Workers",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://deepsurface.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Guidizy AI — Conversational RAG Platform",
      href: "https://guidizy.com/",
      dates: "Sep 2023 - Dec 2024",
      active: true,
      description:
        "Production LLM layer for Guidizy: an LLM-powered chatbot with multi-document RAG enabling real-time interrogation of customer PDFs. Semantic chunking, vector storage (Chroma), and re-ranking for accurate retrieval over 100+ page documents. Served to thousands of business users.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "Chroma",
        "OpenAI API",
        "React",
        "Redis",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://guidizy.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portfolio 2023",
      href: "https://2023.10xsai.com/",
      dates: "Apr 2023 - May 2023",
      active: true,
      description:
        "Personal portfolio and a personal blog is always a nice thing to have, so I handcrafted one for myself to showcase my blogs and projects",
      technologies: [
        "Next.js",
        "Typescript",
        "Sass",
        "Prism",
        "MDX",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://2023.10xsai.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/10xsai/portfolio-2023",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://10xsai-portfolio.s3.eu-north-1.amazonaws.com/projects/videos/porfolio_2023.mp4",
    },
    {
      title: "CardTap Portal",
      href: "https://cardtap.net/",
      dates: "Mar 2021 - Oct 2022",
      active: true,
      description:
        "CardTap is a lab equipment access control and management solution. Developed a web portal from the ground up along with a backend for managing IoT devices. Currently deployed at OSU (Oregon State University).",
      technologies: [
        "Python",
        "Django",
        "Django Rest Framework",
        "MySQL",
        "Bootstrap",
        "Docker",
        "Github Actions",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://cardtap.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://10xsai-portfolio.s3.eu-north-1.amazonaws.com/projects/videos/cardtap_video.mov",
    },
    {
      title: "Resource Management Tool",
      href: "#",
      dates: "Jun 2021 - Mar 2023",
      active: true,
      description:
        "Led the development of an internal RMS (Resource Management System) using Django and React. Engineered an ETL pipeline using Apache Airflow, integrating AWS services (S3, S3 Select, MWAA, ECS) for seamless data flow and transformation across large-scale datasets.",
      technologies: [
        "Springboot",
        "Angular",
        "Apache Airflow",
        "AWS",
        "Material UI",
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
