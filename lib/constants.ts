export const SITE = {
  name: "Paridhi Jay Singh",
  shortName: "Paridhi",
  role: "AI Engineer | Data Scientist",
  education: "Statistics & Data Science, University of California, Santa Barbara",
  email: "paridhijaysingh@gmail.com",
  github: "https://github.com/paridhijsingh",
  linkedin: "https://www.linkedin.com/in/paridhijsingh/",
  resume: "/Paridhi-Jay-Singh-Resume.pdf",
} as const;

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Technical Focus",
    body: "ML system design, Retrieval-Augmented Generation, and multi-agent orchestration.",
  },
  {
    title: "Current Work",
    body: "Building stateful agent frameworks and resilient orchestration layers for production workloads.",
  },
  {
    title: "Looking Ahead",
    body: "Designing intelligent systems that stay reliable, observable, and honest at scale.",
  },
] as const;

export const PROJECTS = [
  {
    title: "Insurance Claims AI Workflow",
    description:
      "Fully local insurance-claims workflow that separates deterministic control logic from LLM-based judgment, with LangGraph orchestration, structured decisions, and automated evaluation.",
    highlight: "Agentic systems",
    tech: ["Python", "LangGraph", "Pydantic", "Ollama", "pytest"],
    href: "https://github.com/paridhijsingh/agentic-insurance-claims-framework/tree/main/insurance-claims-v2",
  },
  {
    title: "Agentic Insurance Claims Framework",
    description:
      "Multi-framework agentic AI system for insurance claims automation, exploring LLM orchestration patterns across OpenAI SDK, LangGraph, Anthropic SDK, and Google ADK.",
    highlight: "Agentic systems",
    tech: ["Python", "LangGraph", "OpenAI SDK", "Anthropic SDK"],
    href: "https://github.com/paridhijsingh/agentic-insurance-claims-framework",
  },
  {
    title: "Medical Insurance MLOps",
    description:
      "End-to-end MLOps pipeline from regression model training to production deployment on AWS EKS, using FastAPI, Docker, and Kubernetes.",
    highlight: "MLOps",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "AWS EKS"],
    href: "https://github.com/paridhijsingh/medical-insurance-mlops",
  },
  {
    title: "Weather Analytics Engine",
    description:
      "Containerized FastAPI application combining real-time weather APIs, SQL data persistence, and LLM-powered recommendations with OpenAI.",
    highlight: "Full-stack AI",
    tech: ["Python", "FastAPI", "SQL", "OpenAI", "Docker"],
    href: "https://github.com/paridhijsingh/weather-analytics-engine",
  },
  {
    title: "Cybersecurity Threat Analysis",
    description:
      "Data analysis project examining global cybersecurity threats from 2015–2024, with insights into attack patterns, industry impacts, and security trends.",
    highlight: "Data science",
    tech: ["Python", "Jupyter", "Data Analysis"],
    href: "https://github.com/paridhijsingh/cybersecurity_project",
  },
] as const;

export const SKILLS = [
  "Data Structures & Algorithms",
  "Python",
  "Docker",
  "Kubernetes",
  "LangGraph",
] as const;
