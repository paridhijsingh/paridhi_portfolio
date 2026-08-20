import { PROJECTS } from "@/lib/constants";

export type ArchitectureNode = {
  id: string;
  label: string;
  explanation: string;
};

export type ProjectCaseStudy = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  tech: readonly string[];
  github: string;
  demo?: string;
  caseStudyHref?: string;
  isAI: boolean;
  architecture: readonly ArchitectureNode[];
  problem: string;
  approach: string;
  implementation: string;
  results: string;
};

export const PROJECT_CASE_STUDIES: readonly ProjectCaseStudy[] = [
  {
    id: "agentic-insurance-claims",
    title: PROJECTS[0].title,
    tagline:
      "Multi-framework agentic AI for insurance claims automation.",
    description: PROJECTS[0].description,
    highlight: PROJECTS[0].highlight,
    tech: [...PROJECTS[0].tech, "Google ADK"],
    github: PROJECTS[0].href,
    isAI: true,
    architecture: [
      {
        id: "intake",
        label: "Claim Intake",
        explanation:
          "Insurance claims enter the pipeline for agentic automation.",
      },
      {
        id: "orchestration",
        label: "Orchestration",
        explanation:
          "LLM orchestration patterns coordinate multi-step claim handling.",
      },
      {
        id: "routing",
        label: "Agent Routing",
        explanation:
          "LangGraph and SDK-based routers manage agent handoffs across frameworks.",
      },
      {
        id: "frameworks",
        label: "Framework Layer",
        explanation:
          "Explores OpenAI SDK, LangGraph, Anthropic SDK, and Google ADK in parallel.",
      },
      {
        id: "response",
        label: "Response",
        explanation:
          "Processed claim output from the orchestrated agent workflow.",
      },
    ],
    problem:
      "Insurance claims automation requires coordinating multiple LLM frameworks and agent patterns—not a single-model call.",
    approach:
      "Build a multi-framework agentic system that compares orchestration approaches across OpenAI SDK, LangGraph, Anthropic SDK, and Google ADK.",
    implementation:
      "Python-based agentic framework with LangGraph routing, SDK adapters, and stateful multi-turn orchestration for claims workflows.",
    results:
      "Explores orchestration patterns across frameworks. See the repository for implementation details and framework comparisons.",
  },
  {
    id: "medical-insurance-mlops",
    title: PROJECTS[1].title,
    tagline:
      "End-to-end MLOps from regression training to AWS EKS deployment.",
    description: PROJECTS[1].description,
    highlight: PROJECTS[1].highlight,
    tech: PROJECTS[1].tech,
    github: PROJECTS[1].href,
    isAI: true,
    architecture: [
      {
        id: "train",
        label: "Train",
        explanation:
          "Regression model training on medical insurance data.",
      },
      {
        id: "build",
        label: "Build",
        explanation:
          "Docker images package the model and FastAPI serving layer.",
      },
      {
        id: "deploy",
        label: "Deploy",
        explanation:
          "Kubernetes manifests deploy the pipeline to AWS EKS.",
      },
      {
        id: "serve",
        label: "Serve",
        explanation:
          "FastAPI exposes the trained model for inference requests.",
      },
    ],
    problem:
      "A trained regression model needs a reproducible path from development to production on Kubernetes.",
    approach:
      "Pipeline the full MLOps lifecycle—train, containerize, orchestrate, and deploy on AWS EKS with FastAPI.",
    implementation:
      "Python training pipeline, Docker containerization, Kubernetes deployment configs, and FastAPI inference endpoints.",
    results:
      "End-to-end pipeline from model training to production deployment. See the repository for deployment steps and configuration.",
  },
  {
    id: "weather-analytics-engine",
    title: PROJECTS[2].title,
    tagline:
      "Real-time weather data, SQL persistence, and LLM-powered recommendations.",
    description: PROJECTS[2].description,
    highlight: PROJECTS[2].highlight,
    tech: PROJECTS[2].tech,
    github: PROJECTS[2].href,
    caseStudyHref: "/case-studies/rag-ai-assistant",
    isAI: true,
    architecture: [
      {
        id: "api",
        label: "Weather API",
        explanation:
          "Real-time weather APIs supply live data to the application.",
      },
      {
        id: "sql",
        label: "SQL Store",
        explanation:
          "SQL database persists weather records for querying and analysis.",
      },
      {
        id: "processing",
        label: "Processing",
        explanation:
          "FastAPI handles ingestion, transformation, and request routing.",
      },
      {
        id: "llm",
        label: "LLM",
        explanation:
          "OpenAI generates recommendations from weather context.",
      },
      {
        id: "response",
        label: "Response",
        explanation:
          "Recommendations returned to the client via the API layer.",
      },
    ],
    problem:
      "Weather data needs persistent storage and intelligent recommendations—not just raw API responses.",
    approach:
      "Containerize a FastAPI app that ingests weather APIs, stores data in SQL, and layers OpenAI-powered recommendations on top.",
    implementation:
      "Dockerized FastAPI service with SQL persistence, external weather API integration, and OpenAI recommendation endpoints.",
    results:
      "Combines real-time weather ingestion with LLM recommendations. See the repository for API usage and setup.",
  },
  {
    id: "cybersecurity-threat-analysis",
    title: PROJECTS[3].title,
    tagline:
      "Analysis of global cybersecurity threats from 2015–2024.",
    description: PROJECTS[3].description,
    highlight: PROJECTS[3].highlight,
    tech: PROJECTS[3].tech,
    github: PROJECTS[3].href,
    isAI: false,
    architecture: [
      {
        id: "ingest",
        label: "Ingest",
        explanation:
          "Global cybersecurity threat datasets spanning 2015–2024.",
      },
      {
        id: "analyze",
        label: "Analyze",
        explanation:
          "Python and Jupyter notebooks process and explore the data.",
      },
      {
        id: "insights",
        label: "Insights",
        explanation:
          "Patterns in attacks, industry impacts, and security trends.",
      },
    ],
    problem:
      "Understanding decade-long trends in global cybersecurity threats requires structured analysis across years of data.",
    approach:
      "Analyze threat datasets in Jupyter to surface attack patterns, industry impacts, and security trends from 2015–2024.",
    implementation:
      "Python data analysis workflow in Jupyter notebooks with exploratory and summary outputs.",
    results:
      "Insights into attack patterns, industry impacts, and security trends across the 2015–2024 dataset.",
  },
] as const;

export function getProjectById(id: string): ProjectCaseStudy | undefined {
  return PROJECT_CASE_STUDIES.find((project) => project.id === id);
}
